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
            <Card className="p-6" hover={false}>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                        <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>

                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Location
                        </p>

                        <p className="font-semibold text-slate-800 dark:text-white">
                            {personalInfo.location}
                        </p>
                    </div>
                </div>
            </Card>

            <Card className="p-6" hover={false}>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                        <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>

                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Role
                        </p>

                        <p className="font-semibold text-slate-800 dark:text-white">
                            Software Developer
                        </p>
                    </div>
                </div>
            </Card>

            <Card className="p-6" hover={false}>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                        <Code2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>

                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Tech Stack
                        </p>

                        <p className="font-semibold text-slate-800 dark:text-white">
                            React.js • Next.js • TypeScript • Node.js
                        </p>
                    </div>
                </div>
            </Card>

            <Card className="p-6" hover={false}>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
                        <BadgeCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>

                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Availability
                        </p>

                        <p className="font-semibold text-slate-800 dark:text-white">
                            Open to Opportunities
                        </p>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}