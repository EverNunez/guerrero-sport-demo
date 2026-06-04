// Logo Guerrero Sport: casco espartano en SVG + wordmark.

export default function Logo({ className = "", showText = true }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-full border border-spartan/40 bg-carbon-900 shadow-glow">
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden>
          <defs>
            <linearGradient id="helm" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#d1d1d6" />
            </linearGradient>
          </defs>
          {/* Cresta */}
          <path
            d="M16 9c8-3 14 1 16 7-3-1-6-1-9 0 4 1 7 3 8 7-4-2-8-2-12 0z"
            fill="#e2102a"
          />
          {/* Casco */}
          <path
            d="M14 20c0-6 4-10 9-10 6 0 9 4 9 10v3c0 2-1 3-3 4l-1 8-3 2v-6l-3 5-3-2 1-6c-4-1-6-4-6-8z"
            fill="url(#helm)"
          />
          {/* Ranura facial */}
          <path d="M20 19h7v3h-7zM21 24h5v2h-5z" fill="#0a0a0d" />
        </svg>
      </span>
      {showText && (
        <span className="leading-none">
          <span className="block font-display text-lg font-bold uppercase tracking-wide text-white">
            Guerrero
          </span>
          <span className="block font-display text-[11px] font-semibold uppercase tracking-[0.4em] text-spartan-400">
            Sport
          </span>
        </span>
      )}
    </div>
  );
}
