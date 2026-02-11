import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { ProjectProvider } from './context/ProjectContext';

// Core pages (now eager loaded for instant response)
import Home from './features/home/Home';
import Projects from './features/projects/Projects';

// Remaining pages lazy loaded
const ProjectDetail = lazy(() => import('./features/projects/ProjectDetail'));
const About = lazy(() => import('./features/content/About'));
const Contact = lazy(() => import('./features/content/Contact'));
const NotFound = lazy(() => import('./features/content/NotFound'));

function App() {
    return (
        <ProjectProvider>
            <RootLayout>
                <Suspense fallback={
                    <div className="flex items-center justify-center min-h-[60vh]">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                }>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/project/:slug" element={<ProjectDetail />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </RootLayout>
        </ProjectProvider>
    );
}

export default App;

