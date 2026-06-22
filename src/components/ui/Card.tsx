import { forwardRef } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", hover = true, onClick }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          hover
            ? {
              y: -4,
              scale: 1.01,
            }
            : undefined
        }
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        onClick={onClick}
        className={`
                    bg-white
                    dark:bg-slate-800/50
                    border border-slate-200
                    dark:border-slate-700/40
                    rounded-xl
                    shadow-sm
                    dark:shadow-black/20
                    transition-all duration-300
                    ${hover
            ? "hover:border-blue-500/30 hover:shadow-lg"
            : ""
          }
                    ${onClick ? "cursor-pointer" : ""}
                    ${className}
                `}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className = "" }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{
          y: -2,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className={`
                    bg-white/10
                    dark:bg-slate-800/40
                    backdrop-blur-md
                    border border-white/10
                    dark:border-slate-700/30
                    rounded-xl
                    shadow-sm
                    ${className}
                `}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";