import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { socials } from '../../data/socials';

/**
 * Vertical list of outbound contact channels with a divider under each,
 * matching the reference design's "Channels" panel.
 */
export default function ContactChannels() {
  return (
    <div>
      <span className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
        Channels
      </span>
      <ul className="mt-4 divide-y divide-[var(--color-border-subtle)]">
        {socials.map((social, i) => (
          <motion.li
            key={social.id}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <a
              href={social.href}
              target={social.external ? '_blank' : undefined}
              rel={social.external ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between py-4 text-lg font-semibold text-[var(--color-ink-primary)] transition-colors hover:text-[var(--color-ink-secondary)]"
            >
              {social.label}
              <FiArrowUpRight
                className="h-4 w-4 text-[var(--color-ink-tertiary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
