import { useEffect } from 'react';

/**
 * Sets the document title for the active route.
 * @param {string} title - Page-specific title segment.
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} — Shashank Venkatesh` : 'Shashank Venkatesh';
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
