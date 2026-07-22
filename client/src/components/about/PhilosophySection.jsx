import { motion } from 'framer-motion';
import portrait from '../../assets/images/profile/shashank-portrait.jpg';
import { philosophy } from '../../data/experience';

/**
 * "The Philosophy" section: two paragraphs of narrative copy beside a
 * portrait image.
 */
export default function PhilosophySection() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-[var(--color-ink-primary)] sm:text-3xl">
          {philosophy.title}
        </h2>
        <div className="mt-5 space-y-4">
          {philosophy.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-[var(--color-ink-secondary)]">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.figure
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="m-0"
      >
        <div className="overflow-hidden rounded-xl border border-[var(--color-border-subtle)]">
          <img
            src={portrait}
            alt="Shashank Venkatesh working at his desk"
            className="aspect-[4/5] w-full object-cover grayscale contrast-[1.05] transition-[filter] duration-500 hover:grayscale-0"
          />
        </div>
        <figcaption className="mt-3 text-right font-mono text-[10px] uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
          {philosophy.imageCaption}
        </figcaption>
      </motion.figure>
    </div>
  );
}
