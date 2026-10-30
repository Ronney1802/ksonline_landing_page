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
    gold: {
      background:
        "linear-gradient(135deg, var(--color-primary-gold), var(--color-rich-gold))",
      color: "var(--color-btn-dark)",
      borderColor: "rgba(212, 175, 55, 0.6)",
      boxShadow: "0 0 20px rgba(212, 175, 55, 0.28)",
    },
    telegram: {
      background: "var(--color-cobalt-blue)",
      color: "#fff",
      borderColor: "rgba(37, 99, 235, 0.35)",
      boxShadow: "0 0 20px rgba(37, 99, 235, 0.18)",
    },
    outline: {
      background: "var(--color-surface)",
      color: "var(--color-primary-gold)",
      borderColor: "rgba(212, 175, 55, 0.45)",
    },
    emerald: {
      background: "linear-gradient(135deg, #10b981, #34d399)",
      color: "var(--color-btn-dark)",
      borderColor: "rgba(16, 185, 129, 0.45)",
      boxShadow: "0 0 20px rgba(16, 185, 129, 0.22)",
    },
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs sm:text-sm",
    lg: "px-8 py-4 text-sm sm:text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      style={variants[variant]}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 shrink-0" />}
      {children}
    </button>
  );
}
