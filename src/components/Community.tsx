import { Reveal, SectionHeading } from './Reveal';
import { communityEvents, spiritualFeatures, emotionalWellness, petTherapy } from '../data';
import { Cat } from 'lucide-react';

export function Community() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Community"
            title={<>A family that celebrates<br />everything together</>}
            subtitle="Birthdays, anniversaries, talent shows, fashion shows, and friendly competitions — because joy shared is joy doubled."
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {communityEvents.map((e, i) => (
            <Reveal key={e.label} delay={i * 40}>
              <div className="group flex flex-col items-center text-center bg-white border border-forest-100 rounded-2xl p-5 hover:shadow-lg hover:border-forest-300 transition-all hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-full bg-forest-50 group-hover:bg-forest-700 flex items-center justify-center mb-3 transition-colors">
                  <e.icon className="w-6 h-6 text-forest-700 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-medium text-forest-800">{e.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Spiritual() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-forest-900 to-forest-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Spiritual"
              title={<>A space for the soul<br />to be still</>}
              subtitle="For many, faith is a source of comfort and strength. We honor every tradition with dedicated spaces and regular gatherings."
              center={false}
            />
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {spiritualFeatures.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-colors"
                >
                  <s.icon className="w-5 h-5 text-gold-300 shrink-0" />
                  <span className="text-sm font-medium text-forest-50">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <img
              src="https://images.pexels.com/photos/8473089/pexels-photo-8473089.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Meditation and prayer space"
              className="rounded-3xl shadow-2xl w-full h-[440px] object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function EmotionalWellness() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Emotional Wellness"
            title={<>Because the heart needs<br />care too</>}
            subtitle="Loneliness is the real illness of aging. We treat it with connection, conversation, laughter, and love."
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {emotionalWellness.map((e, i) => (
            <Reveal key={e.label} delay={i * 50}>
              <div className="group flex flex-col items-center text-center bg-forest-50 border border-forest-100 rounded-2xl p-5 hover:shadow-lg hover:border-forest-300 transition-all hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-full bg-white group-hover:bg-forest-700 flex items-center justify-center mb-3 transition-colors">
                  <e.icon className="w-6 h-6 text-forest-700 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-medium text-forest-800">{e.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PetTherapy() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gold-50 to-sand-50 relative overflow-hidden">
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-200/30 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img
              src="https://images.pexels.com/photos/4060141/pexels-photo-4060141.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Senior with a therapy dog"
              className="rounded-3xl shadow-2xl w-full h-[440px] object-cover"
            />
          </Reveal>
          <Reveal delay={150}>
            <span className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              <Cat className="w-4 h-4" /> Pet Therapy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-forest-900 leading-[1.1]">
              Sometimes the best therapist<br />has four paws
            </h2>
            <p className="mt-5 text-lg text-forest-700/80 leading-relaxed">
              Our resident animals bring comfort, companionship, and unconditional love.
              Studies show pet therapy reduces stress, lowers blood pressure, and simply
              makes people happier. So we have plenty of furry friends.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {petTherapy.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2 bg-white border border-forest-100 rounded-full px-5 py-2.5 hover:shadow-md transition-all"
                >
                  <p.icon className="w-5 h-5 text-forest-600" />
                  <span className="text-sm font-medium text-forest-800">{p.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
