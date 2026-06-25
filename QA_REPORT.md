# 🧪 Informe QA — Guerrero Sport

Auditoría de calidad y corrección de fallas previa a estabilización.

## Bugs encontrados y corregidos

### 🔴 Crítico — Overlay invisible bloqueaba la página (lightbox, modales y menús)
Al cerrar el lightbox, los modales del panel y los menús móviles, `AnimatePresence`
de Framer Motion **no removía el nodo** tras la animación de salida: quedaba un
elemento `position: fixed` con `opacity: 0` pero `pointer-events: auto`,
**bloqueando los clics/taps de toda la pantalla**. Esto explicaba los "trabados"
en celular reportados por el cliente (después de ver un diseño, la página no
respondía).

**Corrección:** se reemplazó el patrón frágil por **desmontaje condicional**
(el overlay se quita del DOM al cerrar) en lightbox, `Modal` del admin, menú móvil
del Navbar y sidebar móvil del AdminShell. Verificado: tras cerrar, el centro de la
pantalla vuelve a ser contenido real e interactivo.

### 🔴 Crítico — Lightbox atrapado dentro de la sección en móvil
El lightbox (`position: fixed`) quedaba **contenido dentro de la sección Catálogo**
(por `content-visibility:auto`, que crea un containing block), midiendo 7282px en
vez de cubrir la pantalla. En celular no se veía/cerraba bien y el botón de
WhatsApp quedaba cortado sin posibilidad de scroll.

**Corrección:** el lightbox ahora se renderiza con **React Portal a `document.body`**
(escapa de cualquier contenedor) + **capa con scroll** + imagen más baja en móvil
(`h-[52vh] sm:h-[64vh]`). Resultado: cubre toda la pantalla, se puede scrollear y
todos los controles quedan accesibles.

### 🟠 Medio — Posible acumulación de nodos en el slider del Hero
El slider usaba `AnimatePresence` con cambio por `key` cada 4.5s; con el bug de
salida podía acumular nodos de imagen (fuga de memoria lenta → cierres tras un rato).

**Corrección:** se refactorizó a **capas apiladas con crossfade por opacidad**
(las 3 imágenes siempre montadas, sin montar/desmontar). Cero acumulación, misma
transición suave.

### 🟢 Menor — Blur del lightbox muy costoso
`backdrop-blur-xl` a pantalla completa era pesado de rasterizar. Se bajó a
`backdrop-blur-md` con fondo 95% opaco (mismo aspecto, más liviano).

## Pruebas realizadas (verificadas en navegador, móvil 360–375px y desktop)

| Área | Resultado |
|---|---|
| Build / Lint | ✅ `npm run lint` y `npm run build` sin errores ni warnings |
| Consola | ✅ Sin errores |
| Hero + slider | ✅ Logo, marca de agua, 3 slides con crossfade, sin fuga |
| Navegación + scroll suave + anclas | ✅ |
| Menú móvil | ✅ Abre/cierra sin bloquear la página |
| WhatsApp (18 enlaces) | ✅ Apuntan a `wa.me/595983622191` |
| Catálogo (prendas completas) | ✅ Sin recortes/deformación |
| Lightbox: abrir, scroll, avanzar/retroceder, cerrar (X/ESC/clic fuera) | ✅ |
| Galería + lightbox | ✅ |
| Admin: login, guard, dashboard | ✅ |
| Admin: crear / editar / ocultar / eliminar producto | ✅ |
| Admin: modales sin overlay fantasma | ✅ |
| Persistencia (recarga) | ✅ |
| Responsive (sin scroll horizontal) | ✅ |
| SEO (title, description, OG, favicon, robots, sitemap, GSC, dominio) | ✅ |

## Estado final
**Estable.** Los bugs que causaban bloqueos y posibles cierres en celular fueron
corregidos y verificados. Build y lint limpios.

## Recomendaciones para próximos proyectos
1. **Evitar `AnimatePresence` para overlays con `position: fixed`**; usar render
   condicional o portal. Probar siempre el cierre con **clic real** (no solo `.click()`
   programático, que ignora overlays invisibles).
2. **Modales/lightbox siempre con Portal a `body`** para no depender del árbol de
   contenedores (`transform`, `content-visibility`, `filter`).
3. Mantener este `TESTING_CHECKLIST.md` y correrlo antes de cada entrega.
4. Probar en celular real además del emulador, especialmente apertura/cierre repetido.
