import Container from '../components/layout/Container';
import SectionHeading from '../components/common/SectionHeading';
import PhilosophySection from '../components/about/PhilosophySection';
import TrajectorySection from '../components/about/TrajectorySection';
import FocusGrid from '../components/about/FocusGrid';
import QuoteBlock from '../components/about/QuoteBlock';
import { aboutIntro } from '../data/experience';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function About() {
  useDocumentTitle('About');

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Architecting Digital Experiences"
        title="About."
        description={aboutIntro}
      />

      <div className="mt-16">
        <PhilosophySection />
      </div>

      <div className="mt-24">
        <TrajectorySection />
      </div>

      <div className="mt-6">
        <FocusGrid />
      </div>

      <div className="mt-20">
        <QuoteBlock />
      </div>
    </Container>
  );
}
