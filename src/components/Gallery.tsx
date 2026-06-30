import { useState } from 'react';
import { Reveal, SectionHeading } from './Reveal';
import { Link } from 'react-router-dom';
import { galleryCategories, upcomingEvents, premiumExperiences } from '../data';
import { Calendar, ArrowRight } from 'lucide-react';

const galleryImages: Record<string, string[]> = {
  Nature: [
    'https://images.pexels.com/photos/3601057/pexels-photo-3601057.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  Rooms: [
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  Dining: [
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  Yoga: [
    'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3759659/pexels-photo-3759659.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  Adventure: [
    'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3387156/pexels-photo-3387156.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  Festivals: [
    'https://images.pexels.com/photos/268976/pexels-photo-268976.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2526255/pexels-photo-2526255.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  Travel: [
    'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  Birthdays: [
    'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  Family: [
    'https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
};

export function Gallery() {
  const [active, setActive] = useState('Nature');
  const images = galleryImages[active] || [];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Photo Gallery"
            title={<>Moments that make<br />this place home</>}
            subtitle="A glimpse into daily life — nature, celebration, adventure, and the quiet beauty of community."
          />
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap justify-center gap-2.5">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? 'bg-forest-700 text-white shadow-lg'
                    : 'bg-white text-forest-700 border border-forest-100 hover:border-forest-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Images */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <Reveal key={`${active}-${i}`} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl h-72 shadow-md">
                <img
                  src={img}
                  alt={`${active} gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-serif text-lg">{active}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventsCalendar() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Events Calendar"
            title={<>There's always something<br />to look forward to</>}
            subtitle="A full calendar of camps, nights, workshops, and celebrations — because anticipation is half the joy."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcomingEvents.map((ev, i) => (
            <Reveal key={ev.title} delay={i * 60}>
              <div className="group flex items-center gap-5 bg-sand-50 border border-forest-100 rounded-2xl p-5 hover:shadow-xl hover:border-forest-300 transition-all hover:-translate-y-1">
                <div className="text-center bg-forest-700 group-hover:bg-gold-500 rounded-xl px-4 py-3 transition-colors shrink-0">
                  <div className="text-white font-serif text-2xl font-semibold leading-none">
                    {ev.date.split(' ')[1]}
                  </div>
                  <div className="text-white/80 text-xs uppercase tracking-wider mt-1">
                    {ev.date.split(' ')[0]}
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider">
                    {ev.category}
                  </span>
                  <h4 className="font-serif text-lg text-forest-900 font-semibold mt-0.5">
                    {ev.title}
                  </h4>
                </div>
                <ArrowRight className="w-5 h-5 text-forest-400 group-hover:text-forest-700 group-hover:translate-x-1 transition-all" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-forest-700 font-semibold hover:text-gold-600 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Register for an event
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PremiumExperiences() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-forest-900 to-forest-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Premium Experiences"
            title={<>The moments that make<br />this place unforgettable</>}
            subtitle="These are the experiences that turn a residence into a memory — and a memory into a story told for generations."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {premiumExperiences.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 50}>
              <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold-400/40 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/30 to-gold-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <exp.icon className="w-6 h-6 text-gold-300" />
                </div>
                <h3 className="font-serif text-xl text-white font-semibold mb-1.5">{exp.title}</h3>
                <p className="text-sm text-forest-100/70 leading-relaxed">{exp.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
