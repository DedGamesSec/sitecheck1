import { motion } from "motion/react";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigation } from "../navigation/NavigationContext";
import { PAGES_CONFIG } from "../navigation/pages.config";
import { Home, Cpu, ShieldCheck, Map, Users, BarChart3, Ticket } from "lucide-react";

const PAGE_ICONS: Record<string, React.ElementType> = {
  home: Home,
  "how-it-works": Cpu,
  tech: ShieldCheck,
  roadmap: Map,
  about: Users,
  comparison: BarChart3,
  download: Ticket,
};

const HEADER_PAGES = PAGES_CONFIG.filter((p) => p.showInHeader).sort((a, b) => a.order - b.order);

const PAGE_BADGES: Record<string, { ru: string; en: string }> = {
  home: { ru: "ПОРТАЛ ПЛАТФОРМЫ", en: "PLATFORM PORTAL" },
  "how-it-works": { ru: "СИСТЕМА PHANTOM", en: "PHANTOM SYSTEM" },
  tech: { ru: "ЗАЩИТА И АРХИТЕКТУРА", en: "SECURITY & ARCHITECTURE" },
  roadmap: { ru: "ДОРОЖНАЯ КАРТА", en: "ROADMAP" },
  about: { ru: "ВАЛИДАЦИЯ И ПАТЕНТЫ", en: "VALIDATION & PATENTS" },
  comparison: { ru: "ФАКТЫ И КОНКУРЕНТЫ", en: "FACTS & COMPETITORS" },
  download: { ru: "ЛИЦЕНЗИИ // VIP", en: "LICENSES // VIP" },
};

const PAGE_DESCRIPTIONS: Record<string, { ru: string; en: string }> = {
  home: { ru: "Обзор платформы TrustNode: локальный AI-антифрид, защита конфиденциальности и полный контроль над вашими данными.", en: "TrustNode platform overview: local AI anti-fraud, privacy protection, and full control over your data." },
  "how-it-works": { ru: "Техническая детализация семислойного защитного купола PHANTOM 2.0 и интеллектуальный голосовой ассистент KIRA, работающий локально на устройстве.", en: "Technical breakdown of the 7-layer PHANTOM 2.0 security dome and the intelligent voice assistant KIRA running fully on-device." },
  tech: { ru: "Глубокое погружение в архитектуру безопасности, мобильный AI-движок ruBERT и систему обнаружения мошенничества в реальном времени.", en: "Deep dive into the security architecture, mobile AI engine ruBERT, and real-time fraud detection system." },
  roadmap: { ru: "План развития проекта: от текущей MVP-версии до полноценной экосистемы с публичным аудитом и открытым API.", en: "Project development plan: from the current MVP to a full ecosystem with public audit and open API." },
  about: { ru: "Официальный патент ФИПС, золотая медаль на региональном НИР, участие во всероссийском финале в Москве и история создания проекта.", en: "Official patent filings, first place in regional IT research, national finals invitation, and our project development journey." },
  comparison: { ru: "Объективная сравнительная таблица функциональности TrustNode с существующими на рынке аналогами по ключевым параметрам.", en: "An objective comparative analysis of TrustNode vs leading global security solutions across key parameters." },
  download: { ru: "Выберите пакет раннего доступа, сгенерируйте уникальный билет и получите приоритетный Pro/VIP доступ до официального релиза.", en: "Select an early access package, generate your unique ticket, and secure priority Pro/VIP access before the official release." },
};

const PAGE_CTA: Record<string, { ru: string; en: string }> = {
  home: { ru: "Открыть главную →", en: "Open Home →" },
  "how-it-works": { ru: "Изучить технологии →", en: "Explore Technology →" },
  tech: { ru: "Перейти к защите →", en: "View Security →" },
  roadmap: { ru: "Смотреть Roadmap →", en: "View Roadmap →" },
  about: { ru: "О проекте и команде →", en: "About Us & Team →" },
  comparison: { ru: "Открыть таблицу сравнения →", en: "Open Comparison →" },
  download: { ru: "Получить билет доступа →", en: "Get Access Ticket →" },
};

export default function ExplorePagesSection() {
  const { t, language } = useTranslation();
  const { navigateTo } = useNavigation();
  const isRu = language === "ru";

  return (
    <section 
      className="relative w-full py-16 sm:py-24 px-4 overflow-hidden border-t border-[#1F2937]/35 bg-[#0A0A0B] select-none"
      id="explore-portal-section"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-[#2E7DFF]/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#2E7DFF]/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A162C]/70 border border-[#2E7DFF]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF] animate-pulse" />
            <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.15em] text-[#2E7DFF]">
              EXPLORE PROTOCOL PORTAL
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] tracking-tight mb-4">
            {t.explore.title}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-lg mx-auto">
            {t.explore.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {HEADER_PAGES.map((page) => {
            const Icon = PAGE_ICONS[page.id];
            const badge = PAGE_BADGES[page.id]?.[isRu ? "ru" : "en"] || "";
            const desc = PAGE_DESCRIPTIONS[page.id]?.[isRu ? "ru" : "en"] || "";
            const cta = PAGE_CTA[page.id]?.[isRu ? "ru" : "en"] || "";

            return (
              <motion.div
                key={page.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigateTo(page.id)}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-[#1F2937]/50 bg-[#070709]/90 hover:border-[#2E7DFF]/55 transition-all duration-300 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
                id={`explore-${page.id}-card`}
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#2E7DFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#0A162C]/80 border border-[#2E7DFF]/25 flex items-center justify-center text-[#2E7DFF] group-hover:shadow-[0_0_15px_rgba(46,125,255,0.3)] transition-all">
                      {Icon && <Icon className="w-5 h-5" />}
                    </div>
                    <span className="font-mono text-[9px] tracking-widest text-[#2E7DFF] font-bold bg-[#2E7DFF]/5 px-2.5 py-1 rounded border border-[#2E7DFF]/15">
                      {badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F0] group-hover:text-[#2E7DFF] transition-colors mb-3">
                    {t.pageNames[page.labelKey]}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                    {desc}
                  </p>
                </div>

                <span className="inline-flex font-mono text-[11px] font-bold text-[#2E7DFF] group-hover:text-white group-hover:translate-x-1.5 transition-all">
                  {cta}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
