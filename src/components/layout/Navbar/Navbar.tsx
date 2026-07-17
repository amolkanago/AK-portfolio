import { useState, useCallback } from 'react';
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
import { useActiveSection } from '../../../hooks/useActiveSection';
import { useScrolled } from '../../../hooks/useScrolled';
import { useEscapeKey } from '../../../hooks/useEscapeKey';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] =
        useState(false);

    const progress = useScrollProgress();

    const prefersReducedMotion =
        useReducedMotion();

    const isScrolled = useScrolled();

    const activeSection = useActiveSection({
        ids: NAV_LINKS.map((link) =>
            link.href.replace("#", "")
        ),
        offset: 120,
    });

    useEscapeKey(
        () => setIsMobileMenuOpen(false),
        isMobileMenuOpen
    );

    useBodyScrollLock(isMobileMenuOpen);

    const NAVBAR_HEIGHT = 80;

    const scrollToSection = useCallback(
        (href: string) => {
            const id = href.replace("#", "");
            const element = document.getElementById(id);

            if (!element) return;

            const top =
                window.scrollY +
                element.getBoundingClientRect().top -
                NAVBAR_HEIGHT;

            window.scrollTo({
                top,
                behavior: "smooth",
            });

            setIsMobileMenuOpen(false);
        },
        []
    );

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
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
                        <nav className="hidden items-center gap-1 lg:flex lg:items-center lg:gap-2 xl:gap-4" aria-label='Primary Navigation'>
                            <NavbarLinks
                                links={NAV_LINKS}
                                activeSection={activeSection}
                                onNavigate={scrollToSection}
                            />
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <ThemeToggle />

                            <button
                                type="button"
                                aria-label={
                                    isMobileMenuOpen
                                        ? "Close Menu"
                                        : "Open Menu"
                                }

                                onClick={() =>
                                    setIsMobileMenuOpen(
                                        (prev) => !prev
                                    )
                                }
                                className="
                    inline-flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200/80
                    bg-white/80
                    text-slate-700
                    shadow-sm
                    backdrop-blur
                    transition-all
                    duration-200
                    hover:bg-slate-100
                    hover:shadow-md
                    active:scale-95
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-sky-500
                    focus-visible:ring-offset-2
                    dark:border-slate-700
                    dark:bg-slate-900/80
                    dark:text-slate-200
                    dark:hover:bg-slate-800
                    dark:focus-visible:ring-offset-slate-950
                    lg:hidden"
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
                <AnimatePresence mode="wait">
                    {isMobileMenuOpen && (
                        <motion.nav
                            id="mobile-navigation"
                            role="navigation"
                            aria-label="Mobile Navigation"
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
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}