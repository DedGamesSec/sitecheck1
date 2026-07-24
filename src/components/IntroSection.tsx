import React from "react";
import { Shield, Eye, HelpCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { motion } from "motion/react";

const DICT: Record<string, { badge: string; title: string; subtitle: string; steps: Array<{ tag: string; title: string; desc: string }> }> = {
  ru: {
    badge: "ПРОСТОЕ ОБЪЯСНЕНИЕ",
    title: "Всё просто: о TrustNode за 1 минуту",
    subtitle: "Простыми словами о том, как работает инновационная защита нового поколения",
    steps: [
      {
        tag: "ЧТО ЭТО?",
        title: "Умный щит телефона",
        desc: "TrustNode — это персональный защитный купол для вашего смартфона. Приложение, которое оберегает вас и вашу семью от опасных звонков, текстового обмана, фишинга и финансовых угроз."
      },
      {
        tag: "КАК РАБОТАЕТ?",
        title: "Локальный разум",
        desc: "Встроенная микро-нейросеть анализирует входящие звонки и сообщения в реальном времени. Она распознает манипуляции на лету прямо на устройстве — без отправки ваших данных в интернет."
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
    subtitle: "A straightforward guide to how next-generation protection works",
    steps: [
      {
        tag: "WHAT IS IT?",
        title: "Smart Phone Shield",
        desc: "TrustNode is a personal defense dome for your smartphone. An on-device app that instantly shields you and your family from fraudulent calls, phishing, and financial threats."
      },
      {
        tag: "HOW IT WORKS?",
        title: "On-Device Intelligence",
        desc: "An embedded micro-AI analyzes incoming interactions in real time. It detects psychological pressure and manipulation on the fly — keeping all your personal data offline."
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
    subtitle: "Una guía directa sobre cómo funciona la protección de última generación",
    steps: [
      {
        tag: "¿QUÉ ES?",
        title: "Escudo de Teléfono Inteligente",
        desc: "TrustNode es una cúpula de defensa personal para su smartphone. Una aplicación en el dispositivo que lo protege instantáneamente a usted y a su familia de llamadas fraudulentas, phishing y amenazas financieras."
      },
      {
        tag: "¿CÓMO FUNCIONA?",
        title: "Inteligencia en el Dispositivo",
        desc: "Una micro IA integrada analiza las interacciones entrantes en tiempo real. Detecta la presión psicológica y la manipulación al instante, manteniendo todos sus datos personales fuera de línea."
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
    subtitle: "以最通俗易懂的语言，为您剖析新一代创新安全防护的工作原理",
    steps: [
      {
        tag: "它是什么？",
        title: "智能手机防护罩",
        desc: "TrustNode 是您智能手机的专属个人防护穹顶。这是一款直接运行在设备端的应用程序，能够瞬间为您和您的家人阻挡诈骗电话、短信钓鱼及财产安全威胁。"
      },
      {
        tag: "如何工作？",
        title: "本地离线智能",
        desc: "内置的微型神经网络可实时分析所有来电和短信。它在设备端即时识别操纵行为与心理施压，无需向互联网上传您的任何隐私数据。"
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
    subtitle: "Yeni nesil inovatif korumanın nasıl çalıştığına dair basit bir kılavuz",
    steps: [
      {
        tag: "NEDİR?",
        title: "Akıllı Telefon Kalkanı",
        desc: "TrustNode, akıllı telefonunuz için kişisel bir savunma kubbesidir. Sizi ve ailenizi dolandırıcı aramalardan, oltalama mesajlarından ve finansal tehditlerden anında koruyan cihaz içi bir uygulamadır."
      },
      {
        tag: "NASIL ÇALIŞIR?",
        title: "Cihaz İçi Yapay Zeka",
        desc: "Gömülü bir mikro yapay zeka, gelen etkileşimleri gerçek zamanlı olarak analiz eder. Psikolojik baskı ve manipülasyonu anında algılar ve tüm kişisel verilerinizi çevrimdışı tutar."
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
    subtitle: "अगली पीढ़ी की नवीन सुरक्षा कैसे काम करती है, इसका एक सीधा मार्गदर्शक",
    steps: [
      {
        tag: "यह क्या है?",
        title: "स्मार्ट फोन शील्ड",
        desc: "TrustNode आपके स्मार्टफोन के लिए एक व्यक्तिगत सुरक्षा डोम है। एक ऑन-डिवाइस ऐप जो आपको और आपके परिवार को कपटपूर्ण कॉल, फ़िशिंग और वित्तीय खतरों से तुरंत बचाता है।"
      },
      {
        tag: "यह कैसे काम करता है?",
        title: "ऑन-डिवाइस इंटेलिजेंस",
        desc: "एक एम्बेडेड माइक्रो-एआई वास्तविक समय में आने वाले संवादों का विश्लेषण करता है। यह मनोवैज्ञानिक दबाव और हेरफेर का तुरंत पता लगाता है - आपके सभी व्यक्तिगत डेटा को ऑफ़लाइन रखता है।"
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
    subtitle: "دليل مبسط يوضح كيفية عمل الجيل القادم من الحماية المبتكرة",
    steps: [
      {
        tag: "ما هو؟",
        title: "درع الهاتف الذكي",
        desc: "TrustNode عبارة عن قبة دفاع شخصية لهاتفك الذكي. تطبيق يعمل على الجهاز ليحميك ويحمي عائلتك فورًا من المكالمات الاحتيالية والتصيد والتهديدات المالية."
      },
      {
        tag: "كيف يعمل؟",
        title: "الذكاء المحلي على الجهاز",
        desc: "يقوم ذكاء اصطناعي ميكرو مدمج بتحليل التفاعلات الواردة في الوقت الفعلي. يكتشف الضغط النفسي والتلاعب فورًا مع الحفاظ على خصوصية جميع بياناتك بالكامل أوفلاين."
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
    subtitle: "Um guia direto sobre como funciona a proteção de última geração",
    steps: [
      {
        tag: "O QUE É?",
        title: "Escudo Inteligente",
        desc: "O TrustNode é um domo de defesa pessoal para o seu smartphone. Um app no dispositivo que protege instantaneamente você e sua família de chamadas fraudulentas, phishing e ameaças financeiras."
      },
      {
        tag: "COMO FUNCIONA?",
        title: "Inteligência Local",
        desc: "Uma micro IA integrada analisa as interações em tempo real. Ela detecta pressão psicológica e manipulações no ato — mantendo todos os seus dados pessoais offline."
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
    subtitle: "Un guide direct pour comprendre le fonctionnement de cette protection de nouvelle génération",
    steps: [
      {
        tag: "QU'EST-CE QUE C'EST ?",
        title: "Bouclier Intelligent",
        desc: "TrustNode est un dôme de défense personnelle pour votre smartphone. Une application locale qui vous protège instantanément, vous et votre famille, des appels frauduleux, du phishing et des menaces financières."
      },
      {
        tag: "COMMENT ÇA MARCHE ?",
        title: "Intelligence Locale",
        desc: "Une micro-IA intégrée analyse les interactions entrantes en temps réel. Elle détecte immédiatement les pressions psychologiques et les manipulations sur l'appareil, sans envoyer vos données sur internet."
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
    subtitle: "Eine unkomplizierte Anleitung zur Funktionsweise der neuen Sicherheitsgeneration",
    steps: [
      {
        tag: "WAS IST ES?",
        title: "Smarter Telefonschild",
        desc: "TrustNode is eine persönliche Schutzkuppel für Ihr Smartphone. Eine On-Device-App, die Sie und Ihre Familie sofort vor betrügerischen Anrufen, Phishing und finanziellen Bedrohungen schützt."
      },
      {
        tag: "WIE FUNKTIONIERT ES?",
        title: "Lokale Intelligenz",
        desc: "Eine integrierte Mikro-KI analysiert eingehende Interaktionen in Echtzeit. Sie erkennt psychologischen Druck und Kombinationen sofort und hält alle Ihre persönlichen Daten offline."
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
    subtitle: "次世代の革新的な保護システムの仕組みを、シンプルに分かりやすく解説します",
    steps: [
      {
        tag: "これは何？",
        title: "スマホのスマートシールド",
        desc: "TrustNodeはスマートフォンのための個人防衛ドームです。悪質な電話やフィッシング、金融脅威からあなたと家族を瞬時に守る、端末内完結型アプリです。"
      },
      {
        tag: "どう動く？",
        title: "端末内のローカル頭脳",
        desc: "組み込まれたマイクロAIが着信やメッセージをリアルタイムで解析。心理的な誘導や詐欺の兆候をその場で検知し、すべてのデータをオフラインで安全に保ちます。"
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
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default IntroSection;
