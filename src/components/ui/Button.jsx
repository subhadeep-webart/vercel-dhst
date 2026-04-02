"use client";
import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// CVA configuration
const buttonVariants = cva(
    "flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none text-nowrap min-w-10 w-full min-h-10 h-10",
    {
        variants: {
            variant: {
                primary:
                    "bg-button-primary text-white hover:bg-button-primary-700",
                secondary:
                    "bg-gray-200 text-gray-900 hover:bg-gray-300",
                ghost:
                    "bg-transparent text-gray-900 hover:bg-gray-100",
                destructive:
                    "bg-red-600 text-white hover:bg-red-700",
                bordered:
                    "bg-transparent text-button-primary hover:bg-button-primary-700 border border-button-primary",
            },

            size: {
                sm: "px-3 py-1.5 text-sm",
                md: "px-4 py-2 text-sm",
                lg: "px-6 py-3 text-base",
            },

            rounded: {
                none: "rounded-none",
                sm: "rounded",
                md: "rounded-lg",
                lg: "rounded-xl",
                full: "rounded-full",
            },

            fullWidth: {
                true: "w-full",
            },
        },

        defaultVariants: {
            variant: "primary",
            size: "md",
            rounded: "lg",
            fullWidth: false,
        },
    }
);

const Button = forwardRef(function Button(
    {
        children,
        className,
        variant,
        size,
        fullWidth,
        rounded,
        isLoading = false,
        disabled,
        type = "button",
        ...props
    },
    ref
) {
    return (
        <button
            ref={ref}
            type={type}
            disabled={disabled || isLoading}
            className={cn(
                buttonVariants({ variant, size, rounded, fullWidth }),
                className
            )}
            {...props}
        >
            {isLoading ? "Loading..." : children}
        </button>
    );
});

export default Button;