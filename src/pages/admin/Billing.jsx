import { useState } from 'react'
import { CheckCircle, CreditCard, RefreshCw, ExternalLink, AlertCircle, Zap } from 'lucide-react'
import AdminLayout from '../../components/AdminLayout'
import { useBilling } from '../../contexts/BillingContext'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import { PLANS } from '../../contexts/CompanyContext'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import toast from 'react-hot-toast'

const PLAN_KEYS = ['starter', 'growth', 'enterprise']

export default function AdminBilling() {
  const { currentUser } = useAuth()
  const { company } = useCompany()
  const { subscription, billingLoading, billingError, subscribe, switchPlan, refreshSubscription } = useBilling()
  const [actionLoading, setActionLoading] = useState(false)
  const [confirmPlan, setConfirmPlan] = useState(null) // plan key awaiting confirmation

  const activePlanKey = subscription?.active ? subscription.plan : company?.plan ?? null

  async function handleSubscribe(planKey) {
    if (!currentUser?.email) return
    setActionLoading(true)
    try {
      if (subscription?.active) {
        await switchPlan(planKey, currentUser.email)
        // Keep company.plan in sync
        await updateDoc(doc(db, 'companies', company.id), { plan: planKey })
        toast.success(`Switched to ${PLANS[planKey].name} plan.`)
      } else {
        await subscribe(planKey, currentUser.email)
        await updateDoc(doc(db, 'companies', company.id), { plan: planKey })
        toast.success(`Subscribed to ${PLANS[planKey].name}!`)
      }
    } catch (err) {
      toast.error(err.message || 'Billing action failed.')
    } finally {
      setActionLoading(false)
      setConfirmPlan(null)
    }
  }

  function formatDate(dateStr) {
    if (!dateStr) return '—'
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <AdminLayout>
      <div className="p-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Billing &amp; Subscription</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your FitSquad Business plan and payment method.</p>
        </div>

        {/* Error banner */}
        {billingError && (
          <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{billingError}</span>
          </div>
        )}

        {/* Current subscription status */}
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-gray-500" />
              Current subscription
            </h2>
            <button
              onClick={refreshSubscription}
              disabled={billingLoading}
              className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1"
            >
              <RefreshCw className={`w-3 h-3 ${billingLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>

          {billingLoading && !subscription ? (
            <div className="animate-pulse space-y-2">
              <div className="h-4 bg-gray-100 rounded w-1/3" />
              <div className="h-4 bg-gray-100 rounded w-1/2" />
            </div>
          ) : subscription?.active ? (
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Active
                </span>
                <span className="text-gray-600 font-medium capitalize">{PLANS[subscription.plan]?.name} plan</span>
              </div>
              <p className="text-gray-500">
                {subscription.willRenew ? 'Renews' : 'Expires'} on{' '}
                <span className="font-medium text-gray-700">{formatDate(subscription.expiresAt)}</span>
              </p>
              {subscription.managementUrl && (
                <a
                  href={subscription.managementUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-600 hover:underline text-xs font-medium mt-1"
                >
                  Manage payment method <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                No active subscription
              </span>
              <span>— choose a plan below to get started.</span>
            </div>
          )}
        </div>

        {/* Plan selection */}
        <h2 className="font-semibold text-gray-900 mb-4">
          {subscription?.active ? 'Change plan' : 'Choose a plan'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLAN_KEYS.map((key) => {
            const plan = PLANS[key]
            const isCurrent = activePlanKey === key
            const isPending = confirmPlan === key

            return (
              <div
                key={key}
                className={`bg-white rounded-2xl p-6 border-2 transition-all ${
                  isCurrent
                    ? 'border-brand-600 shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {isCurrent && (
                  <div className="mb-3">
                    <span className="bg-brand-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                      Current plan
                    </span>
                  </div>
                )}
                <h3 className="text-base font-bold text-gray-900 mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  {key === 'enterprise' ? (
                    <span className="text-2xl font-bold text-gray-900">Custom</span>
                  ) : (
                    <>
                      <span className="text-2xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-400 text-xs">/seat/mo</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-gray-400 mb-4">
                  {plan.seats === Infinity ? 'Unlimited employees' : `Up to ${plan.seats} employees`}
                </p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {isCurrent ? (
                  <button disabled className="w-full py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-400 cursor-default">
                    Current plan
                  </button>
                ) : isPending ? (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-600 text-center">
                      Switch to <strong>{plan.name}</strong>?
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setConfirmPlan(null)}
                        className="flex-1 py-1.5 text-xs rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSubscribe(key)}
                        disabled={actionLoading}
                        className="flex-1 py-1.5 text-xs rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 disabled:opacity-50"
                      >
                        {actionLoading ? 'Processing…' : 'Confirm'}
                      </button>
                    </div>
                  </div>
                ) : key === 'enterprise' ? (
                  <a
                    href="mailto:sales@fitsquadbusiness.com"
                    className="block text-center w-full py-2 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Contact sales
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      if (subscription?.active) {
                        setConfirmPlan(key)
                      } else {
                        handleSubscribe(key)
                      }
                    }}
                    disabled={actionLoading || billingLoading}
                    className="w-full py-2 rounded-lg text-sm font-medium bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    {subscription?.active ? 'Switch to this plan' : 'Subscribe'}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <p className="text-xs text-gray-400 mt-6 text-center">
          Payments are securely processed via RevenueCat &amp; Stripe. Cancel anytime.
        </p>
      </div>
    </AdminLayout>
  )
}
