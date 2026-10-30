import { SectionHeader } from "./common/SectionHeader";
import { Card } from "./common/Card";
import { features } from "../data/gameData";

export function FeaturesSection() {
  return (
    <section className="py-16 bg-slate-950/70 border-y border-slate-800 relative">
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
                  className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 ${item.bg} ${item.color}`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
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
