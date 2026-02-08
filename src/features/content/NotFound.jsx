import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Container from '../../components/ui/Container';

const NotFound = () => {
    return (
        <Container className="py-24 text-center space-y-8">
            <h1 className="text-9xl font-display font-black text-brand-100 dark:text-brand-900/10">404</h1>
            <div className="space-y-4">
                <h2 className="text-3xl font-bold">Página no encontrada</h2>
                <p className="text-slate-500 max-w-md mx-auto">
                    Parece que lo que buscas se ha perdido en el ciberespacio. Volvamos a puerto seguro.
                </p>
            </div>
            <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform"
            >
                <Home size={18} />
                Volver al Inicio
            </Link>
        </Container>
    );
};

export default NotFound;
