// Robots: permite indexar el sitio público y bloquea el panel /admin.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://guerrero-sport.vercel.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
