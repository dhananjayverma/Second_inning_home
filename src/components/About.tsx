import { Reveal, SectionHeading } from './Reveal';
import { whyChooseUs } from '../data';
import { Quote } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-sand-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <Reveal>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.pexels.com/photos/3387156/pexels-photo-3387156.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Seniors enjoying nature together"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Group of friends laughing"
                    className="rounded-2xl shadow-xl w-full h-48 object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.pexels.com/photos/3601094/pexels-photo-3601094.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Senior couple walking in garden"
                    className="rounded-2xl shadow-xl w-full h-48 object-cover"
                  />
                  <img
                    src="https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Peaceful garden landscape"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 max-w-[200px] hidden md:block">
                <div className="font-serif text-3xl text-forest-700 font-semibold">15+</div>
                <div className="text-sm text-forest-600 mt-1">years of creating joyful second chapters</div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={150}>
            <SectionHeading
              eyebrow="Our Philosophy"
              title={<>Not an old-age home.<br />A new beginning.</>}
              center={false}
            />
            <div className="mt-6 space-y-5 text-forest-700/85 text-lg leading-relaxed">
              <p>
                Second Innings House is a premium senior living community where retired
                people don't come to wait for life to end. They come to make new friends,
                travel, learn new hobbies, celebrate birthdays, enjoy nature, and create
                memories that matter.
              </p>
              <p>
                Think <span className="font-semibold text-forest-800">retirement resort</span> +
                <span className="font-semibold text-forest-800"> wellness retreat</span> +
                <span className="font-semibold text-forest-800"> luxury community</span> +
                <span className="font-semibold text-forest-800"> family</span>. Nestled in nature,
                designed for dignity, and built for joy.
              </p>
            </div>

            <div className="mt-8 border-l-4 border-gold-400 pl-5">
              <Quote className="w-8 h-8 text-gold-400 mb-2" />
              <p className="font-serif italic text-2xl text-forest-800 leading-snug">
                "This isn't a place where life slows down — it's where life's most
                beautiful chapter begins."
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Why Choose Us"
            title={<>Eight promises we keep<br />every single day</>}
            subtitle="From dignified living to weekly adventures, every detail is designed so residents feel respected, connected, and alive."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:bg-gold-500/30 transition-colors">
                  <item.icon className="w-6 h-6 text-gold-300" />
                </div>
                <h3 className="font-serif text-xl text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-forest-100/70 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
