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
    titulo: "Uniformes para equipos",
    descripcion:
      "Kits completos para tu plantel: titular, suplente, arquero y accesorios. Todo con la misma identidad.",
    icon: "team",
    color: "royal",
  },
  {
    titulo: "Diseño deportivo a medida",
    descripcion:
      "Creamos tu diseño desde cero o tomamos tu idea y la convertimos en una prenda lista para confeccionar.",
    icon: "design",
    color: "gold",
  },
  {
    titulo: "Pedidos para clubes y torneos",
    descripcion:
      "Producción para campeonatos barriales, ligas y academias. Plazos claros y entrega coordinada.",
    icon: "trophy",
    color: "spartan",
  },
  {
    titulo: "Indumentaria para empresas",
    descripcion:
      "Remeras, camperas y uniformes corporativos con el logo de tu empresa para eventos y staff.",
    icon: "building",
    color: "royal",
  },
  {
    titulo: "Asesoría en diseño",
    descripcion:
      "Te guiamos en colores, tipografías y composición para que tu equipo luzca profesional dentro y fuera de la cancha.",
    icon: "spark",
    color: "gold",
  },
];

// Para usar una FOTO real: coloca el archivo en `public/catalogo/`
// y poné su ruta en `imagen` (ej: imagen: "/catalogo/azul.jpg").
// Si `imagen` queda vacío, se muestra el mockup SVG automáticamente.
export const PRODUCTOS = [
  {
    nombre: "Camiseta deportiva azul",
    descripcion: "Modelo de club con escudo bordado y detalles tricolor en cuello y mangas.",
    etiqueta: "Más pedida",
    base: "royal",
    numero: "10",
    imagen: "",
  },
  {
    nombre: "Camiseta de arquero naranja",
    descripcion: "Alta visibilidad, tela transpirable y protección reforzada para el guardameta.",
    etiqueta: "Arquero",
    base: "gold",
    numero: "1",
    imagen: "",
  },
  {
    nombre: "Uniforme completo para equipo",
    descripcion: "Camiseta, short y medias a juego. Identidad uniforme para todo el plantel.",
    etiqueta: "Kit completo",
    base: "spartan",
    numero: "07",
    imagen: "",
  },
  {
    nombre: "Camiseta con nombre y número",
    descripcion: "Personalización individual con apellido y dorsal para cada jugador.",
    etiqueta: "Personalizada",
    base: "royal",
    numero: "23",
    imagen: "",
  },
  {
    nombre: "Diseño especial para torneo",
    descripcion: "Edición especial con sponsors, fecha y nombre del campeonato integrados.",
    etiqueta: "Edición torneo",
    base: "spartan",
    numero: "09",
    imagen: "",
  },
  {
    nombre: "Indumentaria de entrenamiento",
    descripcion: "Remera de training liviana ideal para prácticas, calentamiento y academia.",
    etiqueta: "Training",
    base: "carbon",
    numero: "04",
    imagen: "",
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
  { titulo: "Club Nanawa", tipo: "Camiseta titular", base: "royal", numero: "10", span: "lg:col-span-2 lg:row-span-2", imagen: "" },
  { titulo: "Liga barrial", tipo: "Arquero", base: "gold", numero: "1", span: "", imagen: "" },
  { titulo: "Academia juvenil", tipo: "Training", base: "carbon", numero: "08", span: "", imagen: "" },
  { titulo: "Torneo apertura", tipo: "Edición especial", base: "spartan", numero: "09", span: "lg:col-span-2", imagen: "" },
  { titulo: "Empresa local", tipo: "Uniforme staff", base: "carbon", numero: "GS", span: "", imagen: "" },
  { titulo: "Selección barrio", tipo: "Kit completo", base: "royal", numero: "07", span: "", imagen: "" },
];
