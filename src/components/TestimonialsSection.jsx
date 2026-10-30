import { Star, CheckCircle } from "lucide-react";
import { SectionHeader } from "./common/SectionHeader";
import { Card } from "./common/Card";
import { testimonials } from "../data/gameData";

export function TestimonialsSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="VERIFIED USER REVIEWS"
          title="WHAT OUR PLAYERS SAY"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {t.name}{" "}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <span className="text-[10px] text-slate-400">{t.city}</span>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold">
                  {t.time}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
