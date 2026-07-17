import { useEffect } from "react";

export function useBodyScrollLock(
    locked: boolean
) {
    useEffect(() => {
        const { style } = document.body;
        const previousOverflow =
            style.overflow;

        if (locked) {
            style.overflow = "hidden";
        }

        return () => {
            style.overflow =
                previousOverflow;
        };
    }, [locked]);
}