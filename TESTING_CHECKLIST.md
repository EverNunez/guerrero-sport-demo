# ✅ Checklist de pruebas antes de cada entrega — Guerrero Sport

Lista de verificación manual a ejecutar **antes de dar por estable** cualquier
cambio. Marcar cada ítem en el navegador (móvil y escritorio).

## 1. Build y calidad de código
- [ ] `npm install` sin errores.
- [ ] `npm run lint` → sin warnings ni errores.
- [ ] `npm run build` → compila, 14 páginas, sin errores.
- [ ] Sin errores en la consola del navegador (público y `/admin`).

## 2. Navegación y enlaces
- [ ] Navbar fijo visible; logo correcto.
- [ ] Links de navegación (Inicio, Servicios, Catálogo, Diseños, Galería, Contacto) hacen scroll suave a su sección.
- [ ] Menú móvil (hamburguesa) abre y **cierra** sin dejar la pantalla bloqueada.
- [ ] Footer: links internos y redes (Instagram externo abre en pestaña nueva).
- [ ] Botón flotante de WhatsApp visible y clickeable.

## 3. Botones de WhatsApp
- [ ] Todos apuntan a `wa.me/595983622191`.
- [ ] Abren en pestaña nueva con el mensaje correcto.
- [ ] Botón dentro del lightbox usa el nombre del producto.

## 4. Catálogo / "Ver diseños"
- [ ] Las prendas se ven **completas** (object-contain), sin recortes ni deformación.
- [ ] Escudos y logos visibles.
- [ ] Clic en una prenda abre el **lightbox**.
- [ ] Lightbox: cubre toda la pantalla, imagen nítida, se puede **scrollear** en celular.
- [ ] Lightbox: **cerrar** con X, con ESC y con clic fuera. Tras cerrar, la página responde (no queda bloqueada).
- [ ] Lightbox: **avanzar/retroceder** con flechas y teclado; contador correcto.
- [ ] Lightbox muestra etiqueta, categoría, precio (si hay), descripción y botón WhatsApp.

## 5. Galería
- [ ] Imágenes se ven bien (mosaico), captions correctos.
- [ ] Clic abre el lightbox; navegación y cierre funcionan.

## 6. Panel administrativo (`/admin`)
- [ ] `/admin` sin sesión → redirige a `/admin/login`.
- [ ] Login con `admin` / `guerrero2025` entra al panel; credenciales inválidas muestran error.
- [ ] Dashboard muestra contadores correctos.
- [ ] Productos: crear, editar, **cambiar imagen**, mostrar/ocultar, eliminar.
- [ ] Categorías: crear, editar, eliminar.
- [ ] Galería: agregar, editar, ocultar, eliminar.
- [ ] Banners: crear, editar, eliminar.
- [ ] Contacto: editar y guardar.
- [ ] Modales **abren y cierran** sin dejar overlay invisible que bloquee clics.
- [ ] Los cambios se reflejan en la página pública.
- [ ] Persistencia: recargar mantiene los cambios (localStorage del navegador).
- [ ] Logout vuelve al login.

## 7. Responsive (probar en cada ancho)
- [ ] 360px (móvil pequeño) — sin scroll horizontal.
- [ ] 375px (móvil estándar).
- [ ] 414px (móvil grande).
- [ ] 768px (tablet).
- [ ] 1024px (laptop).
- [ ] 1366px+ (desktop).
- [ ] Hero, catálogo, galería, lightbox y panel se ven correctos en todos.

## 8. Rendimiento móvil
- [ ] Scroll fluido, sin tirones fuertes.
- [ ] Sin cierres/congelamientos tras navegar y abrir/cerrar varias veces.
- [ ] Imágenes optimizadas (`next/image`, webp/avif, lazy-load).
- [ ] Animaciones suaves; respetan `prefers-reduced-motion`.

## 9. SEO y producción
- [ ] `title` y `description` correctos.
- [ ] Favicon visible.
- [ ] `robots.txt` accesible (excluye `/admin`).
- [ ] `sitemap.xml` accesible con el dominio real.
- [ ] `metadataBase`, Open Graph y Twitter usan `https://guerrerosport.com.py`.
- [ ] Meta `google-site-verification` presente.
- [ ] HTTPS activo; URLs del dominio oficial.

## 10. Antes de subir
- [ ] Probar flujo público completo de punta a punta.
- [ ] Probar flujo admin completo.
- [ ] `git commit` + `git push` solo si build pasa y todo lo anterior está OK.
