import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../../../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white py-16 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
            </div>

            {/* Top border glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                            {personalInfo.name}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Frontend Developer passionate about building beautiful, functional web applications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                        <div className="space-y-2">
                            {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                                <motion.a
                                    key={link}
                                    whileHover={{ x: 4 }}
                                    href={`#${link.toLowerCase()}`}
                                    className="block text-slate-400 hover:text-primary-400 transition-colors"
                                >
                                    {link}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Connect</h4>
                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-primary-600 transition-colors border border-slate-700/50 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20"
                                aria-label="LinkedIn profile"
                            >
                                <FaLinkedin className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700 transition-colors border border-slate-700/50 hover:border-slate-600"
                                aria-label="GitHub profile"
                            >
                                <FaGithub className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={`mailto:${personalInfo.email}`}
                                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-green-600 transition-colors border border-slate-700/50 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20"
                                aria-label="Send email"
                            >
                                <Mail className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 text-sm flex items-center gap-1.5">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by {personalInfo.name}
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-shadow group"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
