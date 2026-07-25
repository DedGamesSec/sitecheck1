import React from "react";
import { SiTelegram, SiVk, SiTiktok, SiGithub } from "react-icons/si";
import MiniLogo from "./MiniLogo";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigation } from "../navigation/NavigationContext";
import { FOOTER_SITEMAP_PAGES } from "../navigation/pages.config";

const SiTelegramIcon = SiTelegram as React.ComponentType<any>;
const SiVkIcon = SiVk as React.ComponentType<any>;
const SiTiktokIcon = SiTiktok as React.ComponentType<any>;
const SiGithubIcon = SiGithub as React.ComponentType<any>;

// Verified signature for use in App.tsx
interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const Footer = React.memo(function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
  const { t, language } = useTranslation();
  const { navigateTo } = useNavigation();
  const currentYear = new Date().getFullYear();
  const copyright = t.footer.copyright.replace("{year}", String(currentYear));
  const sitemapHeading = {
    ru: "Карта сайта",
    en: "Sitemap",
    es: "Mapa del sitio",
    zh: "站点地图",
    tr: "Site Haritası",
    hi: "साइट मैप",
    ar: "خريطة الموقع",
    pt: "Mapa do site",
    fr: "Plan du site",
    de: "Sitemap",
    ja: "サイトマップ",
  }[language] || "Sitemap";
  const socialLinks = [
    { href: "https://t.me/TrustNode_team", label: "Telegram", Icon: SiTelegramIcon },
    { href: "https://vk.com/trustnode", label: "VK", Icon: SiVkIcon },
    { href: "https://github.com/TrustNodeLab", label: "GitHub", Icon: SiGithubIcon },
    { href: "https://www.tiktok.com/@trusrnode?_r=1&_t=ZS-97fr5YVyPCs", label: "TikTok", Icon: SiTiktokIcon },
  ] as const;

  return (
    <footer 
      className="relative w-full py-12 sm:py-16 px-4 border-t border-[#1F2937]/20 bg-[#0A0A0B] z-10 overflow-hidden" 
      style={{ paddingBottom: "max(3rem, env(safe-area-inset-bottom))" }}
      id="footer"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] gap-8 items-start">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-10 flex items-center justify-center bg-[#111827]/30 rounded-lg border border-[#2E7DFF]/10">
            <MiniLogo />
          </div>
          
          <div className="flex flex-col">
            <span className="font-display font-bold text-base text-[#F5F5F0] tracking-tight">
              Trust<span className="text-[#2E7DFF]">Node</span>
            </span>
            <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">
              {t.brand.footerTagline}
            </span>
          </div>
        </div>

        {/* Center: Sitemap + legal */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,220px),1fr] gap-8">
          <div>
            <h3 className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-[0.18em] mb-3">
              {sitemapHeading}
            </h3>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {FOOTER_SITEMAP_PAGES.map((page) => (
                <button
                  key={page.id}
                  onClick={() => navigateTo(page.id)}
                  className="text-left font-sans text-sm text-gray-400 hover:text-[#2E7DFF] transition-colors cursor-pointer"
                >
                  {t.pageNames[page.labelKey]}
                </button>
              ))}
            </nav>
          </div>

          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-1 max-w-full px-2">
            <p className="font-sans text-xs text-gray-400 max-w-full break-words">
              {copyright}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-1.5 max-w-full">
              <button 
                onClick={onOpenPrivacy} 
                className="font-sans text-[10px] sm:text-xs text-gray-400 hover:text-[#2E7DFF] hover:underline cursor-pointer transition-colors break-words text-center md:text-left"
              >
                {t.footer.privacyLink}
              </button>
              <span className="text-gray-700 text-xs hidden sm:inline select-none">|</span>
              <button 
                onClick={onOpenTerms} 
                className="font-sans text-[10px] sm:text-xs text-gray-400 hover:text-[#2E7DFF] hover:underline cursor-pointer transition-colors break-words text-center md:text-left"
              >
                {t.footer.termsLink}
              </button>
            </div>
            <p className="font-mono text-[9px] text-gray-600 mt-2 uppercase tracking-widest max-w-full break-words whitespace-normal text-center md:text-left">
              {t.footer.version}
            </p>
            <a
              href="https://github.com/TrustNodeLab"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 font-mono text-[9px] text-gray-500 hover:text-[#2E7DFF] transition-colors"
            >
              <SiGithub className="w-3 h-3" />
              TrustNodeLab on GitHub
            </a>
            <p className="font-mono text-[9px] text-gray-600 mt-2">
              Mikhail Pitolin &lt;mikhailpitolin@gmail.com&gt;
            </p>
          </div>
        </div>

        {/* Right: Social / Tech Links */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3">
          {socialLinks.map(({ href, label, Icon }) => (
            <a 
              key={label}
              href={href}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="font-mono text-xs text-gray-400 hover:text-[#2E7DFF] hover:border-[#2E7DFF]/40 transition-all duration-300 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0F0F12]/80 border border-[#1F2937]/50 min-h-11"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0A162C]/60 border border-[#2E7DFF]/30 text-[#2E7DFF] shrink-0">
                <Icon className="w-4 h-4" />
              </span>
              <span>{label === "VK" ? "VKontakte" : label}</span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
});

export default Footer;
