import { useEffect, useState } from "react";

export function useScrollProgress() {
    const [progress, setProgress] =
        useState(0);

    useEffect(() => {
        let ticking = false;

        const updateProgress = () => {
            ticking = false;

            const scrollTop =
                window.scrollY;

            const scrollHeight =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;

            const percentage =
                scrollHeight > 0
                    ? (scrollTop /
                        scrollHeight) *
                    100
                    : 0;

            setProgress(percentage);
        };

        updateProgress();

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(
                    updateProgress
                );
                ticking = true;
            }
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            updateProgress
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            window.removeEventListener(
                "resize",
                updateProgress
            );
        };
    }, []);

    return progress;
}