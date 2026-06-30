import { Reveal, SectionHeading } from './Reveal';
import { entertainmentFeatures, hobbyMarketItems, expandedNatureFeatures } from '../data';
import { ShoppingBag } from 'lucide-react';

export function Entertainment() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-forest-900 to-forest-950 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Entertainment"
            title={<>The show never stops<br />at Second Innings</>}
            subtitle="Retro cinema, music rooms, dance halls, and open-air theatre — entertainment designed for the generation that knows how to enjoy it."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {entertainmentFeatures.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl h-72">
                <img
                  src={feat.img}
                  alt={feat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/30 backdrop-blur-sm flex items-center justify-center mb-3">
                    <feat.icon className="w-6 h-6 text-gold-200" />
                  </div>
                  <h3 className="font-serif text-2xl text-white font-semibold mb-1">{feat.title}</h3>
                  <p className="text-sm text-forest-50/80 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hobby Marketplace */}
        <Reveal delay={200}>
          <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-gold-300" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-white font-semibold">Hobby Marketplace</h3>
                <p className="text-sm text-forest-100/70">Residents create, display, and sell their work</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {hobbyMarketItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-gold-400/40 transition-all"
                >
                  <item.icon className="w-6 h-6 text-gold-300 mb-2" />
                  <span className="text-sm font-medium text-forest-50">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function NatureEcosystem() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Nature Ecosystem"
            title={<>A campus that breathes,<br />grows, and heals</>}
            subtitle="Eight dedicated nature spaces — each designed for a different kind of peace. From butterfly gardens to sunset points, nature is not a backdrop here. It's the point."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expandedNatureFeatures.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 60}>
              <div className="group h-full bg-white border border-forest-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-forest-300 transition-all hover:-translate-y-1">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <feat.icon className="w-5 h-5 text-forest-700" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-forest-900 font-semibold mb-1.5">{feat.title}</h3>
                  <p className="text-sm text-forest-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
