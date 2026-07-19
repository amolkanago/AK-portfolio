import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Card } from "../../ui/Card";
import { ProjectTechnologies } from "./ProjectTechnologies";

interface Project {
    title: string;
    description: string;
    image: string;
    highlights: string[];
    technologies: string[];
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProjectCard({
    project,
    index,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: EASE,
            }}
            className="h-full"
        >
            <Card
                className="
                    group
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200/80
                    bg-white
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-xl
                    dark:border-slate-800
                    dark:bg-slate-900
                "
            >
                {/* Project Image */}

                <div className="overflow-hidden">
                    <img
                        src={project.image}
                        srcSet={`
        ${project.image} 400w,
        ${project.image} 800w
    `}
                        sizes="
        (max-width:640px) 100vw,
        (max-width:1024px) 50vw,
        33vw
    "
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        width="400"
                        height="225"
                        className="
        aspect-video
        w-full
        object-cover
        object-left
        transition-transform
        duration-700
        group-hover:scale-105
    "
                    />
                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col p-7">
                    <h3
                        className="
                            text-2xl
                            font-bold
                            tracking-tight
                            text-slate-900
                            dark:text-white
                        "
                    >
                        {project.title}
                    </h3>

                    <p
                        className="
                            mt-4
                            text-[15px]
                            leading-7
                            text-slate-600
                            dark:text-slate-300
                        "
                    >
                        {project.description}
                    </p>

                    <ul className="mt-7 space-y-4">
                        {project.highlights.map((highlight) => (
                            <li
                                key={highlight}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle2
                                    className="
                                        mt-0.5
                                        h-5
                                        w-5
                                        shrink-0
                                        text-blue-600
                                    "
                                />

                                <span
                                    className="
                                        text-sm
                                        leading-6
                                        text-slate-600
                                        dark:text-slate-300
                                    "
                                >
                                    {highlight}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-8">
                        <ProjectTechnologies
                            technologies={project.technologies}
                        />
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}