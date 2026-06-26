import { Logo } from '../ui/Logo';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { IconLink } from '../icons';

const COLUMNS = [
  {
    heading: 'Product',
    links: ['Features', 'How it works', 'Pricing', 'Changelog', 'Status'],
  },
  {
    heading: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press'],
  },
  {
    heading: 'Resources',
    links: ['Documentation', 'API reference', 'Integrations', 'Community'],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Subprocessors'],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-oceanic-noir pt-16">
      <Container>
        <div className="grid gap-12 pb-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mystic-mint/70">
              Data automation, orchestrated. Meridian connects, models, and routes your pipelines so they keep
              running — and keep fixing themselves — long after you've moved on to the next thing.
            </p>
            <form
              className="mt-6 flex max-w-sm gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Subscribe to the Meridian newsletter"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-arctic-powder placeholder:text-mystic-mint/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forsythia"
              />
              <Button type="submit" variant="primary" className="px-5 py-2.5 shrink-0">
                Subscribe
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-mystic-mint/50">
                  {col.heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-mystic-mint/80 transition-colors hover:text-arctic-powder">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-mystic-mint/50">© {new Date().getFullYear()} Meridian. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['Twitter', 'GitHub', 'LinkedIn'].map((label) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-mystic-mint/70 transition-colors hover:border-white/20 hover:text-arctic-powder"
              >
                <IconLink className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}