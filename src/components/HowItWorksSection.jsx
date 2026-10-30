import { SectionHeader } from "./common/SectionHeader";
import { howItWorkSteps } from "../data/gameData";

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-slate-950/80 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="SIMPLE 4-STEP PROCESS"
          title="HOW TO START PLAYING ON KS ONLINE"
        />
        <div className="grid md:grid-cols-4 gap-6">
          {howItWorkSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 font-black text-xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                {step.num}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
