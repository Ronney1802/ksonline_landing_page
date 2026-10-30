import { Zap, ShieldCheck, Lock, Check } from "lucide-react";
import { SectionHeader } from "./common/SectionHeader";
import { paymentMethods } from "../data/gameData";

export function PaymentMethodsSection() {
  return (
    <section
      className="py-16 border-b relative"
      style={{
        background: "rgba(255,255,255,0.3)",
        borderColor: "rgba(212,175,55,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="FAST & VERIFIED PAYMENTS"
          title="INSTANT DEPOSIT & WITHDRAWAL OPTIONS"
          description="Support for all major Indian payment gateways with zero fee processing"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {paymentMethods.map((pm, idx) => {
            const IconComponent = pm.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl border text-center flex flex-col items-center justify-between hover:scale-[1.03] transition duration-300 shadow-xl"
                style={{
                  background: pm.bg,
                  borderColor: pm.border,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl border flex items-center justify-center mb-3 shadow-inner"
                  style={{
                    background: "rgba(255,255,255,0.66)",
                    borderColor: "rgba(212,175,55,0.18)",
                    color: pm.color,
                  }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                <h4
                  className="text-sm font-black mb-1"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {pm.name}
                </h4>
                <span
                  className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded border"
                  style={{
                    color: "var(--color-success)",
                    background: "rgba(16,185,129,0.1)",
                    borderColor: "rgba(16,185,129,0.22)",
                  }}
                >
                  <Check className="w-3 h-3" /> {pm.speed}
                </span>
              </div>
            );
          })}
        </div>
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck
              className="w-4 h-4"
              style={{ color: "var(--color-success)" }}
            />{" "}
            Zero Processing Fee
          </span>
          <span className="flex items-center gap-1.5">
            <Zap
              className="w-4 h-4"
              style={{ color: "var(--color-primary-gold)" }}
            />{" "}
            Instant Auto Credit
          </span>
          <span className="flex items-center gap-1.5">
            <Lock
              className="w-4 h-4"
              style={{ color: "var(--color-cobalt-blue)" }}
            />{" "}
            256-bit Bank Grade Security
          </span>
        </div>
      </div>
    </section>
  );
}
