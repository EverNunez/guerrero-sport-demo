# Guerrero Sport · Demo web premium

Demo web profesional para **Guerrero Sport** — tienda de indumentaria deportiva
personalizada en Presidente Franco, Barrio Santa Rosa.

Construido con **Next.js 14 (App Router)**, **Tailwind CSS** y **Framer Motion**.
Diseño responsive (celular, tablet y PC), animaciones suaves y estética
deportiva premium (estilo estadio, luces, degradados y textura).

---

## 🚀 Cómo ejecutar en tu PC

Necesitás tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

```bash
# 1. Instalar las dependencias
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev
```

Luego abrí en el navegador: **http://localhost:3000**

---

## 📁 Estructura del proyecto

```
guerrero-sport-demo/
├── app/
│   ├── layout.js          # Layout raíz, fuentes y metadatos
│   ├── page.js            # Página principal (arma todas las secciones)
│   └── globals.css        # Estilos globales y utilidades Tailwind
├── components/
│   ├── Navbar.jsx         # Navbar fijo + menú móvil
│   ├── Footer.jsx         # Footer profesional
│   ├── icons.jsx          # Iconos SVG sin dependencias
│   ├── sections/          # Secciones de la página
│   │   ├── Hero.jsx
│   │   ├── Servicios.jsx
│   │   ├── Catalogo.jsx
│   │   ├── Proceso.jsx
│   │   ├── Galeria.jsx
│   │   ├── Equipos.jsx
│   │   ├── Ubicacion.jsx
│   │   └── CTA.jsx
│   └── ui/                # Componentes reutilizables
│       ├── Logo.jsx
│       ├── Jersey.jsx           # Mockup de camiseta en SVG
│       ├── Reveal.jsx           # Animación al hacer scroll
│       ├── SectionHeading.jsx
│       ├── WhatsAppButton.jsx
│       ├── FloatingWhatsApp.jsx
│       └── DemoBadge.jsx        # Etiqueta "Demo visual"
└── lib/
    └── site.js            # Textos, datos y enlace de WhatsApp (editar acá)
```

## ✏️ Personalizar contenido

Casi todo el contenido (servicios, productos, beneficios, horarios y el número
de WhatsApp) está centralizado en **`lib/site.js`**. Cambiando ese archivo se
actualiza toda la web.

- **Número de WhatsApp:** constante `WHATSAPP_NUMBER`.
- **Dirección y horarios:** objeto `CONTACTO`.
- **Servicios / productos / galería:** arrays `SERVICIOS`, `PRODUCTOS`, `GALERIA`.

> Las camisetas son mockups vectoriales (SVG) generados por código, así que el
> demo funciona sin imágenes externas. Para usar fotos reales, reemplazá el
> componente `Jersey` por una etiqueta `<Image />` de Next.js en
> `Catalogo.jsx` y `Galeria.jsx`.

---

## ☁️ Cómo subirlo a Vercel

1. Subí el proyecto a un repositorio en **GitHub** (o GitLab / Bitbucket):
   ```bash
   git init
   git add .
   git commit -m "Demo Guerrero Sport"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/guerrero-sport-demo.git
   git push -u origin main
   ```
2. Entrá a [vercel.com](https://vercel.com) e iniciá sesión con GitHub.
3. Click en **"Add New… → Project"** e importá el repositorio.
4. Vercel detecta Next.js automáticamente — no hay que configurar nada.
5. Click en **"Deploy"**. En ~1 minuto tu demo queda online con una URL pública
   para compartir con el cliente.

> Cada vez que hagas `git push`, Vercel actualiza el sitio automáticamente.

---

Demo visual diseñado por **Ever Núñez** · Contacto y pedidos por WhatsApp.
