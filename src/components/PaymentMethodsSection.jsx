import { Zap, ShieldCheck, Lock, Check } from "lucide-react";
import { SectionHeader } from "./common/SectionHeader";
import { paymentMethods } from "../data/gameData";

export function PaymentMethodsSection() {
  return (
    <section className="py-16 bg-[#070B19] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="FAST & VERIFIED PAYMENTS"
          title="INSTANT DEPOSIT & WITHDRAWAL OPTIONS"
          description="Support for all major Indian payment gateways with zero fee processing"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {paymentMethods.map((pm, idx) => {
            const IconComponent = pm.icon; // Assign component reference to a capitalized variable
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-gradient-to-b ${pm.bg} border ${pm.border} text-center flex flex-col items-center justify-between hover:scale-[1.03] transition duration-300 shadow-xl`}
              >
                {/* Removed the old one which had direct icons */}
                {/* <div className="text-3xl mb-3">{pm.icon}</div> */}

                {/* Render the lucid-icon component safely here */}
                <div
                  className={`w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center ${pm.color} mb-3 shadow-inner`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                <h4 className="text-sm font-black text-white mb-1">
                  {pm.name}
                </h4>
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <Check className="w-3 h-3" /> {pm.speed}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Zero Processing
            Fee
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" /> Instant Auto Credit
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-blue-400" /> 256-bit Bank Grade
            Security{" "}
          </span>
        </div>
      </div>
    </section>
  );
}
