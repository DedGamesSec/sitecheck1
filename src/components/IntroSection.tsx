import React from "react";
import { Shield, Eye, HelpCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

const DICT: Record<string, { badge: string; title: string; subtitle: string; steps: Array<{ tag: string; title: string; desc: string }> }> = {
  ru: {
    badge: "ПРОСТОЕ ОБЪЯСНЕНИЕ",
    title: "Всё просто: о TrustNode за 1 минуту",
    subtitle: "Простыми словами о том, как TrustNode распознаёт мошеннические звонки прямо на устройстве",
    steps: [
      {
        tag: "ЧТО ЭТО?",
        title: "Купол защиты на устройстве",
        desc: "TrustNode — это персональный защитный купол для вашего смартфона. Приложение, которое оберегает вас и вашу семью от опасных звонков, текстового обмана, фишинга и финансовых угроз."
      },
      {
        tag: "КАК РАБОТАЕТ?",
        title: "Локальный разум",
        desc: "Приложение анализирует звонки прямо на устройстве: акустические характеристики речи и текстовые данные оценивает нейросеть rubert-tiny2. Ни байта данных не покидает смартфон — интернет не нужен."
      },
      {
        tag: "ЧТО ВЫ ПОЛУЧИТЕ?",
        title: "Полное спокойствие",
        desc: "Абсолютную безопасность ваших сбережений, защиту пожилых близких от психологического давления мошенников и 100% конфиденциальность личных разговоров."
      }
    ]
  },
  en: {
    badge: "SIMPLE EXPLANATION",
    title: "TrustNode in 1 Minute",
    subtitle: "A plain-language guide to how TrustNode detects fraudulent calls right on your device",
    steps: [
      {
        tag: "WHAT IS IT?",
        title: "Defense Dome on Your Device",
        desc: "TrustNode is a personal defense dome for your smartphone. An on-device app that instantly shields you and your family from fraudulent calls, phishing, and financial threats."
      },
      {
        tag: "HOW IT WORKS?",
        title: "On-Device Intelligence",
        desc: "The app analyzes calls directly on your device: acoustic speech characteristics and text data are assessed by the rubert-tiny2 neural network. Not a single byte leaves your phone — no internet required."
      },
      {
        tag: "WHAT YOU GET?",
        title: "Total Peace of Mind",
        desc: "Complete safety for your hard-earned savings, protection for elderly loved ones, and a 100% guarantee that your conversations remain confidential."
      }
    ]
  },
  es: {
    badge: "EXPLICACIÓN SENCILLA",
    title: "Muy Sencillo: TrustNode en 1 Minuto",
    subtitle: "Una guía sencilla de cómo TrustNode detecta llamadas fraudulentas directamente en su dispositivo",
    steps: [
      {
        tag: "¿QUÉ ES?",
        title: "Cúpula de defensa en el dispositivo",
        desc: "TrustNode es una cúpula de defensa personal para su smartphone. Una aplicación en el dispositivo que lo protege instantáneamente a usted y a su familia de llamadas fraudulentas, phishing y amenazas financieras."
      },
      {
        tag: "¿CÓMO FUNCIONA?",
        title: "Inteligencia en el Dispositivo",
        desc: "La aplicación analiza las llamadas directamente en el dispositivo: las características acústicas del habla y los datos de texto son evaluados por la red neuronal rubert-tiny2. Ni un solo byte sale de su teléfono: no se necesita internet."
      },
      {
        tag: "¿QUÉ OBTIENE?",
        title: "Tranquilidad Total",
        desc: "Seguridad completa para sus ahorros, protección para sus seres queridos mayores y una garantía del 100% de que sus conversaciones siguen siendo confidenciales."
      }
    ]
  },
  zh: {
    badge: "极简说明",
    title: "只需一分钟，轻松了解 TrustNode",
    subtitle: "用最通俗的语言，讲清 TrustNode 如何在设备端直接识别诈骗电话",
    steps: [
      {
        tag: "它是什么？",
        title: "设备端防护穹顶",
        desc: "TrustNode 是您智能手机的专属个人防护穹顶。这是一款直接运行在设备端的应用程序，能够瞬间为您和您的家人阻挡诈骗电话、短信钓鱼及财产安全威胁。"
      },
      {
        tag: "如何工作？",
        title: "本地离线智能",
        desc: "应用直接在设备端分析通话：语音的声学特征与文本数据由 rubert-tiny2 神经网络评估。不发送任何数据到云端，完全无需联网。"
      },
      {
        tag: "您将获得什么？",
        title: "长久的内心安宁",
        desc: "守护您辛勤积累的资产，保护家中年迈长辈免受骗子的心理压迫，百分之百保障个人通话的绝对隐私与机密。"
      }
    ]
  },
  tr: {
    badge: "BASİT AÇIKLAMA",
    title: "Çok Basit: 1 Dakikada TrustNode",
    subtitle: "TrustNode'un dolandırıcı aramaları doğrudan cihazınızda nasıl tespit ettiğine dair sade bir rehber",
    steps: [
      {
        tag: "NEDİR?",
        title: "Cihazda Savunma Kubbesi",
        desc: "TrustNode, akıllı telefonunuz için kişisel bir savunma kubbesidir. Sizi ve ailenizi dolandırıcı aramalardan, oltalama mesajlarından ve finansal tehditlerden anında koruyan cihaz içi bir uygulamadır."
      },
      {
        tag: "NASIL ÇALIŞIR?",
        title: "Cihaz İçi Yapay Zeka",
        desc: "Uygulama aramaları doğrudan cihazınızda analiz eder: konuşmanın akustik özellikleri ve metin verileri rubert-tiny2 sinir ağı tarafından değerlendirilir. Telefonunuzdan tek bir bayt bile çıkmaz — internet gerekmez."
      },
      {
        tag: "NE ELDE EDERSİNİZ?",
        title: "Tam Güven ve Huzur",
        desc: "Zor kazanılan birikimleriniz için tam güvenlik, yaşlı yakınlarınız için koruma ve konuşmalarınızın gizli kalacağına dair %100 garanti."
      }
    ]
  },
  hi: {
    badge: "सरल व्याख्या",
    title: "बहुत सरल: 1 मिनट में TrustNode",
    subtitle: "सीधी भाषा में जानें: TrustNode आपके डिवाइस पर ही धोखाधड़ी वाले कॉल कैसे पहचानता है",
    steps: [
      {
        tag: "यह क्या है?",
        title: "डिवाइस पर सुरक्षा डोम",
        desc: "TrustNode आपके स्मार्टफोन के लिए एक व्यक्तिगत सुरक्षा डोम है। एक ऑन-डिवाइस ऐप जो आपको और आपके परिवार को कपटपूर्ण कॉल, फ़िशिंग और वित्तीय खतरों से तुरंत बचाता है।"
      },
      {
        tag: "यह कैसे काम करता है?",
        title: "ऑन-डिवाइस इंटेलिजेंस",
        desc: "ऐप कॉल का सीधे आपके डिवाइस पर विश्लेषण करता है: भाषण की ध्वनिक विशेषताओं और टेक्स्ट डेटा का मूल्यांकन rubert-tiny2 न्यूरल नेटवर्क करता है। आपके फोन से एक भी बाइट बाहर नहीं जाती — इंटरनेट की आवश्यकता नहीं है।"
      },
      {
        tag: "आपको क्या मिलता है?",
        title: "पूर्ण मानसिक शांति",
        desc: "आपकी गाढ़ी कमाई की पूरी सुरक्षा, बुजुर्ग प्रियजनों के लिए सुरक्षा, और बातचीत को 100% गोपनीय रखने की गारंटी।"
      }
    ]
  },
  ar: {
    badge: "شرح مبسط",
    title: "بكل بساطة: TrustNode في دقيقة واحدة",
    subtitle: "دليل مبسط يشرح كيف يرصد TrustNode المكالمات الاحتيالية مباشرة على جهازك",
    steps: [
      {
        tag: "ما هو؟",
        title: "قبة دفاع على الجهاز",
        desc: "TrustNode عبارة عن قبة دفاع شخصية لهاتفك الذكي. تطبيق يعمل على الجهاز ليحميك ويحمي عائلتك فورًا من المكالمات الاحتيالية والتصيد والتهديدات المالية."
      },
      {
        tag: "كيف يعمل؟",
        title: "الذكاء المحلي على الجهاز",
        desc: "يحلل التطبيق المكالمات مباشرة على جهازك: تُقيَّم الخصائص الصوتية للكلام والبيانات النصية بواسطة الشبكة العصبية rubert-tiny2. لا تغادر أي بيانات جهازك — فلا حاجة إلى الإنترنت."
      },
      {
        tag: "ماذا ستحصل؟",
        title: "راحة بال تامة",
        desc: "أمان كامل لمدخراتك التي كسبتها بجهدك، وحماية لأحبائك المسنين من الضغوط النفسية، وضمان بنسبة 100% لبقاء محادثاتك سرية."
      }
    ]
  },
  pt: {
    badge: "EXPLICAÇÃO SIMPLES",
    title: "Tudo Simples: TrustNode em 1 Minuto",
    subtitle: "Um guia direto de como o TrustNode detecta chamadas fraudulentas direto no seu dispositivo",
    steps: [
      {
        tag: "O QUE É?",
        title: "Domo de defesa no dispositivo",
        desc: "O TrustNode é um domo de defesa pessoal para o seu smartphone. Um app no dispositivo que protege instantaneamente você e sua família de chamadas fraudulentas, phishing e ameaças financeiras."
      },
      {
        tag: "COMO FUNCIONA?",
        title: "Inteligência Local",
        desc: "O app analisa as chamadas diretamente no dispositivo: as características acústicas da fala e os dados de texto são avaliados pela rede neural rubert-tiny2. Nenhum byte sai do seu celular — não é preciso internet."
      },
      {
        tag: "O QUE VOCÊ GANHA?",
        title: "Tranquilidade Total",
        desc: "Segurança total para suas economias, proteção para parentes idosos contra pressão psicológica e garantia absoluta de privacidade em suas conversas."
      }
    ]
  },
  fr: {
    badge: "EXPLICATION SIMPLE",
    title: "Tout Simple : TrustNode en 1 Minute",
    subtitle: "Un guide simple pour comprendre comment TrustNode détecte les appels frauduleux directement sur l'appareil",
    steps: [
      {
        tag: "QU'EST-CE QUE C'EST ?",
        title: "Dôme de défense sur l'appareil",
        desc: "TrustNode est un dôme de défense personnelle pour votre smartphone. Une application locale qui vous protège instantanément, vous et votre famille, des appels frauduleux, du phishing et des menaces financières."
      },
      {
        tag: "COMMENT ÇA MARCHE ?",
        title: "Intelligence Locale",
        desc: "L'application analyse les appels directement sur l'appareil : les caractéristiques acoustiques de la parole et les données textuelles sont évaluées par le réseau neuronal rubert-tiny2. Aucune donnée ne quitte votre téléphone — internet n'est pas nécessaire."
      },
      {
        tag: "QU'Y GAGNEZ-VOUS ?",
        title: "Tranquillité d'Esprit",
        desc: "La sécurité complète de vos économies, la protection de vos proches âgés contre la pression psychologique des fraudeurs, et une garantie absolue de confidentialité."
      }
    ]
  },
  de: {
    badge: "EINFACHE ERKLÄRUNG",
    title: "Ganz einfach: TrustNode in 1 Minute",
    subtitle: "Eine einfache Erklärung, wie TrustNode betrügerische Anrufe direkt auf Ihrem Gerät erkennt",
    steps: [
      {
        tag: "WAS IST ES?",
        title: "Schutzkuppel auf dem Gerät",
        desc: "TrustNode is eine persönliche Schutzkuppel für Ihr Smartphone. Eine On-Device-App, die Sie und Ihre Familie sofort vor betrügerischen Anrufen, Phishing und finanziellen Bedrohungen schützt."
      },
      {
        tag: "WIE FUNKTIONIERT ES?",
        title: "Lokale Intelligenz",
        desc: "Die App analysiert Anrufe direkt auf Ihrem Gerät: akustische Merkmale der Sprache und Textdaten werden vom neuronalen Netz rubert-tiny2 ausgewertet. Kein einziges Byte verlässt Ihr Telefon — Internet ist nicht erforderlich."
      },
      {
        tag: "WAS ERHALTEN SIE?",
        title: "Völlige Seelenruhe",
        desc: "Vollständige Sicherheit für Ihre hart erarbeiteten Ersparnisse, Schutz für ältere Angehörige und eine 100%ige Garantie für die Vertraulichkeit Ihrer Gespräche."
      }
    ]
  },
  ja: {
    badge: "わかりやすい解説",
    title: "1分でわかる TrustNode",
    subtitle: "TrustNodeが端末上で直接、詐欺電話をどう見抜くかを分かりやすく解説します",
    steps: [
      {
        tag: "これは何？",
        title: "端末上の防衛ドーム",
        desc: "TrustNodeはスマートフォンのための個人防衛ドームです。悪質な電話やフィッシング、金融脅威からあなたと家族を瞬時に守る、端末内完結型アプリです。"
      },
      {
        tag: "どう動く？",
        title: "端末内のローカル頭脳",
        desc: "アプリは通話を端末上で直接分析します：音声の音響的特徴とテキストデータは rubert-tiny2 ニューラルネットワークが評価します。データは端末から一切出ません——インターネットは不要です。"
      },
      {
        tag: "何が得られる？",
        title: "完全な心の安らぎ",
        desc: "大切な資産の確実な保護、詐欺師の心理的な脅迫からお年寄りの家族を守る盾、およびすべての会話が100%プライベートに保たれる安心感です。"
      }
    ]
  }
};

const ICONS = [HelpCircle, Shield, Eye];
const COLORS = [
  "border-[#2E7DFF]/20 text-[#2E7DFF] bg-[#2E7DFF]/5",
  "border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
  "border-amber-500/20 text-amber-400 bg-amber-500/5"
];

const IntroSection = React.memo(function IntroSection() {
  const { language } = useTranslation();
  const content = DICT[language] || DICT.en;

  return (
    <section 
      className="relative w-full py-16 sm:py-24 px-4 border-t border-[#1F2937]/20 bg-[#070709]" 
      id="intro-simplified"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#2E7DFF]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[#2E7DFF] uppercase">
              {content.badge}
            </span>
          </div>
          
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] tracking-tight mb-4">
            {content.title}
          </h2>
          
          <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* 3-Column steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {content.steps.map((step, idx) => {
            const IconComponent = ICONS[idx];
            const colorClass = COLORS[idx];
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-8 rounded-2xl bg-[#09090B] border border-[#1F2937]/30 hover:border-[#2E7DFF]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                      {step.tag}
                    </span>
                    <div className={`p-2 rounded-lg border ${colorClass}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-[#F5F5F0] mb-3">
                    {step.title}
                  </h3>

                  {/* Desc */}
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Connecting arrow indicator for visual flow (except last card) */}
                {idx < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#101014] border border-[#1F2937]/40 items-center justify-center text-gray-600">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default IntroSection;
