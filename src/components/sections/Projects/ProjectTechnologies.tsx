interface ProjectTechnologiesProps {
    technologies: string[];
}

export function ProjectTechnologies({
    technologies,
}: ProjectTechnologiesProps) {
    return (
        <div>
            <h4
                className="
          mb-4
          text-lg
          font-semibold
          text-slate-900
          dark:text-white
        "
            >
                Technologies Used
            </h4>

            <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="
              px-3
              py-1.5
              rounded-full
              bg-blue-50
              dark:bg-blue-950/30
              text-blue-700
              dark:text-blue-300
              text-sm
              font-medium
              border
              border-blue-200/50
              dark:border-blue-800/30
            "
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </div>
    );
}