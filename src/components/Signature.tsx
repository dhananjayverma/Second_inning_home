import { Reveal, SectionHeading } from './Reveal';
import { signatureExperiencesExpanded, websiteFeatures } from '../data';
import { Globe, CheckCircle2 } from 'lucide-react';

export function SignatureExperiencesExpanded() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-forest-900 to-forest-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Signature Experiences"
            title={<>The moments that make us<br />India's most premium senior living brand</>}
            subtitle="These are not amenities. These are the experiences that turn a residence into a memory — and a memory into a story told for generations."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {signatureExperiencesExpanded.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 40}>
              <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-gold-400/40 transition-all hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400/30 to-gold-600/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <exp.icon className="w-5 h-5 text-gold-300" />
                </div>
                <h3 className="font-serif text-base text-white font-semibold mb-1.5 leading-tight">{exp.title}</h3>
                <p className="text-xs text-forest-100/60 leading-relaxed">{exp.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WebsiteFeatures() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Digital Platform"
              title={<>Everything you need,<br />online and accessible</>}
              subtitle="From 3D virtual tours to AI chat assistants to online bill payments — our digital platform makes every interaction simple, transparent, and dignified."
              center={false}
            />
            <div className="mt-6 border-l-4 border-gold-400 pl-5">
              <p className="font-serif italic text-xl text-forest-800 leading-snug">
                "Retirement is not the end of the journey. It's the freedom to live
                every dream you postponed."
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {websiteFeatures.map((feature, i) => (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 bg-white border border-forest-100 rounded-xl p-3.5 hover:shadow-md hover:border-forest-300 transition-all"
                  style={{ animation: `fadeIn 0.4s ease-out ${i * 0.04}s both` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-forest-600 shrink-0" />
                  <span className="text-sm font-medium text-forest-800">{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Ultimate vision banner */}
        <Reveal delay={200}>
          <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950 p-10 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <Globe className="w-12 h-12 text-gold-300 mx-auto mb-5" />
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight max-w-3xl mx-auto">
                Not an old-age home.<br />
                <span className="text-gradient-gold italic">India's most premium senior living brand.</span>
              </h3>
              <p className="mt-6 text-lg text-forest-100/80 max-w-2xl mx-auto leading-relaxed">
                Second Innings House is a complete ecosystem — lifestyle, entertainment,
                nature, wellness, health, travel, dining, learning, digital, family, creative,
                contribution, sustainability, and rewards. All designed for one purpose:
                to make every day feel like a new beginning.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
