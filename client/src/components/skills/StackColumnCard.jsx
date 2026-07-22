import { motion } from 'framer-motion';
import Card from '../ui/Card';

/**
 * Small titled list card used for the Frontend / Backend stack columns.
 */
export default function StackColumnCard({ column, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full p-6">
        <h3 className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
          {column.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-ink-secondary)]">{column.description}</p>

        <ul className="mt-5 space-y-3">
          {column.items.map((item) => (
            <li key={item} className="text-sm text-[var(--color-ink-primary)]">
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
