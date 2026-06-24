/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Sirve imágenes en AVIF/WebP (más livianas) y permite cachearlas más tiempo.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
  },
  // Cabecera de no-cache para evitar que el navegador conserve HTML viejo.
  poweredByHeader: false,
};

export default nextConfig;
