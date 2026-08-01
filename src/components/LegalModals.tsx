import React from "react";
import { X, ShieldAlert, FileText, Lock } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";

// Verified signature for use in App.tsx
interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  tab: "privacy" | "terms";
}

export default function LegalModal({ isOpen, onClose, tab: initialTab }: LegalModalProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = React.useState<"privacy" | "terms">(initialTab);

  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  const p = t.legal.privacy;
  const s = t.legal.terms;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl h-[80vh] flex flex-col rounded-2xl border border-[#2E7DFF]/30 bg-[#0F0F12]/95 text-[#F5F5F0] shadow-[0_0_50px_rgba(46,125,255,0.15)] overflow-hidden"
        id="legal-modal-content"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F2937]/50 bg-[#0A0A0C]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2E7DFF]/10 border border-[#2E7DFF]/20 flex items-center justify-center">
              {activeTab === "privacy" ? (
                <Lock className="w-4 h-4 text-[#2E7DFF]" />
              ) : (
                <FileText className="w-4 h-4 text-[#2E7DFF]" />
              )}
            </div>
            <h2 className="font-display font-bold text-base sm:text-lg">
              {activeTab === "privacy" ? t.legal.privacyTitle : t.legal.termsTitle}
            </h2>
          </div>
          
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#111827] border border-[#1F2937] text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label={t.legal.closeAria}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-col sm:flex-row border-b border-[#1F2937]/30 bg-[#070709] px-4 sm:px-6">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`py-2.5 sm:py-3 px-3 sm:px-4 font-mono text-[10px] sm:text-xs border-l-2 sm:border-l-0 sm:border-b-2 transition-colors cursor-pointer text-left ${
              activeTab === "privacy" 
                ? "border-[#2E7DFF] text-[#2E7DFF] font-semibold bg-[#2E7DFF]/5 sm:bg-transparent" 
                : "border-transparent text-gray-500 hover:text-gray-300"
            }`}
          >
            {t.legal.tabPrivacy}
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`py-2.5 sm:py-3 px-3 sm:px-4 font-mono text-[10px] sm:text-xs border-l-2 sm:border-l-0 sm:border-b-2 transition-colors cursor-pointer text-left ${
              activeTab === "terms" 
                ? "border-[#2E7DFF] text-[#2E7DFF] font-semibold bg-[#2E7DFF]/5 sm:bg-transparent" 
                : "border-transparent text-gray-500 hover:text-gray-300"
            }`}
          >
            {t.legal.tabTerms}
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed space-y-6">
          {activeTab === "privacy" ? (
            <>
              <div>
                <p className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-wider mb-2">{p.s1.heading}</p>
                <p>{p.s1.body}</p>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-wider mb-2">{p.s2.heading}</p>
                <div className="p-4 rounded-xl border border-[#2E7DFF]/20 bg-[#2E7DFF]/5 text-gray-300 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-[#2E7DFF] shrink-0 mt-0.5" />
                  <p className="text-xs">
                    <strong>{p.s2.noticeLabel}</strong> {p.s2.noticeBody}
                  </p>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-wider mb-2">{p.s3.heading}</p>
                <p className="mb-2">{p.s3.intro}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400 text-xs sm:text-sm">
                  {p.s3.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-wider mb-2">{p.s4.heading}</p>
                <p>{p.s4.body}</p>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-wider mb-2">{p.s5.heading}</p>
                <p>{p.s5.body}</p>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-wider mb-2">{p.s6.heading}</p>
                <p>
                  {p.s6.bodyPrefix}
                  <a href="https://t.me/TrustNode_team" target="_blank" rel="noopener noreferrer" className="text-[#2E7DFF] hover:underline">t.me/TrustNode_team</a>
                  {p.s6.bodySuffix}
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-wider mb-2">{p.s7.heading}</p>
                <p>
                  {p.s7.bodyPrefix}
                  <a href="https://vk.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2E7DFF] hover:underline">vk.com/privacy</a>
                  {p.s7.bodySuffix}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1F2937]/30">
                <p className="font-mono text-[10px] text-gray-500">{p.date}</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <p className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-wider mb-2">{s.s1.heading}</p>
                <p>{s.s1.body}</p>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-wider mb-2">{s.s2.heading}</p>
                <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-gray-300 flex items-start gap-3 text-xs">
                  <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p>
                    <strong>{s.s2.noticeLabel}</strong> {s.s2.noticeBody}
                  </p>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-wider mb-2">{s.s3.heading}</p>
                <p>{s.s3.body}</p>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-wider mb-2">{s.s4.heading}</p>
                <p>{s.s4.body}</p>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[#2E7DFF] uppercase tracking-wider mb-2">{s.s5.heading}</p>
                <p>{s.s5.body}</p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#1F2937]/50 bg-[#0A0A0C] flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#2E7DFF] hover:bg-[#2E7DFF]/85 text-white font-sans text-xs sm:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(46,125,255,0.3)] cursor-pointer"
          >
            {t.legal.acknowledge}
          </button>
        </div>
      </div>
    </div>
  );
}
