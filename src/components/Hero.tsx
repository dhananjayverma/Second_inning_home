import { ArrowRight, ChevronDown, Heart, Play, ShieldCheck, Sparkles, Trees, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-senior.png';

export function Hero() {
  const stats = [
    { num: '50+', label: 'Age-friendly living' },
    { num: '24x7', label: 'Care & support' },
    { num: '12+', label: 'Acres of nature' },
  ];

  const tags = [
    { icon: Heart, label: 'Companionship' },
    { icon: Trees, label: 'Garden life' },
    { icon: ShieldCheck, label: 'Safety first' },
    { icon: Users, label: 'Community' },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 lg:pt-32">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Senior living community with companionship, care, and nature"
          className="h-full w-full object-cover object-center md:object-[center_40%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,30,21,0.88)_0%,rgba(18,30,21,0.68)_40%,rgba(18,30,21,0.24)_70%,rgba(18,30,21,0.52)_100%)]" />
        <div className="absolute inset-0 hero-glow opacity-80" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1600px] items-center px-5 lg:px-10 py-12 lg:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 mb-7 animate-fade-in">
            <Sparkles className="w-4 h-4 text-gold-300" />
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-cream-50/90">
              Premium senior living for 50+
            </span>
          </div>

          <h1 className="font-serif text-[clamp(3.4rem,7vw,7.2rem)] font-light leading-[0.94] tracking-tightest text-cream-50 animate-fade-up">
            A calmer
            <br />
            <span className="text-gradient-gold italic font-normal">Second Innings</span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-[1.05rem] md:text-[1.16rem] leading-[1.8] text-cream-50/90 animate-fade-up"
            style={{ animationDelay: '0.12s', animationFillMode: 'both' }}
          >
            Nature-rich living, thoughtful care, and a slower pace for people above 50 who want comfort, connection, and dignity every day.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: '0.18s', animationFillMode: 'both' }}
          >
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-cream-50/92 backdrop-blur-md"
              >
                <tag.icon className="w-4 h-4 text-gold-300" />
                {tag.label}
              </span>
            ))}
          </div>

          <div
            className="mt-10 flex flex-col sm:flex-row items-start gap-4 animate-fade-up"
            style={{ animationDelay: '0.26s', animationFillMode: 'both' }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-8 py-4 text-base font-medium text-forest-950 transition-all duration-500 hover:bg-gold-600 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-gold-500/25"
            >
              Book a Visit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/18 bg-white/10 px-8 py-4 text-base font-medium text-cream-50 transition-all duration-500 hover:bg-white/16 hover:-translate-y-0.5 backdrop-blur-md"
            >
              <Play className="w-5 h-5 text-gold-300" />
              See the spaces
            </Link>
          </div>

          <div
            className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3 animate-fade-up"
            style={{ animationDelay: '0.34s', animationFillMode: 'both' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-dark rounded-[1.5rem] border border-white/10 px-5 py-4">
                <div className="font-serif text-3xl md:text-4xl font-light text-cream-50 editorial-num">
                  {stat.num}
                </div>
                <div className="mt-1 text-xs md:text-sm tracking-wide text-cream-50/72">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-cream-50/70 animate-bounce" />
      </div>
    </section>
  );
}
