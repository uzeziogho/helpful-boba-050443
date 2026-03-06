import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import {
  configurePurchases,
  getSubscriptionStatus,
  purchasePlan,
  changePlan,
} from '../lib/revenuecat'
import { useAuth } from './AuthContext'

const BillingContext = createContext(null)

export function useBilling() {
  return useContext(BillingContext)
}

export function BillingProvider({ children }) {
  const { currentUser } = useAuth()

  // { active, plan, expiresAt, willRenew, productId, managementUrl } | null
  const [subscription, setSubscription] = useState(null)
  const [billingLoading, setBillingLoading] = useState(false)
  const [billingError, setBillingError] = useState(null)

  /** (Re-)fetch subscription status from RevenueCat. */
  const refreshSubscription = useCallback(async () => {
    setBillingLoading(true)
    setBillingError(null)
    try {
      const status = await getSubscriptionStatus()
      setSubscription(status)
    } catch (err) {
      setBillingError(err.message)
    } finally {
      setBillingLoading(false)
    }
  }, [])

  // Configure RevenueCat and load subscription when the user signs in.
  useEffect(() => {
    if (!currentUser?.uid) {
      setSubscription(null)
      return
    }
    configurePurchases(currentUser.uid)
    refreshSubscription()
  }, [currentUser?.uid, refreshSubscription])

  /**
   * Start a new subscription for the given plan.
   * @param {'starter'|'growth'|'enterprise'} planKey
   * @param {string} email
   */
  async function subscribe(planKey, email) {
    setBillingLoading(true)
    setBillingError(null)
    try {
      await purchasePlan(planKey, email)
      await refreshSubscription()
    } catch (err) {
      setBillingError(err.message)
      throw err
    } finally {
      setBillingLoading(false)
    }
  }

  /**
   * Switch to a different plan.
   * @param {'starter'|'growth'|'enterprise'} newPlanKey
   * @param {string} email
   */
  async function switchPlan(newPlanKey, email) {
    setBillingLoading(true)
    setBillingError(null)
    try {
      await changePlan(newPlanKey, email)
      await refreshSubscription()
    } catch (err) {
      setBillingError(err.message)
      throw err
    } finally {
      setBillingLoading(false)
    }
  }

  const value = {
    subscription,
    billingLoading,
    billingError,
    subscribe,
    switchPlan,
    refreshSubscription,
  }

  return <BillingContext.Provider value={value}>{children}</BillingContext.Provider>
}
