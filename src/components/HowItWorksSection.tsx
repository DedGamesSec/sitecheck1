import React, { useState } from "react";
import { Cpu, Layers, ServerCrash, CheckCircle2, Sliders } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

const USP_ICONS = [
  { Icon: Cpu, wrapClass: "bg-[#2E7DFF]/10 text-[#2E7DFF] border border-[#2E7DFF]/20" },
  { Icon: ServerCrash, wrapClass: "bg-red-500/10 text-red-400 border border-red-500/10" },
  { Icon: CheckCircle2, wrapClass: "bg-green-500/10 text-green-400 border border-green-500/10" },
];

function renderUspDesc(desc: string) {
  const marker = "rubert-tiny2";
  const idx = desc.indexOf(marker);
  if (idx === -1) return desc;
  return (
    <>
      {desc.slice(0, idx)}
      <span className="font-mono text-gray-300">{marker}</span>
      {desc.slice(idx + marker.length)}
    </>
  );
}

const HowItWorksSection = React.memo(function HowItWorksSection() {
  const { t } = useTranslation();
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [isAdvancedView, setIsAdvancedView] = useState<boolean>(true); // Default to advanced view showing full 7 layers

  // Define simplified layers from translations
  const simplifiedLayers = t.how.layers.map((layer, i) => ({
    num: String(i + 1).padStart(2, "0"),
    name: layer.name,
    tech: layer.tech,
    desc: layer.desc,
  }));

  // Define full 7 layers array dynamically based on the active language
  const layersSource = t.how.sevenLayers || [];
  const fullLayers = layersSource.map((layer, i) => ({
    num: String(i + 1).padStart(2, "0"),
    name: layer.name,
    tech: layer.tech,
    desc: layer.desc,
  }));

  const activeLayersList = isAdvancedView ? fullLayers : simplifiedLayers;

  // Make sure the active index remains inside bounds if we toggle view modes
  const currentActiveIndex = Math.min(activeLayer, activeLayersList.length - 1);

  return (
    <section 
      className="relative w-full pt-8 pb-16 sm:pt-10 sm:pb-20 px-4 border-t border-[#1F2937]/30 bg-[#0A0A0B]" 
      id="how-it-works"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E7DFF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A162C]/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#2E7DFF]/20 mb-6">
            <Layers className="w-3.5 h-3.5 text-[#2E7DFF]" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[#2E7DFF] uppercase">
              {t.how.badge}
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F5F5F0] tracking-tight mb-6">
            {t.how.title} <span className="text-[#2E7DFF]">{t.how.titleHighlight}</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            {t.how.subtitle}
          </p>

          {/* Toggle Tab Selector (Swiss-style segment control) */}
          <div className="inline-flex p-1 rounded-xl bg-[#0F0F12] border border-white/[0.04] mt-8 shrink-0 relative z-20">
            <button
              onClick={() => {
                setIsAdvancedView(false);
                setActiveLayer(0);
              }}
              className={`px-4 py-2 rounded-lg font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                !isAdvancedView 
                  ? "bg-[#2E7DFF] text-white shadow-[0_0_12px_rgba(46,125,255,0.25)]" 
                  : "text-gray-500 hover:text-gray-300 bg-transparent"
              }`}
            >
              {t.how.btnSimplified}
            </button>
            <button
              onClick={() => {
                setIsAdvancedView(true);
                setActiveLayer(0);
              }}
              className={`px-4 py-2 rounded-lg font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                isAdvancedView 
                  ? "bg-[#2E7DFF] text-white shadow-[0_0_12px_rgba(46,125,255,0.25)]" 
                  : "text-gray-500 hover:text-gray-300 bg-transparent"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              {t.how.btnAdvanced}
            </button>
          </div>
        </div>

        {/* Feature Grid & Diagram Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Stacked Layers Diagram */}
          <div className="lg:col-span-7 flex flex-col gap-4" id="layered-diagram">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F0] mb-2 hidden lg:block">
              {isAdvancedView 
                ? t.how.pipelineHeader
                : t.how.layersHeading}
            </h3>
            
            <div className="space-y-3 relative">
              {/* Vertical connector line */}
              <div className="absolute left-[39px] top-6 bottom-6 w-[2px] bg-[#1F2937]/50 hidden sm:block z-0" />

              {activeLayersList.map((layer, index) => {
                const isActive = currentActiveIndex === index;
                return (
                  <button
                    key={layer.num}
                    onClick={() => setActiveLayer(index)}
                    className={`w-full text-left relative z-10 flex items-start gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? "bg-[#111622] border-[#2E7DFF] shadow-[0_0_20px_rgba(46,125,255,0.15)]" 
                        : "bg-[#0A0A0C]/80 border-[#1F2937]/40 hover:border-[#2E7DFF]/20 hover:bg-[#0E0F12]"
                    }`}
                  >
                    {/* Circle badge */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-mono text-xs font-bold border transition-colors duration-300 ${
                      isActive 
                        ? "bg-[#2E7DFF] border-[#2E7DFF] text-white" 
                        : "bg-[#16161A] border-[#1F2937] text-gray-400"
                    }`}>
                      {layer.num}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className={`font-display font-bold text-sm sm:text-base ${isActive ? "text-[#F5F5F0]" : "text-gray-300"}`}>
                          {layer.name}
                        </span>
                        <span className="font-mono text-[9px] text-[#2E7DFF] tracking-wider uppercase opacity-80">
                          {layer.tech}
                        </span>
                      </div>
                      
                      {/* Collapsible details for mobile, always showing selected on desktop */}
                      <p className={`font-sans text-xs sm:text-sm text-gray-400 leading-relaxed transition-all duration-300 ${
                        isActive ? "max-h-40 opacity-100 mt-2" : "max-h-0 lg:max-h-0 opacity-0 lg:opacity-0 overflow-hidden"
                      }`}>
                        {layer.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Block: Core USPs / Visual Highlights */}
          <div className="lg:col-span-5 space-y-6" id="usp-highlights">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F0] mb-2 hidden lg:block opacity-0">
              Spacer
            </h3>
            {t.how.usp.map((usp, i) => {
              const { Icon, wrapClass } = USP_ICONS[i];
              const isPrimary = i === 0;
              return (
                <div
                  key={usp.title}
                  className={
                    isPrimary
                      ? "p-6 rounded-2xl bg-[#0C0E14] border border-[#2E7DFF]/20 shadow-[0_0_25px_rgba(46,125,255,0.05)] relative overflow-hidden"
                      : "p-6 rounded-2xl bg-[#09090B] border border-[#1F2937]/50"
                  }
                >
                  {isPrimary && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#2E7DFF]/5 blur-xl pointer-events-none" />
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${wrapClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-[#F5F5F0] mb-2">
                        {usp.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {isPrimary ? renderUspDesc(usp.desc) : usp.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
});

export default HowItWorksSection;
