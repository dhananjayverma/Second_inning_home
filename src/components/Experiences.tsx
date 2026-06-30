import { Reveal, SectionHeading } from './Reveal';
import { experiencePrograms, adventurePrograms, premiumAdventures } from '../data';
import { Sparkles, Compass } from 'lucide-react';

export function Experiences() {
  return (
    <section id="experiences" className="py-24 lg:py-32 bg-gradient-to-b from-forest-950 to-forest-900 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Experience Programs"
            title={<>More than games.<br />These are moments.</>}
            subtitle="Instead of passing time, our residents create memories — through music, dance, festivals, hobbies, and learning new skills."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiencePrograms.map((prog, i) => (
            <Reveal key={prog.title} delay={i * 80}>
              <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400/30 to-gold-600/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <prog.icon className="w-7 h-7 text-gold-300" />
                </div>
                <h3 className="font-serif text-2xl text-white font-semibold mb-2">{prog.title}</h3>
                <p className="text-forest-100/70 leading-relaxed">{prog.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Adventures() {
  return (
    <section id="adventures" className="py-24 lg:py-32 bg-sand-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-100/40 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-4">
            <span className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              <Compass className="w-4 h-4" /> Our Unique Selling Point
            </span>
          </div>
          <SectionHeading
            eyebrow="Adventure Programs"
            title={<>The heart still wants<br />to wander</>}
            subtitle="Senior-friendly adventures that make the spirit feel young again. From sunrise walks to international trips — every resident chooses their own kind of brave."
          />
        </Reveal>

        {/* Regular adventures */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {adventurePrograms.map((adv, i) => (
            <Reveal key={adv.title} delay={i * 40}>
              <div className="group bg-white border border-forest-100 rounded-2xl p-5 text-center hover:shadow-xl hover:border-forest-300 transition-all hover:-translate-y-1 h-full">
                <div className="w-12 h-12 mx-auto rounded-full bg-forest-50 group-hover:bg-forest-700 flex items-center justify-center mb-3 transition-colors">
                  <adv.icon className="w-6 h-6 text-forest-700 group-hover:text-white transition-colors" />
                </div>
                <div className="text-sm font-semibold text-forest-800">{adv.title}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Premium adventures */}
        <Reveal delay={200}>
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-gold-500" />
              <h3 className="font-serif text-2xl text-forest-900 font-semibold">Premium Adventures</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {premiumAdventures.map((adv) => (
                <div
                  key={adv.title}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-forest-800 to-forest-950 p-7 hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-500 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                      {adv.tag}
                    </span>
                  </div>
                  <adv.icon className="w-10 h-10 text-gold-300 mb-4" />
                  <h4 className="font-serif text-xl text-white font-semibold mb-1">{adv.title}</h4>
                  {adv.sub && <p className="text-sm text-forest-100/70">{adv.sub}</p>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
