/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    safelist: [
        'bg-project-1', 'bg-project-2', 'bg-project-3',
        'bg-project-4', 'bg-project-5', 'bg-project-6',
        'text-brand-700', 'text-brand-500', 'md:text-brand-700'
    ],
    theme: {
        extend: {
            colors: {
                // CENTRALIZACIÓN DE COLORES:
                // Cambia estos valores para cambiar el color global de la web.
                // Actualmente configurado en ROJO (antes azul).
                // PALETA TIPO OBSIDIAN / DARK MODERN
                brand: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155', // Slate oscurecido para botones
                    800: '#1e293b',
                    900: '#0f172a',
                    title: '#ad0646ff', // Blanco roto para cabecera en dark
                },
                // COLORES DE ACENTO PROFESIONALES (TIPO OBSIDIAN / NOTION)
                project: {
                    1: '#6366f1', // Indigo (Moderno)
                    2: '#8b5cf6', // Violet
                    3: '#ec4899', // Pink (Acento)
                    4: '#10b981', // Emerald (Para apps financieras)
                    5: '#f59e0b', // Amber (Para notas/corcho)
                    6: '#06b6d4', // Cyan
                },
                secondary: '#1e293b',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
