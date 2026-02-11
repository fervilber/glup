import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Usar requestAnimationFrame para asegurar que el scroll ocurra
        // después de que el navegador haya pintado el nuevo contenido
        requestAnimationFrame(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant' // Scroll instantáneo, sin animación
            });
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
