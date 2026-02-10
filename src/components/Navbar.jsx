import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Container from './ui/Container';

const Navbar = ({ isDark, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Proyectos', path: '/projects' },
        { name: 'Sobre mí', path: '/about' },
        { name: 'Contacto', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <Container>
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                            F
                        </div>
                        <span className="text-xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                            F.VilBer <span className="text-primary">Portfolio</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-all hover:text-primary px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 ${isActive ? 'text-primary bg-slate-100 dark:bg-white/5' : 'text-slate-600 dark:text-slate-400'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Drawer */}
            <div
                className={`md:hidden fixed inset-x-0 top-16 bg-surface dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 py-4' : 'max-h-0'
                    }`}
            >
                <Container>
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `text-base font-medium px-4 py-2 rounded-lg transition-colors ${isActive
                                        ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300'
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </Container>
            </div>
        </nav>
    );
};

export default Navbar;
