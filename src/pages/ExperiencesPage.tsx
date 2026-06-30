import { PageHero } from '../components/PageHero';
import { Experiences, Adventures } from '../components/Experiences';
import { Entertainment, NatureEcosystem } from '../components/Entertainment';
import { AroundIndiaClub, CelebrityExperiences, SafeAdventure, MemoryScannerDressUp, FoodFestival, NightExperiences, LegacyWorkshopGaming } from '../components/Startup';
import { BucketList, DailySchedule } from '../components/Living';
import { SignatureExperiencesExpanded } from '../components/Signature';

export function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title={<>365 days of<br /><span className="italic text-gradient-gold">joy and adventure</span></>}
        subtitle="Entertainment, adventures, around-India themes, celebrity visits, night experiences, food festivals, gaming, workshops, and signature experiences — every day brings something to look forward to."
        img="https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <div id="entertainment"><Entertainment /></div>
      <div id="adventures"><Adventures /></div>
      <div id="safe-adventure"><SafeAdventure /></div>
      <div id="bucket-list"><BucketList /></div>
      <div id="india-club"><AroundIndiaClub /></div>
      <div id="celebrity"><CelebrityExperiences /></div>
      <div id="night"><NightExperiences /></div>
      <div id="food-festival"><FoodFestival /></div>
      <div id="gaming"><LegacyWorkshopGaming /></div>
      <div id="memory-scanner"><MemoryScannerDressUp /></div>
      <div id="daily-schedule"><DailySchedule /></div>
      <div id="nature"><NatureEcosystem /></div>
      <div><Experiences /></div>
      <div id="signature-experiences"><SignatureExperiencesExpanded /></div>
    </>
  );
}
