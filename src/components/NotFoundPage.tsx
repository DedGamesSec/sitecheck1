import React from "react";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { useNavigation } from "../navigation/NavigationContext";
import { useTranslation } from "../i18n/LanguageContext";

export default function NotFoundPage() {
  const { navigateTo } = useNavigation();
  const { language } = useTranslation();

  const translations: Record<string, { badge: string; title: string; desc: string; btn: string }> = {
    ru: {
      badge: "ERR_404 // ROUTE_NOT_FOUND",
      title: "Сектор не обнаружен в защитном куполе",
      desc: "Запрошенный путь отсутствует или был перемещён. Автономная система безопасности TrustNode рекомендует вернуться на главный экран.",
      btn: "Вернуться на главную"
    },
    en: {
      badge: "ERR_404 // ROUTE_NOT_FOUND",
      title: "Sector Not Found in Security Dome",
      desc: "The requested route does not exist or has been relocated. TrustNode autonomous security shield recommends returning to the main sector.",
      btn: "Return to Home Sector"
    },
    es: {
      badge: "ERR_404 // ROUTE_NOT_FOUND",
      title: "Sector No Encontrado en el Domo",
      desc: "La ruta solicitada no existe o ha sido reubicada. Recomendamos regresar a la pantalla principal.",
      btn: "Volver a Inicio"
    },
    zh: {
      badge: "ERR_404 // ROUTE_NOT_FOUND",
      title: "安全盾内未找到该扇区",
      desc: "请求的路径不存在或已重定位。TrustNode 建议返回主页面。",
      btn: "返回主页"
    }
  };

  const t404 = translations[language] || translations["en"];

  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-center px-4 pt-28 pb-16 text-center select-none bg-[#0A0A0B]">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2937]/50 border border-[#2E7DFF]/40 text-[#2E7DFF] font-mono text-xs mb-6 tracking-widest shadow-[0_0_15px_rgba(46,125,255,0.2)]">
        <ShieldAlert className="w-4 h-4 animate-pulse" />
        <span>{t404.badge}</span>
      </div>

      <h1 className="font-display font-bold text-4xl sm:text-6xl text-[#F5F5F0] mb-4 max-w-2xl tracking-tight">
        {t404.title}
      </h1>

      <p className="font-sans text-sm sm:text-base text-gray-400 max-w-lg mb-8 leading-relaxed">
        {t404.desc}
      </p>

      <button
        onClick={() => navigateTo("home")}
        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#2E7DFF] hover:bg-[#2E7DFF]/90 text-white font-sans font-semibold text-sm shadow-[0_0_25px_rgba(46,125,255,0.4)] transition-all duration-300 cursor-pointer hover:scale-105"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t404.btn}</span>
      </button>
    </div>
  );
}
