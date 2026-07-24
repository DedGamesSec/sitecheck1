import React, { useState } from "react";
import { Sparkles, ArrowRight, Check, AlertCircle } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { LanguageCode } from "../i18n/languages";
import { motion, AnimatePresence } from "motion/react";

const BANNER_TEXT: Record<LanguageCode, { title: string; placeholder: string; submit: string; success: string; error: string; generating: string; }> = {
  ru: {
    title: "Станьте частью приватного тестирования",
    placeholder: "Ваш Telegram @username или E-mail",
    submit: "Получить доступ",
    generating: "Генерация...",
    success: "ID сформирован и скопирован: ",
    error: "Укажите контактные данные"
  },
  en: {
    title: "Join Private Beta Testing",
    placeholder: "Your Telegram @username or E-mail",
    submit: "Request Access",
    generating: "Generating...",
    success: "License ID generated and copied: ",
    error: "Please provide contact handle"
  },
  es: {
    title: "Únase a la Prueba Beta Privada",
    placeholder: "Su Telegram @usuario o Correo electrónico",
    submit: "Solicitar Acceso",
    generating: "Generando...",
    success: "ID de licencia generado y copiado: ",
    error: "Por favor proporcione su contacto"
  },
  zh: {
    title: "加入内测计划",
    placeholder: "您的 Telegram 用户名 (@) 或 电子邮箱",
    submit: "申请加入",
    generating: "正在生成...",
    success: "兑换券已生成并复制：",
    error: "请填写您的联系方式"
  },
  tr: {
    title: "Özel Beta Testine Katılın",
    placeholder: "Telegram @kullanıcıadınız veya E-postanız",
    submit: "Erişim İste",
    generating: "Üretiliyor...",
    success: "Bilet ID'si üretildi ve kopyalandı: ",
    error: "Lütfen iletişim bilginizi belirtin"
  },
  hi: {
    title: "प्राइवेट बीटा टेस्टिंग में शामिल हों",
    placeholder: "आपका टेलीग्राम @username या ई-मेल",
    submit: "पहुंच का अनुरोध करें",
    generating: "कुंजियाँ बनाई जा रही हैं...",
    success: "लाइसेंस आईडी जनरेट की गई और कॉपी की गई: ",
    error: "कृपया संपर्क विवरण प्रदान करें"
  },
  ar: {
    title: "انضم إلى الاختبار التجريبي الخاص",
    placeholder: "تيليجرام الخاص بك أو البريد الإلكتروني",
    submit: "طلب انضمام",
    generating: "جاري إنشاء...",
    success: "تم توليد الترخيص ونسخه: ",
    error: "يرجى تقديم بيانات الاتصال"
  },
  pt: {
    title: "Participe do Teste Beta Privado",
    placeholder: "Seu Telegram @usuario ou E-mail",
    submit: "Solicitar Acesso",
    generating: "Gerando...",
    success: "ID de licença gerado e copiado: ",
    error: "Por favor informe seu contato"
  },
  fr: {
    title: "Rejoignez le bêta-test privé",
    placeholder: "Votre Telegram @nom_utilisateur ou E-mail",
    submit: "Demander l'accès",
    generating: "Génération...",
    success: "ID de licence généré et copié : ",
    error: "Veuillez fournir un moyen de contact"
  },
  de: {
    title: "Treten Sie dem privaten Beta-Test bei",
    placeholder: "Ihr Telegram @benutzername oder E-Mail",
    submit: "Zugang anfordern",
    generating: "Generiere...",
    success: "Lizenz-ID generiert und kopiert: ",
    error: "Bitte Kontakt angeben"
  },
  ja: {
    title: "プライベート内測テストに参加する",
    placeholder: "Telegram @ユーザー名 または Eメール",
    submit: "アクセスを申請",
    generating: "鍵を生成中...",
    success: "チケットIDがコピーされました：",
    error: "ご連絡先を入力してください"
  }
};

const WaitlistBanner = React.memo(function WaitlistBanner() {
  const { language } = useTranslation();
  const text = BANNER_TEXT[language] || BANNER_TEXT.en;

  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticket, setTicket] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) {
      setErrorMsg(text.error);
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      const randNum = Math.floor(1000 + Math.random() * 9000);
      const generatedTicket = `TN-BETA-${randNum}`;
      setTicket(generatedTicket);
      setIsSubmitting(false);

      // Copy to clipboard automatically
      navigator.clipboard.writeText(generatedTicket);
    }, 1200);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 mb-12 relative z-10">
      <div className="border border-[#2E7DFF]/25 bg-[#0A162C]/40 backdrop-blur-md rounded-2xl p-6 md:py-8 md:px-10 shadow-[0_0_30px_rgba(46,125,255,0.05)] relative overflow-hidden">
        {/* Subtle mesh background accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(46,125,255,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {!ticket ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7DFF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7DFF]"></span>
                  </span>
                  <span className="font-mono text-[9px] text-[#2E7DFF] uppercase tracking-[0.2em] font-bold">
                    TRUSTNODE BETA
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white tracking-tight">
                  {text.title}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 max-w-lg w-full">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder={text.placeholder}
                      disabled={isSubmitting}
                      className="w-full bg-[#030406]/90 border border-[#2E7DFF]/20 focus:border-[#2E7DFF]/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none transition-all font-mono"
                    />
                    {errorMsg && (
                      <div className="absolute left-1 -bottom-5 flex items-center gap-1 text-rose-400 text-[10px] font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errorMsg}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#2E7DFF] hover:bg-[#2E7DFF]/90 text-white font-sans text-xs font-bold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(46,125,255,0.15)] hover:shadow-[0_0_20px_rgba(46,125,255,0.3)] shrink-0 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {text.generating}
                      </>
                    ) : (
                      <>
                        {text.submit}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-[#2E7DFF] uppercase tracking-[0.2em] font-bold block mb-0.5">
                    REGISTRATION SUCCESS
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-gray-300 leading-normal">
                    {text.success} <strong className="font-mono text-[#F5F5F0] bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/[0.06] select-all">{ticket}</strong>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setTicket("")}
                className="font-mono text-[10px] text-gray-400 hover:text-white transition-colors bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.15] px-4 py-2 rounded-lg cursor-pointer shrink-0"
              >
                Reset
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

export default WaitlistBanner;
