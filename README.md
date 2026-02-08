# Mi Cartera de Proyectos (Glup Portfolio)

Un portafolio web personal moderno, rápido y totalmente responsivo diseñado para mostrar proyectos de desarrollo, diseñado por **F.VilBer**.

Este proyecto es una aplicación de alto nivel construida con **React 18**, **Vite** y **Tailwind CSS v4**, enfocada en una estética "Editorial Minimalist" con interacciones fluidas mediante **Framer Motion**.

## ✨ Características Clave

- **⚛️ Arquitectura React Moderna**: Componentes modulares, hooks personalizados y carga diferida (lazy loading).
- **🎨 Tailwind CSS v4**: Configuración nativa basada en CSS para un sistema de diseño más rápido y potente.
- **✨ Animaciones de Alta Calidad**: Transiciones de página y micro-interacciones suaves con Framer Motion.
- **🌙 Tema Dinámico Moderno**: Soporte de modo oscuro/claro con persistencia y detección automática del sistema.
- **🔄 Enrutamiento Declarativo**: Navegación fluida y robusta con React Router v6.
- **📂 Gestión de Datos Desacoplada**: Proyectos cargados dinámicamente desde un archivo JSON externo.
- **📱 Mobile-First**: Optimización total para dispositivos móviles con menús interactivos.

## 🛠️ Stack Tecnológico

- **Core**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Tipografía**: Inter (Cuerpo) y Outfit (Títulos) via Google Fonts.
- **Markup**: `marked` para procesamiento de descripciones en Markdown.

## 📋 Prerrequisitos

Para ejecutar este proyecto localmente, necesitas tener instalado:

- [Node.js](https://nodejs.org/) (Versión 20 o superior recomendada)
- [npm](https://www.npmjs.com/)

## 🚀 Comenzando

Sigue estos pasos para configurar el proyecto en tu máquina local:

### 1. Clonar el Repositorio

```bash
git clone https://github.com/fervilber/glup.git
cd glup
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Modo Desarrollo

Inicia el servidor de desarrollo local:

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173/glup/`.

### 4. Construcción para Producción

Genera los archivos optimizados en la carpeta `dist`:

```bash
npm run build
```

## 🏗️ Arquitectura del Proyecto

```
├── public/
│   ├── projects/       # Archivo JSON de datos y assets de proyectos
│   │   └── index.json  # Fuente de verdad de los contenidos
├── src/
│   ├── components/     # Componentes compartidos (Navbar, Footer, UI)
│   ├── features/       # Módulos de la aplicación
│   │   ├── home/       # Componentes de la página de inicio
│   │   ├── projects/   # Listado y detalle de proyectos
│   │   └── content/    # páginas estáticas (About, Contact, 404)
│   ├── hooks/          # Hooks personalizados (fetch de datos)
│   ├── layouts/        # Layout principal con transiciones
│   ├── App.jsx         # Configuración de rutas
│   ├── main.jsx        # Punto de entrada de React
│   └── index.css       # Configuración global de Tailwind v4
└── vite.config.js      # Configuración del bundler y plugins
```

## 💾 Gestión de Contenido

Para añadir un nuevo proyecto, edita el archivo `public/projects/index.json`. No es necesario recompilar la aplicación para que los cambios se reflejen si se sirven desde un servidor estático.

```json
{
    "slug": "nombre-del-proyecto",
    "title": "Título del Proyecto",
    "description": "Breve descripción en **markdown**...",
    "tags": ["React", "2026", "Design"],
    "image": "img/nombre-imagen.png"
}
```

## 🌍 Despliegue

El proyecto utiliza `base: '/glup/'`. Si despliegas en la raíz de un dominio, recuerda actualizar este valor en `vite.config.js`.

---

© 2026 Glup Company. Todos los derechos reservados.
