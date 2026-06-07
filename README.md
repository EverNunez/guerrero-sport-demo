# Guerrero Sport · Sitio web oficial

Sitio web oficial de **Guerrero Sport** — indumentaria deportiva personalizada en
Presidente Franco, Barrio Santa Rosa.

Construido con **Next.js 14 (App Router)**, **Tailwind CSS** y **Framer Motion**.
Diseño responsive (celular, tablet y PC), animaciones suaves y estética
deportiva premium: estilo estadio, luces, degradados, textura y la marca de agua
animada **GUERRERO SPORT** en el fondo.

---

## 🚀 Cómo ejecutar en tu PC

Necesitás [Node.js](https://nodejs.org/) (versión 18 o superior).

```bash
npm install      # instalar dependencias (solo la primera vez)
npm run dev      # iniciar servidor de desarrollo
```

Abrí en el navegador: **http://localhost:3000**
(Para una versión optimizada: `npm run build` y luego `npm start`.)

- Sitio público: **/**
- Panel administrativo: **/admin** (usuario `admin` · contraseña `guerrero2025`)

> **No requiere variables de entorno ni base de datos.** Funciona con sólo
> `npm install` y `npm run dev`.

> ⚠️ **No lo ejecutes dentro de una carpeta de OneDrive.** La sincronización de
> OneDrive toca los archivos constantemente y rompe `npm run dev` (error
> `EINVAL readlink` y recargas en bucle). Copiá el proyecto a una ruta local,
> por ejemplo `C:\dev\guerrero-sport-demo`, y desarrollá desde ahí. Esto **no
> afecta a Vercel**, donde el sitio funciona perfecto.

---

## 📁 Estructura del proyecto

```
guerrero-sport-demo/
├── app/
│   ├── layout.js              # Layout raíz, fuentes, metadatos, favicon y OG
│   ├── page.js                # Página principal (arma todas las secciones)
│   ├── globals.css            # Estilos globales y utilidades Tailwind
│   ├── favicon.ico            # Favicon (casco espartano)
│   └── admin/                 # Panel administrativo (estructura lista a futuro)
│       ├── layout.js          # Shell del panel (sidebar + topbar)
│       ├── page.js            # Resumen / dashboard
│       ├── productos/         # Listado de productos
│       ├── categorias/        # Categorías
│       ├── galeria/           # Galería de imágenes
│       ├── banners/           # Banners destacados
│       └── contacto/          # Información de contacto
├── components/
│   ├── Navbar.jsx             # Navbar fijo + menú móvil
│   ├── Footer.jsx             # Footer profesional
│   ├── icons.jsx             # Iconos SVG sin dependencias
│   ├── sections/             # Secciones del sitio público
│   │   ├── Hero.jsx          # Hero con emblema + marca de agua animada
│   │   ├── Servicios.jsx
│   │   ├── Catalogo.jsx
│   │   ├── Proceso.jsx
│   │   ├── Galeria.jsx
│   │   ├── Equipos.jsx       # Sección para clubes y equipos
│   │   ├── Ubicacion.jsx     # Contacto, mapa y horarios
│   │   └── CTA.jsx
│   ├── ui/                   # Componentes reutilizables
│   │   ├── Logo.jsx          # Logo oficial (casco + wordmark reales)
│   │   ├── BrandWatermark.jsx# Marca de agua "GUERRERO SPORT" animada
│   │   ├── Jersey.jsx        # Mockup de camiseta en SVG (placeholder)
│   │   ├── ProductMedia.jsx  # Muestra foto real o, si no hay, el mockup
│   │   ├── Reveal.jsx        # Animación suave al hacer scroll
│   │   ├── SectionHeading.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── FloatingWhatsApp.jsx
│   └── admin/                # Componentes del panel
│       ├── AdminShell.jsx    # Sidebar + topbar responsive
│       └── AdminUI.jsx       # Tarjetas, encabezados y avisos reutilizables
├── lib/
│   ├── site.js               # Textos, datos y WhatsApp del sitio (editar acá)
│   └── admin.js              # Navegación y datos demo del panel
└── public/
    ├── marca/                # Logos oficiales (PDF original + PNG)
    ├── catalogo/             # Fotos reales de productos (cuando lleguen)
    └── galeria/              # Fotos reales de trabajos (cuando lleguen)
```

---

## 🎨 Marca / logos

Los logos oficiales del cliente están en **`public/marca/`**:

| Archivo | Uso |
|---|---|
| `casco.png` | Emblema (casco espartano). Navbar, hero, favicon. |
| `logo-guerrero.png` | Wordmark "Guerrero Sport" original (texto negro). |
| `logo-guerrero-white.png` | Wordmark en blanco, para fondos oscuros. |
| `casco.pdf` / `logo-guerrero.pdf` | Archivos vectoriales originales (respaldo). |

El favicon, los íconos de la app (`icon-192/512`, `apple-icon`) y la imagen para
compartir en redes (`og-image.png`) ya están generados a partir del emblema.

---

## ✏️ Personalizar contenido

Casi todo el contenido está centralizado en **`lib/site.js`**:

- **Número de WhatsApp:** `WHATSAPP_NUMBER`.
- **Dirección y horarios:** objeto `CONTACTO`.
- **Servicios / productos / galería:** arrays `SERVICIOS`, `PRODUCTOS`, `GALERIA`.

### Cómo poner las fotos reales (cuando el cliente las envíe)

Hoy las camisetas son **mockups vectoriales (SVG)** generados por código, así que
el sitio nunca queda con imágenes rotas. Para usar una foto real:

1. Copiá la foto en `public/catalogo/` (productos) o `public/galeria/` (trabajos).
2. En `lib/site.js`, en el item correspondiente, completá el campo `imagen`:
   ```js
   imagen: ""   →   imagen: "/catalogo/mi-foto.jpg"
   ```
3. Listo. `ProductMedia` reemplaza automáticamente el mockup por la foto.

Recomendado: imágenes 4:3 (~1200×900 px), prenda centrada y fondo limpio.

---

## ☁️ Cómo subirlo a Vercel

1. Subí el proyecto a un repositorio en **GitHub**:
   ```bash
   git add .
   git commit -m "Sitio oficial Guerrero Sport"
   git push
   ```
   (Si todavía no hay remoto: `git init`, crear repo en GitHub y `git remote add origin ...`.)
2. Entrá a [vercel.com](https://vercel.com) e iniciá sesión con GitHub.
3. **"Add New… → Project"** e importá el repositorio.
4. Vercel detecta Next.js automáticamente — no hay que configurar nada.
5. **"Deploy"**. En ~1 minuto el sitio queda online con una URL pública.

> Cada `git push` actualiza el sitio automáticamente.
> Después del primer deploy, actualizá `metadataBase` en `app/layout.js` con la
> URL real (ej. `https://guerrerosport.vercel.app`) para que la imagen de redes
> y el SEO usen el dominio correcto.

---

## 🔐 Panel administrativo (`/admin`)

El panel es **funcional**: permite gestionar productos, categorías, galería,
banners y datos de contacto, y los cambios se reflejan al instante en la web.

**Acceso:** entrá a `/admin` (ej. `https://tu-sitio.vercel.app/admin`).

| | |
|---|---|
| **Usuario** | `admin` |
| **Contraseña** | `guerrero2025` |

> Para cambiar las credenciales, editá `ADMIN_USER` y `ADMIN_PASS` en
> `lib/store.js`.

**Cómo funciona la persistencia.** Los datos se guardan en el **navegador**
(localStorage) del dispositivo donde se editan. Es ideal para que el cliente
administre su contenido desde su PC sin necesidad de base de datos ni costos de
servidor. No es multi-dispositivo: los cambios hechos en una compu no se ven en
otra. El botón **"Restablecer"** del panel vuelve todo a los valores originales.

> **Importante sobre la seguridad:** el login es una **barrera de acceso del
> lado del cliente**, suficiente para un panel privado de gestión, pero no es
> seguridad de servidor. Para usuarios múltiples, datos compartidos entre
> dispositivos y autenticación robusta, el siguiente paso es conectar un backend
> (ej. **Supabase**: base de datos + storage de imágenes + auth). La capa de
> datos (`lib/store.js`) está aislada justamente para facilitar ese cambio.

---

## 🔜 Pendiente / mejoras futuras

- [ ] Reemplazar mockups por fotos reales de remeras/uniformes (catálogo y galería).
- [ ] Confirmar textos finales de servicios y descripciones.
- [ ] (Opcional) Migrar el panel a un backend real (Supabase) para gestión
      multi-dispositivo y multiusuario.

---

Sitio web desarrollado para **Guerrero Sport** por **Ever Núñez** ·
Pedidos y consultas por WhatsApp.
