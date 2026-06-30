import { PageHero } from '../components/PageHero';
import { FamilyPortal, Technology } from '../components/Features';
import { FamilyEcosystem } from '../components/Ecosystem';
import { SocialImpactAlumni, HallOfLegends } from '../components/Startup';
import { Community } from '../components/Community';
import { MemoryWall } from '../components/Memory';
import { EventsCalendar } from '../components/Gallery';
import { Testimonials } from '../components/Contact';
import { ContributionEcosystem, Sustainability, RewardSystem } from '../components/Contribution';
import { CreativeEcosystem } from '../components/Contribution';

export function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title={<>A family that grows<br /><span className="italic text-gradient-gold">together</span></>}
        subtitle="Family portals, grandparent adoption, social impact, hall of legends, creative studios, contribution programs, sustainability, rewards, and events — a community where everyone belongs."
        img="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <div id="family"><FamilyPortal /></div>
      <div id="family-ecosystem"><FamilyEcosystem /></div>
      <div id="technology"><Technology /></div>
      <div id="community-events"><Community /></div>
      <div id="legends"><HallOfLegends /></div>
      <div id="memory-wall"><MemoryWall /></div>
      <div id="creative-studios"><CreativeEcosystem /></div>
      <div id="social-impact"><SocialImpactAlumni /></div>
      <div id="contribution"><ContributionEcosystem /></div>
      <div id="sustainability"><Sustainability /></div>
      <div id="rewards"><RewardSystem /></div>
      <div id="events"><EventsCalendar /></div>
      <div id="testimonials"><Testimonials /></div>
    </>
  );
}
