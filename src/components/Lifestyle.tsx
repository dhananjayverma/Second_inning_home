import { useState } from 'react';
import { Reveal, SectionHeading } from './Reveal';
import { dreamBoardItems, memoryLaneEvents, storyStudioThemes, familyTreeData } from '../data';
import { CheckCircle2, Circle, BookOpen, Video, Mic, Award, Download, Sparkles } from 'lucide-react';

export function DreamBoard() {
  const [items, setItems] = useState(dreamBoardItems);
  const completed = items.filter((i) => i.done).length;

  const toggle = (idx: number) => {
    setItems((prev) => prev.map((item, i) => (i === idx ? { ...item, done: !item.done } : item)));
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gold-50 via-sand-50 to-forest-50 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              <Sparkles className="w-4 h-4" /> Dream Board
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-forest-900 leading-[1.1]">
              Your wishlist,<br />our mission
            </h2>
            <p className="mt-5 text-lg text-forest-700/80 leading-relaxed">
              Every resident creates their dream board when they join. Staff works
              alongside them to check each one off — because it's never too late
              to do the thing you always postponed.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex-1 bg-forest-100 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-forest-500 to-forest-700 rounded-full transition-all duration-500"
                  style={{ width: `${(completed / items.length) * 100}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-forest-700">
                {completed}/{items.length} done
              </span>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white rounded-3xl shadow-2xl p-7 border border-forest-100">
              <div className="grid grid-cols-2 gap-3">
                {items.map((item, i) => (
                  <button
                    key={item.text}
                    onClick={() => toggle(i)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all hover:shadow-md ${
                      item.done
                        ? 'bg-forest-50 border-forest-300'
                        : 'bg-sand-50 border-forest-100 hover:border-forest-200'
                    }`}
                  >
                    {item.done ? (
                      <CheckCircle2 className="w-5 h-5 text-forest-600 shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-forest-300 shrink-0" />
                    )}
                    <div className="flex items-center gap-2">
                      <item.icon className={`w-4 h-4 ${item.done ? 'text-forest-600' : 'text-forest-400'}`} />
                      <span className={`text-sm ${item.done ? 'text-forest-700 line-through opacity-60' : 'text-forest-800'}`}>
                        {item.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <p className="mt-5 text-center text-sm text-forest-600 italic">
                Tap to mark a dream as fulfilled
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function MemoryLane() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-forest-700/30 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Memory Lane"
            title={<>A digital timeline of<br />a life well lived</>}
            subtitle="Every resident's journey — from marriage to first job to first child to retirement to today — preserved as a living timeline with photos, videos, and voice notes."
          />
        </Reveal>

        {/* Timeline */}
        <div className="mt-16 relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/0 via-gold-400/40 to-gold-400/0 md:-translate-x-1/2" />
          <div className="space-y-8">
            {memoryLaneEvents.map((event, i) => (
              <Reveal key={event.year} delay={i * 100}>
                <div className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-gold-400 ring-4 ring-forest-950 -translate-x-1/2 z-10" />
                  <div className="ml-16 md:ml-0 md:w-[calc(50%-2.5rem)]">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-gold-400/40 transition-all group">
                      <div className="flex">
                        <img
                          src={event.img}
                          alt={event.title}
                          className="w-28 h-28 object-cover shrink-0"
                        />
                        <div className="p-5 flex-1">
                          <div className="text-gold-300 font-serif text-2xl font-semibold">{event.year}</div>
                          <div className="text-white font-medium text-lg">{event.title}</div>
                          <div className="text-forest-100/60 text-sm mt-1">{event.desc}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Memory types */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              { icon: BookOpen, label: 'Stories' },
              { icon: Video, label: 'Videos' },
              { icon: Mic, label: 'Voice Notes' },
              { icon: Award, label: 'Achievements' },
              { icon: Award, label: 'Certificates' },
            ].map((m) => (
              <span
                key={m.label}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-forest-50 text-sm px-4 py-2 rounded-full"
              >
                <m.icon className="w-4 h-4 text-gold-300" />
                {m.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function StoryStudio() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img
              src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Story recording studio"
              className="rounded-3xl shadow-2xl w-full h-[440px] object-cover"
            />
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading
              eyebrow="Story Recording Studio"
              title={<>Your voice, preserved<br />for generations</>}
              subtitle="A professional recording studio where residents tell their life stories — in their own voice, their own words. Grandchildren will watch these for decades."
              center={false}
            />
            <div className="mt-8 space-y-3">
              {storyStudioThemes.map((theme) => (
                <div
                  key={theme.title}
                  className="group flex items-center gap-4 bg-white border border-forest-100 rounded-xl p-4 hover:shadow-lg hover:border-forest-300 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-forest-50 group-hover:bg-forest-700 flex items-center justify-center transition-colors shrink-0">
                    <theme.icon className="w-5 h-5 text-forest-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-serif text-lg text-forest-900 font-semibold">{theme.title}</div>
                    <div className="text-sm text-forest-600">{theme.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FamilyTree() {
  const TreeNode = ({ node, isRoot = false }: { node: { name: string; role: string; children?: any[] }; isRoot?: boolean }) => (
    <div className="flex flex-col items-center">
      <div
        className={`rounded-2xl px-5 py-3 text-center cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 ${
          isRoot
            ? 'bg-forest-700 text-white'
            : 'bg-white border-2 border-forest-200 text-forest-800 hover:border-forest-400'
        }`}
      >
        <div className="font-serif text-base font-semibold">{node.name}</div>
        <div className={`text-xs ${isRoot ? 'text-gold-200' : 'text-forest-500'}`}>{node.role}</div>
      </div>
      {node.children && node.children.length > 0 && (
        <>
          <div className="w-px h-6 bg-forest-300" />
          <div className="flex gap-6 flex-wrap justify-center">
            {node.children.map((child: any, i: number) => (
              <div key={i} className="flex flex-col items-center">
                <TreeNode node={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Family Tree"
              title={<>Roots that run deep,<br />branches that reach far</>}
              subtitle="An interactive family tree — each profile clickable, each story connected. Residents build their legacy, one branch at a time."
              center={false}
            />
            <div className="mt-6 border-l-4 border-gold-400 pl-5">
              <p className="font-serif italic text-xl text-forest-800 leading-snug">
                "My grandchildren can see where they came from. That matters more
                than I ever realized."
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-sand-50 rounded-3xl shadow-xl p-8 border border-forest-100 overflow-x-auto">
              <div className="flex justify-center min-w-fit">
                <TreeNode node={familyTreeData} isRoot />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function MemoryBook() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-forest-50 to-gold-50">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-forest-100 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-forest-100 flex items-center justify-center mb-5">
              <BookOpen className="w-8 h-8 text-forest-700" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-forest-900 font-semibold">
              The Memory Book
            </h3>
            <p className="mt-4 text-lg text-forest-700/80 max-w-2xl mx-auto leading-relaxed">
              We automatically generate a beautiful memory book for every resident —
              photo albums, stories, events, achievements, travel photos, and birthday
              pictures. Downloadable as a PDF. A lifetime in one book.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {['Photo Album', 'Stories', 'Events', 'Achievements', 'Travel Photos', 'Birthday Pictures'].map((item) => (
                <span
                  key={item}
                  className="bg-forest-50 text-forest-700 text-sm font-medium px-4 py-2 rounded-full border border-forest-100"
                >
                  {item}
                </span>
              ))}
            </div>
            <button className="mt-8 inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg">
              <Download className="w-5 h-5" />
              Download as PDF
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
