import { useState, useRef, useEffect } from "react";
import { Gift } from "lucide-react";
import wheelSpinAudio from "../../assets/wheelSpin.mp3";

export function SpinWheel({ onRewardWon }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [spinDuration, setSpinDuration] = useState(4);
  const [lightPhase, setLightPhase] = useState(false);

  const spinAudioRef = useRef(null);

  // Expanded rewards list matching multi-segmented wheel layout
  const rewards = [
    "🎉 ₹100 Bonus",
    "Better Luck Next Time",
    "🎉 ₹200 Bonus",
    "🎉 ₹1000 Bonus",
    "Better Luck Next Time",
    "🎉 ₹300 Bonus",
    "🎉 ₹500 Bonus",
    "Better Luck Next Time",
    "🎉 ₹1000 Bonus",
    "🎉 ₹1500 Bonus",
    "Better Luck Next Time",
    "🎉 ₹5000 Bonus",
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
    setSpinResult(null);

    // 1. Randomize duration between 3.5 and 5.5 seconds
    const randomDuration = 3.5 + Math.random() * 2;
    setSpinDuration(randomDuration);

    // 2. Pick a random reward index
    const winningIndex = Math.floor(Math.random() * rewards.length);
    const chosenReward = rewards[winningIndex];

    // 3. Calculate rotation math
    const totalSegments = rewards.length;
    const degreesPerSegment = 360 / totalSegments;

    const extraFullRotations = (5 + Math.floor(Math.random() * 4)) * 360;
    const targetOffset =
      winningIndex * degreesPerSegment + degreesPerSegment / 2;
    const nextRotation =
      rotation + extraFullRotations + (360 - (rotation % 360)) + targetOffset;

    setRotation(nextRotation);

    // 4. Play audio asset and sync pitch/speed deceleration
    if (spinAudioRef.current) {
      spinAudioRef.current.currentTime = 0;
      spinAudioRef.current.playbackRate = 1.5;
      spinAudioRef.current.play().catch((err) => {
        console.log("Audio autoplay blocked by browser policy:", err);
      });

      const startTime = performance.now();
      const durationMs = randomDuration * 1000;

      const updateAudioSpeed = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        if (spinAudioRef.current && isSpinning) {
          const easeOutRate = 1.5 - Math.pow(progress, 2.5) * 1.35;
          spinAudioRef.current.playbackRate = Math.max(0.15, easeOutRate);

          if (progress < 1) {
            requestAnimationFrame(updateAudioSpeed);
          }
        }
      };
      requestAnimationFrame(updateAudioSpeed);
    }

    // 5. Stop spinning and reveal result
    setTimeout(() => {
      setSpinResult(chosenReward);
      setIsSpinning(false);

      if (spinAudioRef.current) {
        spinAudioRef.current.pause();
        spinAudioRef.current.currentTime = 0;
        spinAudioRef.current.playbackRate = 1.0;
      }

      if (onRewardWon) {
        onRewardWon(chosenReward);
      }
    }, randomDuration * 1000);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-36 h-36 mx-auto my-2 flex items-center justify-center">
        {/* Outer Flashing Rim Bulbs */}
        <div
          className="absolute inset-0 rounded-full border-4 border-amber-300 pointer-events-none z-20"
          style={{
            boxShadow: lightPhase
              ? "0 0 15px rgba(243, 229, 171, 0.8)"
              : "0 0 5px rgba(184, 134, 11, 0.4)",
          }}
        ></div>

        {/* Top Triangle Indicator */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[14px] border-t-amber-600 z-30 drop-shadow-md"></div>

        {/* Multi-Segmented Wheel Element */}
        <div
          className="w-full h-full rounded-full border-4 border-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.35)] relative overflow-hidden flex items-center justify-center cursor-pointer"
          onClick={handleSpin}
          style={{
            background:
              "conic-gradient(from 0deg, #10b981 0deg 30deg, #2563eb 30deg 60deg, #b8860b 60deg 90deg, #9254de 90deg 120deg, #10b981 120deg 150deg, #2563eb 150deg 180deg, #b8860b 180deg 210deg, #9254de 210deg 240deg, #10b981 240deg 270deg, #2563eb 270deg 300deg, #b8860b 300deg 330deg, #9254de 330deg 360deg)",
            transform: `rotate(${rotation}deg)`,
            transition: `transform ${spinDuration}s cubic-bezier(0.15, 0.85, 0.15, 1)`,
          }}
        >
          <div
            className="w-10 h-10 rounded-full border-2 z-10 flex items-center justify-center shadow-md"
            style={{
              background: "var(--color-card)",
              borderColor: "var(--color-primary-gold)",
            }}
          >
            <Gift
              className="w-5 h-5"
              style={{ color: "var(--color-primary-gold)" }}
            />
          </div>
        </div>
      </div>

      {spinResult ? (
        <div
          className="mt-2 text-center py-1.5 px-3 rounded-lg border font-bold text-xs animate-bounce w-full"
          style={{
            background: "var(--color-success-soft)",
            borderColor: "var(--color-success-border-strong)",
            color: "var(--color-success)",
          }}
        >
          {spinResult}!
        </div>
      ) : (
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
      )}
    </div>
  );
}
