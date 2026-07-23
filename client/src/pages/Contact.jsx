import Container from '../components/layout/Container';
import SectionHeading from '../components/common/SectionHeading';
import Badge from '../components/common/Badge';
import ContactChannels from '../components/contact/ContactChannels';
import LocationCard from '../components/contact/LocationCard';
import { site } from '../data/site';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Contact() {
  useDocumentTitle('Contact');

  return (
    <Container className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Connect"
          title="Let's build something exceptional."
          description="I'm always looking for ambitious projects and talented teams to collaborate with. Reach out directly through any of the channels below."
          align="center"
        />

        <div className="mt-6 flex justify-center">
          <Badge live>{site.availability.projects}</Badge>
        </div>

        <div className="mt-12">
          <ContactChannels />
        </div>

        <div className="mt-6">
          <LocationCard />
        </div>
      </div>
    </Container>
  );
}