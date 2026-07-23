import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Card from '../ui/Card';
import { socials } from '../../data/socials';

/**
 * Primary contact method: a grid of large, clearly tappable channel
 * cards (Email, LinkedIn, GitHub, Twitter). Since there's no form on
 * this page, these cards carry the main call to action, so each one
 * gets a generous hit area, a visible icon, and a hover state that
 * makes it obvious it's clickable.
 */
export default function ContactChannels() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {socials.map(({ id, label, value, href, icon: Icon, external }, i) => (
        <motion.a
          key={id}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          whileHover={{ y: -2 }}
          className="group block"
        >
          <Card className="flex h-full items-start justify-between gap-4 p-6 transition-colors group-hover:border-[var(--color-border-strong)] group-hover:bg-[var(--color-surface-raised)]">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--color-surface-raised)] text-[var(--color-ink-secondary)] transition-colors group-hover:text-[var(--color-ink-primary)]">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-lg font-semibold text-[var(--color-ink-primary)]">{label}</p>
                <p className="mt-0.5 break-all text-sm text-[var(--color-ink-tertiary)]">{value}</p>
              </div>
            </div>
            <FiArrowUpRight
              className="mt-1 h-4 w-4 shrink-0 text-[var(--color-ink-tertiary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-ink-primary)]"
              aria-hidden="true"
            />
          </Card>
        </motion.a>
      ))}
    </div>
  );
}
