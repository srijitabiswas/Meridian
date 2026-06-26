import { usePointerParallax } from '../../hooks/usePointerParallax';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/SectionHeading';
import { Container } from '../ui/Container';
import { IconArrowPath, IconChartPie, IconCog, IconCube } from '../icons';

export function Hero() {
  const parallaxRef = usePointerParallax();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-oceanic-noir pb-20 pt-36 lg:pb-28 lg:pt-44"
    >
      {/* Ambient lighting layer — pure CSS, no JS-driven animation */}
      <div className="pointer-events-none absolute inset-0 bg-meridian-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" aria-hidden="true" />

      <Container className="relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="mb-6 animate-fade-up">
            <Eyebrow>Data automation, orchestrated</Eyebrow>
          </div>

          <h1
            className="animate-fade-up font-display text-[2.75rem] font-medium leading-[1.04] tracking-[-0.01em] text-arctic-powder sm:text-6xl lg:text-[3.95rem]"
            style={{ animationDelay: '80ms' }}
          >
            Your data's shortest path
            <br />
            from chaos to{' '}
            <span className="bg-meridian-gradient bg-clip-text text-transparent">clarity.</span>
          </h1>

          <p
            className="mt-6 max-w-lg animate-fade-up text-lg leading-relaxed text-mystic-mint/80"
            style={{ animationDelay: '160ms' }}
          >
            Meridian connects, models, and routes your data automatically — so pipelines fix themselves and
            your team ships insight, not glue code.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '240ms' }}>
            <Button as="a" href="#pricing" variant="primary">
              Start automating
            </Button>
            <Button as="a" href="#how-it-works" variant="ghost">
              See how it works
            </Button>
          </div>

          <dl
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6 animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            {[
              ['4,200+', 'Pipelines'],
              ['120+', 'Integrations'],
              ['99.95%', 'Uptime SLA'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl tabular-nums text-arctic-powder">{value}</dd>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-wide text-mystic-mint/50">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Signature element: the pipeline visualizer */}
        <div
          ref={parallaxRef}
          className="relative [perspective:1200px]"
          style={{ '--mx': 0.5, '--my': 0.4 }}
        >
          <div
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-glass backdrop-blur-2xl transition-transform duration-300 ease-out-expo will-change-transform sm:p-8"
            style={{
              transform:
                'rotateX(calc((var(--my) - 0.5) * -6deg)) rotateY(calc((var(--mx) - 0.5) * 8deg))',
            }}
          >
            {/* Top sheen — same "light catching glass" detail used on every
                card on the page, scaled up for the hero's signature panel. */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.06] to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(360px circle at calc(var(--mx) * 100%) calc(var(--my) * 100%), rgba(255,200,1,0.14), transparent 60%)',
              }}
              aria-hidden="true"
            />

            <div className="relative flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mystic-mint/50">
                pipeline / live
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-deep-saffron">
                <span className="h-1.5 w-1.5 rounded-full bg-deep-saffron animate-pulse-dot" />
                running
              </span>
            </div>

            {/* Node row */}
            <div className="relative mt-10 flex items-center justify-between px-2">
              <svg
                className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 overflow-visible"
                aria-hidden="true"
              >
                <line
                  x1="6%"
                  x2="94%"
                  y1="0"
                  y2="0"
                  stroke="url(#flow-gradient)"
                  strokeWidth="2"
                  strokeDasharray="6 10"
                  className="animate-flow-dash"
                />
                <defs>
                  <linearGradient id="flow-gradient" x1="0" x2="1">
                    <stop offset="0%" stopColor="#FFC801" />
                    <stop offset="100%" stopColor="#FF9932" />
                  </linearGradient>
                </defs>
              </svg>

              <Node icon={<IconCube className="text-lg" />} label="Source" delay="0ms" />
              <Node icon={<IconCog className="text-lg" />} label="Transform" delay="120ms" />
              <Node icon={<IconArrowPath className="text-lg" />} label="Sync" delay="240ms" />
              <Node icon={<IconChartPie className="text-lg" />} label="Insight" delay="360ms" />
            </div>

            {/* Mock metrics card */}
            <div className="relative mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['12ms', 'p50 latency'],
                ['0', 'failed runs'],
                ['97%', 'auto-resolved'],
                ['+18%', 'throughput'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 shadow-card">
                  <p className="font-display text-lg tabular-nums text-arctic-powder">{value}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-mystic-mint/50">{label}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 shadow-card">
              <div className="h-8 flex-1">
                <Sparkline />
              </div>
              <span className="font-mono text-xs text-deep-saffron">+82%</span>
            </div>
          </div>

          {/* Floating ambient orb behind the panel */}
          <div
            className="absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-deep-saffron/20 blur-3xl animate-float"
            aria-hidden="true"
          />
        </div>
      </Container>
    </section>
  );
}

function Node({ icon, label, delay }) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-2 animate-float" style={{ animationDelay: delay }}>
      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-oceanic-noir text-forsythia shadow-card">
        {icon}
      </div>
      <span className="font-mono text-[10px] uppercase tracking-wide text-mystic-mint/50">{label}</span>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 200 32" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
      <polyline
        points="0,28 20,24 40,26 60,18 80,20 100,12 120,14 140,8 160,10 180,4 200,6"
        fill="none"
        stroke="#FFC801"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
