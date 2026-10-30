export function SectionHeader({ subtitle, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {subtitle && (
        <h3 className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-2">
          {subtitle}
        </h3>
      )}
      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
        {title}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-3 rounded-full" />
      {description && (
        <p className="text-slate-400 text-xs sm:text-sm mt-3 font-medium">
          {description}
        </p>
      )}
    </div>
  );
}
