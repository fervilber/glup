# LLM Wiki — Segundo Cerebro Inteligente

**LLM Wiki** es un sistema de gestión del conocimiento personal (PKB) diseñado para ser mantenido y enriquecido de forma autónoma por un agente de inteligencia artificial. A diferencia de las bases de datos convencionales, este sistema organiza la información en un grafo de notas interconectadas que "crece" con el tiempo.

![LLM Wiki Repository](img/llm_wiki.png)

## El Concepto: Un Cerebro Digital que "Aprende"

La mayoría de los sistemas RAG (Retrieval-Augmented Generation) son estáticos: consultas un documento y obtienes una respuesta. **LLM Wiki** va un paso más allá. Es un ecosistema donde la IA no solo lee la información, sino que la **procesa, destila y clasifica** en una red de archivos Markdown.

Para entenderlo mejor, podemos usar esta analogía técnica:
*   **Obsidian** es nuestro **IDE** (donde visualizamos y editamos el conocimiento).
*   **El Agente de IA** es el **Programador** (que ingiere fuentes y escribe las notas).
*   **La Wiki** es el **Código Fuente** (el conocimiento estructurado y persistente).

## Estructura del Sistema

El proyecto se basa en un flujo de trabajo disciplinado que garantiza la integridad del conocimiento:

1.  **Directorio `raw/`**: Almacén de fuentes originales inmutables (PDFs de informes anuales, transcripciones de YouTube, artículos técnicos).
2.  **Directorio `wiki/`**: El núcleo del conocimiento. Notas en Markdown con metadatos YAML que permiten realizar consultas complejas y visualizaciones de grafos.
3.  **Habilidades del Agente (`.agents/`)**: Definición de flujos de trabajo autónomos para la ingesta de datos, síntesis de conceptos y detección de conexiones entre temas aparentemente inconexos.

<div class="w-full h-[200px] md:h-[500px] my-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 transition-transform hover:scale-[1.01]">
    <iframe
        class="w-full h-full"
        src="https://www.youtube.com/embed/ZRddDLqTXq0"
        title="LLM Wiki Demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
    </iframe>
</div>

## Características Principales

*   **Ingesta Multi-fuente:** Scripts especializados para procesar videos de YouTube, PDFs financieros y artículos web de forma automática.
*   **Sintetización Activa:** El agente no copia y pega; extrae "perlas metodológicas", tesis de inversión y conceptos técnicos para crear una base de conocimiento curada.
*   **Interconexión Automática:** Generación de enlaces internos (wikilinks) que permiten navegar por el conocimiento de forma asociativa, tal como funciona el cerebro humano.
*   **Control de Versiones:** Al ser una estructura basada en archivos planos (Markdown), todo el conocimiento es gestionado mediante Git, permitiendo un histórico detallado de la evolución de las ideas.

## Tecnologías Utilizadas

*   **Python:** El motor del agente y de todos los scripts de procesamiento y automatización.
*   **Obsidian:** La interfaz de visualización y gestión del grafo de conocimiento.
*   **LLMs (Gemini/OpenAI):** El "cerebro" encargado de la comprensión y síntesis de la información.
*   **Markdown + YAML:** Estándares abiertos para garantizar la portabilidad y longevidad de los datos.
