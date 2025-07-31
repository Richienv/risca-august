import { cn } from "@/lib/utils";
import { AnimatedCard, AnimatedCardGrid } from "./animated-card";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <AnimatedCardGrid className={className}>
      {children}
    </AnimatedCardGrid>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index = 0,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  index?: number;
}) => {
  return (
    <AnimatedCard
      className={cn("min-h-[18rem]", className)}
      title={title}
      description={description}
      header={header}
      icon={icon}
      index={index}
    />
  );
};
