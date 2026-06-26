import { useState } from 'react';
import { ICON_MAP } from './iconMap';
import { IconLink, IconLinkSolid } from '../icons';

export function FeatureIcon({ name, active }) {
  const Icon = ICON_MAP[name];
  const [hovered, setHovered] = useState(false);

  // The "Integrations" card is the one feature whose icon ships in both
  // outline and solid weight in the supplied asset pack — swap weight on
  // hover/active as the "icons animate subtly" detail for that asset.
  if (name === 'link') {
    const solid = hovered || active;
    return (
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-forsythia shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-rotate-3"
      >
        {solid ? <IconLinkSolid className="text-xl" /> : <IconLink className="text-xl" />}
      </span>
    );
  }

  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-forsythia shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-rotate-3">
      <Icon className="text-xl" />
    </span>
  );
}

export function FeatureBody({ feature }) {
  return (
    <>
      <FeatureIcon name={feature.icon} />
      <h3 className="mt-5 font-display text-xl text-arctic-powder">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mystic-mint/70">{feature.description}</p>
      {feature.metric && (
        <div className="mt-5 flex items-baseline gap-2 border-t border-white/10 pt-4">
          <span className="font-display text-2xl text-forsythia">{feature.metric}</span>
          <span className="font-mono text-[11px] uppercase tracking-wide text-mystic-mint/50">
            {feature.metricLabel}
          </span>
        </div>
      )}
    </>
  );
}
