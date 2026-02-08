import { marked } from 'marked';

export async function ProjectDetail(slug) {
  try {
    const response = await fetch(`projects/${slug}.md`);
    if (!response.ok) throw new Error('Project not found');
    const text = await response.text();

    // Fetch all projects to handle navigation
    const projectsResponse = await fetch('projects/index.json');
    const projects = await projectsResponse.json();
    const currentIndex = projects.findIndex(p => p.slug === slug);
    const prevProject = projects[currentIndex - 1];
    const nextProject = projects[currentIndex + 1];

    // Custom renderer to handle links and icons
    const renderer = new marked.Renderer();

    renderer.link = (href, title, text) => {
      const isExternal = href.startsWith('http');
      return `<a href="${href}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} title="${title || ''}">${text}</a>`;
    };

    renderer.image = (href, title, text) => {
      const isIcon = href.includes('icons8') || (text && text.toLowerCase().includes('icon'));
      if (isIcon) {
        return `<img src="${href}" alt="${text || ''}" title="${title || ''}" class="inline-block w-6 h-6 m-0 align-middle" />`;
      }
      return `<img src="${href}" alt="${text || ''}" title="${title || ''}" class="rounded-xl shadow-lg my-8" />`;
    };

    const html = marked.parse(text, { renderer });

    const navButtons = `
      <div class="flex items-center space-x-2">
        ${prevProject ? `
          <a href="#/project/${prevProject.slug}" class="p-2 text-gray-500 hover:text-brand-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all" title="Anterior: ${prevProject.title}">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          </a>
        ` : `
          <div class="p-2 text-gray-300 dark:text-gray-600 cursor-not-allowed">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          </div>
        `}
        ${nextProject ? `
          <a href="#/project/${nextProject.slug}" class="p-2 text-gray-500 hover:text-brand-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all" title="Siguiente: ${nextProject.title}">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        ` : `
          <div class="p-2 text-gray-300 dark:text-gray-600 cursor-not-allowed">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </div>
        `}
      </div>
    `;

    return `
      <section class="bg-white dark:bg-gray-900 mt-20 min-h-screen relative overflow-hidden">
        <!-- Decoration -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-400/20 rounded-full blur-3xl opacity-30 dark:bg-brand-900/40 pointer-events-none -z-10 animate-pulse"></div>
        
        <div class="mt-12 max-w-screen-lg mx-auto p-8 relative z-10">
          <div class="p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
            <div class="flex items-center justify-between mb-6">
              <a href="#/projects" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors">
                ← Volver a proyectos
              </a>
              ${navButtons}
            </div>
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
