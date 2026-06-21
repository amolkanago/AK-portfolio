import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
    onClick: () => void;
}

export default function ScrollIndicator({
    onClick,
}: ScrollIndicatorProps) {
    return (
        <motion.button
            animate={{
                y: [0, 8, 0],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
            }}
            onClick={onClick}
            className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2
                text-slate-400
                hover:text-blue-500
                transition-colors
            "
        >
            <ChevronDown className="w-7 h-7" />
        </motion.button>
    );
}