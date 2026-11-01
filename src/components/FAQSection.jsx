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
      className="py-14 border-t"
      style={{
        background: "var(--color-white-gold-soft)",
        borderColor: "var(--color-primary-gold-soft-strong)",
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
                  background: "var(--color-card)",
                  borderColor: isOpen
                    ? "var(--color-primary-gold-border-strong)"
                    : "var(--color-primary-gold-border)",
                  boxShadow: isOpen
                    ? "0 12px 30px var(--color-primary-gold-soft)"
                    : "0 6px 18px var(--color-mist-shadow)",
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base transition-colors duration-200"
                  style={{
                    color: "var(--color-text-primary)",
                    background: isOpen
                      ? "var(--color-surface-alt)"
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
                      style={{ color: "var(--color-metallic-silver)" }}
                    />
                  )}
                </button>
                {isOpen && (
                  <div
                    className="px-6 pb-4 text-xs sm:text-sm leading-relaxed border-t pt-3"
                    style={{
                      color: "var(--color-text-secondary)",
                      borderColor: "var(--color-primary-gold-border)",
                      background: "var(--color-surface-alt)",
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
