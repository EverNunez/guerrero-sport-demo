// Optimiza y prepara para web las fotos reales del cliente (selección curada).
// - NO modifica los originales (sólo lee).
// - Genera copias .webp livianas dentro de public/images/guerrero-sport/.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC = "C:/Users/Manda/OneDrive/Documentos/proyectos/imagenes guerrero sport";
const BASE = "C:/Users/Manda/OneDrive/Documentos/proyectos/guerrero-sport-demo/public/images/guerrero-sport";
const HERO = path.join(BASE, "hero");
const DEST = path.join(BASE, "destacados");
const CAT = path.join(BASE, "catalogo");
const GAL = path.join(BASE, "galeria");

// Limpia salidas anteriores para no dejar imágenes sin usar.
for (const d of [HERO, DEST, CAT, GAL]) {
  fs.rmSync(d, { recursive: true, force: true });
  fs.mkdirSync(d, { recursive: true });
}

// Hero + destacado (recorte 4:5 grande, alta calidad).
const grandes = [
  ["DSC_2820.JPG", "espartano", HERO, 1040, 1300],
  ["DSC_2674.JPG", "conjunto-guerrero", DEST, 1000, 1250],
];

// Catálogo (recorte 4:5 uniforme).
const catalogo = [
  ["DSC_2636.JPG", "camiseta-paraguay-rayada"],
  ["DSC_2657.JPG", "conjunto-paraguay-azul"],
  ["DSC_2745.JPG", "camiseta-diseno-guarani"],
  ["DSC_2913.JPG", "camiseta-basquet-bulls"],
  ["DSC_2967.JPG", "camiseta-futvoley"],
  ["DSC_2997.JPG", "remera-pesca"],
  ["DSC_3379.JPG", "conjunto-femenino"],
  ["DSC_2862.JPG", "camiseta-club-franco"],
  ["DSC_2882.JPG", "camiseta-barcelona"],
  ["DSC_2746.JPG", "camiseta-sublimada-verde"],
];

// Galería (variedad de trabajos, se conserva proporción).
const galeria = [
  ["DSC_2832.JPG", "galeria-garras"],
  ["DSC_2975.JPG", "galeria-rosa-degradado"],
  ["DSC_2734.JPG", "galeria-nanduti-azul"],
  ["DSC_2938.JPG", "galeria-star-tank"],
  ["DSC_2696.JPG", "galeria-raza-guarani"],
  ["DSC_2705.JPG", "galeria-gris-logo"],
  ["DSC_3065.JPG", "galeria-rojo-campeones"],
  ["DSC_3213.JPG", "galeria-gorra"],
  ["DSC_3413.JPG", "galeria-paraguay-nombres"],
  ["DSC_2799.JPG", "galeria-negro-verde"],
  ["DSC_2770.JPG", "galeria-morado-dorado"],
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
  await img.webp({ quality: opts.q }).toFile(outPath);
  const sz = fs.statSync(outPath).size;
  total++;
  bytes += sz;
  console.log(`OK ${path.basename(dir)}/${name}.webp (${(sz / 1024).toFixed(0)} KB)`);
}

for (const [f, n, dir, w, h] of grandes) await gen(f, n, dir, { crop: true, w, h, q: 82 });
for (const [f, n] of catalogo) await gen(f, n, CAT, { crop: true, w: 900, h: 1125, q: 80 });
for (const [f, n] of galeria) await gen(f, n, GAL, { crop: false, w: 1200, h: 1200, q: 80 });

console.log(`\n${total} imágenes · ${(bytes / 1024 / 1024).toFixed(2)} MB`);
