import React, { useState } from "react";
import { Check, ShieldCheck, Sparkles, AlertTriangle, ArrowLeft, Clipboard, CheckCircle, Loader2, Download, ExternalLink } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigation } from "../navigation/NavigationContext";
import { motion, AnimatePresence } from "motion/react";

const GITHUB_APK_URL = "https://github.com/TrustNodeLab/trustnodelab.github.io/releases/download/1.2.0/app-arm64-v8a-release.apk";

export default function EarlyAccessPage() {
  const { t, language } = useTranslation();
  const { navigateTo } = useNavigation();

  const [agreed, setAgreed] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [copied, setCopied] = useState(false);
  const [showError, setShowError] = useState(false);

  const lp = t.earlyAccessPage;
  const uiText = {
    ru: {
      back: "Назад на Главную",
      agreementError: "Необходимо принять условия соглашения",
      copy: "Скопировать ID",
      copied: "Скопировано!",
      reset: "← Назад",
      github: "Скачать с GitHub",
      rustore: "Скачать в RUStore",
    },
    en: {
      back: "Back to Main",
      agreementError: "Please agree to the terms to proceed",
      copy: "Copy Ticket ID",
      copied: "Copied!",
      reset: "← Back",
      github: "Download from GitHub",
      rustore: "Download in RUStore",
    },
  }[language === "ru" ? "ru" : "en"];

  const handleGenerateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setIsGenerating(true);

    setTimeout(() => {
      const entropy = crypto.getRandomValues(new Uint32Array(2));
      const blockA = entropy[0].toString(36).slice(-4).toLowerCase();
      const blockB = entropy[1].toString(36).slice(-4).toLowerCase();
      const generatedId = `trustnode-dl-${blockA}-${blockB}`;
      setTicketId(generatedId);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(ticketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full min-h-0 py-8 px-4 flex flex-col items-center justify-start bg-[#050507] overflow-hidden select-none" id="download-root">
      {/* Decorative cyber grids and glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto flex flex-col relative z-10">
        
        {/* Go back header */}
        <button 
          onClick={() => navigateTo("home")}
          className="self-start mb-8 font-mono text-xs text-gray-500 hover:text-[#2E7DFF] flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.04] bg-white/[0.02] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{uiText.back}</span>
        </button>

        {/* Badge */}
        <div className="inline-flex self-center items-center gap-2 px-3 py-1 bg-[#101F3B]/40 border border-[#2E7DFF]/20 rounded-full mb-4">
          <Sparkles className="w-3 h-3 text-[#2E7DFF] animate-pulse" />
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

        <AnimatePresence mode="wait">
          {!ticketId ? (
            <motion.form 
              key="free-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleGenerateTicket}
              className="max-w-2xl mx-auto w-full"
            >
              <div className="p-6 sm:p-8 rounded-3xl border border-[#1F2937]/30 bg-[#070709]/75 backdrop-blur-md flex flex-col items-center gap-6">
                {/* Consent checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5 select-none">
                    <input 
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-lg border transition-all duration-300 flex items-center justify-center ${
                      agreed 
                        ? "bg-[#2E7DFF] border-[#2E7DFF] shadow-[0_0_10px_rgba(46,125,255,0.3)]" 
                        : "border-white/[0.15] bg-[#030304] group-hover:border-[#2E7DFF]/50"
                    }`}>
                      {agreed && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                    </div>
                  </div>
                  <span className="font-sans text-xs text-gray-400 select-none group-hover:text-gray-300 transition-colors leading-relaxed">
                    {lp.checkboxText}
                  </span>
                </label>

                {showError && !agreed && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-rose-500 font-mono text-[10px] uppercase tracking-wider bg-rose-500/5 px-3 py-1.5 rounded-lg border border-rose-500/10"
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{uiText.agreementError}</span>
                  </motion.div>
                )}

                {/* Big Action Submit Button */}
                <button
                  type="submit"
                  disabled={isGenerating}
                  className={`w-full py-4 px-6 rounded-2xl font-sans text-sm font-bold transition-all duration-300 flex items-center justify-center gap-3 ${
                    isGenerating
                      ? "bg-gray-900 text-gray-500 cursor-not-allowed border border-white/[0.04]"
                      : "bg-[#2E7DFF] text-white hover:bg-[#2E7DFF]/90 cursor-pointer shadow-[0_0_20px_rgba(46,125,255,0.25)] hover:shadow-[0_0_30px_rgba(46,125,255,0.45)]"
                  }`}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#2E7DFF]" />
                      <span>{lp.btnGenerating}</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>{lp.btnGetTicket}</span>
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="ticket-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto w-full p-6 sm:p-10 rounded-3xl border border-[#2E7DFF]/35 bg-[#070B14]/90 text-center relative overflow-hidden shadow-2xl"
            >
              {/* Confetti border overlay */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#2E7DFF] to-transparent" />
              <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.06)_0%,transparent_70%)] pointer-events-none" />

              <div className="flex flex-col items-center justify-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#101F3B] border border-[#2E7DFF]/40 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(46,125,255,0.35)]">
                  <CheckCircle className="w-10 h-10 text-emerald-400 animate-pulse" />
                </div>

                <span className="font-mono text-[9px] text-[#2E7DFF] uppercase tracking-[0.2em] font-bold block mb-2">
                  {lp.ticketReadyTitle}
                </span>

                {/* Styled Receipt Ticket Badge */}
                <div className="w-full bg-[#030509] border border-white/[0.04] p-5 sm:p-6 rounded-2xl mb-6 relative">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#070B14] border-r border-white/[0.04]" />
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#070B14] border-l border-white/[0.04]" />
                  
                  <h2 className="font-mono font-bold text-xl sm:text-2xl text-white tracking-normal break-all">
                    {ticketId}
                  </h2>
                </div>

                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md mx-auto mb-8">
                  {lp.ticketReadyInstruction}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                  <button
                    onClick={handleCopy}
                    className="w-full sm:flex-1 py-3.5 px-4 rounded-xl font-sans text-xs font-bold bg-[#111A2E] border border-[#2E7DFF]/40 text-gray-200 hover:text-white hover:bg-[#15233D] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copied ? <Sparkles className="w-4 h-4 text-emerald-400" /> : <Clipboard className="w-4 h-4" />}
                    {copied ? uiText.copied : uiText.copy}
                  </button>
                  <a
                    href={GITHUB_APK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-4 rounded-xl font-sans text-xs font-bold bg-[#111A2E] border border-[#2E7DFF]/40 text-gray-200 hover:text-white hover:bg-[#15233D] transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {uiText.github}
                  </a>
                  <a
                    href="https://github.com/TrustNodeLab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-4 rounded-xl font-sans text-xs font-bold bg-[#111A2E] border border-[#2E7DFF]/40 text-gray-200 hover:text-white hover:bg-[#15233D] transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {language === "ru" ? "GitHub организации" : "GitHub Organization"}
                  </a>
                </div>

                <button
                  onClick={() => setTicketId("")}
                  className="mt-6 font-mono text-[9px] uppercase tracking-widest text-gray-600 hover:text-gray-400 transition-colors cursor-pointer"
                >
                  {uiText.reset}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
