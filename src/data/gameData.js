import {
  Dices,
  Star as StarIcon,
  Trophy,
  Gem,
  Crown,
  Zap,
  Sparkles,
  Flame,
  ShieldCheck,
  Headphones,
  Smartphone,
  Wallet,
} from "lucide-react";

export const gameRatesData = {
  all: [
    {
      id: "sd",
      name: "Single Digit",
      rate: "₹95",
      base: "₹10 KA",
      icon: Dices,
      desc: "Single number prediction",
    },
    {
      id: "jd",
      name: "Jodi Digits",
      rate: "₹950",
      base: "₹10 KA",
      icon: StarIcon,
      desc: "Two digit pair market",
    },
    {
      id: "sp",
      name: "Single Pana",
      rate: "₹1500",
      base: "₹10 KA",
      icon: Trophy,
      desc: "Three unique digit pana",
    },
    {
      id: "dp",
      name: "Double Pana",
      rate: "₹3000",
      base: "₹10 KA",
      icon: Gem,
      desc: "Two identical digit pana",
    },
    {
      id: "tp",
      name: "Triple Pana",
      rate: "₹6000",
      base: "₹10 KA",
      icon: Crown,
      desc: "Three identical digit pana",
    },
    {
      id: "hsa",
      name: "Half Sangam A",
      rate: "₹12000",
      base: "₹10 KA",
      icon: Zap,
      desc: "Open Pana & Close Ank",
    },
    {
      id: "hsb",
      name: "Half Sangam B",
      rate: "₹12000",
      base: "₹10 KA",
      icon: Zap,
      desc: "Open Ank & Close Pana",
    },
    {
      id: "fs",
      name: "Full Sangam",
      rate: "₹120000",
      base: "₹10 KA",
      icon: Sparkles,
      desc: "Open Pana & Close Pana",
    },
  ],
  jackpot: [
    {
      id: "jk",
      name: "JACKPOT",
      market: "MAHA MARKET",
      rate: "₹1000",
      base: "₹10 KA",
      icon: Flame,
      desc: "Special Maha Market Highest Payout",
    },
  ],
  starline: [
    {
      id: "sl_sa",
      name: "SINGLE ANK",
      market: "SPECIAL MARKET",
      rate: "₹100",
      base: "₹10 KA",
      icon: StarIcon,
      desc: "Starline hourly single digit",
    },
    {
      id: "sl_sp",
      name: "SINGLE PANA",
      market: "SPECIAL MARKET",
      rate: "₹1600",
      base: "₹10 KA",
      icon: Trophy,
      desc: "Starline single pana market",
    },
    {
      id: "sl_dp",
      name: "DOUBLE PANA",
      market: "SPECIAL MARKET",
      rate: "₹3200",
      base: "₹10 KA",
      icon: Gem,
      desc: "Starline double pana market",
    },
    {
      id: "sl_tp",
      name: "TRIPLE PANA",
      market: "SPECIAL MARKET",
      rate: "₹6000",
      base: "₹10 KA",
      icon: Crown,
      desc: "Starline triple pana market",
    },
  ],
};

export const testimonials = [
  {
    name: "Vikram S.",
    city: "Delhi",
    text: "Downloaded KS Online APK v2.0 and received my ₹25 instantly! Direct UPI withdrawals in 3 mins.",
    rating: 5,
    time: "10 mins ago",
  },
  {
    name: "Rahul M.",
    city: "Mumbai",
    text: "Won ₹1,500 on the Spin Wheel bonus on my first day. Highest rates and super prompt support.",
    rating: 5,
    time: "1 hour ago",
  },
  {
    name: "Anish K.",
    city: "Bangalore",
    text: "Referred 4 friends and got ₹200 bonus credited straight away. Trusted APK with smooth UI.",
    rating: 5,
    time: "3 hours ago",
  },
  {
    name: "Priya R.",
    city: "Jaipur",
    text: "Daily Scratch card bonus gives free points to play every single day. 100% genuine app!",
    rating: 5,
    time: "Yesterday",
  },
];

export const faqs = [
  {
    q: "How do I download and install KS Online APK v2.0?",
    a: 'Click on any "DOWNLOAD APK" button on this website to download the latest Android APK file within seconds.',
  },
  {
    q: "How do I claim the ₹25 Welcome Bonus?",
    a: "Once you install the KS Online APK and sign up, your ₹25 welcome bonus is automatically credited to your playing wallet instantly.",
  },
  {
    q: "How does the Refer & Earn bonus work?",
    a: "Inside the app, share your unique referral link with friends. For every friend who installs the app and play, both you and your friend earn instant cash bonus rewards!",
  },
  {
    q: "How do Spin Wheel and Scratch Card rewards work?",
    a: `Every player gets daily scratch cards to win instant playing bonus points. As well as wheel spins to win extra bonus points. 
    Also when they add balance into their wallet then they recieve more scratch cards as rewards.`,
  },
  {
    q: "What is the minimum deposit and withdrawal limit?",
    a: "Minimum deposit starts at ₹100, and minimum withdrawal is ₹500 with zero charges and instant 24/7 processing via GPay, PhonePe, Paytm, BHIM, or IMPS Bank Transfer.",
  },
];

export const paymentMethods = [
  {
    name: "PhonePe",
    icon: Smartphone,
    speed: "Auto Instant",
    bg: "linear-gradient(180deg, var(--color-purple-soft-strong), var(--color-white-90))",
    border: "var(--color-purple-border)",
    color: "var(--color-purple)",
  },
  {
    name: "Google Pay",
    icon: Wallet,
    speed: "Auto Instant",
    bg: "linear-gradient(180deg, var(--color-cobalt-blue-soft-strong), var(--color-white-90))",
    border: "var(--color-cobalt-blue-border-subtle)",
    color: "var(--color-cobalt-blue)",
  },
  {
    name: "Paytm UPI",
    icon: Zap,
    speed: "Auto Instant",
    bg: "linear-gradient(180deg, var(--color-electric-cyan-soft), var(--color-white-90))",
    border: "var(--color-electric-cyan-border)",
    color: "var(--color-electric-cyan)",
  },
  {
    name: "BHIM UPI",
    icon: ShieldCheck,
    speed: "Instant (1-2 Min)",
    bg: "linear-gradient(180deg, var(--color-primary-gold-soft-medium), var(--color-white-90))",
    border: "var(--color-primary-gold-border-medium)",
    color: "var(--color-primary-gold)",
  },
  {
    name: "Direct Bank Transfer",
    icon: Trophy,
    speed: "24X7 Direct Payout",
    bg: "linear-gradient(180deg, var(--color-success-soft), var(--color-white-90))",
    border: "var(--color-success-border-subtle)",
    color: "var(--color-success)",
  },
];

export const features = [
  {
    icon: Zap,
    color: "var(--color-primary-gold)",
    bg: "var(--color-primary-gold-soft)",
    border: "var(--color-primary-gold-border-bold)",
    title: "Instant Payouts",
    desc: "Receive winning cash directly in your bank account or UPI within 2 to 5 minutes.",
  },
  {
    icon: ShieldCheck,
    color: "var(--color-cobalt-blue)",
    bg: "var(--color-cobalt-blue-soft)",
    border: "var(--color-cobalt-blue-border-medium)",
    title: "100% Security & Safety",
    desc: "High-grade encryption ensures complete anonymity and safe transaction records.",
  },
  {
    icon: Headphones,
    color: "var(--color-success)",
    bg: "var(--color-success-soft-subtle)",
    border: "var(--color-success-border-medium)",
    title: "24x7 Support",
    desc: "Dedicated managers ready round-the-clock to resolve your queries instantly.",
  },
  {
    icon: Trophy,
    color: "var(--color-purple)",
    bg: "var(--color-purple-soft)",
    border: "var(--color-purple-border-strong)",
    title: "Best Rates",
    desc: "Enjoy maximum market rate ratios and guaranteed highest payout multiples across all markets.",
  },
];

export const howItWorkSteps = [
  {
    num: "1",
    title: "Download APK",
    desc: "Click Download APK button to install the KS Online v2.0 app.",
  },
  {
    num: "2",
    title: "Get ₹25 Bonus",
    desc: "Register with your mobile number to claim ₹25 free signup bonus.",
  },
  {
    num: "3",
    title: "Spin & Scratch",
    desc: "Play daily wheel spins and scratch cards to earn extra bonus points.",
  },
  {
    num: "4",
    title: "Instant Payout",
    desc: "Request withdrawal anytime and get cash transferred in 2 mins.",
  },
];
