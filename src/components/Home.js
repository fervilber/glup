export function Home() {
    return `
    <section class="bg-white dark:bg-gray-900 mt-20 min-h-[80vh] flex items-center relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-400/20 rounded-full blur-3xl opacity-30 dark:bg-brand-900/40 pointer-events-none -z-10 animate-pulse"></div>

        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 relative z-10">
            <span class="bg-brand-100 text-brand-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-brand-400 mb-8" data-animate="fade-up">
                <span class="w-2 h-2 me-1 bg-brand-500 rounded-full animate-ping"></span>
                Bienvenido a mi web de proyectos personales, Empezamos!!!
            </span>
            
            <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-7xl dark:text-white" data-animate="fade-up" data-delay="100">
                Construyendo el <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-red-600">Futuro Digital</span>
            </h1>
            
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400 max-w-3xl mx-auto" data-animate="fade-up" data-delay="200">
                Este es el punto de encuentro de mis ideas y proyectos, el enlace a cada uno de ellos. No espero nada de ti, solo comparto lo que hice por si es de utilidad. Si te gusta, si es útil alguno de ellos y quieres apoyarme, puedes hacerlo a través de las redes sociales.
            </p>
            
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4" data-animate="fade-up" data-delay="300">
                <a href="#/projects" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-brand-700 hover:bg-brand-800 focus:ring-4 focus:ring-brand-300 dark:focus:ring-brand-900 transition-transform hover:scale-105">
                    Ver Mis Proyectos
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="#/contact" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition-transform hover:scale-105">
                    Contactar
                </a>
            </div>

            <!-- Tech Stack Preview -->
            <div class="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800" data-animate="fade-up" data-delay="500">
                <p class="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">Herramientas</p>
                <div class="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <!-- Icons (using text/svg placeholders for simplicity) -->
                    <span class="text-2xl font-bold text-gray-400 hover:text-[#F7DF1E] transition-colors">Ilusión</span>
                    <span class="text-2xl font-bold text-gray-400 hover:text-[#38B2AC] transition-colors">Imaginación</span>
                    <span class="text-2xl font-bold text-gray-400 hover:text-[#646CFF] transition-colors">Locura</span>
                    <span class="text-2xl font-bold text-gray-400 hover:text-[#61DAFB] transition-colors">Fuerza y Voluntad</span>
                </div>
            </div>
        </div>
    </section>
  `;
}
