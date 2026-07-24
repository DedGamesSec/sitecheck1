import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigation, PageId } from "../navigation/NavigationContext";
import { useTranslation } from "../i18n/LanguageContext";
import { motion } from "motion/react";
import { ORDERED_PAGES } from "../navigation/pages.config";

const NEXT_LABEL: Record<string, string> = {
  ru: "Следующий раздел",
  en: "Next Section",
  es: "Siguiente Sección",
  zh: "下一章节",
  tr: "Sonraki Bölüm",
  hi: "अगला भाग",
  ar: "القسم التالي",
  pt: "Próxima Seção",
  fr: "Section Suivante",
  de: "Nächster Abschnitt",
  ja: "次のセクション",
};

const PAGE_DESCRIPTIONS: Record<PageId, Record<string, string>> = {
  home: {
    ru: "Вернуться на главную страницу TrustNode",
    en: "Return to the main TrustNode landing page",
    es: "Volver a la página principal de TrustNode",
    zh: "返回 TrustNode 主页",
    tr: "TrustNode ana sayfasına geri dön",
    hi: "TrustNode के मुख्य पृष्ठ पर लौटें",
    ar: "العودة إلى صفحة TrustNode الرئيسية",
    pt: "Retornar à página inicial do TrustNode",
    fr: "Retourner à la page d'accueil de TrustNode",
    de: "Zurück zur Hauptseite von TrustNode",
    ja: "TrustNodeメインページに戻る",
  },
  "how-it-works": {
    ru: "Подробный разбор ИБ-купола и ассистента Kira",
    en: "Deep dive into the security dome and Kira Assistant",
    es: "Análisis detallado de la cúpula y el asistente Kira",
    zh: "深入了解安全穹顶与 Kira 智能助手",
    tr: "Güvenlik kubbesi ve Kira Asistanı hakkında detaylı inceleme",
    hi: "सुरक्षा डोम और Kira सहायक का विस्तृत विवरण",
    ar: "شرح مفصل لقبة الأمان ومساعد Kira",
    pt: "Análise detalhada do domo de segurança e assistente Kira",
    fr: "Analyse détaillée du dôme de sécurité et de l'assistant Kira",
    de: "Detaillierte Analyse der Sicherheitskuppel und des Kira-Assistenten",
    ja: "セキュリティドームとKiraアシスタントの詳細解説",
  },
  tech: {
    ru: "Технические подробности и доказательства разработки",
    en: "Technical details and active development evidence",
    es: "Detalles técnicos y evidencia de desarrollo activo",
    zh: "技术细节与活跃开发证据",
    tr: "Teknik detaylar ve aktif geliştirme kanıtları",
    hi: "तकनीकी विवरण and सक्रिय विकास साक्ष्य",
    ar: "التفاصيل التقنية وأدلة التطوير النشط",
    pt: "Detalhes técnicos e evidências de desenvolvimento ativo",
    fr: "Détails techniques et preuves de développement actif",
    de: "Technische Details und Nachweise der aktiven Entwicklung",
    ja: "技術的な詳細とアクティブな開発実績",
  },
  roadmap: {
    ru: "Карта разработки, научные грамоты и ONNX-ядро",
    en: "Development roadmap, academic credentials, and ONNX engine",
    es: "Mapa de desarrollo, credenciales académicas y motor ONNX",
    zh: "研发路线图、学术凭证及 ONNX 核心引擎",
    tr: "Geliştirme yol haritası, akademik belgeler ve ONNX motoru",
    hi: "विकास रोडमैप, शैक्षणिक कrediेंशियल्स और ONNX इंजन",
    ar: "خريطة طريق التطوير والمؤهلات الأكاديمية ومحرك ONNX",
    pt: "Roteiro de desenvolvimento, credenciais acadêmicas e motor ONNX",
    fr: "Feuille de route de développement, diplômes universitaires et moteur ONNX",
    de: "Entwicklungs-Roadmap, akademische Referenzen und ONNX-Motor",
    ja: "開発ロードマップ、学術的資格、およびONNXエンジン",
  },
  about: {
    ru: "Официальный патент, история создания и команда",
    en: "Official patent, origin story, and the core team",
    es: "Patente oficial, historia y el equipo central",
    zh: "官方专利、创立历程以及核心团队",
    tr: "Resmi patent, kuruluş hikayesi ve çekirdek ekip",
    hi: "आधिकारिक पेटेंट, इतिहास और मुख्य टीम",
    ar: "البراءة الرسمية وقصة التأسيس والفريق الأساسي",
    pt: "Patente oficial, história de origem e equipe principal",
    fr: "Brevet officiel, histoire de création et équipe principale",
    de: "Offizielles Patent, Entstehungsgeschichte und Kernteam",
    ja: "公式特許、誕生ストーリー、そしてコアチーム",
  },
  comparison: {
    ru: "Сравнить TrustNode с альтернативами по функциям и офлайн-защите",
    en: "Compare TrustNode with alternatives across features and offline protection",
    es: "Compare TrustNode con alternativas por funciones y protección offline",
    zh: "按功能与离线防护对比 TrustNode 和其他方案",
    tr: "Özellikler ve çevrimdışı koruma açısından TrustNode'u alternatiflerle karşılaştırın",
    hi: "फ़ीचर्स और ऑफलाइन सुरक्षा के आधार पर TrustNode की तुलना विकल्पों से करें",
    ar: "قارن TrustNode بالبدائل من حيث الميزات والحماية دون اتصال",
    pt: "Compare o TrustNode com alternativas por recursos e proteção offline",
    fr: "Comparez TrustNode aux alternatives selon les fonctions et la protection hors ligne",
    de: "Vergleichen Sie TrustNode mit Alternativen nach Funktionen und Offline-Schutz",
    ja: "機能とオフライン保護で TrustNode を他製品と比較します",
  },
  download: {
    ru: "Скачать сборки и перейти к актуальным источникам распространения",
    en: "Download builds and go to the current distribution sources",
    es: "Descargue las compilaciones y abra las fuentes actuales de distribución",
    zh: "下载构建版本并前往当前发布渠道",
    tr: "Derlemeleri indirin ve güncel dağıtım kaynaklarına gidin",
    hi: "बिल्ड डाउनलोड करें और मौजूदा источникам वितरण पर जाएँ",
    ar: "نزّل الإصدارات وانتقل إلى قنوات التوزيع الحالية",
    pt: "Baixe as versões e abra as fontes atuais de distribuição",
    fr: "Téléchargez les builds et accédez aux sources de distribution actuelles",
    de: "Laden Sie Builds herunter und öffnen Sie die aktuellen Distributionsquellen",
    ja: "ビルドをダウンロードし、現在の配布元へ進みます",
  },
  "not-found": {},
  admin: {},
};

interface PageNavigationFooterProps {
  currentPage: PageId;
}

export default function PageNavigationFooter({ currentPage }: PageNavigationFooterProps) {
  const { navigateTo } = useNavigation();
  const { t, language } = useTranslation();
  const pagesSeq = ORDERED_PAGES;

  // Find index of current page in sequence
  const currentIndex = pagesSeq.findIndex((p) => p.id === currentPage);
  if (currentIndex === -1) return null;

  // Determine the next page in sequence
  const nextPageIndex = (currentIndex + 1) % pagesSeq.length;
  const nextPage = pagesSeq[nextPageIndex];

  // Get localized labels
  const pageLabel = t.pageNames[nextPage.id] || nextPage.id;
  const pageDesc = PAGE_DESCRIPTIONS[nextPage.id]?.[language] || PAGE_DESCRIPTIONS[nextPage.id]?.en || "";
  const nextLabel = NEXT_LABEL[language] || NEXT_LABEL.en;

  const handleNextNavigation = () => {
    navigateTo(nextPage.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full py-10 px-4 border-t border-[#1F2937]/30 bg-[#060608]/90 relative overflow-hidden select-none" id="page-nav-footer">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#2E7DFF]/20 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          onClick={handleNextNavigation}
          className="group relative w-full md:max-w-2xl p-6 sm:p-8 border border-[#1F2937]/30 bg-[#070709]/75 backdrop-blur-md rounded-3xl hover:border-[#2E7DFF]/45 hover:shadow-[0_0_25px_rgba(46,125,255,0.12)] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          {/* Accent light overlay */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#2E7DFF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="relative z-10">
            {/* Small Monospaced Badge */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2E7DFF] animate-pulse" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#2E7DFF] uppercase">
                {nextLabel}
              </span>
            </div>

            {/* Next Page Title */}
            <h4 className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F0] group-hover:text-[#2E7DFF] transition-colors mb-2">
              {pageLabel}
            </h4>
            
            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed">
              {pageDesc}
            </p>
          </div>

          {/* Action indicator arrow */}
          <div className="relative z-10 flex items-center gap-2 self-end sm:self-center shrink-0">
            <div className="w-10 h-10 rounded-full border border-[#2E7DFF]/20 bg-[#2E7DFF]/5 group-hover:border-[#2E7DFF]/50 group-hover:bg-[#2E7DFF]/15 flex items-center justify-center text-[#2E7DFF] group-hover:text-white transition-all duration-300 group-hover:scale-110">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
