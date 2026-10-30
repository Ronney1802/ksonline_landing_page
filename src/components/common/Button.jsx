export function Button({
  children,
  variant = "gold",
  size = "md",
  onClick,
  className = "",
  icon: Icon,
  fullWidth = false,
  ...props
}) {
  const baseStyles =
    "font-black uppercase tracking-wider rounded-xl transition duration-300 flex items-center justify-center gap-2 border";

  const variants = {
    gold: "bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 border-amber-200/50 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-[1.02]",
    telegram:
      "bg-blue-600 hover:bg-blue-500 text-white border-blue-400/40 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-[1.02]",
    outline:
      "bg-slate-900/80 text-amber-300 border-amber-500/40 hover:border-amber-400 hover:bg-slate-800 hover:text-white",
    emerald:
      "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 border-emerald-500/40",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs sm:text-sm",
    lg: "px-8 py-4 text-sm sm:text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 shrink-0" />}
      {children}
    </button>
  );
}
