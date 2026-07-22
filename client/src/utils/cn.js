/**
 * Joins truthy class values into a single className string.
 * Lightweight alternative to `clsx` for this project's needs.
 * @param  {...(string|false|null|undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
