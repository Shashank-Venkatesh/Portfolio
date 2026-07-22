import { cn } from '../../utils/cn';

/**
 * Pill-shaped status indicator, e.g. "Available for select contracts".
 * @param {boolean} live - Shows the pulsing signal dot when true.
 */
export default function Badge({ children, live = false, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3.5 py-1.5 font-mono text-xs text-[var(--color-ink-secondary)]',
        className
      )}
    >
      {live && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-signal)] opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
        </span>
      )}
      {children}
    </span>
  );
}
