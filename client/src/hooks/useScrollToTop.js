import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls the viewport to the top whenever the route pathname changes,
 * matching standard multi-page navigation behaviour.
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);
}
