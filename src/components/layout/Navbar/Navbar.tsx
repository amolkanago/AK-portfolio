import { useState, useEffect, useCallback } from 'react';
import {
    motion,
    AnimatePresence,
    useReducedMotion,
} from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { useScrollProgress } from '../../../hooks/useScrollProgress';
import { NAV_LINKS } from '../../../data/navigation';

import { NavbarLogo } from './NavbarLogo';
import { NavbarLinks } from './NavbarLinks';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] =
        useState(false);

    const [activeSection, setActiveSection] =
        useState<string | null>(null);

    const progress = useScrollProgress();
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        return () =>
            window.removeEventListener(
                'scroll',
                handleScroll
            );
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(
                        visibleSections[0].target.id
                    );
                }
            },
            {
                root: null,
                rootMargin: '-15% 0px -60% 0px',
                threshold: [0.2, 0.4, 0.6, 0.8],
            }
        );

        NAV_LINKS.forEach((link) => {
            const section = document.getElementById(
                link.href.replace('#', '')
            );

            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleEscape = (
            event: KeyboardEvent
        ) => {
            if (
                event.key === 'Escape' &&
                isMobileMenuOpen
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener(
            'keydown',
            handleEscape
        );

        return () =>
            document.removeEventListener(
                'keydown',
                handleEscape
            );
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const originalOverflow =
            document.body.style.overflow;

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow =
                originalOverflow;
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = useCallback(
        (href: string) => {
            const id = href.replace('#', '');

            const element =
                document.getElementById(id);

            if (!element) return;

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            setIsMobileMenuOpen(false);
        },
        []
    );

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        setIsMobileMenuOpen(false);
    }, []);

    return (
        <>
            {/* Scroll Progress */}
            <motion.div
                className="fixed top-0 left-0 right-0 z-60 h-1 origin-left bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
                style={{
                    scaleX: progress / 100,
                }}
            />

            {/* Navbar */}
            <motion.nav
                initial={
                    prefersReducedMotion
                        ? false
                        : { y: -100 }
                }
                animate={
                    prefersReducedMotion
                        ? {}
                        : { y: 0 }
                }
                transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:bg-slate-900/90'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between lg:h-20">
                        <NavbarLogo
                            onClick={scrollToTop}
                        />

                        {/* Desktop Nav */}
                        <div className="hidden items-center gap-1 lg:flex">
                            <NavbarLinks
                                links={NAV_LINKS}
                                activeSection={activeSection}
                                onNavigate={scrollToSection}
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <ThemeToggle />

                            <button
                                onClick={() =>
                                    setIsMobileMenuOpen(
                                        (prev) => !prev
                                    )
                                }
                                className="rounded-lg bg-slate-100 p-2 dark:bg-slate-800 lg:hidden"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                height: 0,
                            }}
                            animate={{
                                opacity: 1,
                                height: 'auto',
                            }}
                            exit={{
                                opacity: 0,
                                height: 0,
                            }}
                            className="border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900 lg:hidden"
                        >
                            <div className="container mx-auto space-y-1 px-4 py-4">
                                <NavbarLinks
                                    mobile
                                    links={NAV_LINKS}
                                    activeSection={activeSection}
                                    onNavigate={scrollToSection}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}