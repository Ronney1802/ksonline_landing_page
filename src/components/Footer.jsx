import {
  Download,
  MessageCircle,
  Headphones,
  Clock,
  PhoneCall,
} from "lucide-react";
import logo from "../assets/ksonline.png";

export default function Footer({ onDownload, onWhatsApp, onCall }) {
  return (
    <footer
      className="border-t py-4 px-4 text-center md:text-left"
      style={{
        background:
          "linear-gradient(180deg, var(--color-white-soft), var(--color-surface-cream))",
        borderColor: "var(--color-primary-gold-soft-strong)",
      }}
    >
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start pb-0 sm:pb-8 pt-2 sm:pt-4 border-b"
        style={{ borderColor: "var(--color-primary-gold-soft-strong)" }}
      >
        {/* Left Column: Logo + Description side-by-side on desktop, with Download Button & Sub-text stacked below */}
        <div className="flex flex-col items-center md:items-start gap-6">
          {/* Logo & Description Side-by-Side on Desktop */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-5 text-center md:text-left">
            <div
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-32 lg:h-32 shrink-0 rounded-2xl flex items-center justify-center overflow-hidden shadow-md border"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <img
                src={logo}
                alt="KS Online Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="text-xs max-w-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              KS ONLINE is India's leading trusted platform providing live
              market games, instant withdrawal capabilities, daily spin wheel
              bonuses, and scratch card features.
            </p>

            {/* Download Button & Sub-text (Placed below description and logo) */}
            <div className="flex flex-col items-center md:items-start gap-2 w-full">
              <button
                onClick={onDownload}
                className="px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-lg hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary-gold), var(--color-rich-gold))",
                  color: "var(--color-btn-dark)",
                }}
              >
                <Download className="w-4 h-4 stroke-[3]" />
                DOWNLOAD APK V2.0
              </button>
              <span
                className="text-[11px]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Secure & Verified APK Download
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact & Support Details (Aligned to right-end on desktop) */}
        <div
          className="flex flex-col items-center gap-3 md:pl-6 md:border-l md:text-right pb-6 sm:pb-0"
          style={{ borderColor: "var(--color-primary-gold-soft-strong)" }}
        >
          <div
            className="flex items-center justify-center md:justify-end gap-2 font-black text-xs uppercase tracking-wider"
            style={{ color: "var(--color-primary-gold)" }}
          >
            <span>24/7 Support Desk</span>
            <Headphones className="w-4 h-4" />
          </div>
          <p
            className="text-xs flex items-center justify-center md:justify-end gap-1.5"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Fast Response Time: Under 5 Minutes
            <Clock className="w-3.5 h-3.5" />
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 pt-2 ">
            <button
              onClick={onWhatsApp}
              className="px-4 py-2 rounded-xl font-bold text-xs transition flex items-center gap-2 border hover:opacity-90"
              style={{
                borderColor: "var(--color-primary-gold)",
                color: "var(--color-text-primary)",
              }}
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              WhatsApp Help
            </button>
            <button
              onClick={onCall}
              className="px-4 py-2 rounded-xl font-bold text-xs transition flex items-center gap-2 border hover:opacity-90"
              style={{
                borderColor: "var(--color-primary-gold)",
                color: "var(--color-text-primary)",
              }}
            >
              <PhoneCall className="w-4 h-4 text-sky-500" />
              +91 XXXXXXXXXX
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className="max-w-7xl mx-auto pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px]"
        style={{ color: "var(--color-text-muted)" }}
      >
        <p>
          © {new Date().getFullYear()} KS ONLINE Official Portal. All rights
          reserved.
        </p>
        <p className="mt-1 sm:mt-0">Play Responsibly • 18+ Only</p>
      </div>
    </footer>
  );
}
