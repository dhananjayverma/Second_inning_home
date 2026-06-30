import { PageHero } from '../components/PageHero';
import { DreamBoard, MemoryLane, StoryStudio, FamilyTree, MemoryBook } from '../components/Lifestyle';
import { LoveRelationships, GrandkidsExperience } from '../components/Startup';
import { LegacyProgram } from '../components/Memory';

export function LifestylePage() {
  return (
    <>
      <PageHero
        eyebrow="Lifestyle"
        title={<>Dreams, memories,<br /><span className="italic text-gradient-gold">and love</span></>}
        subtitle="Every resident writes a dream board, builds a memory lane, records their life story, and finds companionship. This is where the second chapter becomes the most beautiful one."
        img="https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <div id="dream-board"><DreamBoard /></div>
      <div id="memory-lane"><MemoryLane /></div>
      <div id="story-studio"><StoryStudio /></div>
      <div id="family-tree"><FamilyTree /></div>
      <MemoryBook />
      <div id="love"><LoveRelationships /></div>
      <div id="grandkids"><GrandkidsExperience /></div>
      <LegacyProgram />
    </>
  );
}
