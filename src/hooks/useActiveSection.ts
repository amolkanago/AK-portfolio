import { useEffect, useState } from "react";

interface UseActiveSectionProps {
    ids: string[];
    offset?: number;
    homeId?: string;
}

export function useActiveSection({
    ids,
    offset = 100,
    homeId = "home",
}: UseActiveSectionProps) {
    const [activeSection, setActiveSection] = useState(homeId);

    useEffect(() => {
        if (!ids.length) return;

        let ticking = false;

        const updateActiveSection = () => {
            ticking = false;

            // Top of the page
            if (window.scrollY < offset) {
                setActiveSection((prev) =>
                    prev === homeId ? prev : homeId
                );
                return;
            }

            let currentSection = homeId;

            for (const id of ids) {
                const element = document.getElementById(id);

                if (!element) continue;

                if (
                    element.getBoundingClientRect().top <=
                    offset
                ) {
                    currentSection = id;
                } else {
                    break;
                }
            }

            setActiveSection((prev) =>
                prev === currentSection
                    ? prev
                    : currentSection
            );
        };

        updateActiveSection();

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateActiveSection);
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener(
            "resize",
            updateActiveSection
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
            window.removeEventListener(
                "resize",
                updateActiveSection
            );
        };
    }, [ids, offset, homeId]);

    return activeSection;
}