import { useEffect, useState } from 'react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { IconXMark } from '../icons';
import { NAV_LINKS } from '../../data/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-out-expo ${
        scrolled
          ? 'border-b border-white/10 bg-oceanic-noir/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container as="nav" className="flex h-[72px] items-center justify-between" aria-label="Primary">
        <a href="#top" className="text-arctic-powder">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-mystic-mint/80 transition-colors duration-150 ease-out hover:text-arctic-powder"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button as="a" href="#" variant="ghost" className="px-5 py-2.5">
            Sign in
          </Button>
          <Button as="a" href="#pricing" variant="primary" className="px-5 py-2.5">
            Start automating
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-arctic-powder lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <IconXMark className="text-lg" />
          ) : (
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="h-px w-4 bg-current" />
              <span className="h-px w-4 bg-current" />
            </span>
          )}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-b border-white/10 bg-oceanic-noir transition-[grid-template-rows] duration-300 ease-out-expo lg:hidden ${
          menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-mystic-mint/90 transition-colors hover:bg-white/5 hover:text-arctic-powder"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 px-3">
              <Button as="a" href="#" variant="ghost" className="w-full">
                Sign in
              </Button>
              <Button as="a" href="#pricing" variant="primary" className="w-full" onClick={() => setMenuOpen(false)}>
                Start automating
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}