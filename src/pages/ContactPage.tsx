import { PageHero } from '../components/PageHero';
import { Contact } from '../components/Contact';
import { WebsiteFeatures } from '../components/Signature';

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Come see for yourself.<br /><span className="italic text-gradient-gold">Stay for a lifetime.</span></>}
        subtitle="Book a visit, request a virtual tour, or simply ask a question. We'd love to show you what a second innings can look like."
        img="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <Contact />
      <WebsiteFeatures />
    </>
  );
}
