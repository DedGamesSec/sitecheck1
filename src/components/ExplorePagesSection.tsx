import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigation } from "../navigation/NavigationContext";
import { PAGES_CONFIG } from "../navigation/pages.config";
import { Home, Cpu, ShieldCheck, Map, Users, BarChart3, Download } from "lucide-react";
import type { LanguageCode } from "../i18n/languages";

const PAGE_ICONS: Record<string, React.ElementType> = {
  home: Home,
  "how-it-works": Cpu,
  tech: ShieldCheck,
  roadmap: Map,
  about: Users,
  comparison: BarChart3,
  download: Download,
};

const HEADER_PAGES = PAGES_CONFIG.filter((p) => p.showInHeader).sort((a, b) => a.order - b.order);

type LangDict = Record<LanguageCode, string>;

const PAGE_BADGES: Record<string, LangDict> = {
  home: {
    ru: "ПОРТАЛ ПЛАТФОРМЫ", en: "PLATFORM PORTAL", es: "PORTAL DE PLATAFORMA", zh: "平台门户", tr: "PLATFORM PORTALI",
    hi: "प्लेटफ़ॉर्म पोर्टल", ar: "بوابة المنصة", pt: "PORTAL DA PLATAFORMA", fr: "PORTAL PLATEFORME", de: "PLATTFORM-PORTAL", ja: "プラットフォームポータル",
  },
  "how-it-works": {
    ru: "СИСТЕМА PHANTOM", en: "PHANTOM SYSTEM", es: "SISTEMA PHANTOM", zh: "PHANTOM 系统", tr: "PHANTOM SİSTEMİ",
    hi: "PHANTOM प्रणाली", ar: "نظام PHANTOM", pt: "SISTEMA PHANTOM", fr: "SYSTÈME PHANTOM", de: "PHANTOM-SYSTEM", ja: "PHANTOM システム",
  },
  tech: {
    ru: "ЗАЩИТА И АРХИТЕКТУРА", en: "SECURITY & ARCHITECTURE", es: "SEGURIDAD Y ARQUITECTURA", zh: "安全与架构", tr: "GÜVENLİK VE MİMARİ",
    hi: "सुरक्षा और आर्किटेक्चर", ar: "الأمان والبنية", pt: "SEGURANÇA E ARQUITETURA", fr: "SÉCURITÉ ET ARCHITECTURE", de: "SICHERHEIT & ARCHITEKTUR", ja: "セキュリティとアーキテクチャ",
  },
  roadmap: {
    ru: "ДОРОЖНАЯ КАРТА", en: "ROADMAP", es: "HOJA DE RUTA", zh: "路线图", tr: "YOL HARİTASI",
    hi: "रोडमैप", ar: "خارطة الطريق", pt: "ROTEIRO", fr: "FEUILLE DE ROUTE", de: "FAHRPLAN", ja: "ロードマップ",
  },
  about: {
    ru: "ВАЛИДАЦИЯ И ПАТЕНТЫ", en: "VALIDATION & PATENTS", es: "VALIDACIÓN Y PATENTES", zh: "认证与专利", tr: "DOĞRULAMA VE PATENTLER",
    hi: "मान्यता और पेटेंट", ar: "التحقق والبراءات", pt: "VALIDAÇÃO E PATENTES", fr: "VALIDATION ET BREVETS", de: "VALIDIERUNG & PATENTE", ja: "検証と特許",
  },
  comparison: {
    ru: "ФАКТЫ И КОНКУРЕНТЫ", en: "FACTS & COMPETITORS", es: "HECHOS Y COMPETIDORES", zh: "事实与竞品", tr: "GERÇEKLER VE RAKİPLER",
    hi: "तथ्य और प्रतिस्पर्धी", ar: "الحقائق والمنافسون", pt: "FATOS E CONCORRENTES", fr: "FAITS ET CONCURRENTS", de: "FAKTEN & KONKURRENZ", ja: "事実と競合",
  },
  download: {
    ru: "СКАЧАТЬ ПРИЛОЖЕНИЕ", en: "DOWNLOAD APP", es: "DESCARGAR APP", zh: "下载应用", tr: "UYGULAMAYI İNDİR",
    hi: "ऐप डाउनलोड करें", ar: "تنزيل التطبيق", pt: "BAIXAR APP", fr: "TÉLÉCHARGER L'APP", de: "APP HERUNTERLADEN", ja: "アプリをダウンロード",
  },
};

const PAGE_DESCRIPTIONS: Record<string, LangDict> = {
  home: {
    ru: "Обзор платформы TrustNode: локальный AI-антифрид, защита конфиденциальности и полный контроль над вашими данными.",
    en: "TrustNode platform overview: local AI anti-fraud, privacy protection, and full control over your data.",
    es: "Descripción general de TrustNode: anti-fraude con IA local, protección de privacidad y control total de sus datos.",
    zh: "TrustNode 平台概览：本地 AI 反欺诈、隐私保护以及对数据的完全掌控。",
    tr: "TrustNode platforma genel bakış: yerel AI dolandırıcılık koruması, gizlilik ve verileriniz üzerinde tam kontrol.",
    hi: "TrustNode प्लेटफ़ॉर्म अवलोकन: स्थानीय AI एंटी-फ्रॉड, गोपनीयता सुरक्षा और आपके डेटा पर पूर्ण नियंत्रण।",
    ar: "نظرة عامة على منصة TrustNode: مكافحة احتيال محلية بالذكاء الاصطناعي، حماية الخصوصية، وتحكم كامل في بياناتك.",
    pt: "Visão geral da plataforma TrustNode: antifraude local com IA, proteção de privacidade e controle total dos seus dados.",
    fr: "Aperçu de TrustNode : anti-fraude IA local, protection de la vie privée et contrôle total de vos données.",
    de: "TrustNode-Plattformüberblick: lokaler KI-Anti-Fraud, Datenschutz und volle Kontrolle über Ihre Daten.",
    ja: "TrustNode プラットフォーム概要：ローカルAI不正防止、プライバシー保護、データの完全な管理。",
  },
  "how-it-works": {
    ru: "Техническая детализация семислойного защитного купола PHANTOM 2.0 и интеллектуальный голосовой ассистент KIRA, работающий локально на устройстве.",
    en: "Technical breakdown of the 7-layer PHANTOM 2.0 security dome and the intelligent voice assistant KIRA running fully on-device.",
    es: "Desglose técnico del domo de seguridad PHANTOM 2.0 de 7 capas y del asistente de voz KIRA, totalmente en el dispositivo.",
    zh: "7 层 PHANTOM 2.0 安全防护罩的技术解析，以及完全在设备本地运行的智能语音助手 KIRA。",
    tr: "7 katmanlı PHANTOM 2.0 güvenlik kubbesinin teknik analizi ve cihazda tamamen yerel çalışan akıllı ses asistanı KIRA.",
    hi: "7-स्तरीय PHANTOM 2.0 सुरक्षा डोम का तकनीकी विवरण और पूरी तरह से ऑन-डिवाइस चलने वाला बुद्धिमान वॉयस असिस्टेंट KIRA।",
    ar: "تفاصيل تقنية لقبة الحماية PHANTOM 2.0 من 7 طبقات والمساعد الصوتي الذكي KIRA الذي يعمل محلياً بالكامل.",
    pt: "Detalhamento técnico do domo de segurança PHANTOM 2.0 de 7 camadas e o assistente de voz inteligente KIRA, totalmente no dispositivo.",
    fr: "Analyse technique du dôme de sécurité PHANTOM 2.0 à 7 couches et de l'assistant vocal KIRA, entièrement sur l'appareil.",
    de: "Technische Aufschlüsselung der 7-schichtigen PHANTOM-2.0-Sicherheitskuppel und des intelligenten Sprachassistenten KIRA, der vollständig auf dem Gerät läuft.",
    ja: "7層のPHANTOM 2.0セキュリティドームと、完全オンデバイスで動作するインテリジェント音声アシスタントKIRAの技術解説。",
  },
  tech: {
    ru: "Глубокое погружение в архитектуру безопасности, мобильный AI-движок ruBERT и систему обнаружения мошенничества в реальном времени.",
    en: "Deep dive into the security architecture, mobile AI engine ruBERT, and real-time fraud detection system.",
    es: "Análisis profundo de la arquitectura de seguridad, el motor de IA móvil ruBERT y la detección de fraude en tiempo real.",
    zh: "深入探讨安全架构、移动 AI 引擎 ruBERT 和实时欺诈检测系统。",
    tr: "Güvenlik mimarisine, mobil AI motoru ruBERT'e ve gerçek zamanlı dolandırıcılık tespit sistemine derinlemesine bir bakış.",
    hi: "सुरक्षा आर्किटेक्चर, मोबाइल AI इंजन ruBERT और रीयल-टाइम धोखाधड़ी पहचान प्रणाली की गहन समीक्षा।",
    ar: "تعمق في بنية الأمان ومحرك الذكاء الاصطناعي المحمول ruBERT ونظام كشف الاحتيال في الوقت الفعلي.",
    pt: "Análise profunda da arquitetura de segurança, do mecanismo de IA móvel ruBERT e da detecção de fraudes em tempo real.",
    fr: "Plongée dans l'architecture de sécurité, le moteur IA mobile ruBERT et la détection de fraude en temps réel.",
    de: "Tiefer Einblick in die Sicherheitsarchitektur, die mobile KI-Engine ruBERT und die Echtzeit-Betrugserkennung.",
    ja: "セキュリティアーキテクチャ、モバイルAIエンジンruBERT、リアルタイム詐欺検知システムを深掘り。",
  },
  roadmap: {
    ru: "План развития проекта: от текущей MVP-версии до полноценной экосистемы с публичным аудитом и открытым API.",
    en: "Project development plan: from the current MVP to a full ecosystem with public audit and open API.",
    es: "Plan de desarrollo: desde el MVP actual hasta un ecosistema completo con auditoría pública y API abierta.",
    zh: "项目发展计划：从当前的 MVP 到拥有公共审计和开放 API 的完整生态系统。",
    tr: "Proje geliştirme planı: mevcut MVP'den genel denetimli ve açık API'li tam ekosisteme.",
    hi: "परियोजना विकास योजना: वर्तमान MVP से सार्वजनिक ऑडिट और ओपन API वाले पूर्ण इकोसिस्टम तक।",
    ar: "خطة تطوير المشروع: من النسخة الأولية الحالية إلى نظام بيئي كامل مع تدقيق عام وAPI مفتوح.",
    pt: "Plano de desenvolvimento do projeto: do MVP atual a um ecossistema completo com auditoria pública e API aberta.",
    fr: "Plan de développement : du MVP actuel à un écosystème complet avec audit public et API ouverte.",
    de: "Projektentwicklungsplan: vom aktuellen MVP zu einem vollständigen Ökosystem mit öffentlichem Audit und offener API.",
    ja: "プロジェクト開発計画：現在のMVPから、公開監査とオープンAPIを備えた完全なエコシステムへ。",
  },
  about: {
    ru: "Официальный патент ФИПС, золотая медаль на региональном НИР, участие во всероссийском финале в Москве и история создания проекта.",
    en: "Official patent filings, first place in regional IT research, national finals invitation, and our project development journey.",
    es: "Patentes oficiales, primer lugar en investigación regional de TI, invitación a la final nacional y nuestra trayectoria.",
    zh: "官方专利申报、地区信息技术研究第一名、全国总决赛邀请以及我们的项目发展历程。",
    tr: "Resmi patent başvuruları, bölgesel BT araştırmasında birincilik, ulusal final daveti ve proje geliştirme yolculuğumuz.",
    hi: "आधिकारिक पेटेंट दाखिल, क्षेत्रीय आईटी अनुसंधान में प्रथम स्थान, राष्ट्रीय फाइनल आमंत्रण और हमारी परियोजना यात्रा।",
    ar: "ملفات براءات اختراع رسمية، المركز الأول في الأبحاث التقنية الإقليمية، دعوة للنهائي الوطني ورحلة تطوير مشروعنا.",
    pt: "Registros oficiais de patente, primeiro lugar em pesquisa regional de TI, convite para a final nacional e nossa trajetória.",
    fr: "Dépôts de brevets officiels, première place en recherche régionale informatique, invitation à la finale nationale et notre parcours.",
    de: "Offizielle Patentanmeldungen, erster Platz in regionaler IT-Forschung, Einladung zum nationalen Finale und unsere Projektentwicklung.",
    ja: "公式特許出願、地域IT研究で第1位、全国大会ファイナルへの招待、そしてプロジェクトの歩み。",
  },
  comparison: {
    ru: "Объективная сравнительная таблица функциональности TrustNode с существующими на рынке аналогами по ключевым параметрам.",
    en: "An objective comparative analysis of TrustNode vs leading global security solutions across key parameters.",
    es: "Un análisis comparativo objetivo de TrustNode frente a las principales soluciones de seguridad globales.",
    zh: "TrustNode 与全球领先安全解决方案在关键参数上的客观对比分析。",
    tr: "TrustNode'un önde gelen küresel güvenlik çözümleriyle temel parametreler üzerinden objektif karşılaştırması.",
    hi: "प्रमुख मानकों पर TrustNode बनाम अग्रणी वैश्विक सुरक्षा समाधानों का निष्पक्ष तुलनात्मक विश्लेषण।",
    ar: "تحليل مقارن موضوعي بين TrustNode وحلول الأمان العالمية الرائدة عبر المعايير الأساسية.",
    pt: "Uma análise comparativa objetiva do TrustNode versus as principais soluções globais de segurança.",
    fr: "Une analyse comparative objective de TrustNode face aux principales solutions de sécurité mondiales.",
    de: "Eine objektive vergleichende Analyse von TrustNode gegenüber führenden globalen Sicherheitslösungen.",
    ja: "主要なパラメータに基づく、TrustNodeと世界の主要セキュリティソリューションの客観的比較分析。",
  },
  download: {
    ru: "Скачайте TrustNode бесплатно из RuStore или с GitHub и защитите свой смартфон от мошенников и спама.",
    en: "Download TrustNode for free from RuStore or GitHub and protect your smartphone from scammers and spam.",
    es: "Descargue TrustNode gratis desde RuStore o GitHub y proteja su smartphone de estafadores y spam.",
    zh: "从 RuStore 或 GitHub 免费下载 TrustNode，保护您的智能手机免受诈骗和垃圾信息骚扰。",
    tr: "TrustNode'u RuStore veya GitHub'dan ücretsiz indirin ve akıllı telefonunuzu dolandırıcılardan ve spam'lerden koruyun.",
    hi: "RuStore या GitHub से TrustNode मुफ्त में डाउनलोड करें और अपने स्मार्टफोन को स्कैमर्स और स्पैम से सुरक्षित रखें।",
    ar: "حمّل TrustNode مجاناً من RuStore أو GitHub واحمِ هاتفك الذكي من المحتالين والرسائل المزعجة.",
    pt: "Baixe o TrustNode gratuitamente na RuStore ou no GitHub e proteja seu smartphone contra golpes e spam.",
    fr: "Téléchargez TrustNode gratuitement depuis RuStore ou GitHub et protégez votre smartphone des arnaques et du spam.",
    de: "Laden Sie TrustNode kostenlos von RuStore oder GitHub herunter und schützen Sie Ihr Smartphone vor Betrügern und Spam.",
    ja: "RuStoreまたはGitHubからTrustNodeを無料でダウンロードして、詐欺やスパムからスマートフォンを守りましょう。",
  },
};

const PAGE_CTA: Record<string, LangDict> = {
  home: {
    ru: "Открыть главную →", en: "Open Home →", es: "Abrir inicio →", zh: "打开首页 →", tr: "Ana Sayfayı Aç →",
    hi: "मुख्य खोलें →", ar: "افتح الرئيسية →", pt: "Abrir Início →", fr: "Ouvrir l'accueil →", de: "Startseite öffnen →", ja: "ホームを開く →",
  },
  "how-it-works": {
    ru: "Изучить технологии →", en: "Explore Technology →", es: "Explorar tecnología →", zh: "了解技术 →", tr: "Teknolojiyi Keşfet →",
    hi: "तकनीक देखें →", ar: "استكشف التقنية →", pt: "Explorar tecnologia →", fr: "Explorer la technologie →", de: "Technologie entdecken →", ja: "技術を探る →",
  },
  tech: {
    ru: "Перейти к защите →", en: "View Security →", es: "Ver seguridad →", zh: "查看安全 →", tr: "Güvenliği Gör →",
    hi: "सुरक्षा देखें →", ar: "عرض الأمان →", pt: "Ver segurança →", fr: "Voir la sécurité →", de: "Sicherheit ansehen →", ja: "セキュリティを見る →",
  },
  roadmap: {
    ru: "Смотреть Roadmap →", en: "View Roadmap →", es: "Ver hoja de ruta →", zh: "查看路线图 →", tr: "Yol Haritasını Gör →",
    hi: "रोडमैप देखें →", ar: "عرض خارطة الطريق →", pt: "Ver roteiro →", fr: "Voir la feuille de route →", de: "Roadmap ansehen →", ja: "ロードマップを見る →",
  },
  about: {
    ru: "О проекте и команде →", en: "About Us & Team →", es: "Sobre nosotros y equipo →", zh: "关于我们与团队 →", tr: "Hakkımızda ve Ekip →",
    hi: "हमारे बारे में और टीम →", ar: "من نحن والفريق →", pt: "Sobre nós e equipe →", fr: "À propos et équipe →", de: "Über uns & Team →", ja: "私たちとチームについて →",
  },
  comparison: {
    ru: "Открыть таблицу сравнения →", en: "Open Comparison →", es: "Abrir comparación →", zh: "打开对比 →", tr: "Karşılaştırmayı Aç →",
    hi: "तुलना खोलें →", ar: "افتح المقارنة →", pt: "Abrir comparação →", fr: "Ouvrir la comparaison →", de: "Vergleich öffnen →", ja: "比較を開く →",
  },
  download: {
    ru: "Скачать приложение →", en: "Download App →", es: "Descargar app →", zh: "下载应用 →", tr: "Uygulamayı İndir →",
    hi: "ऐप डाउनलोड करें →", ar: "تنزيل التطبيق →", pt: "Baixar app →", fr: "Télécharger l'app →", de: "App herunterladen →", ja: "アプリをダウンロード →",
  },
};

export default function ExplorePagesSection() {
  const { t, language } = useTranslation();
  const { activePage, navigateTo } = useNavigation();
  const visiblePages = HEADER_PAGES.filter((p) => p.id !== activePage);

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
          {visiblePages.map((page) => {
            const Icon = PAGE_ICONS[page.id];
            const badge = PAGE_BADGES[page.id]?.[language] || "";
            const desc = PAGE_DESCRIPTIONS[page.id]?.[language] || "";
            const cta = PAGE_CTA[page.id]?.[language] || "";

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
