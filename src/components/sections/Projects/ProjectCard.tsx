import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { Card } from '../../ui/Card';
import { ProjectFeatures } from './ProjectFeatures';
import { ProjectResponsibilities } from './ProjectResponsibilities';
import { ProjectTechnologies } from './ProjectTechnologies';
import { ProjectImpact } from './ProjectImpact';

interface Project {
    title: string;
    description: string;
    features: string[];
    responsibilities: string[];
    technologies: string[];
    impact: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProjectCard({
    project,
    index,
}: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: EASE,
            }}
        >
            <Card
                className={`
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-white/70
          dark:bg-slate-900/70
          backdrop-blur-xl
          shadow-lg
          shadow-slate-200/50
          dark:shadow-black/20
          transition-all
          duration-700
          ease-out
          hover:-translate-y-1
          hover:shadow-2xl
          hover:shadow-primary-500/10
          ${isExpanded
                        ? 'ring-1 ring-primary-500/30 shadow-primary-500/10'
                        : ''
                    }
        `}
            >
                {/* Header */}

                <div
                    className="
            relative
            overflow-hidden
            bg-gradient-to-r
            from-blue-600
            via-blue-500
            to-cyan-500
            p-6
          "
                >
                    <div className="absolute inset-0 bg-white/[0.03]" />

                    <div className="relative flex justify-between items-start gap-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {project.title}
                            </h3>

                            <p className="text-blue-100 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => setIsExpanded((prev) => !prev)}
                            className="
                p-2.5
                rounded-full
                bg-white/15
                hover:bg-white/20
                backdrop-blur-md
                border border-white/10
                transition-all
                duration-300
                flex-shrink-0
              "
                        >
                            <motion.div
                                animate={{
                                    rotate: isExpanded ? 180 : 0,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: EASE,
                                }}
                            >
                                <ChevronDown className="w-5 h-5 text-white" />
                            </motion.div>
                        </motion.button>
                    </div>
                </div>

                {/* Features */}

                <div className="p-6">
                    <ProjectFeatures
                        features={project.features}
                    />
                </div>

                {/* Expandable Content */}

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{
                                height: 0,
                                opacity: 0,
                            }}
                            animate={{
                                height: 'auto',
                                opacity: 1,
                            }}
                            exit={{
                                height: 0,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: EASE,
                            }}
                            className="overflow-hidden"
                        >
                            <div
                                className="
                  px-6
                  pt-6
                  pb-6
                  border-t
                  border-slate-100
                  dark:border-slate-800
                "
                            >
                                <ProjectImpact
                                    impact={project.impact}
                                />

                                <div className="mt-8">
                                    <ProjectResponsibilities
                                        responsibilities={
                                            project.responsibilities
                                        }
                                    />
                                </div>

                                <div className="mt-8">
                                    <ProjectTechnologies
                                        technologies={
                                            project.technologies
                                        }
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </motion.div>
    );
}