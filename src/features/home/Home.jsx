import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container';

import useProjects from '../../hooks/useProjects';

const Home = () => {
    return (
        <div className="space-y-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <Container className="pt-12 pb-24 md:pt-24 md:pb-32">
                    <div className="relative z-10 text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300 text-xs font-semibold tracking-wide uppercase border border-brand-100 dark:border-brand-900/30"
                        >
                            <Zap size={14} className="fill-current" />
                            <span>Novedades en el Portafolio 2026</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
                        >
                            Construyendo el <span className="text-primary italic">Futuro</span> <br />
                            una línea a la vez.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium"
                        >
                            Soy F.VilBer, desarrollador y diseñador enfocado en crear experiencias web excepcionales, rápidas y minimalistas.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <Link
                                to="/projects"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-white font-semibold transition-all hover:bg-brand-700 hover:scale-105 active:scale-95 shadow-lg shadow-brand-500/25"
                            >
                                Ver Proyectos
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold transition-all hover:bg-slate-50 dark:hover:bg-slate-900"
                            >
                                Sobre mí
                            </Link>
                        </motion.div>
                    </div>

                    {/* Abstract Decorations */}
                    <div className="absolute top-0 -left-64 w-96 h-96 bg-brand-200/20 dark:bg-brand-900/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 -right-64 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10" />
                </Container>
            </section>

            {/* Skills / Features */}
            <section className="bg-slate-50 dark:bg-white/5 py-24 transition-colors">
                <Container>
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold">Lo que hago mejor</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
                            Combino diseño creativo con ingeniería sólida para resolver problemas complejos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-shadow group">
                            <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <Code size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Desarrollo Web</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Frontend moderno con React, Vite y Tailwind. Código limpio, optimizado y escalable.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-shadow group">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                                <Palette size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Diseño UI/UX</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Interfaces intuitivas y hermosas. Enfoque en la usabilidad y la identidad visual de marca.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-shadow group">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Optimización</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Rendimiento extremo, SEO y accesibilidad para asegurar que tu proyecto llegue a todos.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Featured Projects Section */}
            <section className="pb-24">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-display font-bold">Proyectos Destacados</h2>
                            <p className="text-slate-500 dark:text-slate-400 max-w-lg">
                                Una muestra de mis trabajos más recientes y representativos.
                            </p>
                        </div>
                        <Link
                            to="/projects"
                            className="group inline-flex items-center text-primary font-bold hover:underline"
                        >
                            Explorar todos
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FeaturedProjectPreview slug="FinFer" />
                        <FeaturedProjectPreview slug="Corcho" />
                    </div>
                </Container>
            </section>
        </div>
    );
};

// Sub-component for Home previews
const FeaturedProjectPreview = ({ slug }) => {
    const { projects } = useProjects();
    const project = projects.find(p => p.slug === slug);

    if (!project) return null;

    const imagePath = project.image.startsWith('http')
        ? project.image
        : `${import.meta.env.BASE_URL}${project.image}`;

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Link to={`/project/${slug}`} className="group relative block aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-zinc-900 border border-slate-100 dark:border-white/5 shadow-lg">
                <img
                    src={imagePath}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2 max-w-sm">{project.description}</p>
                </div>
            </Link>
        </motion.div>
    );
};

export default Home;
