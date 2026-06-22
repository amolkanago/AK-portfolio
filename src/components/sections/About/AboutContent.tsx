import { motion } from "framer-motion";
import { aboutData } from "../../../data/portfolioData";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function AboutContent() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
        >
            <ul className="space-y-4">
                {aboutData.description.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-3 text-lg text-slate-600 dark:text-slate-300"
                    >
                        <span className="mt-3 h-2 w-2 rounded-full bg-blue-500 shrink-0" />

                        <span className="leading-relaxed">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
            >
                {aboutData.stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        variants={itemVariants}
                        className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl"
                    >
                        <motion.p
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                delay: index * 0.1,
                            }}
                            className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                        >
                            {stat.value}
                        </motion.p>

                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}