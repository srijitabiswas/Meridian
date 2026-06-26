import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { ICON_MAP } from './iconMap';
import { HOW_IT_WORKS } from '../../data/site';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-arctic-powder py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="From zero to automated"
            title="Three steps. Then Meridian takes over."
            description="This is the actual order teams move through — each step only works once the one before it is wired up."
          />
        </Reveal>

        <ol className="mt-14 grid gap-8 lg:grid-cols-3">
          {HOW_IT_WORKS.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <Reveal key={item.step} delay={index * 100} as="li" className="relative">
                <div className="flex h-full flex-col rounded-3xl border border-oceanic-noir/10 bg-white/70 p-7 shadow-card-light transition-transform duration-300 ease-out-expo hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-deep-saffron">{item.step}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-oceanic-noir text-forsythia shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
                      <Icon className="text-lg" />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl text-oceanic-noir">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-nocturnal-expedition/75">{item.description}</p>
                </div>
                {index < HOW_IT_WORKS.length - 1 && (
                  <span
                    className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-oceanic-noir/15 lg:block"
                    aria-hidden="true"
                  />
                )}
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
