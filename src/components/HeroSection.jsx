import { useState } from "react";
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

export function HeroSection({ onDownload }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState(null);
  const [isScratched, setIsScratched] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);

  const handleSpinDemo = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setSpinResult(null);

    const extraSpins = 5 + Math.floor(Math.random() * 5);
    const newRotation =
      wheelRotation + extraSpins * 360 + Math.floor(Math.random() * 360);
    setWheelRotation(newRotation);

    setTimeout(() => {
      const rewards = ["₹100 Bonus", "2x Points", "₹500 Cash", "Jackpot Key"];
      setSpinResult(rewards[Math.floor(Math.random() * rewards.length)]);
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mb-20 p-3 rounded-2xl border text-center flex flex-wrap items-center justify-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.12)]"
          style={{
            background:
              "linear-gradient(90deg, rgba(243,229,171,0.35), rgba(255,255,255,0.85), rgba(243,229,171,0.35))",
            borderColor: "rgba(212, 175, 55, 0.4)",
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
              background: "rgba(255,255,255,0.58)",
              borderColor: "rgba(212, 175, 55, 0.34)",
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
                    "linear-gradient(180deg, rgba(255,250,235,0.95), rgba(255,255,255,0.94))",
                  borderColor: "rgba(212, 175, 55, 0.52)",
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
                      background: "rgba(212,175,55,0.12)",
                      borderColor: "rgba(212,175,55,0.55)",
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
                  <div
                    className="w-full h-full rounded-full border-4 transition-transform duration-3000 ease-out flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(212,175,55,0.95), rgba(15,23,42,0.9), rgba(212,175,55,0.72))",
                      borderColor: "rgba(212,175,55,0.8)",
                      transform: `rotate(${wheelRotation}deg)`,
                      boxShadow: "0 0 20px rgba(212,175,55,0.32)",
                    }}
                  >
                    <div className="absolute w-full h-[2px] bg-[rgba(255,255,255,0.35)]"></div>
                    <div className="absolute w-full h-[2px] bg-[rgba(255,255,255,0.35)] rotate-45"></div>
                    <div className="absolute w-full h-[2px] bg-[rgba(255,255,255,0.35)] rotate-90"></div>
                    <div className="absolute w-full h-[2px] bg-[rgba(255,255,255,0.35)] rotate-[135deg]"></div>

                    <div
                      className="w-10 h-10 rounded-full border-2 z-10 flex items-center justify-center"
                      style={{
                        background: "var(--color-card)",
                        borderColor: "rgba(212,175,55,0.8)",
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
                      background: "rgba(16,185,129,0.12)",
                      borderColor: "rgba(16,185,129,0.45)",
                      color: "var(--color-success)",
                    }}
                  >
                    🎉 Won: {spinResult}!
                  </div>
                ) : (
                  <button
                    onClick={handleSpinDemo}
                    disabled={isSpinning}
                    className="mt-3 w-full py-2 px-3 rounded-lg border text-xs font-extrabold transition tracking-wide active:scale-95"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      borderColor: "rgba(212,175,55,0.42)",
                      color: "var(--color-primary-gold)",
                    }}
                  >
                    TEST SPIN NOW
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
                    "linear-gradient(180deg, rgba(240,248,255,0.95), rgba(255,255,255,0.94))",
                  borderColor: "rgba(16,185,129,0.45)",
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
                      background: "rgba(16,185,129,0.12)",
                      borderColor: "rgba(16,185,129,0.55)",
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
                    className="text-xs leading-relaxed max-w-[220px] mx-auto"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Scratch your daily lucky card or get bonus scratch cards
                    when adding balance to credit extra game points straight
                    into your wallet!
                  </p>
                </div>

                <div
                  onClick={() => setIsScratched(true)}
                  className="relative w-full h-32 rounded-xl border-2 border-dashed cursor-pointer flex flex-col items-center justify-center p-3 text-center overflow-hidden transition-all hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.96), rgba(245,245,245,0.96))",
                    borderColor: "rgba(212,175,55,0.6)",
                  }}
                >
                  {!isScratched ? (
                    <div className="space-y-1">
                      <Sparkles
                        className="w-7 h-7 mx-auto animate-pulse"
                        style={{ color: "var(--color-primary-gold)" }}
                      />
                      <span
                        className="text-xs font-black block uppercase"
                        style={{ color: "var(--color-primary-gold)" }}
                      >
                        Click To Scratch Card
                      </span>
                      <span
                        className="text-[10px] block"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Uncover Instant Bonus
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-1 animate-fade-in">
                      <span
                        className="text-2xl font-black block"
                        style={{ color: "var(--color-primary-gold)" }}
                      >
                        + ₹100 BONUS
                      </span>
                      <span
                        className="text-[11px] font-bold block"
                        style={{ color: "var(--color-success)" }}
                      >
                        Points Added To Wallet!
                      </span>
                    </div>
                  )}
                </div>

                <Button onClick={onDownload} size="sm" variant="emerald">
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
