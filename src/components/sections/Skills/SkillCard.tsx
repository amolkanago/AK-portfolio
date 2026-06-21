import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { Card } from "../../ui/Card";

export interface SkillCategory {
    title: string;
    icon: LucideIcon;
    skills: string[];
    iconBgClass: string;
    iconTextClass: string;
}

export default function SkillCard({
    title,
    icon: Icon,
    skills,
    iconBgClass,
    iconTextClass,
}: SkillCategory) {
    return (
        <Card
            className="
                relative
                h-full
                p-6
                rounded-3xl
                border
                border-white/10
                dark:border-white/10
                bg-white/60
                dark:bg-slate-900/60
                backdrop-blur-xl
                shadow-lg
                shadow-primary-500/5
                transition-all
                duration-700
                ease-out
                hover:-translate-y-1
                hover:border-primary-500/20
                hover:shadow-xl
                hover:shadow-primary-500/10
                overflow-hidden
                before:absolute
                before:inset-0
                before:bg-gradient-to-br
                before:from-primary-500/3
                before:via-transparent
                before:to-cyan-500/3
                before:pointer-events-none
            "
        >
            <div className="relative flex items-center gap-4 mb-8">
                <div
                    className={`
                        p-3
                        rounded-2xl
                        ${iconBgClass}
                        shadow-lg
                        shadow-primary-500/20
                        ring-1
                        ring-white/10
                        transition-all
                        duration-300
                    `}
                >
                    <Icon
                        aria-hidden="true"
                        className={`w-6 h-6 ${iconTextClass}`}
                    />
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {title}
                    </h3>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Technologies I work with
                    </p>
                </div>
            </div>

            <div className="relative grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                    <motion.div
                        key={skill}
                        whileHover={{ y: -3 }}
                        className="
                            flex
                            items-center
                            justify-center
                            h-14
                            rounded-xl
                            border
                            border-white/10
                            bg-white/50
                            dark:bg-slate-800/50
                            backdrop-blur-md
                            text-sm
                            font-medium
                            text-slate-700
                            dark:text-slate-200
                            transition-all
                            duration-300
                            hover:border-primary-500/30
                            hover:bg-primary-500/10
                            hover:shadow-xl
                            hover:shadow-primary-500/20
                            hover:scale-[1.03]
                        "
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </Card>
    );
}