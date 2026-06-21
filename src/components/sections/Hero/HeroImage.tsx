import { motion } from "framer-motion";
import profileImage from "../../../assets/images/profile-pic.jpg";
import { personalInfo } from "../../../data/portfolioData";

export default function HeroImage() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
        >
            <motion.div
                animate={{
                    y: [0, -12, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                    }}
                    className="
                        absolute
                        inset-0
                        rounded-full
                        bg-blue-500/20
                        blur-3xl
                    "
                />

                <div
                    className="
                        relative
                        h-64
                        w-64
                        md:h-80
                        md:w-80
                        lg:h-96
                        lg:w-96
                        overflow-hidden
                        rounded-full
                        border-4
                        border-white
                        dark:border-slate-800
                        shadow-2xl
                    "
                >
                    <img
                        src={profileImage}
                        alt={personalInfo.name}
                        className="h-full w-full object-cover"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}