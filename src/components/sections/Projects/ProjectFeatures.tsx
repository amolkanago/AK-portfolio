interface ProjectFeaturesProps {
    features: string[];
}

export function ProjectFeatures({
    features,
}: ProjectFeaturesProps) {
    return (
        <div>
            <h4
                className="
          mb-4
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-slate-500
          dark:text-slate-400
        "
            >
                Key Features
            </h4>

            <div className="flex flex-wrap gap-2">
                {features.map((feature) => (
                    <span
                        key={feature}
                        className="
              px-3
              py-1.5
              rounded-xl
              border
              border-slate-200/70
              dark:border-slate-700/70
              bg-slate-50/80
              dark:bg-slate-800/70
              backdrop-blur-sm
              text-sm
              font-medium
              text-slate-700
              dark:text-slate-300
              transition-all
              duration-300
              hover:border-primary-500/20
              hover:bg-primary-50
              dark:hover:bg-primary-950/20
            "
                    >
                        {feature}
                    </span>
                ))}
            </div>
        </div>
    );
}