import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";

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
  metadataBase: new URL("https://guerrero-sport.vercel.app"),
  title: {
    default: "Guerrero Sport · Indumentaria deportiva personalizada",
    template: "%s · Guerrero Sport",
  },
  description:
    "Diseñamos y confeccionamos camisetas, uniformes y prendas deportivas con identidad propia para clubes, equipos, torneos y empresas. Presidente Franco, Barrio Santa Rosa.",
  applicationName: "Guerrero Sport",
  keywords: [
    "indumentaria deportiva",
    "camisetas personalizadas",
    "uniformes deportivos",
    "diseños para clubes",
    "Guerrero Sport",
    "Presidente Franco",
    "Paraguay",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Guerrero Sport · Indumentaria deportiva personalizada",
    description:
      "Camisetas, uniformes y prendas deportivas con identidad propia para equipos campeones.",
    type: "website",
    locale: "es_PY",
    siteName: "Guerrero Sport",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Guerrero Sport" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guerrero Sport · Indumentaria deportiva personalizada",
    description:
      "Camisetas, uniformes y prendas deportivas con identidad propia para equipos campeones.",
    images: ["/og-image.png"],
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
      <body className="font-body antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
