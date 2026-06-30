import { Reveal, SectionHeading } from './Reveal';
import { Image, BookOpen, Video, Mic, Heart, TreePine } from 'lucide-react';

export function MemoryWall() {
  const memories = [
    {
      img: 'https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Mr. Ramesh Iyer',
      story: 'My first trek at 68 — I thought I couldn\'t. I did.',
    },
    {
      img: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Mrs. Lakshmi Nair',
      story: 'I learned to paint here. My grandchildren framed my first work.',
    },
    {
      img: 'https://images.pexels.com/photos/3387156/pexels-photo-3387156.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Dr. Suresh Patil',
      story: 'I saw snowfall for the first time. At 74. I cried.',
    },
  ];

  const memoryTypes = [
    { icon: Image, label: 'Old Photos' },
    { icon: BookOpen, label: 'Life Story' },
    { icon: Heart, label: 'Achievements' },
    { icon: TreePine, label: 'Family Tree' },
    { icon: Image, label: 'Travel Memories' },
    { icon: Video, label: 'Videos' },
    { icon: Mic, label: 'Voice Notes' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Memory Wall"
            title={<>Every life is a story<br />worth remembering</>}
            subtitle="Residents share their old photos, life stories, achievements, and memories — a living wall of lives well lived."
          />
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {memoryTypes.map((m) => (
            <span
              key={m.label}
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-forest-50 text-sm px-4 py-2 rounded-full"
            >
              <m.icon className="w-4 h-4 text-gold-300" />
              {m.label}
            </span>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {memories.map((mem, i) => (
            <Reveal key={mem.name} delay={i * 120}>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-gold-400/40 transition-all hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={mem.img}
                    alt={mem.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="font-serif text-lg text-white font-semibold">{mem.name}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-serif italic text-forest-50/90 leading-relaxed">"{mem.story}"</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegacyProgram() {
  const legacyItems = [
    { icon: BookOpen, label: 'Life Lessons' },
    { icon: Mic, label: 'Stories' },
    { icon: Heart, label: 'Messages' },
    { icon: BookOpen, label: 'Letters' },
    { icon: BookOpen, label: 'Advice' },
    { icon: Video, label: 'Videos' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gold-50 via-sand-50 to-forest-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              <TreePine className="w-4 h-4" /> Legacy Program
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-forest-900 leading-[1.1]">
              Words that live on,<br />for generations
            </h2>
            <p className="mt-5 text-lg text-forest-700/80 leading-relaxed">
              Residents can record their life lessons, stories, messages, and advice for
              their grandchildren — in their own voice, their own words. A gift that
              outlives us all.
            </p>
            <div className="mt-8 border-l-4 border-gold-400 pl-5">
              <p className="font-serif italic text-2xl text-forest-800 leading-snug">
                "When I am gone, my grandchildren will still hear my voice telling them
                I love them. That is worth everything."
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-forest-100">
              <h3 className="font-serif text-2xl text-forest-900 font-semibold mb-5">
                What residents can record
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {legacyItems.map((l) => (
                  <div
                    key={l.label}
                    className="flex flex-col items-center text-center bg-forest-50 border border-forest-100 rounded-xl p-4 hover:bg-forest-100 transition-colors"
                  >
                    <l.icon className="w-6 h-6 text-forest-600 mb-2" />
                    <span className="text-sm font-medium text-forest-800">{l.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-forest-100 flex items-center gap-3">
                <TreePine className="w-8 h-8 text-forest-600" />
                <p className="text-sm text-forest-700">
                  Paired with our <span className="font-semibold">"Plant a Tree, Leave a Legacy"</span> program —
                  every resident plants a tree that grows in their name.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
