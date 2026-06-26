import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCountUp } from '../../hooks/useCountUp';
import { Container } from '../ui/Container';
import { STATS } from '../../data/site';

export function Stats() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.4 });

  return (
    <section ref={ref} className="relative border-y border-white/10 bg-oceanic-noir py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" aria-hidden="true" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} start={isVisible} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatItem({ stat, start }) {
  const value = useCountUp(stat.value, { start, decimals: stat.decimals ?? 0, durationMs: 1500 });
  const formatted = stat.decimals
    ? value.toFixed(stat.decimals)
    : Math.round(value).toLocaleString('en-US');

  return (
    <div>
      <p className="font-display text-3xl text-arctic-powder tabular-nums sm:text-4xl">
        {formatted}
        <span className="text-forsythia">{stat.suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-mystic-mint/50">{stat.label}</p>
    </div>
  );
}