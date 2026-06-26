import { Container } from '../ui/Container';
import { Marquee } from '../ui/Marquee';
import { TRUSTED_BY } from '../../data/site';

export function TrustedBy() {
  return (
    <section className="border-y border-white/10 bg-oceanic-noir py-10" aria-label="Trusted by">
      <Container>
        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-mystic-mint/40">
          Trusted by data teams at
        </p>
      </Container>
      <Marquee items={TRUSTED_BY} />
    </section>
  );
}