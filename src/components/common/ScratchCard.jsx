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

    const scratchGradient = ctx.createLinearGradient(0, 0, width, height);
    scratchGradient.addColorStop(0, getThemeColor("--color-pure-platinum"));
    scratchGradient.addColorStop(0.2, getThemeColor("--color-white"));
    scratchGradient.addColorStop(
      0.45,
      getThemeColor("--color-metallic-silver"),
    );
    scratchGradient.addColorStop(0.7, getThemeColor("--color-pure-platinum"));
    scratchGradient.addColorStop(1, getThemeColor("--color-metallic-silver"));
    ctx.fillStyle = scratchGradient;
    ctx.fillRect(0, 0, width, height);

    const sheen = ctx.createLinearGradient(0, 0, width, 0);
    sheen.addColorStop(0, getThemeColor("--color-white-veil"));
    sheen.addColorStop(0.18, getThemeColor("--color-white"));
    sheen.addColorStop(0.32, getThemeColor("--color-white-frost"));
    sheen.addColorStop(0.72, getThemeColor("--color-white-soft"));
    sheen.addColorStop(1, getThemeColor("--color-white-veil"));
    ctx.fillStyle = sheen;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = getThemeColor("--color-text-secondary");
    ctx.font = "800 18px sans-serif";
    ctx.textAlign = "center";
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.fillText(" SCRATCH CARD ", width / 2, height / 2 + 6);
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
    ctx.arc(x, y, 16, 0, Math.PI * 2);
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
        onReveal("+ ₹100 BONUS!");
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

  const prizeText = "+ ₹100 BONUS!";

  return (
    <div
      className="relative w-full h-32 rounded-xl overflow-hidden shadow-inner flex items-center justify-center select-none border"
      style={{
        background:
          "linear-gradient(135deg, var(--color-login-warm-white) 0%, var(--color-login-pale-gold) 28%, var(--color-login-button-light) 60%, var(--color-login-coin-circle) 100%)",
        borderColor: "var(--color-success-border)",
        boxShadow:
          "0 12px 22px var(--color-success-soft), inset 0 1px 0 var(--color-white-over)",
      }}
    >
      {/* Inline styles for the sequential character bounce */}
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

      {/* 1. Underlying Prize Layer */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center space-y-1"
        style={{
          background:
            "linear-gradient(135deg, var(--color-login-warm-white) 0%, var(--color-success) 32%, var(--color-metallic-silver) 62%, var(--color-pure-platinum) 100%)",
        }}
      >
        <span
          className="text-xl font-black tracking-wide flex"
          style={{ color: "var(--color-text-primary)" }}
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
          width={280}
          height={128}
          className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-10"
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
