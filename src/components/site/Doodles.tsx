import type { SVGProps } from "react";

export function DoodleStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinejoin="round" strokeLinecap="round" {...props}>
      <path d="M16 3l3.5 8.2 8.9.9-6.7 6 2 8.8L16 22.7 8.3 26.9l2-8.8-6.7-6 8.9-.9z" />
    </svg>
  );
}

export function DoodleHeart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinejoin="round" strokeLinecap="round" {...props}>
      <path d="M16 27s-10-6.4-10-13.5C6 9.4 9.1 7 12.3 7 14.4 7 15.6 8 16 9c.4-1 1.6-2 3.7-2C22.9 7 26 9.4 26 13.5 26 20.6 16 27 16 27z" />
    </svg>
  );
}

export function DoodleCloud(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 32" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinejoin="round" strokeLinecap="round" {...props}>
      <path d="M14 24c-5 0-8-3-8-7s3-7 8-7c1-4 5-7 10-7 6 0 10 4 10 9 4 0 8 3 8 7s-3 5-8 5H14z" />
    </svg>
  );
}

export function DoodleBalloon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 48" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinejoin="round" strokeLinecap="round" {...props}>
      <ellipse cx="16" cy="16" rx="11" ry="13" />
      <path d="M14 29l2 3 2-3" />
      <path d="M16 32c-1 6 2 8 0 14" />
    </svg>
  );
}

export function DoodleSun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" {...props}>
      <circle cx="24" cy="24" r="9" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        const x1 = 24 + Math.cos(a) * 15;
        const y1 = 24 + Math.sin(a) * 15;
        const x2 = 24 + Math.cos(a) * 21;
        const y2 = 24 + Math.sin(a) * 21;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </svg>
  );
}

export function UnionJackBunting({ className = "" }: { className?: string }) {
  const flags = Array.from({ length: 7 });
  return (
    <svg viewBox="0 0 700 90" className={className} aria-hidden>
      <path d="M0 10 Q 350 60 700 10" stroke="oklch(0.22 0.05 264)" strokeWidth={2} fill="none" />
      {flags.map((_, i) => {
        const x = 40 + i * 100;
        const y = 10 + Math.sin((i / 6) * Math.PI) * 28;
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <rect x={-22} y={0} width={44} height={32} rx={3} fill="#1E3A8A" stroke="oklch(0.22 0.05 264)" strokeWidth={1.5} />
            <path d="M-22 0 L22 32 M22 0 L-22 32" stroke="#fff" strokeWidth={4} />
            <path d="M0 0 V32 M-22 16 H22" stroke="#fff" strokeWidth={6} />
            <path d="M0 0 V32 M-22 16 H22" stroke="#EF4444" strokeWidth={2.5} />
            <path d="M-22 0 L22 32 M22 0 L-22 32" stroke="#EF4444" strokeWidth={1.5} />
          </g>
        );
      })}
    </svg>
  );
}