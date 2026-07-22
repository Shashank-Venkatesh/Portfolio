import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';
import Card from '../ui/Card';
import Chip from '../common/Chip';
import { languages } from '../../data/skills';

/**
 * "Languages" panel: header row with icon, then a wrapped chip grid.
 */
export default function LanguagesPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
              {languages.title}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-ink-secondary)]">
              {languages.description}
            </p>
          </div>
          <FiCode className="h-5 w-5 shrink-0 text-[var(--color-ink-tertiary)]" aria-hidden="true" />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {languages.items.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
