import { Reveal, SectionHeading } from './Reveal';
import { natureFeatures, familyFeatures, technologyFeatures } from '../data';
import { Smartphone, ShieldAlert, Ambulance } from 'lucide-react';

export function NatureFeatures() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3601057/pexels-photo-3601057.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful garden with flowers"
                className="rounded-3xl shadow-2xl w-full h-[480px] object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Lake in nature"
                className="absolute -bottom-8 -left-8 rounded-2xl shadow-xl w-48 h-48 object-cover border-4 border-white hidden md:block"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading
              eyebrow="Nature Features"
              title={<>Surrounded by living,<br />breathing beauty</>}
              subtitle="Our campus is a sanctuary — organic farms, flower gardens, walking trails, a private lake, and quiet corners for reflection."
              center={false}
            />
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {natureFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2.5 bg-forest-50 border border-forest-100 rounded-xl p-3 hover:bg-forest-100 transition-colors"
                >
                  <f.icon className="w-5 h-5 text-forest-600 shrink-0" />
                  <span className="text-sm font-medium text-forest-800">{f.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FamilyPortal() {
  return (
    <section id="family" className="py-24 lg:py-32 bg-gradient-to-b from-forest-50 to-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              <Smartphone className="w-4 h-4" /> Family Portal
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-forest-900 leading-[1.1]">
              Families stay close,<br />no matter the distance
            </h2>
            <p className="mt-5 text-lg text-forest-700/80 leading-relaxed">
              Our dedicated family app keeps loved ones connected — view photos, check
              health reports, video call, book visits, and receive emergency alerts.
              Peace of mind, in your pocket.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {familyFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2.5 bg-white border border-forest-100 rounded-xl p-3 hover:shadow-md transition-all"
                >
                  <f.icon className="w-5 h-5 text-forest-600 shrink-0" />
                  <span className="text-sm font-medium text-forest-800">{f.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            {/* Phone mockup */}
            <div className="flex justify-center">
              <div className="relative w-72 h-[560px] bg-forest-950 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-forest-950 rounded-b-2xl z-10" />
                <div className="w-full h-full bg-sand-50 rounded-[2rem] overflow-hidden p-5 pt-10">
                  <div className="text-center mb-5">
                    <div className="font-serif text-xl text-forest-900 font-semibold">Family App</div>
                    <div className="text-xs text-forest-600">Mom's updates</div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-forest-50 rounded-xl p-3">
                      <div className="text-xs text-forest-600 mb-1">Today's Photo</div>
                      <img
                        src="https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Mom in garden"
                        className="rounded-lg w-full h-24 object-cover"
                      />
                    </div>
                    <div className="bg-white border border-forest-100 rounded-xl p-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-forest-500" />
                      <span className="text-xs text-forest-800">Health: Stable & happy</span>
                    </div>
                    <div className="bg-gold-50 border border-gold-200 rounded-xl p-3">
                      <div className="text-xs text-gold-700 font-semibold">Upcoming</div>
                      <div className="text-xs text-forest-700 mt-1">Birthday celebration — Aug 8</div>
                    </div>
                    <div className="bg-forest-700 text-white rounded-xl p-3 text-center text-sm font-semibold">
                      Video Call Mom
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Technology() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-forest-700/30 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Technology"
            title={<>Smart care, invisible<br />and intuitive</>}
            subtitle="Technology that serves, never intrudes — keeping residents safe and families informed, while preserving dignity and independence."
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologyFeatures.map((t, i) => (
            <Reveal key={t.label} delay={i * 50}>
              <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-gold-400/40 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto rounded-xl bg-gold-500/20 flex items-center justify-center mb-3 group-hover:bg-gold-500/30 transition-colors">
                  <t.icon className="w-6 h-6 text-gold-300" />
                </div>
                <span className="text-sm font-medium text-forest-50">{t.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Emergency callout */}
        <Reveal delay={200}>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { icon: ShieldAlert, title: 'One-Tap Emergency', desc: 'Help arrives in minutes, 24×7.' },
              { icon: Ambulance, title: 'Ambulance & Hospital Tie-ups', desc: 'Direct access to partnered hospitals.' },
              { icon: Smartphone, title: 'Family Alert System', desc: 'Loved ones notified instantly.' },
            ].map((e) => (
              <div
                key={e.title}
                className="flex items-start gap-4 bg-gradient-to-br from-red-900/20 to-forest-900/20 border border-red-500/20 rounded-2xl p-5"
              >
                <e.icon className="w-8 h-8 text-red-300 shrink-0" />
                <div>
                  <h4 className="font-serif text-lg text-white font-semibold">{e.title}</h4>
                  <p className="text-sm text-forest-100/70 mt-1">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
