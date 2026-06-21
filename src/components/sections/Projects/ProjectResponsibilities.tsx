import { Zap } from 'lucide-react';

interface ProjectResponsibilitiesProps {
    responsibilities: string[];
}

export function ProjectResponsibilities({
    responsibilities,
}: ProjectResponsibilitiesProps) {
    return (
        <div>
            <h4
                className="
          flex
          items-center
          gap-2
          mb-4
          text-lg
          font-semibold
          text-slate-900
          dark:text-white
        "
            >
                <Zap className="w-5 h-5 text-amber-500" />
                My Role & Responsibilities
            </h4>

            <ul className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                    <li
                        key={index}
                        className="
              flex
              items-start
              gap-3
              text-slate-600
              dark:text-slate-300
            "
                    >
                        <span
                            className="
                mt-2
                h-1.5
                w-1.5
                rounded-full
                bg-primary-500
                flex-shrink-0
              "
                        />

                        <span>{responsibility}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}