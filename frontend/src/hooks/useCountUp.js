import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `target` over `durationMs`, starting only
 * when `start` becomes true. Uses requestAnimationFrame (not setInterval)
 * so it stays in sync with the compositor and pauses cleanly if the tab
 * is backgrounded.
 */
export function useCountUp(target, { start = false, durationMs = 1400, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);
  const startTime = useRef(null);

  useEffect(() => {
    if (!start) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    function tick(now) {
      if (startTime.current === null) startTime.current = now;
      const progress = Math.min(1, (now - startTime.current) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setValue(target * eased);
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    }

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      startTime.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, target, durationMs]);

  return Number(value.toFixed(decimals));
}