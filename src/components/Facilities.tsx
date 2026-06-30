import { Reveal, SectionHeading } from './Reveal';
import { healthcareServices, accommodationFeatures, diningOptions } from '../data';

export function LifeAtSecondInnings() {
  const moments = [
    {
      img: 'https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Friendship',
      desc: 'A community where loneliness simply cannot survive.',
    },
    {
      img: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Celebration',
      desc: 'Every birthday, every festival, every small win — celebrated.',
    },
    {
      img: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Nature',
      desc: 'Wake up to birdsong, walk through gardens, breathe deeply.',
    },
    {
      img: 'https://images.pexels.com/photos/3387156/pexels-photo-3387156.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Adventure',
      desc: 'Treks, boat rides, and trips that make the heart young again.',
    },
  ];

  return (
    <section id="life" className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Life at Second Innings"
            title={<>Where every day feels like<br />a new beginning</>}
            subtitle="This is not a facility. It is a home filled with laughter, music, gardens, and people who genuinely care about each other."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moments.map((m, i) => (
            <Reveal key={m.title} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl h-80">
                <img
                  src={m.img}
                  alt={m.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white font-semibold mb-1">{m.title}</h3>
                  <p className="text-sm text-forest-50/80 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  bg = 'bg-white',
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  items: { icon: React.ElementType; label: string }[];
  bg?: string;
}) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${bg}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 50}>
              <div className="group flex items-center gap-3 bg-sand-50 hover:bg-forest-50 border border-forest-100 hover:border-forest-300 rounded-xl p-4 transition-all hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-lg bg-forest-100 group-hover:bg-forest-700 flex items-center justify-center transition-colors shrink-0">
                  <item.icon className="w-5 h-5 text-forest-700 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-medium text-forest-800">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Healthcare() {
  return (
    <FeatureGrid
      id="healthcare"
      eyebrow="Health & Wellness"
      title={<>24×7 care, always<br />within reach</>}
      subtitle="A full medical ecosystem on site — so residents and families never have to worry."
      items={healthcareServices}
      bg="bg-white"
    />
  );
}

export function Accommodation() {
  return (
    <FeatureGrid
      id="accommodation"
      eyebrow="Accommodation"
      title={<>Rooms designed like<br />a luxury retreat</>}
      subtitle="Private, shared, and suite options — each with the comfort and dignity every resident deserves."
      items={accommodationFeatures}
      bg="bg-sand-50"
    />
  );
}

export function Dining() {
  return (
    <section id="dining" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Dining"
              title={<>Meals that nourish<br />body and soul</>}
              subtitle="Our kitchen is the heart of the community. Every meal is personalized, fresh, and made with love."
              center={false}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {diningOptions.map((opt) => (
                <span
                  key={opt}
                  className="bg-forest-50 text-forest-700 text-sm font-medium px-4 py-2 rounded-full border border-forest-100"
                >
                  {opt}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh healthy meal"
                className="rounded-2xl shadow-xl w-full h-56 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Salad bowl with fresh vegetables"
                className="rounded-2xl shadow-xl w-full h-56 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
                srcSet=""
                alt="Fresh fruits"
                className="rounded-2xl shadow-xl w-full h-56 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dining table setting"
                className="rounded-2xl shadow-xl w-full h-56 object-cover mt-8"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
