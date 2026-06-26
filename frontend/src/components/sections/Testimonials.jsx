import { useState } from 'react';
import { TESTIMONIALS } from '../../data/site';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { IconChevronLeft, IconChevronRight } from '../icons';

const RING_PAIRS = [
  ['#FFC801', '#FF9932'],
  ['#114C5A', '#FFC801'],
  ['#FF9932', '#114C5A'],
  ['#FFC801', '#114C5A'],
];

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const active = TESTIMONIALS[index];
  const [ringFrom, ringTo] = RING_PAIRS[index % RING_PAIRS.length];

  const goTo = (next) => setIndex(((next % total) + total) % total);

  return (
    <section id="testimonials" className="bg-arctic-powder py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Customers"
            title="Teams who stopped babysitting pipelines."
          />
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-12 max-w-2xl">
          <figure className="rounded-3xl border border-oceanic-noir/10 bg-white/70 p-8 shadow-card-light sm:p-10">
            <blockquote
              key={active.name}
              className="animate-fade-up font-display text-xl leading-snug text-oceanic-noir sm:text-2xl"
            >
              “{active.quote}”
            </blockquote>

            <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-oceanic-noir/10 pt-5">
              <div className="flex items-center gap-3">
                {/* Gradient-ring monogram standing in for a headshot — keeps
                    the same brand gradient used in the wordmark/CTA, so every
                    customer "feels" like part of the same product. */}
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full p-[1.5px]"
                  style={{ background: `linear-gradient(135deg, ${ringFrom}, ${ringTo})` }}
                  aria-hidden="true"
                >
                  <span className="grid h-full w-full place-items-center rounded-full bg-arctic-powder font-display text-xs text-oceanic-noir">
                    {initials(active.name)}
                  </span>
                </span>
                <div>
                  <p className="text-sm font-semibold text-oceanic-noir">{active.name}</p>
                  <p className="text-xs text-nocturnal-expedition/70">{active.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  aria-label="Previous testimonial"
                  className="grid h-9 w-9 place-items-center rounded-full border border-oceanic-noir/15 bg-white text-oceanic-noir shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] transition-colors duration-200 ease-out hover:bg-oceanic-noir/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-saffron"
                >
                  <IconChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Next testimonial"
                  className="grid h-9 w-9 place-items-center rounded-full border border-oceanic-noir/15 bg-white text-oceanic-noir shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] transition-colors duration-200 ease-out hover:bg-oceanic-noir/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-saffron"
                >
                  <IconChevronRight />
                </button>
              </div>
            </figcaption>
          </figure>

          <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Choose testimonial">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ease-out-expo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-saffron ${
                  i === index ? 'w-6 bg-deep-saffron' : 'w-1.5 bg-oceanic-noir/20 hover:bg-oceanic-noir/40'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
