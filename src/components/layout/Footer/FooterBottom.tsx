import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../../../data/portfolioData';

export function FooterBottom() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm flex items-center gap-1.5">
                Made with{' '}
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                by {personalInfo.name}
            </p>

            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-shadow group"
            >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
        </div>
    );
}