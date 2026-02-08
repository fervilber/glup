import React from 'react';
import { Mail, Github, MapPin, Send } from 'lucide-react';
import Container from '../../components/ui/Container';

const Contact = () => {
    return (
        <Container className="max-w-4xl py-12 md:py-24 space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight">
                    ¿Tienes un <span className="text-primary italic">Proyecto</span>?
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Estoy disponible para colaboraciones, consultoría o simplemente para charlar sobre tecnología. ¡Conversemos!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-8">
                        <h2 className="text-xl font-bold">Información de Contacto</h2>

                        <div className="space-y-6">
                            <a href="mailto:info@glup.com" className="group flex items-center gap-4 transition-colors">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                                    <p className="font-medium">fervilber@gmail.com</p>
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
                                    <p className="font-medium">Alicante, España</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mockup Form / CTA */}
                <div className="p-8 rounded-3xl bg-primary text-white flex flex-col justify-center space-y-6 shadow-2xl shadow-brand-500/20">
                    <h2 className="text-2xl font-display font-bold">Enviar un mensaje</h2>
                    <p className="text-brand-100 text-sm">
                        Escríbeme directamente y te responderé en menos de 24 horas laborables.
                    </p>
                    <a
                        href="mailto:fervilber@gmail.com"
                        className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-brand-50 transition-colors"
                    >
                        Enviar Email
                        <Send size={18} />
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default Contact;
