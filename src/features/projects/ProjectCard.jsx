import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
    // Ensure we have a valid image path. Handle local vs external URLs
    const imagePath = project.image.startsWith('http')
        ? project.image
        : `${import.meta.env.BASE_URL}${project.image}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={imagePath}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Link Badge */}
                <div className="absolute top-4 right-4">
                    <div className="p-3 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl text-primary shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ExternalLink size={18} />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-grow p-8 space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                </p>
            </div>

            <div className="px-8 pb-8">
                <Link
                    to={`/project/${project.slug}`}
                    className="inline-flex items-center text-sm font-bold text-slate-900 dark:text-white group/btn"
                >
                    Explorar
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
