import React from "react";
import { ArrowLeft, ShieldCheck, Lock, Cpu, Smartphone } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigation } from "../navigation/NavigationContext";
import { motion } from "motion/react";
import { RUSTORE_URL, GITHUB_APK_URL } from "./Header";

export default function EarlyAccessPage() {
  const { t } = useTranslation();
  const { navigateTo } = useNavigation();
  const lp = t.earlyAccessPage;

  const featureIcons = [Smartphone, Cpu, Lock];

  return (
    <div className="relative w-full min-h-0 py-8 px-4 flex flex-col items-center justify-start bg-[#050507] overflow-hidden select-none" id="download-root">
      {/* Decorative cyber grids and glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto flex flex-col relative z-10">
        
        {/* Go back header */}
        <button 
          onClick={() => navigateTo("home")}
          className="self-start mb-8 font-mono text-xs text-gray-500 hover:text-[#2E7DFF] flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.04] bg-white/[0.02] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{lp.back}</span>
        </button>

        {/* Badge */}
        <div className="inline-flex self-center items-center gap-2 px-3 py-1 bg-[#101F3B]/40 border border-[#2E7DFF]/20 rounded-full mb-4">
          <ShieldCheck className="w-3 h-3 text-[#2E7DFF] animate-pulse" />
          <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#2E7DFF] uppercase">
            {lp.badge}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-black text-3xl sm:text-5xl text-[#F5F5F0] text-center tracking-tight mb-4 filter drop-shadow-[0_0_15px_rgba(46,125,255,0.15)]">
          {lp.title}
        </h1>
        <p className="font-sans text-sm sm:text-base text-gray-500 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          {lp.subtitle}
        </p>

        {/* Download actions */}
        <div className="max-w-2xl mx-auto w-full mb-12">
          <div className="p-6 sm:p-8 rounded-3xl border border-[#1F2937]/30 bg-[#070709]/75 backdrop-blur-md flex flex-col items-center gap-6">
            <a
              href={RUSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl font-sans text-sm font-bold transition-all duration-300 flex items-center justify-center gap-3 bg-[#2E7DFF] text-white hover:bg-[#2E7DFF]/90 cursor-pointer shadow-[0_0_20px_rgba(46,125,255,0.25)] hover:shadow-[0_0_30px_rgba(46,125,255,0.45)]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {lp.rustoreBtn}
            </a>

            <a
              href={GITHUB_APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl font-sans text-sm font-bold transition-all duration-300 flex items-center justify-center gap-3 bg-[#111A2E] border border-[#2E7DFF]/40 text-gray-200 hover:text-white hover:bg-[#15233D] cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {lp.githubBtn}
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full">
          {[lp.feature1Title, lp.feature2Title, lp.feature3Title].map((title, idx) => {
            const Icon = featureIcons[idx];
            const descs = [lp.feature1Desc, lp.feature2Desc, lp.feature3Desc];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl border border-[#1F2937]/40 bg-[#0F0F12]/80"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0A162C]/80 border border-[#2E7DFF]/25 flex items-center justify-center text-[#2E7DFF] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F5F0] mb-2">
                  {title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {descs[idx]}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <p className="font-mono text-[10px] tracking-widest text-gray-600 text-center uppercase">
          {lp.note}
        </p>
      </div>
    </div>
  );
}
