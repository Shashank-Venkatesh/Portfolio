import { cn } from '../../utils/cn';

/**
 * Base panel surface: subtle border, raised background, soft radius.
 * The single visual building block reused across hero stats, stack
 * boxes, trajectory cards, and contact panels.
 */
export default function Card({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag
      className={cn(
        'rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]',
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
