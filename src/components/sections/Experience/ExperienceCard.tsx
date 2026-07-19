import { motion } from "framer-motion";
import {
    Calendar,
    MapPin,
    ChevronRight,
} from "lucide-react";

import { experienceData } from "../../../data/portfolioData";

type ExperienceItem = (typeof experienceData)[number];

interface ExperienceCardProps {
    experience: ExperienceItem;
}

export default function ExperienceCard({
    experience,
}: ExperienceCardProps) {
    return (
        <div
            className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/8
        bg-white/80
        dark:bg-slate-900/60
        backdrop-blur-2xl
        shadow-[0_8px_40px_rgba(15,23,42,0.08)]
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:border-cyan-400/25
        hover:shadow-[0_20px_60px_rgba(6,182,212,0.12)]
    "
        >
            {/* Gradient Overlay */}

            <div
                className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-500/3
            via-transparent
            to-violet-500/3
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
        "
            />

            {/* Top Accent */}

            <div
                className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400/50
            to-transparent
        "
            />

            <div className="relative p-8 md:p-10">

                {/* Header */}

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                    <div className="space-y-3">

                        <h3
                            className="
                        text-2xl
                        font-bold
                        tracking-tight
                        text-slate-900
                        dark:text-white
                    "
                        >
                            {experience.title}
                        </h3>

                        <div className="flex items-center gap-3">

                            <div
                                className="
                            h-2
                            w-2
                            rounded-full
                            bg-cyan-400
                            shadow-[0_0_12px_rgba(34,211,238,0.8)]
                        "
                            />

                            <p
                                className="
                            text-lg
                            font-semibold
                            text-cyan-500
                            dark:text-cyan-400
                        "
                            >
                                {experience.company}
                            </p>

                        </div>

                    </div>

                    <div className="flex flex-wrap gap-5 text-sm">

                        <div
                            className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/8
                        bg-slate-100/70
                        dark:bg-slate-800/60
                        px-4
                        py-2
                        text-slate-600
                        dark:text-slate-300
                    "
                        >
                            <Calendar className="h-4 w-4 text-cyan-400" />
                            <span>{experience.duration}</span>
                        </div>

                        <div
                            className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/8
                        bg-slate-100/70
                        dark:bg-slate-800/60
                        px-4
                        py-2
                        text-slate-600
                        dark:text-slate-300
                    "
                        >
                            <MapPin className="h-4 w-4 text-cyan-400" />
                            <span>{experience.location}</span>
                        </div>

                    </div>

                </div>

                {/* Divider */}

                <div
                    className="
                my-8
                h-px
                bg-gradient-to-r
                from-transparent
                via-slate-300/70
                to-transparent
                dark:via-slate-700
            "
                />

                {/* Responsibilities */}

                <div className="space-y-5">

                    {experience.responsibilities.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                x: -20,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.35,
                                delay: index * 0.06,
                            }}
                            className="flex items-start gap-4"
                        >
                            <div
                                className="
                            mt-1.5
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-cyan-500/10
                        "
                            >
                                <ChevronRight className="h-3.5 w-3.5 text-cyan-400" />
                            </div>

                            <p
                                className="
                            leading-8
                            text-slate-600
                            dark:text-slate-300
                        "
                            >
                                {item}
                            </p>

                        </motion.div>

                    ))}

                </div>

                {/* Technologies */}

                <div className="mt-10 flex flex-wrap gap-3">

                    {experience.achievements.map((tag) => (

                        <span
                            key={tag}
                            className="
                        rounded-full
                        border
                        border-cyan-400/20
                        bg-cyan-400/8
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        tracking-wide
                        text-cyan-500
                        transition-all
                        duration-300
                        hover:border-cyan-400/40
                        hover:bg-cyan-400/[0.14]
                        hover:shadow-[0_0_18px_rgba(34,211,238,0.18)]
                    "
                        >
                            {tag}
                        </span>

                    ))}

                </div>

            </div>

        </div>
    );
}