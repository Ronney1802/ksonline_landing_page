import { useState, useRef, useEffect } from "react";
import { AlertCircle, Sparkles, Trophy, Wallet } from "lucide-react";
import wheelSpinAudio from "../../assets/wheelSpin.mp3";

export function SpinWheel({ onRewardWon }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [spinDuration, setSpinDuration] = useState(4);
  const [lightPhase, setLightPhase] = useState(false);

  const spinAudioRef = useRef(null);

  // 10 items matching the wheel layout
  const items = [
    { label: "100", color: "#10b981", icon: Sparkles },
    { label: "200", color: "#9254de", icon: Wallet },
    { label: "Bad Luck", color: "#1e3a8a", icon: AlertCircle },
    { label: "1000", color: "#b8860b", icon: Trophy },
    { label: "300", color: "#10b981", icon: Sparkles },
    { label: "Bad Luck", color: "#1e3a8a", icon: AlertCircle },
    { label: "5000", color: "#b8860b", icon: Trophy },
    { label: "500", color: "#9254de", icon: Wallet },
    { label: "Bad Luck", color: "#1e3a8a", icon: AlertCircle },
    { label: "1500", color: "#b8860b", icon: Trophy },
  ];

  useEffect(() => {
    spinAudioRef.current = new Audio(wheelSpinAudio);
    spinAudioRef.current.loop = true;

    // Flashing light rim animation interval
    const lightInterval = setInterval(() => {
      setLightPhase((prev) => !prev);
    }, 600);

    return () => {
      clearInterval(lightInterval);
      if (spinAudioRef.current) {
        spinAudioRef.current.pause();
        spinAudioRef.current = null;
      }
    };
  }, []);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    // 1. Randomize duration between 3.5 and 5.5 seconds
    const randomDuration = 3.5 + Math.random() * 2;
    setSpinDuration(randomDuration);

    // 2. Pick a random reward index for the animation target
    const winningIndex = Math.floor(Math.random() * items.length);

    // 3. Calculate rotation math
    const totalSegments = items.length;
    const degreesPerSegment = 360 / totalSegments;

    const extraFullRotations = (5 + Math.floor(Math.random() * 4)) * 360;
    const targetOffset =
      winningIndex * degreesPerSegment + degreesPerSegment / 2;
    const nextRotation =
      rotation + extraFullRotations + (360 - (rotation % 360)) + targetOffset;

    setRotation(nextRotation);

    // 4. Realistic Audio Deceleration Sync matching the cubic-bezier slowdown
    if (spinAudioRef.current) {
      spinAudioRef.current.currentTime = 0;
      spinAudioRef.current.playbackRate = 1.6; // Start fast
      spinAudioRef.current.play().catch((err) => {
        console.log("Audio autoplay blocked by browser policy:", err);
      });

      const startTime = performance.now();
      const durationMs = randomDuration * 1000;

      const updateAudioSpeed = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        if (spinAudioRef.current) {
          // Matches the cubic-bezier(0.15, 0.85, 0.15, 1) curve deceleration momentum
          // Gradually drops from 1.6 down to a realistic 0.05 stop speed
          const easeOutRate = 1.6 * Math.pow(1 - progress, 2.2);
          spinAudioRef.current.playbackRate = Math.max(0.05, easeOutRate);

          if (progress < 1) {
            requestAnimationFrame(updateAudioSpeed);
          }
        }
      };
      requestAnimationFrame(updateAudioSpeed);
    }

    // 5. Stop spinning, calculate exact winning segment based on final angle, and reveal result
    setTimeout(() => {
      // Normalize final rotation to 0 - 360 degrees
      const normalizedRotation = nextRotation % 360;
      // Since the wheel rotates clockwise and the pointer is at the top (0 degrees),
      // we find which segment index aligns with the top pointer position.
      const winningIndexFromAngle =
        Math.floor((360 - (normalizedRotation % 360)) / degreesPerSegment) %
        totalSegments;

      const chosenItem = items[winningIndexFromAngle];
      const rewardText = chosenItem.label.includes("Bad Luck")
        ? "Better Luck Next Time!"
        : `${chosenItem.label}`;

      setIsSpinning(false);

      if (spinAudioRef.current) {
        spinAudioRef.current.pause();
        spinAudioRef.current.currentTime = 0;
        spinAudioRef.current.playbackRate = 1.0;
      }

      if (onRewardWon) {
        onRewardWon(rewardText);
      }
    }, randomDuration * 1000);
  };

  const generateConicGradient = () => {
    const slice = 360 / items.length;
    return items
      .map((item, idx) => {
        const start = idx * slice;
        const end = (idx + 1) * slice;
        return `${item.color} ${start}deg ${end}deg`;
      })
      .join(", ");
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Compact Wheel Container */}
      <div className="relative w-40 h-40 mx-auto my-2 flex items-center justify-center">
        {/* Outer Flashing Light Rim Bulbs */}
        <div
          className="absolute inset-0 rounded-full border-[6px] pointer-events-none z-20 transition-all duration-300"
          style={{
            borderColor: "var(--color-primary-gold)",
            boxShadow: lightPhase
              ? "0 0 12px rgba(243, 229, 171, 0.85)"
              : "0 0 4px rgba(184, 134, 11, 0.4)",
          }}
        >
          {Array.from({ length: 14 }).map((_, i) => {
            const angle = ((2 * Math.PI) / 14) * i;
            const x = 50 + 52 * Math.cos(angle);
            const y = 50 + 52 * Math.sin(angle);
            const isOn = i % 2 === 0 ? lightPhase : !lightPhase;
            return (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  background: isOn ? "#f3e5ab" : "#b8860b",
                  boxShadow: isOn ? "0 0 4px #d4af37" : "none",
                }}
              />
            );
          })}
        </div>

        {/* Top Triangle Indicator / Pointer */}
        <div
          className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[12px] z-30 drop-shadow-sm ${
            isSpinning ? "animate-bounce" : ""
          }`}
          style={{ borderTopColor: "#b8860b" }}
        ></div>

        {/* Multi-Segmented Wheel Element */}
        <div
          className="w-[96%] h-[96%] rounded-full border-2 border-amber-300 shadow-inner relative overflow-hidden flex items-center justify-center"
          style={{
            background: `conic-gradient(${generateConicGradient()})`,
            transform: `rotate(${rotation}deg)`,
            transition: `transform ${spinDuration}s cubic-bezier(0.15, 0.85, 0.15, 1)`,
          }}
        >
          {items.map((item, idx) => {
            const angle = (idx * 360) / items.length + 360 / items.length / 2;
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div
                  className="flex flex-col items-center justify-center text-white text-[7px] font-bold drop-shadow-sm"
                  style={{
                    transform: `translateY(-50px) rotate(90deg)`,
                    width: "35px",
                    textAlign: "center",
                  }}
                >
                  <IconComp className="w-2 h-2 mb-0.5" />
                  <span className="leading-tight whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Center SPIN Hub */}
          <div
            onClick={handleSpin}
            className={`w-8 h-8 rounded-full border-2 z-10 flex flex-col items-center justify-center shadow-md cursor-pointer `}
            style={{
              background: "linear-gradient(135deg, #10b981, #087443)",
              borderColor: "#ffffff",
              boxShadow: "0 0 10px rgba(16, 185, 129, 0.6)",
            }}
          >
            <span className="text-white text-[8px] font-black leading-tight text-center">
              SPIN
              <br />
              NOW
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className="mt-3 w-full py-2 px-3 rounded-lg border text-xs font-extrabold transition tracking-wide active:scale-95 disabled:opacity-50"
        style={{
          background: "var(--color-primary-gold-soft)",
          borderColor: "var(--color-primary-gold-border-strong)",
          color: "var(--color-primary-gold)",
        }}
      >
        {isSpinning ? "SPINNING..." : "TEST SPIN NOW"}
      </button>
    </div>
  );
}
