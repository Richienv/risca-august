"use client";

import { cn } from "@/lib/utils";

interface GradientBlurProps {
  className?: string;
  size: "small" | "medium" | "large";
  position: "left" | "right" | "center";
  intensity: "low" | "medium" | "high";
}

export function GradientBlur({ className, size, position, intensity }: GradientBlurProps) {
  const sizeClasses = {
    small: "w-48 h-48",
    medium: "w-64 h-64",
    large: "w-96 h-96",
  };

  const positionClasses = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  };

  const intensityClasses = {
    low: "from-red-900/20 to-blue-900/20",
    medium: "from-red-800/30 to-blue-800/30",
    high: "from-red-700/40 to-blue-700/40",
  };

  return (
    <div
      className={cn(
        "absolute pointer-events-none",
        sizeClasses[size],
        positionClasses[position],
        className
      )}
    >
      <div
        className={cn(
          "w-full h-full bg-gradient-to-br rounded-full blur-3xl",
          intensityClasses[intensity]
        )}
      />
    </div>
  );
}
