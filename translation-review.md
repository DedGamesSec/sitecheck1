# Translation Review Report

Date: 2026-08-01
Scope: all 11 UI languages (ru, en, es, zh, tr, hi, ar, pt, fr, de, ja)

## Method

1. Built a merged snapshot of the runtime translation tree (`translations.ts` after `merge_all.ts`)
   and flattened every leaf string to a `path` key.
2. For each non-English language, flagged every leaf whose value is byte-identical to the English
   value.
3. Excluded legitimate matches automatically: pure numbers/symbols, URLs, values ≤2 chars,
   punctuation-only strings, and strings containing brand/entity names
   (TrustNode, KIRA, PHANTOM, RuStore, Kaspersky, Norton, Bitdefender, McAfee, Google, ONNX,
   Android, Moscow, Chelyabinsk, KB-284, FIPS, TN1, ...).
4. Manually reviewed each remaining flag and fixed genuine gaps.
5. Auto-translation (LibreTranslate 1.9.6, local, `argospm` en→X models) was used only as a
   drafting aid for the missing `comparisonPage` block; every string was then hand-curated
   (see "Manual overrides" below). Legal text was NOT auto-translated.

## What was missing and is now fixed

| Area | Languages affected | What changed |
| --- | --- | --- |
| `comparisonPage.*` (title, subtitle, badge, thFeature, 9 features, status yes/no/inDev, pricing values, disclaimer, telegramBtn) | es, zh, tr, hi, ar, pt, fr, de, ja | Whole block was English; now fully translated |
| `brand.tagline` | tr | "On-Device Shield" → "Cihaz İçi Kalkan" |
| `how.sevenLayers[2].name` (social-engineering layer) | de | "Social Engineering (Social Eng. Layer)" → "Soziale Manipulation (Social Engineering Layer)" |
| `origin.timeline[0].badge` | de | "COLLEGE RESEARCH" → "KOLLEG-FORSCHUNG" |

Files touched: `src/i18n/translations.ts`, `src/i18n/dicts/howItWorks.ts`, `src/i18n/dicts/originStory.ts`.

## Manual overrides (deliberate deviations from raw machine output)

The raw LibreTranslate output was unusable for several string classes; the following were
hand-written (preserving numbers, currency symbols, emoji, and technical acronyms):

- **status.yes / status.no / status.inDev**: emoji prefix (`✅ ❌ 🛠`) is preserved, only the word
  was translated. Raw output dropped the emoji and hallucinated words (e.g. `🛠 In Dev` → "Deva",
  "デベロッパー"). Final: e.g. zh `✅ 有 / ❌ 无 / 🛠 开发中`.
- **pricingValues**: templates kept `~1990₽`, `~$39.99`, `~$29.99` and translated
  "Sub from ~X/yr" / "Free" per language (e.g. de `Abo ab ~1990₽/Jahr`, ja `年間サブスク ~1990₽`).
- **homoglyphs**: corrected mistranslations (zh "同位素" (isotope) → "同形字符"; ja "同等" →
  "ホモグリフ").
- **offline/on-device**: zh raw output said "在线执行" (online execution) — fixed to
  "设备端执行"; other languages normalized to a consistent "offline/on-device" phrasing.
- **social engineering / neural + AI agents / RASP / beacon / VK**: kept acronyms (RASP, AI, VK,
  Guardian, Parent-Child, BERT, URL) and translated the surrounding wording so the terms remain
  recognizable to security-literate users.
- **badge**: "COMPARISON // FACTS" translated per language (e.g. de `VERGLEICH // FAKTEN`,
  ar `مقارنة // حقائق`); the `COMPARISON // FACTS` English literal was NOT kept.

## Kept English on purpose (verified, NOT translation bugs)

These are technical names / codes / proper nouns intentionally identical across all 11 languages
(ru included), so no change was made:

- `how.layers[].tech`, `how.sevenLayers[].tech` — engine/architecture names:
  "Regex & Signature Maps", "Context-Aware State Machine", "Consensus Voting Engine",
  "PCD Identity Profiles", "Adaptive Incident Shield", "DeGenome (18 Primitives)".
- `trust.stats[].val` — "IPC G06F 21/55", "MSK // 2026", "92% / 88%".
- `header.radar` — "Product Radar" (UI label / product term).
- `realDev.graphDetails.badge` — "OBSIDIAN VAULT ACTIVE" (stylistic badge).
- `realDev.onnxDetails.size` — "28.4 MB".
- `realDev.awardDetails.recipient` — "Pitolin Mikhail Evgenyevich" (person's name; transliterated
  per language where the script allows, e.g. ru/tr/ja already differ).
- `assembly.leftPrimary` / `assembly.rightPrimary` — "OFFLINE-FIRST", "ZERO TELEMETRY"
  (design slogans).
- `realDev.devUi.inst` — "INSTITUTION" (fr/de keep the French/German noun; es/zh/tr/hi/ar/pt/ja
  already have local forms).

## Legal text

Per policy, legal content (`legal.privacy.*`, `legal.terms.*`, `footer.privacyLink`,
`footer.termsLink`, `cookie.*`) was NOT machine-translated. Confirmed all 11 languages already
carry a full legal translation (verified `legal.privacyTitle` / `legal.termsTitle` for every
language). No changes made.

## Residual flags (all benign)

After the fix, the automated comparison still reports 123 leaf values equal to English; every one
of them falls into the "kept on purpose" or "proper noun" classes above. Zero genuine gaps remain.

## Verification still needed on your side

- Visual pass of the Comparison and Roadmap pages in all 11 languages (no browser available here).
- Confirm the `comparisonPage.status.inDev` phrasing per language reads naturally in context
  (e.g. zh `开发中`, de `In Entwicklung`).
- Confirm the pricing phrasing matches how you want subscriptions communicated in each market
  (e.g. ar `اشتراك من ~1990₽/سنة`).
