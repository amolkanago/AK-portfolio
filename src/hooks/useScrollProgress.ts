import { useState, useEffect } from 'react';

export function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollPosition = window.scrollY;
                    const newProgress = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
                    setProgress(Math.min(100, Math.max(0, newProgress)));
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return progress;
}
