import { LiveTicker } from "./components/LiveTicker";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { GameRatesSection } from "./components/GameRatesSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { PaymentMethodsSection } from "./components/PaymentMethodsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import Footer from "./components/Footer";
import { Links } from "./utils/constant";

export default function App() {
  const handleOpenWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hi KS Online, I want to learn about the app!",
    );
    window.open(`https://wa.me/${Links.whatsappNumber}?text=${msg}`, "_blank");
  };

  const handleOpenTelegram = () => {
    window.open(`https://t.me/${Links.telegramUsername}`, "_blank");
  };

  const handleDownloadAPK = () => {
    window.open(`assets/download/${Links.apkDownloadUrl}`);
  };

  const handleOpenEmail = () => {
    window.location.href = `mailto:${Links.supportEmail}`;
  };

  const handleCalling = () => {
    window.location.href = `tel:+${Links.whatsappNumber}`;
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] font-sans selection:bg-[var(--color-primary-gold)] selection:text-[var(--color-btn-dark)] overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] blur-[120px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.15), transparent 65%)",
          }}
        />
        <div
          className="absolute top-[40%] -left-32 w-96 h-96 blur-[100px] rounded-full"
          style={{ background: "rgba(37,99,235,0.08)" }}
        />
        <div
          className="absolute top-[70%] -right-32 w-96 h-96 blur-[100px] rounded-full"
          style={{ background: "rgba(212,175,55,0.08)" }}
        />
      </div>

      <LiveTicker />
      <Navbar onDownload={handleDownloadAPK} />
      <main className="relative z-10">
        <HeroSection onDownload={handleDownloadAPK} />
        <GameRatesSection onDownload={handleDownloadAPK} />
        <FeaturesSection />
        <HowItWorksSection />
        <PaymentMethodsSection />
        <TestimonialsSection />
        <FaqSection />
      </main>

      <Footer
        onDownload={handleDownloadAPK}
        onTelegram={handleOpenTelegram}
        onWhatsApp={handleOpenWhatsApp}
        onEmail={handleOpenEmail}
        onCall={handleCalling}
      />
    </div>
  );
}
