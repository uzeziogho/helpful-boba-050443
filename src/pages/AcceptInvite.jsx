import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Zap, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { supabase } from '../supabase'
import { useAuth } from '../contexts/AuthContext'
import { useCompany } from '../contexts/CompanyContext'

export default function AcceptInvite() {
  const { token } = useParams()
  const { register, setUserProfile } = useAuth()
  const { fetchCompany } = useCompany()
  const navigate = useNavigate()

  const [invite, setInvite] = useState(null)
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ displayName: '', password: '' })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    async function fetchInvite() {
      try {
        // token is the invitation row UUID used as the invite link identifier
        const { data, error } = await supabase
          .from('invitations')
          .select('id, companyId:company_id, email, role, department')
          .eq('id', token)
          .eq('status', 'pending')
          .single()

        if (error || !data) {
          toast.error('Invitation not found or already used.')
          navigate('/login')
          return
        }
        setInvite(data)
      } catch {
        toast.error('Failed to load invitation.')
        navigate('/login')
      }
      setLoading(false)
    }
    fetchInvite()
  }, [token])

  async function handleAccept(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const user = await register(invite.email, form.password, form.displayName)

      // Link user to company with role from invite
      await supabase
        .from('users')
        .update({
          company_id: invite.companyId,
          role: invite.role || 'employee',
          department: invite.department || '',
        })
        .eq('id', user.id)

      setUserProfile((prev) => ({
        ...prev,
        companyId: invite.companyId,
        role: invite.role || 'employee',
      }))

      // Mark invite as accepted
      await supabase
        .from('invitations')
        .update({ status: 'accepted' })
        .eq('id', invite.id)

      await fetchCompany(invite.companyId)
      toast.success('Welcome to the team!')
      navigate('/me')
    } catch (err) {
      toast.error(err.message || 'Failed to accept invitation.')
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading invitation…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-7 h-7 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">You're invited!</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Join your team's wellness program on FitSquad Business.
          </p>
          <p className="text-xs text-brand-600 font-medium mt-2 bg-brand-50 inline-block px-3 py-1 rounded-full">
            {invite.email}
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleAccept} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
              <input
                required
                className="input"
                placeholder="Jane Smith"
                value={form.displayName}
                onChange={(e) => setForm({ ...form, displayName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Create a password</label>
              <input
                type="password"
                required
                minLength={8}
                className="input"
                placeholder="Minimum 8 characters"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <button type="submit" disabled={submitting} className="btn-primary w-full py-2.5">
              {submitting ? 'Joining…' : 'Accept invitation & join'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
