import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { tools } from '../../data/skills';

/**
 * "Tools" panel: an icon + name + note list for DevOps/environment tooling.
 */
export default function ToolsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="h-full p-6">
        <h3 className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
          {tools.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-ink-secondary)]">{tools.description}</p>

        <ul className="mt-5 space-y-4">
          {tools.items.map(({ icon: Icon, name, note }) => (
            <li key={name} className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--color-surface-raised)] text-[var(--color-ink-secondary)]">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-medium text-[var(--color-ink-primary)]">
                  {name}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-wide text-[var(--color-ink-tertiary)]">
                  {note}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
