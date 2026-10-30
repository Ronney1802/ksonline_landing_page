import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeader } from "./common/SectionHeader";
import { faqs } from "../data/gameData";

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      className="py-16 border-t"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.68), rgba(249,245,236,0.9))",
        borderColor: "rgba(212,175,55,0.2)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="FREQUENTLY ASKED QUESTIONS"
          title="GOT QUESTIONS? WE HAVE ANSWERS"
        />
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  borderColor: "rgba(212,175,55,0.18)",
                  boxShadow: isOpen
                    ? "0 12px 30px rgba(212, 175, 55, 0.08)"
                    : "0 6px 18px rgba(15, 23, 42, 0.04)",
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base transition-colors duration-200"
                  style={{
                    color: "var(--color-text-primary)",
                    background: isOpen
                      ? "rgba(243, 229, 171, 0.2)"
                      : "transparent",
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp
                      className="w-5 h-5 shrink-0"
                      style={{ color: "var(--color-primary-gold)" }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-5 h-5 shrink-0"
                      style={{ color: "var(--color-text-muted)" }}
                    />
                  )}
                </button>
                {isOpen && (
                  <div
                    className="px-6 pb-4 text-xs sm:text-sm leading-relaxed border-t pt-3"
                    style={{
                      color: "var(--color-text-secondary)",
                      borderColor: "rgba(212,175,55,0.12)",
                      background: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
