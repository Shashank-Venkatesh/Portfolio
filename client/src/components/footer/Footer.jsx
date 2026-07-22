import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import { socials } from '../../data/socials';
import { navLinks } from '../../data/navigation';
import { site } from '../../data/site';

/**
 * Minimal site-wide footer: wordmark, quick links, socials, copyright.
 */
export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)]">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/"
          className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-secondary)] hover:text-[var(--color-ink-primary)]"
        >
          {site.shortName}
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target={social.external ? '_blank' : undefined}
              rel={social.external ? 'noopener noreferrer' : undefined}
              className="text-xs text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--color-ink-primary)]"
            >
              {social.label}
            </a>
          ))}
          {navLinks.slice(2, 3).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--color-ink-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-ink-tertiary)]">
          © {site.year} {site.name}. {site.footerLine}
        </p>
      </Container>
    </footer>
  );
}
