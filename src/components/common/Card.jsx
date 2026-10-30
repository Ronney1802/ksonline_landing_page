export function Card({
  children,
  className = "",
  hoverEffect = true,
  glow = false,
  variant = "default",
}) {
  const baseStyles = "rounded-2xl p-5 border transition-all duration-300";

  const variants = {
    default: "bg-gradient-to-b from-slate-900 to-[#0B132B]/80 border-slate-800",
    dark: "bg-[#060a17] border-slate-800",
    gold: "bg-gradient-to-r from-[#0a1228] via-[#101e40] to-[#0a1228] border-amber-500/40",
  };

  const hoverStyles = hoverEffect
    ? "hover:border-amber-500/50 hover:-translate-y-1"
    : "";
  const glowStyles = glow
    ? "shadow-[0_0_25px_rgba(212,175,55,0.15)]"
    : "shadow-lg";

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${glowStyles} ${className}`}
    >
      {children}
    </div>
  );
}
