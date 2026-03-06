import { useEffect, useState } from 'react'
import { CreditCard, CheckCircle, Zap, Users, ArrowUpRight, AlertCircle } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'
import AdminLayout from '../../components/AdminLayout'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import { PLANS } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

const stripePromise = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
  : null

// Payment links per plan — set these in your .env as VITE_STRIPE_LINK_*
const PAYMENT_LINKS = {
  starter: import.meta.env.VITE_STRIPE_LINK_STARTER || null,
  growth: import.meta.env.VITE_STRIPE_LINK_GROWTH || null,
  enterprise: import.meta.env.VITE_STRIPE_LINK_ENTERPRISE || null,
}

const CUSTOMER_PORTAL_URL = import.meta.env.VITE_STRIPE_CUSTOMER_PORTAL_URL || null

const PLAN_ORDER = ['starter', 'growth', 'enterprise']

export default function Billing() {
  const { userProfile } = useAuth()
  const { company, fetchCompany } = useCompany()
  const [employees, setEmployees] = useState(0)
  const [loading, setLoading] = useState(true)

  // Load company + employee count
  const { getEmployees } = useCompany()
  useEffect(() => {
    if (!userProfile?.companyId) return
    getEmployees(userProfile.companyId).then((emps) => {
      setEmployees(emps.filter((e) => e.isActive !== false).length)
      setLoading(false)
    })
  }, [userProfile?.companyId])

  const currentPlan = company?.plan || 'starter'
  const planData = PLANS[currentPlan]
  const seatLimit = planData?.seats === Infinity ? null : planData?.seats
  const seatUsage = seatLimit ? Math.min(Math.round((employees / seatLimit) * 100), 100) : 0

  function handleUpgrade(planKey) {
    const link = PAYMENT_LINKS[planKey]
    if (!link) {
      toast.error('Payment link not configured. Add VITE_STRIPE_LINK_' + planKey.toUpperCase() + ' to your .env')
      return
    }
    // Pass prefill data via query params (Stripe Payment Link supports this)
    const url = new URL(link)
    if (company?.billingEmail) url.searchParams.set('prefilled_email', company.billingEmail)
    window.location.href = url.toString()
  }

  function handleManageBilling() {
    if (!CUSTOMER_PORTAL_URL) {
      toast.error('Customer portal URL not configured. Add VITE_STRIPE_CUSTOMER_PORTAL_URL to your .env')
      return
    }
    window.location.href = CUSTOMER_PORTAL_URL
  }

  return (
    <AdminLayout>
      <div className="p-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Billing & Subscription</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your plan and payment details.</p>
        </div>

        {/* Current plan card */}
        <div className="card mb-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Current plan</p>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-gray-900">{planData?.name}</h2>
                <span className="bg-brand-100 text-brand-700 text-xs font-semibold px-2 py-0.5 rounded-full">Active</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {currentPlan === 'enterprise'
                  ? 'Custom pricing · Unlimited employees'
                  : `$${planData?.price}/seat/month`}
              </p>
            </div>
            <div className="flex gap-2">
              {CUSTOMER_PORTAL_URL && (
                <button
                  onClick={handleManageBilling}
                  className="btn-secondary flex items-center gap-2 text-sm"
                >
                  <CreditCard className="w-4 h-4" />
                  Manage billing
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Seat usage */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Users className="w-4 h-4 text-gray-400" />
                Seat usage
              </div>
              <span className="text-sm text-gray-500">
                {loading ? '—' : employees} / {seatLimit ?? '∞'} seats
              </span>
            </div>
            {seatLimit && (
              <>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${seatUsage >= 90 ? 'bg-red-500' : seatUsage >= 75 ? 'bg-amber-500' : 'bg-brand-600'}`}
                    style={{ width: `${seatUsage}%` }}
                  />
                </div>
                {seatUsage >= 90 && (
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-red-600">
                    <AlertCircle className="w-3.5 h-3.5" />
                    You're near your seat limit. Upgrade to add more employees.
                  </div>
                )}
              </>
            )}
          </div>

          {/* Current plan features */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Included in your plan</p>
            <ul className="space-y-2">
              {planData?.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Plan upgrade options */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Change plan</h2>
          <p className="text-sm text-gray-500">Upgrade or switch plans at any time. Changes take effect immediately.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLAN_ORDER.map((key) => {
            const plan = PLANS[key]
            const isCurrent = key === currentPlan
            const currentIdx = PLAN_ORDER.indexOf(currentPlan)
            const thisIdx = PLAN_ORDER.indexOf(key)
            const isUpgrade = thisIdx > currentIdx
            const isDowngrade = thisIdx < currentIdx

            return (
              <div
                key={key}
                className={`card border-2 flex flex-col ${
                  isCurrent
                    ? 'border-brand-600'
                    : key === 'growth'
                    ? 'border-gray-200 hover:border-brand-300'
                    : 'border-gray-200 hover:border-gray-300'
                } transition-colors`}
              >
                {isCurrent && (
                  <div className="flex items-center gap-1 text-brand-600 text-xs font-bold mb-3">
                    <Zap className="w-3.5 h-3.5" />
                    Current plan
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="font-bold text-gray-900 text-base">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold text-gray-900">
                      {key === 'enterprise' ? 'Custom' : `$${plan.price}`}
                    </span>
                    {key !== 'enterprise' && (
                      <span className="text-gray-400 text-xs">/seat/mo</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {plan.seats === Infinity ? 'Unlimited employees' : `Up to ${plan.seats} employees`}
                  </p>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {isCurrent ? (
                  <button disabled className="w-full py-2 rounded-lg text-sm font-medium bg-brand-50 text-brand-600 border border-brand-200 cursor-default">
                    Current plan
                  </button>
                ) : key === 'enterprise' && !PAYMENT_LINKS.enterprise ? (
                  <a
                    href="mailto:sales@fitsquadbusiness.com"
                    className="block text-center w-full py-2 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Contact sales
                  </a>
                ) : (
                  <button
                    onClick={() => handleUpgrade(key)}
                    className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                      isUpgrade
                        ? 'bg-brand-600 text-white hover:bg-brand-700'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {isUpgrade ? `Upgrade to ${plan.name}` : `Switch to ${plan.name}`}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* No Stripe keys warning */}
        {!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY && (
          <div className="mt-6 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">Stripe not configured</p>
              <p>Add your Stripe keys to <code className="bg-amber-100 px-1 rounded">.env</code> to enable payments. See <code className="bg-amber-100 px-1 rounded">.env.example</code> for required variables.</p>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
