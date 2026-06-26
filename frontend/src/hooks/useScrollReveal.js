import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref + boolean. Attach the ref to any element; `isVisible`
 * flips to true once when the element first crosses the viewport
 * threshold. Used to gate the `animate-fade-up` class so reveals are
 * scroll-triggered without a single scroll event listener.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}