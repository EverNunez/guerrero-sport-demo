// Genera hojas de contacto (grids) de las fotos del cliente para revisarlas.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC = "C:/Users/Manda/OneDrive/Documentos/proyectos/imagenes_guerrero_sport";
const OUT = "C:/Users/Manda/OneDrive/Documentos/proyectos/guerrero-sport-demo/scripts/_review";
fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(SRC).filter((f) => /\.jpe?g$/i.test(f)).sort();

const COLS = 4;
const ROWS = 3;
const PER = COLS * ROWS;
const CW = 380; // cell width
const CH = 320; // cell height
const TW = 360; // thumb width
const TH = 280; // thumb height

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const sheets = Math.ceil(files.length / PER);
console.log(`${files.length} fotos · ${sheets} hojas`);

for (let s = 0; s < sheets; s++) {
  const slice = files.slice(s * PER, s * PER + PER);
  const W = COLS * CW;
  const H = ROWS * CH;
  const composites = [];

  for (let i = 0; i < slice.length; i++) {
    const f = slice[i];
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const x = col * CW;
    const y = row * CH;

    const thumb = await sharp(path.join(SRC, f))
      .rotate()
      .resize(TW, TH, { fit: "inside" })
      .jpeg({ quality: 70 })
      .toBuffer();
    const meta = await sharp(thumb).metadata();
    composites.push({
      input: thumb,
      left: x + Math.round((CW - meta.width) / 2),
      top: y + 6,
    });

    const label = `${esc(f)}`;
    const svg = Buffer.from(
      `<svg width="${CW}" height="34"><rect width="100%" height="100%" fill="#101014"/><text x="${CW / 2}" y="22" font-family="Arial" font-size="18" fill="#ffd34d" text-anchor="middle">${label}</text></svg>`
    );
    composites.push({ input: svg, left: x, top: y + CH - 34 });
  }

  const out = path.join(OUT, `hoja-${s + 1}.jpg`);
  await sharp({
    create: { width: W, height: H, channels: 3, background: "#050507" },
  })
    .composite(composites)
    .jpeg({ quality: 72 })
    .toFile(out);
  console.log("OK", out);
}
console.log("LISTO");
