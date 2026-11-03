export function SectionHeader({ subtitle, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {subtitle && (
        <h3 className="text-xs font-bold text-[var(--color-primary-gold)] tracking-widest uppercase mb-2">
          {subtitle}
        </h3>
      )}
      <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-text-primary)] tracking-tight uppercase">
        {title}
      </h2>
      <div
        className="w-16 h-1 mx-auto mt-3 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, var(--color-primary-gold), var(--color-deep-gold))",
        }}
      />
      {description && (
        <p className="text-[var(--color-text-secondary)] text-xs sm:text-sm mt-3 font-medium">
          {description}
        </p>
      )}
    </div>
  );
}
