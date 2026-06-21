import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../../data/portfolioData';

export function FooterSocial() {
    return (
        <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
                Connect
            </h4>

            <div className="flex gap-4">
                {/* LinkedIn */}
                <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        p-3
                        bg-white dark:bg-slate-800/50
                        text-slate-700 dark:text-slate-200
                        border border-slate-300 dark:border-slate-700/50
                        backdrop-blur-sm rounded-lg
                        hover:bg-primary-600 hover:text-white
                        hover:border-primary-500/50
                        hover:shadow-lg hover:shadow-primary-500/20
                        transition-all
                    "
                    aria-label="LinkedIn profile"
                >
                    <FaLinkedin className="w-5 h-5" />
                </motion.a>

                {/* GitHub */}
                <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        p-3
                        bg-white dark:bg-slate-800/50
                        text-slate-700 dark:text-slate-200
                        border border-slate-300 dark:border-slate-700/50
                        backdrop-blur-sm rounded-lg
                        hover:bg-slate-700 hover:text-white
                        transition-all
                    "
                    aria-label="GitHub profile"
                >
                    <FaGithub className="w-5 h-5" />
                </motion.a>

                {/* Email */}
                <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${personalInfo.email}`}
                    className="
                        p-3
                        bg-white dark:bg-slate-800/50
                        text-slate-700 dark:text-slate-200
                        border border-slate-300 dark:border-slate-700/50
                        backdrop-blur-sm rounded-lg
                        hover:bg-green-600 hover:text-white
                        hover:border-green-500/50
                        hover:shadow-lg hover:shadow-green-500/20
                        transition-all
                    "
                    aria-label="Send email"
                >
                    <Mail className="w-5 h-5" />
                </motion.a>
            </div>
        </div>
    );
}