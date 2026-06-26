import { memo } from 'react';
import { FEATURES } from '../../data/features';
import { FeatureIcon } from './FeatureCard';
import { IconChevronDown } from '../icons';

export const FeatureAccordion = memo(function FeatureAccordion({ activeIndex, onActivate }) {
  return (
    <div className="flex flex-col gap-3">
      {FEATURES.map((feature, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={feature.id}
            className={`overflow-hidden rounded-2xl border transition-[border-color,background-color,box-shadow] duration-200 ${
              isOpen ? 'border-forsythia/30 bg-white/[0.07] shadow-card-hover' : 'border-white/10 bg-white/[0.035] shadow-card'
            }`}
          >
            <button
              type="button"
              id={`feature-trigger-${feature.id}`}
              aria-expanded={isOpen}
              aria-controls={`feature-panel-${feature.id}`}
              onClick={() => onActivate(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forsythia"
            >
              <span className="flex items-center gap-3">
                <FeatureIcon name={feature.icon} active={isOpen} />
                <span className="font-display text-base text-arctic-powder">{feature.title}</span>
              </span>
              <IconChevronDown
                className={`shrink-0 text-lg text-mystic-mint/60 transition-transform duration-300 ease-out-expo ${
                  isOpen ? 'rotate-180 text-forsythia' : ''
                }`}
              />
            </button>

            <div
              id={`feature-panel-${feature.id}`}
              role="region"
              aria-labelledby={`feature-trigger-${feature.id}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-out-expo ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed text-mystic-mint/70">{feature.description}</p>
                  {feature.metric && (
                    <div className="mt-4 flex items-baseline gap-2 border-t border-white/10 pt-3">
                      <span className="font-display text-xl text-forsythia">{feature.metric}</span>
                      <span className="font-mono text-[11px] uppercase tracking-wide text-mystic-mint/50">
                        {feature.metricLabel}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});
