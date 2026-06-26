// Single source of truth for pricing. Every price shown in the UI is
// *derived* from this object at render time — nothing is duplicated
// or hardcoded per-currency/per-cycle anywhere else in the app.

export const ANNUAL_DISCOUNT = 0.2; // exactly 20% off, applied uniformly

// Regional multipliers are intentionally simple, named constants so they
// can be swapped for a live FX feed later without touching component code.
export const CURRENCIES = {
  USD: { symbol: '$', code: 'USD', locale: 'en-US', multiplier: 1, roundTo: 1 },
  EUR: { symbol: '€', code: 'EUR', locale: 'de-DE', multiplier: 0.92, roundTo: 1 },
  INR: { symbol: '₹', code: 'INR', locale: 'en-IN', multiplier: 83, roundTo: 10 },
};

export const BILLING_CYCLES = {
  monthly: { label: 'Monthly', months: 1 },
  annual: { label: 'Annual', months: 1 }, // displayed as a monthly-equivalent rate
};

// Base prices are the only "real" numbers in the system — always in USD,
// always monthly, always pre-discount. Everything else is math.
export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    basePriceUSD: 29,
    tagline: 'For a single pipeline finding its footing.',
    cta: 'Start free',
    seats: 'Up to 3 seats',
    highlight: false,
    features: [
      '3 active pipelines',
      'Real-time sync',
      'Community support',
      '7-day run history',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    basePriceUSD: 89,
    tagline: 'For teams automating their core data flows.',
    cta: 'Start free trial',
    seats: 'Up to 15 seats',
    highlight: true,
    features: [
      'Unlimited pipelines',
      'Anomaly detection',
      'Priority support',
      '90-day run history',
      'Role-based access',
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    basePriceUSD: 249,
    tagline: 'For platforms running on automated data.',
    cta: 'Talk to sales',
    seats: 'Unlimited seats',
    highlight: false,
    features: [
      'Everything in Growth',
      'Dedicated infrastructure',
      'SOC 2 + SSO',
      'Unlimited run history',
      '99.95% uptime SLA',
    ],
  },
];

/**
 * Pure pricing function — no side effects, fully derived from config.
 * Returns the *monthly-equivalent* numeric amount in the target currency.
 */
export function computeMonthlyPrice(basePriceUSD, currencyCode, cycle) {
  const currency = CURRENCIES[currencyCode];
  const discountFactor = cycle === 'annual' ? 1 - ANNUAL_DISCOUNT : 1;
  const raw = basePriceUSD * currency.multiplier * discountFactor;
  const rounded = Math.round(raw / currency.roundTo) * currency.roundTo;
  return rounded;
}

export function formatPrice(amount, currencyCode) {
  const currency = CURRENCIES[currencyCode];
  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currency.code,
    maximumFractionDigits: 0,
  }).format(amount);
}