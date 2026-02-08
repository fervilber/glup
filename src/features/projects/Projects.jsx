import React from 'react';
import { motion } from 'framer-motion';
import useProjects from '../../hooks/useProjects';
import Container from '../../components/ui/Container';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { projects, loading, error } = useProjects();

    if (loading) return (
        <Container className="py-24 text-center">
            <div className="animate-pulse space-y-8">
                <div className="h-12 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg mx-auto" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-80 bg-slate-200 dark:bg-slate-800 rounded-3xl" />)}
                </div>
            </div>
        </Container>
    );

    if (error) return (
        <Container className="py-24 text-center text-red-500">
            Error: {error}
        </Container>
    );

    return (
        <Container className="space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">
                    Nuestros <span className="text-primary italic">Proyectos</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Una selección de trabajos desarrollados en diversas tecnologías, desde blogs hasta aplicaciones financieras complejas.
                </p>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24"
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        index={index}
                    />
                ))}
            </motion.div>
        </Container>
    );
};

export default Projects;
