import { PageHero } from '../components/PageHero';
import { HealthEcosystem, EmotionalEcosystem, TravelEcosystem } from '../components/Wellness';
import { BrainWellness } from '../components/Startup';
import { WellnessCenter } from '../components/Living';
import { PetTherapy } from '../components/Community';
import { Spiritual } from '../components/Community';

export function WellnessPage() {
  return (
    <>
      <PageHero
        eyebrow="Wellness"
        title={<>Health for the body,<br /><span className="italic text-gradient-gold">calm for the soul</span></>}
        subtitle="A complete wellness ecosystem — 24×7 medical care, AI health prediction, brain fitness, emotional support, pet therapy, and spiritual spaces. Because happiness is a health metric too."
        img="https://images.pexels.com/photos/3759659/pexels-photo-3759659.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <div id="health"><HealthEcosystem /></div>
      <div id="emotional"><EmotionalEcosystem /></div>
      <div id="brain"><BrainWellness /></div>
      <div id="wellness-center"><WellnessCenter /></div>
      <div id="pets"><PetTherapy /></div>
      <div id="spiritual"><Spiritual /></div>
      <div id="travel"><TravelEcosystem /></div>
    </>
  );
}
