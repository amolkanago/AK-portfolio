import { motion } from "framer-motion";
import {
    MapPin,
    Code2,
    Briefcase,
    BadgeCheck,
} from "lucide-react";

import { Card } from "../../ui/Card";
import { personalInfo } from "../../../data/portfolioData";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function AboutInfoCards() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
        >
            <Card
                className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-blue-700"
                hover={false}
            >
                {/* Decorative Accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500" />

                <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <MapPin className="h-7 w-7 text-white" />
                    </div>

                    <div className="space-y-1">
                        <p className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                            Location
                        </p>

                        <p className="text-lg font-semibold text-slate-900 dark:text-white">
                            {personalInfo.location}
                        </p>
                    </div>
                </div>
            </Card>

            <Card
                className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-purple-700"
                hover={false}
            >
                {/* Top Accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500" />

                <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Briefcase className="h-7 w-7 text-white" />
                    </div>

                    <div className="space-y-1">
                        <p className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                            Current Role
                        </p>

                        <p className="text-lg font-semibold text-slate-900 dark:text-white">
                            Software Developer
                        </p>

                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Frontend • React • Next.js • TypeScript
                        </p>
                    </div>
                </div>
            </Card>

            <Card
                className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-green-700"
                hover={false}
            >
                {/* Top Accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />

                <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Code2 className="h-7 w-7 text-white" />
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                            Tech Stack
                        </p>

                        <p className="text-lg font-semibold leading-relaxed text-slate-900 dark:text-white">
                            React.js • Next.js • TypeScript • Node.js
                        </p>

                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Building scalable, performant, and modern web applications.
                        </p>
                    </div>
                </div>
            </Card>

            <Card
                className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-emerald-700"
                hover={false}
            >
                {/* Top Accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500" />

                <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <BadgeCheck className="h-7 w-7 text-white" />
                    </div>

                    <div className="space-y-1">
                        <p className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                            Availability
                        </p>

                        <p className="text-lg font-semibold text-slate-900 dark:text-white">
                            Open to Opportunities
                        </p>

                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Available for full-time Frontend & Full Stack roles.
                        </p>
                    </div>
                </div>
            </Card>

        </motion.div>
    );
}