// Datos centralizados del sitio Guerrero Sport.
// Cambiar aqui los textos / enlaces y se actualiza en toda la web.

export const WHATSAPP_NUMBER = "595983622191";

export const waLink = (
  mensaje = "Hola Guerrero Sport, quiero consultar por un diseño personalizado"
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

export const CONTACTO = {
  telefonoVisible: "0983 622 191",
  instagram: "@guerrero.sport_",
  instagramUrl: "https://instagram.com/guerrero.sport_",
  direccion: "Presidente Franco · Barrio Santa Rosa",
  horarios: [
    { dia: "Lunes a viernes", hora: "7:30 a 17:00 hs" },
    { dia: "Sábado", hora: "7:30 a 12:00 hs" },
    { dia: "Domingo", hora: "Cerrado" },
  ],
};

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Diseños", href: "#disenos" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export const SERVICIOS = [
  {
    titulo: "Camisetas personalizadas",
    descripcion:
      "Camisetas deportivas con tu escudo, colores, nombre y número. Calidad de impresión y sublimado profesional.",
    icon: "shirt",
    color: "spartan",
  },
  {
    titulo: "Uniformes deportivos",
    descripcion:
      "Kits completos para tu plantel: titular, suplente, arquero y accesorios. Todo con la misma identidad.",
    icon: "team",
    color: "royal",
  },
  {
    titulo: "Diseños para clubes",
    descripcion:
      "Identidad visual completa para tu club: escudo, colores institucionales y línea de prendas oficial.",
    icon: "trophy",
    color: "gold",
  },
  {
    titulo: "Indumentaria para torneos",
    descripcion:
      "Producción para campeonatos barriales, ligas y academias. Plazos claros y entrega coordinada.",
    icon: "spark",
    color: "spartan",
  },
  {
    titulo: "Prendas para empresas",
    descripcion:
      "Remeras, camperas y uniformes corporativos con el logo de tu empresa para eventos y staff.",
    icon: "building",
    color: "royal",
  },
  {
    titulo: "Diseño deportivo a medida",
    descripcion:
      "Creamos tu diseño desde cero o tomamos tu idea y la convertimos en una prenda lista para confeccionar.",
    icon: "design",
    color: "gold",
  },
];

// Categorías del catálogo (gestionables desde el panel /admin).
export const CATEGORIAS = [
  { id: "cat-camisetas", nombre: "Camisetas", slug: "camisetas", descripcion: "Camisetas deportivas personalizadas." },
  { id: "cat-uniformes", nombre: "Uniformes", slug: "uniformes", descripcion: "Kits completos para equipos." },
  { id: "cat-arqueros", nombre: "Arqueros", slug: "arqueros", descripcion: "Indumentaria de guardameta." },
  { id: "cat-torneos", nombre: "Torneos", slug: "torneos", descripcion: "Ediciones especiales de campeonatos." },
  { id: "cat-entrenamiento", nombre: "Entrenamiento", slug: "entrenamiento", descripcion: "Ropa de training y academia." },
  { id: "cat-empresas", nombre: "Empresas", slug: "empresas", descripcion: "Indumentaria corporativa y staff." },
];

// Banners destacados (gestionables desde el panel /admin).
export const BANNERS = [
  { id: "ban-temporada", titulo: "Temporada 2025", estado: "Activo", ubicacion: "Hero principal" },
  { id: "ban-torneos", titulo: "Promo torneos barriales", estado: "Programado", ubicacion: "Sección catálogo" },
  { id: "ban-clubes", titulo: "Uniformes para clubes", estado: "Borrador", ubicacion: "Sección equipos" },
];

// Productos del catálogo. Campos:
// - precio: opcional (texto libre, ej "Desde Gs. 90.000"). Vacío = no se muestra.
// - categoria: slug de CATEGORIAS.
// - visible: si false, no aparece en la web pública.
// - imagen: foto real (ej "/catalogo/azul.jpg"). Vacío = mockup SVG automático.
export const PRODUCTOS = [
  {
    id: "prod-1",
    nombre: "Camiseta deportiva personalizada",
    descripcion: "Modelo de club con escudo, colores y detalles a tu medida en cuello y mangas.",
    etiqueta: "Más pedida",
    categoria: "camisetas",
    precio: "",
    base: "royal",
    numero: "10",
    imagen: "",
    visible: true,
  },
  {
    id: "prod-2",
    nombre: "Uniforme completo",
    descripcion: "Camiseta, short y medias a juego. Identidad uniforme para todo el plantel.",
    etiqueta: "Kit completo",
    categoria: "uniformes",
    precio: "",
    base: "spartan",
    numero: "07",
    imagen: "",
    visible: true,
  },
  {
    id: "prod-3",
    nombre: "Camiseta de arquero",
    descripcion: "Alta visibilidad, tela transpirable y protección reforzada para el guardameta.",
    etiqueta: "Arquero",
    categoria: "arqueros",
    precio: "",
    base: "gold",
    numero: "1",
    imagen: "",
    visible: true,
  },
  {
    id: "prod-4",
    nombre: "Diseño para torneo",
    descripcion: "Edición especial con sponsors, fecha y nombre del campeonato integrados.",
    etiqueta: "Edición torneo",
    categoria: "torneos",
    precio: "",
    base: "spartan",
    numero: "09",
    imagen: "",
    visible: true,
  },
  {
    id: "prod-5",
    nombre: "Conjunto de entrenamiento",
    descripcion: "Remera y short de training livianos, ideales para prácticas y academia.",
    etiqueta: "Training",
    categoria: "entrenamiento",
    precio: "",
    base: "carbon",
    numero: "04",
    imagen: "",
    visible: true,
  },
  {
    id: "prod-6",
    nombre: "Camiseta con nombre y número",
    descripcion: "Personalización individual con apellido y dorsal para cada jugador.",
    etiqueta: "Personalizada",
    categoria: "camisetas",
    precio: "",
    base: "royal",
    numero: "23",
    imagen: "",
    visible: true,
  },
];

export const PROCESO = [
  {
    paso: "01",
    titulo: "Enviás tu idea o escudo",
    descripcion:
      "Nos contás cómo imaginás tu camiseta y nos pasás tu logo, colores o referencias por WhatsApp.",
  },
  {
    paso: "02",
    titulo: "Preparamos el diseño",
    descripcion:
      "Nuestro equipo crea el diseño digital y te mostramos un mockup realista para revisar.",
  },
  {
    paso: "03",
    titulo: "Confirmás el pedido",
    descripcion:
      "Ajustamos detalles, definimos cantidades y talles, y confirmás la producción.",
  },
  {
    paso: "04",
    titulo: "Confeccionamos y entregamos",
    descripcion:
      "Producimos tu indumentaria con acabado profesional y coordinamos la entrega.",
  },
];

export const BENEFICIOS = [
  "Diseño 100% personalizado",
  "Buena presentación del equipo",
  "Atención directa por WhatsApp",
  "Identidad visual propia",
  "Ideal para torneos y campeonatos",
  "Asesoría sin costo antes de producir",
];

// Galeria. Para fotos reales: archivo en `public/galeria/` y ruta en `imagen`.
// Si `imagen` queda vacío, se muestra el mockup SVG automáticamente.
export const GALERIA = [
  { id: "gal-1", titulo: "Club Nanawa", tipo: "Camiseta titular", base: "royal", numero: "10", span: "lg:col-span-2 lg:row-span-2", imagen: "", visible: true },
  { id: "gal-2", titulo: "Liga barrial", tipo: "Arquero", base: "gold", numero: "1", span: "", imagen: "", visible: true },
  { id: "gal-3", titulo: "Academia juvenil", tipo: "Training", base: "carbon", numero: "08", span: "", imagen: "", visible: true },
  { id: "gal-4", titulo: "Torneo apertura", tipo: "Edición especial", base: "spartan", numero: "09", span: "lg:col-span-2", imagen: "", visible: true },
  { id: "gal-5", titulo: "Empresa local", tipo: "Uniforme staff", base: "carbon", numero: "GS", span: "", imagen: "", visible: true },
  { id: "gal-6", titulo: "Selección barrio", tipo: "Kit completo", base: "royal", numero: "07", span: "", imagen: "", visible: true },
];
