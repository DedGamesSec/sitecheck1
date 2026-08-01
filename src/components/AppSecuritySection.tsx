import React from "react";
import { Shield, Lock, Eye, AlertCircle, RefreshCw, ShieldCheck } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { LanguageCode } from "../i18n/languages";

const TITLE_BY_LANG: Partial<Record<LanguageCode, string>> = {
  ru: "Безопасность купола",
  en: "Dome Hardening",
  es: "Seguridad de la Cúpula",
  zh: "穹顶安全防护",
  hi: "डोम सुरक्षा",
  ar: "أمان القبة",
  pt: "Segurança da Cúpula",
  fr: "Sécurité du Dôme",
  de: "Kuppelsicherheit",
  ja: "ドームの安全対策"
};

const SUBTITLE_BY_LANG: Partial<Record<LanguageCode, string>> = {
  ru: "Как TrustNode защищает собственные алгоритмы и ваши данные от анализа и взлома",
  en: "How TrustNode hardens its own environment and secures local user analytics",
  es: "Cómo TrustNode protege sus propios algoritmos y sus datos contra análisis y hackeos",
  zh: "TrustNode 如何强化自身运行环境并保护本地用户分析免受逆向与攻击",
  hi: "TrustNode अपने स्वयं के एल्गोरिदम और आपके डेटा को विश्लेषण और हैकिंग से कैसे सुरक्षित रखता है",
  ar: "كيف تحمي TrustNode خوارزمياتها الخاصة وبياناتك من التحليل والاختراق",
  pt: "Como o TrustNode protege seus próprios algoritmos e seus dados contra análise e invasão",
  fr: "Comment TrustNode protège ses propres algorithmes et vos données contre l'analyse et le piratage",
  de: "Wie TrustNode seine eigenen Algorithmen und Ihre Daten vor Analyse und Hacking schützt",
  ja: "TrustNodeが独自のアルゴリズムとユーザーデータを解析やハッキングから保護する方法"
};

const BADGE_BY_LANG: Partial<Record<LanguageCode, string>> = {
  ru: "ЗАЩИТА САМОГО ПРИЛОЖЕНИЯ",
  en: "APPLICATION HARDENING MODEL",
  es: "MODELO DE PROTECCIÓN DE LA APLICACIÓN",
  zh: "应用程序加固模型",
  hi: "एप्लिकेशन सुरक्षा मॉडल",
  ar: "نموذج حماية التطبيق",
  pt: "MODELO DE PROTEÇÃO DO APLICATIVO",
  fr: "MODÈLE DE SÉCURITÉ DE L'APPLICATION",
  de: "ANWENDUNGSSICHERHEITSMODELL",
  ja: "アプリケーション加固モデル"
};

const COMPLIANCE_LABEL_BY_LANG: Partial<Record<LanguageCode, string>> = {
  ru: "ЮРИДИЧЕСКАЯ И СЕРТИФИКАЦИОННАЯ КЛАССИФИКАЦИЯ",
  en: "LEGAL & SECURITY COMPLIANCE CLASSIFICATION",
  es: "CLASIFICACIÓN DE CUMPLIMIENTO LEGAL Y DE SEGURIDAD",
  zh: "法律与安全合规分类",
  hi: "कानूनी और सुरक्षा अनुपालन वर्गीकरण",
  ar: "تصنيف الامتثال القانوني والأمني",
  pt: "CLASSIFICAÇÃO DE CONFORMIDADE LEGAL E SEGURANÇA",
  fr: "CLASSIFICATION DE CONFORMITÉ LÉGALE ET SÉCURITAIRE",
  de: "RECHTLICHE & SICHERHEITSKLASSIFIZIERUNG",
  ja: "法的およびセキュリティ準拠の分類"
};

const COMPLIANCE_TEXT_BY_LANG: Partial<Record<LanguageCode, string>> = {
  ru: "TrustNode классифицируется как семантический эвристический анализатор локальных данных и текстовых паттернов. Система НЕ содержит встроенных средств шифрования стороннего трафика, благодаря чему не требует обязательного лицензирования в ФСБ России по Постановлению Правительства №313.",
  en: "TrustNode operates strictly as a semantic heuristic text analyzer inside a localized memory environment. Since it does not encrypt or decrypt external network payloads, it does not require mandatory Russian Federal Security Service (FSB) licensing.",
  es: "TrustNode se clasifica como un analizador heurístico semántico de datos locales y patrones de texto. El sistema NO contiene herramientas de cifrado para tráfico externo, por lo que no requiere licencias obligatorias del Servicio Federal de Seguridad (FSB) de Rusia.",
  zh: "TrustNode 严格作为本地化内存环境中的语义启发式文本分析器运行。由于它不对外部网络负载进行加密或解密，因此不需要俄罗斯联邦安全局 (FSB) 的强制许可。",
  hi: "TrustNode एक स्थानीयकृत मेमोरी वातावरण के भीतर अर्थगत अनुमानी पाठ विश्लेषक के रूप में कार्य करता है। चूंकि यह बाहरी नेटवर्क पेलोд को एन्क्रिप्ट या डिक्रिप्ट नहीं करता है, इसलिए इसके लिए रूसी संघीय सुरक्षा सेवा (FSB) लाइसेंसिंग की आवश्यकता नहीं है।",
  ar: "يتم تصنيف TrustNode كمحلل إرشادي دلالي للبيانات المحلية وأنماط النصوص. لا يحتوي النظام على أي أدوات تشفير لحركة مرور خارجية، وبالتالي لا يتطلب ترخيصًا إلزاميًا من جهاز الأمن الفيدرالي الروسي (FSB).",
  pt: "O TrustNode é classificado como um analisador heurístico semântico de dados locais e padrões de texto. O sistema NÃO contém ferramentas de criptografia para tráfego de terceiros, portanto, não exige licenciamento obrigatório do FSB russo.",
  fr: "TrustNode est classé comme un analyseur heuristique sémantique de données locales et de motifs textuels. Le système ne contient aucun outil de chiffrement tiers, il n'est donc pas soumis à l'octroi d'une licence obligatoire par le FSB russe.",
  de: "TrustNode arbeitet ausschließlich als semantisch-heuristischer Textanalysator in einer lokalen Speicherumgebung. Da es keine externen Netzwerknutzdaten verschlüsselt oder entschlüsselt, ist keine gesetzlich vorgeschriebene FSB-Lizenzierung erforderlich.",
  ja: "TrustNodeは、ローカルメモリ環境内の意味論的ヒューリスティックテキスト分析ツールとしてのみ動作します。外部网络ペイロードを暗号化または復号することはないため、ロシア連邦保安庁（FSB）による強制ライセンスの対象外となります。"
};

const FEATURES_BY_LANG: Partial<Record<LanguageCode, Array<{ title: string; desc: string }>>> = {
  ru: [
    {
      title: "Шифрованное хранилище VAULT",
      desc: "Шифрование по стандарту AES-256-GCM с интеграцией аппаратного чипа Android Keystore / StrongBox. Локальные базы защищены через SQLCipher и PBKDF2+HKDF."
    },
    {
      title: "Активная защита AEGIS RASP",
      desc: "Защита приложения во время работы (Runtime Application Self-Protection). Обнаруживает отладку (Anti-Debug), рут-права, эмуляторы и попытки инъекции кода."
    },
    {
      title: "Система аудита Self-Audit",
      desc: "Фоновые периодические проверки целостности исполняемых файлов на базе WorkManager. Вычисляет контрольные суммы CRC32 нативных модулей и сравнивает с эталоном."
    },
    {
      title: "Локальная песочница и 152-ФЗ",
      desc: "Полное соответствие закону о персональных данных. Исходные файлы, логи и аудиопотоки обрабатываются только в ОЗУ устройства и никогда не отправляются на сервера."
    }
  ],
  en: [
    {
      title: "VAULT Secure Storage",
      desc: "Military-grade AES-256-GCM encryption backed by physical Android Keystore / StrongBox hardware chips. Local data collections are hardened via SQLCipher & PBKDF2+HKDF."
    },
    {
      title: "AEGIS Active RASP",
      desc: "Proactive Runtime Application Self-Protection (RASP). Constantly audits memory integrity, blocking debuggers, root tools, emulator environments, and code injections."
    },
    {
      title: "Periodic Self-Audit Engine",
      desc: "Background file and component integrity auditor driven by WorkManager. Calculates CRC32 checksums of native NDK binaries to detect tampering on the fly."
    },
    {
      title: "On-Device Sandbox & Law 152-FZ",
      desc: "Strict localization complying with Russian Federal Law 152-FZ. All call transcribing, messaging, and memory logs stay strictly inside the local device RAM."
    }
  ],
  es: [
    {
      title: "Almacenamiento Seguro VAULT",
      desc: "Cifrado AES-256-GCM respaldado por chips físicos Android Keystore / StrongBox. Las bases de datos locales están protegidas mediante SQLCipher y PBKDF2+HKDF."
    },
    {
      title: "Protección Activa AEGIS RASP",
      desc: "Autoprotección de la aplicación en tiempo de ejecución (RASP). Detecta depuración (Anti-Debug), privilegios de root, emuladores e intentos de inyección de código."
    },
    {
      title: "Motor de Autoauditoría Periódica",
      desc: "Comprobaciones en segundo plano de la integridad de los archivos ejecutables a través de WorkManager. Calcula sumas de comprobación CRC32 de binarios nativos NDK."
    },
    {
      title: "Espacio de Trabajo Local y Ley 152-FZ",
      desc: "Cumplimiento estricto de la ley de datos personales. Los registros de voz, archivos y transcripciones se procesan solo en la RAM del dispositivo y nunca se envían a servidores."
    }
  ],
  zh: [
    {
      title: "VAULT 加密存储",
      desc: "由物理 Android Keystore / StrongBox 硬件芯片支持的军用级 AES-256-GCM 加密。本地数据集合通过 SQLCipher 和 PBKDF2+HKDF 进行加固。"
    },
    {
      title: "AEGIS 主动运行时保护 (RASP)",
      desc: "主动运行时应用程序自保护 (RASP)。持续审计内存完整性，拦截调试器、Root工具、模拟器环境和代码注入。"
    },
    {
      title: "Self-Audit 定期自检引擎",
      desc: "由 WorkManager 驱动的后台文件和组件完整性审计器。计算原生 NDK 二进制文件的 CRC32 校验和，以实时检测篡改。"
    },
    {
      title: "本地沙盒与俄罗斯 152-FZ 法律合规",
      desc: "完全符合个人数据保护法。所有通话转录、消息和内存日志均严格保存在本地设备 RAM 中，绝不发送到服务器。"
    }
  ],
  hi: [
    {
      title: "VAULT सुरक्षित स्टोरेज",
      desc: "भौतिक Android Keystore / StrongBox हार्डवेयर चिप्स द्वारा समर्थित सैन्य-ग्रेड AES-256-GCM एन्क्रिप्शन। स्थानीय डेटा SQLCipher और PBKDF2+HKDF के माध्यम से सुरक्षित है।"
    },
    {
      title: "AEGIS सक्रिय RASP सुरक्षा",
      desc: "सक्रिय रनटाइम एप्लिकेशन सेल्फ-प्रोटेक्शन (RASP)। मेमोरी अखंडता का लगातार ऑडिट करता है, डिबगर्स, रूट टूल्स, एमुलेटर वातावरण और कोड इंजेक्शन को रोकता है।"
    },
    {
      title: "आवधिक स्व-ऑडिट इंजन",
      desc: "WorkManager द्वारा संचालित पृष्ठभूमि फ़ाइल और घटक अखंडता परीक्षक। वास्तविक समय में छेड़छाड़ का पता लगाने के लिए मूल NDK बाइनरी के CRC32 चेकसम की गणना करता है।"
    },
    {
      title: "ऑन-डिवाइस सैंडबॉक्स और कानून 152-FZ",
      desc: "व्यक्तिगत डेटा कानून का पूर्ण अनुपालन। सभी कॉल ट्रांसक्रिप्शन, मैसेजिंग और मेमोरी लॉग केवल स्थानीय डिवाइस रैम के भीतर रहते हैं और कभी भी सर्वर पर नहीं भेजे जाते हैं।"
    }
  ],
  ar: [
    {
      title: "مستودع VAULT الآمن",
      desc: "تشفير AES-256-GCM مدعوم بشريحة عتاد Android Keystore / StrongBox. يتم تأمين قواعد البيانات المحلية عبر SQLCipher و PBKDF2+HKDF."
    },
    {
      title: "حماية AEGIS RASP النشطة",
      desc: "الحماية الذاتية للتطبيق أثناء التشغيل (RASP). تكتشف أدوات التصحيح (Anti-Debug)، وصلاحيات الروت، والمحاكيات، ومحاولات حقن الشيفرة."
    },
    {
      title: "محرك التدقيق الذاتي الدوري",
      desc: "فحوصات دورية في الخلفية للتأكد من سلامة الملفات القابلة للتنفيذ عبر WorkManager. يحسب مجموع التحقق CRC32 لملفات NDK الثنائية الأصلية."
    },
    {
      title: "بيئة العمل المحلية وقانون 152-FZ",
      desc: "امتثال كامل لقانون البيانات الشخصية. تُعالج ملفات الصوت والسجلات والترجمات في ذاكرة الوصول العشوائي للجهاز فقط ولا تُرسل مطلقًا إلى السيرفرات."
    }
  ],
  pt: [
    {
      title: "Armazenamento Seguro VAULT",
      desc: "Criptografia AES-256-GCM com integração do chip de hardware Android Keystore / StrongBox. As bases locais são protegidas via SQLCipher e PBKDF2+HKDF."
    },
    {
      title: "Proteção Ativa AEGIS RASP",
      desc: "Autoproteção do aplicativo em tempo de execução (RASP). Detecta depuração (Anti-Debug), privilégios de root, emuladores e tentativas de injeção de código."
    },
    {
      title: "Sistema de Autoauditoria Periódica",
      desc: "Verificações periódicas em segundo plano da integridade de arquivos executáveis baseadas no WorkManager. Calcula somas de verificação CRC32 dos binários nativos do NDK."
    },
    {
      title: "Sandbox Local e Lei Federal 152-FZ",
      desc: "Conformidade total com a lei de dados pessoais. Arquivos originais, logs e fluxos de áudio são processados apenas na RAM do dispositivo e nunca saem do aparelho."
    }
  ],
  fr: [
    {
      title: "Stockage Sécurisé VAULT",
      desc: "Chiffrement AES-256-GCM de niveau militaire soutenu par les puces physiques Android Keystore / StrongBox. Les bases de données locales sont sécurisées via SQLCipher et PBKDF2+HKDF."
    },
    {
      title: "Protection Active AEGIS RASP",
      desc: "Autoprotection de l'application au moment de l'exécution (RASP). Détecte le débogage (Anti-Debug), les privilèges root, les émulateurs et les injections de code."
    },
    {
      title: "Moteur d'Auto-audit Périodique",
      desc: "Vérifications d'intégrité en arrière-plan des exécutables gérées par WorkManager. Calcule les sommes de contrôle CRC32 des binaires NDK natifs pour détecter les altérations."
    },
    {
      title: "Bac à sable local & Loi 152-FZ",
      desc: "Conformité stricte à la loi sur les données personnelles. Toutes les transcriptions d'appels, messages et journaux restent uniquement dans la RAM locale de l'appareil et ne sont jamais envoyés aux serveurs."
    }
  ],
  de: [
    {
      title: "Sicherer VAULT-Speicher",
      desc: "AES-256-GCM-Verschlüsselung auf Militärniveau, unterstützt durch physische Android Keystore / StrongBox-Hardwarechips. Lokale Datensätze sind über SQLCipher & PBKDF2+HKDF geschützt."
    },
    {
      title: "AEGIS Aktiver RASP-Schutz",
      desc: "Proaktive Runtime Application Self-Protection (RASP). Überprüft ständig die Speicherintegrität und blockiert Debugger, Root-Tools, Emulatorumgebungen und Code-Injections."
    },
    {
      title: "Regelmäßige Self-Audit-Engine",
      desc: "Hintergrundintegritätsprüfung für Dateien und Komponenten via WorkManager. Berechnet CRC32-Prüfsummen nativer NDK-Binärdateien, um Manipulationen sofort zu erkennen."
    },
    {
      title: "On-Device-Sandbox & Gesetz 152-FZ",
      desc: "Strikte Einhaltung des russischen Bundesgesetzes 152-FZ. Alle Anruftranskriptionen, Nachrichten und Speicherprotokolle verbleiben ausschließlich im RAM des lokalen Geräts."
    }
  ],
  ja: [
    {
      title: "暗号化ストレージ VAULT",
      desc: "Android Keystore / StrongBox 物理ハードウェアチップを基盤とする軍用レベルの AES-256-GCM 暗号化。ローカルデータベースは SQLCipher と PBKDF2+HKDF で保護されています。"
    },
    {
      title: "アクティブ保護 AEGIS RASP",
      desc: "実行時アプリケーション自己保護（RASP）。メモリの完全性を継続的に監視し、デバッガ（Anti-Debug）、ルート権限、エミュレータ、コードインジェクションを検出・遮断します。"
    },
    {
      title: "自己監査エンジン Self-Audit",
      desc: "WorkManager を使用したバックグラウンドでの実行ファイル完全性監査。ネイティブ NDK バイナリの CRC32 チェックサムを算出し、改ざんをリアルタイムに検知します。"
    },
    {
      title: "オンデバイス・サンドボックスと個人情報保護法",
      desc: "個人データ保護法に完全準拠。音声、記録、テキストのログはデバイスの RAM 上でのみ処理され、サーバーに送信されることはありません。"
    }
  ]
};

const FEATURE_ICONS = [
  <Lock className="w-5 h-5 text-[#2E7DFF]" />,
  <Shield className="w-5 h-5 text-[#2E7DFF]" />,
  <RefreshCw className="w-5 h-5 text-[#2E7DFF]" />,
  <Eye className="w-5 h-5 text-[#2E7DFF]" />
];

const AppSecuritySection = React.memo(function AppSecuritySection() {
  const { t } = useTranslation();

  const title = t.security.title;
  const subtitle = t.security.subtitle;
  const badgeText = t.security.badge;
  const complianceLabel = t.security.complianceLabel;
  const complianceText = t.security.complianceText;

  const currentFeatures = t.security.features || [];
  const securityFeatures = currentFeatures.map((feat: any, index: number) => ({
    icon: FEATURE_ICONS[index] || FEATURE_ICONS[0],
    title: feat.title,
    desc: feat.desc,
  }));

  return (
    <section 
      className="relative w-full pt-8 pb-16 sm:pt-10 sm:pb-20 px-4 border-t border-[#1F2937]/30 bg-[#0A0A0B]" 
      id="app-security"
    >
      {/* Background soft tech visual accents */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#2E7DFF]/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.02)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#2E7DFF]/20 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2E7DFF]" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[#2E7DFF] uppercase">
              {badgeText}
            </span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F5F5F0] tracking-tight mb-6">
            {title}
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Feature grid with clean layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {securityFeatures.map((feat, index) => (
            <div 
              key={index}
              className={`p-6 sm:p-8 rounded-2xl bg-[#0F0F11]/95 border border-white/[0.04] hover:border-[#2E7DFF]/40 transition-all duration-300 group flex gap-5 ${index === 3 ? "md:col-span-3" : ""}`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#111622] flex items-center justify-center border border-[#2E7DFF]/10 shrink-0 group-hover:border-[#2E7DFF]/30 transition-all duration-300">
                {feat.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F5F0] mb-2 group-hover:text-[#2E7DFF] transition-all duration-300">
                  {feat.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Architecture Info Row */}
        <div className="mt-16 p-6 rounded-2xl border border-[#2E7DFF]/15 bg-[#090F1B]/40 backdrop-blur-md max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-[#2E7DFF]/10 flex items-center justify-center shrink-0 border border-[#2E7DFF]/20">
            <AlertCircle className="w-6 h-6 text-[#2E7DFF]" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-mono text-xs font-bold text-[#F5F5F0] uppercase tracking-wider mb-1">
              {complianceLabel}
            </h4>
            <p className="font-sans text-[11px] sm:text-xs text-gray-400 leading-relaxed">
              {complianceText}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
});

export default AppSecuritySection;
