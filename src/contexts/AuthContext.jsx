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
    const snap = await getDoc(doc(db, 'users', uid))
    if (snap.exists()) {
      const profile = { id: uid, ...snap.data() }
      setUserProfile(profile)
      return profile
    }
    return null
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (registeringRef.current) {
        // register() manages state itself; skip to avoid race condition
        setLoading(false)
        return
      }
      if (user) {
        setCurrentUser({ ...user, uid: user.uid })
        await fetchUserProfile(user.uid)
      } else {
        setCurrentUser(null)
        setUserProfile(null)
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
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
