import React, { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Globe, Check } from "lucide-react";
import { LANGUAGES } from "../i18n/languages";
import { useTranslation } from "../i18n/LanguageContext";

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
}

const MENU_ID = "language-switcher-portal";

const OPTION_HEIGHT = 36;
const MENU_VERTICAL_PADDING = 14;

export default function LanguageSwitcher({ variant = "desktop" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  const close = useCallback(() => setIsOpen(false), []);

  const handleButtonClick = () => {
    if (!isOpen) {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (rect) {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const isNarrow = vw < 640;
        const panelWidth = Math.min(vw - 16, isNarrow ? 320 : 224);
        const rows = isNarrow ? Math.ceil(LANGUAGES.length / 2) : LANGUAGES.length;
        const menuHeight = rows * OPTION_HEIGHT + MENU_VERTICAL_PADDING;

        let left = rect.right - panelWidth;
        left = Math.max(8, Math.min(left, vw - panelWidth - 8));
        const top = Math.min(rect.bottom + 8, Math.max(8, vh - menuHeight - 8));

        setPosition({ top, left });
      }
    }
    setIsOpen((v) => !v);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const menu = document.getElementById(MENU_ID);
      if (buttonRef.current && !buttonRef.current.contains(target) && menu && !menu.contains(target)) {
        close();
      }
    };

    const handleScroll = (e: Event) => {
      const menu = document.getElementById(MENU_ID);
      if (menu && e.target instanceof Node && menu.contains(e.target)) return;
      close();
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen, close]);

  const buttonClass =
    variant === "desktop"
      ? "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A162C]/60 hover:bg-[#2E7DFF]/20 border border-[#2E7DFF]/30 text-xs font-mono font-medium text-[#2E7DFF] hover:text-white transition-all duration-300 hover:shadow-[0_0_12px_rgba(46,125,255,0.25)] cursor-pointer"
      : "w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl bg-[#0F0F12] border border-[#1F2937] text-gray-300 cursor-pointer";

  return (
    <div className="relative" ref={containerRef} id={`language-switcher-${variant}`}>
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
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

      {isOpen &&
        position &&
        createPortal(
          <div
            id={MENU_ID}
            role="listbox"
            aria-label="Language"
            className="fixed z-[9999] w-[min(calc(100vw-16px),20rem)] sm:w-56 max-h-[calc(100vh-16px)] overflow-y-auto grid grid-cols-2 sm:grid-cols-1 rounded-xl border border-[#1F2937] bg-[#0F0F12] backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-1.5 animate-fade-in"
            style={{ top: position.top, left: position.left }}
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  close();
                }}
                className={`w-full flex items-center justify-between gap-2 px-3.5 py-2 text-sm font-sans text-left transition-colors cursor-pointer ${
                  lang.code === language
                    ? "text-[#2E7DFF] bg-[#2E7DFF]/10"
                    : "text-gray-300 hover:bg-[#1F2937]/50 hover:text-white"
                }`}
                role="option"
                aria-selected={lang.code === language}
              >
                <span className="truncate">{lang.nativeName}</span>
                {lang.code === language && <Check className="w-3.5 h-3.5 shrink-0" />}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
}
