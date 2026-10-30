import { Button } from "./common/Button";
import { Download } from "lucide-react";
import logo from "../assets/ksonline.png";

export function Navbar({ onDownload }) {
  return (
    <header
      className="relative z-20 px-4 py-3 sm:py-2 backdrop-blur-md border-b"
      style={{
        background: "rgba(255, 253, 249, 0.85)",
        borderColor: "rgba(212, 175, 55, 0.24)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden"
            style={{ background: "var(--color-surface)" }}
          >
            <img
              src={logo}
              alt="KS Online Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1
              className="text-xl sm:text-2xl font-black tracking-wider leading-none"
              style={{ color: "var(--color-primary-gold)" }}
            >
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
