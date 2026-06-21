import {
    forwardRef,
    memo,
    type ButtonHTMLAttributes,
    type ReactNode,
} from 'react';
import { motion } from 'framer-motion';

type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'success'
    | 'danger';

type ButtonSize =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'icon';

export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    children?: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    animated?: boolean;
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

const BASE_STYLES =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed select-none';

const VARIANTS: Record<ButtonVariant, string> = {
    primary:
        'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-lg hover:shadow-xl dark:bg-primary-500 dark:hover:bg-primary-600 disabled:bg-slate-300 disabled:dark:bg-slate-700',

    secondary:
        'bg-slate-800 text-white hover:bg-slate-900 active:bg-slate-950 shadow-lg hover:shadow-xl dark:bg-slate-700 dark:hover:bg-slate-600 disabled:bg-slate-300 disabled:dark:bg-slate-600',

    outline:
        'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white active:bg-primary-700 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-500 dark:hover:text-white disabled:border-slate-300 disabled:text-slate-300 disabled:dark:border-slate-600 disabled:dark:text-slate-500',

    ghost:
        'text-slate-700 hover:bg-slate-100 active:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 dark:active:bg-slate-700 disabled:text-slate-300 disabled:dark:text-slate-600',

    success:
        'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 shadow-lg hover:shadow-xl disabled:bg-slate-300 dark:disabled:bg-slate-700',

    danger:
        'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-lg hover:shadow-xl disabled:bg-slate-300 dark:disabled:bg-slate-700',
};

const SIZES: Record<ButtonSize, string> = {
    xs: 'px-3 py-1.5 text-xs gap-1',
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2',
    xl: 'px-10 py-5 text-xl gap-3',
    icon: 'h-11 w-11 p-0',
};

function cn(...classes: Array<string | undefined | false | null>) {
    return classes.filter(Boolean).join(' ');
}

const Spinner = () => (
    <svg
        className="h-4 w-4 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
    </svg>
);

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = 'primary',
            size = 'md',
            loading = false,
            animated = true,
            fullWidth = false,
            leftIcon,
            rightIcon,
            disabled = false,
            type = 'button',
            className,
            ...props
        },
        ref
    ) => {
        const isDisabled = disabled || loading;

        const buttonClassName = cn(
            BASE_STYLES,
            VARIANTS[variant],
            SIZES[size],
            fullWidth && 'w-full',
            isDisabled && 'opacity-60',
            className
        );

        const content = (
            <>
                {loading ? (
                    <Spinner />
                ) : (
                    leftIcon && (
                        <span
                            className="flex items-center justify-center"
                            aria-hidden="true"
                        >
                            {leftIcon}
                        </span>
                    )
                )}

                {children && (
                    <span className={loading ? 'opacity-90' : undefined}>
                        {children}
                    </span>
                )}

                {!loading && rightIcon && (
                    <span
                        className="flex items-center justify-center"
                        aria-hidden="true"
                    >
                        {rightIcon}
                    </span>
                )}
            </>
        );

        if (!animated) {
            return (
                <butto
                    ref={ref}
                    type={type}
                    disabled={isDisabled}
                    aria-disabled={isDisabled}
                    aria-busy={loading}
                    className={buttonClassName}
                    {...props}
                >
                    {content}
                </butto>
            );
        }

        return (
            <motion.button
                ref={ref}
                type={type}
                disabled={isDisabled}
                aria-disabled={isDisabled}
                aria-busy={loading}
                whileHover={
                    isDisabled
                        ? undefined
                        : {
                            scale: 1.02,
                        }
                }
                whileTap={
                    isDisabled
                        ? undefined
                        : {
                            scale: 0.98,
                        }
                }
                transition={{
                    duration: 0.15,
                }}
                className={buttonClassName}
                {...props}
            >
                {content}
            </motion.button>
        );
    }
);

ButtonComponent.displayName = 'Button';

export const Button = memo(ButtonComponent);

export default Button;