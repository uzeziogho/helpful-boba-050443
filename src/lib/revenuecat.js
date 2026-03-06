import { Purchases } from '@revenuecat/purchases-js'

// ─── Product / Offering identifiers ──────────────────────────────────────────
//
// These must match the product IDs configured in the RevenueCat dashboard.
//
// Offering:   "fitbud_plans"  (or "default")
// Packages:   rc_monthly  (one per plan tier)
//
// Product IDs (Stripe / web billing):
//   fitbud_starter_monthly    – $5 / seat / month
//   fitbud_growth_monthly     – $8 / seat / month
//   fitbud_enterprise_monthly – $12 / seat / month
// ─────────────────────────────────────────────────────────────────────────────

export const RC_OFFERING_ID = 'fitbud_plans'

export const RC_PRODUCT_IDS = {
  starter: 'fitbud_starter_monthly',
  growth: 'fitbud_growth_monthly',
  enterprise: 'fitbud_enterprise_monthly',
}

// Map entitlement identifiers back to plan keys
export const ENTITLEMENT_TO_PLAN = {
  fitbud_starter: 'starter',
  fitbud_growth: 'growth',
  fitbud_enterprise: 'enterprise',
}

let _purchases = null

/**
 * Configure RevenueCat for a given user (company admin).
 * Safe to call multiple times – returns the existing instance if already
 * configured for the same user.
 *
 * @param {string} userId – The Supabase user ID of the company admin.
 * @returns {Purchases}
 */
export function configurePurchases(userId) {
  const apiKey = import.meta.env.VITE_REVENUECAT_API_KEY
  if (!apiKey) {
    console.warn('[RevenueCat] VITE_REVENUECAT_API_KEY is not set.')
  }
  _purchases = Purchases.configure(apiKey ?? '', userId)
  return _purchases
}

/** Returns the current Purchases instance (must call configurePurchases first). */
export function getPurchases() {
  if (!_purchases) throw new Error('[RevenueCat] Not configured. Call configurePurchases(userId) first.')
  return _purchases
}

/**
 * Fetch all packages from the FitBud offering.
 * Returns an array of RC Package objects, or [] on error.
 */
export async function getOfferings() {
  try {
    const offerings = await getPurchases().getOfferings()
    const offering =
      offerings.getOffering(RC_OFFERING_ID) ?? offerings.getCurrentOffering()
    return offering?.availablePackages ?? []
  } catch (err) {
    console.error('[RevenueCat] getOfferings error:', err)
    return []
  }
}

/**
 * Find the RC Package that matches a given plan key.
 * @param {'starter'|'growth'|'enterprise'} planKey
 */
export async function getPackageForPlan(planKey) {
  const packages = await getOfferings()
  const targetProductId = RC_PRODUCT_IDS[planKey]
  return packages.find((pkg) => pkg.rcBillingProduct?.identifier === targetProductId) ?? null
}

/**
 * Purchase the subscription for the given plan.
 * @param {'starter'|'growth'|'enterprise'} planKey
 * @param {string} email – Pre-fill the checkout email.
 */
export async function purchasePlan(planKey, email) {
  const pkg = await getPackageForPlan(planKey)
  if (!pkg) throw new Error(`No RevenueCat package found for plan: ${planKey}`)
  return getPurchases().purchase({ rcPackage: pkg, customerEmail: email })
}

/**
 * Fetch the customer's current subscription status from RevenueCat.
 * Returns the active entitlement info or null if no active subscription.
 */
export async function getSubscriptionStatus() {
  try {
    const customerInfo = await getPurchases().getCustomerInfo()
    const activeEntitlements = customerInfo.entitlements.active

    // Find the first matching FitBud entitlement
    for (const [entitlementId, info] of Object.entries(activeEntitlements)) {
      const plan = ENTITLEMENT_TO_PLAN[entitlementId]
      if (plan) {
        return {
          active: true,
          plan,
          expiresAt: info.expirationDate,
          willRenew: info.willRenew,
          productId: info.productIdentifier,
          managementUrl: customerInfo.managementURL,
        }
      }
    }

    return { active: false, plan: null, expiresAt: null, willRenew: false, managementUrl: customerInfo.managementURL }
  } catch (err) {
    console.error('[RevenueCat] getSubscriptionStatus error:', err)
    return null
  }
}

/**
 * Switch to a different plan (upgrade or downgrade).
 * RevenueCat handles proration automatically.
 */
export async function changePlan(newPlanKey, email) {
  return purchasePlan(newPlanKey, email)
}
