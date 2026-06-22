import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Card } from "../../ui/Card";
import { ProjectTechnologies } from "./ProjectTechnologies";

interface Project {
    title: string;
    description: string;
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: EASE,
            }}
        >
            <Card
                className="
                    p-6
                    rounded-2xl
                    border
                    border-slate-200
                    dark:border-slate-700/50
                    h-full
                "
            >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {project.description}
                </p>

                <ul className="space-y-3 mb-6">
                    {project.highlights.map((highlight) => (
                        <li
                            key={highlight}
                            className="flex items-start gap-3"
                        >
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />

                            <span className="text-slate-600 dark:text-slate-300">
                                {highlight}
                            </span>
                        </li>
                    ))}
                </ul>

                <ProjectTechnologies
                    technologies={project.technologies}
                />
            </Card>
        </motion.div>
    );
}