import { Button } from "./common/Button";
import { Download } from "lucide-react";
import logo from "../assets/ksonline.png";

export function Navbar({ onDownload }) {
  return (
    <header className="relative z-20 bg-[#070b19]/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 sm:py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          {/* Logo container without the external golden border */}
          <div className="w-16 h-16 bg-[#070B19] rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="KS Online Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-wider text-amber-400 leading-none">
              KS ONLINE
            </h1>
          </div>
        </div>

        <Button onClick={onDownload} size="sm">
          <Download className="w-4 h-4 stroke-[3]" />
          DOWNLOAD APK
        </Button>
      </div>
    </header>
  );
}
