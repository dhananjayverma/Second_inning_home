import { useEffect, useRef, useState, type ReactNode } from 'react';

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-5 ${center ? 'justify-center' : ''}`}>
          <span className={`h-px w-8 ${light ? 'bg-gold-400/60' : 'bg-gold-500/60'}`} />
          <span
            className={`text-xs font-semibold tracking-[0.25em] uppercase ${
              light ? 'text-gold-300' : 'text-gold-600'
            }`}
          >
            {eyebrow}
          </span>
          <span className={`h-px w-8 ${light ? 'bg-gold-400/60' : 'bg-gold-500/60'}`} />
        </div>
      )}
      <h2
        className={`font-serif text-[clamp(2.5rem,4.7vw,5.25rem)] font-light leading-[1.02] tracking-tightest ${
          light ? 'text-white' : 'text-forest-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-base md:text-lg leading-[1.75] max-w-2xl ${
            light ? 'text-cream-100/88' : 'text-forest-700/82'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
