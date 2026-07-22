import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/footer/Footer';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import { useScrollToTop } from '../hooks/useScrollToTop';

/**
 * Shared shell for every route: sticky navbar, animated page outlet,
 * footer, and the floating back-to-top control.
 */
export default function MainLayout() {
  const location = useLocation();
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[var(--color-ink-primary)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-canvas)]"
      >
        Skip to content
      </a>

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id="main-content"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
