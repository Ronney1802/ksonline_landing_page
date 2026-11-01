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
      borderColor: "var(--color-primary-gold-border-bright)",
      boxShadow: "0 0 20px var(--color-primary-gold-glow)",
    },
    telegram: {
      background: "var(--color-cobalt-blue)",
      color: "var(--color-white)",
      borderColor: "var(--color-cobalt-blue-border)",
      boxShadow: "0 0 20px var(--color-cobalt-blue-glow)",
    },
    outline: {
      background: "var(--color-surface)",
      color: "var(--color-primary-gold)",
      borderColor: "var(--color-primary-gold-border-strong)",
    },
    emerald: {
      background:
        "linear-gradient(135deg, var(--color-success), var(--color-electric-cyan))",
      color: "var(--color-btn-dark)",
      borderColor: "var(--color-success-border-strong)",
      boxShadow: "0 0 20px var(--color-success-glow)",
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
