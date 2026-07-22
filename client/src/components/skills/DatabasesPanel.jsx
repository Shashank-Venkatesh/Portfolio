import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { databases } from '../../data/skills';

/**
 * Full-width "Databases" strip: label on the left, database names with
 * their storage category on the right.
 */
export default function DatabasesPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <Card className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="shrink-0">
          <h3 className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
            {databases.title}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-ink-secondary)]">{databases.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:flex sm:gap-10">
          {databases.items.map((db) => (
            <div key={db.name}>
              <p className="text-sm font-semibold text-[var(--color-ink-primary)]">{db.name}</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--color-ink-tertiary)]">
                {db.note}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
