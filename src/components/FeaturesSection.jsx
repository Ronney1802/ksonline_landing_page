import { SectionHeader } from "./common/SectionHeader";
import { Card } from "./common/Card";
import { features } from "../data/gameData";

export function FeaturesSection() {
  return (
    <section
      className="py-16 border-y relative"
      style={{
        background: "rgba(255,255,255,0.28)",
        borderColor: "rgba(212,175,55,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="ULTIMATE TRUST & SPEED"
          title="WHY PLAY ON KS ONLINE?"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="p-6">
                <div
                  className="w-14 h-14 rounded-xl border flex items-center justify-center mb-6"
                  style={{
                    background: item.bg,
                    borderColor: item.border,
                    color: item.color,
                  }}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
