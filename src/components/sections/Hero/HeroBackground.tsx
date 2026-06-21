import { motion } from "framer-motion";

export default function HeroBackground() {
    return (
        <>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 80, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
                    absolute
                    -top-40
                    left-1/2
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    rounded-full
                    bg-blue-500/10
                    blur-[120px]
                "
                />

                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
                    absolute
                    bottom-0
                    right-0
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-cyan-500/10
                    blur-[120px]
                "
                />
            </div>
        </>
    );
}