export type LanguageCode = "ru" | "en" | "es" | "zh" | "ar" | "fr" | "de" | "pt" | "hi" | "ja" | "tr";

export interface LanguageMeta {
  code: LanguageCode;
  nativeName: string;
  englishName: string;
}

// Ordered roughly by global number of speakers / internet users.
// This covers the languages of the large majority of the world's internet
// users. The architecture (see translations.ts) makes it straightforward
// to add more languages later without touching any component code.
export const LANGUAGES: LanguageMeta[] = [
  { code: "ru", nativeName: "Русский", englishName: "Russian" },
  { code: "en", nativeName: "English", englishName: "English" },
  { code: "tr", nativeName: "Türkçe", englishName: "Turkish" },
  { code: "es", nativeName: "Español", englishName: "Spanish" },
  { code: "zh", nativeName: "中文", englishName: "Chinese" },
  { code: "hi", nativeName: "हिन्दी", englishName: "Hindi" },
  { code: "ar", nativeName: "العربية", englishName: "Arabic" },
  { code: "pt", nativeName: "Português", englishName: "Portuguese" },
  { code: "fr", nativeName: "Français", englishName: "French" },
  { code: "de", nativeName: "Deutsch", englishName: "German" },
  { code: "ja", nativeName: "日本語", englishName: "Japanese" },
];

export const DEFAULT_LANGUAGE: LanguageCode = "ru";

export function detectBrowserLanguage(): LanguageCode {
  if (typeof navigator === "undefined") return DEFAULT_LANGUAGE;
  const candidates = navigator.languages && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language];

  for (const raw of candidates) {
    const short = raw.slice(0, 2).toLowerCase();
    const match = LANGUAGES.find((l) => l.code === short);
    if (match) return match.code;
  }
  return DEFAULT_LANGUAGE;
}
