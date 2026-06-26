import { usePricing } from '../../context/PricingContext';
import { BILLING_CYCLES, ANNUAL_DISCOUNT } from '../../data/pricingMatrix';

export function BillingToggle() {
  const { cycle, setCycle } = usePricing();

  return (
    <div
      role="radiogroup"
      aria-label="Billing cycle"
      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1"
    >
      {Object.entries(BILLING_CYCLES).map(([key, def]) => (
        <button
          key={key}
          type="button"
          role="radio"
          aria-checked={cycle === key}
          onClick={() => setCycle(key)}
          className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forsythia ${
            cycle === key ? 'bg-forsythia text-oceanic-noir' : 'text-mystic-mint/70 hover:text-arctic-powder'
          }`}
        >
          {def.label}
          {key === 'annual' && (
            <span
              className={`ml-1.5 font-mono text-[10px] ${
                cycle === key ? 'text-oceanic-noir/70' : 'text-deep-saffron'
              }`}
            >
              −{Math.round(ANNUAL_DISCOUNT * 100)}%
            </span>
          )}
        </button>
      ))}
    </div>
  );
}