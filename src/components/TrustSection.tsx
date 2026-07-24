import React from "react";
import { Award, FileText, Compass, Percent } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { motion } from "motion/react";

const STAT_ICONS = [FileText, Award, Compass, Percent];

const AnimatedStatNumber = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = React.useState("");
  const matches = value.match(/(\d+(\.\d+)?)/);
  const targetNum = matches ? parseFloat(matches[1]) : null;
  const isPercent = value.includes("%");
  const isApprox = value.includes("~");
  const isYear = value.includes("2026");

  React.useEffect(() => {
    if (targetNum === null) {
      setDisplayValue(value);
      return;
    }

    let start = isYear ? 1990 : 0;
    const duration = 1500; // ms
    const stepTime = 30; // ms
    const totalSteps = duration / stepTime;
    const increment = (targetNum - start) / totalSteps;
    let current = start;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= totalSteps) {
        clearInterval(timer);
        setDisplayValue(value);
      } else {
        const formatted = current.toFixed(isPercent ? 1 : 0);
        if (isPercent) {
          setDisplayValue(`${isApprox ? "~" : ""}${formatted}%`);
        } else if (isYear) {
          setDisplayValue(value.replace(/\d+/, Math.round(current).toString()));
        } else {
          // General replacement of the first number block
          setDisplayValue(value.replace(/\d+(\.\d+)?/, formatted));
        }
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, targetNum]);

  return <span>{displayValue || value}</span>;
};

const TrustSection = React.memo(function TrustSection() {
  const { t } = useTranslation();
  const stats = t.trust.stats.map((stat, i) => ({
    id: `stat-${i + 1}`,
    Icon: STAT_ICONS[i],
    val: stat.val,
    label: stat.label,
    desc: stat.desc,
  }));

  return (
    <section 
      className="relative w-full py-16 sm:py-20 px-4 border-t border-[#1F2937]/30 bg-[#0A0A0B]" 
      id="trust-section"
    >
      {/* Absolute radial light strictly behind the center of cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#2E7DFF]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[#2E7DFF] uppercase">
              {t.trust.badge}
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F5F5F0] tracking-tight mb-6">
            {t.trust.title} <span className="text-[#2E7DFF]">{t.trust.titleHighlight}</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            {t.trust.subtitle}
          </p>
        </div>

        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-9">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-7 sm:p-9 rounded-3xl bg-[#070709]/75 backdrop-blur-md border border-[#1F2937]/30 hover:border-[#2E7DFF]/50 transition-all duration-300 group flex flex-col justify-between overflow-hidden hover:shadow-[0_8px_35px_rgba(46,125,255,0.12)]"
              id={stat.id}
            >
              {/* Internal subtle glow card backing */}
              <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.06)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Micro-badge styled icon wrapper */}
                <div className="inline-flex items-center justify-center p-2.5 rounded-lg bg-[#0A162C] border border-[#2E7DFF]/30 mb-6 shadow-[0_0_10px_rgba(46,125,255,0.1)] group-hover:border-[#2E7DFF]/60 transition-all duration-300 group-hover:scale-105">
                  <stat.Icon className="w-5 h-5 text-[#2E7DFF]" />
                </div>

                {/* Big typography for values (styled like status badge but extra large) */}
                <div className="font-display font-black text-2xl sm:text-3xl lg:text-[24px] xl:text-[28px] text-[#F5F5F0] tracking-tight mb-2 group-hover:text-[#2E7DFF] transition-colors duration-300">
                  <AnimatedStatNumber value={stat.val} />
                </div>

                {/* Small title */}
                <div className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#2E7DFF] mb-4">
                  {stat.label}
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-xs text-gray-400 leading-relaxed border-t border-[#1F2937]/30 pt-4 mt-2 relative z-10">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});

export default TrustSection;
