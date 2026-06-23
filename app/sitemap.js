// Sitemap del sitio público (el panel /admin no se indexa).
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://guerrerosport.com.py";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
