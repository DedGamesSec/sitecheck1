import React, { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { LANGUAGES } from "../i18n/languages";
import { useTranslation } from "../i18n/LanguageContext";

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
}

export default function LanguageSwitcher({ variant = "desktop" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const buttonClass =
    variant === "desktop"
      ? "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A162C]/60 hover:bg-[#2E7DFF]/20 border border-[#2E7DFF]/30 text-xs font-mono font-medium text-[#2E7DFF] hover:text-white transition-all duration-300 hover:shadow-[0_0_12px_rgba(46,125,255,0.25)] cursor-pointer"
      : "w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl bg-[#0F0F12] border border-[#1F2937] text-gray-300 cursor-pointer";

  return (
    <div className="relative" ref={containerRef} id={`language-switcher-${variant}`}>
      <button
        onClick={() => setIsOpen((v) => !v)}
        className={buttonClass}
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 shrink-0" />
          <span className="uppercase">{current.code}</span>
        </span>
      </button>

      {isOpen && (
        <div
          className={`absolute z-50 mt-2 w-48 max-h-72 overflow-y-auto rounded-xl border border-[#1F2937] bg-[#0F0F12]/98 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-1.5 animate-fade-in ${
            variant === "desktop" ? "right-0" : "left-0 right-0"
          }`}
          role="listbox"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between gap-2 px-3.5 py-2 text-sm font-sans text-left transition-colors cursor-pointer ${
                lang.code === language
                  ? "text-[#2E7DFF] bg-[#2E7DFF]/10"
                  : "text-gray-300 hover:bg-[#1F2937]/50 hover:text-white"
              }`}
              role="option"
              aria-selected={lang.code === language}
            >
              <span>{lang.nativeName}</span>
              {lang.code === language && <Check className="w-3.5 h-3.5 shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
