import { Reveal, SectionHeading } from './Reveal';
import { bucketList, dailySchedule, wellnessServices } from '../data';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function BucketList() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gold-50 via-sand-50 to-forest-50 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              <Sparkles className="w-4 h-4" /> Our Signature Feature
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-forest-900 leading-[1.1]">
              Before I Leave...
            </h2>
            <p className="mt-5 text-lg text-forest-700/80 leading-relaxed">
              Every resident writes their <span className="font-semibold text-forest-800">Dream List</span> when
              they join. Our staff works with them to make each dream come true — because
              it's never too late to do the thing you always wanted to do.
            </p>
            <div className="mt-6 border-l-4 border-gold-400 pl-5">
              <p className="font-serif italic text-2xl text-forest-800 leading-snug">
                "I always wanted to see snowfall. At 72, I finally did."
              </p>
              <p className="text-sm text-forest-600 mt-2">— A resident's first dream, fulfilled</p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-forest-100">
              <h3 className="font-serif text-2xl text-forest-900 font-semibold mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-forest-600" />
                My Dream List
              </h3>
              <div className="space-y-3">
                {bucketList.map((dream, i) => (
                  <div
                    key={dream}
                    className="flex items-center gap-3 group"
                    style={{ animation: `fadeIn 0.5s ease-out ${i * 0.08}s both` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-forest-100 group-hover:bg-forest-600 flex items-center justify-center transition-colors shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-forest-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-forest-800">{dream}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-forest-100 text-center">
                <p className="text-sm text-forest-600 italic">
                  Staff helps complete every dream — one by one.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function DailySchedule() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="A Day in the Life"
            title={<>A day well lived,<br />every day</>}
            subtitle="From sunrise yoga to evening meditation — a rhythm that balances activity, rest, connection, and joy."
          />
        </Reveal>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/0 via-gold-400/40 to-gold-400/0 md:-translate-x-1/2" />

          <div className="space-y-6">
            {dailySchedule.map((item, i) => (
              <Reveal key={item.activity} delay={i * 40}>
                <div
                  className={`relative flex items-center gap-5 ${
                    i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gold-400 ring-4 ring-forest-950 -translate-x-1/2 z-10" />

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors`}>
                    <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-1">
                      <item.icon className="w-5 h-5 text-gold-300 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-0">
                          <span className="text-gold-300 text-sm font-semibold">{item.time}</span>
                        </div>
                        <div className="text-white font-medium">{item.activity}</div>
                      </div>
                    </div>
                  </div>
                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WellnessCenter() {
  return (
    <section id="wellness" className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Wellness Center"
              title={<>Healing for the body,<br />calm for the mind</>}
              subtitle="A dedicated wellness center where residents can relax, recover, and rejuvenate — body, mind, and spirit."
              center={false}
            />
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {wellnessServices.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center text-center bg-white border border-forest-100 rounded-xl p-4 hover:shadow-lg hover:border-forest-300 transition-all"
                >
                  <s.icon className="w-6 h-6 text-forest-600 mb-2" />
                  <span className="text-sm font-medium text-forest-800">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3759659/pexels-photo-3759659.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wellness and spa"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-forest-700 text-white rounded-2xl p-5 shadow-xl hidden md:block">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-300" />
                  <span className="font-serif text-lg">Holistic Care</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
