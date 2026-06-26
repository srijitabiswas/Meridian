import { usePricing } from '../../context/PricingContext';
import { CURRENCIES } from '../../data/pricingMatrix';
import { IconChevronDown } from '../icons';

export function CurrencySelect() {
  const { currency, setCurrency } = usePricing();

  return (
    <div className="relative inline-flex items-center">
      <label htmlFor="currency-select" className="sr-only">
        Currency
      </label>
      <select
        id="currency-select"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="appearance-none rounded-full border border-white/10 bg-white/5 px-4 py-2.5 pr-9 text-sm font-medium text-arctic-powder focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forsythia"
      >
        {Object.values(CURRENCIES).map((c) => (
          <option key={c.code} value={c.code} className="text-oceanic-noir">
            {c.code}
          </option>
        ))}
      </select>
      <IconChevronDown
        className="pointer-events-none absolute right-3 text-sm text-mystic-mint/60"
        aria-hidden="true"
      />
    </div>
  );
}