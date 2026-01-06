import { marked } from 'marked';

export async function ProjectDetail(slug) {
  try {
    const response = await fetch(`projects/${slug}.md`);
    if (!response.ok) throw new Error('Project not found');
    const text = await response.text();
    const html = marked.parse(text);

    return `
      <section class="bg-white dark:bg-gray-900 mt-20 min-h-screen relative overflow-hidden">
        <!-- Decoration -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-400/20 rounded-full blur-3xl opacity-30 dark:bg-brand-900/40 pointer-events-none -z-10 animate-pulse"></div>
        
        <div class="mt-12 max-w-screen-lg mx-auto p-8 relative z-10">
          <div class="p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <a href="#/projects" class="inline-flex items-center mb-6 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors">
               ← Volver a proyectos
            </a>
            <article class="prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-brand-600 mx-auto">
                ${html}
            </article>
          </div>
        </div>
      </section>
    `;
  } catch (error) {
    return `<div class="mt-24 text-center text-red-500">Error cargando el proyecto "${slug}"</div>`;
  }
}
