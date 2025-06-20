import React from "react";
import { cn } from "../utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "image";
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  const baseClasses =
    "card relative overflow-hidden transition-all duration-500 hover:scale-105";

  const variantClasses = {
    default:
      "bg-gradient-to-br from-base-100 to-base-200 shadow-2xl border-2 border-base-300 hover:border-primary/50 rounded-3xl",
    bordered:
      "card-bordered bg-gradient-to-br from-base-100 via-base-200 to-base-100 shadow-xl border-4 border-primary/30 hover:border-primary/60 rounded-2xl",
    image:
      "card-compact bg-gradient-to-br from-base-100 to-base-300 shadow-lg border border-base-300 hover:border-accent/50 rounded-xl",
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000",
        className,
      )}
      {...props}>
      {children}
    </div>
  );
};

const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("card-body p-6 space-y-4", className)} {...props}>
    {children}
  </div>
);

const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h2
    className={cn(
      "card-title text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
      className,
    )}
    {...props}>
    {children}
  </h2>
);

const CardActions: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      "card-actions justify-end pt-4 border-t-2 border-base-300/50",
      className,
    )}
    {...props}>
    {children}
  </div>
);

export { Card, CardBody, CardTitle, CardActions };
