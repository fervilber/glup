---
title: "Digitalmen Web"
description: "Publicación automatizada del Segundo Cerebro de tecnología e IA a la web pública usando Quartz 5 y GitHub Actions."
year: 2026
tags: ["Quartz", "Obsidian", "IA", "GitHub Actions"]
image: "img/digitalmen_web.png"
url: "https://fervilber.github.io/digitalmen-web/"
---

# Digitalmen Web — El Segundo Cerebro Público

**Digitalmen Web** es una plataforma de publicación automatizada que sirve como puente de comunicación pública para un cerebro digital personal. Transpone una bóveda local de Obsidian especializada en tecnología e Inteligencia Artificial hacia una wiki web interactiva, de carga ultrarrápida y accesible para todo el mundo.

![Digitalmen Web Cover](img/digitalmen_web.png)

## El Concepto: De Notas Privadas a Conocimiento Público

El desafío de mantener un "segundo cerebro" es que la mayor parte del conocimiento valioso se queda atrapado en el ámbito local. **Digitalmen Web** resuelve esto implementando una canalización continua que filtra, procesa y publica selectivamente el grafo de conocimiento personal.

Para entender la arquitectura y cómo se organiza este flujo de trabajo, podemos usar una **analogía futbolística**:

*   **El Reglamento (Rules):** Son las reglas de filtrado y las directrices de los metadatos YAML. Definen qué notas son aptas para el "juego público" y cuáles permanecen en el "banquillo privado".
*   **Los Jugadores (Skills):** Son las notas individuales de conocimiento en Markdown. Cada una aporta una habilidad específica (conceptos de IA, tutoriales, esquemas) y se pasan el balón unas a otras a través de enlaces bidireccionales (wikilinks).
*   **La Dirección Técnica (Workflow):** Es el flujo de automatización con **GitHub Actions**. Coordina a los jugadores (notas) y aplica el reglamento (Quartz 5) para desplegar la estrategia en el terreno de juego (GitHub Pages).

<div class="w-full flex justify-center my-8">
    <a href="https://fervilber.github.io/digitalmen-web/" target="_blank" class="inline-flex items-center px-6 py-3 text-base font-medium text-center text-white bg-brand-700 rounded-2xl hover:bg-brand-800 transition-all hover:scale-105 shadow-lg">
        Visitar Digitalmen Web
        <svg class="w-5 h-5 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
    </a>
</div>

## Flujo de Trabajo y Automatización (CI/CD)

El sistema funciona de forma totalmente desatendida tras su configuración inicial:

1.  **Edición Local:** El conocimiento se gestiona y escribe de forma cotidiana dentro de Obsidian en local.
2.  **Sincronización Git:** Al realizar un commit y push en el repositorio privado del cerebro digital, se dispara un webhook en GitHub.
3.  **Pipeline de GitHub Actions:**
    *   Clona la bóveda privada.
    *   Filtra las notas basándose en criterios de publicación (anteponiendo etiquetas de publicación o carpetas específicas).
    *   Construye el sitio web usando el motor estático de **Quartz 5**.
    *   Publica el resultado en la rama de despliegue correspondiente de GitHub Pages.

## Características de la Plataforma

*   **Grafo de Conexiones Interactivo:** Visualización tridimensional en tiempo real del mapa de notas para entender cómo se relacionan los conceptos de IA y tecnología.
*   **Búsqueda Rápida de Texto Completo:** Indexación instantánea en el lado del cliente para encontrar cualquier término o nota al momento.
*   **Enlaces Bidireccionales:** Navegación asociativa directa entre notas relacionadas, facilitando el descubrimiento de contenido.
*   **Tema Adaptativo (Dark/Light):** Una interfaz limpia, minimalista y descansada, optimizada para largas sesiones de lectura y estudio.

## Tecnologías Utilizadas

*   **Quartz 5:** Generador de sitios estáticos ultrarrápido escrito en TypeScript y optimizado para la sintaxis de Obsidian.
*   **Obsidian:** Entorno local de edición de notas y desarrollo del pensamiento estructurado.
*   **GitHub Actions:** El motor de integración y despliegue continuo (CI/CD) para la automatización.
*   **Markdown + YAML:** Formatos estándar que garantizan que el conocimiento sea portátil y perdurable a largo plazo.
