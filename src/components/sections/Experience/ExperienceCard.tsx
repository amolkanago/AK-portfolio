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
                rounded-3xl
                border
                border-slate-200/60
                dark:border-slate-700/60
                bg-white
                dark:bg-slate-800/40
                backdrop-blur-md
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:shadow-2xl
                hover:-translate-y-1
            "
        >
            {/* Header */}

            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {experience.title}
                    </h3>

                    <p className="mt-2 text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {experience.company}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                    </div>
                </div>
            </div>

            {/* Divider */}

            <div className="my-6 h-px bg-slate-200 dark:bg-slate-700" />

            {/* Responsibilities */}

            <div className="space-y-4">
                {experience.responsibilities.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex gap-3"
                    >
                        <ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />

                        <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                            {item}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Skills */}

            <div className="mt-8 flex flex-wrap gap-2">
                {[
                    "React",
                    "REST APIs",
                    "Authentication",
                    "Frontend Architecture",
                    "Agile",
                ].map((tag) => (
                    <span
                        key={tag}
                        className="
                            rounded-full
                            border
                            border-blue-500/20
                            bg-blue-500/10
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-blue-600
                            dark:text-blue-400
                        "
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}