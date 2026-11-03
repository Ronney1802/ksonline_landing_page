export function Badge({
  children,
  icon: Icon,
  color = "amber",
  className = "",
}) {
  const colorStyles = {
    amber: {
      backgroundColor: "var(--color-primary-gold-soft)",
      borderColor: "var(--color-border-strong)",
      color: "var(--color-text-primary)",
    },
    green: {
      backgroundColor: "var(--color-success-soft)",
      borderColor: "var(--color-success-border-strong)",
      color: "var(--color-success)",
    },
    blue: {
      backgroundColor: "var(--color-cobalt-blue-soft)",
      borderColor: "var(--color-cobalt-blue-border)",
      color: "var(--color-cobalt-blue)",
    },
    red: {
      backgroundColor: "var(--color-tilak-red)",
      borderColor: "transparent",
      color: "var(--color-white)",
    },
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold border ${className}`}
      style={colorStyles[color]}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      {children}
    </span>
  );
}
