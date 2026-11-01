import { SectionHeader } from "./common/SectionHeader";
import { howItWorkSteps } from "../data/gameData";

export function HowItWorksSection() {
  return (
    <section
      className="py-20 border-y"
      style={{
        background: "var(--color-white-glass)",
        borderColor: "var(--color-primary-gold-soft-strong)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="SIMPLE 4-STEP PROCESS"
          title="HOW TO START PLAYING ON KS ONLINE"
        />
        <div className="grid md:grid-cols-4 gap-6">
          {howItWorkSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border text-center flex flex-col items-center"
              style={{
                background: "var(--color-card)",
                borderColor: "var(--color-primary-gold-soft-strong)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full font-black text-xl flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary-gold), var(--color-rich-gold))",
                  color: "var(--color-btn-dark)",
                  boxShadow: "0 0 15px var(--color-primary-gold-glow)",
                }}
              >
                {step.num}
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
