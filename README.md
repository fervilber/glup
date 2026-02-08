# Mi Cartera de Proyectos (Glup Portfolio)

Un portafolio web personal moderno, rápido y totalmente responsivo diseñado para mostrar proyectos de desarrollo, diseñado por **F.VilBer**.

Este proyecto es una Single Page Application (SPA) construida con **Vanilla JavaScript** y **Vite**, utilizando **Tailwind CSS** para un diseño visualmente impactante y profesional.

## ✨ Características Clave

- **⚡ Rendimiento Ultra-rápido**: Construido sobre Vite para tiempos de carga instantáneos.
- **🎨 Diseño Moderno y Responsivo**: Adaptable a cualquier dispositivo, con una interfaz limpia y profesional.
- **🌙 Modo Oscuro/Claro**: Soporte nativo para cambio de tema, persistente y respetuoso con la preferencia del sistema.
- **🔄 Enrutamiento SPA**: Navegación fluida sin recargas de página mediante hash routing (`/#/projects`).
- **动态 Gestión de Contenido**: Los proyectos se cargan dinámicamente desde un archivo JSON, facilitando la actualización sin tocar el código.
- **📱 Menú Móvil**: Navegación optimizada para dispositivos táctiles.
- **✨ Micro-interacciones**: Animaciones suaves al hacer scroll y transiciones de página.

## 🛠️ Stack Tecnológico

- **Core**: Vanilla JavaScript (ES Modules)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía**: SVG y Google Fonts imports.
- **Tipografía**: Inter y Outfit (Google Fonts).
- **Markdown**: `marked` para renderizar contenido de texto enriquecido.

## 📋 Prerrequisitos

Para ejecutar este proyecto localmente, necesitas tener instalado:

- [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
- [npm](https://www.npmjs.com/) (Generalmente incluido con Node.js)

## 🚀 Comenzando

Sigue estos pasos para configurar el proyecto en tu máquina local:

### 1. Clonar el Repositorio

```bash
git clone https://github.com/fervilber/glup.git
cd glup
```

### 2. Instalar Dependencias

Instala las bibliotecas necesarias listadas en `package.json`:

```bash
npm install
```

### 3. Modo Desarrollo

Inicia el servidor de desarrollo local con recarga en caliente (HMR):

```bash
npm run dev
```

Abre tu navegador en la URL que se muestra (generalmente `http://localhost:5173/glup/`).

### 4. Construcción para Producción

Genera los archivos optimizados para despliegue en la carpeta `dist`:

```bash
npm run build
```

Para previsualizar la versión de producción localmente:

```bash
npm run preview
```

## 🏗️ Arquitectura del Proyecto

La aplicación sigue una arquitectura modular basada en componentes funcionales de JavaScript.

### Estructura de Directorios

```
├── public/
│   ├── projects/       # Datos e imágenes de los proyectos
│   │   └── index.json  # "Base de datos" de proyectos
│   └── vite.svg        # Assets públicos
├── src/
│   ├── components/     # Componentes de UI (Navbar, Home, etc.)
│   ├── utils/          # Utilidades (animaciones, helpers)
│   ├── main.js         # Punto de entrada y Router
│   └── style.css       # Estilos globales y directivas Tailwind
├── index.html          # HTML Entry Point
├── package.json        # Dependencias y scripts
├── tailwind.config.js  # Configuración de diseño y temas
└── vite.config.js      # Configuración del bundler
```

### Flujo de Datos

1. **Entrada**: `main.js` inicializa el router y estructura el layout principal (`Navbar`, `Main`, `Footer`).
2. **Enrutamiento**: El router escucha cambios en el hash de la URL (`window.location.hash`) y renderiza el componente correspondiente en `<main id="main-content">`.
3. **Carga de Datos**:
   - El componente `Projects` y `ProjectDetail` hacen fetch a `/projects/index.json`.
   - Se renderizan las tarjetas o detalles basados en estos datos.

### Configuración de Estilos (`tailwind.config.js`)

El proyecto utiliza una paleta de colores personalizada centralizada en la configuración de Tailwind:

- **Brand**: Tonos rojizos/rosados (`#e11d48`) como color primario.
- **Proyectos**: Una paleta específica para categorizar visualmente los tipos de proyectos.

## 💾 Gestión de Contenido

Para añadir un nuevo proyecto, no es necesario modificar el código fuente. Simplemente edita el archivo `public/projects/index.json`:

```json
{
    "slug": "nombre-del-proyecto",
    "title": "Título del Proyecto",
    "description": "Breve descripción...",
    "tags": ["Tag1", "Tag2"],
    "image": "img/nombre-imagen.png"
}
```

Asegúrate de añadir la imagen correspondiente en la carpeta `public/img/` (o la ruta que definas).

## 🌍 Despliegue

El proyecto está configurado para ser desplegado en un subdirectorio (por ejemplo, GitHub Pages), debido a la configuración `base: '/glup/'` en `vite.config.js`.

Si deseas desplegarlo en la raíz de un dominio (ej. `midominio.com`), edita `vite.config.js` y cambia `base` a `'/'`.

---

© 2026 Glup Company. Todos los derechos reservados.
