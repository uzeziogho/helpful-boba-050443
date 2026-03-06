import { createContext, useContext, useState } from 'react'
import { supabase } from '../supabase'

const CompanyContext = createContext(null)

export function useCompany() {
  return useContext(CompanyContext)
}

// ─── Supabase / Postgres data model ─────────────────────────────────────────
//
// companies         – name, domain, plan, admin_id, billing_email, employee_seats
// users             – id (= auth.users.id), email, display_name, role,
//                     company_id, department, is_active
// invitations       – company_id, email, role, department, invited_by, status
// challenges        – company_id, title, description, type, goal,
//                     start_date, end_date, created_by, is_active
// workouts          – user_id, user_name, company_id, challenge_id,
//                     type, duration, notes
//
// Column aliases in .select() keep all returned objects in camelCase so the
// UI components require zero changes.
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

const COMPANY_SELECT =
  'id, name, domain, plan, adminId:admin_id, billingEmail:billing_email, employeeSeats:employee_seats'

const USER_SELECT =
  'id, email, displayName:display_name, role, companyId:company_id, department, isActive:is_active'

const CHALLENGE_SELECT =
  'id, companyId:company_id, title, description, type, goal, startDate:start_date, endDate:end_date, createdBy:created_by, isActive:is_active, createdAt:created_at'

const WORKOUT_SELECT =
  'id, userId:user_id, userName:user_name, companyId:company_id, challengeId:challenge_id, type, duration, notes, createdAt:created_at'

export function CompanyProvider({ children }) {
  const [company, setCompany] = useState(null)

  async function createCompany({ name, domain, plan, adminId, billingEmail }) {
    const { data, error } = await supabase
      .from('companies')
      .insert({
        name,
        domain: domain || '',
        plan,
        admin_id: adminId,
        billing_email: billingEmail,
        employee_seats: PLANS[plan].seats === Infinity ? 9999 : PLANS[plan].seats,
      })
      .select(COMPANY_SELECT)
      .single()
    if (error) throw error
    setCompany(data)
    return data
  }

  async function fetchCompany(companyId) {
    const { data } = await supabase
      .from('companies')
      .select(COMPANY_SELECT)
      .eq('id', companyId)
      .single()
    if (data) {
      setCompany(data)
      return data
    }
    return null
  }

  // ── Employees ──────────────────────────────────────────────────────────────

  async function getEmployees(companyId) {
    const { data } = await supabase
      .from('users')
      .select(USER_SELECT)
      .eq('company_id', companyId)
      .order('display_name')
    return data || []
  }

  async function inviteEmployee({ companyId, email, role, department, invitedBy }) {
    // Check for existing pending invitation
    const { data: existing } = await supabase
      .from('invitations')
      .select('id')
      .eq('company_id', companyId)
      .eq('email', email)
      .eq('status', 'pending')
      .maybeSingle()
    if (existing) throw new Error('Invitation already pending for this email.')

    const { data, error } = await supabase
      .from('invitations')
      .insert({
        company_id: companyId,
        email,
        role: role || 'employee',
        department: department || '',
        invited_by: invitedBy,
        status: 'pending',
      })
      .select('id')
      .single()
    if (error) throw error
    return data
  }

  async function deactivateEmployee(uid) {
    const { error } = await supabase
      .from('users')
      .update({ is_active: false })
      .eq('id', uid)
    if (error) throw error
  }

  async function updateEmployeeRole(uid, role, department) {
    const { error } = await supabase
      .from('users')
      .update({ role, department })
      .eq('id', uid)
    if (error) throw error
  }

  // ── Challenges ─────────────────────────────────────────────────────────────

  async function getChallenges(companyId) {
    const { data } = await supabase
      .from('challenges')
      .select(CHALLENGE_SELECT)
      .eq('company_id', companyId)
      .order('created_at', { ascending: false })
    return data || []
  }

  async function createChallenge({ companyId, title, description, type, goal, startDate, endDate, createdBy }) {
    const { data, error } = await supabase
      .from('challenges')
      .insert({
        company_id: companyId,
        title,
        description,
        type,
        goal: Number(goal),
        start_date: startDate,
        end_date: endDate,
        created_by: createdBy,
        is_active: true,
      })
      .select(CHALLENGE_SELECT)
      .single()
    if (error) throw error
    return data
  }

  async function toggleChallenge(challengeId, isActive) {
    const { error } = await supabase
      .from('challenges')
      .update({ is_active: isActive })
      .eq('id', challengeId)
    if (error) throw error
  }

  // ── Workouts ───────────────────────────────────────────────────────────────

  async function logWorkout({ userId, userName, companyId, challengeId, type, duration, notes }) {
    const { data, error } = await supabase
      .from('workouts')
      .insert({
        user_id: userId,
        user_name: userName,
        company_id: companyId,
        challenge_id: challengeId || null,
        type,
        duration: Number(duration),
        notes: notes || '',
      })
      .select('id')
      .single()
    if (error) throw error
    return data
  }

  async function getWorkouts(companyId, limit = 50) {
    const { data } = await supabase
      .from('workouts')
      .select(WORKOUT_SELECT)
      .eq('company_id', companyId)
      .order('created_at', { ascending: false })
      .limit(limit)
    return data || []
  }

  async function getMyWorkouts(userId) {
    const { data } = await supabase
      .from('workouts')
      .select(WORKOUT_SELECT)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    return data || []
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

    const activeEmployees = employees.filter((e) => e.isActive)
    return {
      totalEmployees: activeEmployees.length,
      activeParticipants: activeEmployeeIds.size,
      totalSessions: workouts.length,
      totalMinutes,
      participationRate: activeEmployees.length
        ? Math.round((activeEmployeeIds.size / activeEmployees.length) * 100)
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
