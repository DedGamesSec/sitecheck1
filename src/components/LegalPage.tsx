import React from "react";
import { ShieldAlert, FileText, Lock } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { useNavigation } from "../navigation/NavigationContext";

interface LegalPageProps {
  tab: "privacy" | "terms";
}

export default function LegalPage({ tab }: LegalPageProps) {
  const { t } = useTranslation();
  const { navigateTo } = useNavigation();
  const p = t.legal.privacy;
  const s = t.legal.terms;

  const switchTab = (next: "privacy" | "terms") => {
    if (next !== tab) {
      navigateTo(next);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const tabClass = (active: boolean) =>
    `py-3 px-4 font-mono text-[10px] sm:text-xs transition-colors cursor-pointer text-left border-b-2 ${
      active
        ? "border-[#2E7DFF] text-[#2E7DFF] font-semibold bg-[#2E7DFF]/5"
        : "border-transparent text-gray-500 hover:text-gray-300"
    }`;

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-between bg-[#0A0A0B]/90 backdrop-blur-sm">
      <div className="max-w-3xl w-full mx-auto px-4 pt-28 pb-16 flex flex-col gap-6">
        {/* Page title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#2E7DFF]/10 border border-[#2E7DFF]/25 flex items-center justify-center shrink-0">
            {tab === "privacy" ? (
              <Lock className="w-5 h-5 text-[#2E7DFF]" />
            ) : (
              <FileText className="w-5 h-5 text-[#2E7DFF]" />
            )}
          </div>
          <h1 className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F0]">
            {tab === "privacy" ? t.legal.privacyTitle : t.legal.termsTitle}
          </h1>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#1F2937]/30">
          <button onClick={() => switchTab("privacy")} className={tabClass(tab === "privacy")}>
            {t.legal.tabPrivacy}
          </button>
          <button onClick={() => switchTab("terms")} className={tabClass(tab === "terms")}>
            {t.legal.tabTerms}
          </button>
        </div>

        {/* Document content */}
        <div className="flex flex-col gap-6 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
          {tab === "privacy" ? (
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
      </div>
    </div>
  );
}
