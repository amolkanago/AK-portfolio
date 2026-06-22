import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function Section({
  id,
  children,
  className = "",
  title,
  subtitle,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-20 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            {subtitle && (
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3 block">
                {subtitle}
              </span>
            )}

            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                {title}
              </h2>
            )}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}