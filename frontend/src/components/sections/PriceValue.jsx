import { useMemo } from 'react';
import { usePricing } from '../../context/PricingContext';
import { computeMonthlyPrice, formatPrice } from '../../data/pricingMatrix';

export function PriceValue({ basePriceUSD }) {
  const { currency, cycle } = usePricing();

  const amount = useMemo(
    () => computeMonthlyPrice(basePriceUSD, currency, cycle),
    [basePriceUSD, currency, cycle]
  );
  const formatted = useMemo(() => formatPrice(amount, currency), [amount, currency]);

  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span
        key={`${currency}-${cycle}-${amount}`}
        className="animate-price-pop font-display text-4xl text-arctic-powder tabular-nums"
      >
        {formatted}
      </span>
      <span className="font-mono text-xs text-mystic-mint/50">/mo</span>
    </span>
  );
}