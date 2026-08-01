import React, { useState, useEffect } from "react";
import { ShieldCheck, ArrowRight, X } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigation } from "../navigation/NavigationContext";

export default function CookieConsent() {
  const { t } = useTranslation();
  const { navigateTo } = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  const openPrivacy = () => navigateTo("privacy");

  useEffect(() => {
    // Only technical/functional storage is used on this site (language,
    // eco-mode, and this consent flag itself) — there is no analytics or
    // marketing storage, so a single "necessary" category with a plain
    // accept/reject choice is all that's needed here.
    const accepted = localStorage.getItem("trustnode_cookies_accepted");
    const rejected = localStorage.getItem("trustnode_cookies_rejected");
    if (!accepted && !rejected) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // show after 1.5s delay to be non-obtrusive
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("trustnode_cookies_accepted", "true");
    localStorage.removeItem("trustnode_cookies_rejected");
    setIsVisible(false);
  };

  const handleReject = () => {
    // Rejecting only hides the banner and records the choice — it never
    // blocks core site functionality, since the only storage in use
    // (language, eco-mode) is necessary/functional, not optional tracking.
    localStorage.setItem("trustnode_cookies_rejected", "true");
    localStorage.removeItem("trustnode_cookies_accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed left-4 right-4 md:left-auto md:right-4 md:max-w-md z-45 animate-slide-up"
      style={{ bottom: "max(1rem, calc(env(safe-area-inset-bottom) + 0.5rem))" }}
      id="cookie-consent-banner"
    >
      <div className="p-4 sm:p-5 rounded-2xl border border-[#2E7DFF]/30 bg-[#0F0F12]/95 backdrop-blur-md text-[#F5F5F0] shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex flex-col gap-4">
        
        {/* Banner Body */}
        <div className="flex gap-3 items-start text-left">
          <div className="w-9 h-9 rounded-xl bg-[#2E7DFF]/10 border border-[#2E7DFF]/20 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5 text-[#2E7DFF]" />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="font-mono text-[9px] tracking-wider text-[#2E7DFF] uppercase font-bold block whitespace-normal break-words max-w-full">
              {t.cookie.badgeLabel}
            </span>
            <p className="font-sans text-xs text-gray-300 leading-relaxed">
              {t.cookie.text}{" "}
              <button 
                onClick={openPrivacy}
                className="text-[#2E7DFF] hover:underline cursor-pointer inline-flex items-center font-semibold"
              >
                {t.cookie.privacyLinkText}
              </button>{" "}
              {t.cookie.suffix}
            </p>
          </div>
        </div>

        {/* Banner Actions */}
        <div className="flex items-center justify-between gap-3 pt-2 border-t border-[#1F2937]/30">
          <button
            onClick={openPrivacy}
            className="font-mono text-[10px] text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {t.cookie.audit}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReject}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-transparent border border-[#1F2937] hover:border-gray-500 text-xs font-sans font-semibold text-gray-300 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>{t.cookie.reject}</span>
            </button>

            <button
              onClick={handleAccept}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2E7DFF] hover:bg-[#2E7DFF]/85 text-xs font-sans font-semibold text-white transition-all hover:shadow-[0_0_12px_rgba(46,125,255,0.25)] cursor-pointer"
            >
              <span>{t.cookie.accept}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
