import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundArt from '../components/BackgroundArt';
import ScrollToTop from '../components/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useScroll, useSpring } from 'framer-motion';

const RootLayout = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Lazy initialization of state
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('color-theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const location = useLocation();

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return (
        <div className="flex flex-col min-h-screen selection:bg-brand-100 selection:text-brand-900 dark:selection:bg-brand-900/30 dark:selection:text-brand-200">
            {/* Utility to ensure top scroll on navigation */}
            <ScrollToTop />

            {/* Algorithmic Background - Memoized inside its own component */}
            <BackgroundArt />

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
                style={{ scaleX }}
            />

            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <main className="flex-grow pt-24 pb-12">
                {/* mode="wait" asegura que el contenido anterior se desmonte antes de montar el nuevo,
                    evitando problemas de superposición. Transiciones ultra-rápidas (100ms) para mantener sensación de rapidez */}
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
};


export default RootLayout;
