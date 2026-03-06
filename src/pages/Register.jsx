import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Zap, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext'
import { PLANS } from '../contexts/CompanyContext'

const PLAN_KEYS = ['starter', 'growth', 'enterprise']

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [step, setStep] = useState(1) // 1 = account, 2 = plan
  const [form, setForm] = useState({
    displayName: '',
    email: '',
    password: '',
    plan: 'growth',
  })
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
      return
    }
    setLoading(true)
    try {
      await register(form.email, form.password, form.displayName)
      // Store selected plan in sessionStorage so CompanySetup can read it
      sessionStorage.setItem('selectedPlan', form.plan)
      navigate('/setup')
    } catch (err) {
      toast.error(err.message || 'Registration failed.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-lg">FitBud <span className="text-brand-600">Business</span></span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Start your free trial</h1>
          <p className="text-gray-500 mt-1 text-sm">30 days free · No credit card required</p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                s < step ? 'bg-green-500 text-white' : s === step ? 'bg-brand-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {s < step ? <CheckCircle className="w-4 h-4" /> : s}
              </div>
              <span className={`text-xs ${s === step ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                {s === 1 ? 'Your account' : 'Choose plan'}
              </span>
              {s < 2 && <div className="w-8 h-px bg-gray-200 mx-1" />}
            </div>
          ))}
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                  <input
                    name="displayName"
                    required
                    className="input"
                    placeholder="Jane Smith"
                    value={form.displayName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    minLength={8}
                    className="input"
                    placeholder="Minimum 8 characters"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-2.5">
                  Continue
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <p className="text-sm font-medium text-gray-700 mb-2">Select a plan</p>
                <div className="space-y-3">
                  {PLAN_KEYS.map((key) => {
                    const plan = PLANS[key]
                    return (
                      <label
                        key={key}
                        className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                          form.plan === key ? 'border-brand-600 bg-brand-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="plan"
                          value={key}
                          checked={form.plan === key}
                          onChange={handleChange}
                          className="mt-0.5"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-900">{plan.name}</span>
                            <span className="text-sm font-bold text-gray-900">
                              {key === 'enterprise' ? 'Custom' : `$${plan.price}/seat/mo`}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {plan.seats === Infinity ? 'Unlimited employees' : `Up to ${plan.seats} employees`}
                          </p>
                        </div>
                      </label>
                    )
                  })}
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setStep(1)} className="btn-secondary flex-1 py-2.5">
                    Back
                  </button>
                  <button type="submit" disabled={loading} className="btn-primary flex-1 py-2.5">
                    {loading ? 'Creating account…' : 'Start free trial'}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-brand-600 font-medium hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
