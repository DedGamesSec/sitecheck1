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
  const rmp = t.roadmapPage;

  const displayTitle = onlyRoadmap ? rmp.title : tTitle;
  const displaySubtitle = onlyRoadmap ? rmp.subtitle : tSubtitle;
  const displayBadge = onlyRoadmap ? rmp.badge : tBadge;

  const currentAward = t.realDev.awardDetails;
  const currentGraph = t.realDev.graphDetails;
  const currentOnnx = t.realDev.onnxDetails;

  const onnxConsole = ONNX_DICT[language] || ONNX_DICT.en;

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
                            <span className="block font-mono text-[10px] text-gray-500 tracking-wider">{onnxConsole.consoleRootFile}</span>
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
                          <span className="text-emerald-500">{onnxConsole.consoleSuccess}</span>
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
                          <span>{onnxConsole.consoleQuant}</span>
                          <span>{onnxConsole.consoleCompat}</span>
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
                          {rmp.readyMvp}
                        </span>
                        <span className="font-mono text-xs text-gray-500">v1.2.0</span>
                      </div>
                      <h4 className="font-display font-bold text-xl text-white mb-2">TrustNode 1 (TN1)</h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                        {rmp.tn1Desc}
                      </p>
                      <div className="p-3 bg-black/40 rounded-xl border border-emerald-500/10 font-mono text-[10px] text-emerald-400/90 space-y-1 mb-4">
                        <div className="flex justify-between">
                          <span>{rmp.packageLabel}</span>
                          <span className="text-gray-300">com.frauddetector.app</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{rmp.coreEngineLabel}</span>
                          <span className="text-gray-300">Heuristics v1.2</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{rmp.statusLabel}</span>
                          <span className="text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                            {rmp.fullyReady}
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
                        {rmp.sourceGithub}
                      </a>
                    </div>
                  </div>

                  {/* TN3 / PHANTOM 2.0 Card */}
                  <div className="p-6 rounded-2xl bg-[#0F0F12] border border-[#2E7DFF]/30 shadow-[0_0_20px_rgba(46,125,255,0.05)] relative flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-[9px] text-[#2E7DFF] uppercase tracking-widest bg-[#0A162C]/40 border border-[#2E7DFF]/30 px-2 py-0.5 rounded-full">
                          {rmp.underDevelopment}
                        </span>
                        <span className="font-mono text-xs text-gray-500">v2.0-alpha</span>
                      </div>
                      <h4 className="font-display font-bold text-xl text-white mb-2">TrustNode 3 (TN3) / PHANTOM 2.0</h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                        {rmp.tn3Desc}
                      </p>
                      <div className="p-3 bg-black/40 rounded-xl border border-[#2E7DFF]/10 font-mono text-[10px] text-gray-300 space-y-1 mb-4">
                        <div className="flex justify-between">
                          <span>{rmp.deadlineLabel}</span>
                          <span className="text-[#2E7DFF] font-bold">{rmp.september2026}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{rmp.phaseLabel}</span>
                          <span className="text-amber-500 font-bold">{rmp.architecturePhase}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* KIRA Voice Card */}
                  <div className="p-6 rounded-2xl bg-[#0F0F12] border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.05)] relative flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-[9px] text-amber-500 uppercase tracking-widest bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded-full">
                          {rmp.conceptualSpec}
                        </span>
                        <span className="font-mono text-xs text-gray-500">v3.0-design</span>
                      </div>
                      <h4 className="font-display font-bold text-xl text-white mb-2">Kira Voice Assistant</h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                        {rmp.kiraDesc}
                      </p>
                      <div className="p-3 bg-black/40 rounded-xl border border-amber-500/10 font-mono text-[10px] text-amber-500 space-y-1 mb-4">
                        <div className="flex justify-between">
                          <span>{rmp.statusLabel}</span>
                          <span className="font-bold">{rmp.designPhase}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{rmp.coreComponentLabel}</span>
                          <span className="text-gray-300">Speech-Intent-Core</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{rmp.integrationLabel}</span>
                          <span className="text-gray-300">{rmp.ramAddon}</span>
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
                        {rmp.disclosureTitle}
                      </h4>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed mt-2">
                        {rmp.disclosureDesc}
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
                      {rmp.reportTelegram}
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
                      {rmp.reportVk}
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
                      {rmp.reportGithub}
                    </a>
                  </div>
                </div>

                {/* Release Milestones Timeline */}
                <div className="p-6 rounded-2xl bg-[#0C0D11]/90 border border-[#1F2937]/50">
                  <div className="flex items-center gap-2.5 mb-5 border-b border-white/[0.04] pb-3">
                    <Milestone className="w-5 h-5 text-[#2E7DFF]" />
                    <h4 className="font-display font-bold text-base text-white">
                      {rmp.milestonesTitle}
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {rmp.milestones.map((milestone, idx) => (
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
                    {rmp.allProjectsGithub}
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

interface OnnxDictType {
  title: string; subtitle: string; placeholder: string; btnRun: string; btnRunning: string; resultHeader: string; fraudLabel: string; safeLabel: string; attentionTitle: string; presetTitle: string; feedbackHeader: string; feedbackSub: string; errType: string; errFalsePositive: string; errFalseNegative: string; errOther: string; commentLabel: string; commentPlaceholder: string; btnTg: string; btnCopy: string; copied: string; modelStatusSafe: string; modelStatusSuspicious: string; modelStatusFraud: string; hideTicketForm: string; ticketSpec: string; consoleRootFile: string; consoleSuccess: string; consoleQuant: string; consoleCompat: string;
}

const ONNX_DICT: Record<LanguageCode, OnnxDictType> = {
  ru: {
    title: "Интерактивная Лаборатория Тестирования RuBERT",
    subtitle: "Оцените локальный инференс весов модели rubert_fraud_int8.onnx в реальном времени.",
    placeholder: "Введите текст подозрительного диалога или СМС для анализа...",
    btnRun: "Запустить инференс модели",
    btnRunning: "Вычисление весов...",
    resultHeader: "ВЫХОД СЕМАНТИЧЕСКОГО ДЕКОДЕРА",
    fraudLabel: "Вероятность Соц. Инженерии (FRAUD):",
    safeLabel: "Безопасный Диалог (SAFE):",
    attentionTitle: "Карта внимания BERT (Флаги токенов):",
    presetTitle: "Быстрые пресеты:",
    feedbackHeader: "⚠️ Обнаружили ошибку инференса?",
    feedbackSub: "Помогите обучить веса нейросети! Отправьте тикет об ошибке напрямую в команду поддержки в Telegram.",
    errType: "Тип ошибки",
    errFalsePositive: "Ложное срабатывание (Безопасный текст помечен как угроза)",
    errFalseNegative: "Пропуск угрозы (Мошеннический текст посчитан безопасным)",
    errOther: "Другой баг классификации",
    commentLabel: "Ваш комментарий (что пошло не так?)",
    commentPlaceholder: "Укажите, например, какие слова модель посчитала критичными...",
    btnTg: "Отправить тикет в Telegram",
    btnCopy: "Скопировать тикет",
    copied: "Скопировано!",
    modelStatusSafe: "БЕЗОПАСНАЯ СЕМАНТИКА",
    modelStatusSuspicious: "ПОДОЗРИТЕЛЬНО",
    modelStatusFraud: "МОШЕННИЧЕСКИЙ НАВЫК",
    hideTicketForm: "Скрыть тикет-форму",
    ticketSpec: "СПЕЦИФИКАЦИЯ ФОРМАТА ТИКЕТА",
    consoleRootFile: "КОРНЕВОЙ ФАЙЛ ПРОЕКТА",
    consoleSuccess: "УСПЕХ",
    consoleQuant: "КВАНТИЗАЦИЯ: INT8 (динамическая)",
    consoleCompat: "СОВМЕСТИМОСТЬ: ORT 1.18+",
  },
  en: {
    title: "Interactive RuBERT ONNX Test Lab",
    subtitle: "Evaluate real-time local inference of the rubert_fraud_int8.onnx model weights.",
    placeholder: "Enter suspicious dialogue text or SMS for safety classification...",
    btnRun: "Run Model Inference",
    btnRunning: "Running Weights...",
    resultHeader: "SEMANTIC DECODER OUTPUT",
    fraudLabel: "Social Engineering Risk (FRAUD):",
    safeLabel: "Safe Dialogue (SAFE):",
    attentionTitle: "BERT Attention Map (Token Flags):",
    presetTitle: "Quick Presets:",
    feedbackHeader: "⚠️ Found a Classification Error?",
    feedbackSub: "Help train the neural net weights! Report a classification bug ticket directly to our support team in Telegram.",
    errType: "Error Classification",
    errFalsePositive: "False Positive (Safe text flagged as threat)",
    errFalseNegative: "False Negative (Fraudulent text marked as safe)",
    errOther: "Other classification anomaly",
    commentLabel: "Your feedback comments",
    commentPlaceholder: "Explain which words caused the model to misbehave...",
    btnTg: "Send Ticket to Telegram",
    btnCopy: "Copy Ticket Content",
    copied: "Copied!",
    modelStatusSafe: "SAFE SEMANTICS",
    modelStatusSuspicious: "SUSPICIOUS ACTIVITY",
    modelStatusFraud: "FRAUDULENT SEMANTICS",
    hideTicketForm: "Hide ticket form",
    ticketSpec: "TICKET FORMAT SPEC",
    consoleRootFile: "PROJECT ROOT FILE",
    consoleSuccess: "SUCCESS",
    consoleQuant: "QUANTIZATION: INT8 (dynamic)",
    consoleCompat: "COMPATIBILITY: ORT 1.18+",
  },
  tr: {
    title: "Etkileşimli RuBERT ONNX Test Laboratuvarı",
    subtitle: "rubert_fraud_int8.onnx model ağırlıklarının gerçek zamanlı yerel çıkarımını değerlendirin.",
    placeholder: "Analiz için şüpheli diyalog veya SMS metnini girin...",
    btnRun: "Model Çıkarımını Başlat",
    btnRunning: "Çıkarım Yapılıyor...",
    resultHeader: "ANLAMSAL DEKODER ÇIKTI",
    fraudLabel: "Sosyal Mühendislik Riski (FRAUD):",
    safeLabel: "Güvenli Diyalog (SAFE):",
    attentionTitle: "BERT Dikkat Haritası (Token Bayrakları):",
    presetTitle: "Hızlı Şablonlar:",
    feedbackHeader: "⚠️ Sınıflandırma Hatası mı Buldunuz?",
    feedbackSub: "Yapay sinir ağı ağırlıklarını eğitmeye yardımcı olun! Doğrudan destek ekibine Telegram üzerinden hata bildirimi gönderin.",
    errType: "Hata Türü",
    errFalsePositive: "Yanlış Pozitif (Güvenli metin tehdit olarak algılandı)",
    errFalseNegative: "Yanlış Negatif (Tehdit içeren metin güvenli sayıldı)",
    errOther: "Diğer sınıflandırma hatası",
    commentLabel: "Yorumunuz (ne yanlış gitti?)",
    commentPlaceholder: "Örneğin modelin hangi kelimeleri yanlış yorumladığını belirtin...",
    btnTg: "Telegram'a Bildirim Gönder",
    btnCopy: "Bildirimi Kopyala",
    copied: "Kopyalandı!",
    modelStatusSafe: "GÜVENLİ ANLAM",
    modelStatusSuspicious: "ŞÜPHELİ DIALOG",
    modelStatusFraud: "DOLANDIRICILIK TESPİTİ",
    hideTicketForm: "Bildirim Formunu Gizle",
    ticketSpec: "BİLET FORMATI",
    consoleRootFile: "PROJE KÖK DOSYASI",
    consoleSuccess: "BAŞARILI",
    consoleQuant: "KANTİZASYON: INT8 (dinamik)",
    consoleCompat: "UYUMLULUK: ORT 1.18+",
  },
  es: {
    title: "Laboratorio de pruebas interactivo RuBERT ONNX",
    subtitle: "Evalúa la inferencia local en tiempo real de los pesos del modelo rubert_fraud_int8.onnx.",
    placeholder: "Introduce texto de diálogo sospechoso o SMS para la clasificación de seguridad...",
    btnRun: "Ejecutar inferencia del modelo",
    btnRunning: "Calculando pesos...",
    resultHeader: "SALIDA DEL DECODIFICADOR SEMÁNTICO",
    fraudLabel: "Riesgo de Ingeniería Social (FRAUD):",
    safeLabel: "Diálogo seguro (SAFE):",
    attentionTitle: "Mapa de Atención BERT (Banderas de Tokens):",
    presetTitle: "Preajustes rápidos:",
    feedbackHeader: "⚠️ ¿Encontraste un error de clasificación?",
    feedbackSub: "¡Ayuda a entrenar los pesos de la red neuronal! Envía un ticket de error de clasificación directamente a nuestro equipo de soporte en Telegram.",
    errType: "Clasificación del error",
    errFalsePositive: "Falso positivo (texto seguro marcado como amenaza)",
    errFalseNegative: "Falso negativo (texto fraudulento marcado como seguro)",
    errOther: "Otra anomalía de clasificación",
    commentLabel: "Tus comentarios",
    commentPlaceholder: "Explica qué palabras hicieron que el modelo se comportara mal...",
    btnTg: "Enviar ticket a Telegram",
    btnCopy: "Copiar contenido del ticket",
    copied: "¡Copiado!",
    modelStatusSafe: "SEMÁNTICA SEGURA",
    modelStatusSuspicious: "ACTIVIDAD SOSPECHOSA",
    modelStatusFraud: "SEMÁNTICA FRAUDULENTA",
    hideTicketForm: "Ocultar formulario de ticket",
    ticketSpec: "ESPECIFICACIÓN DEL FORMATO DE TICKET",
    consoleRootFile: "ARCHIVO RAÍZ DEL PROYECTO",
    consoleSuccess: "ÉXITO",
    consoleQuant: "CUANTIZACIÓN: INT8 (dinámica)",
    consoleCompat: "COMPATIBILIDAD: ORT 1.18+",
  },
  zh: {
    title: "交互式 RuBERT ONNX 测试实验室",
    subtitle: "评估 rubert_fraud_int8.onnx 模型权重的实时本地推理。",
    placeholder: "输入可疑对话文本或短信，进行安全分类...",
    btnRun: "运行模型推理",
    btnRunning: "正在计算权重...",
    resultHeader: "语义解码器输出",
    fraudLabel: "社会工程风险（FRAUD）：",
    safeLabel: "安全对话（SAFE）：",
    attentionTitle: "BERT 注意力图（令牌标记）：",
    presetTitle: "快速预设：",
    feedbackHeader: "⚠️ 发现分类错误？",
    feedbackSub: "帮助训练神经网络权重！直接将分类错误票证报告给我们在 Telegram 上的支持团队。",
    errType: "错误分类",
    errFalsePositive: "误报（安全文本被标记为威胁）",
    errFalseNegative: "漏报（欺诈文本被标记为安全）",
    errOther: "其他分类异常",
    commentLabel: "您的反馈评论",
    commentPlaceholder: "请说明哪些词导致模型出错...",
    btnTg: "发送票证到 Telegram",
    btnCopy: "复制票证内容",
    copied: "已复制！",
    modelStatusSafe: "安全语义",
    modelStatusSuspicious: "可疑活动",
    modelStatusFraud: "欺诈语义",
    hideTicketForm: "隐藏票证表单",
    ticketSpec: "票证格式规范",
    consoleRootFile: "项目根文件",
    consoleSuccess: "成功",
    consoleQuant: "量化：INT8（动态）",
    consoleCompat: "兼容性：ORT 1.18+",
  },
  hi: {
    title: "इंटरैक्टिव RuBERT ONNX टेस्ट लैब",
    subtitle: "rubert_fraud_int8.onnx मॉडल के वज़न की वास्तविक समय में स्थानीय इन्फ़रेंस का मूल्यांकन करें।",
    placeholder: "सुरक्षा वर्गीकरण के लिए संदिग्ध संवाद पाठ या SMS दर्ज करें...",
    btnRun: "मॉडल इन्फ़रेंस चलाएँ",
    btnRunning: "वज़न की गणना हो रही है...",
    resultHeader: "सिमेंटिक डिकोडर आउटपुट",
    fraudLabel: "सामाजिक इंजीनियरिंग जोखिम (FRAUD):",
    safeLabel: "सुरक्षित संवाद (SAFE):",
    attentionTitle: "BERT ध्यान मानचित्र (टोकन फ़्लैग):",
    presetTitle: "त्वरित प्रीसेट:",
    feedbackHeader: "⚠️ कोई वर्गीकरण त्रुटि मिली?",
    feedbackSub: "न्यूरल नेट वज़न प्रशिक्षित करने में मदद करें! टेलीग्राम पर हमारी सहायता टीम को सीधे वर्गीकरण बग टिकट रिपोर्ट करें।",
    errType: "त्रुटि वर्गीकरण",
    errFalsePositive: "ग़लत सकारात्मक (सुरक्षित पाठ को ख़तरे के रूप में चिह्नित किया गया)",
    errFalseNegative: "ग़लत नकारात्मक (धोखाधड़ी पाठ को सुरक्षित चिह्नित किया गया)",
    errOther: "अन्य वर्गीकरण विसंगति",
    commentLabel: "आपकी प्रतिक्रिया टिप्पणियाँ",
    commentPlaceholder: "बताएँ कि किन शब्दों ने मॉडल को ग़लत व्यवहार करने पर मजबूर किया...",
    btnTg: "टेलीग्राम पर टिकट भेजें",
    btnCopy: "टिकट सामग्री कॉपी करें",
    copied: "कॉपी हो गया!",
    modelStatusSafe: "सुरक्षित सिमेंटिक्स",
    modelStatusSuspicious: "संदिग्ध गतिविधि",
    modelStatusFraud: "धोखाधड़ी सिमेंटिक्स",
    hideTicketForm: "टिकट फ़ॉर्म छुपाएँ",
    ticketSpec: "टिकट प्रारूप विनिर्देश",
    consoleRootFile: "प्रोजेक्ट रूट फ़ाइल",
    consoleSuccess: "सफलता",
    consoleQuant: "क्वांटाइज़ेशन: INT8 (डायनामिक)",
    consoleCompat: "संगतता: ORT 1.18+",
  },
  ar: {
    title: "مختبر اختبار RuBERT ONNX التفاعلي",
    subtitle: "قيّم الاستدلال المحلي في الوقت الفعلي لأوزان نموذج rubert_fraud_int8.onnx.",
    placeholder: "أدخل نص حوار مشبوه أو رسالة SMS لتصنيف الأمان...",
    btnRun: "تشغيل استدلال النموذج",
    btnRunning: "جارٍ حساب الأوزان...",
    resultHeader: "مخرجات المفكك الدلالي",
    fraudLabel: "خطر الهندسة الاجتماعية (FRAUD):",
    safeLabel: "حوار آمن (SAFE):",
    attentionTitle: "خريطة انتباه BERT (أعلام الرموز):",
    presetTitle: "إعدادات سريعة:",
    feedbackHeader: "⚠️ وجدت خطأ في التصنيف؟",
    feedbackSub: "ساعد في تدريب أوزان الشبكة العصبية! أبلغ عن تذكرة خطأ تصنيف مباشرةً إلى فريق الدعم لدينا على تيليغرام.",
    errType: "تصنيف الخطأ",
    errFalsePositive: "إيجابي كاذب (نص آمن وُسم كتهديد)",
    errFalseNegative: "سلبي كاذب (نص احتيالي وُسم كآمن)",
    errOther: "شذوذ تصنيف آخر",
    commentLabel: "تعليقاتك",
    commentPlaceholder: "اشرح الكلمات التي جعلت النموذج يتصرف بشكل خاطئ...",
    btnTg: "إرسال التذكرة إلى تيليغرام",
    btnCopy: "نسخ محتوى التذكرة",
    copied: "تم النسخ!",
    modelStatusSafe: "دلالات آمنة",
    modelStatusSuspicious: "نشاط مشبوه",
    modelStatusFraud: "دلالات احتيالية",
    hideTicketForm: "إخفاء نموذج التذكرة",
    ticketSpec: "مواصفات تنسيق التذكرة",
    consoleRootFile: "ملف جذر المشروع",
    consoleSuccess: "نجاح",
    consoleQuant: "القياس الكمي: INT8 (ديناميكي)",
    consoleCompat: "التوافق: ORT 1.18+",
  },
  pt: {
    title: "Laboratório de Teste Interativo RuBERT ONNX",
    subtitle: "Avalie a inferência local em tempo real dos pesos do modelo rubert_fraud_int8.onnx.",
    placeholder: "Digite texto de diálogo suspeito ou SMS para classificação de segurança...",
    btnRun: "Executar inferência do modelo",
    btnRunning: "Calculando pesos...",
    resultHeader: "SAÍDA DO DECODIFICADOR SEMÂNTICO",
    fraudLabel: "Risco de Engenharia Social (FRAUD):",
    safeLabel: "Diálogo seguro (SAFE):",
    attentionTitle: "Mapa de Atenção BERT (Bandeiras de Tokens):",
    presetTitle: "Predefinições rápidas:",
    feedbackHeader: "⚠️ Encontrou um erro de classificação?",
    feedbackSub: "Ajude a treinar os pesos da rede neural! Envie um ticket de erro de classificação diretamente à nossa equipe de suporte no Telegram.",
    errType: "Classificação do Erro",
    errFalsePositive: "Falso Positivo (texto seguro sinalizado como ameaça)",
    errFalseNegative: "Falso Negativo (texto fraudulento marcado como seguro)",
    errOther: "Outra anomalia de classificação",
    commentLabel: "Seus comentários",
    commentPlaceholder: "Explique quais palavras fizeram o modelo se comportar mal...",
    btnTg: "Enviar ticket para o Telegram",
    btnCopy: "Copiar conteúdo do ticket",
    copied: "Copiado!",
    modelStatusSafe: "SEMÂNTICA SEGURA",
    modelStatusSuspicious: "ATIVIDADE SUSPEITA",
    modelStatusFraud: "SEMÂNTICA FRAUDULENTA",
    hideTicketForm: "Ocultar formulário de ticket",
    ticketSpec: "ESPECIFICAÇÃO DO FORMATO DO TICKET",
    consoleRootFile: "ARQUIVO RAIZ DO PROJETO",
    consoleSuccess: "SUCESSO",
    consoleQuant: "QUANTIZAÇÃO: INT8 (dinâmica)",
    consoleCompat: "COMPATIBILIDADE: ORT 1.18+",
  },
  fr: {
    title: "Laboratoire de test interactif RuBERT ONNX",
    subtitle: "Évaluez l'inférence locale en temps réel des poids du modèle rubert_fraud_int8.onnx.",
    placeholder: "Saisissez un texte de dialogue suspect ou un SMS pour la classification de sécurité...",
    btnRun: "Exécuter l'inférence du modèle",
    btnRunning: "Calcul des poids...",
    resultHeader: "SORTIE DU DÉCODEUR SÉMANTIQUE",
    fraudLabel: "Risque d'ingénierie sociale (FRAUD) :",
    safeLabel: "Dialogue sûr (SAFE) :",
    attentionTitle: "Carte d'attention BERT (Drapeaux de jetons) :",
    presetTitle: "Présélections rapides :",
    feedbackHeader: "⚠️ Vous avez trouvé une erreur de classification ?",
    feedbackSub: "Aidez à entraîner les poids du réseau neuronal ! Signalez un ticket de bug de classification directement à notre équipe de support sur Telegram.",
    errType: "Classification de l'erreur",
    errFalsePositive: "Faux positif (texte sûr signalé comme menace)",
    errFalseNegative: "Faux négatif (texte frauduleux marqué comme sûr)",
    errOther: "Autre anomalie de classification",
    commentLabel: "Vos commentaires",
    commentPlaceholder: "Expliquez quels mots ont fait mal se comporter le modèle...",
    btnTg: "Envoyer le ticket sur Telegram",
    btnCopy: "Copier le contenu du ticket",
    copied: "Copié !",
    modelStatusSafe: "SÉMANTIQUE SÛRE",
    modelStatusSuspicious: "ACTIVITÉ SUSPECTE",
    modelStatusFraud: "SÉMANTIQUE FRAUDULEUSE",
    hideTicketForm: "Masquer le formulaire de ticket",
    ticketSpec: "SPÉCIFICATION DU FORMAT DE TICKET",
    consoleRootFile: "FICHIER RACINE DU PROJET",
    consoleSuccess: "SUCCÈS",
    consoleQuant: "QUANTIFICATION : INT8 (dynamique)",
    consoleCompat: "COMPATIBILITÉ : ORT 1.18+",
  },
  de: {
    title: "Interaktives RuBERT-ONNX-Testlabor",
    subtitle: "Bewerten Sie die lokale Echtzeit-Inferenz der Gewichte des Modells rubert_fraud_int8.onnx.",
    placeholder: "Geben Sie verdächtigen Dialogtext oder SMS zur Sicherheitsklassifizierung ein...",
    btnRun: "Modell-Inferenz ausführen",
    btnRunning: "Gewichte werden berechnet...",
    resultHeader: "AUSGABE DES SEMANTISCHEN DEKODERS",
    fraudLabel: "Social-Engineering-Risiko (FRAUD):",
    safeLabel: "Sicherer Dialog (SAFE):",
    attentionTitle: "BERT-Aufmerksamkeitskarte (Token-Flags):",
    presetTitle: "Schnelle Voreinstellungen:",
    feedbackHeader: "⚠️ Einen Klassifizierungsfehler gefunden?",
    feedbackSub: "Helfen Sie, die Gewichte des neuronalen Netzes zu trainieren! Melden Sie ein Klassifizierungsfehler-Ticket direkt an unser Support-Team in Telegram.",
    errType: "Fehlerklassifizierung",
    errFalsePositive: "Falsch positiv (sicherer Text als Bedrohung markiert)",
    errFalseNegative: "Falsch negativ (betrügerischer Text als sicher markiert)",
    errOther: "Andere Klassifizierungsanomalie",
    commentLabel: "Ihre Feedback-Kommentare",
    commentPlaceholder: "Erklären Sie, welche Wörter das Modell zu Fehlverhalten veranlasst haben...",
    btnTg: "Ticket an Telegram senden",
    btnCopy: "Ticketinhalt kopieren",
    copied: "Kopiert!",
    modelStatusSafe: "SICHERE SEMANTIK",
    modelStatusSuspicious: "VERDÄCHTIGE AKTIVITÄT",
    modelStatusFraud: "BETRÜGERISCHE SEMANTIK",
    hideTicketForm: "Ticketformular ausblenden",
    ticketSpec: "TICKETFORMAT-SPEZIFIKATION",
    consoleRootFile: "PROJEKTROOT-DATEI",
    consoleSuccess: "ERFOLG",
    consoleQuant: "QUANTISIERUNG: INT8 (dynamisch)",
    consoleCompat: "KOMPATIBILITÄT: ORT 1.18+",
  },
  ja: {
    title: "インタラクティブ RuBERT ONNX テストラボ",
    subtitle: "rubert_fraud_int8.onnx モデルの重みのリアルタイムローカル推論を評価します。",
    placeholder: "安全分類のため、疑わしい対話テキストまたは SMS を入力してください...",
    btnRun: "モデル推論を実行",
    btnRunning: "重みを計算中...",
    resultHeader: "意味デコーダ出力",
    fraudLabel: "ソーシャルエンジニアリングリスク（FRAUD）：",
    safeLabel: "安全な対話（SAFE）：",
    attentionTitle: "BERT アテンションマップ（トークンフラグ）：",
    presetTitle: "クイックプリセット：",
    feedbackHeader: "⚠️ 分類エラーが見つかりましたか？",
    feedbackSub: "ニューラルネットワークの重みのトレーニングにご協力ください！Telegram のサポートチームに分類バグのチケットを直接報告してください。",
    errType: "エラー分類",
    errFalsePositive: "誤検出（安全なテキストが脅威としてフラグ付け）",
    errFalseNegative: "見逃し（不正なテキストが安全としてマーク）",
    errOther: "その他の分類異常",
    commentLabel: "フィードバックコメント",
    commentPlaceholder: "モデルが誤動作した原因の単語を説明してください...",
    btnTg: "Telegram にチケットを送信",
    btnCopy: "チケット内容をコピー",
    copied: "コピーしました！",
    modelStatusSafe: "安全な意味解析",
    modelStatusSuspicious: "不審なアクティビティ",
    modelStatusFraud: "不正な意味解析",
    hideTicketForm: "チケットフォームを隠す",
    ticketSpec: "チケット形式仕様",
    consoleRootFile: "プロジェクトルートファイル",
    consoleSuccess: "成功",
    consoleQuant: "量子化：INT8（動的）",
    consoleCompat: "互換性：ORT 1.18+",
  },
};

const ONNX_PRESETS: Record<LanguageCode, OnnxPreset[]> = {
  ru: [
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
    },
  ],
  en: [
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
    },
  ],
  tr: [
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
    },
  ],
  es: [
    {
      label: "Banco (Amenaza)",
      text: "¡Habla Seguridad del Banco Federal! Transfiere inmediatamente tu saldo total a la bóveda segura temporal para protegerlo del robo.",
      isThreat: true,
    },
    {
      label: "Aduanas (Amenaza)",
      text: "Tu entrega se ha retrasado. Inicia sesión en trustnode-tracking-secure.com/id203 para pagar la tarifa de procesamiento de $1.50.",
      isThreat: true,
    },
    {
      label: "Accidente (Amenaza)",
      text: "Mamá, tuve un horrible accidente de coche y herí a alguien. Envía $2000 inmediatamente a esta tarjeta para el abogado.",
      isThreat: true,
    },
    {
      label: "Conferencia (Seguro)",
      text: "¡Hola! La conferencia de seguridad de redes en la universidad ChRT comienza mañana a las 10:00 AM en punto. No olvides tus borradores.",
      isThreat: false,
    },
  ],
  zh: [
    {
      label: "银行（威胁）",
      text: "这里是联邦银行安全部门！立即将您的全部余额转移到临时安全金库，以防被盗。",
      isThreat: true,
    },
    {
      label: "海关（威胁）",
      text: "您的包裹配送已延迟。请登录 trustnode-tracking-secure.com/id203 支付 1.50 美元的手续费。",
      isThreat: true,
    },
    {
      label: "事故（威胁）",
      text: "妈妈，我出了严重的车祸，撞伤了人。请立即向这张卡汇款 2000 美元给律师。",
      isThreat: true,
    },
    {
      label: "讲座（安全）",
      text: "你好！ChRT 学院的网络安全讲座明天上午 10 点整开始。别忘了带草稿。",
      isThreat: false,
    },
  ],
  hi: [
    {
      label: "बैंक (ख़तरा)",
      text: "यह संघीय बैंक सुरक्षा है! चोरी से बचाने के लिए तुरंत अपनी पूरी राशि अस्थायी सुरक्षित तिजोरी में स्थानांतरित करें।",
      isThreat: true,
    },
    {
      label: "कस्टम्स (ख़तरा)",
      text: "आपकी डिलीवरी में देरी हुई है। कृपया $1.50 प्रसंस्करण शुल्क का भुगतान करने के लिए trustnode-tracking-secure.com/id203 पर लॉगिन करें।",
      isThreat: true,
    },
    {
      label: "दुर्घटना (ख़तरा)",
      text: "माँ, मैं एक भयानक कार दुर्घटना में फँस गया और किसी को चोट पहुँचाई। वकील के लिए तुरंत इस कार्ड पर $2000 भेजें।",
      isThreat: true,
    },
    {
      label: "व्याख्यान (सुरक्षित)",
      text: "नमस्ते! ChRT कॉलेज में नेटवर्क सुरक्षा व्याख्यान कल सुबह ठीक 10:00 बजे शुरू होगा। अपने ड्राफ़्ट मत भूलना।",
      isThreat: false,
    },
  ],
  ar: [
    {
      label: "بنك (تهديد)",
      text: "هذا أمن البنك الفيدرالي! حوّل رصيدك الكامل فوراً إلى الخزنة الآمنة المؤقتة لحمايته من السرقة.",
      isThreat: true,
    },
    {
      label: "جمارك (تهديد)",
      text: "تأخر تسليم طردك. يرجى تسجيل الدخول إلى trustnode-tracking-secure.com/id203 لدفع رسوم المعالجة البالغة 1.50 دولار.",
      isThreat: true,
    },
    {
      label: "حادث (تهديد)",
      text: "أمي، تعرضت لحادث سيارة مروع وأصبت شخصاً. أرسل 2000 دولار فوراً إلى هذه البطاقة للمحامي.",
      isThreat: true,
    },
    {
      label: "محاضرة (آمن)",
      text: "مرحباً! محاضرة أمن الشبكات في كلية ChRT تبدأ غداً صباحاً في تمام الساعة 10:00. لا تنسَ مسوداتك.",
      isThreat: false,
    },
  ],
  pt: [
    {
      label: "Banco (Ameaça)",
      text: "Aqui é a Segurança do Banco Federal! Transfira imediatamente seu saldo total para o cofre seguro temporário para protegê-lo contra roubo.",
      isThreat: true,
    },
    {
      label: "Alfândega (Ameaça)",
      text: "Sua entrega está atrasada. Entre em trustnode-tracking-secure.com/id203 para pagar a taxa de processamento de $1,50.",
      isThreat: true,
    },
    {
      label: "Acidente (Ameaça)",
      text: "Mãe, sofri um acidente de carro horrível e machuquei alguém. Envie $2000 imediatamente para este cartão para o advogado.",
      isThreat: true,
    },
    {
      label: "Palestra (Seguro)",
      text: "Olá! A palestra de segurança de redes na faculdade ChRT começa amanhã às 10h em ponto. Não esqueça seus rascunhos.",
      isThreat: false,
    },
  ],
  fr: [
    {
      label: "Banque (menace)",
      text: "Ici la Sécurité de la Banque Fédérale ! Transférez immédiatement votre solde total dans le coffre sécurisé temporaire pour le protéger du vol.",
      isThreat: true,
    },
    {
      label: "Douane (menace)",
      text: "Votre livraison est retardée. Connectez-vous sur trustnode-tracking-secure.com/id203 pour payer les frais de traitement de 1,50 $.",
      isThreat: true,
    },
    {
      label: "Accident (menace)",
      text: "Maman, j'ai eu un horrible accident de voiture et j'ai blessé quelqu'un. Envoyez 2000 $ immédiatement sur cette carte pour l'avocat.",
      isThreat: true,
    },
    {
      label: "Conférence (sûr)",
      text: "Bonjour ! La conférence sur la sécurité des réseaux au collège ChRT commence demain matin à 10h00 précises. N'oubliez pas vos brouillons.",
      isThreat: false,
    },
  ],
  de: [
    {
      label: "Bank (Bedrohung)",
      text: "Hier ist die Sicherheitsabteilung der Federal Bank! Überweisen Sie sofort Ihr gesamtes Guthaben in das temporäre sichere Tresorfach, um es vor Diebstahl zu schützen.",
      isThreat: true,
    },
    {
      label: "Zoll (Bedrohung)",
      text: "Ihre Lieferung verzögert sich. Bitte melden Sie sich unter trustnode-tracking-secure.com/id203 an, um die Bearbeitungsgebühr von 1,50 $ zu zahlen.",
      isThreat: true,
    },
    {
      label: "Unfall (Bedrohung)",
      text: "Mama, ich hatte einen schrecklichen Autounfall und habe jemanden verletzt. Schicken Sie sofort 2000 $ auf diese Karte für den Anwalt.",
      isThreat: true,
    },
    {
      label: "Vorlesung (Sicher)",
      text: "Hallo! Die Vorlesung über Netzwerksicherheit am ChRT College beginnt morgen früh um genau 10:00 Uhr. Vergessen Sie Ihre Entwürfe nicht.",
      isThreat: false,
    },
  ],
  ja: [
    {
      label: "銀行（脅威）",
      text: "こちらは連邦銀行のセキュリティです！盗難から保護するため、残高全額を直ちに一時保護金庫へ送金してください。",
      isThreat: true,
    },
    {
      label: "税関（脅威）",
      text: "配達が遅れています。trustnode-tracking-secure.com/id203 にログインして、1.50ドルの処理手数料をお支払いください。",
      isThreat: true,
    },
    {
      label: "事故（脅威）",
      text: "ママ、ひどい交通事故に遭って誰かを傷つけてしまった。弁護士のため、すぐにこのカードへ2000ドル送金して。",
      isThreat: true,
    },
    {
      label: "講義（安全）",
      text: "こんにちは！ChRT 大学のネットワークセキュリティ講義は明日朝10時ちょうどに始まります。下書きを忘れないでください。",
      isThreat: false,
    },
  ],
};

const ONNX_STEPS: Record<LanguageCode, string[]> = {
  ru: [
    "Инициализация токенизатора BERT...",
    "Построение векторов эмбеддингов для токенов...",
    "Инференс сверточных слоев RuBERT-tiny2 (Dynamic INT8)...",
    "Применение софтмакса к логитам [1, 2]...",
  ],
  en: [
    "Initializing BERT Tokenizer...",
    "Constructing embedding vectors for input sequence...",
    "Running RuBERT-tiny2 layer weights (Dynamic INT8)...",
    "Applying softmax to output logits [1, 2]...",
  ],
  tr: [
    "BERT Tokenizer başlatılıyor...",
    "Token gömme vektörleri oluşturuluyor...",
    "RuBERT-tiny2 katmanlarında çıkarım yapılıyor (Dinamik INT8)...",
    "Logit değerlerine [1, 2] Softmax uygulanıyor...",
  ],
  es: [
    "Inicializando el tokenizador BERT...",
    "Construyendo vectores de embedding para la secuencia de entrada...",
    "Ejecutando los pesos de la capa RuBERT-tiny2 (INT8 dinámico)...",
    "Aplicando softmax a los logits de salida [1, 2]...",
  ],
  zh: [
    "正在初始化 BERT 分词器...",
    "正在为输入序列构建嵌入向量...",
    "正在运行 RuBERT-tiny2 层权重（动态 INT8）...",
    "正在对输出 logits [1, 2] 应用 softmax...",
  ],
  hi: [
    "BERT टोकनाइज़र शुरू हो रहा है...",
    "इनपुट अनुक्रम के लिए एम्बेडिंग वेक्टर बनाए जा रहे हैं...",
    "RuBERT-tiny2 परत वज़न चल रहे हैं (डायनामिक INT8)...",
    "आउटपुट logits [1, 2] पर softmax लागू किया जा रहा है...",
  ],
  ar: [
    "جارٍ تهيئة محلل BERT...",
    "جارٍ بناء متجهات التضمين لتسلسل الإدخال...",
    "جارٍ تشغيل أوزان طبقة RuBERT-tiny2 (INT8 ديناميكي)...",
    "جارٍ تطبيق softmax على logits المخرجات [1, 2]...",
  ],
  pt: [
    "Inicializando o tokenizador BERT...",
    "Construindo vetores de embedding para a sequência de entrada...",
    "Executando pesos da camada RuBERT-tiny2 (INT8 dinâmico)...",
    "Aplicando softmax aos logits de saída [1, 2]...",
  ],
  fr: [
    "Initialisation du tokenizer BERT...",
    "Construction des vecteurs d'embedding pour la séquence d'entrée...",
    "Exécution des poids de la couche RuBERT-tiny2 (INT8 dynamique)...",
    "Application du softmax aux logits de sortie [1, 2]...",
  ],
  de: [
    "BERT-Tokenizer wird initialisiert...",
    "Einbettungsvektoren für die Eingabesequenz werden erstellt...",
    "Gewichte der RuBERT-tiny2-Schicht werden ausgeführt (dynamisches INT8)...",
    "Softmax wird auf die Ausgabe-Logits [1, 2] angewendet...",
  ],
  ja: [
    "BERT トークナイザーを初期化中...",
    "入力シーケンスの埋め込みベクトルを構築中...",
    "RuBERT-tiny2 レイヤーの重みを実行中（動的 INT8）...",
    "出力ロジット [1, 2] に softmax を適用中...",
  ],
};

interface OnnxTicketType { id: string; locale: string; errType: string; inputLabel: string; modelEst: string; fraudLine: string; safeLine: string; commentLabel: string; noComment: string; footer: string; inventory: string; }

const ONNX_TICKET: Record<LanguageCode, OnnxTicketType> = {
  ru: {
    id: "ID Тикета:",
    locale: "Локаль:",
    errType: "Тип ошибки:",
    inputLabel: "Входной текст диалога:",
    modelEst: "Оценка модели:",
    fraudLine: "Вероятность угрозы (FRAUD):",
    safeLine: "Безопасная семантика (SAFE):",
    commentLabel: "Комментарий тестировщика:",
    noComment: "Без комментария.",
    footer: "Отправлено из системы верификации TrustNode",
    inventory: "Инвентарь: rubert_fraud_int8.onnx (INT8 quantized)",
  },
  en: {
    id: "Ticket ID:",
    locale: "Locale:",
    errType: "Error Type:",
    inputLabel: "Dialogue Input Text:",
    modelEst: "Model Estimation:",
    fraudLine: "Fraud Probability (FRAUD):",
    safeLine: "Safe Semantics (SAFE):",
    commentLabel: "Tester Feedback Comments:",
    noComment: "No comment provided.",
    footer: "Sent from TrustNode Verification Suite",
    inventory: "Inventory: rubert_fraud_int8.onnx (INT8 quantized)",
  },
  tr: {
    id: "Bilet Kimliği:",
    locale: "Bölge:",
    errType: "Hata Türü:",
    inputLabel: "Diyalog Giriş Metni:",
    modelEst: "Model Değerlendirmesi:",
    fraudLine: "Dolandırıcılık Olasılığı (FRAUD):",
    safeLine: "Güvenli Anlam (SAFE):",
    commentLabel: "Test Uzmanı Geri Bildirimi:",
    noComment: "Yorum yapılmadı.",
    footer: "TrustNode Doğrulama Paketinden gönderildi",
    inventory: "Envanter: rubert_fraud_int8.onnx (INT8 quantized)",
  },
  es: {
    id: "ID del Ticket:",
    locale: "Idioma:",
    errType: "Tipo de error:",
    inputLabel: "Texto de entrada del diálogo:",
    modelEst: "Estimación del modelo:",
    fraudLine: "Probabilidad de fraude (FRAUD):",
    safeLine: "Semántica segura (SAFE):",
    commentLabel: "Comentarios del evaluador:",
    noComment: "Sin comentarios.",
    footer: "Enviado desde el conjunto de verificación TrustNode",
    inventory: "Inventario: rubert_fraud_int8.onnx (INT8 cuantizado)",
  },
  zh: {
    id: "票证 ID：",
    locale: "语言环境：",
    errType: "错误类型：",
    inputLabel: "对话输入文本：",
    modelEst: "模型评估：",
    fraudLine: "欺诈概率（FRAUD）：",
    safeLine: "安全语义（SAFE）：",
    commentLabel: "测试者反馈评论：",
    noComment: "未提供评论。",
    footer: "由 TrustNode 验证套件发送",
    inventory: "库存：rubert_fraud_int8.onnx（INT8 量化）",
  },
  hi: {
    id: "टिकट ID:",
    locale: "लोकेल:",
    errType: "त्रुटि प्रकार:",
    inputLabel: "संवाद इनपुट पाठ:",
    modelEst: "मॉडल अनुमान:",
    fraudLine: "धोखाधड़ी संभावना (FRAUD):",
    safeLine: "सुरक्षित सिमेंटिक्स (SAFE):",
    commentLabel: "परीक्षक प्रतिक्रिया टिप्पणियाँ:",
    noComment: "कोई टिप्पणी नहीं दी गई।",
    footer: "TrustNode सत्यापन सुइट से भेजा गया",
    inventory: "इन्वेंटरी: rubert_fraud_int8.onnx (INT8 क्वांटाइज़्ड)",
  },
  ar: {
    id: "معرف التذكرة:",
    locale: "اللغة:",
    errType: "نوع الخطأ:",
    inputLabel: "نص إدخال الحوار:",
    modelEst: "تقدير النموذج:",
    fraudLine: "احتمالية الاحتيال (FRAUD):",
    safeLine: "دلالات آمنة (SAFE):",
    commentLabel: "تعليقات المختبِر:",
    noComment: "لا يوجد تعليق.",
    footer: "أُرسل من مجموعة التحقق TrustNode",
    inventory: "المخزون: rubert_fraud_int8.onnx (INT8 مكمّم)",
  },
  pt: {
    id: "ID do Ticket:",
    locale: "Localidade:",
    errType: "Tipo de Erro:",
    inputLabel: "Texto de Entrada do Diálogo:",
    modelEst: "Estimativa do Modelo:",
    fraudLine: "Probabilidade de Fraude (FRAUD):",
    safeLine: "Semântica Segura (SAFE):",
    commentLabel: "Comentários do Testador:",
    noComment: "Nenhum comentário.",
    footer: "Enviado do pacote de verificação TrustNode",
    inventory: "Inventário: rubert_fraud_int8.onnx (INT8 quantizado)",
  },
  fr: {
    id: "ID du ticket :",
    locale: "Langue :",
    errType: "Type d'erreur :",
    inputLabel: "Texte d'entrée du dialogue :",
    modelEst: "Estimation du modèle :",
    fraudLine: "Probabilité de fraude (FRAUD) :",
    safeLine: "Sémantique sûre (SAFE) :",
    commentLabel: "Commentaires du testeur :",
    noComment: "Aucun commentaire.",
    footer: "Envoyé depuis la suite de vérification TrustNode",
    inventory: "Inventaire : rubert_fraud_int8.onnx (quantifié INT8)",
  },
  de: {
    id: "Ticket-ID:",
    locale: "Gebietsschema:",
    errType: "Fehlerart:",
    inputLabel: "Dialog-Eingabetext:",
    modelEst: "Modellschätzung:",
    fraudLine: "Betrugswahrscheinlichkeit (FRAUD):",
    safeLine: "Sichere Semantik (SAFE):",
    commentLabel: "Feedback-Kommentare des Testers:",
    noComment: "Kein Kommentar.",
    footer: "Gesendet von der TrustNode-Verifizierungssuite",
    inventory: "Inventar: rubert_fraud_int8.onnx (INT8-quantisiert)",
  },
  ja: {
    id: "チケットID:",
    locale: "ロケール:",
    errType: "エラーの種類:",
    inputLabel: "対話入力テキスト:",
    modelEst: "モデル推定:",
    fraudLine: "詐欺の確率（FRAUD）:",
    safeLine: "安全な意味解析（SAFE）:",
    commentLabel: "テスターのフィードバックコメント:",
    noComment: "コメントはありません。",
    footer: "TrustNode 検証スイートから送信",
    inventory: "在庫: rubert_fraud_int8.onnx（INT8 量子化）",
  },
};
export function OnnxInteractiveTester({ language }: { language: string }) {
  // Localized dictionaries
  const dict = ONNX_DICT[language as LanguageCode] || ONNX_DICT.en;

  const presets = ONNX_PRESETS[language as LanguageCode] || ONNX_PRESETS.en;
  const tkt = ONNX_TICKET[language as LanguageCode] || ONNX_TICKET.en;

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
    const steps = ONNX_STEPS[language as LanguageCode] || ONNX_STEPS.en;

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
    return `🤖 [TRUSTNODE BERT WEIGHTS TICKET] 🤖
-----------------------------------------
${tkt.id} ${ticketId}
${tkt.locale} ${language.toUpperCase()}
${tkt.errType} ${errorType}

${tkt.inputLabel}
"${inputText}"

${tkt.modelEst}
- ${tkt.fraudLine} ${scores.fraud}%
- ${tkt.safeLine} ${scores.safe}%

${tkt.commentLabel}
${feedbackComment || tkt.noComment}

-----------------------------------------
${tkt.footer}
${tkt.inventory}`;
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
                <span>{showFeedback ? dict.hideTicketForm : dict.feedbackHeader}</span>
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
              <span className="block font-mono text-[8px] text-[#2E7DFF] uppercase tracking-widest mb-1.5">{dict.ticketSpec}</span>
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
