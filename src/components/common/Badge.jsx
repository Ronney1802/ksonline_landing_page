export function Badge({
  children,
  icon: Icon,
  color = "amber",
  className = "",
}) {
  const colorStyles = {
    amber: "bg-amber-500/10 border-amber-400/40 text-amber-300",
    green: "bg-emerald-500/10 border-emerald-400/40 text-emerald-300",
    blue: "bg-blue-500/10 border-blue-400/40 text-blue-300",
    red: "bg-red-600 text-white font-extrabold uppercase",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold border ${colorStyles[color]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      {children}
    </span>
  );
}
