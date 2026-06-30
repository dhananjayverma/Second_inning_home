import { PageHero } from '../components/PageHero';
import { Pricing, FAQ } from '../components/Contact';
import { Accommodation, Dining } from '../components/Facilities';
import { DiningEcosystem } from '../components/Ecosystem';
import { Reveal, SectionHeading } from '../components/Reveal';
import { Link } from 'react-router-dom';

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & Stay"
        title={<>Transparent, all-inclusive<br /><span className="italic text-gradient-gold">monthly living</span></>}
        subtitle="No hidden costs. Everything — meals, care, activities, and community — is included. Choose the home that fits your life, and try it before you commit."
        img="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <Pricing />
      <Accommodation />
      <Dining />
      <DiningEcosystem />
      <FAQ />

      {/* Trial stay CTA */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="bg-gradient-to-br from-forest-800 to-forest-950 rounded-3xl p-10 lg:p-14 text-center border border-forest-700">
              <SectionHeading
                light
                title={<>Not sure yet?<br /><span className="italic text-gradient-gold">Come stay with us.</span></>}
                subtitle="We offer trial stays of 3–7 days so you can experience life here firsthand. No commitment, no pressure — just a taste of your second innings."
              />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-forest-950 px-8 py-4 rounded-full text-base font-medium transition-all hover:shadow-2xl hover:shadow-gold-500/30 mt-8"
              >
                Book a Trial Stay
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
