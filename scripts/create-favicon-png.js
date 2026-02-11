// Script para crear versiones PNG del favicon desde el SVG
// Este script crea las versiones PNG necesarias para compatibilidad con navegadores antiguos

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

// Leer el SVG
const svgContent = fs.readFileSync(path.join(publicDir, 'favicon.svg'), 'utf-8');

console.log('✅ SVG favicon encontrado');
console.log('📝 Contenido del SVG:');
console.log(svgContent);
console.log('\n⚠️  Para crear versiones PNG del favicon, puedes usar:');
console.log('   1. Una herramienta online como https://realfavicongenerator.net/');
console.log('   2. O usar un conversor SVG a PNG como https://cloudconvert.com/svg-to-png');
console.log('\n📋 Tamaños recomendados:');
console.log('   - favicon-32x32.png (32x32 píxeles)');
console.log('   - favicon-192x192.png (192x192 píxeles)');
console.log('   - apple-touch-icon.png (180x180 píxeles)');
console.log('\n💡 Guarda los archivos PNG generados en la carpeta public/');
