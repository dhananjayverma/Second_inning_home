import { Reveal, SectionHeading } from './Reveal';
import { diningExpanded, learningFeatures, digitalFeatures, familyFeaturesExpanded } from '../data';

export function DiningEcosystem() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Dining Ecosystem"
            title={<>More than meals —<br />moments shared</>}
            subtitle="Live kitchens, family dinner bookings, private birthday dining, and regional food weeks — our dining is an experience, not a service."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diningExpanded.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 80}>
              <div className="group h-full bg-sand-50 border border-forest-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-forest-300 transition-all hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
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

export function LearningEcosystem() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-forest-50 to-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Learning Ecosystem"
            title={<>It's never too late<br />to learn something new</>}
            subtitle="A university for seniors, guest speakers, and reading clubs — because the mind, like the body, thrives when it's growing."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {learningFeatures.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 100}>
              <div className="group h-full bg-white border border-forest-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-forest-300 transition-all hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <feat.icon className="w-5 h-5 text-forest-700" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-forest-900 font-semibold mb-2">{feat.title}</h3>
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

export function DigitalEcosystem() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Digital Ecosystem"
            title={<>Technology that serves,<br />never intrudes</>}
            subtitle="Resident apps, family apps, QR rooms, voice assistants, and an AI companion — a full digital ecosystem designed for dignity, safety, and connection."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalFeatures.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 70}>
              <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold-400/40 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/30 to-gold-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feat.icon className="w-6 h-6 text-gold-300" />
                </div>
                <h3 className="font-serif text-xl text-white font-semibold mb-2">{feat.title}</h3>
                <p className="text-sm text-forest-100/70 leading-relaxed">{feat.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FamilyEcosystem() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Family Ecosystem"
            title={<>Families are part<br />of the community too</>}
            subtitle="Family timelines, permission-based live cameras, and digital letters from grandchildren — we keep families close, no matter the distance."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {familyFeaturesExpanded.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 100}>
              <div className="group h-full bg-white border border-forest-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-forest-300 transition-all hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <feat.icon className="w-5 h-5 text-forest-700" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-forest-900 font-semibold mb-2">{feat.title}</h3>
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
