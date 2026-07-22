import { motion } from 'framer-motion';
import { FiActivity } from 'react-icons/fi';
import Card from '../ui/Card';
import { heroStats } from '../../data/site';

/**
 * The "Active Since / Full Stack Mastery / stat tiles" panel that sits
 * beside the hero headline on the Home page.
 */
export default function HeroStatusCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      className="w-full max-w-sm"
    >
      <Card className="w-full p-5">
        <div className="flex items-center justify-between gap-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-surface-raised)] text-[var(--color-ink-secondary)]">
            <FiActivity className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
              {heroStats.activeSinceLabel}
            </p>
            <p className="font-mono text-sm text-[var(--color-ink-primary)]">
              {heroStats.activeSinceValue}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs text-[var(--color-ink-secondary)]">
              {heroStats.masteryLabel}
            </span>
            <span className="font-mono text-xs text-[var(--color-ink-primary)]">
              {heroStats.masteryValue}%
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-surface-raised)]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${heroStats.masteryValue}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="h-full rounded-full bg-[var(--color-ink-primary)]"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {heroStats.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface-inset)] p-3"
            >
              <p className="text-lg font-bold text-[var(--color-ink-primary)]">{stat.value}</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--color-ink-tertiary)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
