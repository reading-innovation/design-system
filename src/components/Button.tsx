import React from "react";
import { cn } from "../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "link" | "outline";
  size?: "xs" | "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  disabled,
  children,
  ...props
}) => {
  const baseClasses = "btn";

  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    ghost: "btn-ghost",
    link: "btn-link",
    outline: "btn-outline",
  };

  const sizeClasses = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "", // Default size
    lg: "btn-lg",
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        loading && "loading",
        className,
      )}
      disabled={disabled || loading}
      {...props}>
      {children}
    </button>
  );
};
