interface ProjectTechnologiesProps {
    technologies: string[];
}

export function ProjectTechnologies({
    technologies,
}: ProjectTechnologiesProps) {
    return (
        <div className="mt-8">
            <h4
                className="
            mb-4
            text-sm
            font-semibold
            uppercase
            tracking-wider
            text-slate-500
            dark:text-slate-400
        "
            >
                Technologies
            </h4>

            <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-1.5
                    text-sm
                    font-medium
                    text-slate-700
                    transition-colors
                    duration-300
                    hover:border-blue-300
                    hover:bg-blue-50
                    hover:text-blue-700
                    dark:border-slate-700
                    dark:bg-slate-800
                    dark:text-slate-300
                    dark:hover:border-blue-700
                    dark:hover:bg-blue-950/30
                    dark:hover:text-blue-300
                "
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </div>
    );
}