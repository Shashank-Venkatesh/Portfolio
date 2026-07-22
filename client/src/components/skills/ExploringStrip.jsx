import { motion } from 'framer-motion';
import { currentlyExploring } from '../../data/skills';

/**
 * Large, low-contrast wordmark strip signalling technologies currently
 * being explored/learned -- deliberately quiet relative to the mastered
 * stack above it.
 */
export default function ExploringStrip() {
  return (
    <div className="py-16 text-center">
      <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
        Currently Exploring
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {currentlyExploring.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-2xl font-extrabold tracking-tight text-[var(--color-ink-faint)] sm:text-3xl"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
