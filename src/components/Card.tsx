import React from "react";
import { cn } from "../utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "image";
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  const baseClasses = "card";

  const variantClasses = {
    default: "bg-base-100 shadow-xl",
    bordered: "card-bordered",
    image: "card-compact",
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("card-body", className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h2 className={cn("card-title", className)} {...props}>
    {children}
  </h2>
);

export const CardActions: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("card-actions justify-end", className)} {...props}>
    {children}
  </div>
);
