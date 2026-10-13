import fs from "fs";
import path from "path";
import zlib from "zlib";

// Function to compute CRC32
function crc32(buf) {
  let table = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = (table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8)) >>> 0;
  }
  return (crc ^ 0xffffffff) >>> 0;
}

// Function to write a valid RGBA PNG
function createPNG(width, height, getPixel) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8 bits per channel
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace

  const ihdrChunk = Buffer.concat([Buffer.from("IHDR"), ihdrData]);
  const ihdrCRC = Buffer.alloc(4);
  ihdrCRC.writeUInt32BE(crc32(ihdrChunk), 0);
  const ihdr = Buffer.concat([Buffer.alloc(4), ihdrChunk, ihdrCRC]);
  ihdr.writeUInt32BE(13, 0);

  // Scanlines
  const rawScanlines = [];
  for (let y = 0; y < height; y++) {
    const row = [0]; // filter type 0
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y, width, height);
      row.push(r, g, b, a);
    }
    rawScanlines.push(Buffer.from(row));
  }
  const uncompressed = Buffer.concat(rawScanlines);
  const compressed = zlib.deflateSync(uncompressed);

  // IDAT chunk
  const idatChunk = Buffer.concat([Buffer.from("IDAT"), compressed]);
  const idatCRC = Buffer.alloc(4);
  idatCRC.writeUInt32BE(crc32(idatChunk), 0);
  const idat = Buffer.concat([Buffer.alloc(4), idatChunk, idatCRC]);
  idat.writeUInt32BE(compressed.length, 0);

  // IEND chunk
  const iendChunk = Buffer.from("IEND");
  const iendCRC = Buffer.alloc(4);
  iendCRC.writeUInt32BE(crc32(iendChunk), 0);
  const iend = Buffer.concat([Buffer.alloc(4), iendChunk, iendCRC]);
  iend.writeUInt32BE(0, 0);

  return Buffer.concat([signature, ihdr, idat, iend]);
}

// Generate simple aesthetic QR pattern
function generateQRPNG(label) {
  const size = 240;
  const cellSize = 8;
  const gridCount = 30;

  // Deterministic seed from label
  let seed = 0;
  for (let i = 0; i < label.length; i++) seed += label.charCodeAt(i);

  function isPositionPattern(gx, gy) {
    if ((gx < 7 && gy < 7) || (gx >= gridCount - 7 && gy < 7) || (gx < 7 && gy >= gridCount - 7)) {
      const lx = gx < 7 ? gx : gx >= gridCount - 7 ? gx - (gridCount - 7) : gx;
      const ly = gy < 7 ? gy : gy >= gridCount - 7 ? gy - (gridCount - 7) : gy;
      if (lx === 0 || lx === 6 || ly === 0 || ly === 6) return true;
      if (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4) return true;
      return false;
    }
    return null;
  }

  return createPNG(size, size, (x, y) => {
    // Border padding
    if (x < 16 || x >= size - 16 || y < 16 || y >= size - 16) {
      return [255, 255, 255, 255];
    }
    const gx = Math.floor((x - 16) / ((size - 32) / gridCount));
    const gy = Math.floor((y - 16) / ((size - 32) / gridCount));

    const pos = isPositionPattern(gx, gy);
    if (pos !== null) {
      return pos ? [15, 23, 42, 255] : [255, 255, 255, 255];
    }

    // Pseudorandom grid module
    const val = (Math.sin(gx * 12.9898 + gy * 78.233 + seed) * 43758.5453) % 1;
    return Math.abs(val) > 0.48 ? [6, 66, 143, 255] : [255, 255, 255, 255];
  });
}

// Generate Logo Badge
function generateLogoPNG(title, sub, primaryColor, secondaryColor) {
  const width = 160;
  const height = 160;
  return createPNG(width, height, (x, y) => {
    const cx = width / 2;
    const cy = height / 2;
    const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);

    // Circular background
    if (dist < 64) {
      if (dist > 58) return [primaryColor[0], primaryColor[1], primaryColor[2], 255];
      if (dist < 54 && dist > 50)
        return [secondaryColor[0], secondaryColor[1], secondaryColor[2], 255];
      return [255, 255, 255, 255];
    }
    return [0, 0, 0, 0]; // transparent
  });
}

const dir = path.join("public", "images");
fs.writeFileSync(path.join(dir, "qr-submission.png"), generateQRPNG("submission"));
fs.writeFileSync(path.join(dir, "qr-payment.png"), generateQRPNG("payment"));
fs.writeFileSync(
  path.join(dir, "rsst.png"),
  generateLogoPNG("RSST", "TRUST", [6, 66, 143], [63, 91, 209]),
);
fs.writeFileSync(
  path.join(dir, "vtu.png"),
  generateLogoPNG("VTU", "UNIV", [43, 40, 112], [185, 208, 255]),
);
fs.writeFileSync(
  path.join(dir, "aicte.png"),
  generateLogoPNG("AICTE", "GOVT", [176, 58, 122], [6, 66, 143]),
);
console.log("Generated PNGs successfully.");
