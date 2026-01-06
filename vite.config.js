import { defineConfig } from 'vite';

export default defineConfig({
    base: '/glup/',
    build: {
        target: 'esnext',
        outDir: 'dist',
    }
});
