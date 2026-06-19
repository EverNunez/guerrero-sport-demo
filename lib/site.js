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
  { id: "cat-camisetas", nombre: "Camisetas personalizadas", slug: "camisetas", descripcion: "Camisetas deportivas con tu escudo, colores y nombres." },
  { id: "cat-conjuntos", nombre: "Conjuntos deportivos", slug: "conjuntos", descripcion: "Camiseta + short a juego." },
  { id: "cat-clubes", nombre: "Diseños para clubes", slug: "clubes", descripcion: "Identidad visual completa para tu club o equipo." },
  { id: "cat-sublimados", nombre: "Sublimados premium", slug: "sublimados", descripcion: "Diseños sublimados full color a medida." },
  { id: "cat-basquet", nombre: "Básquet", slug: "basquet", descripcion: "Camisetas y musculosas de básquetbol." },
  { id: "cat-futvoley", nombre: "Futvóley y vóley", slug: "futvoley", descripcion: "Musculosas para futvóley y vóley." },
  { id: "cat-pesca", nombre: "Línea pesca", slug: "pesca", descripcion: "Remeras de pesca con protección y diseños camuflados." },
  { id: "cat-femenina", nombre: "Línea femenina", slug: "femenina", descripcion: "Tops, calzas y conjuntos deportivos para mujer." },
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
const IMG_CAT = "/images/guerrero-sport/catalogo";

export const PRODUCTOS = [
  {
    id: "prod-1",
    nombre: "Camiseta Paraguay rayada",
    descripcion: "Modelo albirrojo con escudo, rayas clásicas y terminaciones tricolor en cuello y mangas.",
    etiqueta: "Más pedida",
    categoria: "camisetas",
    precio: "",
    base: "spartan",
    numero: "10",
    imagen: `${IMG_CAT}/camiseta-paraguay-rayada.webp`,
    visible: true,
  },
  {
    id: "prod-2",
    nombre: "Conjunto Paraguay azul",
    descripcion: "Camiseta albirroja con short azul a juego. Presentación impecable para todo el equipo.",
    etiqueta: "Kit completo",
    categoria: "conjuntos",
    precio: "",
    base: "royal",
    numero: "07",
    imagen: `${IMG_CAT}/conjunto-paraguay-azul.webp`,
    visible: true,
  },
  {
    id: "prod-3",
    nombre: "Camiseta diseño guaraní",
    descripcion: "Diseño exclusivo con patrón ñandutí y escudo personalizado para tu club.",
    etiqueta: "Diseño a medida",
    categoria: "clubes",
    precio: "",
    base: "royal",
    numero: "09",
    imagen: `${IMG_CAT}/camiseta-diseno-guarani.webp`,
    visible: true,
  },
  {
    id: "prod-4",
    nombre: "Camiseta de básquet",
    descripcion: "Musculosa de básquetbol sublimada full color, estilo NBA con tu número y nombre.",
    etiqueta: "Básquet",
    categoria: "basquet",
    precio: "",
    base: "royal",
    numero: "23",
    imagen: `${IMG_CAT}/camiseta-basquet-bulls.webp`,
    visible: true,
  },
  {
    id: "prod-5",
    nombre: "Musculosa de futvóley",
    descripcion: "Remera sin mangas para futvóley y vóley, liviana y transpirable, con diseño a medida.",
    etiqueta: "Futvóley",
    categoria: "futvoley",
    precio: "",
    base: "spartan",
    numero: "07",
    imagen: `${IMG_CAT}/camiseta-futvoley.webp`,
    visible: true,
  },
  {
    id: "prod-6",
    nombre: "Remera de pesca",
    descripcion: "Remera con diseño camuflado y protección, ideal para pesca y actividades al aire libre.",
    etiqueta: "Línea pesca",
    categoria: "pesca",
    precio: "",
    base: "royal",
    numero: "01",
    imagen: `${IMG_CAT}/remera-pesca.webp`,
    visible: true,
  },
  {
    id: "prod-7",
    nombre: "Conjunto deportivo femenino",
    descripcion: "Top y calza deportiva para mujer, tela elastizada de alto rendimiento con la marca Guerrero Sport.",
    etiqueta: "Línea femenina",
    categoria: "femenina",
    precio: "",
    base: "spartan",
    numero: "10",
    imagen: `${IMG_CAT}/conjunto-femenino.webp`,
    visible: true,
  },
  {
    id: "prod-8",
    nombre: "Camiseta club Franco",
    descripcion: "Edición especial amarillo y verde con sponsors y nombre del equipo integrados.",
    etiqueta: "Edición club",
    categoria: "clubes",
    precio: "",
    base: "gold",
    numero: "11",
    imagen: `${IMG_CAT}/camiseta-club-franco.webp`,
    visible: true,
  },
  {
    id: "prod-9",
    nombre: "Camiseta Barça personalizada",
    descripcion: "Diseño inspirado en tu equipo favorito, sublimado con escudo y detalles a elección.",
    etiqueta: "Personalizada",
    categoria: "camisetas",
    precio: "",
    base: "royal",
    numero: "10",
    imagen: `${IMG_CAT}/camiseta-barcelona.webp`,
    visible: true,
  },
  {
    id: "prod-10",
    nombre: "Camiseta sublimada verde",
    descripcion: "Degradado deportivo moderno, tela liviana y transpirable para máximo rendimiento.",
    etiqueta: "Sublimado",
    categoria: "sublimados",
    precio: "",
    base: "carbon",
    numero: "08",
    imagen: `${IMG_CAT}/camiseta-sublimada-verde.webp`,
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
const IMG_GAL = "/images/guerrero-sport/galeria";

export const GALERIA = [
  { id: "gal-1", titulo: "Diseño Garras", tipo: "Edición agresiva", base: "spartan", numero: "09", span: "lg:col-span-2 lg:row-span-2", imagen: `${IMG_GAL}/galeria-garras.webp`, visible: true },
  { id: "gal-2", titulo: "Línea femenina", tipo: "Conjunto rosa", base: "spartan", numero: "10", span: "", imagen: `${IMG_GAL}/galeria-rosa-degradado.webp`, visible: true },
  { id: "gal-3", titulo: "Diseño ñandutí", tipo: "Identidad nacional", base: "royal", numero: "09", span: "", imagen: `${IMG_GAL}/galeria-nanduti-azul.webp`, visible: true },
  { id: "gal-4", titulo: "Musculosa estrella", tipo: "Básquet / vóley", base: "carbon", numero: "07", span: "lg:col-span-2", imagen: `${IMG_GAL}/galeria-star-tank.webp`, visible: true },
  { id: "gal-5", titulo: "Raza Guaraní", tipo: "Diseño especial", base: "spartan", numero: "10", span: "", imagen: `${IMG_GAL}/galeria-raza-guarani.webp`, visible: true },
  { id: "gal-6", titulo: "Línea Guerrero", tipo: "Camiseta institucional", base: "carbon", numero: "GS", span: "", imagen: `${IMG_GAL}/galeria-gris-logo.webp`, visible: true },
  { id: "gal-7", titulo: "Verdaderos campeones", tipo: "Edición Guerrero", base: "spartan", numero: "10", span: "", imagen: `${IMG_GAL}/galeria-rojo-campeones.webp`, visible: true },
  { id: "gal-8", titulo: "Gorra Guerrero", tipo: "Accesorio", base: "carbon", numero: "GS", span: "", imagen: `${IMG_GAL}/galeria-gorra.webp`, visible: true },
  { id: "gal-9", titulo: "Camiseta con nombres", tipo: "Personalización total", base: "spartan", numero: "10", span: "lg:col-span-2", imagen: `${IMG_GAL}/galeria-paraguay-nombres.webp`, visible: true },
  { id: "gal-10", titulo: "Sublimado verde-negro", tipo: "Diseño deportivo", base: "carbon", numero: "08", span: "", imagen: `${IMG_GAL}/galeria-negro-verde.webp`, visible: true },
  { id: "gal-11", titulo: "Edición dorada", tipo: "Sublimado premium", base: "gold", numero: "10", span: "", imagen: `${IMG_GAL}/galeria-morado-dorado.webp`, visible: true },
];
