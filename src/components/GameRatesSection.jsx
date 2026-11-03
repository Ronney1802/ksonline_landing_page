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
    <section
      className="py-12 relative border-t"
      style={{
        background: "var(--color-white-veil)",
        borderColor: "var(--color-primary-gold-soft-strong)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Game Rates"
          description="Live market game rates with highest returns."
        />

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border"
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(90deg, var(--color-primary-gold), var(--color-rich-gold))",
                        color: "var(--color-btn-dark)",
                        borderColor: "var(--color-primary-gold-panel)",
                        boxShadow: "0 0 20px var(--color-primary-gold-glow)",
                        transform: "scale(1.04)",
                      }
                    : {
                        background: "var(--color-card)",
                        color: "var(--color-text-secondary)",
                        borderColor: "var(--color-primary-gold-soft-strong)",
                      }
                }
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

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
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{
                        background: "var(--color-primary-gold-soft)",
                        borderColor: "var(--color-primary-gold-soft-strong)",
                        color: "var(--color-primary-gold)",
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4
                        className="text-base font-bold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {item.name}
                      </h4>
                      <p
                        className="text-[11px]"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-4 py-2 rounded-xl border font-bold text-xs sm:text-sm flex items-center gap-2"
                    style={{
                      background: "var(--color-surface)",
                      borderColor: "var(--color-primary-gold-soft-strong)",
                    }}
                  >
                    <span style={{ color: "var(--color-text-muted)" }}>
                      {item.base}
                    </span>
                    <span
                      className="font-black text-base"
                      style={{ color: "var(--color-primary-gold)" }}
                    >
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
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center border"
                      style={{
                        background: "var(--color-primary-gold-soft)",
                        borderColor: "var(--color-primary-gold-soft-strong)",
                        color: "var(--color-primary-gold)",
                      }}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h4
                        className="text-2xl font-black uppercase"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {item.name}
                      </h4>
                      <p
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: "var(--color-cobalt-blue)" }}
                      >
                        {item.market}
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-6 py-3 rounded-2xl border font-bold text-base flex items-center gap-3"
                    style={{
                      background: "var(--color-surface)",
                      borderColor: "var(--color-primary-gold-border)",
                    }}
                  >
                    <span style={{ color: "var(--color-text-muted)" }}>
                      {item.base}
                    </span>
                    <span
                      className="font-black text-xl"
                      style={{ color: "var(--color-primary-gold)" }}
                    >
                      {item.rate}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {activeTab === "starline" && (
          <div
            className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 border"
            style={{
              background:
                "linear-gradient(180deg, var(--color-white-soft), var(--color-surface-cream))",
              borderColor: "var(--color-primary-gold-border)",
            }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {gameRatesData.starline.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border flex flex-col justify-between"
                  style={{
                    background: "var(--color-surface)",
                    borderColor: "var(--color-primary-gold-soft-strong)",
                  }}
                >
                  <div>
                    <h4
                      className="text-xs font-black uppercase"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {item.name}
                    </h4>
                    <p
                      className="text-[10px] mt-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div
                    className="mt-3 px-3 py-2 rounded-lg border text-xs font-bold flex items-center justify-between"
                    style={{
                      background: "var(--color-surface-card)",
                      borderColor: "var(--color-primary-gold-soft-strong)",
                    }}
                  >
                    <span style={{ color: "var(--color-text-muted)" }}>
                      {item.base}
                    </span>
                    <span
                      className="font-extrabold"
                      style={{ color: "var(--color-primary-gold)" }}
                    >
                      {item.rate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button
            onClick={onDownload}
            className="px-8 py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5 stroke-[3]" />
            PLAY AT BEST RATES — DOWNLOAD APP NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
