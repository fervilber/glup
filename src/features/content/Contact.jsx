import React, { useEffect } from 'react';
import { Mail, Github, MapPin, Coffee } from 'lucide-react';
import Container from '../../components/ui/Container';

const Contact = () => {
    useEffect(() => {
        // Load the donation widget script
        const script = document.createElement('script');
        script.src = "https://embed.twentyuno.net/js/app.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up script on unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Container className="max-w-4xl py-12 md:py-24 space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                    ¿Quieres apoyar mi <span className="text-primary italic">Trabajo</span>?
                </h1>
                <p className="text-lg text-slate-800 dark:text-slate-200">
                    Si te gusta lo que hago, puedes invitarme a un café virtual. ¡Cada gran idea empieza con uno!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-8">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Información de Contacto</h2>

                        <div className="space-y-6">
                            <a href="mailto:contactovilber@pm.me" className="group flex items-center gap-4 transition-colors">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                                    <p className="font-medium">contactovilber@pm.me</p>
                                </div>
                            </a>

                            <a href="https://github.com/fervilber" target="_blank" rel="noreferrer" className="group flex items-center gap-4 transition-colors">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Github size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">GitHub</p>
                                    <p className="font-medium">github.com/fervilber</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ubicación</p>
                                    <p className="font-medium">Murcia, España</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Donation Widget card */}
                <div className="p-8 rounded-3xl bg-primary text-white flex flex-col items-center justify-center space-y-6 shadow-2xl relative overflow-hidden group shadow-brand-500/20">
                    {/* Abstract background decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 w-full text-center space-y-4">
                        <div className="inline-flex p-3 rounded-2xl bg-white/10 text-amber-400 mb-2">
                            <Coffee size={24} />
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm min-h-[350px] flex items-center justify-center">
                            {/* Lightning widget custom element */}
                            <lightning-widget
                                name="Invítame a un café"
                                accent="#410719ff"
                                to="datrebil@coinos.io"
                                image="https://gritos.org/ferwiki/lib/exe/fetch.php?w=&h=&cache=cache&media=gritoslogo.jpg"
                                amounts="600,1300,6000"
                                labels="0.5€, 1€, 5€, 10€"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;
