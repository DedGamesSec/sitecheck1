import React, { useState, useEffect } from "react";
import { Menu, X, Leaf, Radar, ALargeSmall } from "lucide-react";
import { SiTelegram, SiVk, SiTiktok, SiGithub } from "react-icons/si";
import MiniLogo from "./MiniLogo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigation, PageId } from "../navigation/NavigationContext";
import { useSeniorMode } from "../context/SeniorModeContext";
import { HEADER_PAGES } from "../navigation/pages.config";

export const RUSTORE_URL = "https://www.rustore.ru/catalog/app/com.frauddetector.app";
export const PRODUCT_RADAR_URL = "https://productradar.ru/product/trustnode/";
export const GITHUB_APK_URL = "https://github.com/TrustNodeLab/trustnodelab.github.io/releases/download/1.2.0/app-arm64-v8a-release.apk";

const SiTelegramIcon = SiTelegram as React.ComponentType<any>;
const SiVkIcon = SiVk as React.ComponentType<any>;
const SiTiktokIcon = SiTiktok as React.ComponentType<any>;
const SiGithubIcon = SiGithub as React.ComponentType<any>;

// Verified signature for use in App.tsx
interface HeaderProps {
  isEcoMode: boolean;
  onToggleEcoMode: () => void;
}

export default function Header({ isEcoMode, onToggleEcoMode }: HeaderProps) {
  const { t } = useTranslation();
  const { activePage, navigateTo } = useNavigation();
  const { seniorMode, toggleSeniorMode } = useSeniorMode();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        setScrolled(window.scrollY > 20);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const socialLinks = [
    {
      href: "https://t.me/TrustNode_team",
      label: "Telegram",
      Icon: SiTelegramIcon,
    },
    {
      href: "https://vk.com/trustnode",
      label: "VK",
      Icon: SiVkIcon,
    },
    {
      href: "https://github.com/TrustNodeLab",
      label: "GitHub",
      Icon: SiGithubIcon,
    },
    {
      href: "https://www.tiktok.com/@trusrnode?_r=1&_t=ZS-97fr5YVyPCs",
      label: "TikTok",
      Icon: SiTiktokIcon,
    },
  ] as const;

  const productRadarLink = {
    href: PRODUCT_RADAR_URL,
    label: "Product Radar",
    Icon: Radar,
  };

  const navPages = HEADER_PAGES;

  const getPageLabel = (page: PageId) => {
    const labels = t.pageNames;
    return labels[page as keyof typeof labels] || page;
  };

  const handlePageNavigation = (page: PageId, anchorId?: string) => {
    setIsOpen(false);
    navigateTo(page, anchorId);
  };

  const renderNavButton = (page: typeof navPages[number], variant: "desktop" | "mobile") => {
    const isActive = activePage === page.id;
    const isDesktop = variant === "desktop";
    const baseClass = isDesktop
      ? "font-sans text-xs font-medium transition-all cursor-pointer py-1.5 px-3 rounded-lg border"
      : "font-sans text-sm font-medium text-left transition-colors py-2.5 px-3 rounded-xl border";
    const activeClass = isDesktop
      ? "text-white bg-[#2E7DFF]/15 border-[#2E7DFF]/30 shadow-[0_0_12px_rgba(46,125,255,0.18)]"
      : "text-[#2E7DFF] bg-[#2E7DFF]/10 border-[#2E7DFF]/20";
    const idleClass = isDesktop
      ? "text-gray-400 hover:text-[#2E7DFF] hover:bg-[#111827]/30 border-transparent"
      : "text-gray-300 hover:text-[#2E7DFF] border-transparent";

    return (
      <button
        key={`${variant}-${page.id}`}
        onClick={() => handlePageNavigation(page.id)}
        className={`${baseClass} ${isActive ? activeClass : idleClass}`}
      >
        {getPageLabel(page.id)}
      </button>
    );
  };

  const renderSocialButton = (
    link: (typeof socialLinks)[number] | typeof productRadarLink,
    variant: "desktop" | "mobile",
  ) => {
    const Icon = link.Icon;
    const className =
      variant === "desktop"
        ? "inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0A162C]/60 hover:bg-[#2E7DFF]/20 border border-[#2E7DFF]/30 text-[#2E7DFF] hover:text-white transition-all duration-300 hover:shadow-[0_0_12px_rgba(46,125,255,0.25)]"
        : "flex-1 min-h-11 flex items-center justify-center rounded-xl bg-[#0F0F12] border border-[#1F2937] text-[#2E7DFF] hover:text-white hover:border-[#2E7DFF]/35 hover:bg-[#2E7DFF]/10 transition-all duration-300";

    return (
      <a
        key={`${variant}-${link.label}`}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        title={link.label}
        className={className}
      >
        <Icon className="w-4 h-4" />
      </a>
    );
  };

  const ecoButtonClass =
    "inline-flex items-center justify-center w-11 h-11 rounded-xl border transition-all duration-300 cursor-pointer";

  const renderEcoButton = () => (
    <button
      onClick={onToggleEcoMode}
      aria-label={isEcoMode ? t.header.ecoOn : t.header.ecoOff}
      title={isEcoMode ? t.header.ecoOn : t.header.ecoOff}
      className={`${ecoButtonClass} ${
        isEcoMode
          ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.22)]"
          : "bg-[#0A162C]/60 border-[#2E7DFF]/30 text-[#2E7DFF] hover:text-white hover:bg-[#2E7DFF]/20"
      }`}
    >
      <Leaf className="w-4 h-4" />
    </button>
  );

  const renderSeniorButton = () => (
    <button
      onClick={toggleSeniorMode}
      aria-label={seniorMode ? t.header.seniorOn : t.header.seniorOff}
      title={seniorMode ? t.header.seniorOn : t.header.seniorOff}
      className={`${ecoButtonClass} ${
        seniorMode
          ? "bg-amber-500/15 border-amber-500/40 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.22)]"
          : "bg-[#0A162C]/60 border-[#2E7DFF]/30 text-[#2E7DFF] hover:text-white hover:bg-[#2E7DFF]/20"
      }`}
    >
      <ALargeSmall className="w-4 h-4" />
    </button>
  );

  const renderRuStoreButton = (variant: "desktop" | "mobile") => {
    const baseClass =
      variant === "desktop"
        ? "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#2E7DFF]/15 hover:bg-[#2E7DFF]/30 border border-[#2E7DFF]/40 text-xs font-mono font-semibold text-[#2E7DFF] hover:text-white transition-all duration-300 hover:shadow-[0_0_14px_rgba(46,125,255,0.3)] cursor-pointer whitespace-nowrap"
        : "w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#2E7DFF]/15 hover:bg-[#2E7DFF]/30 border border-[#2E7DFF]/40 text-xs font-mono font-semibold text-[#2E7DFF] hover:text-white transition-all duration-300 cursor-pointer";

    return (
      <a
        key={`rustore-${variant}`}
        href={RUSTORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label={t.header.rustore}
        title={t.header.rustore}
      >
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        {t.header.rustore}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || activePage !== "home"
          ? "bg-[#0A0A0B]/85 backdrop-blur-md border-b border-[#1F2937]/30 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
          : "bg-transparent"
      }`}
      style={{
        paddingTop: scrolled || activePage !== "home"
          ? "max(0.75rem, env(safe-area-inset-top))" 
          : "max(1.25rem, env(safe-area-inset-top))",
        paddingBottom: scrolled || activePage !== "home" ? "0.75rem" : "1.25rem",
        paddingLeft: "max(1rem, env(safe-area-inset-left))",
        paddingRight: "max(1rem, env(safe-area-inset-right))",
      }}
      id="main-nav-header"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer select-none shrink-0"
          onClick={() => handlePageNavigation("home")}
          id="header-logo-container"
        >
          <div className="w-8 h-10 flex items-center justify-center bg-[#111827]/30 rounded-lg border border-[#2E7DFF]/15">
            <MiniLogo />
          </div>
          
          <div className="flex flex-col">
            <span className="font-display font-bold text-base text-[#F5F5F0] tracking-tight">
              Trust<span className="text-[#2E7DFF]">Node</span>
            </span>
            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest leading-none">
              {t.brand.tagline}
            </span>
          </div>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5" id="desktop-nav">
          {navPages.map((page) => renderNavButton(page, "desktop"))}
        </nav>

        {/* Right: RuStore + Radar + Eco + Senior + Language (Desktop) */}
        <div className="hidden lg:flex items-center gap-2" id="desktop-social-actions">
          {renderRuStoreButton("desktop")}
          {renderSocialButton(productRadarLink, "desktop")}
          {renderEcoButton()}
          {renderSeniorButton()}
          <LanguageSwitcher variant="desktop" />
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2 ml-auto">
          {renderRuStoreButton("desktop")}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg bg-[#111827]/40 border border-[#1F2937]/50 text-gray-400 hover:text-[#2E7DFF] transition-colors cursor-pointer"
            id="mobile-menu-toggle"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div 
          className="lg:hidden absolute top-[100%] left-0 right-0 bg-[#0A0A0B]/98 border-b border-[#1F2937]/50 py-6 px-4 flex flex-col gap-3 shadow-2xl animate-fade-in max-h-[calc(100dvh-64px)] overflow-y-auto"
          id="mobile-drawer"
        >
          {navPages.map((page) => renderNavButton(page, "mobile"))}

          <div className="h-px bg-[#1F2937]/30 my-1" />

          {/* RuStore download inside Mobile Menu */}
          {renderRuStoreButton("mobile")}

          {/* Socials inside Mobile Menu */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              {socialLinks.map((link) => renderSocialButton(link, "mobile"))}
              {renderSocialButton(productRadarLink, "mobile")}
            </div>
            <div className="flex items-center gap-2">
              <div className="shrink-0">{renderEcoButton()}</div>
              <div className="shrink-0">{renderSeniorButton()}</div>
              <div className="flex-1 min-w-0">
                <LanguageSwitcher variant="mobile" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
