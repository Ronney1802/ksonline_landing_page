import { Button } from "./common/Button";
import { Download } from "lucide-react";
import logo from "../assets/ksonline.png";

export function Navbar({ onDownload }) {
  return (
    <header
      className="relative z-20 px-4 py-3 sm:py-2 backdrop-blur-md border-b"
      style={{
        background: "var(--color-white-glass)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <div
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center overflow-hidden shadow-md border"
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
