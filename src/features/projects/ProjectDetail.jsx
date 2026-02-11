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

    // Function to remove YAML frontmatter and first H1 from markdown
    const stripFrontmatter = (markdown) => {
        // Remove YAML frontmatter
        let cleaned = markdown.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
        // Remove first H1 heading (since we show title in the header)
        cleaned = cleaned.replace(/^#\s+.*?\n/, '');
        return cleaned.trim();
    };

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
        <Container className="max-w-6xl pb-24">
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
                <div className="space-y-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                        {project.title}
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Main Content (Image + Markdown) */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Featured Image */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700" />
                            <img
                                src={imagePath}
                                alt={project.title}
                                className="w-full rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-white/5"
                            />
                        </div>

                        {/* Detailed Content */}
                        <div className="prose prose-slate dark:prose-invert max-w-none prose-img:rounded-3xl prose-img:shadow-lg prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: marked.parse(
                                        stripFrontmatter(contentMarkdown || "")
                                            .replace(/!\[(.*?)\]\((img\/.*?)\)/g, `![$1](${import.meta.env.BASE_URL}$2)`)
                                    )
                                }}
                            />
                        </div>
                    </div>

                    {/* Sidebar (Sticky on desktop) */}
                    <aside className="space-y-8 lg:sticky lg:top-32">
                        <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-8 shadow-sm">
                            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">Detalles del Proyecto</h3>

                            <div className="space-y-6">
                                {/* Metadata Items */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                        <Calendar size={18} className="text-primary" />
                                        <span className="text-sm font-medium">Año: {project.year || 'N/A'}</span>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                            <Tag size={18} className="text-primary" />
                                            <span className="text-sm font-medium">Etiquetas:</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <Link
                                                    key={tag}
                                                    to={`/projects?tag=${tag}`}
                                                    className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all shadow-sm"
                                                >
                                                    {tag}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                {project.url && (
                                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-full h-14 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-900/10 dark:shadow-none"
                                        >
                                            Ver Proyecto
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Additional Info Box (Optional) */}
                        <div className="px-8 py-6 rounded-3xl bg-primary/5 border border-primary/10 text-sm text-slate-600 dark:text-slate-400">
                            <p className="italic">
                                "Este proyecto refleja mi compromiso con la calidad visual y la funcionalidad técnica."
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </Container>
    );
};

export default ProjectDetail;
