"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface LiquidGlassContainerProps {
  children: React.ReactNode
  className?: string
  colorOverlay?: "red" | "yellow" | "blue" | "none"
}

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          {/* Generate turbulent noise for distortion */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />

          {/* Blur the turbulence pattern slightly */}
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />

          {/* Displace the source graphic with the noise */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />

          {/* Apply overall blur on the final result */}
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />

          {/* Output the result */}
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

const colorOverlays = {
  red: "bg-gradient-to-br from-red-400/30 via-red-500/40 to-red-600/50",
  yellow: "bg-gradient-to-br from-yellow-400/30 via-yellow-500/40 to-amber-500/50",
  blue: "bg-gradient-to-br from-blue-500/30 via-blue-600/40 to-blue-700/50",
  none: ""
}

export function LiquidGlassContainer({ 
  children, 
  className, 
  colorOverlay = "none" 
}: LiquidGlassContainerProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Glass effect background - Bottom light effect removed */}
      <div className="absolute top-0 left-0 z-0 h-full w-full 
          shadow-[0_-2px_6px_rgba(0,0,0,0.08),-2px_0_6px_rgba(0,0,0,0.08),2px_0_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_-6px_12px_rgba(255,255,255,0.15),-6px_0_12px_rgba(255,255,255,0.15),6px_0_12px_rgba(255,255,255,0.15)] 
      transition-all 
      dark:shadow-[0_-2px_6px_rgba(0,0,0,0.08),-2px_0_6px_rgba(0,0,0,0.08),2px_0_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_-6px_12px_rgba(0,0,0,0.15),-6px_0_12px_rgba(0,0,0,0.15),6px_0_12px_rgba(0,0,0,0.15)]" />
      
      {/* Backdrop filter container */}
      <div
        className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden"
        style={{ backdropFilter: 'url("#container-glass")' }}
      />

      {/* Color overlay */}
      {colorOverlay !== "none" && (
        <div className={cn("absolute inset-0 z-10", colorOverlays[colorOverlay])} />
      )}

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

      <GlassFilter />
    </div>
  )
}