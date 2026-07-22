import { cn } from '../../utils/cn';

/**
 * Compact rectangular label for technology names, tags, and stack items.
 */
export default function Chip({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border border-[var(--color-border-subtle)] bg-[var(--color-surface-inset)] px-3 py-2 font-mono text-[11px] uppercase tracking-wide text-[var(--color-ink-secondary)]',
        className
      )}
    >
      {children}
    </span>
  );
}
