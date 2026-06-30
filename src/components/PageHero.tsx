import { Reveal } from './Reveal';

export function PageHero({
  eyebrow,
  title,
  subtitle,
  img,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  img: string;
}) {
  return (
    <section className="relative h-[58vh] min-h-[460px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={img} alt="" className="w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/50 to-forest-950/40" />
      </div>
      <div className="relative z-10 max-w-[1600px] mx-auto px-5 lg:px-8 pb-16 w-full">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold-400/60" />
            <span className="text-gold-300 text-xs font-semibold tracking-[0.34em] uppercase">{eyebrow}</span>
          </div>
          <h1 className="font-serif text-white text-[clamp(2.75rem,6vw,6.5rem)] font-light leading-[1.02] tracking-tightest max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg md:text-xl text-cream-100/90 max-w-2xl leading-[1.75] font-light">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
