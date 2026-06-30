import { useState } from 'react';
import { Reveal, SectionHeading } from './Reveal';
import { emotionalWellnessExpanded, smileMeterOptions, healthFeatures, travelFeatures } from '../data';
import { Smile, TrendingUp } from 'lucide-react';

export function EmotionalEcosystem() {
  const [mood, setMood] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Emotional Wellness"
            title={<>Because happiness is<br />a health metric too</>}
            subtitle="Friendship matching, birthday surprises, grandparent adoption, pet companions, and daily mood tracking — we treat emotional health with the same seriousness as physical health."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emotionalWellnessExpanded.map((feat, i) => (
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

        {/* Smile Meter */}
        <Reveal delay={200}>
          <div className="mt-12 bg-gradient-to-r from-forest-50 to-gold-50 rounded-3xl p-8 border border-forest-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-forest-700 flex items-center justify-center">
                <Smile className="w-6 h-6 text-gold-300" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-forest-900 font-semibold">Smile Meter</h3>
                <p className="text-sm text-forest-600">Daily mood tracking — counsellors get alerts when someone needs a friend</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {smileMeterOptions.map((opt, i) => (
                <button
                  key={opt.label}
                  onClick={() => setMood(i)}
                  className={`flex-1 flex flex-col items-center gap-2 p-5 rounded-2xl border-2 transition-all ${
                    mood === i
                      ? 'border-forest-500 bg-white shadow-lg scale-105'
                      : 'border-transparent bg-white/60 hover:bg-white'
                  }`}
                >
                  <span className="text-4xl">{opt.emoji}</span>
                  <span className="font-semibold text-forest-800">{opt.label}</span>
                </button>
              ))}
            </div>
            {mood === 2 && (
              <div className="mt-4 bg-gold-50 border border-gold-200 rounded-xl p-4 text-center text-sm text-gold-800">
                A counsellor will reach out to you today. You're not alone — that's the whole point.
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HealthEcosystem() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-700/30 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Health Ecosystem"
            title={<>Smart, predictive,<br />and always watching over you</>}
            subtitle="From AI health prediction to fall detection to SOS watches — technology that keeps residents safe without ever taking away their independence."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthFeatures.map((feat, i) => (
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

        {/* AI Prediction callout */}
        <Reveal delay={200}>
          <div className="mt-12 flex items-start gap-4 bg-gradient-to-r from-gold-500/10 to-transparent border border-gold-400/20 rounded-2xl p-6">
            <TrendingUp className="w-8 h-8 text-gold-300 shrink-0" />
            <div>
              <h4 className="font-serif text-lg text-white font-semibold">AI Health Prediction</h4>
              <p className="text-sm text-forest-100/70 mt-1">
                Our system detects patterns — poor sleep, low activity, stress, rising BP —
                and alerts the medical team <span className="text-gold-200 font-medium">before</span> it becomes a crisis.
                Prevention, not just reaction.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TravelEcosystem() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Travel Ecosystem"
            title={<>The world is still waiting<br />to be seen</>}
            subtitle="International tours, spiritual pilgrimages, weekend picnics, and annual cruises — travel designed for seniors, with every detail handled."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelFeatures.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 80}>
              <div className="group h-full bg-white border border-forest-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-forest-300 transition-all hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <feat.icon className="w-5 h-5 text-forest-700" />
                  </div>
                  <h3 className="absolute bottom-3 left-4 right-4 font-serif text-xl text-white font-semibold">
                    {feat.title}
                  </h3>
                </div>
                <div className="p-5">
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
