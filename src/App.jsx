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

export default function App() {
  const handleDownloadAPK = () => {
    const msg = encodeURIComponent(
      "Hi KS Online, I want to download the KS ONLINE V2.0 App and claim my ₹25 signup bonus!",
    );
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  };

  const handleOpenTelegram = () => {
    window.open("https://t.me/ksonline_official", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#070B19] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      {/* Background Lighting Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-500/15 via-blue-600/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -left-32 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute top-[70%] -right-32 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full" />
      </div>

      <LiveTicker />
      <Navbar onDownload={handleDownloadAPK} />

      <main className="relative z-10">
        <HeroSection
          onDownload={handleDownloadAPK}
          onTelegram={handleOpenTelegram}
        />
        <GameRatesSection onDownload={handleDownloadAPK} />
        <FeaturesSection />
        <HowItWorksSection />
        <PaymentMethodsSection />
        <TestimonialsSection />
        <FaqSection />
      </main>

      <Footer onDownload={handleDownloadAPK} />
    </div>
  );
}
