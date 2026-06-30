import { useEffect, useRef, useState } from 'react';

type Point = { x: number; y: number };

export function IntroLoader() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [point, setPoint] = useState<Point>({ x: 60, y: 300 });
  const [done, setDone] = useState(false);

  useEffect(() => {
    const total = 50;
    const duration = 4200;
    let frame = 0;
    let finished = false;

    const animate = (now: number, start: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.min(total, Math.floor(eased * total));

      setProgress(eased);
      setCount(current);

      const path = pathRef.current;
      if (path) {
        const length = path.getTotalLength();
        const distance = Math.max(0, Math.min(length, length * eased));
        const p = path.getPointAtLength(distance);
        setPoint({ x: p.x, y: p.y });
      }

      if (t < 1) {
        frame = window.requestAnimationFrame((nextNow) => animate(nextNow, start));
        return;
      }

      if (!finished) {
        finished = true;
        setCount(total);
        window.setTimeout(() => setDone(true), 350);
      }
    };

    const start = window.performance.now();
    frame = window.requestAnimationFrame((now) => animate(now, start));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-[#07110b] text-cream-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(109,151,116,0.12),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(228,173,56,0.08),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.04),transparent_18%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_34%,rgba(0,0,0,0.28))]" />

      <div className="relative flex h-full w-full items-center justify-center px-5">
        <div className="relative w-full max-w-7xl">
          <svg
            viewBox="0 0 1200 420"
            className="h-[360px] w-full sm:h-[440px]"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="roadStroke" x1="0" y1="0" x2="1200" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                <stop offset="45%" stopColor="rgba(228,173,56,0.42)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
              </linearGradient>
            </defs>

            <path
              d="M 20 300 C 150 300 230 200 360 200 C 510 200 540 308 700 308 C 850 308 885 160 1050 160 C 1120 160 1160 215 1190 220"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="64"
              strokeLinecap="round"
              opacity="0.35"
            />
            <path
              d="M 20 300 C 150 300 230 200 360 200 C 510 200 540 308 700 308 C 850 308 885 160 1050 160 C 1120 160 1160 215 1190 220"
              stroke="url(#roadStroke)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="14 14"
              strokeDashoffset={Math.max(0, 220 - progress * 220)}
              opacity="0.95"
            />
            <path
              ref={pathRef}
              d="M 20 300 C 150 300 230 200 360 200 C 510 200 540 308 700 308 C 850 308 885 160 1050 160 C 1120 160 1160 215 1190 220"
              stroke="rgba(109,151,116,0.18)"
              strokeWidth="1"
              strokeDasharray="2 16"
              opacity="0.35"
            />
          </svg>

          <div
            className="absolute top-0"
            style={{
              left: `${(point.x / 1200) * 100}%`,
              top: `${(point.y / 420) * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className="relative h-32 w-32 rounded-full border-[12px] border-gold-400 bg-[#111c13] shadow-[0_0_40px_rgba(228,173,56,0.22)] sm:h-36 sm:w-36"
              style={{
                transform: `rotate(${progress * 720}deg)`,
                transition: 'transform 0.08s linear',
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="font-serif text-[clamp(3rem,6vw,4.6rem)] font-light leading-none text-cream-50 editorial-num drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                  {count}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-[72%] w-full -translate-x-1/2 text-center px-4">
            <div
              className={`text-[11px] font-semibold uppercase tracking-[0.38em] text-gold-300/90 transition-all duration-700 ${
                done ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              Welcome to New Life
            </div>
            <div
              className={`mt-4 font-serif text-[clamp(2.8rem,6vw,5.4rem)] font-light leading-[1.02] text-cream-50 transition-all duration-700 delay-150 ${
                done ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              The Second Innings Show
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
