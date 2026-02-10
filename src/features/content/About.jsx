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
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Hola, soy <span className="text-primary italic">F.VilBer</span>
                    </h1>
                    <p className="text-lg text-slate-900 dark:text-slate-100 leading-relaxed font-semibold">
                        Ingeniero de Caminos, entusiasta de la tecnología, analista de datos y creador de soluciones digitales desde hace ya muchos años.
                    </p>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                        Mi pasión es crear, luchar contra la entropía del universo, transformar ideas complejas en utilidades, y como buen ingeniero participar en lo público para mejorar nuestras vidas, ahora aprovechando la potencia y superpoderes de la <span className="text-primary italic">IA</span>  .</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}img/perfil.jpg`}
                        alt="Foto de F.VilBer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none pt-12 border-t border-slate-200 dark:border-slate-800">
                <h2>Mi Trayectoria</h2>
                <p>
                    En los últimos años, aunque sigo vinculado con la ingeniería civil, mi foco ha cambiado de intereses rotando hacia el desarrollo de proyectos de inversión y software aprovechando la transformación social y los superpoderes de la  <span className="text-primary italic">Inteligencia Artificial</span>.
                    He realizado numerosos proyectos, desde el desarrollo de blogs técnicos con <span className="text-primary italic">Hugo</span> hasta la implementación de complejos dashboards financieros con <span className="text-primary italic">React</span> y <span className="text-primary italic">Supabase</span>.
                </p>
                <p>
                    Si buscas a alguien que se enfoca el soluciones prácticas, usabilidad y que cuide tanto el rendimiento como la estética visual, estás en el lugar correcto.
                    Si te gusta el arte, el humanismo, la inversión, la programación y la tecnología, podemos conectar.
                </p>
            </div>
        </Container>
    );
};

export default About;
