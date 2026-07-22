import Hero from '../components/hero/Hero';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle('Full Stack Developer');

  return (
    <>
      <Hero />
    </>
  );
}
