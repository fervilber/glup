export async function Projects() {
    try {
        const response = await fetch('projects/index.json');
        const projects = await response.json();

        // Extract unique tags
        const allTags = ['Todos', ...new Set(projects.flatMap(p => p.tags))];

        // Wrap in a container to handle events
        const container = document.createElement('div');

        const renderProjects = (filterTag) => {
            const filtered = filterTag === 'Todos'
                ? projects
                : projects.filter(p => p.tags.includes(filterTag));

            const cardsHtml = filtered.map((project) => {
                // Find the original index of the project to assign a consistent color
                const originalIndex = projects.findIndex(p => p.slug === project.slug);
                const isPlaceholder = project.image.includes('placehold.co');
                const cardTitle = project.title;
                const colorIndex = (originalIndex % 6) + 1;
                const cardColorClass = `bg-project-${colorIndex}`;

                return `
        <div class="project-card max-w-sm bg-white border border-gray-100 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" data-tags='${JSON.stringify(project.tags)}'>
            <a href="#/project/${project.slug}" class="block group">
                <div class="h-48 ${cardColorClass} relative overflow-hidden flex items-center justify-center p-4 text-center">
                    <!-- Overlay sutil -->
                    <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    ${!isPlaceholder ? `
                        <img class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 transition-transform duration-500 group-hover:scale-110" src="${project.image}" alt="${project.title}" />
                    ` : ''}
                    
                    <span class="relative z-10 text-white font-black text-2xl uppercase tracking-tighter leading-none drop-shadow-md transition-transform duration-300 group-hover:scale-105">
                        ${cardTitle}
                    </span>
                </div>
            </a>
            <div class="p-6">
                <a href="#/project/${project.slug}">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-brand-600 transition-colors">${project.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  ${project.tags.map(tag => `<span class="bg-brand-100 text-brand-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-brand-900 dark:text-brand-300">${tag}</span>`).join('')}
                </div>
                <a href="#/project/${project.slug}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-brand-700 rounded-lg hover:bg-brand-800 focus:ring-4 focus:outline-none focus:ring-brand-300 dark:bg-brand-600 dark:hover:bg-brand-700 dark:focus:ring-brand-800 transition-colors">
                    Ver Detalles
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    `;
            }).join('');

            return cardsHtml;
        };

        const filterButtons = allTags.map(tag => `
        <button type="button" class="filter-btn px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-full hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-brand-700 focus:text-brand-700 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-brand-500 dark:focus:text-white mb-2 mr-2 ${tag === 'Todos' ? 'ring-2 ring-brand-700 text-brand-700' : ''}" data-tag="${tag}">
            ${tag}
        </button>
    `).join('');

        container.innerHTML = `
      <section class="bg-gray-50 dark:bg-gray-900 mt-20 min-h-screen">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">Mis Proyectos</h2>
            <p class="text-center text-gray-500 mb-8 dark:text-gray-400">Explora mis trabajos por categoría</p>
            
            <div class="flex flex-wrap justify-center mb-10" id="project-filters">
                ${filterButtons}
            </div>

            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" id="projects-grid">
                ${renderProjects('Todos')}
            </div>
        </div>
      </section>
    `;

        // Add event listeners (Wait for DOM insertion manually or return element? 
        // Since router expects string or promise returning string, we have to return string. 
        // BUT we need interactivity. 
        // Solution: We will attach a global event listener or a dedicated init function. 
        // For simplicity in this structure: using event delegation on document body in main.js is safer for re-renders, 
        // OR we return a string and rely on a 'post-render' hook.
        // Let's modify main.js to handle post-render Logic? No, let's use a self-contained init pattern if possible.
        // Actually, simpler: return string, and use a unique ID to attach listener in a setTimeout.

        // Aumentamos el tiempo de espera para asegurar que el HTML se ha inyectado 
        // en el DOM principal antes de buscar los botones.
        setTimeout(() => {
            const filters = document.querySelectorAll('.filter-btn');
            const grid = document.getElementById('projects-grid');

            if (!grid || filters.length === 0) return;

            filters.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const tag = e.target.dataset.tag;

                    // Update active state
                    filters.forEach(b => b.classList.remove('ring-2', 'ring-brand-700', 'text-brand-700'));
                    e.target.classList.add('ring-2', 'ring-brand-700', 'text-brand-700');

                    // Animate out
                    grid.style.opacity = '0';

                    setTimeout(() => {
                        grid.innerHTML = renderProjects(tag);
                        grid.style.opacity = '1';
                    }, 200);
                });
            });
        }, 300);

        return container.innerHTML;

    } catch (error) {
        return `<div class="mt-24 text-center text-red-500">Error cargando proyectos: ${error.message}</div>`;
    }
}
