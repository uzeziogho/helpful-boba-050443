import { createContext, useContext, useState } from 'react'
import {
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'

const CompanyContext = createContext(null)

export function useCompany() {
  return useContext(CompanyContext)
}

// ─── Firestore data model ────────────────────────────────────────────────────
//
// companies/{companyId}
//   name, domain, plan (starter|growth|enterprise), adminId,
//   createdAt, employeeSeats, billingEmail
//
// users/{uid}  (extended from AuthContext)
//   email, displayName, role (admin|manager|employee),
//   companyId, department, createdAt, isActive
//
// invitations/{invitationId}
//   companyId, email, role, department, invitedBy, createdAt, status (pending|accepted|expired)
//
// challenges/{challengeId}
//   companyId, title, description, type (workouts|minutes|streak),
//   goal (number), startDate, endDate, createdBy, createdAt, isActive
//
// workouts/{workoutId}
//   userId, userName, companyId, challengeId (optional), type,
//   duration, notes, createdAt
//
// ─────────────────────────────────────────────────────────────────────────────

export const PLANS = {
  starter: {
    name: 'Starter',
    price: 5,
    seats: 25,
    features: ['Up to 25 employees', 'Basic wellness challenges', 'Monthly reports', 'Email support'],
  },
  growth: {
    name: 'Growth',
    price: 8,
    seats: 100,
    features: ['Up to 100 employees', 'Advanced challenges & leaderboards', 'Real-time analytics', 'Department segmentation', 'Priority support'],
  },
  enterprise: {
    name: 'Enterprise',
    price: 12,
    seats: Infinity,
    features: ['Unlimited employees', 'Custom challenges', 'SSO integration', 'Dedicated CSM', 'SLA guarantee', 'API access'],
  },
}

export function CompanyProvider({ children }) {
  const [company, setCompany] = useState(null)

  async function createCompany({ name, domain, plan, adminId, billingEmail }) {
    const ref = await addDoc(collection(db, 'companies'), {
      name,
      domain: domain || '',
      plan,
      adminId,
      billingEmail,
      employeeSeats: PLANS[plan].seats === Infinity ? 9999 : PLANS[plan].seats,
      createdAt: serverTimestamp(),
    })
    const snap = await getDoc(ref)
    const data = { id: snap.id, ...snap.data() }
    setCompany(data)
    return data
  }

  async function fetchCompany(companyId) {
    const snap = await getDoc(doc(db, 'companies', companyId))
    if (snap.exists()) {
      const data = { id: snap.id, ...snap.data() }
      setCompany(data)
      return data
    }
    return null
  }

  // ── Employees ──────────────────────────────────────────────────────────────

  async function getEmployees(companyId) {
    const q = query(
      collection(db, 'users'),
      where('companyId', '==', companyId),
      orderBy('displayName')
    )
    const snap = await getDocs(q)
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
  }

  async function inviteEmployee({ companyId, email, role, department, invitedBy }) {
    const existing = query(
      collection(db, 'invitations'),
      where('companyId', '==', companyId),
      where('email', '==', email),
      where('status', '==', 'pending')
    )
    const snap = await getDocs(existing)
    if (!snap.empty) throw new Error('Invitation already pending for this email.')

    return addDoc(collection(db, 'invitations'), {
      companyId,
      email,
      role: role || 'employee',
      department: department || '',
      invitedBy,
      createdAt: serverTimestamp(),
      status: 'pending',
    })
  }

  async function deactivateEmployee(uid) {
    return updateDoc(doc(db, 'users', uid), { isActive: false })
  }

  async function updateEmployeeRole(uid, role, department) {
    return updateDoc(doc(db, 'users', uid), { role, department })
  }

  // ── Challenges ─────────────────────────────────────────────────────────────

  async function getChallenges(companyId) {
    const q = query(
      collection(db, 'challenges'),
      where('companyId', '==', companyId),
      orderBy('createdAt', 'desc')
    )
    const snap = await getDocs(q)
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
  }

  async function createChallenge({ companyId, title, description, type, goal, startDate, endDate, createdBy }) {
    return addDoc(collection(db, 'challenges'), {
      companyId,
      title,
      description,
      type,
      goal: Number(goal),
      startDate,
      endDate,
      createdBy,
      createdAt: serverTimestamp(),
      isActive: true,
    })
  }

  async function toggleChallenge(challengeId, isActive) {
    return updateDoc(doc(db, 'challenges', challengeId), { isActive })
  }

  // ── Workouts ───────────────────────────────────────────────────────────────

  async function logWorkout({ userId, userName, companyId, challengeId, type, duration, notes }) {
    return addDoc(collection(db, 'workouts'), {
      userId,
      userName,
      companyId,
      challengeId: challengeId || null,
      type,
      duration: Number(duration),
      notes: notes || '',
      createdAt: serverTimestamp(),
    })
  }

  async function getWorkouts(companyId, limit = 50) {
    const q = query(
      collection(db, 'workouts'),
      where('companyId', '==', companyId),
      orderBy('createdAt', 'desc')
    )
    const snap = await getDocs(q)
    return snap.docs.slice(0, limit).map((d) => ({ id: d.id, ...d.data() }))
  }

  async function getMyWorkouts(userId) {
    const q = query(
      collection(db, 'workouts'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    )
    const snap = await getDocs(q)
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
  }

  // ── Reports ────────────────────────────────────────────────────────────────

  async function getParticipationReport(companyId) {
    const [workouts, employees] = await Promise.all([
      getWorkouts(companyId, 1000),
      getEmployees(companyId),
    ])

    const activeEmployeeIds = new Set(workouts.map((w) => w.userId))
    const totalMinutes = workouts.reduce((sum, w) => sum + (w.duration || 0), 0)

    const byEmployee = {}
    workouts.forEach((w) => {
      if (!byEmployee[w.userId]) {
        byEmployee[w.userId] = { name: w.userName, sessions: 0, minutes: 0 }
      }
      byEmployee[w.userId].sessions += 1
      byEmployee[w.userId].minutes += w.duration || 0
    })

    const leaderboard = Object.values(byEmployee)
      .sort((a, b) => b.minutes - a.minutes)
      .slice(0, 10)

    return {
      totalEmployees: employees.filter((e) => e.isActive).length,
      activeParticipants: activeEmployeeIds.size,
      totalSessions: workouts.length,
      totalMinutes,
      participationRate: employees.length
        ? Math.round((activeEmployeeIds.size / employees.filter((e) => e.isActive).length) * 100)
        : 0,
      leaderboard,
    }
  }

  const value = {
    company,
    setCompany,
    createCompany,
    fetchCompany,
    getEmployees,
    inviteEmployee,
    deactivateEmployee,
    updateEmployeeRole,
    getChallenges,
    createChallenge,
    toggleChallenge,
    logWorkout,
    getWorkouts,
    getMyWorkouts,
    getParticipationReport,
  }

  return <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
}
