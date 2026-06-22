import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import { Briefcase } from "lucide-react";

import { experienceData } from "../../../data/portfolioData";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
    const { scrollYProgress } = useScroll();

    const parallaxY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -40]
    );

    return (
        <motion.div
            style={{ y: parallaxY }}
            className="relative mx-auto max-w-6xl"
        >
            {experienceData.map((experience, index) => (
                <motion.div
                    key={`${experience.company}-${index}`}
                    initial={{
                        opacity: 0,
                        y: 80,
                        scale: 0.92,
                        filter: "blur(12px)",
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: index * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative pb-20 last:pb-0"
                >
                    {/* Timeline Rail */}

                    {index !== experienceData.length - 1 && (
                        <>
                            <div className="absolute left-6 top-16 bottom-0 w-px bg-white/10" />

                            <motion.div
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.4,
                                    ease: "easeOut",
                                }}
                                style={{
                                    originY: 0,
                                }}
                                className="
                                    absolute
                                    left-6
                                    top-16
                                    bottom-0
                                    w-[2px]
                                    bg-gradient-to-b
                                    from-cyan-400
                                    via-blue-500
                                    to-purple-500
                                "
                            />

                            <div
                                className="
                                    absolute
                                    left-6
                                    top-16
                                    bottom-0
                                    w-[2px]
                                    bg-gradient-to-b
                                    from-cyan-400
                                    via-blue-500
                                    to-purple-500
                                    blur-sm
                                    opacity-30
                                    transition-all
                                    duration-500
                                    group-hover:opacity-100
                                "
                            />
                        </>
                    )}

                    {/* Timeline Node */}

                    <motion.div
                        initial={{
                            scale: 0,
                            rotate: -180,
                            opacity: 0,
                        }}
                        whileInView={{
                            scale: 1,
                            rotate: 0,
                            opacity: 1,
                        }}
                        whileHover={{
                            scale: 1.15,
                            rotate: 12,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 14,
                            delay: index * 0.12,
                        }}
                        className="
                            absolute
                            left-0
                            top-8
                            z-20
                        "
                    >
                        {/* Glow */}

                        <div
                            className="
                                absolute
                                inset-0
                                scale-[1.8]
                                rounded-full
                                bg-cyan-500/30
                                blur-xl
                                opacity-0
                                transition-all
                                duration-500
                                group-hover:opacity-100
                            "
                        />

                        {/* Pulse Ring */}

                        <div
                            className="
                                absolute
                                inset-0
                                rounded-full
                                border
                                border-cyan-400/30
                                animate-pulse
                            "
                        />

                        {/* Node */}

                        <div
                            className="
                                relative
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-white/10
                                bg-slate-900/80
                                backdrop-blur-xl
                                shadow-lg
                                shadow-cyan-500/20
                                transition-all
                                duration-500
                                group-hover:border-cyan-400/40
                                group-hover:shadow-cyan-500/50
                            "
                        >
                            <Briefcase
                                className="
                                    h-5
                                    w-5
                                    text-cyan-400
                                    transition-all
                                    duration-500
                                    group-hover:scale-125
                                "
                            />
                        </div>
                    </motion.div>

                    {/* Content */}

                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            y: {
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                        whileHover={{
                            y: -10,
                            scale: 1.015,
                        }}
                        className="ml-20"
                    >
                        <div className="relative overflow-hidden rounded-3xl">
                            {/* Spotlight */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    opacity-0
                                    transition-all
                                    duration-500
                                    group-hover:opacity-100
                                "
                            >
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-r
                                        from-cyan-500/5
                                        via-cyan-500/10
                                        to-purple-500/5
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        -top-24
                                        left-1/2
                                        h-48
                                        w-48
                                        -translate-x-1/2
                                        rounded-full
                                        bg-cyan-500/10
                                        blur-3xl
                                    "
                                />
                            </div>

                            {/* Glow Border */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    rounded-3xl
                                    border
                                    border-transparent
                                    transition-all
                                    duration-500
                                    group-hover:border-cyan-500/20
                                "
                            />

                            <div
                                className="
                                    transition-all
                                    duration-500
                                    group-hover:drop-shadow-[0_20px_50px_rgba(34,211,238,0.15)]
                                "
                            >
                                <ExperienceCard
                                    experience={experience}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
}