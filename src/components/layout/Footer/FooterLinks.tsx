import { motion } from 'framer-motion';
import { footerLinks } from './footerData';

export function FooterLinks() {
    return (
        <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
                Quick Links
            </h4>

            <div className="space-y-2">
                {footerLinks.map((link) => (
                    <motion.a
                        key={link}
                        whileHover={{ x: 4 }}
                        href={`#${link.toLowerCase()}`}
                        className="
                            block
                            text-slate-700
                            dark:text-slate-400
                            hover:text-primary-500
                            dark:hover:text-primary-400
                            transition-colors
                        "
                    >
                        {link}
                    </motion.a>
                ))}
            </div>
        </div>
    );
}