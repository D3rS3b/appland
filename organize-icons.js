const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

// Carpeta donde tienes los iconos originales
const inputFolder = path.join(__dirname, "original-icons");

// Carpeta destino dentro del proyecto
const outputFolder = path.join(__dirname, "icons");

// Crear carpeta si no existe
fs.ensureDirSync(outputFolder);

// Redimensionar todas las imágenes a 128x128
fs.readdirSync(inputFolder).forEach(file => {
  const inputPath = path.join(inputFolder, file);
  const outputPath = path.join(outputFolder, file);

  sharp(inputPath)
    .resize(128, 128)
    .toFile(outputPath)
    .then(() => console.log(`Processed ${file}`))
    .catch(err => console.error(err));
});
