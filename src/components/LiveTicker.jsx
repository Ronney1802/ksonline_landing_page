export function LiveTicker() {
  const tickerText = (
    <span className="inline-flex items-center gap-2 text-slate-200 pr-12">
      🔥 <span className="text-amber-400 font-bold">KS ONLINE V2.0</span> — Get{" "}
      <span className="text-emerald-400 font-bold">₹25 WELCOME BONUS</span> On
      First Signup! ⚡️ Download APK Now + Get Daily Lucky Spin To Win Exciting
      Prizes & Scratch Rewards!
    </span>
  );

  return (
    <div className="relative z-20 bg-gradient-to-r from-[#0b132b] via-[#09153a] to-[#0b132b] border-b border-amber-500/20 py-2 px-4 shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs font-semibold">
        {/* Fixed Badge */}
        <span className="bg-red-600 text-white font-extrabold uppercase px-2.5 py-1 rounded-md text-[10px] tracking-wider flex items-center gap-1 shrink-0 shadow-sm animate-pulse z-10">
          ⚡ LIVE UPDATE
        </span>

        {/* Seamless Scrolling Track */}
        <div className="overflow-hidden whitespace-nowrap w-full relative flex">
          <div className="flex animate-[scroll_20s_linear_infinite] shrink-0">
            {tickerText}
            {tickerText}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
