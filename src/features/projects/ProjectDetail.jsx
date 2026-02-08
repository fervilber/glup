import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
import { marked } from 'marked';
import useProjects from '../../hooks/useProjects';
import Container from '../../components/ui/Container';

const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { projects, loading } = useProjects();
    const [project, setProject] = useState(null);
    const [contentMarkdown, setContentMarkdown] = useState('');

    useEffect(() => {
        if (!loading && projects.length > 0) {
            const found = projects.find(p => p.slug === slug);
            if (found) {
                setProject(found);
                // Fetch full markdown content
                fetch(`${import.meta.env.BASE_URL}projects/${slug}.md`)
                    .then(res => res.text())
                    .then(text => setContentMarkdown(text))
                    .catch(() => setContentMarkdown(''));
            } else {
                navigate('/404');
            }
        }
    }, [slug, projects, loading, navigate]);

    if (loading || !project) return (
        <Container className="py-24 text-center">
            <div className="animate-pulse space-y-8 max-w-4xl mx-auto">
                <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-3xl" />
                <div className="h-12 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-lg" />
                <div className="h-32 bg-slate-200 dark:bg-slate-800 rounded-lg" />
            </div>
        </Container>
    );

    const imagePath = project.image.startsWith('http')
        ? project.image
        : `${import.meta.env.BASE_URL}${project.image}`;

    return (
        <Container className="max-w-4xl pb-24">
            {/* Back Button */}
            <Link
                to="/projects"
                className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-primary transition-colors mb-8 group"
            >
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Regresar a Proyectos
            </Link>

            <div className="space-y-12">
                {/* Header */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight">
                        {project.title}
                    </h1>

                    <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{project.tags.find(t => !isNaN(t)) || '2026'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag size={16} />
                            <div className="flex gap-2">
                                {project.tags.filter(t => isNaN(t)).map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700" />
                    <img
                        src={imagePath}
                        alt={project.title}
                        className="w-full rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-white/5"
                    />
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Main Info */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="prose prose-slate dark:prose-invert max-w-none prose-img:rounded-3xl prose-img:shadow-lg prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: marked.parse(
                                        (contentMarkdown || project.description)
                                            .replace(/!\[(.*?)\]\((img\/.*?)\)/g, `![$1](${import.meta.env.BASE_URL}$2)`)
                                    )
                                }}
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-6">
                            <h3 className="text-lg font-bold">Detalles</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Tecnologías</label>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-white dark:bg-zinc-800 rounded text-xs border border-slate-200 dark:border-slate-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href="#"
                                    className="flex items-center justify-center w-full h-12 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold gap-2 hover:scale-[1.02] active:scale-95 transition-all"
                                >
                                    Visitar Website
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProjectDetail;
