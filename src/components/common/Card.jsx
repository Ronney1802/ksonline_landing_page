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
        "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(245,239,226,0.96))",
      borderColor: "rgba(212, 175, 55, 0.22)",
    },
    dark: {
      background: "var(--color-surface)",
      borderColor: "rgba(212, 175, 55, 0.18)",
    },
    gold: {
      background:
        "linear-gradient(90deg, rgba(255,250,235,0.96), rgba(241,245,255,0.96))",
      borderColor: "rgba(212, 175, 55, 0.46)",
    },
  };

  const hoverStyles = hoverEffect
    ? "hover:border-[var(--color-primary-gold)] hover:-translate-y-1"
    : "";
  const glowStyles = glow
    ? { boxShadow: "0 0 25px rgba(212, 175, 55, 0.18)" }
    : { boxShadow: "0 16px 32px rgba(15, 23, 42, 0.06)" };

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      style={{ ...variants[variant], ...glowStyles, ...style }}
    >
      {children}
    </div>
  );
}
