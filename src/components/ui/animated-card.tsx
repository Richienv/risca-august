"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedCardProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  index?: number;
}

export const AnimatedCard = ({
  className,
  title,
  description,
  header,
  icon,
  children,
  index = 0,
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
        "bg-card/50 backdrop-blur-sm border border-border/50",
        "hover:bg-card/80 hover:border-primary/20",
        "aura-border",
        isHovered && "aura-glow",
        className
      )}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 gradient-aura-subtle" />
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">
        {header && (
          <motion.div
            className="mb-4 overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {header}
          </motion.div>
        )}

        <div className="space-y-3">
          {icon && (
            <motion.div
              className="text-primary"
              animate={{
                rotate: isHovered ? 5 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.div>
          )}

          {title && (
            <motion.h3
              className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300"
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
          )}

          {description && (
            <motion.p
              className="text-muted-foreground text-sm leading-relaxed"
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Corner glow effect */}
      <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export const AnimatedCardGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// Feature card variant with enhanced effects
export const FeatureCard = ({
  className,
  title,
  description,
  icon,
  index = 0,
}: {
  className?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  index?: number;
}) => {
  return (
    <AnimatedCard
      className={cn("h-full", className)}
      title={title}
      description={description}
      icon={icon}
      index={index}
    />
  );
};

// Testimonial card with avatar support
export const TestimonialCard = ({
  className,
  name,
  role,
  content,
  avatar,
  index = 0,
}: {
  className?: string;
  name: string;
  role: string;
  content: string;
  avatar?: React.ReactNode;
  index?: number;
}) => {
  return (
    <AnimatedCard
      className={cn("h-full", className)}
      index={index}
    >
      <div className="space-y-4">
        <p className="text-muted-foreground italic leading-relaxed">
          "{content}"
        </p>
        
        <div className="flex items-center gap-3">
          {avatar && (
            <div className="flex-shrink-0">
              {avatar}
            </div>
          )}
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};