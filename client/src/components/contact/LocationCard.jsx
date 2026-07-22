import Card from '../ui/Card';
import { site } from '../../data/site';

/**
 * Small "Location" panel with a dot-grid backdrop, matching the
 * reference design's map-style card.
 */
export default function LocationCard() {
  return (
    <Card className="relative overflow-hidden p-6">
      <span className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
        Location
      </span>

      <div className="relative mt-4 flex h-28 items-center justify-center overflow-hidden rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface-inset)] bg-noise">
        <div className="text-center">
          <p className="text-sm font-semibold text-[var(--color-ink-primary)]">
            {site.location.city}
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-[var(--color-ink-tertiary)]">
            {site.location.tz}
          </p>
        </div>
      </div>
    </Card>
  );
}
