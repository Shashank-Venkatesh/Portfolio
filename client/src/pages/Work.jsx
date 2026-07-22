import Container from '../components/layout/Container';
import SectionHeading from '../components/common/SectionHeading';
import ProjectGrid from '../components/projects/ProjectGrid';
import OpenSourceCard from '../components/projects/OpenSourceCard';
import CtaBanner from '../components/common/CtaBanner';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Work() {
  useDocumentTitle('Work');

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Portfolio"
        title="Work."
        description="A curated selection of engineering projects, ranging from AI-powered productivity tools to real-time synchronisation systems."
      />

      <div className="mt-12">
        <ProjectGrid />
      </div>

      <div className="mt-24">
        <OpenSourceCard />
      </div>

      <div className="mt-24">
        <CtaBanner />
      </div>
    </Container>
  );
}
