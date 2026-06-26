import { memo } from 'react';
import { PriceValue } from './PriceValue';
import { Button } from '../ui/Button';

export const PricingCard = memo(function PricingCard({ tier }) {
  const card = (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-[22px] p-7 transition-transform duration-300 ease-out-expo ${
        tier.highlight
          ? 'bg-oceanic-noir shadow-card-hover'
          : 'border border-white/10 bg-white/[0.035] shadow-card'
      }`}
    >
      {tier.highlight && (
        <>
          {/* Ambient glow seated behind the gradient-bordered card — the
              "this is the one we want you to pick" signal, in light rather
              than copy. */}
          <div
            className="pointer-events-none absolute -inset-x-6 -top-10 h-40 bg-meridian-gradient opacity-20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-forsythia/[0.08] to-transparent"
            aria-hidden="true"
          />
        </>
      )}

      {tier.highlight && (
        <span className="relative mb-4 inline-flex w-fit items-center rounded-full bg-forsythia/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-forsythia">
          Most teams choose this
        </span>
      )}

      <h3 className="relative font-display text-xl text-arctic-powder">{tier.name}</h3>
      <p className="relative mt-1.5 text-sm text-mystic-mint/70">{tier.tagline}</p>

      <div className="relative mt-6">
        <PriceValue basePriceUSD={tier.basePriceUSD} />
      </div>
      <p className="relative mt-1 font-mono text-[11px] uppercase tracking-wide text-mystic-mint/50">{tier.seats}</p>

      <ul className="relative mt-6 flex flex-1 flex-col gap-3 border-t border-white/10 pt-6">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-mystic-mint/85">
            <CheckGlyph />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        as="a"
        href="#"
        variant={tier.highlight ? 'primary' : 'ghost'}
        className="relative mt-7 w-full"
      >
        {tier.cta}
      </Button>
    </div>
  );

  if (!tier.highlight) return card;

  // Padding-as-border trick: a 1.5px gradient-filled wrapper with the card's
  // own background showing through everywhere except that hairline edge —
  // a real gradient border, not a tinted flat border standing in for one.
  return (
    <div className="h-full rounded-[22px] bg-meridian-gradient p-[1.5px] lg:-translate-y-3">
      <div className="h-full rounded-[22px]">{card}</div>
    </div>
  );
});

function CheckGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forsythia" aria-hidden="true">
      <path
        d="M3 8.5l3 3 7-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
