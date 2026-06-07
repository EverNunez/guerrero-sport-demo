// Iconos SVG ligeros (sin dependencias externas).

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({ name, className = "h-6 w-6" }) {
  const paths = {
    shirt: (
      <path d="M7 4l-3 2 1.5 3L8 8v11h8V8l2.5 1L20 6l-3-2-2 1a3 3 0 01-6 0L7 4z" />
    ),
    team: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M4 20c0-3 2.5-5 5-5s5 2 5 5M14.5 20c.3-2.2 1.8-3.5 3.5-3.5s2.7 1.1 3 3" />
      </>
    ),
    design: (
      <>
        <path d="M12 19l7-7-3-3-7 7-1 4 4-1z" />
        <path d="M14 7l3 3M5 5l2 2M5 9h0M9 5h0" />
      </>
    ),
    trophy: (
      <>
        <path d="M8 4h8v4a4 4 0 01-8 0V4z" />
        <path d="M8 6H5a3 3 0 003 3M16 6h3a3 3 0 01-3 3M10 13v3M14 13v3M8 19h8" />
      </>
    ),
    building: (
      <>
        <rect x="5" y="4" width="14" height="16" rx="1.5" />
        <path d="M9 8h0M15 8h0M9 12h0M15 12h0M10 20v-3h4v3" />
      </>
    ),
    spark: (
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    ),
    whatsapp: (
      <path
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.1c-.25.7-1.44 1.33-1.99 1.41-.53.08-1.17.11-1.89-.12-.43-.14-.99-.32-1.7-.63-2.99-1.29-4.94-4.3-5.09-4.5-.15-.2-1.22-1.62-1.22-3.09s.77-2.19 1.05-2.49c.27-.3.6-.37.8-.37l.57.01c.18.01.43-.07.67.51.25.6.84 2.07.91 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2.01.96.3.15.49.22.56.35.07.12.07.72-.18 1.42z"
        fill="currentColor"
        stroke="none"
      />
    ),
    pin: (
      <>
        <path d="M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10z" />
        <circle cx="12" cy="11" r="2.2" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.5 1.5" />
      </>
    ),
    check: <path d="M5 12.5l4 4 10-10" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M17 7h0" />
      </>
    ),
    star: (
      <path
        d="M12 3l2.5 6.3L21 10l-5 4.2L17.5 21 12 17.3 6.5 21 8 14.2 3 10l6.5-.7L12 3z"
        fill="currentColor"
        stroke="none"
      />
    ),
    dashboard: (
      <>
        <rect x="4" y="4" width="7" height="9" rx="1.5" />
        <rect x="4" y="16" width="7" height="4" rx="1.5" />
        <rect x="14" y="4" width="6" height="4" rx="1.5" />
        <rect x="14" y="11" width="6" height="9" rx="1.5" />
      </>
    ),
    tag: (
      <>
        <path d="M4 12V5a1 1 0 011-1h7l8 8-8 8-8-8z" />
        <circle cx="8.5" cy="8.5" r="1.3" />
      </>
    ),
    image: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="M5 17l4.5-4 3 2.5L16 11l3 3.5" />
      </>
    ),
    layout: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 9h16M9 9v11" />
      </>
    ),
    phone: (
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5V20a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" />
    ),
    logout: (
      <>
        <path d="M14 4h4a1 1 0 011 1v14a1 1 0 01-1 1h-4" />
        <path d="M10 8l-4 4 4 4M6 12h10" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    edit: (
      <>
        <path d="M4 20h4l10-10-4-4L4 16v4z" />
        <path d="M13.5 6.5l4 4" />
      </>
    ),
    trash: (
      <>
        <path d="M5 7h14M10 7V5a1 1 0 011-1h2a1 1 0 011 1v2" />
        <path d="M6 7l1 13a1 1 0 001 1h8a1 1 0 001-1l1-13M10 11v6M14 11v6" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    "eye-off": (
      <>
        <path d="M3 3l18 18" />
        <path d="M10.6 10.6a3 3 0 004.2 4.2" />
        <path d="M9.9 5.2A9.5 9.5 0 0112 5c6.5 0 10 7 10 7a17 17 0 01-3.2 4M6.2 6.2A17 17 0 002 12s3.5 7 10 7a9.5 9.5 0 003.1-.5" />
      </>
    ),
    x: <path d="M6 6l12 12M18 6L6 18" />,
    lock: (
      <>
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 018 0v3" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
      </>
    ),
    save: (
      <>
        <path d="M5 4h11l3 3v13a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
        <path d="M8 4v5h7M8 21v-6h8v6" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V4M8 8l4-4 4 4" />
        <path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" />
      </>
    ),
    refresh: (
      <>
        <path d="M4 12a8 8 0 0114-5l2 2M20 12a8 8 0 01-14 5l-2-2" />
        <path d="M18 4v5h-5M6 20v-5h5" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      {paths[name] ?? paths.spark}
    </svg>
  );
}
