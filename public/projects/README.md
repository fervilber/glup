# Sistema Automático de Gestión de Proyectos

Este directorio contiene los archivos markdown de los proyectos del portfolio. El sistema genera automáticamente el archivo `index.json` a partir del frontmatter YAML de cada archivo.

## 🚀 Cómo Agregar un Nuevo Proyecto

### 1. Crea un archivo `.md` con frontmatter YAML

```markdown
---
title: "Nombre del Proyecto"
description: "Descripción breve del proyecto (máximo 150 caracteres)"
year: 2026
tags: ["Tecnología", "Categoría", "Tipo"]
image: "img/nombre-proyecto.png"
---

# Nombre del Proyecto

Contenido completo del proyecto...

## Características

- Feature 1
- Feature 2
```

### 2. Coloca la imagen del proyecto

Guarda la imagen en `public/img/` con un nombre descriptivo (ej: `mi-proyecto.png`)

### 3. Genera el índice

```bash
npm run generate-index
```

¡Listo! El proyecto aparecerá automáticamente ordenado por año.

## 📝 Estructura del Frontmatter

```yaml
---
title: "Título del Proyecto"           # OBLIGATORIO - Nombre visible
description: "Descripción corta"       # OBLIGATORIO - Resumen breve
year: 2026                             # OBLIGATORIO - Año para ordenamiento
tags: ["Tag1", "Tag2", "Tag3"]        # OBLIGATORIO - Categorías/tecnologías
image: "img/proyecto.png"              # OBLIGATORIO - Ruta de la imagen
---
```

### Campos Explicados

- **title**: El nombre que aparecerá en la tarjeta del proyecto
- **description**: Texto breve que se muestra en la vista de lista (máx. 150 caracteres)
- **year**: Año del proyecto (número entero). Los proyectos se ordenan automáticamente del más reciente al más antiguo
- **tags**: Array de etiquetas para filtrado y categorización
- **image**: Ruta relativa a `public/` de la imagen del proyecto

## 🔧 Comandos Disponibles

```bash
# Generar index.json manualmente
npm run generate-index

# El build automáticamente genera el index antes de compilar
npm run build

# Desarrollo (no genera el index automáticamente)
npm run dev
```

## 📂 Convenciones y Buenas Prácticas

### Nombres de Archivo

- Usa **PascalCase** para proyectos: `MiProyecto.md`
- El nombre del archivo se convierte automáticamente en el `slug` del proyecto
- Evita espacios y caracteres especiales

### Imágenes

- Formato recomendado: **PNG** o **JPG**
- Tamaño recomendado: **800x600px** o similar (ratio 4:3)
- Nombre descriptivo: `nombre-proyecto.png`
- Ubicación: `public/img/`

### Tags

- Usa tags consistentes entre proyectos
- Ejemplos comunes: `"React"`, `"JavaScript"`, `"Python"`, `"app"`, `"Blog"`, `"Juego"`, `"Diseño"`, `"3D"`
- **NO incluyas el año en los tags** (usa el campo `year` dedicado)

### Año

- Usa el año de **finalización** o **publicación** del proyecto
- Formato: número entero (ej: `2026`, no `"2026"`)

## ✨ Ventajas del Sistema

✅ **Automático**: No necesitas editar `index.json` manualmente  
✅ **Ordenamiento inteligente**: Por año, del más reciente al más antiguo  
✅ **Validación**: El script te avisa si falta algún campo obligatorio  
✅ **Integrado en build**: Se ejecuta automáticamente al compilar  
✅ **Simple**: Solo YAML, sin lógica compleja  

## 🎯 Ejemplo Completo

**Archivo**: `MiAppIncreible.md`

```markdown
---
title: "Mi App Increíble"
description: "Una aplicación revolucionaria que cambia la forma de gestionar tus tareas diarias."
year: 2026
tags: ["React", "TypeScript", "Productividad", "app"]
image: "img/miappincreible.png"
---

# Mi App Increíble

Esta es una aplicación revolucionaria que utiliza IA para optimizar tu productividad...

## Características Principales

- 🚀 Sincronización en tiempo real
- 🎨 Interfaz moderna y minimalista
- 🔒 Seguridad de nivel empresarial

## Stack Tecnológico

Desarrollado con React, TypeScript y Firebase...

[Ver Demo](https://mi-app.com)
```

**Resultado**:

- Aparece en la lista de proyectos
- Ordenado automáticamente por año (2026 primero)
- Filtrable por tags
- Imagen visible en la tarjeta

## ⚠️ Solución de Problemas

### "No frontmatter found"

- Asegúrate de que el frontmatter empieza con `---` en la primera línea
- Verifica que termina con `---` antes del contenido

### "Missing 'title' in frontmatter"

- Añade el campo `title:` con el nombre del proyecto entre comillas

### "Missing 'year' in frontmatter"

- Añade el campo `year:` con un número entero (sin comillas)

### El proyecto no aparece en el orden correcto

- Verifica que el campo `year` sea un número, no un string
- Ejecuta `npm run generate-index` de nuevo
