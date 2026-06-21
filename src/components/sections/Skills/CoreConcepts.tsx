import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

import { Card } from "../../ui/Card";
import { skillsData } from "../../../data/portfolioData";

export default function CoreConcepts() {
    return (
        <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <Card
                className="
                    p-6
                    md:p-8
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/60
                    dark:bg-slate-900/60
                    backdrop-blur-xl
                    shadow-xl
                    shadow-primary-500/5
                "
            >
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div
                        className="
                            p-3
                            rounded-2xl
                            bg-amber-100/80
                            dark:bg-amber-900/30
                            backdrop-blur-md
                            shadow-lg
                            shadow-amber-500/10
                        "
                    >
                        <Lightbulb
                            aria-hidden="true"
                            className="w-6 h-6 text-amber-600 dark:text-amber-400"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Core Concepts
                    </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    {skillsData.concepts.map(
                        (concept) => (
                            <span
                                key={concept}
                                className="
                                    px-4
                                    py-2
                                    rounded-full
                                    text-sm
                                    font-medium
                                    border
                                    border-white/10
                                    bg-white/70
                                    dark:bg-slate-800/60
                                    backdrop-blur-md
                                    text-slate-700
                                    dark:text-slate-200
                                    transition-all
                                    duration-500
                                    ease-out
                                    hover:-translate-y-0.5
                                    hover:border-primary-500/20
                                    hover:bg-primary-500/5
                                    hover:shadow-lg
                                    hover:shadow-primary-500/10
                                "
                            >
                                {concept}
                            </span>
                        )
                    )}
                </div>
            </Card>
        </motion.div>
    );
}