import { translations } from '../src/i18n/translations';
import { LANGUAGES } from '../src/i18n/languages';

type Leaf = { path: string; value: string };

function collectLeafStrings(obj: any, prefix: string, out: Leaf[]): void {
  if (obj === null || obj === undefined) return;
  if (typeof obj === 'string') {
    out.push({ path: prefix, value: obj });
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => collectLeafStrings(item, `${prefix}[${i}]`, out));
    return;
  }
  if (typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      const k = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : JSON.stringify(key);
      collectLeafStrings(obj[key], prefix ? `${prefix}.${k}` : k, out);
    }
  }
}

// Heuristics: strings that are legitimately identical across languages.
const BRAND_RE = /\b(TrustNode|KIRA|PHANTOM|RuStore|Kaspersky|Norton|Bitdefender|McAfee|Google|ONNX|Android|Moscow|Chelyabinsk|KB-284|Morozkova|FIPS|TN1)\b/i;
const NUM_OR_SYMBOL_ONLY_RE = /^[\d\s.,%+—–-]+$/;
const URL_RE = /(https?:\/\/|www\.|\.[a-z]{2,}\/|@[\w.]+)/i;
const ASCII_PUNCT_ONLY_RE = /^[\s:;,.!?|/#&()+=\-–—→«»"']+$/;

function looksLikeTrueValue(path: string, value: string, enValue: string): boolean {
  if (value === enValue) return true;
  return false;
}

function isExempt(path: string, value: string, enValue: string): boolean {
  if (!value) return true;
  if (enValue === value && NUM_OR_SYMBOL_ONLY_RE.test(value)) return true;
  if (enValue === value && URL_RE.test(value)) return true;
  if (enValue === value && ASCII_PUNCT_ONLY_RE.test(value)) return true;
  if (enValue === value && value.length <= 2) return true;
  return false;
}

const languages = LANGUAGES.map(l => l.code).filter(c => c !== 'en');
const en = translations.en;

const results: Record<string, Array<{ path: string; en: string; value: string }>> = {};

for (const code of languages) {
  const langObj = translations[code as keyof typeof translations] as any;
  const enLeaves: Leaf[] = [];
  collectLeafStrings(en, '', enLeaves);
  const enMap = new Map(enLeaves.map(l => [l.path, l.value]));
  const langLeaves: Leaf[] = [];
  collectLeafStrings(langObj, '', langLeaves);
  const untranslated: Array<{ path: string; en: string; value: string }> = [];
  for (const leaf of langLeaves) {
    const enVal = enMap.get(leaf.path);
    if (enVal === undefined) continue;
    if (!looksLikeTrueValue(leaf.path, leaf.value, enVal)) continue;
    if (isExempt(leaf.path, leaf.value, enVal)) continue;
    // Brand-bearing strings that are legitimately identical
    if (BRAND_RE.test(enVal)) continue;
    untranslated.push({ path: leaf.path, en: enVal, value: leaf.value });
  }
  results[code] = untranslated;
}

for (const code of languages) {
  const list = results[code];
  console.log(`\n===== ${code} (${list.length}) =====`);
  for (const item of list) {
    console.log(`  ${item.path} :: "${item.en}"`);
  }
}

const total = languages.reduce((acc, c) => acc + results[c].length, 0);
console.log(`\nTOTAL untranslated-ish keys: ${total}`);
