import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Card from '../ui/Card';
import Button from '../common/Button';

/**
 * Full-width closing CTA panel, reused at the bottom of the Work page.
 */
export default function CtaBanner({
  title = 'Have a technical challenge?',
  description = "I'm always looking for ambitious projects and talented teams to collaborate with. Let's build something exceptional.",
  primaryLabel = 'Start a Project',
  primaryTo = '/contact',
  secondaryLabel = 'View Stack',
  secondaryTo = '/stack',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <Card className="flex flex-col items-center gap-5 px-6 py-16 text-center sm:px-12">
        <h2 className="text-2xl font-bold text-[var(--color-ink-primary)] sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-[var(--color-ink-secondary)]">
          {description}
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button to={primaryTo} icon={FiArrowRight}>
            {primaryLabel}
          </Button>
          <Button to={secondaryTo} variant="ghost">
            {secondaryLabel}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
