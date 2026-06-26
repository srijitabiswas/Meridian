import { useState } from 'react';
import { FAQS } from '../../data/site';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { IconChevronDown } from '../icons';

export function FAQ() {
  // Its own single-open state — intentionally independent of the Features
  // accordion's activeIndex; the two have no reason to share behavior.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative bg-oceanic-noir py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" aria-hidden="true" />
      <Container className="relative max-w-3xl">
        <Reveal>
          <SectionHeading align="center" eyebrow="FAQ" title="Common questions, answered plainly." />
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-[border-color,background-color,box-shadow] duration-200 ${
                    isOpen ? 'border-forsythia/30 bg-white/[0.07] shadow-card-hover' : 'border-white/10 bg-white/[0.035] shadow-card'
                  }`}
                >
                  <button
                    type="button"
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forsythia"
                  >
                    <span className="font-display text-base text-arctic-powder">{item.question}</span>
                    <IconChevronDown
                      className={`shrink-0 text-lg text-mystic-mint/60 transition-transform duration-300 ease-out-expo ${
                        isOpen ? 'rotate-180 text-forsythia' : ''
                      }`}
                    />
                  </button>

                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out-expo ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-mystic-mint/70">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
