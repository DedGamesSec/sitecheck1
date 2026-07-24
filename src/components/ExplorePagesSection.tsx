import { motion } from "motion/react";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigation } from "../navigation/NavigationContext";
import { Cpu, ShieldCheck, Ticket, BarChart3 } from "lucide-react";

export default function ExplorePagesSection() {
  const { t } = useTranslation();
  const { navigateTo } = useNavigation();

  const c = t.explore;

  return (
    <section 
      className="relative w-full py-16 sm:py-24 px-4 overflow-hidden border-t border-[#1F2937]/35 bg-[#0A0A0B] select-none"
      id="explore-portal-section"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-[#2E7DFF]/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#2E7DFF]/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A162C]/70 border border-[#2E7DFF]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF] animate-pulse" />
            <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.15em] text-[#2E7DFF]">
              EXPLORE PROTOCOL PORTAL
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#F5F5F0] tracking-tight mb-4">
            {c.title}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-lg mx-auto">
            {c.subtitle}
          </p>
        </div>

        {/* Explore Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Card 1: Technology Page */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigateTo("how-it-works")}
            className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-[#1F2937]/50 bg-[#070709]/90 hover:border-[#2E7DFF]/55 transition-all duration-300 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            id="explore-tech-card"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#2E7DFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div>
              {/* Icon & Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#0A162C]/80 border border-[#2E7DFF]/25 flex items-center justify-center text-[#2E7DFF] group-hover:shadow-[0_0_15px_rgba(46,125,255,0.3)] transition-all">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] tracking-widest text-[#2E7DFF] font-bold bg-[#2E7DFF]/5 px-2.5 py-1 rounded border border-[#2E7DFF]/15">
                  {c.card1Badge}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F0] group-hover:text-[#2E7DFF] transition-colors mb-3">
                {c.card1Title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                {c.card1Desc}
              </p>
            </div>

            {/* CTA Link Button */}
            <span className="inline-flex font-mono text-[11px] font-bold text-[#2E7DFF] group-hover:text-white group-hover:translate-x-1.5 transition-all">
              {c.card1Btn}
            </span>
          </motion.div>

          {/* Card 2: About Page */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigateTo("about")}
            className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-[#1F2937]/50 bg-[#070709]/90 hover:border-[#2E7DFF]/55 transition-all duration-300 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            id="explore-about-card"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#2E7DFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              {/* Icon & Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#0A162C]/80 border border-[#2E7DFF]/25 flex items-center justify-center text-[#2E7DFF] group-hover:shadow-[0_0_15px_rgba(46,125,255,0.3)] transition-all">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] tracking-widest text-[#2E7DFF] font-bold bg-[#2E7DFF]/5 px-2.5 py-1 rounded border border-[#2E7DFF]/15">
                  {c.card2Badge}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F0] group-hover:text-[#2E7DFF] transition-colors mb-3">
                {c.card2Title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                {c.card2Desc}
              </p>
            </div>

            {/* CTA Link Button */}
            <span className="inline-flex font-mono text-[11px] font-bold text-[#2E7DFF] group-hover:text-white group-hover:translate-x-1.5 transition-all">
              {c.card2Btn}
            </span>
          </motion.div>

          {/* Card 3: Download Page */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigateTo("download")}
            className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-[#1F2937]/50 bg-[#070709]/90 hover:border-[#2E7DFF]/55 transition-all duration-300 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            id="explore-download-card"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#2E7DFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div>
              {/* Icon & Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#0A162C]/80 border border-[#2E7DFF]/25 flex items-center justify-center text-[#2E7DFF] group-hover:shadow-[0_0_15px_rgba(46,125,255,0.3)] transition-all">
                  <Ticket className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] tracking-widest text-[#2E7DFF] font-bold bg-[#2E7DFF]/5 px-2.5 py-1 rounded border border-[#2E7DFF]/15">
                  {c.card3Badge}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F0] group-hover:text-[#2E7DFF] transition-colors mb-3">
                {c.card3Title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                {c.card3Desc}
              </p>
            </div>

            {/* CTA Link Button */}
            <span className="inline-flex font-mono text-[11px] font-bold text-[#2E7DFF] group-hover:text-white group-hover:translate-x-1.5 transition-all">
              {c.card3Btn}
            </span>
          </motion.div>

          {/* Card 4: Comparison Page */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigateTo("comparison")}
            className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-[#1F2937]/50 bg-[#070709]/90 hover:border-[#2E7DFF]/55 transition-all duration-300 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            id="explore-comparison-card"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#2E7DFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              {/* Icon & Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#0A162C]/80 border border-[#2E7DFF]/25 flex items-center justify-center text-[#2E7DFF] group-hover:shadow-[0_0_15px_rgba(46,125,255,0.3)] transition-all">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] tracking-widest text-[#2E7DFF] font-bold bg-[#2E7DFF]/5 px-2.5 py-1 rounded border border-[#2E7DFF]/15">
                  {c.card4Badge}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F0] group-hover:text-[#2E7DFF] transition-colors mb-3">
                {c.card4Title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                {c.card4Desc}
              </p>
            </div>

            {/* CTA Link Button */}
            <span className="inline-flex font-mono text-[11px] font-bold text-[#2E7DFF] group-hover:text-white group-hover:translate-x-1.5 transition-all">
              {c.card4Btn}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
