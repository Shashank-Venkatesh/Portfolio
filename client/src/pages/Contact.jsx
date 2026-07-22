import Container from '../components/layout/Container';
import SectionHeading from '../components/common/SectionHeading';
import Badge from '../components/common/Badge';
import ContactForm from '../components/contact/ContactForm';
import ContactChannels from '../components/contact/ContactChannels';
import LocationCard from '../components/contact/LocationCard';
import { site } from '../data/site';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Contact() {
  useDocumentTitle('Contact');

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Connect"
        title="Let's build something exceptional."
        description="I'm always looking for ambitious projects and talented teams to collaborate with."
      />

      <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr]">
        <ContactForm />

        <div className="flex flex-col gap-8">
          <ContactChannels />
          <LocationCard />
          <Badge live className="w-fit">
            {site.availability.projects}
          </Badge>
        </div>
      </div>
    </Container>
  );
}
