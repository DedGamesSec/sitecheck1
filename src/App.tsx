import { useState, useEffect, useRef, Suspense, lazy } from "react";
const NetworkBackground = lazy(() => import("./components/NetworkBackground"));
import AssembledLogo from "./components/AssembledLogo";

const hudTranslations: Record<string, { core: string; nodes: string; mode: string }> = {
  ru: { core: "ЛОКАЛЬНОЕ ЯДРО", nodes: "АКТИВНЫЕ УЗЛЫ", mode: "РЕЖИМ ЗАЩИТЫ" },
  en: { core: "LOCAL CORE", nodes: "ACTIVE NODES", mode: "PROTECTION MODE" },
  es: { core: "NÚCLEO LOCAL", nodes: "NODOS ACTIVOS", mode: "MODO DE PROTECCIÓN" },
  zh: { core: "本地核心", nodes: "活动节点", mode: "防护模式" },
  tr: { core: "YEREL ÇEKİRDEK", nodes: "AKTİF DÜĞÜMLER", mode: "KORUMA MODU" },
  hi: { core: "स्थानीय कोर", nodes: "सक्रिय नोड्स", mode: "सुरक्षा मोड" },
  ar: { core: "النواة المحلية", nodes: "العقد النشطة", mode: "وضع الحماية" },
  pt: { core: "NÚCLEO LOCAL", nodes: "NÓS ATIVOS", mode: "MODO DE PROTEÇÃO" },
  fr: { core: "NOYAU LOCAL", nodes: "NŒUDS ACTIFS", mode: "MODE DE PROTECTION" },
  de: { core: "LOKALER KERN", nodes: "AKTIVE KNOTEN", mode: "SCHUTZMODUS" },
  ja: { core: "ローカルコア", nodes: "アクティブノード", mode: "保護モード" }
};

function SkyPlaceholder() {
  return <div className="absolute inset-0 w-full h-full bg-[#0A0A0B] pointer-events-none" />;
}
import ProblemSection from "./components/ProblemSection";
import IntroSection from "./components/IntroSection";
import LiveSimulatorSection from "./components/LiveSimulatorSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TrustSection from "./components/TrustSection";
import WaitlistSection from "./components/WaitlistSection";
import WaitlistBanner from "./components/WaitlistBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ExplorePagesSection from "./components/ExplorePagesSection";
import AppSecuritySection from "./components/AppSecuritySection";
import KiraAssistantSection from "./components/KiraAssistantSection";
import RealDevelopmentSection from "./components/RealDevelopmentSection";
import OriginStorySection from "./components/OriginStorySection";
import LegalModal from "./components/LegalModals";
import CookieConsent from "./components/CookieConsent";
import Breadcrumbs from "./components/Breadcrumbs";
import NotFoundPage from "./components/NotFoundPage";
import PageNavigationFooter from "./components/PageNavigationFooter";
import EarlyAccessPage from "./components/EarlyAccessPage";
import ComparisonSection from "./components/ComparisonSection";
import { motion, AnimatePresence, useInView } from "motion/react";
import { useTranslation } from "./i18n/LanguageContext";
import { useNavigation, PageId } from "./navigation/NavigationContext";
import { useEcoMode } from "./context/EcoModeContext";

export default function App() {
  const { t, language } = useTranslation();
  const { activePage } = useNavigation();
  const { ecoMode, toggleEcoMode } = useEcoMode();
  const [showReplayIntro, setShowReplayIntro] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [activeMobileCard, setActiveMobileCard] = useState(0);
  const [userInteractedWithMobileCards, setUserInteractedWithMobileCards] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<"privacy" | "terms">("privacy");
  const [skyStatus, setSkyStatus] = useState<string>("");

  const mobileCards = t.mobileCards;

  useEffect(() => {
    if (userInteractedWithMobileCards) return;
    const interval = setInterval(() => {
      setActiveMobileCard((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, [userInteractedWithMobileCards]);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.visualViewport?.height || window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    window.visualViewport?.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);

  const coreLandingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = coreLandingRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowReplayIntro(entry.isIntersecting);
      },
      { root: null, threshold: 0.05 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [activePage]);

  const vh = windowHeight || 800;

  const section2Ref = useRef<HTMLDivElement>(null);
  const isSection2InView = useInView(section2Ref, { once: true, margin: "-100px" });
  const [logoProgress, setLogoProgress] = useState(0);

  useEffect(() => {
    if (isSection2InView) {
      let start: number | null = null;
      const duration = 1200; // 1.2s animation
      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const p = Math.min(1, elapsed / duration);
        // Cubic ease-out
        const easedP = 1 - Math.pow(1 - p, 3);
        setLogoProgress(easedP);
        if (p < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isSection2InView]);

  // Dynamic Page Metadata & SEO Management
  useEffect(() => {
    const pageTitles: Record<string, Record<string, string>> = {
      ru: {
        home: "TrustNode — Мобильное приложение для защиты от мошенников и спама",
        "how-it-works": "Как устроен купол защиты // TrustNode Protocol",
        tech: "Безопасность и Технологии // TrustNode Protocol",
        about: "О проекте и команде // TrustNode Protocol",
      },
      en: {
        home: "TrustNode — On-Device Anti-Fraud & Spam Shield",
        "how-it-works": "How It Works // TrustNode Protocol",
        tech: "Security & Tech // TrustNode Protocol",
        about: "About Us & Team // TrustNode Protocol",
      },
      es: {
        home: "TrustNode — Escudo Contra el Fraude en el Dispositivo",
        "how-it-works": "Cómo Funciona // TrustNode Protocol",
        tech: "Seguridad y Tecnología // TrustNode Protocol",
        about: "Sobre Nosotros // TrustNode Protocol",
      },
      zh: {
        home: "TrustNode — 移动端离线防诈骗安全盾",
        "how-it-works": "工作原理 // TrustNode Protocol",
        tech: "安全与技术 // TrustNode Protocol",
        about: "关于我们与团队 // TrustNode Protocol",
      },
      tr: {
        home: "TrustNode — Cihaz Üstü Dolandırıcılık Kalkanı",
        "how-it-works": "Nasıl Çalışır // TrustNode Protocol",
        tech: "Güvenlik ve Teknoloji // TrustNode Protocol",
        about: "Hakkımızda // TrustNode Protocol",
      },
      hi: {
        home: "TrustNode — ऑन-डिवाइस धोखाधड़ी सुरक्षा कवच",
        "how-it-works": "यह कैसे काम करता है // TrustNode Protocol",
        tech: "सुरक्षा और तकनीक // TrustNode Protocol",
        about: "हमारे बारे में // TrustNode Protocol",
      },
      ar: {
        home: "TrustNode — درع مكافحة الاحتيال على الجهاز",
        "how-it-works": "كيف يعمل // TrustNode Protocol",
        tech: "الأمان والتكنولوجيا // TrustNode Protocol",
        about: "من نحن والوصول // TrustNode Protocol",
      },
      pt: {
        home: "TrustNode — Escudo Anti-Fraude no Dispositivo",
        "how-it-works": "Como Funciona // TrustNode Protocol",
        tech: "Segurança e Tecnologia // TrustNode Protocol",
        about: "Sobre Nós // TrustNode Protocol",
      },
      fr: {
        home: "TrustNode — Protection Anti-Fraude sur l'Appareil",
        "how-it-works": "Comment ça marche // TrustNode Protocol",
        tech: "Sécurité & Technologie // TrustNode Protocol",
        about: "À Propos // TrustNode Protocol",
      },
      de: {
        home: "TrustNode — On-Device Anti-Betrugs-Schutzschild",
        "how-it-works": "Wie es funktioniert // TrustNode Protocol",
        tech: "Sicherheit & Technologie // TrustNode Protocol",
        about: "Über Uns // TrustNode Protocol",
      },
      ja: {
        home: "TrustNode — オンデバイス特殊詐欺対策シールド",
        "how-it-works": "仕組み // TrustNode Protocol",
        tech: "セキュリティとテクノロジー // TrustNode Protocol",
        about: "私たちについて // TrustNode Protocol",
      }
    };

    const currentLang = language || localStorage.getItem("trustnode_lang") || "ru";
    const pageTitleMap = pageTitles[currentLang] || pageTitles["ru"];
    const pageTitle = pageTitleMap[activePage] || (activePage === "roadmap" ? (currentLang === "ru" ? "Карта разработки // TrustNode Protocol" : "Roadmap & Verification // TrustNode Protocol") : (pageTitleMap["home"] || pageTitles.ru.home));
    document.title = pageTitle;

    let linkIcon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!linkIcon) {
      linkIcon = document.createElement("link");
      linkIcon.setAttribute("rel", "icon");
      linkIcon.setAttribute("type", "image/svg+xml");
      document.head.appendChild(linkIcon);
    }
    linkIcon.setAttribute("href", `${import.meta.env.BASE_URL}favicon.svg`);

    const descriptions: Record<string, Record<string, string>> = {
      ru: {
        home: "TrustNode — первое в мире полностью локальное мобильное приложение на базе ИИ для защиты от телефонных мошенников, спама и утечек данных.",
        "how-it-works": "Узнайте, как семислойный ИБ-купол TrustNode обнаруживает мошенничество и психологическое давление без передачи данных в интернет.",
        tech: "Технические подробности и замеры скорости работы TrustNode: локальные ONNX-модели с INT8-квантованием прямо на вашем процессоре.",
        about: "История создания TrustNode, наша миссия против мошеннических сетей и команда разработчиков систем ИБ.",
        "not-found": "Страница не найдена. Вернитесь в защищённый периметр TrustNode."
      },
      en: {
        home: "TrustNode — the world's first fully offline AI-powered security shield protecting your Android device from calls/SMS scam, phish links, and leaks.",
        "how-it-works": "Explore how TrustNode's 7-layer security dome detects fraud tactics, robotic speech, and intimidation offline.",
        tech: "Explore the technical stack: secure sandboxed execution, quantized INT8 local ONNX models, and real latency metrics.",
        about: "The story behind TrustNode, our battle against organized fraud networks, and our core open-source team.",
        "not-found": "Page not found. Return to the secure TrustNode perimeter."
      },
      es: {
        home: "TrustNode — el primer escudo de seguridad impulsado por IA 100% offline que protege su dispositivo contra llamadas fraudulentas y spam.",
        "how-it-works": "Descubra cómo el domo de seguridad de 7 capas de TrustNode detecta tácticas de fraude sin conexión.",
        tech: "Detalles técnicos y métricas de latencia de TrustNode: modelos ONNX locales con cuantización INT8.",
        about: "La historia de TrustNode, nuestra lucha contra las redes delictivas organizadas y el equipo de desarrollo.",
        "not-found": "Página no encontrada. Regrese al perímetro seguro de TrustNode."
      },
      zh: {
        home: "TrustNode — 全球首款完全离线运行的 AI 移动安全防护盾，全面防御电话诈骗、垃圾短信和数据泄露。",
        "how-it-works": "探索 TrustNode 的 7 重防御防护罩如何在无需联网的情况下实时检测诈骗和心理压迫手段。",
        tech: "技术细节与性能表现：直接在移动处理器上运行的 INT8 量化本地 ONNX 引擎。",
        about: "TrustNode 的创立历程、我们与网络诈骗集团的对抗以及核心开源技术团队。",
        "not-found": "未找到页面，请返回 TrustNode 安全区域。"
      },
      tr: {
        home: "TrustNode — Telefon dolandırıcılığı ve spama karşı %100 çevrimdışı çalışan yapay zeka destekli mobil güvenlik kalkanı.",
        "how-it-works": "TrustNode 7 katmanlı güvenlik kubbesinin dolandırıcılık taktiklerini ve robotik konuşmaları nasıl engellediğini öğrenin.",
        tech: "Teknik detaylar ve hız ölçümleri: Doğrudan cihazınızda çalışan INT8 nicemlemeli yerel ONNX modelleri.",
        about: "TrustNode'un kuruluş hikayesi, organize dolandırıcılık ağlarına karşı mücadelemiz ve geliştirici ekibimiz.",
        "not-found": "Sayfa bulunamadı. Güvenli TrustNode alanına geri dönün."
      },
      hi: {
        home: "TrustNode — दुनिया का पहला पूरी तरह से ऑफलाइन AI-संचालित मोबाइल सुरक्षा कवच जो आपको स्पैम और धोखाधड़ी से बचाता है।",
        "how-it-works": "जानें कि TrustNode का 7-स्तरीय सुरक्षा डोम बिना इंटरनेट के धोखाधड़ी और मानसिक दबाव का कैसे पता लगाता है।",
        tech: "तकनीकी विवरण और गति माप: सीधे आपके प्रोसेसर पर चलने वाले INT8 स्थानीय ONNX मॉडल।",
        about: "TrustNode की कहानी, संगठित धोखाधड़ी नेटवर्क के खिलाफ हमारी लड़ाई और हमारी टीम।",
        "not-found": "पृष्ठ नहीं मिला। सुरक्षित TrustNode सीमा पर लौटें।"
      },
      ar: {
        home: "TrustNode — أول درع أمني بالذكاء الاصطناعي يعمل محلياً 100% لحماية هاتفك من المكالمات الاحتيالية والرسائل المزعجة.",
        "how-it-works": "اكتشف كيف تكتشف قبة الحماية السباعية لـ TrustNode تكتيكات الاحتيال والضغط النفسي دون اتصال بالإنترنت.",
        tech: "التفاصيل التقنية ومقاييس الأداء: نماذج ONNX المحلية بدقة INT8 تعمل مباشرة على معالج هاتفك.",
        about: "قصة إنشاء TrustNode ومهمتنا ضد شبكات الاحتيال المنظمة وفريق المطورين.",
        "not-found": "الصفحة غير موجودة. عد إلى محيط TrustNode الآمن."
      },
      pt: {
        home: "TrustNode — o primeiro escudo de segurança 100% offline com IA para proteger seu celular contra fraudes e spam.",
        "how-it-works": "Veja como o domo de segurança de 7 camadas do TrustNode detecta fraudes e coerção verbal sem internet.",
        tech: "Detalhes técnicos e métricas de velocidade: modelos ONNX locais INT8 rodando diretamente no processador.",
        about: "A história do TrustNode, nossa luta contra redes de fraude organizadas e nossa equipe de engenharia.",
        "not-found": "Página não encontrada. Retorne ao perímetro seguro do TrustNode."
      },
      fr: {
        home: "TrustNode — le premier bouclier de sécurité mobile 100% hors ligne propulsé par l'IA contre les fraudes et le spam.",
        "how-it-works": "Découvrez comment le dôme de 7 couches de TrustNode détecte les tactiques de fraude sans connexion Internet.",
        tech: "Détails techniques et performances : modèles ONNX locaux quantifiés en INT8 fonctionnant sur votre processeur.",
        about: "L'histoire de TrustNode, notre combat contre les réseaux de fraude organisés et notre équipe d'ingénieurs.",
        "not-found": "Page introuvable. Retournez dans le périmètre sécurisé TrustNode."
      },
      de: {
        home: "TrustNode — der weltweit erste vollständig offline funktionierende KI-Schutzschild gegen Telefonbetrug und Spam.",
        "how-it-works": "Erfahren Sie, wie die 7-schichtige Sicherheitskuppel von TrustNode Betrugstaktiken lokal und ohne Internet erkennt.",
        tech: "Technische Details und Latenzmetriken: INT8-quantisierte lokale ONNX-Modelle direkt auf Ihrem Prozessor.",
        about: "Die Geschichte von TrustNode, unser Kampf gegen organisierte Betrugsnetzwerke und unser Kernteam.",
        "not-found": "Seite nicht gefunden. Kehren Sie zum sicheren TrustNode-Bereich zurück."
      },
      ja: {
        home: "TrustNode — 世界初の完全オフライン動作AI搭載モバイルセキュリティシールド。特殊詐欺やスパム通話を防ぎます。",
        "how-it-works": "TrustNodeの7層セキュリティドームが、インターネットに接続せず詐欺の手口をどう検知するかご覧ください。",
        tech: "技術仕様と遅延メトリクス：プロセッサ上で直接動作するINT8量子化ローカルONNXモデル。",
        about: "TrustNode誕生のストーリー、組織的詐欺ネットワークとの戦い、そして開発チームのご紹介。",
        "not-found": "ページが見つかりません。安全なTrustNodeエリアへお戻りください。"
      }
    };

    const descMap = descriptions[currentLang] || descriptions["en"] || descriptions["ru"];
    const descText = descMap[activePage] || (activePage === "roadmap" ? (currentLang === "ru" ? "Документальные подтверждения реальной стадии разработки, научные грамоты и слепки архитектуры." : "Documentary proof of active development, academic credentials, and software architecture artifacts.") : (descMap["home"] || ""));
    
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMetaTag('meta[name="description"]', "name", "description", descText);
    setMetaTag('meta[property="og:title"]', "property", "og:title", pageTitle);
    setMetaTag('meta[property="og:description"]', "property", "og:description", descText);
    setMetaTag('meta[property="og:url"]', "property", "og:url", window.location.href);
  }, [activePage, language]);

  // Continuous zoom factor for the starfield
  const zoomFactor = 1.05;

  // Beautiful Header is always visible for instant navigation
  const showHeader = true;

  return (
    <div 
      className="relative w-full max-w-full overflow-x-hidden bg-[#0A0A0B] selection:bg-[#2E7DFF]/30 selection:text-[#F5F5F0]"
      style={{ minHeight: "100vh" }}
      id="app-container"
    >
      {/* Fixed Network Background (Acts as the uniform starfield throughout) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <Suspense fallback={<SkyPlaceholder />}>
          <NetworkBackground zoomFactor={zoomFactor} warpProgress={0} isEcoMode={ecoMode} onSkyStatusChange={setSkyStatus} language={language} />
        </Suspense>
      </div>

      {/* Universal Fixed Header - Displayed on all pages across the application */}
      <div 
        className="transition-all duration-500 fixed top-0 left-0 right-0 z-50"
        style={{ 
          opacity: 1, 
          transform: "translateY(0)",
          pointerEvents: "auto" 
        }}
      >
        <Header isEcoMode={ecoMode} onToggleEcoMode={toggleEcoMode} />
      </div>

      {/* DYNAMIC PAGE ROUTER */}
      <div className="relative z-10 w-full flex flex-col" id="page-router-outlet">
        <AnimatePresence mode="wait">
          {activePage === "home" && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full flex flex-col"
            >
              {/* INTRO TRACK CONTAINER */}
              {/* Sequential flow: Section 1 (Hero Title) followed by Section 2 (Logo Assembly & Cards) */}
               <div className="relative w-full z-10 flex flex-col pointer-events-none" id="intro-scroll-track">
                  
                  {/* SECTION 1: HERO TITLE (100dvh) */}
                  <div 
                    className="relative w-full flex items-center justify-center px-4 select-none pointer-events-none"
                    style={{ height: "100dvh" }}
                    id="main-hero-section-container"
                  >
                    {/* Title and Status Badge Container */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="flex flex-col items-center justify-center text-center max-w-5xl px-4 pointer-events-none"
                      id="main-hero-section"
                    >
                      {/* Status Badge */}
                      <div 
                        className={`inline-flex flex-col items-center justify-center px-4 py-1.5 ${!ecoMode && skyStatus ? "rounded-2xl gap-1 py-2" : "rounded-full"} bg-[#0A162C]/80 border border-[#2E7DFF]/40 shadow-[0_0_15px_rgba(46,125,255,0.25)] mb-8 transition-all duration-300`}
                        id="status-badge"
                      >
                        <div className="inline-flex items-center gap-2.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7DFF] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7DFF]"></span>
                          </span>
                          <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.18em] text-[#2E7DFF]">
                            {t.hero.badge}
                          </span>
                        </div>
                        {!ecoMode && skyStatus && (
                          <span className="font-mono text-[9px] sm:text-[10.5px] font-medium tracking-[0.12em] text-[#2E7DFF]/85 text-center">
                            {skyStatus}
                          </span>
                        )}
                      </div>

                      {/* Huge Hero Title */}
                      <h1 
                        className="font-display font-bold text-5xl sm:text-7xl md:text-[110px] lg:text-[130px] xl:text-[140px] leading-[0.9] tracking-tight mb-6 filter drop-shadow-[0_0_35px_rgba(46,125,255,0.35)]"
                        id="main-title"
                      >
                        <span className="text-[#F5F5F0]">Trust</span>
                        <span className="text-[#2E7DFF]">Node</span>
                      </h1>

                      {/* Monospaced Bracketed Subtitle */}
                      <p 
                        className="font-mono text-xs sm:text-sm tracking-[0.22em] text-gray-500 max-w-2xl px-2"
                        id="main-subtitle"
                      >
                        {t.hero.titleSub}
                      </p>
                    </motion.div>

                    {/* Scroll Down Indicator */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center"
                      id="scroll-indicator-container-wrapper"
                    >
                      <button 
                        onClick={() => {
                          window.scrollTo({ top: vh * 1.0, behavior: "smooth" });
                        }}
                        className="flex flex-col items-center gap-2 cursor-pointer group pointer-events-auto z-30 transition-opacity duration-300"
                        id="scroll-indicator-container"
                      >
                        <span className="font-mono text-[10px] tracking-[0.25em] text-[#2E7DFF] group-hover:text-white transition-colors uppercase font-bold">
                          {t.hero.scrollStart}
                        </span>
                        <svg 
                          className="w-4 h-4 text-gray-500 animate-bounce mt-1" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </button>
                    </motion.div>
                  </div>

                  {/* SECTION 2: LOGO ASSEMBLY & PANELS (100dvh) */}
                  <div 
                    ref={section2Ref}
                    className="relative w-full flex items-center justify-center px-4 pb-28 pt-16 select-none pointer-events-none"
                    style={{ 
                      minHeight: "100dvh",
                    }}
                    id="slide2-assembly-section-container"
                  >
                    {/* Central content container shifted slightly higher to feel perfectly framed */}
                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 w-full px-4 pointer-events-auto"
                      style={{
                        transform: "translateY(-75px)",
                      }}
                      id="slide2-assembly-section"
                    >
                         
                      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 w-full max-w-5xl mx-auto shrink-0">
                        {/* Left Status Label */}
                        <motion.div
                          style={{
                            opacity: logoProgress > 0.15 ? Math.min(1, (logoProgress - 0.15) / 0.85) : 0,
                            x: logoProgress > 0.15 ? -40 * (1 - Math.min(1, (logoProgress - 0.15) / 0.85)) : -40
                          }}
                          className="flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:w-64"
                        >
                          <span className="font-display font-extrabold text-xl sm:text-2xl text-[#F5F5F0] tracking-tight">
                            {t.assembly?.leftPrimary || "OFFLINE-FIRST"}
                          </span>
                          <span className="font-mono text-[9px] sm:text-[10px] text-[#2E7DFF] tracking-wider mt-1.5 uppercase">
                            {t.assembly?.leftSub || "// ДАННЫЕ НЕ ПОКИДАЮТ УСТРОЙСТВО"}
                          </span>
                        </motion.div>

                        {/* Central Logo */}
                        <div className="flex items-center justify-center shrink-0">
                          <AssembledLogo progress={logoProgress} ecoMode={ecoMode} />
                        </div>

                        {/* Right Status Label */}
                        <motion.div
                          style={{
                            opacity: logoProgress > 0.15 ? Math.min(1, (logoProgress - 0.15) / 0.85) : 0,
                            x: logoProgress > 0.15 ? 40 * (1 - Math.min(1, (logoProgress - 0.15) / 0.85)) : 40
                          }}
                          className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-64"
                        >
                          <span className="font-display font-extrabold text-xl sm:text-2xl text-[#F5F5F0] tracking-tight">
                            {t.assembly?.rightPrimary || "ZERO TELEMETRY"}
                          </span>
                          <span className="font-mono text-[9px] sm:text-[10px] text-[#2E7DFF] tracking-wider mt-1.5 uppercase">
                            {t.assembly?.rightSub || "// НИКАКОЙ ТЕЛЕМЕТРИИ"}
                          </span>
                        </motion.div>
                      </div>

                      {/* Minimalist HUD Status Bar */}
                      <AnimatePresence>
                        {logoProgress > 0.6 && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                              visible: {
                                transition: {
                                  staggerChildren: 0.15
                                }
                              }
                            }}
                            className="flex flex-wrap items-center justify-center gap-3 mt-2 pointer-events-none select-none"
                            id="logo-assembly-hud-bar"
                          >
                            {[
                              hudTranslations[language]?.core || hudTranslations.en.core,
                              hudTranslations[language]?.nodes || hudTranslations.en.nodes,
                              hudTranslations[language]?.mode || hudTranslations.en.mode
                            ].map((text, idx) => (
                              <motion.div
                                key={idx}
                                variants={{
                                  hidden: { opacity: 0, y: 10, scale: 0.95 },
                                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
                                }}
                                className="font-mono text-[9px] sm:text-[11px] tracking-[0.1em] font-semibold text-[#2E7DFF] bg-[#0A162C]/50 border border-[#2E7DFF]/20 px-3.5 py-1.5 rounded-full shadow-[0_0_10px_rgba(46,125,255,0.08)] whitespace-nowrap"
                              >
                                {text}
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>
                    
                    {/* Bottom Area of Section 2 with Dynamic Dome Navigator */}
                    {logoProgress > 0.1 && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center shrink-0">
                        <button
                          onClick={() => {
                            window.scrollTo({ top: vh * 2.0, behavior: "smooth" });
                          }}
                          className="flex flex-col items-center gap-3 cursor-pointer group z-30 transition-all duration-300 pointer-events-auto"
                          id="enter-dome-arrow-btn"
                        >
                          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-[#2E7DFF]/30 bg-[#0A162C]/40 backdrop-blur-md group-hover:border-[#2E7DFF]/80 group-hover:shadow-[0_0_15px_rgba(46,125,255,0.4)] transition-all duration-300">
                            <svg 
                              className="w-5 h-5 text-[#2E7DFF] group-hover:text-[#F5F5F0] transition-colors translate-y-0 group-hover:translate-y-0.5 transition-transform animate-bounce" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2.5" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
                            </svg>
                          </div>
                          <span className="font-mono text-[9px] tracking-[0.3em] text-[#2E7DFF] group-hover:text-white transition-colors uppercase font-bold animate-pulse mt-2">
                            {t.hero.enterDome}
                          </span>
                        </button>
                      </div>
                    )}

                  </div>
              </div>

              {/* CORE LANDING CONTENT (NORMAL DOCUMENT FLOW) */}
              <div ref={coreLandingRef} className="relative z-20 w-full flex flex-col bg-[#0A0A0B]/90 backdrop-blur-sm shadow-[0_-30px_60px_rgba(10,10,11,0.95)]" id="core-landing-page">
                {showReplayIntro && (
                  <div className="max-w-6xl mx-auto w-full px-4 pt-8 pb-2 flex justify-start">
                    <button
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="font-mono text-[9px] text-gray-500 hover:text-[#2E7DFF] transition-all flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#1F2937]/30 bg-[#0F0F12]/85 cursor-pointer hover:border-[#2E7DFF]/45 hover:shadow-[0_0_12px_rgba(46,125,255,0.08)]"
                      id="replay-intro-btn"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      <span>{t.replayIntro}</span>
                    </button>
                  </div>
                )}
                <IntroSection />
                <ProblemSection />
                <TrustSection />
                <LiveSimulatorSection />
                <ExplorePagesSection />
                <Footer 
                  onOpenPrivacy={() => {
                    setLegalModalTab("privacy");
                    setIsLegalModalOpen(true);
                  }}
                  onOpenTerms={() => {
                    setLegalModalTab("terms");
                    setIsLegalModalOpen(true);
                  }}
                />
              </div>
            </motion.div>
          )}

          {activePage === "how-it-works" && (
            <motion.div
              key="how-it-works-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full min-h-[100vh] flex flex-col justify-between"
            >
              <Breadcrumbs currentPage={activePage} />
              <div className="flex-1 flex flex-col bg-[#0A0A0B]/90 backdrop-blur-sm">
                <HowItWorksSection />
                <KiraAssistantSection />
              </div>
              <PageNavigationFooter currentPage={activePage} />
              <Footer 
                onOpenPrivacy={() => {
                  setLegalModalTab("privacy");
                  setIsLegalModalOpen(true);
                }}
                onOpenTerms={() => {
                  setLegalModalTab("terms");
                  setIsLegalModalOpen(true);
                }}
              />
            </motion.div>
          )}

          {activePage === "tech" && (
            <motion.div
              key="tech-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full min-h-[100vh] flex flex-col justify-between"
            >
              <Breadcrumbs currentPage={activePage} />
              <div className="flex-1 flex flex-col bg-[#0A0A0B]/90 backdrop-blur-sm">
                <AppSecuritySection />
                <RealDevelopmentSection onlyRoadmap={false} />
              </div>
              <PageNavigationFooter currentPage={activePage} />
              <Footer 
                onOpenPrivacy={() => {
                  setLegalModalTab("privacy");
                  setIsLegalModalOpen(true);
                }}
                onOpenTerms={() => {
                  setLegalModalTab("terms");
                  setIsLegalModalOpen(true);
                }}
              />
            </motion.div>
          )}

          {activePage === "roadmap" && (
            <motion.div
              key="roadmap-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full min-h-[100vh] flex flex-col justify-between"
            >
              <Breadcrumbs currentPage={activePage} />
              <div className="flex-1 flex flex-col bg-[#0A0A0B]/90 backdrop-blur-sm">
                <RealDevelopmentSection onlyRoadmap={true} />
              </div>
              <PageNavigationFooter currentPage={activePage} />
              <Footer 
                onOpenPrivacy={() => {
                  setLegalModalTab("privacy");
                  setIsLegalModalOpen(true);
                }}
                onOpenTerms={() => {
                  setLegalModalTab("terms");
                  setIsLegalModalOpen(true);
                }}
              />
            </motion.div>
          )}

          {activePage === "about" && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full min-h-[100vh] flex flex-col justify-between"
            >
              <Breadcrumbs currentPage={activePage} />
              <div className="flex-1 flex flex-col bg-[#0A0A0B]/90 backdrop-blur-sm">
                <OriginStorySection />
              </div>
              <PageNavigationFooter currentPage={activePage} />
              <Footer 
                onOpenPrivacy={() => {
                  setLegalModalTab("privacy");
                  setIsLegalModalOpen(true);
                }}
                onOpenTerms={() => {
                  setLegalModalTab("terms");
                  setIsLegalModalOpen(true);
                }}
              />
            </motion.div>
          )}

          {(activePage === "download" || activePage === "early-access") && (
            <motion.div
              key={`${activePage}-page`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full min-h-[100vh] flex flex-col justify-between"
            >
              <Breadcrumbs currentPage={activePage} />
              <div className="flex-1 flex flex-col bg-[#0A0A0B]/90 backdrop-blur-sm">
                <EarlyAccessPage />
              </div>
              <PageNavigationFooter currentPage={activePage} />
              <Footer 
                onOpenPrivacy={() => {
                  setLegalModalTab("privacy");
                  setIsLegalModalOpen(true);
                }}
                onOpenTerms={() => {
                  setLegalModalTab("terms");
                  setIsLegalModalOpen(true);
                }}
              />
            </motion.div>
          )}

          {activePage === "comparison" && (
            <motion.div
              key="comparison-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full min-h-[100vh] flex flex-col justify-between"
            >
              <Breadcrumbs currentPage={activePage} />
              <div className="flex-1 flex flex-col bg-[#0A0A0B]/90 backdrop-blur-sm">
                <ComparisonSection />
              </div>
              <Footer 
                onOpenPrivacy={() => {
                  setLegalModalTab("privacy");
                  setIsLegalModalOpen(true);
                }}
                onOpenTerms={() => {
                  setLegalModalTab("terms");
                  setIsLegalModalOpen(true);
                }}
              />
            </motion.div>
          )}

          {activePage === "not-found" && (
            <motion.div
              key="not-found-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full min-h-[100vh] flex flex-col justify-between"
            >
              <Breadcrumbs currentPage={activePage} />
              <div className="flex-1 flex flex-col bg-[#0A0A0B]/90 backdrop-blur-sm">
                <NotFoundPage />
              </div>
              <Footer 
                onOpenPrivacy={() => {
                  setLegalModalTab("privacy");
                  setIsLegalModalOpen(true);
                }}
                onOpenTerms={() => {
                  setLegalModalTab("terms");
                  setIsLegalModalOpen(true);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legal documents and FZ-152 Cookie Consent modules */}
      <CookieConsent 
        onOpenPrivacy={() => {
          setLegalModalTab("privacy");
          setIsLegalModalOpen(true);
        }}
      />

      <LegalModal 
        isOpen={isLegalModalOpen} 
        onClose={() => setIsLegalModalOpen(false)} 
        tab={legalModalTab} 
      />

    </div>
  );
}
