import React, { useState } from "react";
import { Send, Video, Users, Gem, ArrowUpRight, Cpu, Clipboard, CheckCircle, ShieldAlert, Sparkles, Check, AlertTriangle } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { LanguageCode } from "../i18n/languages";
import { motion, AnimatePresence } from "motion/react";

const SOCIAL_META = [
  {
    id: "telegram",
    icon: <Send className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform" />,
    url: "https://t.me/TrustNode_team",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    id: "vk",
    icon: <Users className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />,
    url: "https://vk.com/trustnode",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    id: "tiktok",
    icon: <Video className="w-6 h-6 text-rose-400 group-hover:scale-110 transition-transform" />,
    url: "https://www.tiktok.com/@trusrnode?_r=1&_t=ZS-97fr5YVyPCs",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  },
];

// Multilingual labels for the interactive license console
const CONSOLE_TEXT: Record<LanguageCode, Record<string, string>> = {
  ru: {
    title: "Консоль предварительной генерации купола",
    subtitle: "Сформируйте локальный цифровой отпечаток для вашей персональной сборки",
    inputLabel: "Ваш Telegram @username или E-mail",
    inputPlaceholder: "Например: @ivan_crypto или mail@example.com",
    osLabel: "Мобильная платформа",
    cpuLabel: "Микроархитектура ЦП",
    btnSubmit: "Инициировать генерацию ключей",
    btnGenerating: "Генерация локального купола...",
    copyBtn: "Копировать ID билета",
    copied: "Скопировано в буфер обмена!",
    ticketTitle: "ЛИЦЕНЗИОННЫЙ БИЛЕТ СФОРМИРОВАН",
    ticketLabel: "СКОПИРУЙТЕ ЭТОТ ID И ОТПРАВЬТЕ ЕГО НАМ В TELEGRAM / VK ДЛЯ МОМЕНТАЛЬНОГО ПОДКЛЮЧЕНИЯ ВНЕ ОЧЕРЕДИ",
    envAnalysis: "ФОРМИРОВАНИЕ ЗАПРОСА НА РЕГИСТРАЦИЮ",
    errContactRequired: "Пожалуйста, укажите ваши контактные данные"
  },
  en: {
    title: "Pre-Registration Console",
    subtitle: "Generate a reference ID for priority access",
    inputLabel: "Your Telegram @username or E-mail",
    inputPlaceholder: "E.g., @jack_crypto or email@domain.com",
    osLabel: "Mobile OS Platform",
    cpuLabel: "CPU Microarchitecture",
    btnSubmit: "Submit Registration",
    btnGenerating: "Processing your request...",
    copyBtn: "Copy Ticket ID",
    copied: "Copied to clipboard!",
    ticketTitle: "REGISTRATION REFERENCE",
    ticketLabel: "COPY THIS ID AND SEND IT TO US IN TELEGRAM / VK FOR PRIORITY VERIFICATION",
    envAnalysis: "PROCESSING REGISTRATION REQUEST",
    errContactRequired: "Please provide your contact handle"
  },
  es: {
    title: "Consola de Pre-Registro",
    subtitle: "Genere un ID de referencia para acceso prioritario",
    inputLabel: "Su Telegram @usuario o Correo electrónico",
    inputPlaceholder: "Ej: @pedro_crypto o correo@dominio.com",
    osLabel: "Plataforma Móvil",
    cpuLabel: "Microarquitectura de CPU",
    btnSubmit: "Enviar Registro",
    btnGenerating: "Procesando su solicitud...",
    copyBtn: "Copiar ID de Referencia",
    copied: "¡Copiado!",
    ticketTitle: "REFERENCIA DE REGISTRO",
    ticketLabel: "COPIE ESTE ID Y ENVÍELO A TELEGRAM / VK PARA VERIFICACIÓN PRIORITARIA",
    envAnalysis: "PROCESANDO SOLICITUD DE REGISTRO",
    errContactRequired: "Por favor, proporcione su contacto"
  },
  zh: {
    title: "预注册控制台",
    subtitle: "生成参考 ID 以获取优先访问权限",
    inputLabel: "您的 Telegram 用户名 (@) 或 电子邮箱",
    inputPlaceholder: "例如：@user 或 user@example.com",
    osLabel: "移动操作系统",
    cpuLabel: "处理器架构",
    btnSubmit: "提交注册",
    btnGenerating: "正在处理请求...",
    copyBtn: "复制参考 ID",
    copied: "已复制！",
    ticketTitle: "注册参考号已生成",
    ticketLabel: "复制此 ID 并通过 Telegram 或 VK 发送给我们以进行优先验证",
    envAnalysis: "正在处理注册请求",
    errContactRequired: "请填写您的联系方式"
  },
  hi: {
    title: "प्री-रजिस्ट्रेशन कंसोल",
    subtitle: "प्राथमिकता पहुंच के लिए संदर्भ आईडी जनरेट करें",
    inputLabel: "आपका टेलीग्राम @username या ई-मेल",
    inputPlaceholder: "जैसे: @user या email@domain.com",
    osLabel: "मोबाइल ओएस प्लेटफॉर्म",
    cpuLabel: "सीपीयू माइक्रोआर्किटेक्चर",
    btnSubmit: "रजिस्ट्रेशन सबमिट करें",
    btnGenerating: "आपका अनुरोध प्रसंस्कृत किया जा रहा है...",
    copyBtn: "संदर्भ आईडी कॉपी करें",
    copied: "कॉपी किया गया!",
    ticketTitle: "रजिस्ट्रेशन संदर्भ",
    ticketLabel: "इस आईडी को कॉपी करें और तुरंत प्राथमिकता सत्यापन के लिए हमें टेलीग्राम / वीके पर भेजें",
    envAnalysis: "रजिस्ट्रेशन अनुरोध प्रसंस्कृत किया जा रहा है",
    errContactRequired: "कृपया अपना संपर्क प्रदान करें"
  },
  ar: {
    title: "وحدة التحكم في التسجيل المسبق",
    subtitle: "قم بإنشاء معرف مرجعي للوصول ذي الأولوية",
    inputLabel: "حساب تيليجرام الخاص بك أو البريد الإلكتروني",
    inputPlaceholder: "مثال: @user أو email@domain.com",
    osLabel: "منصة نظام تشغيل الجوال",
    cpuLabel: "بنية المعالج",
    btnSubmit: "إرسال التسجيل",
    btnGenerating: "جاري معالجة طلبك...",
    copyBtn: "نسخ المعرف المرجعي",
    copied: "تم النسخ!",
    ticketTitle: "المرجع التسجيلي",
    ticketLabel: "انسخ هذا المعرف وأرسله إلينا على تيليجرام / VK للتحقق ذي الأولوية",
    envAnalysis: "جاري معالجة طلب التسجيل",
    errContactRequired: "يرجى تقديم وسيلة الاتصال الخاصة بك"
  },
  pt: {
    title: "Console de Pré-Registro",
    subtitle: "Gere um ID de referência para acesso prioritário",
    inputLabel: "Seu Telegram @usuario ou E-mail",
    inputPlaceholder: "Ex: @lucas_crypto ou email@dominio.com",
    osLabel: "Plataforma Móvel",
    cpuLabel: "Microarquitetura de CPU",
    btnSubmit: "Enviar Registro",
    btnGenerating: "Processando sua solicitação...",
    copyBtn: "Copiar ID de Referência",
    copied: "Copiado!",
    ticketTitle: "REFERÊNCIA DE REGISTRO",
    ticketLabel: "COPIE ESTE ID E ENVIE PARA NÓS NO TELEGRAM / VK PARA VERIFICAÇÃO PRIORITÁRIA",
    envAnalysis: "PROCESSANDO SOLICITAÇÃO DE REGISTRO",
    errContactRequired: "Por favor, informe seu contato"
  },
  fr: {
    title: "Console de Pré-Inscription",
    subtitle: "Générez un ID de référence pour un accès prioritaire",
    inputLabel: "Votre Telegram @nom_utilisateur ou E-mail",
    inputPlaceholder: "Ex : @jean_crypto ou email@domaine.com",
    osLabel: "Plateforme Mobile",
    cpuLabel: "Microarchitecture du Processeur",
    btnSubmit: "Soumettre l'inscription",
    btnGenerating: "Traitement de votre demande...",
    copyBtn: "Copier l'ID de Référence",
    copied: "Copié !",
    ticketTitle: "RÉFÉRENCE D'INSCRIPTION",
    ticketLabel: "COPIEZ CET ID ET ENVOYEZ-LE NOUS SUR TELEGRAM / VK POUR UNE VÉRIFICATION PRIORITAIRE",
    envAnalysis: "TRAITEMENT DE LA DEMANDE D'INSCRIPTION",
    errContactRequired: "Veuillez fournir un moyen de contact"
  },
  de: {
    title: "Vorregistrierungskonsole",
    subtitle: "Generieren Sie eine Referenz-ID für den prioritären Zugriff",
    inputLabel: "Ihr Telegram @benutzername oder E-Mail",
    inputPlaceholder: "Z.B. @max_crypto oder email@domain.com",
    osLabel: "Mobil-Betriebssystem",
    cpuLabel: "CPU-Mikroarchitektur",
    btnSubmit: "Registrierung absenden",
    btnGenerating: "Verarbeite Ihre Anfrage...",
    copyBtn: "Referenz-ID kopieren",
    copied: "Kopiert!",
    ticketTitle: "REGISTRIERUNGSREFERENZ",
    ticketLabel: "KOPIEREN SIE DIESE ID UND SENDEN SIE SIE UNS AUF TELEGRAM / VK FÜR DIE PRIORITÄTSÜBERPRÜFUNG",
    envAnalysis: "VERARBEITUNG DER REGISTRIERUNGSANFRAGE",
    errContactRequired: "Bitte geben Sie einen Kontakt an"
  },
  ja: {
    title: "事前登録コンソール",
    subtitle: "優先アクセスのための参照IDを生成",
    inputLabel: "Telegram @ユーザー名 または Eメール",
    inputPlaceholder: "例: @user または email@domain.com",
    osLabel: "モバイルOS",
    cpuLabel: "CPUアーキテクチャ",
    btnSubmit: "登録を送信",
    btnGenerating: "リクエストを処理中...",
    copyBtn: "参照IDをコピー",
    copied: "コピーしました！",
    ticketTitle: "登録参照ID",
    ticketLabel: "このIDをコピーし、TelegramまたはVKでお送りください。優先確認のため。",
    envAnalysis: "登録リクエストを処理中",
    errContactRequired: "連絡先を入力してください"
  },
  tr: {
    title: "Ön Kayıt Konsolu",
    subtitle: "Öncelikli erişim için referans kimliği oluşturun",
    inputLabel: "Telegram @kullanıcıadınız veya E-postanız",
    inputPlaceholder: "Örn: @can_crypto veya eposta@domain.com",
    osLabel: "Mobil İşletim Sistemi",
    cpuLabel: "İşlemci Mimarisi",
    btnSubmit: "Kaydı Gönder",
    btnGenerating: "İsteğiniz işleniyor...",
    copyBtn: "Referans Kimliğini Kopyala",
    copied: "Kopyalandı!",
    ticketTitle: "KAYIT REFERANSI",
    ticketLabel: "BU KİMLİĞİ KOPYALAYIP TELEGRAM / VK ÜZERİNDEN BİZE GÖNDERİN",
    envAnalysis: "KAYIT İSTEĞİ İŞLENİYOR",
    errContactRequired: "Lütfen iletişim bilginizi belirtin"
  }
};



const SECTION_TEXT: Record<LanguageCode, { badge: string; titleLine1: string; titleHighlight: string; subtitle: string; }> = {
  ru: {
    badge: "ПРИВАТНЫЙ СПИСОК ОЖИДАНИЯ",
    titleLine1: "Присоединиться к",
    titleHighlight: "бета-тестированию",
    subtitle: "Сформируйте ваш персональный локальный отпечаток и получите уникальный лицензионный билет для подключения вне очереди."
  },
  en: {
    badge: "PRIVATE WAITLIST // BETA",
    titleLine1: "Join the Private",
    titleHighlight: "Beta Testing",
    subtitle: "Generate your personal local fingerprint and obtain a unique license ticket for instant priority connection."
  },
  es: {
    badge: "LISTA DE ESPERA PRIVADA // BETA",
    titleLine1: "Únase a la prueba",
    titleHighlight: "Beta Privada",
    subtitle: "Genere su huella digital local personal y obtenga un boleto de licencia único para una conexión prioritaria instantánea."
  },
  zh: {
    badge: "私有等待队列 // 测试版",
    titleLine1: "加入私有内测",
    titleHighlight: "计划团队",
    subtitle: "生成您的个人本地设备指纹，并获取唯一的许可证兑换券以享受即时优先接入。"
  },
  tr: {
    badge: "ÖZEL BEKLEME LİSTESİ // BETA",
    titleLine1: "Özel Beta",
    titleHighlight: "Testine Katılın",
    subtitle: "Kendi yerel parmak izinizi oluşturun ve öncelikli anında bağlantı için benzersiz bir lisans bileti alın."
  },
  hi: {
    badge: "प्राइवेट प्रतीक्षा सूची // बीटा",
    titleLine1: "प्राइवेट बीटा",
    titleHighlight: "परीक्षण में शामिल हों",
    subtitle: "अपना व्यक्तिगत स्थानीय फ़िंगरप्रिंट जनरेट करें और तत्काल प्राथमिकता कनेक्शन के लिए एक अद्वितीय लाइसेंस टिकट प्राप्त करें।"
  },
  ar: {
    badge: "قائمة الانتظار الخاصة // التجريبية",
    titleLine1: "الانضمام إلى الاختبار",
    titleHighlight: "التجريبي الخاص",
    subtitle: "قم بتوليد بصمتك المحلية الفريدة واحصل على تذكرة ترخيص مميزة لتوصيل جهازك بشكل فوري."
  },
  pt: {
    badge: "LISTA DE ESPERA PRIVADA // BETA",
    titleLine1: "Participe do teste",
    titleHighlight: "Beta Privado",
    subtitle: "Gere sua assinatura digital local pessoal e obtenha um ticket de licença exclusivo para conexão prioritária instantânea."
  },
  fr: {
    badge: "LISTE D'ATTENTE PRIVÉE // BÊTA",
    titleLine1: "Rejoignez le test",
    titleHighlight: "Bêta Privé",
    subtitle: "Générez votre empreinte locale personnelle et obtenez un ticket de licence unique pour une connexion prioritaire instantanée."
  },
  de: {
    badge: "PRIVATE WARTELISTE // BETA",
    titleLine1: "Treten Sie dem",
    titleHighlight: "Beta-Test bei",
    subtitle: "Generieren Sie Ihren persönlichen lokalen Fingerabdruck und erhalten Sie ein einzigartiges Lizenz-Ticket für sofortigen prioritären Anschluss."
  },
  ja: {
    badge: "プライベート待機リスト // ベータ",
    titleLine1: "プライベートベータ",
    titleHighlight: "テストに参加する",
    subtitle: "デバイス固有のローカルフィンガープリントを生成し、優先的に接続するための特別なライセンスチケットを発行します。"
  }
};

const WaitlistSection = React.memo(function WaitlistSection() {
  const { t, language } = useTranslation();
  const ct = t.waitlist.console;
  const sect = SECTION_TEXT[language] || SECTION_TEXT.en;
  const BACK_BY_LANG: Record<LanguageCode, string> = {
    ru: "Назад", en: "Back", es: "Volver", zh: "返回", tr: "Geri", hi: "वापस", ar: "رجوع", pt: "Voltar", fr: "Retour", de: "Zurück", ja: "戻る"
  };
  
  const socials = t.waitlist.socials.map((s, i) => ({
    ...SOCIAL_META[i],
    name: s.name,
    desc: s.desc,
    badge: s.badge,
    actionText: s.action,
  }));

  // Form states
  const [contactInfo, setContactInfo] = useState("");
  const [os, setOs] = useState("Android");
  const [cpu, setCpu] = useState("Snapdragon / Tensor (NPU)");
  const [pdAgreed, setPdAgreed] = useState(false);
  const [pdError, setPdError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stepLog, setStepLog] = useState<string[]>([]);
  const [ticketId, setTicketId] = useState("");
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdAgreed) {
      setPdError(true);
      return;
    }
    setPdError(false);
    if (!contactInfo.trim()) {
      setErrorMessage(ct.errContactRequired);
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);
    setStepLog([]);

    const logs = [
      "Отправка запроса на регистрацию...",
      "Сохранение данных...",
      "Билет сформирован"
    ];

    let logIdx = 0;
    const interval = setInterval(() => {
      if (logIdx < logs.length) {
        setStepLog(prev => [...prev, logs[logIdx]]);
        logIdx++;
      } else {
        clearInterval(interval);
        const entropy = crypto.getRandomValues(new Uint32Array(2));
        const blockA = entropy[0].toString(36).slice(-4).toLowerCase();
        const blockB = entropy[1].toString(36).slice(-4).toLowerCase();
        setTicketId(`trustnode-wl-${blockA}-${blockB}`);
        setIsSubmitting(false);
      }
    }, 500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(ticketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const particles = Array.from({ length: 15 });

  return (
    <section 
      className="relative w-full py-24 sm:py-36 px-4 border-t border-[#1F2937]/30 bg-[#070709] overflow-hidden" 
      id="waitlist"
    >
      {/* Background tech grids / orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.06)_0%,rgba(0,0,0,0)_70%)] pointer-events-none animate-pulse duration-5000" />
      
      {/* Animated geometric nodes */}
      <div className="absolute left-[10%] top-[30%] w-1.5 h-1.5 rounded-full bg-[#2E7DFF]/40 animate-ping pointer-events-none" />
      <div className="absolute right-[15%] bottom-[25%] w-2 h-2 rounded-full bg-[#2E7DFF]/20 animate-pulse pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Decorative Badge */}
        <div className="text-center flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A162C]/80 border border-[#2E7DFF]/30 shadow-[0_0_15px_rgba(46,125,255,0.1)]">
            <Gem className="w-4 h-4 text-[#2E7DFF]" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[#2E7DFF] uppercase">
              {sect.badge}
            </span>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-[#F5F5F0] tracking-tight mb-6 leading-tight">
            {sect.titleLine1} <br />
            <span className="text-[#2E7DFF]">{sect.titleHighlight}</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed">
            {sect.subtitle}
          </p>
        </div>

        {/* HIGH-TECH INTERACTIVE LICENSE TICKET CONSOLE */}
        <div className="max-w-xl mx-auto mb-20 relative">
          
          <AnimatePresence mode="wait">
            {!ticketId ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="p-6 sm:p-8 rounded-3xl border border-white/[0.05] bg-[#0C0D11] relative overflow-hidden shadow-2xl text-left"
              >
                {/* Neon decorative mesh backing */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2E7DFF]/40 to-transparent" />
                <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.03)_0%,transparent_70%)] pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#111622] border border-[#2E7DFF]/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-[#2E7DFF]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#F5F5F0]">{ct.title}</h3>
                    <p className="font-sans text-[11px] text-gray-500">{ct.subtitle}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Contact input */}
                  <div>
                    <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1.5 font-bold">
                      {ct.inputLabel}
                    </label>
                    <input 
                      type="text" 
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder={ct.inputPlaceholder}
                      disabled={isSubmitting}
                      className="w-full bg-[#030406] border border-white/[0.06] focus:border-[#2E7DFF]/60 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#F5F5F0] placeholder-gray-600 focus:outline-none transition-all duration-300 font-mono"
                    />
                    {errorMessage && (
                      <p className="text-[#EF4444] font-mono text-[10px] mt-1.5 flex items-center gap-1">
                        <ShieldAlert className="w-3 h-3" /> {errorMessage}
                      </p>
                    )}
                  </div>

                  {/* Environment details Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1.5 font-bold">
                        {ct.osLabel}
                      </label>
                      <select 
                        value={os}
                        onChange={(e) => setOs(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full bg-[#030406] border border-white/[0.06] focus:border-[#2E7DFF]/60 rounded-xl px-3 py-2.5 text-xs text-gray-300 focus:outline-none cursor-pointer font-sans"
                      >
                        <option value="Android">Android (rubert-tiny2)</option>
                        <option value="iOS">Apple iOS (ONNX Port)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-1.5 font-bold">
                        {ct.cpuLabel}
                      </label>
                      <select 
                        value={cpu}
                        onChange={(e) => setCpu(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full bg-[#030406] border border-white/[0.06] focus:border-[#2E7DFF]/60 rounded-xl px-3 py-2.5 text-xs text-gray-300 focus:outline-none cursor-pointer font-sans"
                      >
                        <option value="Snapdragon NPU">Snapdragon (NPU Core)</option>
                        <option value="Apple Neural">Apple Silicon (ANE)</option>
                        <option value="MediaTek CPU">MediaTek APU (Local)</option>
                      </select>
                    </div>
                  </div>

                  {/* Consent checkbox for personal data processing */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5 select-none">
                      <input 
                        type="checkbox"
                        checked={pdAgreed}
                        onChange={(e) => { setPdAgreed(e.target.checked); setPdError(false); }}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-lg border transition-all duration-300 flex items-center justify-center ${
                        pdAgreed 
                          ? "bg-[#2E7DFF] border-[#2E7DFF] shadow-[0_0_10px_rgba(46,125,255,0.3)]" 
                          : "border-white/[0.15] bg-[#030304] group-hover:border-[#2E7DFF]/50"
                      }`}>
                        {pdAgreed && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                      </div>
                    </div>
                    <span className="font-sans text-[10px] text-gray-400 select-none group-hover:text-gray-300 transition-colors leading-relaxed">
                      {language === "ru" 
                        ? "Я согласен на обработку персональных данных в соответствии с Политикой конфиденциальности"
                        : "I consent to the processing of personal data in accordance with the Privacy Policy"}
                    </span>
                  </label>

                  {pdError && !pdAgreed && (
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-rose-500 font-mono text-[10px] uppercase tracking-wider bg-rose-500/5 px-3 py-1.5 rounded-lg border border-rose-500/10"
                    >
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>{language === "ru" ? "Необходимо согласие на обработку данных" : "Consent to data processing is required"}</span>
                    </motion.div>
                  )}

                  {/* Submission logs display when submitting */}
                  {isSubmitting && (
                    <div className="bg-[#030406] border border-white/[0.04] p-3 rounded-xl font-mono text-[9px] text-[#2E7DFF] space-y-1">
                      <div className="flex items-center gap-2 mb-1.5 border-b border-white/[0.04] pb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF] animate-ping" />
                        <span className="font-bold uppercase tracking-wider">{ct.envAnalysis}</span>
                      </div>
                      {stepLog.map((log, idx) => (
                        <div key={idx} className="opacity-80">{log}</div>
                      ))}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-xl font-sans text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                        : "bg-[#2E7DFF] text-white hover:bg-[#2E7DFF]/90 cursor-pointer shadow-[0_0_15px_rgba(46,125,255,0.15)] hover:shadow-[0_0_20px_rgba(46,125,255,0.35)]"
                    }`}
                  >
                    {isSubmitting ? ct.btnGenerating : ct.btnSubmit}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="ticket"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="p-6 sm:p-8 rounded-3xl border border-[#2E7DFF]/45 bg-[#0A111F]/90 text-center relative overflow-hidden shadow-2xl"
              >
                {/* Floating confetti-like particles for completion */}
                {particles.map((_, idx) => {
                  const angle = (idx / particles.length) * 360;
                  const radius = 50 + Math.random() * 80;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                      animate={{ opacity: 0, scale: [0, 1.2, 0], x, y }}
                      transition={{ duration: 1.5, delay: 0.05, ease: "easeOut" }}
                      className="absolute w-2 h-2 rounded-full bg-[#2E7DFF] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
                    />
                  );
                })}

                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2E7DFF] to-transparent" />
                <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.08)_0%,transparent_70%)] pointer-events-none" />

                <div className="flex flex-col items-center justify-center relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#101F3B] border border-[#2E7DFF]/40 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(46,125,255,0.3)]">
                    <CheckCircle className="w-8 h-8 text-emerald-400 animate-pulse" />
                  </div>

                  <span className="font-mono text-[9px] text-[#2E7DFF] uppercase tracking-[0.2em] font-bold block mb-1">
                    {ct.ticketTitle}
                  </span>

                  <h4 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mb-4">
                    {ticketId}
                  </h4>

                  <p className="font-sans text-[11px] sm:text-xs text-gray-300 leading-relaxed max-w-md mx-auto mb-6">
                    {ct.ticketLabel}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                    <button
                      onClick={handleCopy}
                      className="w-full sm:flex-1 py-3 px-4 rounded-xl font-sans text-xs font-bold bg-[#111A2E] border border-[#2E7DFF]/40 text-gray-200 hover:text-white hover:bg-[#15233D] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {copied ? <Sparkles className="w-4 h-4 text-emerald-400" /> : <Clipboard className="w-4 h-4" />}
                      {copied ? ct.copied : ct.copyBtn}
                    </button>
                    <button
                      onClick={() => setTicketId("")}
                      className="w-full sm:w-auto py-3 px-5 rounded-xl font-sans text-xs font-bold bg-transparent border border-white/[0.05] text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
                    >
                      {BACK_BY_LANG[language] || "Back"}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Dynamic Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-24">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-[#1F2937]/40 bg-[#0F0F12]/80 hover:bg-[#111C2E]/60 hover:border-[#2E7DFF]/55 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(46,125,255,0.08)] cursor-pointer text-left overflow-hidden"
            >
              {/* Top ambient hover gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(46,125,255,0.15)_0%,rgba(0,0,0,0)_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#1F2937] flex items-center justify-center shadow-inner">
                    {social.icon}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-medium border ${social.badgeColor}`}>
                    {social.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F0] mb-3 group-hover:text-[#2E7DFF] transition-colors">
                  {social.name}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {social.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1F2937]/30 flex items-center justify-between mt-auto">
                <span className="font-mono text-xs font-semibold text-[#2E7DFF]">
                  {social.actionText}
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#2E7DFF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </a>
          ))}
        </div>

        {/* Security disclaimer */}
        <div className="text-center">
          <p className="font-mono text-[10px] tracking-widest text-gray-600 mb-2 uppercase">
            {t.waitlist.disclaimer1}
          </p>
          <p className="font-mono text-[9px] text-gray-700 uppercase">
            {t.waitlist.disclaimer2}
          </p>
        </div>

      </div>
    </section>
  );
});

export default WaitlistSection;
