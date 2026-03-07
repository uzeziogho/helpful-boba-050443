import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext'
import { Zap, CheckCircle, XCircle } from 'lucide-react'
import toast from 'react-hot-toast'

export default function AcceptInvite() {
  const { token } = useParams()
  const { currentUser, register, login, setUserProfile } = useAuth()
  const navigate = useNavigate()

  const [invitation, setInvitation] = useState(null)
  const [status, setStatus] = useState('loading') // loading | found | error
  const [mode, setMode] = useState('register') // register | login
  const [form, setForm] = useState({ displayName: '', password: '', confirm: '' })
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const snap = await getDoc(doc(db, 'invitations', token))
        if (!snap.exists() || snap.data().status !== 'pending') {
          setStatus('error')
          return
        }
        setInvitation({ id: snap.id, ...snap.data() })
        setStatus('found')
      } catch {
        setStatus('error')
      }
    }
    load()
  }, [token])

  async function acceptInvite(uid) {
    await updateDoc(doc(db, 'users', uid), {
      companyId: invitation.companyId,
      role: invitation.role || 'employee',
      department: invitation.department || '',
      isActive: true,
    })
    await updateDoc(doc(db, 'invitations', token), { status: 'accepted' })
    setUserProfile((prev) => ({
      ...prev,
      companyId: invitation.companyId,
      role: invitation.role || 'employee',
      department: invitation.department || '',
    }))
    toast.success('Welcome to the team!')
    navigate('/me')
  }

  async function handleRegister(e) {
    e.preventDefault()
    if (form.password !== form.confirm) {
      toast.error('Passwords do not match.')
      return
    }
    setSubmitting(true)
    try {
      const cred = await register(invitation.email, form.password, form.displayName)
      await acceptInvite(cred.user.uid)
    } catch (err) {
      toast.error(err.message || 'Failed to create account.')
    }
    setSubmitting(false)
  }

  async function handleLogin(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const cred = await login(loginForm.email, loginForm.password)
      await acceptInvite(cred.user.uid)
    } catch (err) {
      toast.error('Invalid email or password.')
    }
    setSubmitting(false)
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <XCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-gray-900 mb-2">Invitation not found</h1>
          <p className="text-gray-500 text-sm">This invitation link is invalid or has already been used.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-gray-900 text-lg">FitSquad <span className="text-brand-600">Business</span></span>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 p-3 bg-brand-50 rounded-lg mb-6">
            <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">You've been invited!</p>
              <p className="text-xs text-gray-500">Join as <strong>{invitation.email}</strong></p>
            </div>
          </div>

          <div className="flex gap-2 mb-5">
            <button
              type="button"
              onClick={() => setMode('register')}
              className={`flex-1 py-2 text-sm rounded-lg font-medium transition-colors ${mode === 'register' ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              New account
            </button>
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`flex-1 py-2 text-sm rounded-lg font-medium transition-colors ${mode === 'login' ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Existing account
            </button>
          </div>

          {mode === 'register' ? (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                <input required className="input" placeholder="Jane Smith" value={form.displayName} onChange={(e) => setForm({ ...form, displayName: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input className="input bg-gray-50" value={invitation.email} readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" required className="input" placeholder="At least 6 characters" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                <input type="password" required className="input" placeholder="••••••••" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
              </div>
              <button type="submit" disabled={submitting} className="btn-primary w-full py-2.5">
                {submitting ? 'Joining…' : 'Create account & join'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" required className="input" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" required className="input" placeholder="••••••••" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} />
              </div>
              <button type="submit" disabled={submitting} className="btn-primary w-full py-2.5">
                {submitting ? 'Joining…' : 'Sign in & join team'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
