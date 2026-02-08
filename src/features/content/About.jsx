import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../components/ui/Container';

const About = () => {
    return (
        <Container className="max-w-4xl py-12 md:py-24 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight">
                        Hola, soy <span className="text-primary italic">F.VilBer</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        Entusiasta de la tecnología, analista de datos y creador de soluciones digitales desde hace más de una década.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Mi pasión es transformar ideas complejas en interfaces sencillas y funcionales. Me especializo en el ecosistema JavaScript moderno, visualización de datos con R y diseño de sistemas modulares.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-square rounded-[3rem] bg-brand-50 dark:bg-brand-900/10 flex items-center justify-center p-8 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/10 blur-2xl" />
                    <div className="relative text-8xl font-display font-black text-brand-200 dark:text-brand-900/30 select-none">
                        FV
                    </div>
                    {/* Mockup for profile image */}
                    <div className="absolute inset-12 border-2 border-dashed border-primary/30 rounded-[2rem]" />
                </motion.div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none pt-12 border-t border-slate-200 dark:border-slate-800">
                <h2>Mi Trayectoria</h2>
                <p>
                    Durante los últimos años he colaborado en proyectos que abarcan desde el desarrollo de blogs técnicos con **Hugo** hasta la implementación de complejos dashboards corporativos con **React** y **Supabase**.
                </p>
                <p>
                    Si buscas a alguien que cuide tanto el rendimiento bajo el capó como la estética visual, estás en el lugar correcto.
                </p>
            </div>
        </Container>
    );
};

export default About;
