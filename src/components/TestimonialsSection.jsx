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
                <div
                  className="flex items-center gap-1 mb-4"
                  style={{ color: "var(--color-primary-gold)" }}
                >
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p
                  className="text-xs leading-relaxed mb-6 italic"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  "{t.text}"
                </p>
              </div>
              <div
                className="pt-4 flex items-center justify-between border-t"
                style={{ borderColor: "var(--color-primary-gold-soft-strong)" }}
              >
                <div>
                  <h4
                    className="text-sm font-bold flex items-center gap-1.5"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {t.name}{" "}
                    <CheckCircle
                      className="w-3.5 h-3.5"
                      style={{ color: "var(--color-success)" }}
                    />
                  </h4>
                  <span
                    className="text-[10px]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {t.city}
                  </span>
                </div>
                <span
                  className="text-[10px] font-semibold"
                  style={{ color: "var(--color-text-muted)" }}
                >
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
