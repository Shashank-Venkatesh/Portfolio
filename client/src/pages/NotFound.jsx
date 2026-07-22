import Container from '../components/layout/Container';
import Button from '../components/common/Button';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Page Not Found');

  return (
    <Container className="flex flex-col items-center justify-center gap-4 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]">
        404
      </p>
      <h1 className="text-3xl font-bold text-[var(--color-ink-primary)] sm:text-4xl">
        This page doesn't exist.
      </h1>
      <p className="max-w-sm text-sm text-[var(--color-ink-secondary)]">
        The page you're looking for may have moved or never existed. Let's get you back on track.
      </p>
      <Button to="/" className="mt-2">
        Back to Home
      </Button>
    </Container>
  );
}
