import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

/**
 * A hook to reveal elements as they scroll into view
 */
export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          // Add a small delay before adding the class for staggered animations
          setTimeout(() => {
            ref.current?.classList.add('reveal-visible');
          }, delay);
          
          // Once revealed, stop observing
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return ref;
};

export default useScrollReveal;