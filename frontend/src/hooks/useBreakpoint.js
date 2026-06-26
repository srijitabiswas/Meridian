import { useEffect, useState } from 'react';

/**
 * Tracks whether a media query currently matches, using the native
 * matchMedia change event (no resize polling, no layout thrashing).
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (event) => setMatches(event.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Single named breakpoint shared by every component that needs to know
// whether it should render the desktop bento grid or the mobile accordion.
export function useIsDesktop() {
  return useMediaQuery('(min-width: 1024px)');
}