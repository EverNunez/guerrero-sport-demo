/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Identidad Guerrero Sport
        carbon: {
          950: "#050507",
          900: "#0a0a0d",
          800: "#101014",
          700: "#16161c",
          600: "#1e1e26",
        },
        spartan: {
          DEFAULT: "#e2102a",
          500: "#e2102a",
          600: "#c10c22",
          400: "#ff2a42",
        },
        royal: {
          DEFAULT: "#1e5bff",
          500: "#1e5bff",
          600: "#1746d6",
          400: "#4d82ff",
        },
        gold: {
          DEFAULT: "#e9b949",
          400: "#f2cd6b",
          600: "#c8992f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(226,16,42,0.55)",
        "glow-blue": "0 0 40px -8px rgba(30,91,255,0.55)",
        "glow-gold": "0 0 40px -10px rgba(233,185,73,0.5)",
        card: "0 24px 60px -22px rgba(0,0,0,0.85)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-spotlight":
          "radial-gradient(60% 60% at 50% 0%, rgba(226,16,42,0.18) 0%, transparent 70%)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-beam": {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.6" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-beam": "pulse-beam 5s ease-in-out infinite",
        shine: "shine 3.5s linear infinite",
        ticker: "ticker 28s linear infinite",
      },
    },
  },
  plugins: [],
};
