// Optimiza y prepara para web las fotos reales del cliente.
// - NO modifica los originales (sólo lee).
// - Genera copias .webp livianas dentro de public/images/guerrero-sport/.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC = "C:/Users/Manda/OneDrive/Documentos/proyectos/imagenes_guerrero_sport";
const BASE = "C:/Users/Manda/OneDrive/Documentos/proyectos/guerrero-sport-demo/public/images/guerrero-sport";
const CAT = path.join(BASE, "catalogo");
const GAL = path.join(BASE, "galeria");
fs.mkdirSync(CAT, { recursive: true });
fs.mkdirSync(GAL, { recursive: true });

// Catálogo: recorte vertical uniforme (4:5) para cards parejas.
const catalogo = [
  ["DSC_2636.JPG", "camiseta-paraguay-rayada"],
  ["DSC_2674.JPG", "conjunto-guerrero-sport"],
  ["DSC_2745.JPG", "camiseta-diseno-guarani"],
  ["DSC_2820.JPG", "camiseta-espartano"],
  ["DSC_2862.JPG", "camiseta-franco-amarillo"],
  ["DSC_2882.JPG", "camiseta-barcelona"],
  ["DSC_2746.JPG", "camiseta-sublimada-verde"],
  ["DSC_2657.JPG", "conjunto-paraguay-azul"],
];

// Galería: variedad de trabajos (se conserva proporción, se cubre con CSS).
const galeria = [
  ["DSC_2820.JPG", "galeria-espartano"],
  ["DSC_2815.JPG", "galeria-espartano-conjunto"],
  ["DSC_2782.JPG", "galeria-sublimada-rosa"],
  ["DSC_2799.JPG", "galeria-sublimada-verde"],
  ["DSC_2734.JPG", "galeria-nanduti"],
  ["DSC_2857.JPG", "galeria-franco-conjunto"],
  ["DSC_2870.JPG", "galeria-barcelona"],
  ["DSC_2705.JPG", "galeria-gris-logo"],
  ["DSC_2696.JPG", "galeria-raza-guarani"],
  ["DSC_2867.JPG", "galeria-verde-degradado"],
  ["DSC_2824.JPG", "galeria-garras"],
];

let total = 0;
let bytes = 0;

async function gen(file, name, dir, opts) {
  const inPath = path.join(SRC, file);
  if (!fs.existsSync(inPath)) {
    console.warn("FALTA:", file);
    return;
  }
  const outPath = path.join(dir, `${name}.webp`);
  let img = sharp(inPath).rotate();
  if (opts.crop) {
    img = img.resize(opts.w, opts.h, { fit: "cover", position: "centre" });
  } else {
    img = img.resize(opts.w, opts.h, { fit: "inside", withoutEnlargement: true });
  }
  await img.webp({ quality: 80 }).toFile(outPath);
  const sz = fs.statSync(outPath).size;
  total++;
  bytes += sz;
  console.log(`OK ${path.basename(dir)}/${name}.webp  (${(sz / 1024).toFixed(0)} KB)`);
}

for (const [f, n] of catalogo) await gen(f, n, CAT, { crop: true, w: 900, h: 1125 });
for (const [f, n] of galeria) await gen(f, n, GAL, { crop: false, w: 1200, h: 1200 });

console.log(`\n${total} imágenes · ${(bytes / 1024 / 1024).toFixed(2)} MB en total`);
