import { useEffect, useState } from 'react';
import { IconChevronUp, IconChevronUpSolid } from '../icons';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Reuses the Hero's #top landmark instead of a scroll-position listener:
    // once it leaves the viewport we've scrolled past it, so show the button.
    const target = document.getElementById('top');
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-oceanic-noir/90 text-arctic-powder shadow-glass backdrop-blur transition-all duration-300 ease-out-expo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forsythia ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      {hovered ? <IconChevronUpSolid className="text-lg" /> : <IconChevronUp className="text-lg" />}
    </button>
  );
}
