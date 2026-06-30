import { Hero } from '../components/Hero';
import { About, WhyChooseUs } from '../components/About';
import { LifeAtSecondInnings } from '../components/Facilities';
import { DreamBoard } from '../components/Lifestyle';
import { Entertainment } from '../components/Entertainment';
import { EmotionalEcosystem, HealthEcosystem } from '../components/Wellness';
import { BrandIdentity } from '../components/Startup';
import { SignatureExperiencesExpanded } from '../components/Signature';
import { Testimonials } from '../components/Contact';
import { Reveal, SectionHeading } from '../components/Reveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <div id="why-choose-us"><WhyChooseUs /></div>
      <LifeAtSecondInnings />
      <DreamBoard />
      <Entertainment />
      <HealthEcosystem />
      <EmotionalEcosystem />
      <BrandIdentity />

      {/* CTA to explore */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-center">
              <SectionHeading
                eyebrow="Explore the Ecosystem"
                title={<>This is not a website.<br /><span className="italic">It's a movement.</span></>}
                subtitle="Five pages. Fifty+ experiences. One promise — that retirement is not the end of the journey, but the freedom to live every dream you postponed."
              />
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {[
                  { label: 'Lifestyle', href: '/lifestyle', desc: 'Dreams, memories & love' },
                  { label: 'Wellness', href: '/wellness', desc: 'Health, brain & spirit' },
                  { label: 'Experiences', href: '/experiences', desc: 'Adventures & joy' },
                  { label: 'Community', href: '/community', desc: 'Family & connection' },
                ].map((cta) => (
                  <Link
                    key={cta.label}
                    to={cta.href}
                    className="group bg-white border border-forest-100 rounded-2xl p-6 w-56 text-left card-hover hover:border-forest-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-xl text-forest-900 font-medium">{cta.label}</span>
                      <ArrowRight className="w-5 h-5 text-forest-400 group-hover:text-forest-700 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-forest-600">{cta.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="signature-experiences"><SignatureExperiencesExpanded /></div>
      <div id="testimonials"><Testimonials /></div>
    </>
  );
}
