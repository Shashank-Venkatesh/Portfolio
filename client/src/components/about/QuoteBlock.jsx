import { motion } from 'framer-motion';
import { quote } from '../../data/experience';

/**
 * Centred italic pull-quote with attribution, closing out the About page.
 */
export default function QuoteBlock() {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl border-t border-[var(--color-border-subtle)] pt-14 text-center"
    >
      <p className="text-balance text-xl font-medium italic leading-relaxed text-[var(--color-ink-primary)] sm:text-2xl">
        &ldquo;{quote.text}&rdquo;
      </p>
      <cite className="mt-5 block font-mono text-xs not-italic uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
        &mdash; {quote.author}
      </cite>
    </motion.blockquote>
  );
}
