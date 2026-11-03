import { useState } from "react";
import {
  ShieldCheck,
  Download,
  Gift,
  Star,
  Sparkles,
  Users,
  ShipWheel,
  Share2,
} from "lucide-react";
import { Button } from "./common/Button";
import { Badge } from "./common/Badge";
import { Card } from "./common/Card";
import { ScratchCard } from "./common/ScratchCard";
import { SpinWheel } from "./common/SpinWheel";
import { BonusModal } from "./common/BonusModal";

export function HeroSection({ onDownload }) {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wonReward, setWonReward] = useState("");
  const [modalType, setModalType] = useState("spin");

  const handleRewardWon = (rewardText) => {
    setWonReward(rewardText);
    setModalType("spin");
    setIsModalOpen(true);
  };

  // Handler for when scratch card is fully revealed
  const handleCardReveal = (rewardText) => {
    setWonReward(rewardText);
    setModalType("scratch");
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
        type={modalType}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mb-12 p-3 rounded-2xl border text-center flex flex-wrap items-center justify-center gap-3 shadow-[0_0_20px_var(--color-primary-gold-soft)]"
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
            <Badge icon={ShieldCheck} color="amber" className="mb-4">
              100% OFFICIAL VERIFIED ANDROID APP
            </Badge>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              PLAY & WIN WITH
              <span
                className="block mt-0"
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
              {/* Feature 1 : Wheel Spinner */}
              <Card
                glow
                variant="gold"
                className="relative text-center flex flex-col justify-between p-6 sm:p-7 min-h-[440px]"
                style={{
                  background:
                    "linear-gradient(180deg, var(--color-login-warm-white) 0%, var(--color-white-soft) 100%)",
                  borderColor: "var(--color-primary-gold-border-bright)",
                  boxShadow:
                    "0 20px 40px var(--color-primary-gold-glow), inset 0 1px 0 var(--color-white-over)",
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
                      borderColor: "var(--color-primary-gold-border-strong)",
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
                    Spin daily inside the app to win instant cash prizes.
                  </p>
                </div>

                {/* Extracted SpinWheel Component */}
                <SpinWheel onRewardWon={handleRewardWon} />

                <Button
                  onClick={onDownload}
                  size="sm"
                  fullWidth
                  className="mt-2"
                  variant="gold"
                >
                  <Download className="w-3.5 h-3.5 stroke-[3]" />
                  DAILY SPIN & WIN IN APP
                </Button>
              </Card>

              {/* Feature 2 : Scratch Card */}
              <Card
                glow
                variant="gold"
                className="relative text-center flex flex-col justify-between p-6 sm:p-7 min-h-[440px]"
                style={{
                  background:
                    "linear-gradient(145deg, var(--color-surface-ivory) 0%, var(--color-white-soft) 58%, var(--color-primary-gold-veil) 100%)",
                  borderColor: "var(--color-primary-gold-border-bright)",
                  boxShadow:
                    "0 20px 40px var(--color-primary-gold-glow), inset 0 1px 0 var(--color-white-over)",
                }}
              >
                <div className="absolute top-2 right-2">
                  <Badge icon={Gift} color="amber">
                    DAILY BONUS
                  </Badge>
                </div>

                <div className="pt-2">
                  <div
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 border-2"
                    style={{
                      background: "var(--color-primary-gold-soft)",
                      borderColor: "var(--color-primary-gold-border-strong)",
                      color: "var(--color-primary-gold)",
                    }}
                  >
                    <Star className="w-8 h-8 rotate-[-12deg] fill-current" />
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
                  {/* Extracted ScratchCard Component */}
                  <ScratchCard onReveal={handleCardReveal} />
                </div>

                <Button
                  onClick={onDownload}
                  size="sm"
                  variant="gold"
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
