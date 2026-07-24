import React from "react";
import { Mic, Bot, WifiOff, HardDrive, Cpu, Radio, FileText } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { LanguageCode } from "../i18n/languages";

const TITLE_BY_LANG: Partial<Record<LanguageCode, string>> = {
  ru: "Голосовой ассистент KIRA",
  en: "KIRA Voice Assistant",
  es: "Asistente de Voz KIRA",
  zh: "KIRA 语音助手",
  hi: "कीरा (KIRA) वॉयс असिस्टेंट",
  ar: "المساعد الصوتي KIRA",
  pt: "Assistente de Voz KIRA",
  fr: "Assistant Vocal KIRA",
  de: "KIRA Sprachassistent",
  ja: "音声アシスタント KIRA"
};

const SUBTITLE_BY_LANG: Partial<Record<LanguageCode, string>> = {
  ru: "Интеллектуальный речевой контур, работающий прямо в оперативной памяти телефона",
  en: "An intelligent, speech-capable companion running fully within your local RAM",
  es: "Un bucle de voz inteligente que se ejecuta directamente en la memoria RAM de su teléfono",
  zh: "直接在手机运行内存中运行的智能语音分析回路",
  hi: "एक बुद्धिमान भाषण-सक्षम साथी जो पूरी तरह से आपके स्थानीय रैम के भीतर चलता है",
  ar: "دائرة كلامية ذكية تعمل مباشرة في ذاكرة الوصول العشوائي (RAM) لهاتفك",
  pt: "Um circuito de fala inteligente operando diretamente na memória RAM do seu celular",
  fr: "Un circuit de parole intelligent fonctionnant entièrement dans la mémoire RAM locale de votre smartphone",
  de: "Ein intelligenter, sprachfähiger Begleiter, der vollständig in Ihrem lokalen RAM läuft",
  ja: "スマートフォンの RAM 上で完全に動作する、インテリジェントな音声認識回路"
};

const BADGE_BY_LANG: Partial<Record<LanguageCode, string>> = {
  ru: "ПРОГРАММНЫЙ ПЛАН: KIRA",
  en: "PROJECT TIMELINE: KIRA",
  es: "CRONOGRAMA DEL PROYECTO: KIRA",
  zh: "项目规划：KIRA",
  hi: "परियोजना समयरेखा: KIRA",
  ar: "خطة البرنامج: KIRA",
  pt: "PLANO DO PROJETO: KIRA",
  fr: "CALENDRIER DU PROJET : KIRA",
  de: "PROJEKTZEITPLAN: KIRA",
  ja: "プロジェクト計画：KIRA"
};

const KIRA_STATUS_BY_LANG: Record<LanguageCode, string> = {
  ru: "ЭТАП ПРОЕКТИРОВАНИЯ (DESIGN PHASE)",
  en: "DESIGN PHASE",
  es: "FASE DE DISEÑO",
  zh: "设计阶段",
  tr: "TASARIM AŞAMASI",
  hi: "डिज़ाइन चरण",
  ar: "مرحلة التصميم",
  pt: "FASE DE PROJETO",
  fr: "PHASE DE CONCEPTION",
  de: "DESIGNPHASE",
  ja: "設計フェーズ"
};

const FEATURES_BY_LANG: Partial<Record<LanguageCode, Array<{ title: string; desc: string }>>> = {
  ru: [
    {
      title: "Локальный Интент-Классификатор",
      desc: "Дообученная надстройка над основной rubert-tiny2. Распознает 15-20 специализированных интентов безопасности, добавляя к модели всего ~200 КБ весов."
    },
    {
      title: "Работа на 100% Офлайн",
      desc: "Никаких обращений к облачным LLM. Вся семантическая структура и шаблоны ответов упакованы в приложение, работая без сети в режиме сверхнизкой задержки."
    },
    {
      title: "Синтетический Датасет Коллаборации",
      desc: "Обучена на узкоспециализированных синтетических диалогах мошеннических схем, сгенерированных в облаке Google Colab с помощью Llama 3.1 и Qwen2.5."
    }
  ],
  en: [
    {
      title: "Local Intent Classifier",
      desc: "A highly optimized fine-tuned add-on on top of the main rubert-tiny2 model. Resolves 15-20 specific security intents, introducing a mere 200 KB memory footprint."
    },
    {
      title: "100% Offline Execution",
      desc: "No expensive, slow external LLM API calls. Fully offline response templates and speech processing algorithms keep execution latency down to microseconds."
    },
    {
      title: "Advanced Training Datasets",
      desc: "Trained on synthetic dialogues of social-engineering schemes synthesized in Google Colab using advanced Llama 3.1 and Qwen2.5 models for ultimate accuracy."
    }
  ],
  es: [
    {
      title: "Clasificador de Intenciones Local",
      desc: "Extensión entrenada sobre la red rubert-tiny2 básica. Reconoce entre 15 y 20 intenciones de seguridad especializadas, añadiendo solo ~200 KB de peso al modelo."
    },
    {
      title: "Ejecución 100% Fuera de Línea",
      desc: "Sin conexiones a LLM en la nube. Toda la estructura semántica y las plantillas de respuestas están empaquetadas en la aplicación, funcionando sin conexión con latencia ultra baja."
    },
    {
      title: "Conjunto de Datos Sintéticos",
      desc: "Entrenada con diálogos sintéticos altamente especializados de esquemas de fraude, generados en la nube de Google Colab mediante Llama 3.1 y Qwen2.5."
    }
  ],
  zh: [
    {
      title: "本地意图分类器",
      desc: "基于主 rubert-tiny2 的微调附加组件。可识别 15-20 个特定的安全意图，仅增加约 200 KB 的模型权重。"
    },
    {
      title: "100% 离线执行",
      desc: "无需请求云端大模型 API。所有语义结构和应答模板都打包在应用中，在无网状态下以超低延迟运行。"
    },
    {
      title: "先进训练数据集",
      desc: "在高度专业的欺诈计划合成对话上进行训练，这些对话是使用先进的 Llama 3.1 和 Qwen2.5 模型在 Google Colab 中生成的。"
    }
  ],
  hi: [
    {
      title: "स्थानीय इरादा वर्गीकारक",
      desc: "मुख्य rubert-tiny2 के शीर्ष पर एक अत्यधिक अनुकूलित फाइन-ट्यून्ड ऐड-ऑन। केवल 200 KB मेमोरी फ़ुटप्रिंट के साथ 15-20 विशिष्ट सुरक्षा इरादों को हल करता है।"
    },
    {
      title: "100% ऑफ़लाइन निष्पादन",
      desc: "कोई महंगा, धीमा बाहरी LLM API कॉल नहीं। पूरी तरह से ऑफ़लाइन प्रतिक्रिया टेम्पलेट और भाषण प्रसंस्करण एल्गोरिदम निष्पादन विलंबता को सूक्ष्मसेकंड तक कम रखते हैं।"
    },
    {
      title: "उन्नत प्रशिक्षण डेटासेट",
      desc: "अंतिम सटीकता के लिए उन्नत Llama 3.1 और Qwen2.5 मॉडल का उपयोग करके Google Colab में संश्लेषित सोशल-इंजीनियरिंग योजनाओं के सिंथेटिक संवादों पर प्रशिक्षित।"
    }
  ],
  ar: [
    {
      title: "مصنف النوايا المحلي",
      desc: "إضافة مدربة ومحسنة فوق نموذج rubert-tiny2 الأساسي. يتعرف على 15-20 نية أمنية متخصصة، مضافًا إلى وزن النموذج ~200 كيلوبايت فقط."
    },
    {
      title: "تشغيل أوفلاين بنسبة 100%",
      desc: "لا توجد اتصالات بنماذج لغوية سحابية مكلفة. جميع هياكل الدلالات وقوالب الاستجابة معبأة في التطبيق، وتعمل بدون شبكة بزمن انتقال فائق القصر."
    },
    {
      title: "مجموعات البيانات التدريبية المتقدمة",
      desc: "تم تدريبه على حوارات تركيبية متخصصة للغاية لخطط الاحتيال، تم إنشاؤها في سحابة Google Colab باستخدام نموذجي Llama 3.1 و Qwen2.5."
    }
  ],
  pt: [
    {
      title: "Classificador de Intenção Local",
      desc: "Extensão ajustada sobre a rede rubert-tiny2 principal. Reconoce de 15 a 20 intenções de segurança específicas, adicionando apenas ~200 KB de peso ao modelo."
    },
    {
      title: "Execução 100% Off-line",
      desc: "Sem chamadas para LLMs em nuvem. Toda a estrutura semântica e os modelos de resposta estão embutidos no aplicativo, rodando sem rede em modo de latência ultra baixa."
    },
    {
      title: "Dataset de Treinamento Avançado",
      desc: "Treinado em diálogos sintéticos altamente especializados de esquemas de fraude, gerados no Google Colab usando Llama 3.1 e Qwen2.5."
    }
  ],
  fr: [
    {
      title: "Classificateur d'Intents Local",
      desc: "Un module complémentaire affiné et hautement optimisé au-dessus du modèle principal rubert-tiny2. Résout 15 à 20 intentions de sécurité spécifiques pour une empreinte mémoire de seulement 200 Ko."
    },
    {
      title: "Exécution 100 % hors ligne",
      desc: "Aucun appel d'API LLM externe lent et coûteux. Les modèles de réponse entièrement hors ligne et les algorithmes de traitement de la parole maintiennent la latence d'exécution à l'échelle de la microseconde."
    },
    {
      title: "Jeux de données d'entraînement avancés",
      desc: "Entraîné sur des dialogues synthétiques de schémas d'ingénierie sociale synthétisés dans Google Colab à l'aide de modèles avancés Llama 3.1 et Qwen2.5 pour une précision ultime."
    }
  ],
  de: [
    {
      title: "Lokaler Intent-Klassifikator",
      desc: "Ein hochgradig optimiertes, feingetuntes Add-On auf Basis des rubert-tiny2-Hauptmodells. Erkennt 15-20 spezifische Sicherheits-Intents bei nur 200 KB Speicherbedarf."
    },
    {
      title: "100% Offline-Ausführung",
      desc: "Keine teuren, langsamen externen LLM-API-Aufrufe. Vollständige Offline-Antwortvorlagen und Sprachverarbeitungsalgorithmen halten die Latenz im Mikrosekundenbereich."
    },
    {
      title: "Fortschrittliche Trainingsdaten",
      desc: "Trainiert mit hochspezialisierten synthetischen Dialogen von Betrugsszenarien, die in Google Colab mit Llama 3.1 und Qwen2.5 generiert wurden."
    }
  ],
  ja: [
    {
      title: "ローカル意図分類器",
      desc: "ベースとなる rubert-tiny2 上に構築された追加の調整レイヤー。わずか約200 KBのウェイト追加で、15〜20個のセキュリティに特化した意図を識別します。"
    },
    {
      title: "100% オフライン動作",
      desc: "クラウド上の大規模言語モデル（LLM）への問い合わせは一切不要。すべての意味構造と応答テンプレートはアプリ内にパッケージ化され、ネットワークなしで超低遅延で機能します。"
    },
    {
      title: "高度な合成データセット",
      desc: "Google Colab上にて Llama 3.1 や Qwen2.5 などの先端モデルを用いて生成された、ソーシャルエンジニアリング詐欺に特化した合成対話データセットで訓練されています。"
    }
  ]
};

const FEATURE_ICONS = [
  <Cpu className="w-5 h-5 text-[#2E7DFF]" />,
  <WifiOff className="w-5 h-5 text-[#2E7DFF]" />,
  <HardDrive className="w-5 h-5 text-[#2E7DFF]" />,
  <FileText className="w-5 h-5 text-[#2E7DFF]" />,
  <Bot className="w-5 h-5 text-[#2E7DFF]" />
];

const KiraAssistantSection = React.memo(function KiraAssistantSection() {
  const { t, language } = useTranslation();

  const title = t.kira?.title || TITLE_BY_LANG[language] || TITLE_BY_LANG.en;
  const subtitle = t.kira?.subtitle || SUBTITLE_BY_LANG[language] || SUBTITLE_BY_LANG.en;
  const badgeText = t.kira?.badge || BADGE_BY_LANG[language] || BADGE_BY_LANG.en;

  const currentFeatures = FEATURES_BY_LANG[language] || FEATURES_BY_LANG.en || [];
  const featuresList = currentFeatures.map((feat: any, index: number) => ({
    icon: FEATURE_ICONS[index] || FEATURE_ICONS[0],
    title: feat.title,
    desc: feat.desc,
  }));

  return (
    <section 
      className="relative w-full py-16 sm:py-20 px-4 border-t border-[#1F2937]/30 bg-[#0A0A0B]" 
      id="kira-assistant"
    >
      {/* Background soft visual grid element */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2E7DFF]/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#2E7DFF]/20">
              <Mic className="w-3.5 h-3.5 text-[#2E7DFF]" />
              <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[#2E7DFF] uppercase">
                {badgeText}
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-bold tracking-wider text-amber-500 uppercase">
                {KIRA_STATUS_BY_LANG[language] || KIRA_STATUS_BY_LANG.en}
              </span>
            </div>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F5F5F0] tracking-tight mb-6">
            {title}
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Feature Split Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Visual Voice Wave Simulation Block */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-[#090A0E] border border-white/[0.04] relative overflow-hidden min-h-[300px]">
            <div className="absolute top-4 left-4 font-mono text-[9px] text-amber-500 tracking-wider uppercase flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              KIRA CONCEPT // DESIGN PHASE
            </div>
            
            {/* Interactive wave spheres */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full bg-[#2E7DFF]/10 border border-[#2E7DFF]/20 animate-ping" style={{ animationDuration: "3s" }} />
              <div className="absolute w-16 h-16 rounded-full bg-[#2E7DFF]/20 border border-[#2E7DFF]/30 animate-pulse" />
              <div className="w-12 h-12 rounded-full bg-[#2E7DFF] flex items-center justify-center shadow-[0_0_25px_rgba(46,125,255,0.6)]">
                <Bot className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Audio wave lines */}
            <div className="flex items-center justify-center gap-1.5 mt-8 h-8">
              {[1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 5, 4, 2, 1].map((val, idx) => (
                <div 
                  key={idx} 
                  className="w-[2px] bg-[#2E7DFF]/60 rounded-full animate-pulse" 
                  style={{ 
                    height: `${val * 6}px`,
                    animationDelay: `${idx * 0.08}s`
                  }} 
                />
              ))}
            </div>
          </div>

          {/* Details list */}
          <div className="lg:col-span-7 space-y-6">
            {featuresList.map((feat, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-white/[0.01] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#1D2433]/50 border border-[#2E7DFF]/15 flex items-center justify-center shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-[#F5F5F0] mb-1">
                    {feat.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
});

export default KiraAssistantSection;
