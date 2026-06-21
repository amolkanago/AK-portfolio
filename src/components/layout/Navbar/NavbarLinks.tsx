import { motion, useReducedMotion } from 'framer-motion';
import type { NavLink } from '../../../data/navigation';

interface NavbarLinksProps {
    links: readonly NavLink[];
    activeSection: string | null;
    onNavigate: (href: string) => void;
    mobile?: boolean;
}

export function NavbarLinks({
    links,
    activeSection,
    onNavigate,
    mobile = false,
}: NavbarLinksProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <>
            {links.map((link, index) => {
                const isActive =
                    activeSection === link.href.replace('#', '');

                return (
                    <motion.button
                        key={link.href}
                        initial={
                            mobile
                                ? { opacity: 0, x: -20 }
                                : undefined
                        }
                        animate={
                            mobile
                                ? { opacity: 1, x: 0 }
                                : undefined
                        }
                        transition={
                            mobile
                                ? { delay: index * 0.05 }
                                : undefined
                        }
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
                        onClick={() =>
                            onNavigate(link.href)
                        }
                        className={
                            mobile
                                ? `
                  block w-full rounded-lg px-4 py-3
                  text-left font-medium transition-colors
                  ${isActive
                                    ? 'bg-primary-100/50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                                }
                `
                                : `
                  rounded-lg px-4 py-2 text-sm
                  font-medium transition-colors
                  ${isActive
                                    ? 'bg-primary-100/50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-primary-600 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-primary-400'
                                }
                `
                        }
                    >
                        {link.label}
                    </motion.button>
                );
            })}
        </>
    );
}