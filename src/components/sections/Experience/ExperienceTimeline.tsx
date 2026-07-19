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
                <motion.article
                    key={`${experience.company}-${index}`}
                    initial={{
                        opacity: 0,
                        y: 60,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative pb-16 last:pb-0"
                >
                    {/* Timeline Rail */}

                    {index !== experienceData.length - 1 && (
                        <>
                            <div className="absolute left-5 top-14 bottom-0 w-px bg-white/10" />

                            <motion.div
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                }}
                                style={{ originY: 0 }}
                                className="
                            absolute
                            left-5
                            top-14
                            bottom-0
                            w-px
                            bg-gradient-to-b
                            from-cyan-400
                            via-sky-500/70
                            to-transparent
                        "
                            />
                        </>
                    )}

                    {/* Timeline Node */}

                    <motion.div
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                        }}
                        whileHover={{
                            rotate: 6,
                        }}
                        transition={{
                            duration: 0.35,
                        }}
                        className="absolute left-0 top-6 z-20"
                    >
                        {/* Glow */}

                        <div
                            className="
                        absolute
                        inset-0
                        rounded-full
                        bg-cyan-400/20
                        blur-xl
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                    "
                        />

                        <div
                            className="
                        relative
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-slate-900/70
                        backdrop-blur-2xl
                        shadow-[0_10px_40px_rgba(6,182,212,0.15)]
                        transition-all
                        duration-300
                        group-hover:border-cyan-400/40
                        group-hover:shadow-[0_18px_45px_rgba(6,182,212,0.25)]
                    "
                        >
                            <Briefcase
                                className="
                            h-5
                            w-5
                            text-cyan-400
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                            />
                        </div>
                    </motion.div>

                    {/* Card */}

                    <motion.div
                        whileHover={{
                            y: -6,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        className="ml-16 md:ml-20"
                        style={{
                            willChange: "transform",
                        }}
                    >
                        <div
                            className="
                        relative
                        overflow-hidden
                        rounded-[28px]
                    "
                        >
                            {/* Hover Overlay */}

                            <div
                                className="
                            pointer-events-none
                            absolute
                            inset-0
                            rounded-[28px]
                            bg-gradient-to-br
                            from-cyan-500/5
                            via-transparent
                            to-purple-500/5
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                        "
                            />

                            {/* Border */}

                            <div
                                className="
                            absolute
                            inset-0
                            rounded-[28px]
                            border
                            border-white/[0.06]
                            transition-all
                            duration-300
                            group-hover:border-cyan-400/20
                        "
                            />

                            {/* Soft Spotlight */}

                            <div
                                className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-0
                            h-48
                            w-48
                            -translate-x-1/2
                            rounded-full
                            bg-cyan-400/10
                            blur-3xl
                            opacity-0
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                        "
                            />

                            <div
                                className="
                            transition-shadow
                            duration-300
                            group-hover:shadow-[0_20px_60px_rgba(8,145,178,0.12)]
                        "
                            >
                                <ExperienceCard
                                    experience={experience}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.article>
            ))}
        </motion.div>
    );
}