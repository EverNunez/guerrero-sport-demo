# Fotos del catálogo

Poné acá las fotos reales de los productos (formato `.jpg`, `.png` o `.webp`).

Recomendación: imágenes horizontales, idealmente **1200×900 px** (relación 4:3),
con la prenda centrada y fondo limpio.

## Cómo activar una foto

1. Copiá el archivo en esta carpeta, por ejemplo: `azul.jpg`
2. Abrí `lib/site.js` y en el producto correspondiente cambiá:

   ```js
   imagen: ""           →    imagen: "/catalogo/azul.jpg"
   ```

3. Guardá. La web reemplaza el mockup SVG por la foto automáticamente.

> Si `imagen` queda vacío, se muestra la camiseta dibujada (mockup). Así el demo
> nunca queda con imágenes rotas.
