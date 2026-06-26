import { memo } from 'react';
import { PricingCard } from './PricingCard';
import { Reveal } from '../ui/Reveal';

export const PricingGrid = memo(function PricingGrid({ tiers }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier, index) => (
        <Reveal key={tier.id} delay={index * 80}>
          <PricingCard tier={tier} />
        </Reveal>
      ))}
    </div>
  );
});