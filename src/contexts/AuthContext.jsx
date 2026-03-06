import { createContext, useContext, useEffect, useRef, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

const AuthContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const registeringRef = useRef(false)

  async function register(email, password, displayName) {
    registeringRef.current = true
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(user, { displayName })
      await setDoc(doc(db, 'users', user.uid), {
        email,
        displayName,
        role: null,
        companyId: null,
        department: '',
        isActive: true,
      })
      const profile = { id: user.uid, email, displayName, role: null, companyId: null, department: '', isActive: true }
      setCurrentUser({ ...user, uid: user.uid })
      setUserProfile(profile)
      return { ...user, uid: user.uid }
    } finally {
      registeringRef.current = false
    }
  }

  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  async function logout() {
    setUserProfile(null)
    return signOut(auth)
  }

  async function fetchUserProfile(uid) {
    try {
      const snap = await getDoc(doc(db, 'users', uid))
      if (snap.exists()) {
        const profile = { id: uid, ...snap.data() }
        setUserProfile(profile)
        return profile
      }
    } catch (err) {
      console.error('Failed to fetch user profile:', err)
    }
    return null
  }

  async function ensureUserProfile(user) {
    let profile = await fetchUserProfile(user.uid)
    if (!profile) {
      // Auto-create Firestore doc for users who registered before the migration
      const newProfile = {
        email: user.email || '',
        displayName: user.displayName || '',
        role: null,
        companyId: null,
        department: '',
        isActive: true,
      }
      try {
        await setDoc(doc(db, 'users', user.uid), newProfile)
        profile = { id: user.uid, ...newProfile }
        setUserProfile(profile)
      } catch (err) {
        console.error('Failed to create user profile:', err)
      }
    }
    return profile
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (registeringRef.current) {
        setLoading(false)
        return
      }
      try {
        if (user) {
          setCurrentUser({ ...user, uid: user.uid })
          await ensureUserProfile(user)
        } else {
          setCurrentUser(null)
          setUserProfile(null)
        }
      } catch (err) {
        console.error('Auth state change error:', err)
      }
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    userProfile,
    setUserProfile,
    register,
    login,
    logout,
    fetchUserProfile,
    ensureUserProfile,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
