import { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { useIsDesktop } from '../../hooks/useBreakpoint';
import { FeatureBentoGrid } from './FeatureBentoGrid';
import { FeatureAccordion } from './FeatureAccordion';

export function Features() {
  // Lives here, in the shared parent, so it survives the desktop <-> mobile
  // swap below: resizing the viewport never resets which item is "active" —
  // card N active in the grid means accordion item N opens automatically.
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useIsDesktop();

  return (
    <section id="features" className="relative bg-oceanic-noir py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Platform"
            title="Six ways Meridian takes the pipeline off your plate."
            description="Every card below is a real capability, not a marketing slide — hover or focus one on desktop, or open it on mobile, to see what it actually does."
          />
        </Reveal>

        <div className="mt-12">
          {isDesktop ? (
            <FeatureBentoGrid activeIndex={activeIndex} onActivate={setActiveIndex} />
          ) : (
            <FeatureAccordion activeIndex={activeIndex} onActivate={setActiveIndex} />
          )}
        </div>
      </Container>
    </section>
  );
}