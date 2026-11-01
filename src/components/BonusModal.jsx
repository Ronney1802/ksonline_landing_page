import { Download, Gift, Smartphone, X } from "lucide-react";
import { Button } from "./common/Button";
// import { triggerAppRedirection } from "../utils/appLauncher";

export function BonusModal({ isOpen, onClose, rewardText, onDownload }) {
  if (!isOpen) return null;

  // Check if device is Android
  const isAndroid = /Android/i.test(navigator.userAgent);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl border shadow-2xl text-center"
        style={{
          background: "var(--color-card)",
          borderColor: "var(--color-border)",
          boxShadow: "0 0 30px var(--color-primary-gold-glow)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full border transition hover:opacity-80"
          style={{
            background: "var(--color-white-soft)",
            borderColor: "var(--color-border)",
            color: "var(--color-text-secondary)",
          }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Icon Header */}
        <div
          className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 border-2 shadow-lg"
          style={{
            background: "var(--color-primary-gold-soft)",
            borderColor: "var(--color-border-strong)",
            color: "var(--color-primary-gold)",
          }}
        >
          <Gift className="w-8 h-8 animate-bounce" />
        </div>

        {/* Reward Display */}
        <h3
          className="text-xs uppercase font-extrabold tracking-widest mb-1"
          style={{ color: "var(--color-text-muted)" }}
        >
          Congratulations! You Won
        </h3>
        <div
          className="text-2xl sm:text-3xl font-black mb-4 py-2 px-4 rounded-xl border inline-block"
          style={{
            background: "var(--color-success-soft)",
            borderColor: "var(--color-success-border)",
            color: "var(--color-success)",
          }}
        >
          {rewardText}
        </div>

        {/* Conditional Content based on Android vs Other Devices */}
        {isAndroid ? (
          <div>
            <p
              className="text-sm font-bold mb-6 leading-relaxed"
              style={{ color: "var(--color-text-primary)" }}
            >
              Add this bonus point into your wallet instantly by opening or
              installing the official app!
              {/* Add this bonus point into your wallet instantly "Click" on the
              button! */}
            </p>

            <Button
              // onClick={() => {
              //   triggerAppRedirection();
              //   onClose();
              // }}
              onClick={onDownload}
              size="lg"
              fullWidth
              className="py-3 text-sm font-extrabold shadow-lg"
            >
              <Download className="w-4 h-4 stroke-[3]" />
              CLAIM & ADD TO YOUR WALLET
            </Button>
          </div>
        ) : (
          <div
            className="p-4 rounded-2xl border flex items-center gap-3 text-left mt-2"
            style={{
              background: "var(--color-rose-soft)",
              borderColor: "var(--color-rose-border)",
            }}
          >
            <Smartphone className="w-8 h-8 shrink-0 text-red-500" />
            <p
              className="text-xs font-semibold leading-relaxed"
              style={{ color: "var(--color-text-primary)" }}
            >
              This feature only works on{" "}
              <strong style={{ color: "var(--color-tilak-red)" }}>
                Android phones
              </strong>{" "}
              because our app is an exclusive Android app. Please open this
              website on your Android device to claim your bonus!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
