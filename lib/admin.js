// Navegación del panel administrativo.
// Los datos (productos, categorías, galería, banners, contacto) se gestionan
// desde el store (lib/store.js), que persiste en el navegador.

export const ADMIN_NAV = [
  { label: "Resumen", href: "/admin", icon: "dashboard" },
  { label: "Productos", href: "/admin/productos", icon: "shirt" },
  { label: "Categorías", href: "/admin/categorias", icon: "tag" },
  { label: "Galería", href: "/admin/galeria", icon: "image" },
  { label: "Banners", href: "/admin/banners", icon: "layout" },
  { label: "Contacto", href: "/admin/contacto", icon: "phone" },
];
