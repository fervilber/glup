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
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            colors: {
                // CENTRALIZACIÓN DE COLORES:
                // Cambia estos valores para cambiar el color global de la web.
                // Actualmente configurado en ROJO (antes azul).
                // PALETA TIPO OBSIDIAN / DARK MODERN
                brand: {
                    50: '#fff1f2',
                    100: '#ffe4e6',
                    200: '#fecdd3',
                    300: '#fda4af',
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#e11d48', // Color principal vibrante
                    700: '#be123c', // Para botones
                    800: '#9f1239', // Para hover
                    900: '#881337',
                    title: '#e11d48', // Color del encabezado
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
