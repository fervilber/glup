import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from './ui/Container';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <Container className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                            F.VilBer <span className="text-primary">Portfolio</span>
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xs text-sm">
                            Diseñando y construyendo experiencias digitales excepcionales desde 2019.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                            Navegación
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                            <li><Link to="/projects" className="hover:text-primary transition-colors">Proyectos</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">Sobre mí</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                            Connectar
                        </h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/fervilber" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all">
                                <Github size={20} />
                            </a>
                            <a href="mailto:contactovilber@pm.me"
                                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all">
                                <Mail size={20} />
                            </a>
                            <a href="linkedin.com/in/fervilber" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <p>© 2026 F.VilBer Portfolio. Todos los derechos reservados.</p>
                    <p>Creado por F.VilBer con ❤️ y React.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
