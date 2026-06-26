import { memo } from 'react';
import { FEATURES } from '../../data/features';
import { FeatureBody } from './FeatureCard';
import { Reveal } from '../ui/Reveal';

export const FeatureBentoGrid = memo(function FeatureBentoGrid({ activeIndex, onActivate }) {
  return (
    <div className="grid grid-cols-4 grid-flow-row-dense gap-5">
      {FEATURES.map((feature, index) => {
        const isLarge = feature.size === 'lg';
        const isActive = activeIndex === index;
        return (
          <Reveal key={feature.id} delay={index * 60} className={isLarge ? 'col-span-2 row-span-2' : 'col-span-1'}>
            <article
              onMouseEnter={() => onActivate(index)}
              onFocus={() => onActivate(index)}
              tabIndex={0}
              data-active={isActive}
              className={`group relative h-full overflow-hidden rounded-3xl border p-6 transition-[transform,border-color,background-color,box-shadow] duration-200 ease-out-expo hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forsythia ${
                isLarge ? 'flex flex-col justify-between' : ''
              } ${
                isActive
                  ? 'border-forsythia/30 bg-white/[0.07] shadow-card-hover'
                  : 'border-white/10 bg-white/[0.035] shadow-card hover:border-white/20'
              }`}
            >
              {/* Soft top-down sheen — the "glass catching light" detail that
                  separates a card from a flat-color rectangle. */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.05] to-transparent"
                aria-hidden="true"
              />
              <div className="relative">
                <FeatureBody feature={feature} />
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
});
