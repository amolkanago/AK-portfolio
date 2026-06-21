import { motion, useReducedMotion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import type { NavbarLogoProps } from './navbar.types';

export function NavbarLogo({
    onClick,
}: NavbarLogoProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.button
            whileHover={
                prefersReducedMotion
                    ? undefined
                    : { scale: 1.05 }
            }
            whileTap={
                prefersReducedMotion
                    ? undefined
                    : { scale: 0.95 }
            }
            onClick={onClick}
            className="flex items-center gap-2 rounded-lg font-bold text-slate-800 focus-ring dark:text-white"
            aria-label="Amol Kanago Home"
        >
            <div className="rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 p-2">
                <Code2
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                />
            </div>

            <span className="text-xl">
                Amol
            </span>
        </motion.button>
    );
}