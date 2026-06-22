import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', hover = true, onClick }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -2 } : undefined}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        onClick={onClick}
        className={`
          bg-white dark:bg-slate-800/80
          rounded-2xl
          shadow-lg dark:shadow-slate-900/30
          border border-slate-200/80 dark:border-slate-700/50
          backdrop-blur-sm
          overflow-hidden
          transition-colors duration-200
          ${hover ? 'hover:border-primary-200/50 dark:hover:border-primary-500/20' : ''}
          ${onClick ? 'cursor-pointer' : ''}
          ${className}
        `}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className = '' }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={`
          bg-white/60 dark:bg-slate-800/60
          backdrop-blur-xl
          border border-white/20 dark:border-slate-700/30
          rounded-2xl
          shadow-xl dark:shadow-slate-900/30
          ${className}
        `}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
