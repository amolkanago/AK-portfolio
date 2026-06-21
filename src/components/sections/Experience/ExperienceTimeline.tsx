import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

import { experienceData } from "../../../data/portfolioData";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
    return (
        <div className="max-w-5xl mx-auto">
            {experienceData.map((experience, index) => (
                <motion.div
                    key={`${experience.company}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative pb-12 last:pb-0"
                >
                    {/* Timeline Line */}

                    {index !== experienceData.length - 1 && (
                        <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent" />
                    )}

                    {/* Timeline Node */}

                    <div
                        className="
                            absolute
                            left-0
                            top-10
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-blue-500/30
                            bg-blue-500/10
                            backdrop-blur-sm
                        "
                    >
                        <Briefcase className="h-5 w-5 text-blue-500" />
                    </div>

                    <div className="ml-20">
                        <ExperienceCard
                            experience={experience}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}