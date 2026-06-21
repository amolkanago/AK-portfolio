import { motion } from "framer-motion";
import {
    Code,
    Database,
    Wrench,
} from "lucide-react";

import SkillCard, {
    type SkillCategory,
} from "./SkillCard";

import { skillsData } from "../../../data/portfolioData";

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Development",
        icon: Code,
        skills: skillsData.frontend.map(
            (skill) => skill.name
        ),
        iconBgClass:
            "bg-primary-100 dark:bg-primary-900/30",
        iconTextClass:
            "text-primary-600 dark:text-primary-400",
    },
    {
        title: "Backend Development",
        icon: Database,
        skills: skillsData.backend.map(
            (skill) => skill.name
        ),
        iconBgClass:
            "bg-green-100 dark:bg-green-900/30",
        iconTextClass:
            "text-green-600 dark:text-green-400",
    },
    {
        title: "Databases",
        icon: Database,
        skills: skillsData.databases.map(
            (skill) => skill.name
        ),
        iconBgClass:
            "bg-purple-100 dark:bg-purple-900/30",
        iconTextClass:
            "text-purple-600 dark:text-purple-400",
    },
    {
        title: "Tools & Workflow",
        icon: Wrench,
        skills: skillsData.tools.map(
            (skill) => skill.name
        ),
        iconBgClass:
            "bg-orange-100 dark:bg-orange-900/30",
        iconTextClass:
            "text-orange-600 dark:text-orange-400",
    },
];

export default function SkillsGrid() {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map(
                (category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{
                            opacity: 0,
                            y: 16,
                            scale: 0.98,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            margin: "-50px",
                        }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <SkillCard {...category} />
                    </motion.div>
                )
            )}
        </div>
    );
}