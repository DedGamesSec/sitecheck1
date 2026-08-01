import React from "react";
import { SiTelegram, SiVk, SiTiktok, SiGithub } from "react-icons/si";
import { Radar } from "lucide-react";
import MiniLogo from "./MiniLogo";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigation } from "../navigation/NavigationContext";
import { FOOTER_SITEMAP_PAGES } from "../navigation/pages.config";
import { PRODUCT_RADAR_URL } from "./Header";

const SiTelegramIcon = SiTelegram as React.ComponentType<any>;
const SiVkIcon = SiVk as React.ComponentType<any>;
const SiTiktokIcon = SiTiktok as React.ComponentType<any>;
const SiGithubIcon = SiGithub as React.ComponentType<any>;

const Footer = React.memo(function Footer() {
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

  const storeLinks = [
    { href: PRODUCT_RADAR_URL, label: t.header.radar, Icon: <Radar className="w-4 h-4" />, external: true },
  ];

  const socialButtonClass =
    "font-mono text-sm text-gray-400 hover:text-[#2E7DFF] hover:border-[#2E7DFF]/40 transition-all duration-300 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0F0F12]/80 border border-[#1F2937]/50 min-h-11";

  return (
    <footer 
      className="relative w-full py-12 sm:py-16 px-4 border-t border-[#1F2937]/20 bg-[#0A0A0B] z-10 overflow-hidden" 
      style={{ paddingBottom: "max(3rem, env(safe-area-inset-bottom))" }}
      id="footer"
    >
      <div className="max-w-6xl mx-auto grid gap-x-8 gap-y-6 footer-grid">

        {/* Brand Identity — centered, full-width first row */}
        <div className="footer-area-brand flex flex-col items-center gap-1 text-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-10 flex items-center justify-center bg-[#111827]/30 rounded-lg border border-[#2E7DFF]/10">
              <MiniLogo />
            </div>
            <span className="font-display font-bold text-base text-[#F5F5F0] tracking-tight">
              Trust<span className="text-[#2E7DFF]">Node</span>
            </span>
          </div>
          <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">
            {t.brand.footerTagline}
          </span>
        </div>

        {/* Sitemap nav — left column */}
        <div className="footer-area-sitemap">
          <h3 className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-[0.18em] mb-3">
            {sitemapHeading}
          </h3>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 items-start">
            {FOOTER_SITEMAP_PAGES.map((page) => (
              <button
                key={page.id}
                onClick={() => navigateTo(page.id)}
                className="text-left font-sans text-sm text-gray-400 hover:text-[#2E7DFF] transition-colors cursor-pointer leading-6"
              >
                {t.pageNames[page.labelKey]}
              </button>
            ))}
          </nav>
        </div>

        {/* Social buttons — right column, unified rectangle (rows 1 + 2) */}
        <div className="footer-area-social flex flex-col gap-3 footer-btn-rect lg:justify-end">
          <div className="footer-btn-row">
            {socialLinks.slice(0, 2).map(({ href, label, Icon }) => (
              <a 
                key={label}
                href={href}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={socialButtonClass}
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0A162C]/60 border border-[#2E7DFF]/30 text-[#2E7DFF] shrink-0">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="whitespace-nowrap">{label === "VK" ? "VKontakte" : label}</span>
              </a>
            ))}
          </div>
          <div className="footer-btn-row">
            {socialLinks.slice(2, 4).map(({ href, label, Icon }) => (
              <a 
                key={label}
                href={href}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={socialButtonClass}
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0A162C]/60 border border-[#2E7DFF]/30 text-[#2E7DFF] shrink-0">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="whitespace-nowrap">{label === "VK" ? "VKontakte" : label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Legal / copyright block — bottom left */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-1 max-w-full footer-area-legal">
          <p className="font-sans text-xs text-gray-400 max-w-full break-words">
            {copyright}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-1.5 max-w-full">
            <button 
              onClick={() => navigateTo("privacy")} 
              className="font-sans text-xs sm:text-sm text-gray-400 hover:text-[#2E7DFF] hover:underline cursor-pointer transition-colors break-words text-center md:text-left"
            >
              {t.footer.privacyLink}
            </button>
            <span className="text-gray-700 text-xs hidden sm:inline select-none">|</span>
            <button 
              onClick={() => navigateTo("terms")} 
              className="font-sans text-xs sm:text-sm text-gray-400 hover:text-[#2E7DFF] hover:underline cursor-pointer transition-colors break-words text-center md:text-left"
            >
              {t.footer.termsLink}
            </button>
          </div>
          <p className="font-mono text-[11px] text-gray-500 mt-2 uppercase tracking-widest max-w-full break-words whitespace-normal text-center md:text-left">
            {t.footer.version}
          </p>
          <a
            href="https://github.com/TrustNodeLab"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-gray-400 hover:text-[#2E7DFF] transition-colors"
          >
            <SiGithubIcon className="w-3.5 h-3.5" />
            {t.footer.githubOrg}
          </a>
          <p className="font-mono text-[11px] text-gray-500 mt-2">
            Mikhail Pitolin &lt;mikhailpitolin@gmail.com&gt;
          </p>
        </div>

        {/* Product Radar — standard-size button, centered under rows 1 + 2 */}
        <div className="footer-area-store flex flex-wrap items-center justify-center gap-3 lg:-mt-3 lg:self-start">
          {storeLinks.map(({ href, label, Icon }) => (
            <a 
              key={href}
              href={href}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={socialButtonClass}
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0A162C]/60 border border-[#2E7DFF]/30 text-[#2E7DFF] shrink-0">
                {Icon || (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                )}
              </span>
              <span className="whitespace-nowrap">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
});

export default Footer;
