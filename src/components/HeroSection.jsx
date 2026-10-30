import { useState } from "react";
import {
  ShieldCheck,
  Download,
  // Send,
  Gift,
  Ticket,
  Sparkles,
  Users,
  // RefreshCw,
  ShipWheel,
  Share2,
} from "lucide-react";
import { Button } from "./common/Button";
import { Badge } from "./common/Badge";
import { Card } from "./common/Card";

export function HeroSection({
  onDownload,
  // onTelegram
}) {
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
        {/* Promotional Announcement Banner */}
        <div className="mb-20 p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 border border-amber-400/40 text-center flex flex-wrap items-center justify-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <Badge icon={Gift} color="green">
            NEW PLAYER OFFER
          </Badge>
          <span className="text-sm font-black text-white">
            GET{" "}
            <span className="text-amber-400 text-base">₹25 JOINING BONUS</span>{" "}
            INSTANTLY ON REGISTERING IN THE APK!
          </span>
          Refer & Earn Pill
          <div className="flex items-center gap-2 bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-amber-400/30">
            <Share2 className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-slate-200">
              Refer a Friend & Earn Extra Bonus!
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline & Action Buttons (Clean & Focused) */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <Badge icon={ShieldCheck} color="amber" className="mb-6">
              100% OFFICIAL VERIFIED ANDROID APP
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              PLAY & WIN WITH <space></space>
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                KS ONLINE
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              Welcome to KS Online! Experience instant cash payouts, highest
              market rates, and our exclusive{" "}
              <strong className="text-amber-300">Spin The Wheel</strong> and{" "}
              <strong className="text-amber-300">Scratch & Win</strong>{" "}
              features!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <Button onClick={onDownload} size="md" icon={Download}>
                DOWNLOAD APK V2.0
              </Button>
              {/* <Button
                onClick={onTelegram}
                variant="telegram"
                size="lg"
                icon={Send}
              >
                JOIN TELEGRAM
              </Button> */}
            </div>

            {/* Quick Stats Grid moved right underneath the feature cards to eliminate dead space */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="block text-xl font-black text-amber-400 flex items-center justify-center gap-1">
                  <Users className="w-4 h-4 text-amber-400" /> 10K+
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">
                  Active Players
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="block text-xl font-black text-amber-400">
                  ₹25
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">
                  Signup Bonus
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="block text-xl font-black text-amber-400">
                  Refer & Earn
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">
                  Extra Cash
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: PRIME FEATURES (Spin Wheel & Scratch Card) + Stats Grid underneath */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Prime Features Cards Container */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* FEATURE 1: SPIN THE WHEEL */}
              <Card
                glow
                variant="gold"
                className="relative text-center flex flex-col justify-between p-6 sm:p-7 min-h-[440px] border-amber-500/40 bg-gradient-to-b from-[#0e1938] via-[#0a1228] to-[#060a17]"
              >
                {/* Top Badge */}
                <div className="absolute top-2 right-2">
                  <Badge icon={Sparkles} color="amber">
                    LUCKY SPIN
                  </Badge>
                </div>

                {/* Top Info & Spinner Icon */}
                <div className="pt-2">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/15 border-2 border-amber-400/80 flex items-center justify-center text-amber-300 mb-4 shadow-[0_0_20px_rgba(212,175,55,0.35)]">
                    {/* Spinner Icon Only */}
                    <ShipWheel
                      // className={`w-8 h-8 ${isSpinning ? "animate-spin text-amber-400" : "text-amber-300"}`}
                      className={`w-8 h-8`}
                    />
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2">
                    SPIN A WHEEL
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-[220px] mx-auto">
                    Spin daily inside the app to win instant cash prizes,
                    multipliers & exclusive rewards!
                  </p>
                </div>

                {/* Interactive Spin A Wheel Demo */}
                {/* <div className="my-5 p-4 rounded-xl bg-[#050814] border border-slate-800/90 shadow-inner">
                  <p className="text-[11px] text-amber-400 font-extrabold uppercase tracking-wider mb-2">
                    LUCKY WHEEL DEMO
                  </p>
                  <div className="text-xs font-black text-white h-9 flex items-center justify-center rounded-lg bg-slate-900/80 border border-slate-800 px-2">
                    {isSpinning ? (
                      <span className="text-amber-400 animate-pulse flex items-center gap-1.5 font-bold">
                        <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                        Spinning Wheel...
                      </span>
                    ) : spinResult ? (
                      <span className="text-emerald-400 font-black text-sm flex items-center gap-1">
                        🎉 YOU WON {spinResult}!
                      </span>
                    ) : (
                      <span className="text-slate-400 font-medium">
                        Tap Test Spin to preview
                      </span>
                    )}
                  </div> */}
                <div className="relative w-36 h-36 mx-auto my-2 flex items-center justify-center">
                  <div
                    className="w-full h-full rounded-full border-4 border-amber-400/80 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-transform duration-3000 ease-out flex items-center justify-center bg-gradient-to-tr from-amber-600 via-slate-900 to-amber-400"
                    style={{ transform: `rotate(${wheelRotation}deg)` }}
                  >
                    {/* Wheel Inner Spokes Lines */}
                    <div className="absolute w-full h-[2px] bg-amber-300/40"></div>
                    <div className="absolute w-full h-[2px] bg-amber-300/40 rotate-45"></div>
                    <div className="absolute w-full h-[2px] bg-amber-300/40 rotate-90"></div>
                    <div className="absolute w-full h-[2px] bg-amber-300/40 rotate-[135deg]"></div>

                    <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-amber-400 z-10 flex items-center justify-center">
                      <Gift className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                  {/* Wheel Pointer */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-[14px] border-t-red-500 z-20"></div>
                </div>

                {spinResult ? (
                  <div className="mt-2 text-center p-2 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-bold text-xs animate-bounce">
                    🎉 Won: {spinResult}!
                  </div>
                ) : (
                  <button
                    onClick={handleSpinDemo}
                    disabled={isSpinning}
                    className="mt-3 w-full py-2 px-3 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 hover:from-amber-500/30 hover:to-yellow-500/30 text-amber-300 border border-amber-400/40 text-xs font-extrabold transition tracking-wide active:scale-95"
                  >
                    TEST SPIN NOW
                  </button>
                )}

                {/* Download Action Button */}
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

              {/* FEATURE 2: SCRATCH A CARD */}
              <Card
                glow
                variant="gold"
                className="relative text-center flex flex-col justify-between p-6 sm:p-7 min-h-[440px] border-emerald-500/40 bg-gradient-to-b from-[#091f24] via-[#0a1228] to-[#060a17]"
              >
                {/* Top Badge */}
                <div className="absolute top-2 right-2">
                  <Badge icon={Gift} color="green">
                    DAILY BONUS
                  </Badge>
                </div>

                {/* Top Info & Scratch Card Ticket Icon */}
                <div className="pt-2">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/15 border-2 border-emerald-400/80 flex items-center justify-center text-emerald-300 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.35)]">
                    {/* Scratch Card Ticket Icon Only */}
                    <Ticket className="w-8 h-8 text-emerald-300 rotate-[-12deg]" />
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2">
                    SCRATCH A CARD
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-[220px] mx-auto">
                    Scratch your daily lucky card or get bonus scratch cards
                    when adding balance to credit extra game points straight
                    into your wallet!
                  </p>
                </div>

                {/* Interactive Scratch Card Demo */}
                <div
                  onClick={() => setIsScratched(true)}
                  className="relative w-full h-32 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-dashed border-amber-400/60 cursor-pointer flex flex-col items-center justify-center p-3 text-center overflow-hidden transition-all hover:scale-[1.02]"
                >
                  {!isScratched ? (
                    <div className="space-y-1">
                      <Sparkles className="w-7 h-7 text-amber-400 mx-auto animate-pulse" />
                      <span className="text-xs font-black text-amber-300 block uppercase">
                        Click To Scratch Card
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        Uncover Instant Bonus
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-1 animate-fade-in">
                      <span className="text-2xl font-black text-amber-400 block">
                        + ₹100 BONUS
                      </span>
                      <span className="text-[11px] font-bold text-emerald-400 block">
                        Points Added To Wallet!
                      </span>
                    </div>
                  )}
                </div>

                {/* Download Action Button */}
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
