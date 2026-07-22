import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import Card from '../ui/Card';
import Chip from '../common/Chip';
import { education } from '../../data/education';
import { achievement } from '../../data/experience';

/**
 * "Trajectory" section: a wide education card paired with a compact
 * achievement card, mirroring the asymmetric layout in the reference
 * design.
 */
export default function TrajectorySection() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-[var(--color-ink-primary)] sm:text-3xl"
      >
        Trajectory
      </motion.h2>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="flex h-full flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-surface-raised)] text-[var(--color-ink-secondary)]">
                <FiBookOpen className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-ink-tertiary)]">
                {education.period}
              </span>
            </div>

            <h3 className="mt-5 text-lg font-bold text-[var(--color-ink-primary)]">
              {education.title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-ink-secondary)]">
              {education.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {education.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="flex h-full flex-col border-[var(--color-border-strong)] p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-surface-raised)] text-[var(--color-ink-secondary)]">
              <FiAward className="h-4 w-4" aria-hidden="true" />
            </span>

            <h3 className="mt-5 text-lg font-bold text-[var(--color-ink-primary)]">
              {achievement.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
              {achievement.description}
            </p>

            <span className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
              {achievement.label}
            </span>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
