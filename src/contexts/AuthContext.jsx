import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../supabase'

const AuthContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

// Selects all profile fields with camelCase aliases
const PROFILE_SELECT =
  'id, email, displayName:display_name, role, companyId:company_id, department, isActive:is_active'

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  async function register(email, password, displayName) {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) throw error

    // Insert profile row (the DB trigger is a safety net; we do it explicitly too)
    const { error: profileError } = await supabase.from('users').upsert({
      id: data.user.id,
      email,
      display_name: displayName,
      is_active: true,
    })
    if (profileError) throw profileError

    return { ...data.user, uid: data.user.id }
  }

  async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  }

  async function logout() {
    setUserProfile(null)
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  async function fetchUserProfile(uid) {
    const { data } = await supabase
      .from('users')
      .select(PROFILE_SELECT)
      .eq('id', uid)
      .single()

    if (data) {
      setUserProfile(data)
      return data
    }
    return null
  }

  useEffect(() => {
    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      const user = session?.user ?? null
      setCurrentUser(user ? { ...user, uid: user.id } : null)
      if (user) {
        fetchUserProfile(user.id).finally(() => setLoading(false))
      } else {
        setLoading(false)
      }
    })

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const user = session?.user ?? null
        setCurrentUser(user ? { ...user, uid: user.id } : null)
        if (user) {
          await fetchUserProfile(user.id)
        } else {
          setUserProfile(null)
        }
      }
    )

    return () => subscription.unsubscribe()
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
