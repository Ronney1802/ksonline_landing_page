export function Badge({
  children,
  icon: Icon,
  color = "amber",
  className = "",
}) {
  const colorStyles = {
    amber: {
      backgroundColor: "rgba(212, 175, 55, 0.12)",
      borderColor: "rgba(212, 175, 55, 0.5)",
      color: "var(--color-text-primary)",
    },
    green: {
      backgroundColor: "rgba(16, 185, 129, 0.12)",
      borderColor: "rgba(16, 185, 129, 0.42)",
      color: "var(--color-success)",
    },
    blue: {
      backgroundColor: "rgba(37, 99, 235, 0.1)",
      borderColor: "rgba(37, 99, 235, 0.35)",
      color: "var(--color-cobalt-blue)",
    },
    red: {
      backgroundColor: "var(--color-tilak-red)",
      borderColor: "transparent",
      color: "#fff",
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
