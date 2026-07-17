import { motion, useReducedMotion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import type { NavbarLogoProps } from './navbar.types';

export function NavbarLogo({
    onClick,
}: NavbarLogoProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.button
            type="button"
            aria-label="Go to homepage"
            onClick={onClick}
            whileHover={
                prefersReducedMotion
                    ? undefined
                    : {
                        scale: 1.03,
                        y: -1,
                    }
            }
            whileTap={
                prefersReducedMotion
                    ? undefined
                    : {
                        scale: 0.97,
                    }
            }
            transition={{
                duration: 0.2,
                ease: "easeOut",
            }}
            className="
        group
        inline-flex
        items-center
        gap-3
        rounded-xl
        px-1
        py-1
        text-slate-900
        transition-colors
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary-500
        focus-visible:ring-offset-2
        dark:text-white
        dark:focus-visible:ring-offset-slate-950
    "
        >
            <div
                className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-br
            from-primary-500
            via-primary-600
            to-accent-500
            shadow-md
            transition-all
            duration-300
            group-hover:shadow-lg
            group-hover:shadow-primary-500/25
        "
            >
                <Code2
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                />
            </div>

            <span
                className="
            text-lg
            font-semibold
            tracking-tight
            sm:text-xl
        "
            >
                Amol
            </span>
        </motion.button>
    );
}