import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Container from './Container';
import Button from '../common/Button';
import { navLinks } from '../../data/navigation';
import { site } from '../../data/site';
import { cn } from '../../utils/cn';

/**
 * Site-wide sticky navbar. Highlights the active section and collapses
 * into a slide-down menu on small viewports.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-subtle)] bg-[var(--color-canvas)]/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-mono text-sm font-semibold uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-primary)]"
          onClick={() => setIsOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'relative py-1 text-sm text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--color-ink-primary)]',
                  isActive && 'text-[var(--color-ink-primary)]'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--color-ink-primary)]"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={site.resumeUrl} size="sm">
            Resume
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-ink-primary)] md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-[var(--color-border-subtle)] md:hidden"
            aria-label="Mobile"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-md px-3 py-2.5 text-sm text-[var(--color-ink-secondary)]',
                      isActive && 'bg-[var(--color-surface)] text-[var(--color-ink-primary)]'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button href={site.resumeUrl} size="sm" className="mt-3 w-fit">
                Resume
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
