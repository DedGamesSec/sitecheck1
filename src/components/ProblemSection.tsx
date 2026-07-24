import React, { useState, useEffect } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert, EyeOff, WifiOff, Phone, AlertTriangle, CloudLightning, RefreshCw, ServerOff } from "lucide-react";

const ProblemSection = React.memo(function ProblemSection() {
  const { t, language } = useTranslation();

  const SIM_LABELS: Record<string, Record<string, string>> = {
    ru: { call: "ВХОДЯЩИЙ ЗВОНОК", alert: "УГРОЗА ОБНАРУЖЕНА", soc: "Атака соц-инженерии", leak: "УТЕЧКА", messenger: "Телеграм", cloud: "Облако", broken: "СТАНДАРТНАЯ ЗАЩИТА ОТКЛЮЧЕНА" },
    en: { call: "INCOMING CALL", alert: "ALERT DETECTED", soc: "Social Engineering", leak: "OUTFLOW", messenger: "Messenger", cloud: "Cloud Log", broken: "TRADITIONAL SECURITY BROKEN" },
    es: { call: "LLAMADA ENTRANTE", alert: "ALERTA DETECTADA", soc: "Ingeniería social", leak: "FUGA", messenger: "Mensajería", cloud: "Nube Log", broken: "SEGURIDAD TRADICIONAL VULNERADA" },
    zh: { call: "来电显示", alert: "发现威胁", soc: "社交工程攻击", leak: "数据外泄", messenger: "即时通讯", cloud: "云端日志", broken: "传统安全防御失效" },
    tr: { call: "GELEN ARAMA", alert: "TEHDİT ALGILANDI", soc: "Sosyal Mühendislik", leak: "VERİ SIZINTISI", messenger: "Mesajlaşma", cloud: "Bulut Log", broken: "GELENEKSEL GÜVENLİK DEVRE DIŞI" },
    hi: { call: "आने वाली कॉल", alert: "चेतावनी का पता चला", soc: "सामाजिक इंजीनियरिंग", leak: "डेटा लीक", messenger: "मैसेंजर", cloud: "क्लाउड लॉग", broken: "पारंपरिक सुरक्षा विफल" },
    ar: { call: "مكالمة واردة", alert: "تم اكتشاف تهديد", soc: "الهندسة الاجتماعية", leak: "تسريب البيانات", messenger: "المراسلة", cloud: "سجل السحابة", broken: "فشل الأمان التقليدي" },
    pt: { call: "CHAMADA RECEBIDA", alert: "ALERTA DETECTADO", soc: "Engenharia Social", leak: "VAZAMENTO", messenger: "Mensageiro", cloud: "Nuvem Log", broken: "SEGURANÇA TRADICIONAL FALHOU" },
    fr: { call: "APPEL ENTRANT", alert: "ALERTE DÉTECTÉE", soc: "Ingénierie Sociale", leak: "FUITE", messenger: "Messagerie", cloud: "Journal Cloud", broken: "SÉCURITÉ TRADITIONNELLE DÉFAILLANTE" },
    de: { call: "EINGEHENDER ANRUF", alert: "ALARM ERKANNT", soc: "Social Engineering", leak: "DATENABFLUSS", messenger: "Messenger", cloud: "Cloud-Log", broken: "HERKÖMMLICHE SICHERHEIT DEFEKT" },
    ja: { call: "着信", alert: "警告を検知", soc: "ソーシャルエンジニアリング", leak: "データ流出", messenger: "メッセンジャー", cloud: "クラウドログ", broken: "従来のセキュリティ無効化" }
  };
  const sim = SIM_LABELS[language] || SIM_LABELS.en;
  
  // States to drive cool mini-simulations in each card
  const [incomingCall, setIncomingCall] = useState(true);
  const [dataLeakProgress, setDataLeakProgress] = useState(0);
  const [pingFailed, setPingFailed] = useState(true);

  // Call simulation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setIncomingCall(prev => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Data leak progress simulation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setDataLeakProgress(prev => (prev + 1) % 100);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // Offline status check animation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setPingFailed(prev => !prev);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const problems = t.problem.items.map((item, i) => ({
    id: `prob-${i + 1}`,
    title: item.title,
    desc: item.desc,
  }));

  return (
    <section 
      className="relative w-full py-16 sm:py-20 px-4 border-t border-[#1F2937]/30 bg-[#0A0A0B] overflow-hidden" 
      id="problem"
    >
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.04)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#2E7DFF]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF] animate-ping" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[#2E7DFF] uppercase">
              {t.problem.badge}
            </span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F5F5F0] tracking-tight mb-6">
            {t.problem.titleLine1} <br className="hidden sm:inline" />
            <span className="text-[#2E7DFF]">{t.problem.titleHighlight}</span>
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            {t.problem.subtitle}
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* PROBLEM CARD 1: SOCIAL ENGINEERING CALL SPOOFING */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-6 sm:p-8 rounded-2xl bg-[#0F0F11]/90 border border-[#1F2937]/40 hover:border-[#2E7DFF]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,125,255,0.08)] flex flex-col justify-between overflow-hidden"
            id="prob-1"
          >
            <div>
              {/* INTERACTIVE PHONE SIMULATOR PANEL */}
              <div className="w-full h-44 rounded-xl overflow-hidden mb-6 border border-white/[0.04] bg-[#141418] relative flex flex-col justify-between p-4 font-mono">
                <div className="flex justify-between items-center text-[9px] text-gray-500 pb-2 border-b border-white/[0.03]">
                  <span>SIM_SLOT_01: ACTIVE</span>
                  <span className="text-[#2E7DFF] font-bold">LTE</span>
                </div>

                <div className="flex flex-col items-center justify-center my-auto text-center">
                  <AnimatePresence mode="wait">
                    {incomingCall ? (
                      <motion.div 
                        key="active-call"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-1.5"
                      >
                        <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center mx-auto text-red-500 animate-pulse">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span className="block text-[11px] font-bold text-red-400 uppercase tracking-widest">{sim.call}</span>
                        <span className="block text-xs text-gray-300 font-bold">+7 (495) 900-30-00</span>
                        <span className="block text-[8px] text-gray-500 bg-black/40 px-2 py-0.5 rounded border border-white/[0.03]">
                          SPOOFED NAME: "SECURITY DEP"
                        </span>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="call-analysed"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-1.5"
                      >
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-500">
                          <ShieldAlert className="w-4 h-4" />
                        </div>
                        <span className="block text-[10px] font-bold text-amber-400 uppercase tracking-wider">{sim.alert}</span>
                        <span className="block text-[10px] text-gray-400">{sim.soc}</span>
                        <span className="block text-[9px] text-amber-500 font-bold bg-amber-950/30 px-2.5 py-0.5 rounded border border-amber-500/20">
                          PHANTOM LAYER 2 FLAG
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="absolute bottom-2 right-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  <span className="text-[8px] text-red-400 font-bold">LIVE STREAM</span>
                </div>
              </div>
              
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F0] mb-4 group-hover:text-[#2E7DFF] transition-colors duration-300">
                {problems[0].title}
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                {problems[0].desc}
              </p>
            </div>
            
            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-[#2E7DFF]" />
            </div>
          </motion.div>

          {/* PROBLEM CARD 2: PRIVACY LEAKS TO CLOUD SERVERS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-6 sm:p-8 rounded-2xl bg-[#0F0F11]/90 border border-[#1F2937]/40 hover:border-[#2E7DFF]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,125,255,0.08)] flex flex-col justify-between overflow-hidden"
            id="prob-2"
          >
            <div>
              {/* DATA TRANSFER & INTERCEPT DIAGRAM */}
              <div className="w-full h-44 rounded-xl overflow-hidden mb-6 border border-white/[0.04] bg-[#141418] relative flex flex-col justify-between p-4 font-mono">
                <div className="flex justify-between items-center text-[9px] text-gray-500">
                  <span>SSL_INSPECTOR: TRANSPARENT</span>
                  <span className="text-red-400 font-bold">{sim.leak}</span>
                </div>

                {/* Animated transmission lanes */}
                <div className="my-auto space-y-4 relative">
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex flex-col items-center">
                      <div className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-[9px] font-bold">P</div>
                      <span className="text-[8px] text-gray-500 mt-1">{sim.messenger}</span>
                    </div>

                    {/* Progress stream bar */}
                    <div className="flex-1 mx-3 h-1.5 bg-white/[0.03] rounded-full overflow-hidden relative">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-transparent transition-all duration-100"
                        style={{ width: `${dataLeakProgress}%` }}
                      />
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-5 h-5 rounded bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center text-[9px]">
                        <EyeOff className="w-3 h-3" />
                      </div>
                      <span className="text-[8px] text-red-500 mt-1 font-bold">{sim.cloud}</span>
                    </div>
                  </div>

                  <div className="text-[9px] text-center text-gray-500 bg-red-950/20 border border-red-500/10 py-1.5 rounded">
                    WARNING: PLAIN TEXT TRANSCRIPT UPLOADED
                  </div>
                </div>

                <div className="flex justify-between items-center text-[8px] text-gray-600 border-t border-white/[0.03] pt-2">
                  <span>PACKETS: TX/RX ENCRYPTED</span>
                  <span>KEYS: SERVER-HELD</span>
                </div>
              </div>
              
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F0] mb-4 group-hover:text-[#2E7DFF] transition-colors duration-300">
                {problems[1].title}
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                {problems[1].desc}
              </p>
            </div>
            
            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-[#2E7DFF]" />
            </div>
          </motion.div>

          {/* PROBLEM CARD 3: INERT / OFFLINE WITHOUT NETWORK */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-6 sm:p-8 rounded-2xl bg-[#0F0F11]/90 border border-[#1F2937]/40 hover:border-[#2E7DFF]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,125,255,0.08)] flex flex-col justify-between overflow-hidden"
            id="prob-3"
          >
            <div>
              {/* OFFLINE FAILURE GRAPH */}
              <div className="w-full h-44 rounded-xl overflow-hidden mb-6 border border-white/[0.04] bg-[#141418] relative flex flex-col justify-between p-4 font-mono">
                <div className="flex justify-between items-center text-[9px] text-gray-500">
                  <span>CONN: DISCONNECTED</span>
                  <span className="text-red-400 font-bold">OFFLINE</span>
                </div>

                <div className="my-auto flex flex-col items-center justify-center text-center">
                  <AnimatePresence mode="wait">
                    {pingFailed ? (
                      <motion.div 
                        key="ping-failed"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-1.5"
                      >
                        <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center mx-auto text-red-400">
                          <ServerOff className="w-4 h-4" />
                        </div>
                        <span className="block text-[10px] font-bold text-red-400 uppercase tracking-wider">CLOUD TIMEOUT</span>
                        <span className="block text-[9px] text-gray-500">https://api.cloud-antifraud.io</span>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="cloud-inert"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-1.5"
                      >
                        <div className="w-8 h-8 rounded-full bg-red-950/40 border border-red-500/20 flex items-center justify-center mx-auto text-red-500">
                          <WifiOff className="w-4 h-4 animate-bounce" />
                        </div>
                        <span className="block text-[10px] font-bold text-red-500 uppercase tracking-widest">INERT STATE</span>
                        <span className="block text-[8px] text-gray-500 bg-red-950/20 border border-red-500/10 px-2 py-0.5 rounded">
                          0% SHIELD COMPILATION
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="text-[9px] text-center text-red-500 font-bold bg-red-950/20 border border-red-500/15 py-1 rounded uppercase tracking-tighter">
                  {sim.broken}
                </div>
              </div>
              
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F0] mb-4 group-hover:text-[#2E7DFF] transition-colors duration-300">
                {problems[2].title}
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                {problems[2].desc}
              </p>
            </div>
            
            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-[#2E7DFF]" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
});

export default ProblemSection;
