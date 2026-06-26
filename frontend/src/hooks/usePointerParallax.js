import { useEffect, useRef } from 'react';

/**
 * Attach the returned ref to a container. On pointer move, writes
 * --mx / --my (0..1, relative to the element) directly onto the element's
 * style — bypassing React state entirely so a 60fps mousemove never
 * causes a re-render. The element's own CSS reads those custom
 * properties to drive a spotlight gradient and a subtle 3D tilt.
 * Disabled automatically for touch input and reduced-motion users.
 */
export function usePointerParallax() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    let raf = null;

    function handleMove(event) {
      if (raf) return; // throttle to one update per animation frame
      raf = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        node.style.setProperty('--mx', x.toFixed(3));
        node.style.setProperty('--my', y.toFixed(3));
        raf = null;
      });
    }

    function handleLeave() {
      node.style.setProperty('--mx', '0.5');
      node.style.setProperty('--my', '0.4');
    }

    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}