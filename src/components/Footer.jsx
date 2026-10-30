import { Download } from "lucide-react";
import logo from "../assets/ksonline.png";

export default function Footer({ onDownload }) {
  return (
    <footer className="bg-[#050813] border-t border-slate-800 py-10 px-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          {/* <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 font-black text-lg">
            🔱
          </div> */}
          <div className="w-12 h-12 bg-[#070B19] rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="KS Online Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-black text-amber-400 tracking-wider">
            KS ONLINE
          </span>
        </div>

        <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
          KS ONLINE is India's leading trusted platform providing live market
          games, instant withdrawal capabilities, daily spin wheel bonuses, and
          scratch card rewards.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onDownload}
            className="px-5 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-amber-300 transition flex items-center gap-2"
          >
            <Download className="w-4 h-4 stroke-[3]" />
            DOWNLOAD APK V2.0
          </button>
        </div>

        <div className="text-[11px] text-slate-500 pt-4 border-t border-slate-800/60 w-full max-w-xl">
          © {new Date().getFullYear()} KS ONLINE Official Portal. All rights
          reserved. Play Responsibly.
        </div>
      </div>
    </footer>
  );
}
