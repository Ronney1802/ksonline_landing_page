import { useState } from "react";
import { Sparkles, Flame, Star as StarIcon, Download } from "lucide-react";
import { SectionHeader } from "./common/SectionHeader";
import { Button } from "./common/Button";
import { Card } from "./common/Card";
import { gameRatesData } from "../data/gameData";

export function GameRatesSection({ onDownload }) {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Game Rates", icon: Sparkles },
    { id: "jackpot", label: "Jackpot", icon: Flame },
    { id: "starline", label: "Starline", icon: StarIcon },
  ];

  return (
    <section className="py-16 relative bg-[#070B19]/90 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Game Rates"
          description="Live market game rates with highest returns."
        />

        {/* Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 border-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                    : "bg-slate-900/90 text-slate-300 border-slate-800 hover:border-amber-500/40 hover:text-amber-300"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        {activeTab === "all" && (
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {gameRatesData.all.map((item) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-amber-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-[#060a17] border border-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2">
                    <span className="text-slate-400">{item.base}</span>
                    <span className="text-amber-400 font-black text-base">
                      {item.rate}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {activeTab === "jackpot" && (
          <div className="max-w-3xl mx-auto">
            {gameRatesData.jackpot.map((item) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={item.id}
                  variant="gold"
                  glow
                  className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-center text-amber-400">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white uppercase">
                        {item.name}
                      </h4>
                      <p className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
                        {item.market}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 py-3 rounded-2xl bg-[#060a17] border border-amber-400/30 text-slate-200 font-bold text-base flex items-center gap-3">
                    <span className="text-slate-400">{item.base}</span>
                    <span className="text-amber-400 font-black text-xl">
                      {item.rate}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {activeTab === "starline" && (
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#0a1228] to-[#080d1d] p-6 sm:p-8 border border-amber-500/30">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {gameRatesData.starline.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-[#060a17] border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-xs font-black text-slate-200 uppercase">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold flex items-center justify-between">
                    <span className="text-slate-400">{item.base}</span>
                    <span className="text-amber-400 font-extrabold">
                      {item.rate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Download APK CTA underneath Rates */}
        <div className="mt-12 text-center">
          <Button
            onClick={onDownload}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 transition duration-300 inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5 stroke-[3]" />
            PLAY AT BEST RATES — DOWNLOAD APP NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
