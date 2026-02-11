import React, { createContext, useContext, useState, useEffect } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Determine the correct path for the projects index
                const baseUrl = import.meta.env.BASE_URL || '/';
                // Add cache-busting parameter to ensure fresh data
                const timestamp = new Date().getTime();
                const response = await fetch(`${baseUrl}projects/index.json?v=${timestamp}`);

                if (!response.ok) {
                    throw new Error('Error al cargar la base de datos de proyectos');
                }

                const data = await response.json();
                console.log('Proyectos cargados:', data); // Debug log
                setProjects(data);
                setLoading(false);
            } catch (err) {
                console.error('Project Fetch Error:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <ProjectContext.Provider value={{ projects, loading, error }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjectContext = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error('useProjectContext debe usarse dentro de un ProjectProvider');
    }
    return context;
};
