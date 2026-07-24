import React from "react";
import { Sparkles, ArrowLeft, Send, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigation } from "../navigation/NavigationContext";
import { LanguageCode } from "../i18n/languages";
import { motion } from "motion/react";

const LOCAL_COMP_DICT: Record<LanguageCode, Record<string, string>> = {
  ru: {
    backToMain: "Назад на Главную",
    targetIndicator: "🎯 целевой ориентир",
    roadmapInfo: "TrustNode (TN1) — фактически готовый MVP мобильного приложения. Новые модули (TN3, KIRA) находятся в активном бэклоге разработки."
  },
  en: {
    backToMain: "Back to Main",
    targetIndicator: "🎯 target indicator",
    roadmapInfo: "TrustNode (TN1) is a ready mobile application MVP. Next-gen modules (TN3, KIRA) are in active roadmap development."
  },
  es: {
    backToMain: "Volver al Inicio",
    targetIndicator: "🎯 indicador objetivo",
    roadmapInfo: "TrustNode (TN1) es un MVP de aplicación móvil listo. Los módulos de próxima generación (TN3, KIRA) se encuentran en desarrollo activo."
  },
  zh: {
    backToMain: "返回主页",
    targetIndicator: "🎯 核心规划指标",
    roadmapInfo: "TrustNode (TN1) 移动应用 MVP 已就绪。下一代防护罩（TN3、KIRA）正处于活跃开发计划中。"
  },
  tr: {
    backToMain: "Ana Sayfaya Dön",
    targetIndicator: "🎯 hedef gösterge",
    roadmapInfo: "TrustNode (TN1) mobil uygulama MVP'si hazır durumdadır. Yeni nesil modüller (TN3, KIRA) aktif geliştirme planındadır."
  },
  hi: {
    backToMain: "मुख्य पृष्ठ पर वापस",
    targetIndicator: "🎯 लक्षित संकेतक",
    roadmapInfo: "TrustNode (TN1) एक तैयार मोबाइल एप्लीकेशन MVP है। अगली पीढ़ी के मॉड्यूल (TN3, KIRA) सक्रिय विकास रोडमैप में हैं।"
  },
  ar: {
    backToMain: "العودة للرئيسية",
    targetIndicator: "🎯 المؤشر المستهدف",
    roadmapInfo: "تطبيق TrustNode (TN1) جاهز كإصدار MVP. الوحدات النقدية التالية (TN3, KIRA) في مرحلة التطوير النشط حالياً."
  },
  pt: {
    backToMain: "Voltar para Principal",
    targetIndicator: "🎯 indicador-alvo",
    roadmapInfo: "O TrustNode (TN1) é um MVP de aplicativo móvel pronto. Os novos módulos (TN3, KIRA) estão em desenvolvimento ativo."
  },
  fr: {
    backToMain: "Retour à l'Accueil",
    targetIndicator: "🎯 indicateur cible",
    roadmapInfo: "TrustNode (TN1) est un MVP d'application mobile opérationnel. Les modules de nouvelle génération (TN3, KIRA) sont en cours de développement."
  },
  de: {
    backToMain: "Zurück zur Hauptseite",
    targetIndicator: "🎯 Zielindikator",
    roadmapInfo: "TrustNode (TN1) ist ein fertiges mobiles MVP. Die Module der nächsten Generation (TN3, KIRA) befinden sich in der aktiven Entwicklung."
  },
  ja: {
    backToMain: "メインに戻る",
    targetIndicator: "🎯 開発目標指標",
    roadmapInfo: "TrustNode (TN1) は実用可能なモバイルアプリMVPです。次世代モジュール（TN3、KIRA）はロードマップに従い、現在活発に開発中です。"
  }
};

const COMPETITORS = [
  { id: "kaspersky", name: "Kaspersky", priceRu: "от ~1990₽/год", priceEn: "from ~$19.99/yr" },
  { id: "norton", name: "Norton", priceRu: "от ~2990₽/год", priceEn: "from ~$39.99/yr" },
  { id: "bitdefender", name: "Bitdefender", priceRu: "от ~2490₽/год", priceEn: "from ~$29.99/yr" },
  { id: "googleSpam", name: "Google Protection", priceRu: "Бесплатно", priceEn: "Free" },
  { id: "truecaller", name: "Truecaller", priceRu: "от ~990₽/год", priceEn: "from ~$29.99/yr" },
  { id: "malwarebytes", name: "Malwarebytes", priceRu: "от ~2490₽/год", priceEn: "from ~$39.99/yr" },
  { id: "adguard", name: "AdGuard", priceRu: "от ~1290₽/год", priceEn: "from ~$19.99/yr" },
  { id: "avast", name: "Avast Security", priceRu: "от ~1890₽/год", priceEn: "from ~$29.99/yr" },
  { id: "yandex", name: "Яндекс Определитель", priceRu: "Бесплатно", priceEn: "Free" },
  { id: "mcafee", name: "McAfee Security", priceRu: "от ~2490₽/год", priceEn: "from ~$39.99/yr" },
  { id: "lookout", name: "Lookout Safety", priceRu: "от ~1890₽/год", priceEn: "from ~$29.99/yr" },
  { id: "getcontact", name: "Getcontact", priceRu: "от ~1490₽/год", priceEn: "from ~$19.99/yr" }
];

const SELECT_LABELS: Record<LanguageCode, string> = {
  ru: "Выберите продукты для сравнения с TrustNode (активно до 4 одновременно):",
  en: "Select products to compare with TrustNode (up to 4 active simultaneously):",
  es: "Seleccione productos para comparar con TrustNode (hasta 4 activos a la vez):",
  zh: "选择与 TrustNode 对比的真实安全产品（同时最多选择 4 个）：",
  tr: "TrustNode ile karşılaştırmak için ürünleri seçin (en fazla 4 adet):",
  hi: "TrustNode के साथ तुलना करने के लिए उत्पादों का चयन करें (एक बार में 4 तक):",
  ar: "اختر المنتجات للمقارنة مع TrustNode (بحد أقصى 4 في وقت واحد):",
  pt: "Selecione produtos para comparar com TrustNode (até 4 por vez):",
  fr: "Sélectionnez les produits à comparer avec TrustNode (jusqu'à 4 à la fois):",
  de: "Wählen Sie Produkte zum Vergleich mit TrustNode aus (bis zu 4 gleichzeitig):",
  ja: "TrustNodeと比較するセキュリティ製品を選択（同時に最大4つまで）："
};

const SELECT_LABELS_SINGLE: Record<LanguageCode, string> = {
  ru: "Выберите один продукт для сравнения 1-на-1 с TrustNode:",
  en: "Select one product to compare 1-on-1 with TrustNode:",
  es: "Seleccione un producto para comparar 1 a 1 con TrustNode:",
  zh: "选择 1 个与 TrustNode 进行 1对1 对比的产品：",
  tr: "TrustNode ile 1-on-1 karşılaştırmak için bir ürün seçin:",
  hi: "TrustNode के साथ 1-on-1 तुलना करने के लिए एक उत्पाद चुनें:",
  ar: "اختر منتجًا واحدًا للمقارنة 1 لـ 1 مع TrustNode:",
  pt: "Selecione um produto para comparar 1 a 1 com TrustNode:",
  fr: "Sélectionnez un produit à comparer 1-à-1 avec TrustNode:",
  de: "Wählen Sie ein Produkt für den 1-zu-1-Vergleich mit TrustNode aus:",
  ja: "TrustNodeと1対1で比較する製品を1つ選択してください："
};

const MODE_LABELS: Record<string, { label: string; multi: string; single: string }> = {
  ru: {
    label: "Режим сравнения:",
    multi: "Мульти-сравнение (до 4)",
    single: "Сравнить 1-на-1 (только 1)"
  },
  en: {
    label: "Comparison Mode:",
    multi: "Multi-compare (up to 4)",
    single: "1-on-1 Compare (only 1)"
  },
  es: {
    label: "Modo de comparación:",
    multi: "Comparación múltiple (hasta 4)",
    single: "Comparar 1 a 1 (solo 1)"
  },
  zh: {
    label: "对比模式：",
    multi: "多重对比（最多 4 个）",
    single: "1对1对比（仅选 1 个）"
  },
  tr: {
    label: "Karşılaştırma Modu:",
    multi: "Çoklu Karşılaştırma (4'e kadar)",
    single: "1-on-1 Karşılaştırma (sadece 1)"
  },
  hi: {
    label: "तुलна मोड:",
    multi: "बहु-तुलна (4 तक)",
    single: "1-on-1 तुलना (केवल 1)"
  },
  ar: {
    label: "وضع المقارنة:",
    multi: "مقارنة متعددة (حتى 4)",
    single: "مقارنة 1 لـ 1 (واحد فقط)"
  },
  pt: {
    label: "Modo de Comparação:",
    multi: "Multi-comparação (até 4)",
    single: "Comparar 1 a 1 (apenas 1)"
  },
  fr: {
    label: "Mode de comparaison:",
    multi: "Multi-comparaison (jusqu'à 4)",
    single: "Comparer 1-à-1 (seulement 1)"
  },
  de: {
    label: "Vergleichsmodus:",
    multi: "Mehrfachvergleich (bis zu 4)",
    single: "1-zu-1-Vergleich (nur 1)"
  },
  ja: {
    label: "比較モード：",
    multi: "マルチ比較（最大4つ）",
    single: "1対1比較（1つのみ）"
  }
};

const COMPARISON_DATA = [
  {
    key: "textAnalysis",
    trustNode: "yes",
    kaspersky: "yes",
    norton: "yes",
    bitdefender: "yes",
    googleSpam: "yes",
    truecaller: "yes",
    malwarebytes: "yes",
    adguard: "yes",
    avast: "yes",
    yandex: "yes",
    mcafee: "yes",
    lookout: "yes",
    getcontact: "yes"
  },
  {
    key: "voiceAnalysis",
    trustNode: "target",
    kaspersky: "no",
    norton: "no",
    bitdefender: "no",
    googleSpam: "no",
    truecaller: "no",
    malwarebytes: "no",
    adguard: "no",
    avast: "no",
    yandex: "no",
    mcafee: "no",
    lookout: "no",
    getcontact: "no"
  },
  {
    key: "visualAnalysis",
    trustNode: "yes",
    kaspersky: "yes",
    norton: "yes",
    bitdefender: "yes",
    googleSpam: "no",
    truecaller: "no",
    malwarebytes: "yes",
    adguard: "yes",
    avast: "yes",
    yandex: "no",
    mcafee: "yes",
    lookout: "yes",
    getcontact: "no"
  },
  {
    key: "socialEngDetect",
    trustNode: "yes",
    kaspersky: "no",
    norton: "no",
    bitdefender: "no",
    googleSpam: "no",
    truecaller: "no",
    malwarebytes: "no",
    adguard: "no",
    avast: "no",
    yandex: "no",
    mcafee: "no",
    lookout: "no",
    getcontact: "no"
  },
  {
    key: "behavioralRasp",
    trustNode: "yes",
    kaspersky: "yes",
    norton: "yes",
    bitdefender: "yes",
    googleSpam: "no",
    truecaller: "no",
    malwarebytes: "yes",
    adguard: "no",
    avast: "yes",
    yandex: "no",
    mcafee: "yes",
    lookout: "yes",
    getcontact: "no"
  },
  {
    key: "familyDefense",
    trustNode: "yes",
    kaspersky: "yes",
    norton: "yes",
    bitdefender: "no",
    googleSpam: "no",
    truecaller: "no",
    malwarebytes: "no",
    adguard: "no",
    avast: "yes",
    yandex: "no",
    mcafee: "yes",
    lookout: "yes",
    getcontact: "no"
  },
  {
    key: "beaconSystem",
    trustNode: "yes",
    kaspersky: "no",
    norton: "no",
    bitdefender: "no",
    googleSpam: "no",
    truecaller: "no",
    malwarebytes: "no",
    adguard: "no",
    avast: "no",
    yandex: "no",
    mcafee: "no",
    lookout: "no",
    getcontact: "no"
  },
  {
    key: "offlineOnDevice",
    trustNode: "yes",
    kaspersky: "no",
    norton: "no",
    bitdefender: "no",
    googleSpam: "no",
    truecaller: "no",
    malwarebytes: "no",
    adguard: "yes",
    avast: "no",
    yandex: "no",
    mcafee: "no",
    lookout: "no",
    getcontact: "no"
  }
];

export default function ComparisonSection() {
  const { t, language } = useTranslation();
  const { navigateTo } = useNavigation();

  const cp = t.comparisonPage;
  const localComp = LOCAL_COMP_DICT[language] || LOCAL_COMP_DICT.en;

  const [comparisonMode, setComparisonMode] = React.useState<"multi" | "single">("multi");
  const [selectedCompIds, setSelectedCompIds] = React.useState<string[]>([
    "kaspersky",
    "truecaller",
    "googleSpam",
    "yandex"
  ]);

  const handleModeChange = (mode: "multi" | "single") => {
    setComparisonMode(mode);
    if (mode === "single") {
      setSelectedCompIds([selectedCompIds[0] || "kaspersky"]);
    }
  };

  const toggleCompetitor = (id: string) => {
    if (comparisonMode === "single") {
      setSelectedCompIds([id]);
    } else {
      if (selectedCompIds.includes(id)) {
        if (selectedCompIds.length > 1) {
          setSelectedCompIds(selectedCompIds.filter(cid => cid !== id));
        }
      } else {
        if (selectedCompIds.length < 4) {
          setSelectedCompIds([...selectedCompIds, id]);
        } else {
          setSelectedCompIds([...selectedCompIds.slice(1), id]);
        }
      }
    }
  };

  const getPrice = (compId: string) => {
    const comp = COMPETITORS.find(c => c.id === compId);
    if (!comp) return "";
    return language === "ru" ? comp.priceRu : comp.priceEn;
  };

  const renderCellStatus = (statusValue: string) => {
    if (statusValue === "yes") {
      return (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] sm:text-xs">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{cp.status.yes}</span>
        </div>
      );
    }
    if (statusValue === "no") {
      return (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono text-[10px] sm:text-xs">
          <XCircle className="w-3.5 h-3.5" />
          <span>{cp.status.no}</span>
        </div>
      );
    }
    if (statusValue === "inDev") {
      return (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-[10px] sm:text-xs">
          <HelpCircle className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
          <span>{cp.status.inDev}</span>
        </div>
      );
    }
    if (statusValue === "target") {
      return (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] sm:text-xs">
          <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
          <span>{localComp.targetIndicator}</span>
        </div>
      );
    }

    return <span className="text-gray-400 font-sans text-xs">{statusValue}</span>;
  };

  return (
    <div className="relative w-full min-h-screen pt-8 pb-16 px-4 flex flex-col items-center justify-start bg-[#050507] overflow-hidden select-none" id="comparison-root">
      {/* Dynamic ambient layout grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col relative z-10">
        
        {/* Go back header */}
        <button 
          onClick={() => navigateTo("home")}
          className="self-start mb-8 font-mono text-xs text-gray-500 hover:text-[#2E7DFF] flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.04] bg-white/[0.02] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{localComp.backToMain}</span>
        </button>

        {/* Badge */}
        <div className="inline-flex self-center items-center gap-2 px-3 py-1 bg-[#101F3B]/40 border border-[#2E7DFF]/20 rounded-full mb-4">
          <Sparkles className="w-3 h-3 text-[#2E7DFF]" />
          <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-[#2E7DFF] uppercase">
            {cp.badge}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-black text-3xl sm:text-5xl text-[#F5F5F0] text-center tracking-tight mb-4 filter drop-shadow-[0_0_15px_rgba(46,125,255,0.15)]">
          {cp.title}
        </h1>
        <p className="font-sans text-sm sm:text-base text-gray-500 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
          {cp.subtitle}
        </p>

        {/* Product status info box */}
        <div className="max-w-3xl mx-auto mb-8 px-4 py-2.5 rounded-xl border border-blue-500/10 bg-blue-500/[0.02] text-center flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-blue-400 shrink-0 animate-pulse" />
          <span className="font-sans text-xs text-blue-300 font-medium leading-relaxed">
            {localComp.roadmapInfo}
          </span>
        </div>

        {/* Interactive Selector badges */}
        <div className="w-full mb-8 p-6 border border-[#1F2937]/20 bg-[#070709]/50 rounded-2xl">
          {/* Mode Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 pb-5 border-b border-white/[0.04]">
            <span className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold">
              {(MODE_LABELS[language] || MODE_LABELS.en).label}
            </span>
            <div className="flex bg-white/[0.02] border border-white/[0.06] p-1 rounded-xl">
              <button
                onClick={() => handleModeChange("multi")}
                className={`px-3 py-1.5 rounded-lg font-sans text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  comparisonMode === "multi"
                    ? "bg-[#2E7DFF] text-white shadow-[0_2px_8px_rgba(46,125,255,0.3)]"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {(MODE_LABELS[language] || MODE_LABELS.en).multi}
              </button>
              <button
                onClick={() => handleModeChange("single")}
                className={`px-3 py-1.5 rounded-lg font-sans text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  comparisonMode === "single"
                    ? "bg-[#2E7DFF] text-white shadow-[0_2px_8px_rgba(46,125,255,0.3)]"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {(MODE_LABELS[language] || MODE_LABELS.en).single}
              </button>
            </div>
          </div>

          <h4 className="font-mono text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 text-center">
            {comparisonMode === "single"
              ? (SELECT_LABELS_SINGLE[language] || SELECT_LABELS_SINGLE.en)
              : (SELECT_LABELS[language] || SELECT_LABELS.en)}
          </h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {COMPETITORS.map(comp => {
              const active = selectedCompIds.includes(comp.id);
              return (
                <button
                  key={comp.id}
                  onClick={() => toggleCompetitor(comp.id)}
                  className={`px-3 py-1.5 rounded-xl font-sans text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#2E7DFF]/15 border-[#2E7DFF] text-white shadow-[0_0_10px_rgba(46,125,255,0.2)]"
                      : "bg-white/[0.02] border-white/[0.06] text-gray-400 hover:border-white/[0.15] hover:text-gray-200"
                  }`}
                >
                  {comp.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Table Container card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full p-4 sm:p-6 border border-[#1F2937]/30 bg-[#070709]/75 backdrop-blur-md rounded-3xl overflow-hidden mb-8"
        >
          <div className="w-full overflow-x-auto rounded-2xl border border-white/[0.04] bg-[#030406]/50">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.01]">
                  <th className="p-4 sm:p-5 font-mono text-[10px] sm:text-xs font-extrabold text-gray-500 uppercase tracking-wider w-[24%]">
                    {cp.thFeature}
                  </th>
                  <th className="p-4 sm:p-5 font-display font-black text-xs sm:text-sm text-[#2E7DFF] uppercase tracking-wider w-[19%] bg-[#2E7DFF]/5">
                    {cp.thTrustNode}
                  </th>
                  {selectedCompIds.map(compId => {
                    const comp = COMPETITORS.find(c => c.id === compId);
                    return (
                      <th key={compId} className="p-4 sm:p-5 font-display font-bold text-xs sm:text-sm text-gray-300 uppercase tracking-wider w-[14%]">
                        {comp?.name || compId}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, index) => {
                  const featureName = cp.features[row.key as keyof typeof cp.features] || row.key;
                  return (
                    <tr 
                      key={row.key} 
                      className={`border-b border-white/[0.03] transition-colors hover:bg-white/[0.01] ${
                        index === COMPARISON_DATA.length - 1 ? "border-none" : ""
                      }`}
                    >
                      {/* Feature Label */}
                      <td className="p-4 sm:p-5 font-sans text-xs sm:text-sm font-medium text-gray-300">
                        {featureName}
                      </td>

                      {/* TrustNode */}
                      <td className="p-4 sm:p-5 bg-[#2E7DFF]/[0.02] border-x border-[#2E7DFF]/10 font-sans">
                        {renderCellStatus(row.trustNode)}
                      </td>

                      {/* Competitors */}
                      {selectedCompIds.map(compId => (
                        <td key={compId} className="p-4 sm:p-5 font-sans">
                          {renderCellStatus(row[compId as keyof typeof row] || "no")}
                        </td>
                      ))}
                    </tr>
                  );
                })}

                {/* Pricing Row */}
                <tr className="transition-colors hover:bg-white/[0.01]">
                  <td className="p-4 sm:p-5 font-sans text-xs sm:text-sm font-medium text-gray-300">
                    {cp.features.pricing}
                  </td>
                  <td className="p-4 sm:p-5 bg-[#2E7DFF]/[0.02] border-x border-[#2E7DFF]/10 font-sans">
                    <span className="text-[#2E7DFF] font-sans text-xs font-semibold">{cp.pricingValues.trustNode}</span>
                  </td>
                  {selectedCompIds.map(compId => (
                    <td key={compId} className="p-4 sm:p-5 font-sans">
                      <span className="text-gray-400 font-sans text-xs">{getPrice(compId)}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Disclaimer section */}
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl border border-[#1F2937]/30 bg-[#070709]/75 backdrop-blur-md">
          <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6">
            {cp.disclaimer}
          </p>
          <a
            href="https://t.me/TrustNode_team"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2E7DFF] text-white font-sans text-xs font-bold hover:bg-[#2E7DFF]/90 transition-all cursor-pointer shadow-[0_0_15px_rgba(46,125,255,0.2)] hover:shadow-[0_0_20px_rgba(46,125,255,0.35)]"
          >
            <Send className="w-4 h-4" />
            <span>{cp.telegramBtn}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
