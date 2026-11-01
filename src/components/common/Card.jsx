export function Card({
  children,
  className = "",
  hoverEffect = true,
  glow = false,
  variant = "default",
  style = {},
}) {
  const baseStyles = "rounded-2xl p-5 border transition-all duration-300";

  const variants = {
    default: {
      background:
        "linear-gradient(180deg, var(--color-white-soft), var(--color-surface-cream))",
      borderColor: "var(--color-primary-gold-border)",
    },
    dark: {
      background: "var(--color-surface)",
      borderColor: "var(--color-primary-gold-soft-strong)",
    },
    gold: {
      background:
        "linear-gradient(90deg, var(--color-surface-ivory), var(--color-surface-sky))",
      borderColor: "var(--color-primary-gold-border-strong)",
    },
  };

  const hoverStyles = hoverEffect
    ? "hover:border-[var(--color-primary-gold)] hover:-translate-y-1"
    : "";
  const glowStyles = glow
    ? { boxShadow: "0 0 25px var(--color-primary-gold-soft-strong)" }
    : { boxShadow: "0 16px 32px var(--color-mist-shadow)" };

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      style={{ ...variants[variant], ...glowStyles, ...style }}
    >
      {children}
    </div>
  );
}
