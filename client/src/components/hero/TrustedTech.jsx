import { trustedTechnologies } from '../../data/site';

/**
 * Muted list of core technologies, displayed as a understated strip
 * beneath the hero section.
 */
export default function TrustedTech() {
  return (
    <div className="flex flex-col gap-4 border-t border-[var(--color-border-subtle)] py-8 sm:flex-row sm:items-center sm:justify-between">
      <span className="font-mono text-[11px] uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
        Trusted Technologies
      </span>
      <ul className="flex flex-wrap gap-x-8 gap-y-3">
        {trustedTechnologies.map((tech) => (
          <li
            key={tech}
            className="text-sm text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--color-ink-primary)]"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
