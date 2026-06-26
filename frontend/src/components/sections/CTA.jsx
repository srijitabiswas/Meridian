import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-oceanic-noir pt-24 pb-10 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-meridian-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" aria-hidden="true" />

      <Container className="relative text-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-deep-saffron">
            Ready when you are
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-medium leading-[1.1] text-arctic-powder sm:text-4xl lg:text-5xl">
            Stop babysitting pipelines. Let Meridian run them.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button as="a" href="#pricing" variant="primary">
              Start free
            </Button>
            <Button as="a" href="#how-it-works" variant="ghost">
              See how it works
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p
            aria-hidden="true"
            className="mt-16 select-none overflow-hidden bg-meridian-gradient bg-clip-text font-display text-[20vw] font-medium leading-none tracking-tight text-transparent sm:text-[16vw] lg:text-[180px]"
          >
            meridian
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
