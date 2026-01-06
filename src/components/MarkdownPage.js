import { marked } from 'marked';

export async function MarkdownPage(pageName) {
    try {
        const response = await fetch(`pages/${pageName}.md`);
        if (!response.ok) throw new Error('Page not found');
        const text = await response.text();
        const html = marked.parse(text);

        return `
      <section class="bg-white dark:bg-gray-900 mt-20 min-h-[60vh] relative overflow-hidden">
        <!-- Decoration -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-400/20 rounded-full blur-3xl opacity-30 dark:bg-brand-900/40 pointer-events-none -z-10 animate-pulse"></div>
        
        <div class="py-16 px-4 mx-auto max-w-screen-md relative z-10">
            <div class="p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div class="prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-brand-600 prose-li:marker:text-brand-500 mx-auto">
                    ${html}
                </div>
            </div>
        </div>
      </section>
    `;
    } catch (error) {
        return `<div class="mt-24 text-center text-red-500">Error cargando la página "${pageName}": ${error.message}</div>`;
    }
}
