
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const GlobalScrollAnimations = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Select meaningful content elements to animate
    // We target main structural elements and common components
    // Exclude navbar to keep it stable
    const selectors = [
      'main h1', 'main h2', 'main h3', 'main h4', 'main p', 
      'main img', 'main video', 
      'main button', 'main a[class*="Button"]',
      'main .rounded-3xl', // Target cards
      'main .grid > div', // Target grid items
      'footer h2', 'footer h3', 'footer p', 'footer li', 'footer input'
    ].join(',');

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px', // Trigger animation slightly before element is fully visible
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          // Calculate a small delay for elements appearing in the same batch (stagger effect)
          // We use the index relative to the batch of intersection entries
          const staggerDelay = (index % 6) * 100; // Cap stagger at 5 items to avoid long waits
          
          target.style.transitionDelay = `${staggerDelay}ms`;
          target.classList.add('is-visible');
          
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    // Give React a moment to render the new route's DOM
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(selectors);
      elements.forEach(el => {
        // Only attach if not already processed
        if (!el.classList.contains('js-scroll-trigger')) {
          el.classList.add('js-scroll-trigger');
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]); // Re-run whenever the route changes

  return null;
};
