import { createContext, useContext, useState, useEffect } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

const AuthContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  // Only track auth state here — no profile fetching inside this callback
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ?? null)
      if (!user) setUserProfile(null)
      setAuthLoading(false)
    })
    return unsubscribe
  }, [])

  // Fetch Firestore profile separately whenever the auth user changes
  useEffect(() => {
    if (!currentUser) return
    getDoc(doc(db, 'users', currentUser.uid))
      .then((snap) => {
        if (snap.exists()) setUserProfile({ id: snap.id, ...snap.data() })
        else setUserProfile(null)
      })
      .catch(() => setUserProfile(null))
  }, [currentUser])

  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  async function register(email, password, displayName) {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    const profile = {
      displayName,
      email,
      role: null,
      companyId: null,
      department: '',
      isActive: true,
      createdAt: new Date().toISOString(),
    }
    await setDoc(doc(db, 'users', cred.user.uid), profile)
    setUserProfile({ id: cred.user.uid, ...profile })
    return cred
  }

  async function logout() {
    setCurrentUser(null)
    setUserProfile(null)
    await signOut(auth)
  }

  const value = {
    currentUser,
    userProfile,
    setUserProfile,
    authLoading,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
