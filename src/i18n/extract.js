import fs from 'fs';
import path from 'path';

const dictsDir = path.join(process.cwd(), 'src', 'i18n', 'dicts');
if (!fs.existsSync(dictsDir)) {
  fs.mkdirSync(dictsDir, { recursive: true });
}

// 1. pageNames
const pageNamesContent = `export const pageNames = {
  ru: { home: "Главная", "how-it-works": "Как это работает", tech: "Технологии", about: "О проекте", "not-found": "404" },
  en: { home: "Home", "how-it-works": "How It Works", tech: "Technology", about: "About Us", "not-found": "404" },
  es: { home: "Inicio", "how-it-works": "Cómo funciona", tech: "Tecnología", about: "Nosotros", "not-found": "404" },
  zh: { home: "首页", "how-it-works": "工作原理", tech: "技术", about: "关于我们", "not-found": "404" },
  tr: { home: "Ana Sayfa", "how-it-works": "Nasıl Çalışır", tech: "Teknoloji", about: "Hakkımızda", "not-found": "404" },
  hi: { home: "मुख्य", "how-it-works": "यह कैसे काम करता है", tech: "तकनीक", about: "हमारे बारे में", "not-found": "404" },
  ar: { home: "الرئيسية", "how-it-works": "كيف يعمل", tech: "التكنولوجيا", about: "من نحن", "not-found": "404" },
  pt: { home: "Início", "how-it-works": "Como Funciona", tech: "Tecnologia", about: "Sobre Nós", "not-found": "404" },
  fr: { home: "Accueil", "how-it-works": "Comment ça marche", tech: "Technologie", about: "À Propos", "not-found": "404" },
  de: { home: "Startseite", "how-it-works": "Wie es funktioniert", tech: "Technologie", about: "Über Uns", "not-found": "404" },
  ja: { home: "ホーム", "how-it-works": "仕組み", tech: "テクノロジー", about: "私たちについて", "not-found": "404" }
};
`;
fs.writeFileSync(path.join(dictsDir, 'pageNames.ts'), pageNamesContent);

function extractVariable(filePath, varName, exportName) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const startIndex = content.indexOf(`const ${varName}`);
  if (startIndex === -1) {
    throw new Error(`Could not find ${varName} in ${filePath}`);
  }
  
  // Find matching closing bracket for the object
  let openBrackets = 0;
  let endIndex = -1;
  let inString = false;
  let stringChar = '';
  
  for (let i = startIndex; i < content.length; i++) {
    const char = content[i];
    if ((char === '"' || char === "'" || char === '`') && content[i - 1] !== '\\') {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (stringChar === char) {
        inString = false;
      }
    }
    
    if (!inString) {
      if (char === '{') {
        openBrackets++;
      } else if (char === '}') {
        openBrackets--;
        if (openBrackets === 0) {
          endIndex = i + 1;
          break;
        }
      }
    }
  }
  
  if (endIndex === -1) {
    throw new Error(`Could not find matching brackets for ${varName} in ${filePath}`);
  }
  
  let block = content.substring(startIndex, endIndex);
  // Transform "const VAR_NAME = " to "export const exportName = "
  block = block.replace(`const ${varName}`, `export const ${exportName}`);
  return block + ';';
}

// 2. HowItWorks
const howPath = 'src/components/HowItWorksSection.tsx';
const sevenLayers = extractVariable(howPath, 'SEVEN_LAYERS_BY_LANG', 'sevenLayers');
const btnSimplified = extractVariable(howPath, 'BTN_SIMPLIFIED', 'btnSimplified');
const btnAdvanced = extractVariable(howPath, 'BTN_ADVANCED', 'btnAdvanced');
const pipelineHeader = extractVariable(howPath, 'PIPELINE_HEADER', 'pipelineHeader');
fs.writeFileSync(path.join(dictsDir, 'howItWorks.ts'), [
  'import { LanguageCode } from "../languages";',
  sevenLayers,
  btnSimplified,
  btnAdvanced,
  pipelineHeader
].join('\n\n'));

// 3. OriginStory
const originPath = 'src/components/OriginStorySection.tsx';
fs.writeFileSync(path.join(dictsDir, 'originStory.ts'), [
  'import { LanguageCode } from "../languages";',
  extractVariable(originPath, 'TITLE_BY_LANG', 'title'),
  extractVariable(originPath, 'SUBTITLE_BY_LANG', 'subtitle'),
  extractVariable(originPath, 'BADGE_BY_LANG', 'badge'),
  extractVariable(originPath, 'TIMELINE_BY_LANG', 'timeline')
].join('\n\n'));

// 4. AppSecurity
const securityPath = 'src/components/AppSecuritySection.tsx';
fs.writeFileSync(path.join(dictsDir, 'appSecurity.ts'), [
  'import { LanguageCode } from "../languages";',
  extractVariable(securityPath, 'TITLE_BY_LANG', 'title'),
  extractVariable(securityPath, 'SUBTITLE_BY_LANG', 'subtitle'),
  extractVariable(securityPath, 'BADGE_BY_LANG', 'badge'),
  extractVariable(securityPath, 'COMPLIANCE_LABEL_BY_LANG', 'complianceLabel'),
  extractVariable(securityPath, 'COMPLIANCE_TEXT_BY_LANG', 'complianceText'),
  extractVariable(securityPath, 'FEATURES_BY_LANG', 'features')
].join('\n\n'));

// 5. KiraAssistant
const kiraPath = 'src/components/KiraAssistantSection.tsx';
fs.writeFileSync(path.join(dictsDir, 'kiraAssistant.ts'), [
  'import { LanguageCode } from "../languages";',
  extractVariable(kiraPath, 'TITLE_BY_LANG', 'title'),
  extractVariable(kiraPath, 'SUBTITLE_BY_LANG', 'subtitle'),
  extractVariable(kiraPath, 'BADGE_BY_LANG', 'badge'),
  extractVariable(kiraPath, 'FEATURES_BY_LANG', 'features')
].join('\n\n'));

// 6. Waitlist
const waitlistPath = 'src/components/WaitlistSection.tsx';
fs.writeFileSync(path.join(dictsDir, 'waitlist.ts'), [
  'import { LanguageCode } from "../languages";',
  extractVariable(waitlistPath, 'CONSOLE_TEXT', 'console')
].join('\n\n'));

console.log('Dictionaries extracted successfully!');
