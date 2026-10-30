export function LiveTicker() {
  const tickerText = (
    <span
      className="inline-flex items-center gap-2 pr-12"
      style={{ color: "var(--color-text-primary)" }}
    >
      🔥{" "}
      <span
        className="font-bold"
        style={{ color: "var(--color-primary-gold)" }}
      >
        KS ONLINE V2.0
      </span>{" "}
      — Get{" "}
      <span className="font-bold" style={{ color: "var(--color-success)" }}>
        ₹25 WELCOME BONUS
      </span>{" "}
      On First Signup! ⚡️ Download APK Now + Get Daily Lucky Spin To Win
      Exciting Prizes & Scratch Rewards!
    </span>
  );

  return (
    <div
      className="relative z-20 border-b py-2 px-4 shadow-md overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.96), rgba(255,247,224,0.96), rgba(255,255,255,0.96))",
        borderColor: "rgba(212, 175, 55, 0.26)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs font-semibold">
        <span
          className="font-extrabold uppercase px-2.5 py-1 rounded-md text-[10px] tracking-wider flex items-center gap-1 shrink-0 shadow-sm animate-pulse z-10"
          style={{ background: "var(--color-tilak-red)", color: "#fff" }}
        >
          ⚡ LIVE UPDATE
        </span>

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
