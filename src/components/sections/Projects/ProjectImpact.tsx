import { TrendingUp } from 'lucide-react';

interface ProjectImpactProps {
    impact: string;
}

export function ProjectImpact({
    impact,
}: ProjectImpactProps) {
    return (
        <div
            className="
        rounded-2xl
        border
        border-green-200/50
        dark:border-green-800/20

        bg-gradient-to-r
        from-green-50
        via-emerald-50
        to-cyan-50

        dark:from-green-950/20
        dark:via-emerald-950/20
        dark:to-cyan-950/20

        p-5
      "
        >
            <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />

                <div>
                    <h4
                        className="
              mb-1
              font-semibold
              text-green-800
              dark:text-green-300
            "
                    >
                        Business Impact
                    </h4>

                    <p className="leading-relaxed text-green-700 dark:text-green-400">
                        {impact}
                    </p>
                </div>
            </div>
        </div>
    );
}