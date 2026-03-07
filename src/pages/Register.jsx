import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Check, Zap } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { PLANS } from '../contexts/CompanyContext'
import toast from 'react-hot-toast'

const planOrder = ['starter', 'growth', 'enterprise']

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const defaultPlan = planOrder.includes(searchParams.get('plan')) ? searchParams.get('plan') : 'growth'

  const [step, setStep] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan)
  const [form, setForm] = useState({ displayName: '', email: '', password: '', confirm: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirm) {
      setError('Passwords do not match.')
      return
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    setLoading(true)
    try {
      sessionStorage.setItem('selectedPlan', selectedPlan)
      await register(form.email, form.password, form.displayName)
      navigate('/setup')
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists.')
      } else {
        setError('Failed to create account. Please try again.')
      }
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-gray-900 text-lg">FitSquad <span className="text-brand-600">Business</span></span>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2].map((s) => (
            <div key={s} className={`flex items-center ${s < 2 ? 'gap-2' : ''}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${s <= step ? 'bg-brand-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
                {s < step ? <Check className="w-3.5 h-3.5" /> : s}
              </div>
              {s < 2 && <div className={`w-16 h-0.5 ${step > s ? 'bg-brand-600' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">Choose your plan</h1>
            <p className="text-gray-500 text-center text-sm mb-8">You can change plans any time.</p>
            <div className="grid gap-4 mb-6">
              {planOrder.map((key) => {
                const plan = PLANS[key]
                const selected = selectedPlan === key
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedPlan(key)}
                    className={`text-left p-4 rounded-xl border-2 transition-all ${selected ? 'border-brand-600 bg-brand-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-900">{plan.name}</span>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-xs text-gray-400">/seat/mo</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      {plan.seats === Infinity ? 'Unlimited employees' : `Up to ${plan.seats} employees`}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {plan.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
                          <Check className="w-3 h-3 text-brand-600 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </button>
                )
              })}
            </div>
            <button onClick={() => setStep(2)} className="btn-primary w-full py-2.5">
              Continue with {PLANS[selectedPlan].name}
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-brand-600 font-medium hover:underline">Sign in</Link>
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="card">
            <h1 className="text-xl font-bold text-gray-900 mb-1">Create your account</h1>
            <p className="text-sm text-gray-500 mb-6">
              {PLANS[selectedPlan].name} plan · ${PLANS[selectedPlan].price}/seat/mo
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                <input
                  required
                  className="input"
                  placeholder="Jane Smith"
                  value={form.displayName}
                  onChange={(e) => setForm({ ...form, displayName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work email</label>
                <input
                  type="email"
                  required
                  className="input"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  required
                  className="input"
                  placeholder="At least 6 characters"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                <input
                  type="password"
                  required
                  className="input"
                  placeholder="••••••••"
                  value={form.confirm}
                  onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                />
              </div>
              <div className="flex gap-3 pt-1">
                <button type="button" onClick={() => setStep(1)} className="flex-1 py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Back
                </button>
                <button type="submit" disabled={loading} className="flex-1 btn-primary py-2.5">
                  {loading ? 'Creating account…' : 'Create account'}
                </button>
              </div>
            </form>

            <p className="text-center text-xs text-gray-400 mt-4">
              By creating an account you agree to our Terms of Service.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
