import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function Section({ id, children, className = '', title, subtitle }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {subtitle && (
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
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
