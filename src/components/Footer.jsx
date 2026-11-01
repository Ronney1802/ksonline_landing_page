import { Download } from "lucide-react";
import logo from "../assets/ksonline.png";

export default function Footer({ onDownload }) {
  return (
    <footer
      className="border-t py-10 px-4 text-center"
      style={{
        background:
          "linear-gradient(180deg, var(--color-white-soft), var(--color-surface-cream))",
        borderColor: "var(--color-primary-gold-soft-strong)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
            style={{ background: "var(--color-surface)" }}
          >
            <img
              src={logo}
              alt="KS Online Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className="text-xl font-black tracking-wider"
            style={{ color: "var(--color-primary-gold)" }}
          >
            KS ONLINE
          </span>
        </div>

        <p
          className="text-xs max-w-xl leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          KS ONLINE is India's leading trusted platform providing live market
          games, instant withdrawal capabilities, daily spin wheel bonuses, and
          scratch card rewards.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onDownload}
            className="px-5 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center gap-2"
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary-gold), var(--color-rich-gold))",
              color: "var(--color-btn-dark)",
            }}
          >
            <Download className="w-4 h-4 stroke-[3]" />
            DOWNLOAD APK V2.0
          </button>
        </div>

        <div
          className="text-[11px] pt-4 border-t w-full max-w-xl"
          style={{
            color: "var(--color-text-muted)",
            borderColor: "var(--color-primary-gold-soft-strong)",
          }}
        >
          © {new Date().getFullYear()} KS ONLINE Official Portal. All rights
          reserved. Play Responsibly.
        </div>
      </div>
    </footer>
  );
}
