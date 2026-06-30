import { PageHero } from '../components/PageHero';
import { Gallery, EventsCalendar } from '../components/Gallery';

export function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Moments that make<br /><span className="italic text-gradient-gold">this place home</span></>}
        subtitle="A glimpse into daily life — nature, celebration, adventure, and the quiet beauty of community. Filter by category and explore what living here really looks like."
        img="https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <Gallery />
      <EventsCalendar />
    </>
  );
}
