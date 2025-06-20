import React from "react";
import { cn } from "../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "link" | "outline";
  size?: "xs" | "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  disabled,
  children,
  ...props
}) => {
  const baseClasses =
    "btn relative overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95";

  const variantClasses = {
    primary:
      "btn-primary bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl border-2 border-blue-400",
    secondary:
      "btn-secondary bg-gradient-to-r from-gray-500 to-slate-600 hover:from-gray-600 hover:to-slate-700 shadow-lg hover:shadow-xl border-2 border-gray-400",
    accent:
      "btn-accent bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 shadow-lg hover:shadow-xl border-2 border-yellow-300",
    ghost:
      "btn-ghost hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 border-2 border-transparent hover:border-gray-300",
    link: "btn-link underline decoration-2 underline-offset-4 hover:decoration-4",
    outline: "btn-outline border-2 hover:border-4 transition-all duration-200",
  };

  const sizeClasses = {
    xs: "btn-xs text-xs px-3 py-1 rounded-full",
    sm: "btn-sm text-sm px-4 py-2 rounded-lg",
    md: "text-base px-6 py-3 rounded-xl", // Default size
    lg: "btn-lg text-lg px-8 py-4 rounded-2xl",
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        loading && "loading",
        "font-bold tracking-wide",
        "before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity before:duration-300",
        className,
      )}
      disabled={disabled || loading}
      {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {loading && (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </span>
    </button>
  );
};

export { Button };
