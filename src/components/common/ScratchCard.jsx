import { useRef, useEffect, useState } from "react";

const getThemeColor = (token) => {
  if (typeof document === "undefined") return "";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();
};

// Accept onReveal prop
export function ScratchCard({ onReveal }) {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);

  // Initialize canvas overlay
  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.globalCompositeOperation = "source-over";

    // Rich diagonal gold gradient scratch surface matching root variables
    const scratchGradient = ctx.createLinearGradient(0, 0, width, height);
    scratchGradient.addColorStop(0, getThemeColor("--color-deep-gold"));
    scratchGradient.addColorStop(0.3, getThemeColor("--color-primary-gold"));
    scratchGradient.addColorStop(0.6, getThemeColor("--color-rich-gold"));
    scratchGradient.addColorStop(0.85, getThemeColor("--color-primary-gold"));
    scratchGradient.addColorStop(1, getThemeColor("--color-deep-gold"));
    ctx.fillStyle = scratchGradient;
    ctx.fillRect(0, 0, width, height);

    // Sheen overlay effect
    const sheen = ctx.createLinearGradient(0, 0, width, height);
    sheen.addColorStop(0, getThemeColor("--color-white-veil"));
    sheen.addColorStop(0.25, getThemeColor("--color-white-frost"));
    sheen.addColorStop(0.5, getThemeColor("--color-white-veil"));
    sheen.addColorStop(0.75, getThemeColor("--color-white-frost"));
    sheen.addColorStop(1, getThemeColor("--color-white-veil"));
    ctx.fillStyle = sheen;
    ctx.fillRect(0, 0, width, height);

    // Foil text label updated to dark gold color (--color-deep-gold)
    ctx.fillStyle = getThemeColor("--color-deep-gold");
    ctx.font = "800 15px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = getThemeColor("--color-white-veil");
    ctx.shadowBlur = 3;
    ctx.fillText("★ VIP GOLD PASS ★", width / 2, height / 2);
    ctx.shadowBlur = 0;

    setIsRevealed(false);
  };

  useEffect(() => {
    initCanvas();
  }, []);

  // Get mouse/touch coordinates relative to canvas
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  // Scratch action (erasing the canvas)
  const scratch = (e) => {
    if (!isScratching || isRevealed) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getCoordinates(e);

    // Set composition to erase pixels
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  // Auto-reveal prize once 50% of the surface is scratched away
  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }

    const percentage = (transparentPixels / (pixels.length / 4)) * 100;
    if (percentage > 50 && !isRevealed) {
      setIsRevealed(true);

      // Trigger modal popup with the reward amount
      if (onReveal) {
        onReveal("25");
      }
    }
  };

  const handleMouseDown = (e) => {
    setIsScratching(true);
    scratch(e);
  };

  const handleMouseUp = () => {
    setIsScratching(false);
  };

  const prizeText = "+ ₹25 BONUS!";

  return (
    <div
      className="relative w-full h-36 rounded-2xl overflow-hidden flex items-center justify-center select-none border shadow-md"
      style={{
        background:
          "linear-gradient(135deg, var(--color-surface-ivory) 0%, var(--color-login-warm-white) 50%, var(--color-surface) 100%)",
        borderColor: "var(--color-primary-gold-border-bright)",
        boxShadow:
          "0 10px 20px var(--color-primary-gold-glow), inset 0 1px 0 var(--color-white-over)",
      }}
    >
      {/* Inline styles for sequential character bounce */}
      <style>{`
        @keyframes charBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-char-bounce {
          display: inline-block;
          animation: charBounce 0.8s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Underlying Prize Layer with Lighter White/Gold Gradient */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center space-y-1 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, var(--color-surface-ivory) 0%, var(--color-login-warm-white) 50%, var(--color-surface) 100%)",
        }}
      >
        <span
          className="text-xs font-bold mb-1 uppercase tracking-wider"
          style={{ color: "var(--color-text-muted)" }}
        >
          Congratulations!
        </span>
        <span
          className="text-2xl font-black tracking-wide flex"
          style={{ color: "var(--color-deep-gold)" }}
        >
          {prizeText.split("").map((char, index) => (
            <span
              key={index}
              className={isRevealed ? "animate-char-bounce" : ""}
              style={{
                animationDelay: `${index * 0.06}s`,
                whiteSpace: char === " " ? "pre" : "normal",
              }}
            >
              {char}
            </span>
          ))}
        </span>
      </div>

      {/* 2. Top Canvas Scratch Foil Layer */}
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          width={320}
          height={144}
          className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-10 rounded-xl"
          onMouseDown={handleMouseDown}
          onMouseMove={scratch}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={scratch}
          onTouchEnd={handleMouseUp}
        />
      )}
    </div>
  );
}
