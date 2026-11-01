import { useState, useRef, useEffect } from "react";
import {
  ShieldCheck,
  Download,
  Gift,
  Ticket,
  Sparkles,
  Users,
  ShipWheel,
  Share2,
} from "lucide-react";
import { Button } from "./common/Button";
import { Badge } from "./common/Badge";
import { Card } from "./common/Card";
import { ScratchCard } from "./common/ScratchCard";
import wheelSpinAudio from "../assets/wheelSpin.mp3";
import { BonusModal } from "./BonusModal";

export function HeroSection({ onDownload }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState(null);

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wonReward, setWonReward] = useState("");

  // New states for precise rotation and dynamic timing
  const [rotation, setRotation] = useState(0);
  const [spinDuration, setSpinDuration] = useState(4); // default duration in seconds

  const spinAudioRef = useRef(null);

  const rewards = [
    "🎉 ₹100 Bonus",
    "🎉 ₹300 Bonus",
    "🎉 ₹500 Bonus",
    "🎉 ₹1000 Bonus",
  ];

  useEffect(() => {
    spinAudioRef.current = new Audio(wheelSpinAudio);
    spinAudioRef.current.loop = true;

    return () => {
      if (spinAudioRef.current) {
        spinAudioRef.current.pause();
        spinAudioRef.current = null;
      }
    };
  }, []);

  const handleSpinDemo = () => {
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
      spinAudioRef.current.playbackRate = 1.5; // Start fast
      spinAudioRef.current.play().catch((err) => {
        console.log("Audio autoplay blocked by browser policy:", err);
      });

      const startTime = performance.now();
      const durationMs = randomDuration * 1000;

      // Frame-by-frame loop to slow down audio matching the cubic-bezier slowdown
      const updateAudioSpeed = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        if (spinAudioRef.current && isSpinning) {
          // Approximating cubic-bezier deceleration curve: drops speed from 1.5 down to 0.15
          const easeOutRate = 1.5 - Math.pow(progress, 2.5) * 1.35;
          spinAudioRef.current.playbackRate = Math.max(0.15, easeOutRate);

          if (progress < 1) {
            requestAnimationFrame(updateAudioSpeed);
          }
        }
      };
      requestAnimationFrame(updateAudioSpeed);
    }

    // 5. Stop spinning and reveal result after randomized duration
    setTimeout(() => {
      setSpinResult(chosenReward);
      setIsSpinning(false);

      if (spinAudioRef.current) {
        spinAudioRef.current.pause();
        spinAudioRef.current.currentTime = 0;
        spinAudioRef.current.playbackRate = 1.0; // Reset playback rate
      }

      // Automatically open modal once result is loaded
      setWonReward(chosenReward);
      setIsModalOpen(true);
    }, randomDuration * 1000);
  };

  // Handler for when scratch card is fully revealed
  const handleCardReveal = (rewardText) => {
    setWonReward(rewardText);
    setIsModalOpen(true);
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden z-10">
      {/* Render the Bonus Modal */}
      <BonusModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rewardText={wonReward}
        onDownload={onDownload}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mb-20 p-3 rounded-2xl border text-center flex flex-wrap items-center justify-center gap-3 shadow-[0_0_20px_var(--color-primary-gold-soft)]"
          style={{
            background:
              "linear-gradient(90deg, var(--color-primary-gold-veil), var(--color-white-glass), var(--color-primary-gold-veil))",
            borderColor: "var(--color-primary-gold-border-strong)",
          }}
        >
          <Badge icon={Gift} color="green">
            NEW PLAYER OFFER
          </Badge>
          <span
            className="text-sm font-black"
            style={{ color: "var(--color-text-primary)" }}
          >
            GET{" "}
            <span
              className="text-base"
              style={{ color: "var(--color-primary-gold)" }}
            >
              ₹25 JOINING BONUS
            </span>{" "}
            INSTANTLY ON REGISTERING IN THE APK!
          </span>
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border"
            style={{
              background: "var(--color-white-frost)",
              borderColor: "var(--color-primary-gold-border-strong)",
            }}
          >
            <Share2
              className="w-4 h-4"
              style={{ color: "var(--color-electric-cyan)" }}
            />
            <span
              className="text-xs font-bold"
              style={{ color: "var(--color-text-primary)" }}
            >
              Refer a Friend & Earn Extra Bonus!
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 text-center lg:text-left">
            <Badge icon={ShieldCheck} color="amber" className="mb-6">
              100% OFFICIAL VERIFIED ANDROID APP
            </Badge>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              PLAY & WIN WITH
              <span
                className="block mt-2"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-rich-gold), var(--color-primary-gold), var(--color-deep-gold))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                KS ONLINE
              </span>
            </h1>

            <p
              className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Welcome to KS Online! Experience instant cash payouts, highest
              market rates, and our exclusive{" "}
              <strong style={{ color: "var(--color-primary-gold)" }}>
                Spin The Wheel
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--color-primary-gold)" }}>
                Scratch & Win
              </strong>{" "}
              features!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <Button onClick={onDownload} size="md" icon={Download}>
                DOWNLOAD APK V2.0
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div
                className="p-3 rounded-xl border text-center"
                style={{
                  background: "var(--color-card)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span
                  className="block text-xl font-black flex items-center justify-center gap-1"
                  style={{ color: "var(--color-primary-gold)" }}
                >
                  <Users
                    className="w-4 h-4"
                    style={{ color: "var(--color-primary-gold)" }}
                  />{" "}
                  10K+
                </span>
                <span
                  className="text-[10px] uppercase font-semibold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Active Players
                </span>
              </div>
              <div
                className="p-3 rounded-xl border text-center"
                style={{
                  background: "var(--color-card)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span
                  className="block text-xl font-black"
                  style={{ color: "var(--color-primary-gold)" }}
                >
                  ₹25
                </span>
                <span
                  className="text-[10px] uppercase font-semibold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Signup Bonus
                </span>
              </div>
              <div
                className="p-3 rounded-xl border text-center"
                style={{
                  background: "var(--color-card)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span
                  className="block text-xl font-black"
                  style={{ color: "var(--color-primary-gold)" }}
                >
                  Refer & Earn
                </span>
                <span
                  className="text-[10px] uppercase font-semibold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Extra Cash
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card
                glow
                variant="gold"
                className="relative text-center flex flex-col justify-between p-6 sm:p-7 min-h-[440px]"
                style={{
                  background:
                    "linear-gradient(180deg, var(--color-surface-ivory), var(--color-white-soft))",
                  borderColor: "var(--color-primary-gold-border-bright)",
                }}
              >
                <div className="absolute top-2 right-2">
                  <Badge icon={Sparkles} color="amber">
                    LUCKY SPIN
                  </Badge>
                </div>

                <div className="pt-2">
                  <div
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 border-2"
                    style={{
                      background: "var(--color-primary-gold-soft)",
                      borderColor: "var(--color-border-strong)",
                      color: "var(--color-primary-gold)",
                    }}
                  >
                    <ShipWheel className="w-8 h-8" />
                  </div>

                  <h3
                    className="text-xl font-black uppercase tracking-wider mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    SPIN A WHEEL
                  </h3>
                  <p
                    className="text-xs leading-relaxed max-w-[220px] mx-auto"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Spin daily inside the app to win instant cash prizes,
                    multipliers & exclusive rewards!
                  </p>
                </div>

                <div className="relative w-36 h-36 mx-auto my-2 flex items-center justify-center">
                  {/* Wheel Element with Controlled Dynamic Transform and Transition */}
                  <div
                    className="w-full h-full rounded-full border-4 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary-gold), var(--color-dark-navy), var(--color-primary-gold-panel))",
                      borderColor: "var(--color-primary-gold-border-bright)",
                      boxShadow: "0 0 20px var(--color-primary-gold-glow)",
                      transform: `rotate(${rotation}deg)`,
                      transition: `transform ${spinDuration}s cubic-bezier(0.15, 0.85, 0.15, 1)`,
                    }}
                  >
                    <div className="absolute w-full h-[2px] bg-[var(--color-white-veil)]"></div>
                    <div className="absolute w-full h-[2px] bg-[var(--color-white-veil)] rotate-[30deg]"></div>
                    <div className="absolute w-full h-[2px] bg-[var(--color-white-veil)] rotate-[60deg]"></div>
                    <div className="absolute w-full h-[2px] bg-[var(--color-white-veil)] rotate-[90deg]"></div>
                    <div className="absolute w-full h-[2px] bg-[var(--color-white-veil)] rotate-[120deg]"></div>
                    <div className="absolute w-full h-[2px] bg-[var(--color-white-veil)] rotate-[150deg]"></div>
                    <div
                      className="w-10 h-10 rounded-full border-2 z-10 flex items-center justify-center"
                      style={{
                        background: "var(--color-card)",
                        borderColor: "var(--color-primary-gold-border-bright)",
                      }}
                    >
                      <Gift
                        className="w-5 h-5"
                        style={{ color: "var(--color-primary-gold)" }}
                      />
                    </div>
                  </div>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-[14px] border-t-[var(--color-tilak-red)] z-20"></div>
                </div>

                {spinResult ? (
                  <div
                    className="mt-2 text-center p-2 rounded-lg border font-bold text-xs animate-bounce"
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
                    onClick={handleSpinDemo}
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

                <Button
                  onClick={onDownload}
                  size="sm"
                  fullWidth
                  className="mt-2"
                >
                  <Download className="w-3.5 h-3.5 stroke-[3]" />
                  DAILY SPIN & WIN IN APP
                </Button>
              </Card>

              <Card
                glow
                variant="gold"
                className="relative text-center flex flex-col justify-between p-6 sm:p-7 min-h-[440px]"
                style={{
                  background:
                    "linear-gradient(180deg, var(--color-login-input-fill), var(--color-white-soft))",
                  borderColor: "var(--color-success-border-strong)",
                }}
              >
                <div className="absolute top-2 right-2">
                  <Badge icon={Gift} color="green">
                    DAILY BONUS
                  </Badge>
                </div>

                <div className="pt-2">
                  <div
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 border-2"
                    style={{
                      background: "var(--color-success-soft)",
                      borderColor: "var(--color-success-border-strong)",
                      color: "var(--color-success)",
                    }}
                  >
                    <Ticket className="w-8 h-8 rotate-[-12deg]" />
                  </div>

                  <h3
                    className="text-xl font-black uppercase tracking-wider mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    SCRATCH A CARD
                  </h3>
                  <p
                    className="text-xs leading-relaxed max-w-[220px] mx-auto mb-4"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Scratch your daily lucky card or get bonus scratch cards
                    when adding balance to credit extra game points straight
                    into your wallet!
                  </p>
                </div>

                <div className="my-2">
                  {/* <ScratchCard /> */}
                  <ScratchCard onReveal={handleCardReveal} />
                </div>

                <Button
                  onClick={onDownload}
                  size="sm"
                  variant="emerald"
                  className="mt-4"
                >
                  <Download className="w-3.5 h-3.5 stroke-[3]" />
                  Get Unlimited Cards On App
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
