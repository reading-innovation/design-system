import React from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "strong" | "outline" | "ghost";
  size?: "xs" | "sm" | "big";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "strong",
  size = "sm",
  loading = false,
  leftIcon,
  className,
  disabled,
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden transition-all duration-200 text-body2-m";

  const variantClasses = {
    strong: {
      base: "bg-button-primary text-white shadow-sm",
      hover: "hover:bg-control-blueHover hover:shadow-md",
      pressed: "active:bg-control-bluePressed",
      disabled:
        "disabled:bg-button-disabled disabled:text-label-disabled disabled:shadow-none disabled:cursor-not-allowed",
      focus: "focus:ring-button-primary",
    },
    outline: {
      base: "bg-transparent text-label-primary border border-outline-primary",
      hover: "hover:bg-surface-white-hover",
      pressed: "active:bg-surface-white-pressed",
      disabled:
        "disabled:bg-transparent disabled:text-label-disabled disabled:border-outline-primary disabled:cursor-not-allowed",
      focus: "focus:ring-button-primary",
    },
    ghost: {
      base: "bg-transparent text-label-secondary",
      hover: "hover:bg-surface-white-hover hover:text-label-primary",
      pressed: "active:bg-surface-white-pressed active:text-label-primary",
      disabled: "disabled:text-label-disabled disabled:cursor-not-allowed",
      focus: "focus:ring-neutral-400",
    },
  };

  const sizeClasses = {
    xs: "text-xs h-9 px-3 radius-md",
    sm: "text-sm h-11 px-4 radius-md",
    big: "text-base h-[54px] px-5 radius-lg",
  };

  const currentVariant = variantClasses[variant];

  // Default plus icon if leftIcon is true but no specific icon provided
  const defaultPlusIcon = (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0">
      <path
        d="M5 1V9M1 5H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const iconToRender = leftIcon === true ? defaultPlusIcon : leftIcon;

  return (
    <button
      className={cn(
        baseClasses,
        currentVariant.base,
        currentVariant.hover,
        currentVariant.pressed,
        currentVariant.disabled,
        currentVariant.focus,
        sizeClasses[size],
        loading && "cursor-wait",
        className,
      )}
      disabled={disabled || loading}
      {...props}>
      <span className="flex items-center justify-center gap-2">
        {loading && (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {iconToRender && !loading && (
          <span className="flex items-center justify-center">
            {iconToRender}
          </span>
        )}
        {children}
      </span>
    </button>
  );
};

export { Button };
