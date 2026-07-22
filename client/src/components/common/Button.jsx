import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const VARIANTS = {
  primary:
    'bg-[var(--color-ink-primary)] text-[var(--color-canvas)] hover:bg-white',
  secondary:
    'bg-transparent text-[var(--color-ink-primary)] border border-[var(--color-border-strong)] hover:border-[var(--color-ink-secondary)] hover:bg-[var(--color-surface-raised)]',
  ghost:
    'bg-transparent text-[var(--color-ink-secondary)] hover:text-[var(--color-ink-primary)]',
};

const SIZES = {
  md: 'px-5 py-2.5 text-sm',
  sm: 'px-4 py-2 text-xs',
};

/**
 * Polymorphic button: renders an <a>, a router <Link>, or a <button>
 * depending on the props passed, while keeping one consistent look.
 */
const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', href, to, className, children, icon: Icon, ...rest },
  ref
) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none',
    VARIANTS[variant],
    SIZES[size],
    className
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...rest}>
        {children}
        {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto');
    return (
      <a
        ref={ref}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={classes}
        {...rest}
      >
        {children}
        {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} {...rest}>
      {children}
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
    </button>
  );
});

export default Button;
