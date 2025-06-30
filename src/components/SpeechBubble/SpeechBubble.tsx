import React from "react";
import { cn } from "../../utils/cn";

export interface SpeechBubbleProps {
  text: string;
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  text,
  className,
  contentClassName,
  children,
}) => {
  const LeftTail = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute transform -translate-y-1/2 -left-[11px] top-[24px]">
      <path
        d="M2.8063 9.35192L13.5 2V13H3.93936C1.97527 13 1.18781 10.4646 2.8063 9.35192Z"
        className={"fill-white"}
      />
      <path
        d="M12.3 1.5L2.10638 9.42072C0.602286 10.5894 1.42874 13 3.33352 13H13"
        className={"stroke-outline-primary"}
        strokeWidth="2"
      />
    </svg>
  );

  return (
    <div className={cn("relative inline-block", className)}>
      <LeftTail />
      <div
        className={cn(
          "rounded-lg p-3 bg-white border-2 border-outline-primary min-w-40 max-w-[400px] break-words min-h-[50px]",
          contentClassName,
        )}>
        {children ? (
          children
        ) : (
          <div className="text-heading2-m text-label-secondary break-words whitespace-normal">
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export { SpeechBubble };
