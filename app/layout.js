import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Guerrero Sport · Indumentaria deportiva personalizada",
  description:
    "Diseñamos y confeccionamos camisetas, uniformes y prendas deportivas con identidad propia para clubes, equipos y empresas. Presidente Franco, Barrio Santa Rosa.",
  keywords: [
    "indumentaria deportiva",
    "camisetas personalizadas",
    "uniformes",
    "Guerrero Sport",
    "Presidente Franco",
    "Paraguay",
  ],
  openGraph: {
    title: "Guerrero Sport · Indumentaria deportiva personalizada",
    description:
      "Camisetas, uniformes y prendas deportivas con identidad propia para equipos campeones.",
    type: "website",
    locale: "es_PY",
  },
};

export const viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
