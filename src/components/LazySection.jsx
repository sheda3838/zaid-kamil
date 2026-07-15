import { useEffect, useRef, useState } from 'react';

export function LazySection({ children, rootMargin = '400px', minHeight = '100vh' }) {
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // If it already intersected, we don't need to observe anymore
    if (hasIntersected) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasIntersected, rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: hasIntersected ? 'auto' : minHeight }}>
      {hasIntersected ? children : null}
    </div>
  );
}
