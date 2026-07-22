import { cn } from '../../utils/cn';

/**
 * Renders a headline where selected words are muted to create rhythm,
 * matching the alternating emphasis seen in the hero typography
 * ("Engineering digital excellence through clean architecture.").
 *
 * @param {string[]} words - Ordered words/phrases making up the line.
 * @param {number[]} mutedIndexes - Indexes (into `words`) to render muted.
 */
export default function EmphasisText({ words, mutedIndexes = [], className }) {
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn(
            mutedIndexes.includes(i)
              ? 'text-[var(--color-ink-tertiary)]'
              : 'text-[var(--color-ink-primary)]'
          )}
        >
          {word}{' '}
        </span>
      ))}
    </span>
  );
}
