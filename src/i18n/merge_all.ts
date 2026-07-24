import fs from 'fs';
import path from 'path';
import { translations as originalTranslations } from './translations';
import { pageNames } from './dicts/pageNames';
import * as howItWorks from './dicts/howItWorks';
import * as realDev from './dicts/realDev';
import * as originStory from './dicts/originStory';
import * as appSecurity from './dicts/appSecurity';
import * as kiraAssistant from './dicts/kiraAssistant';
import * as explorePages from './dicts/explorePages';
import * as waitlist from './dicts/waitlist';

const languages = ['ru', 'en', 'es', 'zh', 'tr', 'hi', 'ar', 'pt', 'fr', 'de', 'ja'] as const;

const merged: any = {};

for (const lang of languages) {
  const orig = originalTranslations[lang];
  merged[lang] = {
    ...orig,
    pageNames: pageNames[lang],
    how: {
      ...orig.how,
      sevenLayers: howItWorks.sevenLayers[lang],
      btnSimplified: howItWorks.btnSimplified[lang],
      btnAdvanced: howItWorks.btnAdvanced[lang],
      pipelineHeader: howItWorks.pipelineHeader[lang],
    },
    realDev: {
      title: realDev.title[lang],
      subtitle: realDev.subtitle[lang],
      badge: realDev.badge[lang],
      devUi: realDev.devUi[lang],
      awardDetails: realDev.awardDetails[lang],
      graphDetails: realDev.graphDetails[lang],
      onnxDetails: realDev.onnxDetails[lang],
    },
    origin: {
      title: originStory.title[lang],
      subtitle: originStory.subtitle[lang],
      badge: originStory.badge[lang],
      timeline: originStory.timeline[lang],
    },
    security: {
      title: appSecurity.title[lang],
      subtitle: appSecurity.subtitle[lang],
      badge: appSecurity.badge[lang],
      complianceLabel: appSecurity.complianceLabel[lang],
      complianceText: appSecurity.complianceText[lang],
      features: appSecurity.features[lang],
    },
    kira: {
      title: kiraAssistant.title[lang],
      subtitle: kiraAssistant.subtitle[lang],
      badge: kiraAssistant.badge[lang],
      features: kiraAssistant.features[lang],
    },
    explore: explorePages.explore[lang],
    waitlist: {
      ...orig.waitlist,
      console: waitlist.console[lang],
    }
  };
}

function serialize(val: any, indent = 2): string {
  const spaces = " ".repeat(indent);
  if (val === null) return "null";
  if (typeof val === "string") return JSON.stringify(val);
  if (typeof val === "number" || typeof val === "boolean") return String(val);
  if (Array.isArray(val)) {
    if (val.length === 0) return "[]";
    const items = val.map(item => serialize(item, indent + 2)).join(`,\n${spaces}`);
    return `[\n${spaces}${items}\n${" ".repeat(indent - 2)}]`;
  }
  if (typeof val === "object") {
    const keys = Object.keys(val);
    if (keys.length === 0) return "{}";
    const pairs = keys.map(k => {
      const formattedKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
      return `${formattedKey}: ${serialize(val[k], indent + 2)}`;
    }).join(`,\n${spaces}`);
    return `{\n${spaces}${pairs}\n${" ".repeat(indent - 2)}}`;
  }
  return "undefined";
}

let output = `import type { LanguageCode } from "./languages";
import type { Translations } from "./types";\n\n`;

for (const lang of languages) {
  output += `const ${lang}: Translations = ${serialize(merged[lang], 2)};\n\n`;
}

output += `export const translations: Record<LanguageCode, Translations> = { ${languages.join(', ')} };\n`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'i18n', 'translations.ts'), output);
console.log('All translations merged and translations.ts updated!');
