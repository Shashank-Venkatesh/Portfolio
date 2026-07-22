import { motion } from 'framer-motion';
import { FiBox, FiFeather, FiTarget } from 'react-icons/fi';
import Card from '../ui/Card';
import { focusGrid } from '../../data/experience';

const ICONS = [FiBox, FiFeather, FiTarget];

/**
 * Three compact tiles summarising core stack, design intent and
 * current focus -- sits beneath the Trajectory cards on the About page.
 */
export default function FocusGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {focusGrid.map((item, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="flex h-full flex-col items-center gap-2 p-6 text-center">
              <Icon className="h-4 w-4 text-[var(--color-ink-tertiary)]" aria-hidden="true" />
              <p className="font-mono text-[10px] uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
                {item.label}
              </p>
              <p className="text-sm text-[var(--color-ink-secondary)]">{item.value}</p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
