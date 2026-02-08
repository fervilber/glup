import { useState, useEffect } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}projects/index.json`);
                if (!response.ok) {
                    throw new Error('Error al cargar los proyectos');
                }
                const data = await response.json();
                setProjects(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, loading, error };
};

export default useProjects;
