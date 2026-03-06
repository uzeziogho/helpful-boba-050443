import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Building2, Zap } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext'
import { useCompany } from '../contexts/CompanyContext'
import { supabase } from '../supabase'

export default function CompanySetup() {
  const { currentUser, setUserProfile } = useAuth()
  const { createCompany } = useCompany()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    domain: '',
    billingEmail: currentUser?.email || '',
  })
  const [loading, setLoading] = useState(false)

  const plan = sessionStorage.getItem('selectedPlan') || 'growth'

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const company = await createCompany({
        name: form.name,
        domain: form.domain,
        plan,
        adminId: currentUser.uid,
        billingEmail: form.billingEmail,
      })

      // Update the user's profile with admin role + companyId
      const { error } = await supabase
        .from('users')
        .update({ company_id: company.id, role: 'admin' })
        .eq('id', currentUser.uid)
      if (error) throw error

      setUserProfile((prev) => ({ ...prev, companyId: company.id, role: 'admin' }))
      sessionStorage.removeItem('selectedPlan')
      toast.success(`Welcome to FitSquad Business, ${form.name}!`)
      navigate('/admin')
    } catch (err) {
      toast.error(err.message || 'Failed to create company.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-7 h-7 text-brand-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Set up your company</h1>
          <p className="text-gray-500 mt-1 text-sm">This takes less than a minute.</p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company name <span className="text-red-500">*</span></label>
              <input
                required
                className="input"
                placeholder="Acme Corp"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company domain <span className="text-gray-400">(optional)</span></label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-brand-500 focus-within:border-transparent">
                <span className="px-3 text-gray-400 text-sm bg-gray-50 border-r border-gray-300 py-2">@</span>
                <input
                  className="flex-1 px-3 py-2 text-sm focus:outline-none"
                  placeholder="acmecorp.com"
                  value={form.domain}
                  onChange={(e) => setForm({ ...form, domain: e.target.value })}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">Used to auto-verify employee email addresses</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Billing email <span className="text-red-500">*</span></label>
              <input
                type="email"
                required
                className="input"
                value={form.billingEmail}
                onChange={(e) => setForm({ ...form, billingEmail: e.target.value })}
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600 flex items-start gap-2">
              <Zap className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
              <span>Plan selected: <strong className="capitalize">{plan}</strong>. You'll be able to invite employees right after setup.</span>
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full py-2.5">
              {loading ? 'Setting up…' : 'Create company workspace'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
