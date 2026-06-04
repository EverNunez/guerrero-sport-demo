// Mockup de camiseta deportiva 100% en SVG (placeholder premium, sin imagenes externas).

const PALETAS = {
  spartan: { main: "#e2102a", dark: "#9c0a1c", accent: "#ffd34d", num: "#ffffff" },
  royal: { main: "#1e5bff", dark: "#11337f", accent: "#ffffff", num: "#ffffff" },
  gold: { main: "#f59e0b", dark: "#b45309", accent: "#1a1a1a", num: "#1a1a1a" },
  carbon: { main: "#2a2a33", dark: "#0e0e12", accent: "#e2102a", num: "#ffffff" },
};

export default function Jersey({ base = "spartan", numero = "10", className = "" }) {
  const c = PALETAS[base] ?? PALETAS.spartan;
  const uid = `${base}-${numero}`;

  return (
    <svg
      viewBox="0 0 320 340"
      className={className}
      role="img"
      aria-label={`Camiseta deportiva número ${numero}`}
    >
      <defs>
        <linearGradient id={`body-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.main} />
          <stop offset="100%" stopColor={c.dark} />
        </linearGradient>
        <linearGradient id={`shine-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={`soft-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000" floodOpacity="0.45" />
        </filter>
      </defs>

      <g filter={`url(#soft-${uid})`}>
        {/* Cuerpo de la camiseta */}
        <path
          d="M110 40 L80 30 L30 70 L55 120 L85 105 L85 300 Q160 320 235 300 L235 105 L265 120 L290 70 L240 30 L210 40 Q160 70 110 40 Z"
          fill={`url(#body-${uid})`}
          stroke="rgba(0,0,0,0.25)"
          strokeWidth="2"
        />
        {/* Franjas laterales */}
        <path d="M85 130 L100 130 L100 300 L85 298 Z" fill={c.accent} opacity="0.85" />
        <path d="M235 130 L220 130 L220 300 L235 298 Z" fill={c.accent} opacity="0.85" />
        {/* Cuello */}
        <path
          d="M110 40 Q160 70 210 40 L200 52 Q160 78 120 52 Z"
          fill={c.accent}
        />
        <path
          d="M120 52 Q160 78 200 52 L195 60 Q160 82 125 60 Z"
          fill={c.dark}
          opacity="0.6"
        />
        {/* Numero */}
        <text
          x="160"
          y="225"
          textAnchor="middle"
          fontFamily="Oswald, Arial Narrow, sans-serif"
          fontSize="115"
          fontWeight="700"
          fill={c.num}
          opacity="0.95"
        >
          {numero}
        </text>
        {/* Escudo / detalle pecho */}
        <circle cx="118" cy="120" r="13" fill={c.accent} opacity="0.9" />
        <path d="M118 112 l4 5 -4 12 -4 -12 z" fill={c.dark} />
        {/* Brillo */}
        <path
          d="M30 70 L55 120 L85 105 L85 300 Q120 312 160 314 L150 40 Q130 50 110 40 L80 30 Z"
          fill={`url(#shine-${uid})`}
        />
      </g>
    </svg>
  );
}
