import { motion } from "framer-motion";
import {
    ArrowRight,
    Download,
    // Briefcase,
    MapPin,
} from "lucide-react";
// import Button from "../../ui/Button";


import { personalInfo } from "../../../data/portfolioData";



export default function HeroContent() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
            }}
            animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
            }}
            transition={{ duration: 0.8 }}
        >
            {/* Badge */}
            <div
                className="
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    mb-6
                "
            >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Available for Opportunities
                </span>
            </div>

            {/* Role */}
            <p
                className="
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    font-semibold
                    text-blue-600
                    dark:text-blue-400
                    mb-4
                "
            >
                Software Developer
            </p>

            {/* Name */}
            <h1
                className="
                    text-4xl
                    md:text-5xl
                    lg:text-6xl
                    font-bold
                    tracking-tight
                    leading-tight
                    text-slate-900
                    dark:text-white
                "
            >
                Hi, I'm{" "}
                <span
                    className="
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        bg-clip-text
                        text-white
                    "
                >
                    {personalInfo.name}
                </span>
            </h1>

            {/* Title */}
            <h2
                className="
                    mt-4
                    text-xl
                    md:text-2xl
                    font-medium
                    text-slate-700
                    dark:text-slate-300
                "
            >
                {personalInfo.title}
            </h2>

            {/* Tagline */}
            <p
                className="
                    mt-6
                    max-w-xl
                    text-slate-600
                    dark:text-slate-400
                    leading-8
                "
            >
                {personalInfo.tagline}
            </p>

            {/* Location */}
            <div
                className="
                    flex
                    items-center
                    gap-2
                    mt-6
                    text-slate-500
                    dark:text-slate-400
                "
            >
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-5 mt-12">
                {/* Primary CTA */}
                <motion.a
                    whileHover={{
                        y: -4,
                        scale: 1.03,
                    }}
                    whileTap={{ scale: 0.97 }}
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        group
        relative
        overflow-hidden
        rounded-2xl
        px-7
        py-4
        bg-gradient-to-r
        from-blue-600
        via-cyan-500
        to-blue-500
        text-white
        font-semibold
        shadow-[0_10px_30px_rgba(59,130,246,0.35)]
        transition-all
    "
                >
                    <span className="relative z-10 flex items-center">
                        Let's Connect
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>

                    <div
                        className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            bg-white/10
            transition-opacity
        "
                    />
                </motion.a>

                {/* Resume CTA */}
                <motion.a
                    href={personalInfo.resumeUrl}
                    download="Amol-Resume.pdf"
                    whileHover={{
                        y: -4,
                        scale: 1.03,
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="
        group
        flex
        items-center
        gap-3
        px-7
        py-4
        rounded-2xl
        border
        border-slate-200
        dark:border-slate-700
        backdrop-blur-xl
        bg-white/60
        dark:bg-slate-900/50
        text-slate-800
        dark:text-slate-200
        hover:border-blue-400
        hover:shadow-xl
        transition-all
    "
                >
                    <Download className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">
                        Download Resume
                    </span>
                </motion.a>
            </div>
        </motion.div>
    );
}
