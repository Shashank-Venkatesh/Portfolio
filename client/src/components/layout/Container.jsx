import { cn } from '../../utils/cn';

/**
 * Applies the site's consistent max-width and horizontal gutters.
 * Every page section should be wrapped in this instead of repeating
 * padding utilities inline.
 */
export default function Container({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-6xl px-6 md:px-10', className)} {...rest}>
      {children}
    </Tag>
  );
}
