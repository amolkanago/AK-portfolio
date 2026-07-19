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
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3"
        >
            {/* Description */}
            <ul className="space-y-6">
                {aboutData.description.map((item, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.12,
                        }}
                        className="flex items-start gap-4"
                    >
                        <span
                            className="
            mt-3
            h-2.5
            w-2.5
            shrink-0
            rounded-full
            bg-blue-500
            ring-4
            ring-blue-500/15
          "
                        />

                        <p
                            className="
            text-base
            md:text-lg
            leading-8
            text-slate-600
            dark:text-slate-300
          "
                        >
                            {item}
                        </p>
                    </motion.li>
                ))}
            </ul>

            {/* Stats */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4"
            >
                {aboutData.stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        variants={itemVariants}
                        whileHover={{
                            y: -8,
                            scale: 1.03,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 18,
                        }}
                        className="group relative overflow-hidden rounded-2xl borde border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70  backdrop-blur-xl p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl">
                        {/* Background Glow */}
                        <div className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            bg-gradient-to-br
            from-blue-500/5
            via-cyan-500/5
            to-transparent"
                        />

                        {/* Number */}
                        <motion.p
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 250,
                                delay: index * 0.1,
                            }}
                            className="
            relative
            z-10
            text-4xl
            font-extrabold
            tracking-tight
            text-blue-600
            dark:text-blue-400
            drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                        >
                            {stat.value}
                        </motion.p>

                        {/* Label */}
                        <p
                            className="
            relative
            z-10
            mt-3
            text-xs
            font-semibold
            uppercase
            tracking-[0.15em]
            text-slate-500
            dark:text-slate-400"
                        >
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}