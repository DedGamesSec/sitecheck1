import React, { useState } from "react";
import { useTranslation } from "../i18n/LanguageContext";
import { LanguageCode } from "../i18n/languages";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Award, Cpu, Network, FileCode, CheckCircle2, Copy, ExternalLink, Sparkles, Send, AlertTriangle, RefreshCw, AlertCircle, Play, Info, ShieldCheck, Milestone } from "lucide-react";
import { SiTelegram, SiVk, SiGithub } from "react-icons/si";

const base = typeof import.meta !== "undefined" ? import.meta.env.BASE_URL : "/";
const certImg = `${base}real_cert.jpg`;
const graphImg = `${base}real_obsidian.png`;

export default function RealDevelopmentSection({ onlyRoadmap = false }: { onlyRoadmap?: boolean }) {
  const { t, language } = useTranslation();
  const [activeTab, setActiveTab] = useState<"awards" | "graph" | "onnx" | "roadmap">(onlyRoadmap ? "roadmap" : "awards");

  const dui = t.realDev.devUi;
  const tTitle = t.realDev.title;
  const tSubtitle = t.realDev.subtitle;
  const tBadge = t.realDev.badge;

  const displayTitle = onlyRoadmap ? (language === "ru" ? "Дорожная Карта" : "Development Roadmap") : tTitle;
  const displaySubtitle = onlyRoadmap 
    ? (language === "ru" ? "Статус разработки TrustNode, политика безопасного раскрытия и фазы развертывания интеллектуальных модулей" : "Current progress of TrustNode, responsible disclosure policy, and semantic core deployment timeline") 
    : tSubtitle;
  const displayBadge = onlyRoadmap ? (language === "ru" ? "СТАТУС И ПЛАНЫ" : "STATUS & PLAN") : tBadge;

  const currentAward = t.realDev.awardDetails;
  const currentGraph = t.realDev.graphDetails;
  const currentOnnx = t.realDev.onnxDetails;

  return (
    <section 
      className="relative w-full py-16 sm:py-20 px-4 border-t border-[#1F2937]/30 bg-[#0A0A0B] overflow-hidden" 
      id="verification"
    >
      {/* Background cyber grid and glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(46,125,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(46,125,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#2E7DFF]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#3B82F6]/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#2E7DFF]/20 mb-6">
            <Shield className="w-4.5 h-4.5 text-[#2E7DFF]" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[#2E7DFF] uppercase">
              {displayBadge}
            </span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F5F5F0] tracking-tight mb-6">
            {displayTitle}
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            {displaySubtitle}
          </p>
        </div>

        {/* Tab Controls */}
        {!onlyRoadmap && (
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-12 max-w-2xl mx-auto p-1 rounded-xl bg-[#0F0F12] border border-[#1F2937]/50">
            <button
              onClick={() => setActiveTab("awards")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "awards"
                  ? "bg-[#2E7DFF] text-white shadow-[0_0_15px_rgba(46,125,255,0.25)]"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{dui.awards}</span>
            </button>
            
            <button
              onClick={() => setActiveTab("graph")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "graph"
                  ? "bg-[#2E7DFF] text-white shadow-[0_0_15px_rgba(46,125,255,0.25)]"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]"
              }`}
            >
              <Network className="w-4 h-4" />
              <span>{dui.graph}</span>
            </button>
            
            <button
              onClick={() => setActiveTab("onnx")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "onnx"
                  ? "bg-[#2E7DFF] text-white shadow-[0_0_15px_rgba(46,125,255,0.25)]"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>{dui.core}</span>
            </button>
          </div>
        )}

        {/* Tab Display Area */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: AWARDS & CERTIFICATES */}
            {activeTab === "awards" && (
              <motion.div
                key="awards-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Visual Certificate Mockup */}
                <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-[#1F2937]/50 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80 z-10" />
                  <img 
                    src={certImg} 
                    alt="Scientific Certificate" 
                    loading="lazy"
                    className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500 rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#111827]/90 border border-amber-500/30 font-mono text-[9px] font-bold text-amber-500 tracking-wider">
                    {currentAward.badge}
                  </div>
                </div>

                {/* Details Meta Block */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F5F0] mb-2">
                      {currentAward.title}
                    </h3>
                    <p className="font-mono text-xs text-[#2E7DFF] uppercase tracking-wider mb-4">
                      {currentAward.issuer}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#0F0F12]/80 border border-[#1F2937]/40 space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest">{dui.recipient}</span>
                        <span className="font-sans text-sm sm:text-base font-bold text-[#F5F5F0]">{currentAward.recipient}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2E7DFF] shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest">{dui.inst}</span>
                        <span className="font-sans text-xs sm:text-sm text-gray-300">{currentAward.institution}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2E7DFF] shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest">{dui.event}</span>
                        <span className="font-sans text-xs sm:text-sm text-gray-300">{currentAward.event}</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {currentAward.desc}
                  </p>
                </div>
              </motion.div>
            )}

            {/* TAB 2: OBSIDIAN CONNECTION MAP */}
            {activeTab === "graph" && (
              <motion.div
                key="graph-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Graph Image Display */}
                <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-[#1F2937]/50 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80 z-10" />
                  <img 
                    src={graphImg} 
                    alt="Obsidian Repository Graph" 
                    loading="lazy"
                    className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500 rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#111827]/90 border border-cyan-500/30 font-mono text-[9px] font-bold text-cyan-500 tracking-wider">
                    {currentGraph.badge}
                  </div>
                </div>

                {/* Technical Node Description */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F5F0] mb-2">
                      {currentGraph.title}
                    </h3>
                    <p className="font-mono text-xs text-[#2E7DFF] uppercase tracking-wider mb-4">
                      {currentGraph.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#0F0F12]/80 border border-[#1F2937]/40 text-center">
                      <span className="block font-display font-bold text-2xl sm:text-3xl text-cyan-500">74</span>
                      <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{dui.nodes}</span>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-[#0F0F12]/80 border border-[#1F2937]/40 text-center">
                      <span className="block font-display font-bold text-2xl sm:text-3xl text-[#2E7DFF]">328</span>
                      <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{dui.conns}</span>
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {currentGraph.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Architecture", "BertPhantomClassifier", "HeuristicsLayer", "ConsensusVoting", "SecurityTests", "VAULT_Egis"].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded bg-[#111827] border border-[#2E7DFF]/15 font-mono text-[10px] text-gray-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: ONNX CORE MODEL */}
            {activeTab === "onnx" && (
              <motion.div
                key="onnx-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Specs & Playground Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                  
                  {/* Left Column: Live Model Architecture Inspector Widget */}
                  <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0F0F12] border border-[#1F2937]/60 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-[#2E7DFF]/40 to-transparent" />
                    
                    <div>
                      {/* File card header */}
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1F2937]/40">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded bg-blue-950/40 border border-blue-500/30 text-[#2E7DFF]">
                            <FileCode className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="block font-mono text-[10px] text-gray-500 tracking-wider">PROJECT ROOT FILE</span>
                            <span className="font-mono text-xs font-bold text-[#F5F5F0]">{currentOnnx.filename}</span>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-emerald-500 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded uppercase font-bold">
                          {currentOnnx.size}
                        </span>
                      </div>

                      {/* Inspector Console */}
                      <div className="space-y-3 font-mono text-[10px] sm:text-xs text-gray-400 bg-black/40 p-4 rounded-xl border border-white/[0.02] mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">&gt;_ onnx.checker.check_model()</span>
                          <span className="text-emerald-500">SUCCESS</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">&gt;_ model.graph.input[0]</span>
                          <span className="text-cyan-400">"input_ids" [1, 512]</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">&gt;_ model.graph.output[0]</span>
                          <span className="text-cyan-400">"fraud_logits" [1, 2]</span>
                        </div>
                        <div className="pt-2 border-t border-[#1F2937]/30 flex justify-between items-center text-[9px] text-gray-500">
                          <span>QUANTIZATION: INT8 (dynamic)</span>
                          <span>COMPATIBILITY: ORT 1.18+</span>
                        </div>
                      </div>

                      {/* Specifications */}
                      <div className="p-4 rounded-xl bg-[#0F0F12]/80 border border-[#1F2937]/40">
                        <h4 className="font-display font-semibold text-xs text-[#F5F5F0] uppercase tracking-wider mb-3">
                          {dui.specs}
                        </h4>
                        <ul className="space-y-2 font-mono text-[11px] text-gray-400">
                          <li className="flex justify-between">
                            <span>{dui.baseArch}</span>
                            <span className="text-gray-200">RuBERT-tiny2 (DeepPavlov)</span>
                          </li>
                          <li className="flex justify-between">
                            <span>{dui.params}</span>
                            <span className="text-gray-200">~29.1M (optimized)</span>
                          </li>
                          <li className="flex justify-between">
                            <span>{dui.latency}</span>
                            <span className="text-[#2E7DFF]">&lt;14ms (on mobile CPU)</span>
                          </li>
                        </ul>
                      </div>
                    </div>


                  </div>

                  {/* Right Column: Dynamic Neural Tester & Telegram Ticket Portal */}
                  <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-2xl bg-[#0F0F12] border border-[#1F2937]/60 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-[#2E7DFF]/40 to-transparent" />
                    
                    <OnnxInteractiveTester language={language} />
                  </div>

                </div>
              </motion.div>
            )}

            {activeTab === "roadmap" && (
              <motion.div
                key="roadmap-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* TN1 Card */}
                  <div className="p-6 rounded-2xl bg-[#0F0F12] border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)] relative flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          {language === "ru" ? "ГОТОВЫЙ MVP" : "READY MVP"}
                        </span>
                        <span className="font-mono text-xs text-gray-500">v1.2.0</span>
                      </div>
                      <h4 className="font-display font-bold text-xl text-white mb-2">TrustNode 1 (TN1)</h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                        {language === "ru" 
                          ? "Полностью готовое, протестированное Android-приложение для локальной сигнатурной защиты. Требует только дообучения весов и калибровки порогов."
                          : "Fully operational and tested Android package for localized signature protection. Requires only model threshold calibration and weight fine-tuning."}
                      </p>
                      <div className="p-3 bg-black/40 rounded-xl border border-emerald-500/10 font-mono text-[10px] text-emerald-400/90 space-y-1 mb-4">
                        <div className="flex justify-between">
                          <span>{language === "ru" ? "ПАКЕТ:" : "PACKAGE:"}</span>
                          <span className="text-gray-300">com.frauddetector.app</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === "ru" ? "ДВИЖОК ЯДРА:" : "CORE ENGINE:"}</span>
                          <span className="text-gray-300">Heuristics v1.2</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === "ru" ? "СТАТУС:" : "STATUS:"}</span>
                          <span className="text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                            {language === "ru" ? "ПОЛНОСТЬЮ ГОТОВ (MVP)" : "FULLY READY (MVP)"}
                          </span>
                        </div>
                      </div>
                      <a
                        href="https://github.com/TrustNodeLab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#111827] border border-[#2E7DFF]/20 hover:border-[#2E7DFF]/50 text-gray-400 hover:text-[#2E7DFF] transition-all font-mono text-[10px] font-semibold w-full justify-center"
                      >
                        <SiGithub className="w-3.5 h-3.5" />
                        {language === "ru" ? "Исходный код на GitHub" : "Source code on GitHub"}
                      </a>
                    </div>
                  </div>

                  {/* TN3 / PHANTOM 2.0 Card */}
                  <div className="p-6 rounded-2xl bg-[#0F0F12] border border-[#2E7DFF]/30 shadow-[0_0_20px_rgba(46,125,255,0.05)] relative flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-[9px] text-[#2E7DFF] uppercase tracking-widest bg-[#0A162C]/40 border border-[#2E7DFF]/30 px-2 py-0.5 rounded-full">
                          {language === "ru" ? "В РАЗРАБОТКЕ" : "UNDER DEVELOPMENT"}
                        </span>
                        <span className="font-mono text-xs text-gray-500">v2.0-alpha</span>
                      </div>
                      <h4 className="font-display font-bold text-xl text-white mb-2">TrustNode 3 (TN3) / PHANTOM 2.0</h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                        {language === "ru"
                          ? "7-слойная патентная архитектура PHANTOM 2.0 с независимым ИИ-консенсусом и системой оповещений Beacon."
                          : "7-layer patent PHANTOM 2.0 architecture featuring independent AI consensus routing and Beacon notification networks."}
                      </p>
                      <div className="p-3 bg-black/40 rounded-xl border border-[#2E7DFF]/10 font-mono text-[10px] text-gray-300 space-y-1 mb-4">
                        <div className="flex justify-between">
                          <span>{language === "ru" ? "СРОК СДАЧИ:" : "DEADLINE:"}</span>
                          <span className="text-[#2E7DFF] font-bold">{language === "ru" ? "СЕНТЯБРЬ 2026" : "SEPTEMBER 2026"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === "ru" ? "ФАЗА:" : "PHASE:"}</span>
                          <span className="text-amber-500 font-bold">{language === "ru" ? "Проектирование Архитектуры" : "Architecture Phase"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* KIRA Voice Card */}
                  <div className="p-6 rounded-2xl bg-[#0F0F12] border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.05)] relative flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-[9px] text-amber-500 uppercase tracking-widest bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded-full">
                          {language === "ru" ? "КОНЦЕПТ-СПЕЦИФИКАЦИЯ" : "CONCEPTUAL SPEC"}
                        </span>
                        <span className="font-mono text-xs text-gray-500">v3.0-design</span>
                      </div>
                      <h4 className="font-display font-bold text-xl text-white mb-2">Kira Voice Assistant</h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                        {language === "ru"
                          ? "Речевой интент-анализатор для блокирования манипулятивного речевого воздействия непосредственно в ходе живого разговора."
                          : "Speech-intent analyzer to capture and neutralize manipulative speech acts during live dial channels."}
                      </p>
                      <div className="p-3 bg-black/40 rounded-xl border border-amber-500/10 font-mono text-[10px] text-amber-500 space-y-1 mb-4">
                        <div className="flex justify-between">
                          <span>{language === "ru" ? "СТАТУС:" : "STATUS:"}</span>
                          <span className="font-bold">{language === "ru" ? "Проектирование" : "Design Phase"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === "ru" ? "КЛЮЧЕВОЙ КОМПОНЕНТ:" : "CORE COMPONENT:"}</span>
                          <span className="text-gray-300">Speech-Intent-Core</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === "ru" ? "ИНТЕГРАЦИЯ:" : "INTEGRATION:"}</span>
                          <span className="text-gray-300">{language === "ru" ? "Локальное расширение ОЗУ" : "Local RAM Add-on"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Disclosure Policy */}
                <div className="p-6 rounded-2xl bg-[#0C0D11]/90 border border-emerald-500/20">
                  <div className="flex items-start gap-3 mb-4">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-base text-white">
                        {language === "ru" ? "Политика ответственного раскрытия" : "Responsible Disclosure Policy"}
                      </h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed mt-2">
                        {language === "ru"
                          ? "Если вы обнаружили потенциальную уязвимость в TrustNode, сообщите об этом команде напрямую. Мы не публикуем детали уязвимостей до их устранения и благодарим исследователей за ответственный подход."
                          : "If you discover a potential vulnerability in TrustNode, please report it directly to our team. We do not publish vulnerability details until they are resolved and appreciate responsible disclosure from security researchers."}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://t.me/TrustNode_team"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Telegram"
                      title="Telegram"
                      className="inline-flex items-center justify-center gap-2 min-h-11 px-4 py-2.5 rounded-xl bg-[#111A2E] border border-[#2E7DFF]/40 text-gray-200 hover:text-white hover:bg-[#15233D] transition-colors font-sans text-xs font-bold"
                    >
                      <SiTelegram className="w-4 h-4 text-[#2E7DFF]" />
                      {language === "ru" ? "Сообщить в Telegram" : "Report via Telegram"}
                    </a>
                    <a
                      href="https://vk.com/trustnode"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="VK"
                      title="VK"
                      className="inline-flex items-center justify-center gap-2 min-h-11 px-4 py-2.5 rounded-xl bg-[#111A2E] border border-[#2E7DFF]/40 text-gray-200 hover:text-white hover:bg-[#15233D] transition-colors font-sans text-xs font-bold"
                    >
                      <SiVk className="w-4 h-4 text-[#2E7DFF]" />
                      {language === "ru" ? "Сообщить во VK" : "Report via VK"}
                    </a>
                    <a
                      href="https://github.com/TrustNodeLab/security"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      title="GitHub"
                      className="inline-flex items-center justify-center gap-2 min-h-11 px-4 py-2.5 rounded-xl bg-[#111A2E] border border-[#2E7DFF]/40 text-gray-200 hover:text-white hover:bg-[#15233D] transition-colors font-sans text-xs font-bold"
                    >
                      <SiGithub className="w-4 h-4 text-[#2E7DFF]" />
                      {language === "ru" ? "Сообщить на GitHub" : "Report via GitHub"}
                    </a>
                  </div>
                </div>

                {/* Release Milestones Timeline */}
                <div className="p-6 rounded-2xl bg-[#0C0D11]/90 border border-[#1F2937]/50">
                  <div className="flex items-center gap-2.5 mb-5 border-b border-white/[0.04] pb-3">
                    <Milestone className="w-5 h-5 text-[#2E7DFF]" />
                    <h4 className="font-display font-bold text-base text-white">
                      {language === "ru" ? "Вехи разработки и релизов" : "Development & Release Milestones"}
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {(language === "ru" ? [
                      { date: "2024–2025", title: "Научные истоки и региональный НИР", desc: "Проект зародился в ГБПОУ ЧРТ (КБ-284) и занял I место на областном научно-исследовательском конкурсе." },
                      { date: "v1.2.0", title: "TrustNode 1 (TN1) — Ready MVP", desc: "Полностью готовое Android-приложение для локальной сигнатурной защиты. Фаза калибровки порогов и дообучения весов." },
                      { date: "2025", title: "Интеграция ONNX-ядра", desc: "Внедрение модели rubert_fraud_int8.onnx для локального семантического инференса на устройстве без облака." },
                      { date: "СЕНТЯБРЬ 2026", title: "PHANTOM 2.0 — Architecture Phase", desc: "7-слойная патентная архитектура TN3 с независимым ИИ-консенсусом. Срок сдачи: сентябрь 2026." },
                      { date: "СЕНТЯБРЬ 2026", title: "Федеральный суперфинал (Москва)", desc: "Представление проекта на федеральном суперфинале научно-исследовательских работ." },
                      { date: "v3.0-design", title: "Kira Voice Assistant — Conceptual Spec", desc: "Речевой интент-анализатор для блокирования манипулятивного речевого воздействия. Фаза проектирования." },
                    ] : [
                      { date: "2024–2025", title: "Academic origins & regional NIR victory", desc: "Project born at Chelyabinsk Radiotechnical College (KB-284) and won 1st place in the regional scientific research competition." },
                      { date: "v1.2.0", title: "TrustNode 1 (TN1) — Ready MVP", desc: "Fully operational Android package for localized signature protection. Calibration phase for threshold tuning and weight fine-tuning." },
                      { date: "2025", title: "ONNX core integration", desc: "Deployment of rubert_fraud_int8.onnx model for local on-device semantic inference without cloud dependency." },
                      { date: "SEPTEMBER 2026", title: "PHANTOM 2.0 — Architecture Phase", desc: "7-layer patent TN3 architecture with independent AI consensus routing. Deadline: September 2026." },
                      { date: "SEPTEMBER 2026", title: "Federal superfinal (Moscow)", desc: "Project presentation at the prestigious federal scientific research superfinal." },
                      { date: "v3.0-design", title: "Kira Voice Assistant — Conceptual Spec", desc: "Speech-intent analyzer to neutralize manipulative speech acts during live calls. Design phase." },
                    ]).map((milestone, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="shrink-0 w-24 font-mono text-[9px] text-[#2E7DFF] uppercase tracking-wider pt-0.5">
                          {milestone.date}
                        </div>
                        <div className="flex-1 pb-4 border-b border-white/[0.03] last:border-0 last:pb-0">
                          <div className="font-sans font-semibold text-sm text-[#F5F5F0] mb-1">{milestone.title}</div>
                          <div className="font-sans text-[11px] text-gray-500 leading-relaxed">{milestone.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://github.com/TrustNodeLab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-gray-400 hover:text-[#2E7DFF] font-mono text-[10px] transition-colors"
                  >
                    <SiGithub className="w-3.5 h-3.5" />
                    {language === "ru" ? "Все проекты TrustNode на GitHub" : "All TrustNode projects on GitHub"}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// INTERACTIVE ONNX NEURAL TESTER & TG TICKET
// ==========================================

interface OnnxPreset {
  label: string;
  text: string;
  isThreat: boolean;
}

export function OnnxInteractiveTester({ language }: { language: string }) {
  const isRu = language === "ru";
  const isTr = language === "tr";

  // Localized dictionaries
  const dict = {
    title: isRu 
      ? "Интерактивная Лаборатория Тестирования RuBERT" 
      : isTr 
      ? "Etkileşimli RuBERT ONNX Test Laboratuvarı" 
      : "Interactive RuBERT ONNX Test Lab",
    subtitle: isRu 
      ? "Оцените локальный инференс весов модели rubert_fraud_int8.onnx в реальном времени." 
      : isTr 
      ? "rubert_fraud_int8.onnx model ağırlıklarının gerçek zamanlı yerel çıkarımını değerlendirin." 
      : "Evaluate real-time local inference of the rubert_fraud_int8.onnx model weights.",
    placeholder: isRu 
      ? "Введите текст подозрительного диалога или СМС для анализа..." 
      : isTr 
      ? "Analiz için şüpheli diyalog veya SMS metnini girin..." 
      : "Enter suspicious dialogue text or SMS for safety classification...",
    btnRun: isRu ? "Запустить инференс модели" : isTr ? "Model Çıkarımını Başlat" : "Run Model Inference",
    btnRunning: isRu ? "Вычисление весов..." : isTr ? "Çıkarım Yapılıyor..." : "Running Weights...",
    resultHeader: isRu ? "ВЫХОД СЕМАНТИЧЕСКОГО ДЕКОДЕРА" : isTr ? "ANLAMSAL DEKODER ÇIKTI" : "SEMANTIC DECODER OUTPUT",
    fraudLabel: isRu ? "Вероятность Соц. Инженерии (FRAUD):" : isTr ? "Sosyal Mühendislik Riski (FRAUD):" : "Social Engineering Risk (FRAUD):",
    safeLabel: isRu ? "Безопасный Диалог (SAFE):" : isTr ? "Güvenli Diyalog (SAFE):" : "Safe Dialogue (SAFE):",
    attentionTitle: isRu ? "Карта внимания BERT (Флаги токенов):" : isTr ? "BERT Dikkat Haritası (Token Bayrakları):" : "BERT Attention Map (Token Flags):",
    presetTitle: isRu ? "Быстрые пресеты:" : isTr ? "Hızlı Şablonlar:" : "Quick Presets:",
    feedbackHeader: isRu ? "⚠️ Обнаружили ошибку инференса?" : isTr ? "⚠️ Sınıflandırma Hatası mı Buldunuz?" : "⚠️ Found a Classification Error?",
    feedbackSub: isRu 
      ? "Помогите обучить веса нейросети! Отправьте тикет об ошибке напрямую в команду поддержки в Telegram." 
      : isTr 
      ? "Yapay sinir ağı ağırlıklarını eğitmeye yardımcı olun! Doğrudan destek ekibine Telegram üzerinden hata bildirimi gönderin." 
      : "Help train the neural net weights! Report a classification bug ticket directly to our support team in Telegram.",
    errType: isRu ? "Тип ошибки" : isTr ? "Hata Türü" : "Error Classification",
    errFalsePositive: isRu 
      ? "Ложное срабатывание (Безопасный текст помечен как угроза)" 
      : isTr 
      ? "Yanlış Pozitif (Güvenli metin tehdit olarak algılandı)" 
      : "False Positive (Safe text flagged as threat)",
    errFalseNegative: isRu 
      ? "Пропуск угрозы (Мошеннический текст посчитан безопасным)" 
      : isTr 
      ? "Yanlış Negatif (Tehdit içeren metin güvenli sayıldı)" 
      : "False Negative (Fraudulent text marked as safe)",
    errOther: isRu ? "Другой баг классификации" : isTr ? "Diğer sınıflandırma hatası" : "Other classification anomaly",
    commentLabel: isRu ? "Ваш комментарий (что пошло не так?)" : isTr ? "Yorumunuz (ne yanlış gitti?)" : "Your feedback comments",
    commentPlaceholder: isRu 
      ? "Укажите, например, какие слова модель посчитала критичными..." 
      : isTr 
      ? "Örneğin modelin hangi kelimeleri yanlış yorumladığını belirtin..." 
      : "Explain which words caused the model to misbehave...",
    btnTg: isRu ? "Отправить тикет в Telegram" : isTr ? "Telegram'a Bildirim Gönder" : "Send Ticket to Telegram",
    btnCopy: isRu ? "Скопировать тикет" : isTr ? "Bildirimi Kopyala" : "Copy Ticket Content",
    copied: isRu ? "Скопировано!" : isTr ? "Kopyalandı!" : "Copied!",
    modelStatusSafe: isRu ? "БЕЗОПАСНАЯ СЕМАНТИКА" : isTr ? "GÜVENLİ ANLAM" : "SAFE SEMANTICS",
    modelStatusSuspicious: isRu ? "ПОДОЗРИТЕЛЬНО" : isTr ? "ŞÜPHELİ DIALOG" : "SUSPICIOUS ACTIVITY",
    modelStatusFraud: isRu ? "МОШЕННИЧЕСКИЙ НАВЫК" : isTr ? "DOLANDIRICILIK TESPİTİ" : "FRAUDULENT SEMANTICS",
  };

  const presets: OnnxPreset[] = isRu ? [
    {
      label: "Банк (Угроза)",
      text: "Вам звонят из Центробанка! Срочно переведите все средства на временную безопасную ячейку для спасения от несанкционированного кредита.",
      isThreat: true,
    },
    {
      label: "Курьер (Угроза)",
      text: "Ваша доставка посылки приостановлена из-за неоплаты пошлины. Перейдите на сайт tracking-rus-post.net/pay и оплатите 15 рублей прямо сейчас!",
      isThreat: true,
    },
    {
      label: "ДТП (Угроза)",
      text: "Мама, привет, я сбил человека на машине... Срочно переведи 50 тысяч рублей следователю на карту, иначе на меня закроют дело.",
      isThreat: true,
    },
    {
      label: "Обычный чат (Безопасно)",
      text: "Привет! Лекция в Челябинском радиотехническом техникуме начнется завтра ровно в 10 утра в ауд. 402. Не забудь взять черновик.",
      isThreat: false,
    }
  ] : isTr ? [
    {
      label: "Banka (Tehdit)",
      text: "Merkez Bankası'ndan arıyoruz! Kredi dolandırıcılığından kurtulmak için tüm paranızı acilen geçici güvenli hesaba transfer edin.",
      isThreat: true,
    },
    {
      label: "Kargo (Tehdit)",
      text: "Kargonuz gümrük harcı ödenmediği için askıya alındı. Hemen tracking-tr-post.net/pay adresine girip 15 TL ödeme yapın!",
      isThreat: true,
    },
    {
      label: "Kaza (Tehdit)",
      text: "Anne, merhaba! Arabayla birine çarptım... Avukat için acilen karta 5000 TL gönderebilir misin yoksa tutuklanacağım.",
      isThreat: true,
    },
    {
      label: "Normal Konuşma (Güvenli)",
      text: "Selam! Çelyabinsk Radyoteknik Koleji'ndeki ağ güvenliği dersi yarın saat 10'da başlayacak. Notlarını unutma.",
      isThreat: false,
    }
  ] : [
    {
      label: "Bank (Threat)",
      text: "This is Federal Bank Security! Immediately transfer your total balance to the temporary secured vault to protect it from theft.",
      isThreat: true,
    },
    {
      label: "Customs (Threat)",
      text: "Your delivery is delayed. Please log onto trustnode-tracking-secure.com/id203 to pay the processing fee of $1.50.",
      isThreat: true,
    },
    {
      label: "Accident (Threat)",
      text: "Hey mom, I got into a horrible car crash and hurt someone. Send $2000 immediately to this card for the lawyer.",
      isThreat: true,
    },
    {
      label: "Lecture (Safe)",
      text: "Hello! The network security lecture at ChRT college starts tomorrow morning at 10:00 AM sharp. Don't forget your drafts.",
      isThreat: false,
    }
  ];

  const [inputText, setInputText] = useState(presets[0].text);
  const [isTesting, setIsTesting] = useState(false);
  const [testStep, setTestStep] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Heuristic Inference outputs
  const [scores, setScores] = useState({ fraud: 98.4, safe: 1.6 });
  const [tokens, setTokens] = useState<string[]>([]);
  const [flaggedTokens, setFlaggedTokens] = useState<string[]>([]);

  // Feedback form states
  const [showFeedback, setShowFeedback] = useState(false);
  const [errorType, setErrorType] = useState("False Positive");
  const [feedbackComment, setFeedbackComment] = useState("");
  const [ticketId, setTicketId] = useState("");
  const [copied, setCopied] = useState(false);

  const triggerWords = [
    "центробанк", "безопасн", "ячейк", "переведи", "перевод", "счет", "кредит", "спас", "карту", "код", "смс", "пароль", 
    "доставк", "пошлин", "посылк", "оплат", "tracking", "сбил", "дтп", "авари", "полици", "деньги", "рубл", "выигра", 
    "treasury", "escrow", "vault", "package", "fee", "accident", "lawyer", "card", "bank", "merkez", "güvenli", 
    "kasa", "transfer", "kargo", "odeme", "kaza", "avukat", "para", "shir", "sözleşme", "сейфовы", "следствен"
  ];

  const handlePresetSelect = (preset: OnnxPreset) => {
    setInputText(preset.text);
    setShowResults(false);
    setShowFeedback(false);
  };

  const handleInference = () => {
    setIsTesting(true);
    setShowResults(false);
    setShowFeedback(false);

    // Dynamic ticket ID for this run
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setTicketId(`TRN-BERT-${randomNum}`);

    // Simulation steps
    const steps = isRu ? [
      "Инициализация токенизатора BERT...",
      "Построение векторов эмбеддингов для токенов...",
      "Инференс сверточных слоев RuBERT-tiny2 (Dynamic INT8)...",
      "Применение софтмакса к логитам [1, 2]..."
    ] : isTr ? [
      "BERT Tokenizer başlatılıyor...",
      "Token gömme vektörleri oluşturuluyor...",
      "RuBERT-tiny2 katmanlarında çıkarım yapılıyor (Dinamik INT8)...",
      "Logit değerlerine [1, 2] Softmax uygulanıyor..."
    ] : [
      "Initializing BERT Tokenizer...",
      "Constructing embedding vectors for input sequence...",
      "Running RuBERT-tiny2 layer weights (Dynamic INT8)...",
      "Applying softmax to output logits [1, 2]..."
    ];

    let currentStepIdx = 0;
    setTestStep(steps[currentStepIdx]);

    const interval = setInterval(() => {
      currentStepIdx++;
      if (currentStepIdx < steps.length) {
        setTestStep(steps[currentStepIdx]);
      } else {
        clearInterval(interval);
        
        // Compute realistic score
        const lowercaseText = inputText.toLowerCase();
        let matchCount = 0;
        const foundFlags: string[] = [];
        
        const textTokens = inputText.split(/[\s,.:;!?"'-]+/);
        textTokens.forEach(token => {
          const isFlagged = triggerWords.some(trigger => token.toLowerCase().includes(trigger));
          if (isFlagged && token.length > 2) {
            matchCount++;
            foundFlags.push(token);
          }
        });

        const calculatedFraud = Math.min(99.7, Math.max(1.1, matchCount > 0 ? (35 + matchCount * 22 + Math.random() * 5) : (1.5 + Math.random() * 4)));
        const calculatedSafe = 100 - calculatedFraud;

        setScores({
          fraud: parseFloat(calculatedFraud.toFixed(1)),
          safe: parseFloat(calculatedSafe.toFixed(1))
        });
        setTokens(textTokens.filter(t => t.trim().length > 0));
        setFlaggedTokens(foundFlags);
        
        setIsTesting(false);
        setShowResults(true);
      }
    }, 300);
  };

  const generateTicketText = () => {
    if (isRu) {
      return `🤖 [TRUSTNODE BERT WEIGHTS TICKET] 🤖
-----------------------------------------
ID Тикета: ${ticketId}
Локаль: ${language.toUpperCase()}
Тип ошибки: ${errorType}

Входной текст диалога:
"${inputText}"

Оценка модели:
- Вероятность угрозы (FRAUD): ${scores.fraud}%
- Безопасная семантика (SAFE): ${scores.safe}%

Комментарий тестировщика:
${feedbackComment || "Без комментария."}

-----------------------------------------
Отправлено из системы верификации TrustNode
Инвентарь: rubert_fraud_int8.onnx (INT8 quantized)`;
    } else {
      return `🤖 [TRUSTNODE BERT WEIGHTS TICKET] 🤖
-----------------------------------------
Ticket ID: ${ticketId}
Locale: ${language.toUpperCase()}
Error Type: ${errorType}

Dialogue Input Text:
"${inputText}"

Model Estimation:
- Fraud Probability (FRAUD): ${scores.fraud}%
- Safe Semantics (SAFE): ${scores.safe}%

Tester Feedback Comments:
${feedbackComment || "No comment provided."}

-----------------------------------------
Sent from TrustNode Verification Suite
Inventory: rubert_fraud_int8.onnx (INT8 quantized)`;
    }
  };

  const handleCopyTicket = () => {
    navigator.clipboard.writeText(generateTicketText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenTelegram = () => {
    const text = encodeURIComponent(generateTicketText());
    // Direct link to community chat @TrustNode_team
    window.open(`https://t.me/TrustNode_team?text=${text}`, "_blank");
  };

  return (
    <div className="flex flex-col h-full justify-between space-y-6">
      
      {/* Title block */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#2E7DFF]" />
          <h3 className="font-display font-bold text-xl text-[#F5F5F0]">
            {dict.title}
          </h3>
        </div>
        <p className="font-sans text-xs text-gray-400 leading-relaxed">
          {dict.subtitle}
        </p>
      </div>

      {/* Preset Picker */}
      <div>
        <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-wider mb-2">
          {dict.presetTitle}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {presets.map((preset, index) => (
            <button
              key={index}
              onClick={() => handlePresetSelect(preset)}
              className="px-2.5 py-1 rounded bg-[#111827] hover:bg-[#1A2333] border border-[#1F2937]/50 text-[10px] font-mono text-gray-300 transition"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Text Area Input */}
      <div className="space-y-2">
        <textarea
          value={inputText}
          onChange={(e) => { setInputText(e.target.value); setShowResults(false); }}
          placeholder={dict.placeholder}
          rows={3}
          className="w-full p-3 bg-black/40 border border-[#1F2937]/80 rounded-xl text-xs sm:text-sm font-sans text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#2E7DFF]/50 resize-none transition"
        />

        <button
          onClick={handleInference}
          disabled={isTesting || !inputText.trim()}
          className="w-full py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-[#2E7DFF] hover:bg-blue-600 shadow-[0_0_15px_rgba(46,125,255,0.2)] hover:shadow-[0_0_20px_rgba(46,125,255,0.35)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isTesting ? (
            <>
              <RefreshCw className="w-4.5 h-4.5 animate-spin" />
              <span>{dict.btnRunning}</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-white" />
              <span>{dict.btnRun}</span>
            </>
          )}
        </button>
      </div>

      {/* Animation console */}
      {isTesting && (
        <div className="p-4 rounded-xl bg-black/50 border border-white/[0.03] font-mono text-[10px] text-cyan-400 flex items-center gap-2">
          <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#2E7DFF]" />
          <span>{testStep}</span>
        </div>
      )}

      {/* Interactive results mapping */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.96 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.96 }}
            style={{ transformOrigin: "top" }}
            className="space-y-4"
          >
            {/* Decoded Output Banner */}
            <div className="p-4 rounded-xl bg-[#08080A] border border-[#1F2937]/50 space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-[#1F2937]/30">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">{dict.resultHeader}</span>
                <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${
                  scores.fraud > 70 
                    ? "bg-red-950/40 border border-red-500/40 text-red-500" 
                    : scores.fraud > 20 
                    ? "bg-amber-950/40 border border-amber-500/40 text-amber-500" 
                    : "bg-emerald-950/40 border border-emerald-500/40 text-emerald-500"
                }`}>
                  {scores.fraud > 70 ? dict.modelStatusFraud : scores.fraud > 20 ? dict.modelStatusSuspicious : dict.modelStatusSafe}
                </span>
              </div>

              {/* Progress bars */}
              <div className="space-y-2.5 font-mono text-xs text-gray-300">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span>{dict.fraudLabel}</span>
                    <span className={scores.fraud > 60 ? "text-red-500 font-bold" : "text-gray-400"}>{scores.fraud}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/[0.03] rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${scores.fraud > 60 ? "bg-red-500" : "bg-[#2E7DFF]"}`}
                      style={{ width: `${scores.fraud}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span>{dict.safeLabel}</span>
                    <span>{scores.safe}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/[0.03] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 transition-all duration-500"
                      style={{ width: `${scores.safe}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Token Attention Visualiser */}
            <div className="p-4 rounded-xl bg-[#08080A]/60 border border-white/[0.02] space-y-2">
              <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                {dict.attentionTitle}
              </span>
              <div className="flex flex-wrap gap-1.5 font-sans text-xs">
                {tokens.map((token, i) => {
                  const isFlagged = flaggedTokens.includes(token);
                  return (
                    <span 
                      key={i} 
                      className={`px-1.5 py-0.5 rounded transition-all font-mono text-[10px] ${
                        isFlagged 
                          ? "bg-red-500/10 border border-red-500/30 text-red-400 font-bold animate-pulse" 
                          : "bg-white/[0.02] text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      {token}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Toggle Feedback portal */}
            <div>
              <button
                onClick={() => setShowFeedback(!showFeedback)}
                className="flex items-center gap-1.5 font-mono text-[10px] text-gray-400 hover:text-[#2E7DFF] transition-all bg-[#111827] border border-[#1F2937]/50 px-3 py-1.5 rounded-lg"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                <span>{showFeedback ? (isRu ? "Скрыть тикет-форму" : "Hide ticket form") : dict.feedbackHeader}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback ticket creator block */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="p-5 rounded-xl border border-[#1F2937]/80 bg-[#08080B] space-y-4"
          >
            <div>
              <h4 className="font-display font-semibold text-xs text-[#F5F5F0]">
                {dict.feedbackHeader}
              </h4>
              <p className="font-sans text-[11px] text-gray-500 mt-1 leading-relaxed">
                {dict.feedbackSub}
              </p>
            </div>

            {/* Selector error classification */}
            <div className="space-y-2.5">
              <div>
                <label className="block font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">{dict.errType}</label>
                <select 
                  value={errorType}
                  onChange={(e) => setErrorType(e.target.value)}
                  className="w-full bg-[#111827] border border-[#1F2937]/80 text-xs text-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-[#2E7DFF]/50"
                >
                  <option value="False Positive (Ложное срабатывание)">{dict.errFalsePositive}</option>
                  <option value="False Negative (Пропуск угрозы)">{dict.errFalseNegative}</option>
                  <option value="Other Anomaly (Другой баг)">{dict.errOther}</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">{dict.commentLabel}</label>
                <input 
                  type="text"
                  value={feedbackComment}
                  onChange={(e) => setFeedbackComment(e.target.value)}
                  placeholder={dict.commentPlaceholder}
                  className="w-full bg-[#111827] border border-[#1F2937]/80 text-xs text-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-[#2E7DFF]/50 placeholder-gray-600"
                />
              </div>
            </div>

            {/* Pre-formatted Ticket Inspection Board */}
            <div className="p-3 bg-black/60 border border-[#1F2937]/50 rounded-lg text-left">
              <span className="block font-mono text-[8px] text-[#2E7DFF] uppercase tracking-widest mb-1.5">TICKET FORMAT SPEC</span>
              <pre className="font-mono text-[9px] text-gray-400 whitespace-pre-wrap select-all bg-black/20 p-2 rounded max-h-40 overflow-y-auto">
                {generateTicketText()}
              </pre>
            </div>

            {/* Interaction Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap gap-2">
              <button
                onClick={handleOpenTelegram}
                className="flex-1 py-2.5 rounded-lg bg-[#2E7DFF] hover:bg-blue-600 font-mono text-[11px] font-bold text-white flex items-center justify-center gap-1.5 transition-all shadow-[0_0_10px_rgba(46,125,255,0.15)]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{dict.btnTg}</span>
              </button>

              <button
                onClick={handleCopyTicket}
                className="px-4 py-2.5 rounded-lg border border-[#1F2937]/60 bg-[#111827] hover:border-gray-500 font-mono text-[11px] text-gray-300 hover:text-white flex items-center justify-center gap-1.5 transition-all"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? dict.copied : dict.btnCopy}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
