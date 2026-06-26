import { PricingProvider } from '../../context/PricingContext';
import { PRICING_TIERS } from '../../data/pricingMatrix';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { BillingToggle } from './BillingToggle';
import { CurrencySelect } from './CurrencySelect';
import { PricingGrid } from './PricingGrid';

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-oceanic-noir py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-meridian-glow opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" aria-hidden="true" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title="One matrix. Every number derived from it."
            description="Switch currency or billing cycle below — only the price itself updates, instantly, with no layout shift anywhere else on the page."
          />
        </Reveal>

        {/* Scoped to this section only: nothing outside Pricing needs currency/cycle state. */}
        <PricingProvider>
          <Reveal delay={80} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <BillingToggle />
            <CurrencySelect />
          </Reveal>

          <div className="mt-12">
            <PricingGrid tiers={PRICING_TIERS} />
          </div>
        </PricingProvider>

        <p className="mt-10 text-center text-xs text-mystic-mint/50">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </Container>
    </section>
  );
}
