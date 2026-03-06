import { useEffect, useState, useCallback } from 'react'
import { CreditCard, CheckCircle, Zap, Users, ArrowUpRight, AlertCircle, RefreshCw } from 'lucide-react'
import { Purchases } from '@revenuecat/purchases-js'
import AdminLayout from '../../components/AdminLayout'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import { PLANS } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

const RC_API_KEY = import.meta.env.VITE_REVENUECAT_API_KEY

// RC entitlement identifiers must match what you set up in the RevenueCat dashboard.
// By convention we use the same keys as PLANS: 'starter' | 'growth' | 'enterprise'
const PLAN_ORDER = ['starter', 'growth', 'enterprise']

function getPurchases(appUserId) {
  try {
    return Purchases.getSharedInstance()
  } catch {
    if (!RC_API_KEY) return null
    return Purchases.configure(RC_API_KEY, appUserId)
  }
}

export default function Billing() {
  const { userProfile } = useAuth()
  const { company, getEmployees, fetchCompany } = useCompany()

  const [employees, setEmployees] = useState(0)
  const [empLoading, setEmpLoading] = useState(true)

  const [offerings, setOfferings] = useState(null)
  const [customerInfo, setCustomerInfo] = useState(null)
  const [rcLoading, setRcLoading] = useState(true)
  const [rcError, setRcError] = useState(null)

  const [purchasing, setPurchasing] = useState(null) // plan key being purchased

  // Employee count
  useEffect(() => {
    if (!userProfile?.companyId) return
    getEmployees(userProfile.companyId).then((emps) => {
      setEmployees(emps.filter((e) => e.isActive !== false).length)
      setEmpLoading(false)
    })
  }, [userProfile?.companyId])

  // Initialize RevenueCat and load offerings + customer info
  const loadRC = useCallback(async () => {
    if (!userProfile?.companyId) return
    if (!RC_API_KEY) { setRcLoading(false); return }

    setRcLoading(true)
    setRcError(null)
    try {
      // Use company ID as the subscriber — subscriptions are per-company
      const rc = getPurchases(userProfile.companyId)
      const [offeringsResult, infoResult] = await Promise.all([
        rc.getOfferings(),
        rc.getCustomerInfo(),
      ])
      setOfferings(offeringsResult)
      setCustomerInfo(infoResult)
    } catch (err) {
      setRcError(err.message || 'Failed to load billing info')
    } finally {
      setRcLoading(false)
    }
  }, [userProfile?.companyId])

  useEffect(() => { loadRC() }, [loadRC])

  // Determine active plan from RC entitlements (falls back to Supabase company.plan)
  const activePlanKey = (() => {
    if (customerInfo) {
      for (const key of [...PLAN_ORDER].reverse()) {
        if (customerInfo.entitlements.active[key]) return key
      }
      // No active entitlement → treat as free/trial
      return null
    }
    return company?.plan || 'starter'
  })()

  const currentPlan = activePlanKey || company?.plan || 'starter'
  const planData = PLANS[currentPlan]
  const seatLimit = planData?.seats === Infinity ? null : planData?.seats
  const seatUsage = seatLimit ? Math.min(Math.round((employees / seatLimit) * 100), 100) : 0

  // Find RC package for a given plan key within the current offering
  function rcPackageForPlan(planKey) {
    if (!offerings?.current) return null
    // Look for a package whose identifier matches the plan key,
    // or fall back to any package whose entitlement grants this plan.
    const pkg = offerings.current.availablePackages.find(
      (p) =>
        p.identifier.toLowerCase().includes(planKey) ||
        p.rcBillingProduct?.identifier?.toLowerCase().includes(planKey)
    )
    return pkg || null
  }

  async function handlePurchase(planKey) {
    if (!RC_API_KEY) {
      toast.error('RevenueCat not configured — add VITE_REVENUECAT_API_KEY to your .env')
      return
    }
    const rcPackage = rcPackageForPlan(planKey)
    if (!rcPackage) {
      toast.error(`No RevenueCat package found for "${planKey}". Check your Offerings in the RC dashboard.`)
      return
    }

    setPurchasing(planKey)
    try {
      const rc = getPurchases(userProfile.companyId)
      const { customerInfo: updated } = await rc.purchase({ rcPackage })
      setCustomerInfo(updated)
      toast.success(`Switched to ${PLANS[planKey].name}!`)
    } catch (err) {
      if (err.userCancelled) {
        toast('Purchase cancelled.')
      } else {
        toast.error(err.message || 'Purchase failed. Please try again.')
      }
    } finally {
      setPurchasing(null)
    }
  }

  function handleManageBilling() {
    if (!RC_API_KEY) {
      toast.error('RevenueCat not configured.')
      return
    }
    // RevenueCat's customer portal / billing management
    // Subscribers can manage their subscription via RC's web customer center
    const portalUrl = import.meta.env.VITE_REVENUECAT_MANAGEMENT_URL
    if (portalUrl) {
      window.open(portalUrl, '_blank', 'noopener,noreferrer')
    } else {
      toast.error('Add VITE_REVENUECAT_MANAGEMENT_URL to your .env to enable the billing portal.')
    }
  }

  return (
    <AdminLayout>
      <div className="p-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Billing & Subscription</h1>
            <p className="text-gray-500 text-sm mt-1">Manage your plan and payment details.</p>
          </div>
          {RC_API_KEY && (
            <button
              onClick={loadRC}
              disabled={rcLoading}
              className="btn-secondary flex items-center gap-2 text-sm"
            >
              <RefreshCw className={`w-4 h-4 ${rcLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          )}
        </div>

        {/* RC error */}
        {rcError && (
          <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div><strong>Failed to load billing:</strong> {rcError}</div>
          </div>
        )}

        {/* Current plan card */}
        <div className="card mb-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Current plan</p>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-gray-900">{planData?.name}</h2>
                <span className="bg-brand-100 text-brand-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                  {customerInfo?.entitlements.active[currentPlan] ? 'Active' : 'Trial'}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {currentPlan === 'enterprise'
                  ? 'Custom pricing · Unlimited employees'
                  : `$${planData?.price}/seat/month`}
              </p>
              {customerInfo?.entitlements.active[currentPlan]?.expirationDate && (
                <p className="text-xs text-gray-400 mt-1">
                  Renews{' '}
                  {new Date(
                    customerInfo.entitlements.active[currentPlan].expirationDate
                  ).toLocaleDateString()}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleManageBilling}
                className="btn-secondary flex items-center gap-2 text-sm"
              >
                <CreditCard className="w-4 h-4" />
                Manage billing
                <ArrowUpRight className="w-3 h-3" />
              </button>
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
                {empLoading ? '—' : employees} / {seatLimit ?? '∞'} seats
              </span>
            </div>
            {seatLimit && (
              <>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      seatUsage >= 90 ? 'bg-red-500' : seatUsage >= 75 ? 'bg-amber-500' : 'bg-brand-600'
                    }`}
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

          {/* Plan features */}
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

        {/* Plan selector */}
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
            const isPurchasing = purchasing === key

            // Show price from RC package if available, otherwise fall back to PLANS
            const rcPkg = rcPackageForPlan(key)
            const priceDisplay = rcPkg?.rcBillingProduct?.currentPrice?.formattedPrice
              ?? (key === 'enterprise' ? 'Custom' : `$${plan.price}`)

            return (
              <div
                key={key}
                className={`card border-2 flex flex-col transition-colors ${
                  isCurrent
                    ? 'border-brand-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
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
                    <span className="text-2xl font-bold text-gray-900">{priceDisplay}</span>
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
                  <button
                    disabled
                    className="w-full py-2 rounded-lg text-sm font-medium bg-brand-50 text-brand-600 border border-brand-200 cursor-default"
                  >
                    Current plan
                  </button>
                ) : key === 'enterprise' && !rcPackageForPlan('enterprise') ? (
                  <a
                    href="mailto:sales@fitbudbusiness.com"
                    className="block text-center w-full py-2 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Contact sales
                  </a>
                ) : (
                  <button
                    onClick={() => handlePurchase(key)}
                    disabled={!!purchasing || rcLoading}
                    className={`w-full py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                      isUpgrade
                        ? 'bg-brand-600 text-white hover:bg-brand-700'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {isPurchasing
                      ? 'Processing…'
                      : isUpgrade
                      ? `Upgrade to ${plan.name}`
                      : `Switch to ${plan.name}`}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* RC not configured warning */}
        {!RC_API_KEY && (
          <div className="mt-6 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">RevenueCat not configured</p>
              <p>
                Add your RevenueCat web API key to{' '}
                <code className="bg-amber-100 px-1 rounded">.env</code> as{' '}
                <code className="bg-amber-100 px-1 rounded">VITE_REVENUECAT_API_KEY</code>.
                See <code className="bg-amber-100 px-1 rounded">.env.example</code> for all required variables.
              </p>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
