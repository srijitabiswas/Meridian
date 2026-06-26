import { createContext, useContext, useMemo, useState } from 'react';

const PricingContext = createContext(null);

export function PricingProvider({ children }) {
  const [currency, setCurrency] = useState('USD');
  const [cycle, setCycle] = useState('monthly');

  // Memoized so the context value's identity only changes when currency
  // or cycle actually change — not on every parent re-render.
  const value = useMemo(() => ({ currency, setCurrency, cycle, setCycle }), [currency, cycle]);

  return <PricingContext.Provider value={value}>{children}</PricingContext.Provider>;
}

/**
 * Only components that call this hook re-render when currency/cycle
 * change. Layout components (grid, card shells, feature lists) never
 * call it, so they're untouched — verify in React DevTools Profiler:
 * toggling currency highlights only the <PriceValue> leaves.
 */
export function usePricing() {
  const ctx = useContext(PricingContext);
  if (!ctx) throw new Error('usePricing must be used within a PricingProvider');
  return ctx;
}