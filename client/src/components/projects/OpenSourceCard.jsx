import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Card from '../ui/Card';
import Chip from '../common/Chip';
import { openSource } from '../../data/projects';

/**
 * Highlights open-source contribution work (Mathesar Foundation),
 * paired with a quantified stats row beneath it.
 */
export default function OpenSourceCard() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
          Community
        </span>
        <h2 className="mt-3 text-2xl font-bold text-[var(--color-ink-primary)] sm:text-3xl">
          Open Source
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-ink-secondary)]">
          Actively contributing to projects that decentralise data management and
          engineering tooling.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[var(--color-ink-primary)]">
                {openSource.organization}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-ink-secondary)]">
                {openSource.description}
              </p>
            </div>
            <a
              href={openSource.links[0]?.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Mathesar contributions on GitHub"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--color-border-subtle)] text-[var(--color-ink-secondary)] hover:text-[var(--color-ink-primary)]"
            >
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {openSource.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </Card>

        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {openSource.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold text-[var(--color-ink-primary)] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-[var(--color-ink-tertiary)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
