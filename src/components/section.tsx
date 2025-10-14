interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  description,
  children,
  className,
}: SectionProps) {
  const sectionId = title ? title.toLowerCase().replace(/\s+/g, "-") : id;
  return (
    <section id={id || sectionId} className="relative w-full min-h-screen flex flex-col justify-center">
      <div className={`w-full ${className || ''}`}>
        <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 max-w-7xl">
          <div className="text-center space-y-4 pb-8 lg:pb-12 mx-auto">
            {title && (
              <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                {title}
              </h2>
            )}
            {subtitle && (
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent leading-tight tracking-tighter">
                {subtitle}
              </h3>
            )}
            {description && (
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
