import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../../lib/theme';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.button
            whileHover={
                prefersReducedMotion
                    ? undefined
                    : { scale: 1.1 }
            }
            whileTap={
                prefersReducedMotion
                    ? undefined
                    : { scale: 0.9 }
            }
            onClick={toggleTheme}
            className="rounded-lg bg-slate-100 p-2 text-slate-600 transition-colors focus-ring hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            aria-label={
                theme === 'light'
                    ? 'Switch to dark mode'
                    : 'Switch to light mode'
            }
        >
            <AnimatePresence mode="wait">
                {theme === 'light' ? (
                    <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="h-5 w-5" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="h-5 w-5" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}