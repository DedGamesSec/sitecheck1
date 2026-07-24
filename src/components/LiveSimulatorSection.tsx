import React, { useState, useEffect, useRef } from "react";
import { Mic, Bot, Phone, PhoneOff, AlertTriangle, ShieldCheck, Play, RotateCcw, Cpu, Terminal, Radio } from "lucide-react";
import { useTranslation } from "../i18n/LanguageContext";
import { LanguageCode } from "../i18n/languages";
import { motion, AnimatePresence } from "motion/react";

interface Scenario {
  id: string;
  name: string;
  caller: string;
  speech: string[];
  threatMilestones: number[]; // Threat level at each sentence
  triggers: string[]; // Keywords highlighted
}

const SIMULATOR_TITLE: Partial<Record<LanguageCode, string>> = {
  ru: "Интерактивный симулятор PHANTOM 2.0",
  en: "Interactive PHANTOM 2.0 Simulator",
  es: "Simulador Interactivo PHANTOM 2.0",
  zh: "PHANTOM 2.0 互动模拟终端",
  hi: "इंटरैक्टिव फैंटम (PHANTOM) 2.0 सिमुलेटर",
  ar: "محاكي PHANTOM 2.0 التفاعلي",
  pt: "Simulador Interativo PHANTOM 2.0",
  fr: "Simulateur Interactif PHANTOM 2.0",
  de: "Interaktiver PHANTOM 2.0 Simulator",
  ja: "インタラクティブ PHANTOM 2.0 シミュレーター"
};

const SIMULATOR_SUBTITLE: Partial<Record<LanguageCode, string>> = {
  ru: "Запустите один из сценариев угроз и посмотрите, как 7 оборонных слоев TrustNode анализируют семантику диалога в реальном времени прямо в ОЗУ устройства.",
  en: "Trigger a social engineering attack scenario and observe how TrustNode's 7 security layers parse call semantics in real-time, 100% on-device.",
  es: "Inicie uno de los escenarios de amenazas y observe cómo las 7 capas de seguridad de TrustNode analizan la semántica del diálogo en tiempo real directamente en la RAM.",
  zh: "启动以下社交工程威胁场景，亲眼见证 TrustNode 的 7 重防御层如何在设备运行内存（RAM）中实时解析对话语义并拦截攻击。",
  hi: "एक सामाजिक इंजीनियरिंग हमले के परिदृश्य को शुरू करें और देखें कि कैसे TrustNode के 7 सुरक्षा परतें वास्तविक समय में कॉल सिमेंटिक्स का विश्लेषण करती हैं, 100% ऑन-डिवाइस।",
  ar: "قم بتشغيل أحد سيناريوهات التهديد وشاهد كيف تقوم طبقات الدفاع السبع لـ TrustNode بتحليل دلالات الحوار في الوقت الفعلي مباشرة في ذاكرة الوصول العشوائي للجهاز.",
  pt: "Inicie um dos cenários de ameaça e veja como as 7 camadas de segurança do TrustNode analisam a semântica do diálogo em tempo real diretamente na RAM do aparelho.",
  fr: "Lancez un scénario d'attaque et observez comment les 7 couches de sécurité de TrustNode analysent la sémantique de l'appel en temps réel, entièrement sur l'appareil.",
  de: "Starten Sie eines der Bedrohungsszenarien und beobachten Sie, wie die 7 Schutzebenen von TrustNode die Gesprächssemantik in Echtzeit lokal im RAM analysieren.",
  ja: "ソーシャルエンジニアリング攻撃のシナリオを実行し、TrustNodeの7つの防御レイヤーがスマートフォンのRAM上で、どのようにリアルタイムにダイアログのセマンティクスを解析・遮断するかをご覧ください。"
};

const SCENARIOS_BY_LANG: Partial<Record<LanguageCode, Scenario[]>> = {
  ru: [
    {
      id: "bank",
      name: "Служба безопасности банка",
      caller: "Майор полиции / СБ Банка",
      speech: [
        "Алло, здравствуйте! Я капитан полиции Соловьев совместно с Центробанком.",
        "По вашему счету зафиксирована попытка несанкционированного перевода на сумму 45 000 рублей.",
        "Для предотвращения кражи мы заблокировали операцию, но мошенники пытаются сменить ваш привязанный телефон.",
        "Вам необходимо прямо сейчас перевести все ваши сбережения на защищенный сейфовый ячейковый счет.",
        "Назовите код из СМС, который мы вам отправили, чтобы подтвердить перевод на защищенную ячейку!"
      ],
      threatMilestones: [15, 35, 60, 85, 98],
      triggers: ["Центробанком", "несанкционированного перевода", "перевести все ваши сбережения", "Назовите код из СМС", "защищенный сейфовый"]
    },
    {
      id: "delivery",
      name: "Фальшивая служба доставки",
      caller: "Бот-курьер службы доставки",
      speech: [
        "Здравствуйте! Доставка вашего заказа задерживается, так как адрес указан некорректно.",
        "Ваша посылка находится на распределительном узле, хранение платное начиная с сегодняшнего дня.",
        "Пожалуйста, перейдите по ссылке в СМС: trustnode-tracking-ru.net/id824 и оплатите пошлину 15 рублей.",
        "Там же нужно подтвердить свои паспортные данные и реквизиты карты для проверки владельца.",
        "Если вы не сделаете это в течение 1 часа, посылка будет утилизирована без права компенсации."
      ],
      threatMilestones: [10, 25, 55, 80, 95],
      triggers: ["оплатите пошлину", "подтвердить свои паспортные данные", "реквизиты карты", "утилизирована", "trustnode-tracking-ru.net"]
    },
    {
      id: "investment",
      name: "Инвестиционный VIP-клуб",
      caller: "VIP-аналитик TrustCapital",
      speech: [
        "Приветствую! Поздравляю, вы получили доступ в закрытую платформу гарантированного дохода!",
        "Наши алгоритмы на базе искусственного интеллекта дают 100% проходимость сделок по криптоактивам.",
        "Вам не нужно ничего делать. Просто внесите сегодня стартовые 8 000 рублей на наш тестовый счет.",
        "Уже завтра утром на вашей карте будет пассивный доход в размере 24 000 рублей без каких-либо рисков.",
        "Предложение ограничено, в группе осталось всего 2 свободных места. Переводите деньги прямо сейчас!"
      ],
      threatMilestones: [12, 30, 58, 82, 97],
      triggers: ["гарантированного дохода", "100% проходимость", "внесите сегодня", "без каких-либо рисков", "Переводите деньги прямо сейчас"]
    }
  ],
  en: [
    {
      id: "bank",
      name: "Fake Bank Security",
      caller: "Federal Police / Bank Security",
      speech: [
        "Hello! This is Detective Miller from the Financial Crimes Unit, calling regarding your account.",
        "We have detected an unauthorized transfer attempt of $1,500 initiated from an unknown device.",
        "To protect your balance, we must transfer your remaining funds to our temporary secured vault.",
        "Please provide the one-time verification code we just sent to your phone to authorize the transfer.",
        "Do not hang up or talk to anyone, or you will be held legally liable for aiding cyber-criminals."
      ],
      threatMilestones: [15, 40, 65, 88, 98],
      triggers: ["Financial Crimes Unit", "unauthorized transfer", "secured vault", "verification code", "legally liable"]
    },
    {
      id: "delivery",
      name: "Package Delivery Phishing",
      caller: "Courier Service Automated Bot",
      speech: [
        "Hello, your package delivery has been suspended due to an incomplete apartment number.",
        "The package is currently held at our sorting center, and return-to-sender fees will apply starting tomorrow.",
        "Please visit trustnode-tracking-secure.com/id824 immediately to pay a small $1.50 verification fee.",
        "You will need to input your credit card details and full billing address to verify ownership.",
        "Failure to verify ownership within 2 hours will result in automatic parcel destruction."
      ],
      threatMilestones: [10, 25, 55, 82, 95],
      triggers: ["suspended", "trustnode-tracking-secure.com", "verification fee", "credit card details", "destruction"]
    },
    {
      id: "investment",
      name: "VIP Crypto Investment",
      caller: "Senior Broker at TrustCapital",
      speech: [
        "Hello! Congratulations, your profile was selected for our exclusive high-yield VIP tier.",
        "Our proprietary AI neural software guarantees 100% win-rate on modern crypto derivatives.",
        "All you need is to make a quick initial deposit of $100 today to activate your premium terminal.",
        "By tomorrow morning, you will receive $500 in pure passive profit directly back to your Visa card.",
        "Spots are strictly limited, only 2 left. Send the crypto or bank transfer right now to claim it!"
      ],
      threatMilestones: [12, 32, 60, 85, 97],
      triggers: ["high-yield VIP", "guarantees 100% win-rate", "initial deposit", "passive profit", "right now"]
    }
  ]
};

// Map default scenarios for languages not defined to EN
const getScenarios = (lang: LanguageCode): Scenario[] => {
  return SCENARIOS_BY_LANG[lang] || SCENARIOS_BY_LANG.en;
};

const LAYER_LABELS_BY_LANG: Partial<Record<LanguageCode, string[]>> = {
  ru: [
    "Слой 1: Анализ голоса и интонаций (распознавание волнения и стресса)",
    "Слой 2: Проверка темпа речи (выявление чтения мошеннического текста)",
    "Слой 3: Анализ ключевых слов (поиск фраз-триггеров мошенников)",
    "Слой 4: Оценка давления на жертву (обнаружение психологического контроля)",
    "Слой 5: Контроль срочности (анализ требований немедленного перевода денег)",
    "Слой 6: Быстрая локальная сверка (проверка по известным номерам и базам)",
    "Слой 7: Итоговый вердикт купола (принятие решения о блокировке звонка)"
  ],
  en: [
    "Layer 1: Voice & Vocal Stress (detecting background stress & nervous tension)",
    "Layer 2: Speech Rate & Pacing (identifying robotic script reading)",
    "Layer 3: Word & Phrase Analysis (searching for known manipulative keywords)",
    "Layer 4: Psychological Pressure (modeling tactics of verbal intimidation)",
    "Layer 5: Forced Urgency Control (evaluating claims of fake emergency)",
    "Layer 6: Local Safe Database Match (hashing against local offline threat lists)",
    "Layer 7: Smart Decision Engine (compiling final security score & quick alerts)"
  ],
  es: [
    "Capa 1: Acústico-Prosódico (ruido de fondo y estrés de voz)",
    "Capa 2: Fonético-Intonativo (pausas anormales y lectura de guion)",
    "Capa 3: Léxico-Semántico (búsqueda de frases clave de estafa)",
    "Capa 4: Sintáctico-Discursivo (estructura de manipulación psicológica)",
    "Capa 5: Pragmático-Contextual (evaluación de urgencia falsa)",
    "Capa 6: Coincidencia de registro local (cotejo de hashes de amenazas)",
    "Capa 7: Matriz de decisión heurística (cálculo de puntuación final)"
  ],
  zh: [
    "第 1 层：声学与韵律分析（分析背景噪音、语调和情绪压力）",
    "第 2 层：语音与语调分析（检测不自然停顿和脚本读音模式）",
    "第 3 层：词汇与语义分析（提取欺诈和诱导性敏感词组）",
    "第 4 层：句法与话语分析（识别心理控制和诱导施压框架）",
    "第 5 层：语用与语境分析（评估假冒权威与人为紧急情绪）",
    "第 6 层：本地威胁库碰撞（在本地安全数据库中高速碰撞特征）",
    "第 7 层：启发式决策矩阵（加权计算综合威胁度并触发报警拦截）"
  ],
  hi: [
    "परत 1: ध्वनिक-प्रोसॉडिक (पृष्ठभूमि शोर और मुखर तनाव का विश्लेषण)",
    "परत 2: ध्वन्यात्मक-intonational (असामान्य ठहराव और स्क्रिप्ट पढ़ने का पता लगाना)",
    "परत 3: लेक्सिको-सिमेंटिक (हेरफेर वाले घोटाले के शब्दों को खोजना)",
    "परत 4: सिंटैक्टिक-प्रवचन (मनोवैज्ञानिक नियंत्रण का संरचनात्मक मॉडलिंग)",
    "परत 5: व्यावहारिक-प्रासंगिक (जबरन तात्कालिकता और अधिकार का मूल्यांकन)",
    "परत 6: स्थानीय रजिस्ट्री क्रॉस-मैच (स्थानीय खतरे के खिलाफ मिलान)",
    "परt 7: हेयुरिस्टिक डिसीजन मैट्रिक्स (अंतिम खतरे के स्कोर संकलन)"
  ],
  ar: [
    "الطبقة 1: الصوتية العروضية (تحليل ضوضاء الخلفية والتوتر الصوتي)",
    "الطبقة 2: الفونيمية التنغيمية (كشف السكتات غير الطبيعية وقراءة النصوص)",
    "الطبقة 3: المعجمية الدلالية (رصد الكلمات المفتاحية الاحتيالية والمضللة)",
    "الطبقة 4: النحوية الخطابية (نمذجة هيكل الضغط النفسي والسيطرة)",
    "الطبقة 5: التداولية السياقية (تقييم دوافع الاستعجال والضغط الوهمي)",
    "الطبقة 6: مقارنة السجلات المحلية (مطابقة البصمات مع قواعد التهديد المحلية)",
    "الطبقة 7: مصفوفة القرار الاستدلالي (تجميع الدرجات النهائية وإطلاق التحذير)"
  ],
  pt: [
    "Camada 1: Acústico-Prosódico (ruído de fundo e estresse vocal)",
    "Camada 2: Fonético-Entonacional (pausas anômalas e leitura de roteiro)",
    "Camada 3: Léxico-Semântico (palavras-chave e frases de engenharia social)",
    "Camada 4: Sintático-Discursivo (estrutura de manipulação psicológica)",
    "Camada 5: Pragmático-Contextual (análise de falsa urgência e autoridade)",
    "Camada 6: Comparação de Registro Local (verificação contra banco de ameaças local)",
    "Camada 7: Matriz de Decisão Heurística (cálculo de risco final e alertas)"
  ],
  fr: [
    "Couche 1 : Acoustico-prosodique (analyse du bruit de fond et du stress vocal)",
    "Couche 2 : Phonético-intonative (détection des pauses anormales et lecture de script)",
    "Couche 3 : Lexico-sémantique (identification des phrases clés de manipulation)",
    "Couche 4 : Syntactico-discursive (modélisation de l'emprise psychologique)",
    "Couche 5 : Pragmatico-contextuelle (évaluation de l'urgence forcée et de l'autorité)",
    "Couche 6 : Concordance locale (hachage et comparaison avec la base locale de menaces)",
    "Couche 7 : Matrice de décision heuristique (compilation du score de menace final)"
  ],
  de: [
    "Ebene 1: Akustisch-Prosodisch (Hintergrundgeräusche und Stimmenstress)",
    "Ebene 2: Phonemisch-Intonatorisch (anormale Pausen und Skriptlesen)",
    "Ebene 3: Lexikalisch-Semantisch (manipulative Betrugs-Schlüsselwörter)",
    "Ebene 4: Syntaktisch-Diskursiv (Modellierung psychologischer Kontrolle)",
    "Ebene 5: Pragmatisch-Kontextuell (Dringlichkeitsprüfung & Autoritätstrigger)",
    "Ebene 6: Lokaler Signatur-Abgleich (Abgleich mit der lokalen Bedrohungsdatenbank)",
    "Ebene 7: Heuristische Entscheidungsmatrix (Berechnung des finalen Bedrohungsscores)"
  ],
  ja: [
    "第1レイヤー：音響・プロソディ解析（背景ノイズ・感情ストレスの検知）",
    "第2レイヤー：音韻・イントネーション解析（不自然なポーズや読み上げ検出）",
    "第3レイヤー：語彙・セマンティック解析（詐欺的な誘導・キーワードの抽出）",
    "第4レイヤー：構文・ディスコース解析（心理的コントロールや圧力パターンの構造化）",
    "第5レイヤー：プラグマティック・コンテキスト解析（偽りの緊急性や権威の利用判定）",
    "第6レイヤー：ローカルデータベース照合（ローカル脅威情報の高速シグネチャ検索）",
    "第7レイヤー：ヒューリスティック意思決定マトリクス（加权による統合的な脅威度判定と警告）"
  ]
};

const CONSOLE_LOGS_BY_LANG: Partial<Record<LanguageCode, Record<string, string[]>>> = {
  ru: {
    scanning: [
      "[OK] Запуск речевого кодека OPUS. Входящий поток перенаправлен в локальное ОЗУ.",
      "[INFO] Инициализация Rubert-tiny2 в локальной песочнице.",
      "[OK] Калибровка фонового шума. Шумоподавление: Активно.",
      "[INFO] Сканирование спектра голоса на признаки синтеза..."
    ],
    done: [
      "[ALERT] Слои 3, 4 и 5 зафиксировали критические семантические аномалии.",
      "[SUCCESS] Локальная база SQLCipher заблокирована на запись во избежание сброса.",
      "[BLOCKED] KIRA: Семантическая блокировка входящего воздействия.",
      "[DOME HARDENED] Угроза нейтрализована. Лог стерт из ОЗУ. Устройство в безопасности."
    ]
  },
  en: {
    scanning: [
      "[OK] OPUS audio stream codec active. Routing voice payload directly to local secure RAM.",
      "[INFO] Initializing Rubert-tiny2 classifier inside device sandbox.",
      "[OK] Calibrating ambient room acoustics. Noise cancellation: Active.",
      "[INFO] Scanning frequency spectrum for AI voice cloning signatures..."
    ],
    done: [
      "[ALERT] Layers 3, 4, and 5 compiled critical semantic anomalies.",
      "[SUCCESS] Core SQLCipher user state secured to prevent tampering.",
      "[BLOCKED] KIRA: Real-time semantic active countermeasure deployed.",
      "[DOME HARDENED] Threat neutralized. Call memory flushed. Core systems secure."
    ]
  }
};

export const LiveSimulatorSection = React.memo(function LiveSimulatorSection() {
  const { language } = useTranslation();
  const title = SIMULATOR_TITLE[language] || SIMULATOR_TITLE.en;
  const subtitle = SIMULATOR_SUBTITLE[language] || SIMULATOR_SUBTITLE.en;

  const scenarios = getScenarios(language);
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const currentScenario = scenarios[activeScenarioIdx] || scenarios[0];

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSentenceIdx, setCurrentSentenceIdx] = useState<number>(-1);
  const [threatLevel, setThreatLevel] = useState<number>(5);
  const [activeLayersCount, setActiveLayersCount] = useState<number>(0);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [visibleSentence, setVisibleSentence] = useState<string>("");
  const sentenceIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const transcriptionEndRef = useRef<HTMLDivElement>(null);
  const transcriptionContainerRef = useRef<HTMLDivElement>(null);

  // UI labels based on language
  const SIM_UI: Record<string, Record<string, string>> = {
    ru: { start: "Запустить симуляцию", reset: "Сбросить", caller: "Собеседник", incoming: "Входящий вызов...", secure: "СЕССИЯ ЗАЩИЩЕНА", threat: "Шкала угрозы социального инжиниринга", logs: "ЛОГ СИСТЕМЫ ОБОРОНЫ PHANTOM", finished: "СИМУЛЯЦИЯ ЗАВЕРШЕНА // УГРОЗА БЛОКИРОВАНА", warning: "KIRA: ОБНАРУЖЕНА УГРОЗА! ПОВЕСЬТЕ ТРУБКУ!", clickStart: "Нажмите кнопку ниже, чтобы запустить симуляцию голосового потока", statusHeader: "СТАТУС СЛОЕВ ФИЛЬТРАЦИИ PHANTOM 2.0" },
    en: { start: "Start Simulation", reset: "Reset", caller: "Caller", incoming: "Incoming call...", secure: "SESSION SECURED", threat: "Social Engineering Threat Level", logs: "PHANTOM DEFENSE LOG", finished: "SIMULATION COMPLETE // ATTACK BLOCKED", warning: "KIRA: ATTEMPTED FRAUD DETECTED! HANG UP!", clickStart: "Click 'Start Simulation' below to stream voice data packets", statusHeader: "PHANTOM 2.0 DEFENSE LAYER STATUS" },
    es: { start: "Iniciar Simulación", reset: "Reiniciar", caller: "Interlocutor", incoming: "Llamada entrante...", secure: "SESIÓN PROTEGIDA", threat: "Nivel de Amenaza de Ingeniería Social", logs: "REGISTRO DE DEFENSA PHANTOM", finished: "SIMULACIÓN COMPLETADA // ATAQUE BLOQUEADO", warning: "KIRA: ¡FRAUDE DETECTADO! ¡CUELGUE!", clickStart: "Haga clic en 'Iniciar simulación' abajo para transmitir datos de voz", statusHeader: "ESTADO DE CAPAS PHANTOM 2.0" },
    zh: { start: "开始模拟", reset: "重置", caller: "对方", incoming: "来电中...", secure: "会话已加密保护", threat: "社交工程威胁级别", logs: "PHANTOM 防御日志", finished: "模拟完成 // 攻击已被拦截", warning: "KIRA：检测到诈骗危险！请立即挂机！", clickStart: "点击下方按钮启动语音流模拟", statusHeader: "PHANTOM 2.0 防御层状态" },
    tr: { start: "Simülasyonu Başlat", reset: "Sıfırla", caller: "Arayan", incoming: "Gelen arama...", secure: "OTURUM GÜVENLİ", threat: "Sosyal Mühendislik Tehdit Seviyesi", logs: "PHANTOM SAVUNMA GÜNLÜĞÜ", finished: "SİMÜLASYON TAMAMLANDI // SALDIRI ENGELLENDİ", warning: "KIRA: DOLANDIRICILIK ALGILANDI! TELEFONU KAPATIN!", clickStart: "Ses veri paketlerini akıtmak için 'Simülasyonu Başlat'a tıklayın", statusHeader: "PHANTOM 2.0 SAVUNMA KATMANI DURUMU" },
    hi: { start: "सिमुलेशन शुरू करें", reset: "रीसेट करें", caller: "कैलर", incoming: "आने वाली कॉल...", secure: "सत्र सुरक्षित", threat: "सामाजिक इंजीनियरिंग खतरा स्तर", logs: "PHANTOM रक्षा लॉग", finished: "सिमुलेशन पूरा // हमला अवरुद्ध", warning: "KIRA: धोखाधड़ी का पता चला! फोन काटें!", clickStart: "वॉइस स्ट्रीम सिमुलेशन शुरू करने के लिए नीचे क्लिक करें", statusHeader: "PHANTOM 2.0 रक्षा स्तर स्थिति" },
    ar: { start: "بدء المحاكاة", reset: "إعادة ضبط", caller: "المتصل", incoming: "مكالمة واردة...", secure: "جلسة آمنة", threat: "مستوى تهديد الهندسة الاجتماعية", logs: "سجل دفاع PHANTOM", finished: "اكتملت المحاكاة // تم حظر الهجوم", warning: "KIRA: تم اكتشاف محاولة احتيال! أغلِق الخط!", clickStart: "انقر على زر البدء أدناه لبدء محاكاة تدفق الصوت", statusHeader: "حالة طبقات الحماية PHANTOM 2.0" },
    pt: { start: "Iniciar Simulação", reset: "Reiniciar", caller: "Chamador", incoming: "Chamada recebida...", secure: "SESSÃO PROTEGIDA", threat: "Nível de Ameaça de Engenharia Social", logs: "REGISTRO DE DEFESA PHANTOM", finished: "SIMULAÇÃO CONCLUÍDA // ATAQUE BLOQUEADO", warning: "KIRA: FRAUDE DETECTADA! DESLIGUE O TELEFONE!", clickStart: "Clique no botão abaixo para iniciar a simulação de voz", statusHeader: "STATUS DA CAMADA DE DEFESA PHANTOM 2.0" },
    fr: { start: "Lancer la simulation", reset: "Réinitialiser", caller: "Appelant", incoming: "Appel entrant...", secure: "SÉANCE SÉCURISÉE", threat: "Niveau de Menace d'Ingénierie Sociale", logs: "JOURNAL DE DÉFENSE PHANTOM", finished: "SIMULATION TERMINÉE // ATTAQUE BLOQUÉE", warning: "KIRA : FRAUDE DÉTECTÉE ! RACCROCHEZ !", clickStart: "Cliquez sur le bouton ci-dessous pour démarrer la simulation", statusHeader: "ÉTAT DES COUCHES PHANTOM 2.0" },
    de: { start: "Simulation starten", reset: "Zurücksetzen", caller: "Anrufer", incoming: "Eingehender Anruf...", secure: "SITZUNG GESICHERT", threat: "Bedrohungsstufe für Social Engineering", logs: "PHANTOM-ABWEHRLOGBUCH", finished: "SIMULATION ABGESCHLOSSEN // ANGRIFF BLOCKIERT", warning: "KIRA: BETRUGSVERSUCH ERKANNT! AUFLEGEN!", clickStart: "Klicken Sie unten, um die Sprachdatensimulation zu starten", statusHeader: "PHANTOM 2.0 SCHUTZSCHICHT-STATUS" },
    ja: { start: "シミュレーション開始", reset: "リセット", caller: "発信者", incoming: "着信中...", secure: "セッション保護中", threat: "ソーシャルエンジニアリング脅威レベル", logs: "PHANTOM防御ログ", finished: "シミュレーション完了 // 攻撃ブロック", warning: "KIRA: 詐欺攻撃を検知！すぐに切断してください！", clickStart: "下のボタンをクリックして音声ストリームを開始してください", statusHeader: "PHANTOM 2.0 防御レイヤーステータス" }
  };
  const sui = SIM_UI[language] || SIM_UI.en;
  const btnStart = sui.start;
  const btnReset = sui.reset;
  const callerLabel = sui.caller;
  const incomingLabel = sui.incoming;
  const secureLabel = sui.secure;
  const threatMeterLabel = sui.threat;
  const logsLabel = sui.logs;
  const simulationFinishedLabel = sui.finished;
  const warningBubbleLabel = sui.warning;

  const layers = LAYER_LABELS_BY_LANG[language] || LAYER_LABELS_BY_LANG.en;

  useEffect(() => {
    // Clear simulation on language or scenario change
    resetSimulation();
  }, [language, activeScenarioIdx]);

  useEffect(() => {
    const container = transcriptionContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [currentSentenceIdx, visibleSentence]);

  const resetSimulation = () => {
    if (sentenceIntervalRef.current) clearInterval(sentenceIntervalRef.current);
    setIsPlaying(false);
    setCurrentSentenceIdx(-1);
    setThreatLevel(5);
    setActiveLayersCount(0);
    setVisibleSentence("");
    
    // Set initial system logs
    const defaultLogs = CONSOLE_LOGS_BY_LANG[language]?.scanning || CONSOLE_LOGS_BY_LANG.en.scanning;
    setConsoleLogs([...defaultLogs]);
  };

  const startSimulation = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setCurrentSentenceIdx(0);
    setThreatLevel(currentScenario.threatMilestones[0]);
    setActiveLayersCount(2); // Layer 1 and 2 light up early
    setVisibleSentence("");

    // Simulate typing text for the first sentence
    animateSentenceTyping(currentScenario.speech[0]);

    let step = 0;
    sentenceIntervalRef.current = setInterval(() => {
      step++;
      if (step >= currentScenario.speech.length) {
        clearInterval(sentenceIntervalRef.current!);
        setIsPlaying(false);
        // Complete remaining logs and layers
        setActiveLayersCount(7);
        const doneLogs = CONSOLE_LOGS_BY_LANG[language]?.done || CONSOLE_LOGS_BY_LANG.en.done;
        setConsoleLogs(prev => [...prev, ...doneLogs]);
        return;
      }

      setCurrentSentenceIdx(step);
      setThreatLevel(currentScenario.threatMilestones[step]);
      
      // Gradually activate defense layers
      if (step === 1) setActiveLayersCount(3);
      if (step === 2) setActiveLayersCount(4);
      if (step === 3) setActiveLayersCount(5);
      if (step === 4) setActiveLayersCount(7);

      // Add relevant high-tech logs dynamically based on milestones
      const currentSentence = currentScenario.speech[step];
      animateSentenceTyping(currentSentence);

      // Injected log entries
      if (step === 1) {
        setConsoleLogs(prev => [
          ...prev,
          `[SCAN] LAYER_3: Lexical match detected phrase: "${currentScenario.triggers[0] || 'fraud pattern'}"`,
        ]);
      }
      if (step === 2) {
        setConsoleLogs(prev => [
          ...prev,
          `[WARN] LAYER_4: Manipulation scheme detected. Semantic anomaly weight: 0.72.`,
          `[SCAN] LAYER_3: Match found: "${currentScenario.triggers[1] || 'unauthorized'}"`
        ]);
      }
      if (step === 3) {
        setConsoleLogs(prev => [
          ...prev,
          `[CRITICAL] LAYER_5: Authority coercion detected. Hostile dialog patterns matched with 94% probability.`,
          `[SCAN] LAYER_6: Phrase "${currentScenario.triggers[2] || 'verification code'}" matches blacklisted signatures.`
        ]);
      }
    }, 4500);
  };

  const animateSentenceTyping = (text: string) => {
    setVisibleSentence("");
    let charIdx = 0;
    const timer = setInterval(() => {
      setVisibleSentence(prev => prev + text.charAt(charIdx));
      charIdx++;
      if (charIdx >= text.length) {
        clearInterval(timer);
      }
    }, 20);
  };

  // Helper to color triggers in transcription
  const highlightTriggers = (text: string) => {
    let highlighted = text;
    currentScenario.triggers.forEach(trigger => {
      const regex = new RegExp(`(${trigger})`, "gi");
      highlighted = highlighted.replace(regex, `<span class="text-[#EF4444] font-bold border-b border-[#EF4444]/40">$1</span>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
  };

  return (
    <section 
      className="relative w-full py-16 sm:py-20 px-4 border-t border-[#1F2937]/30 bg-[#0A0A0B] overflow-hidden" 
      id="live-simulator"
    >
      {/* Visual tech matrix background decoration */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#2E7DFF]/[0.015] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(46,125,255,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#2E7DFF]/20 mb-6">
            <Radio className="w-3.5 h-3.5 text-[#2E7DFF] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[#2E7DFF] uppercase">
              INTERACTIVE TEST CONSOLE // PHANTOM 2.0
            </span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F5F5F0] tracking-tight mb-6">
            {title}
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Dynamic Scenario Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto mb-12">
          {scenarios.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => {
                if (!isPlaying) {
                  setActiveScenarioIdx(idx);
                }
              }}
              disabled={isPlaying}
              className={`px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold border transition-all duration-300 flex items-center gap-2 ${
                isPlaying ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              } ${
                activeScenarioIdx === idx
                  ? "bg-[#2E7DFF]/15 border-[#2E7DFF] text-[#2E7DFF] shadow-[0_0_15px_rgba(46,125,255,0.15)]"
                  : "bg-[#0B0C0E]/60 border-white/[0.04] text-gray-400 hover:text-[#F5F5F0] hover:bg-white/[0.02]"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              {sc.name}
            </button>
          ))}
        </div>

        {/* Live Simulator Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* PHONE CALL SIMULATOR COLUMN (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#090A0E] border border-white/[0.04] relative overflow-hidden shadow-2xl min-h-[500px]">
            
            {/* Flashing Intrusion Danger Ambient Cover */}
            <AnimatePresence>
              {threatLevel >= 75 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.4, 0.1, 0.4, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-[#EF4444]/15 pointer-events-none z-15"
                />
              )}
            </AnimatePresence>

            {/* Simulated Phone UI Header */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5 bg-white/[0.02] border border-white/[0.05] px-2.5 py-1 rounded-md font-mono text-[9px] text-[#2E7DFF]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF] animate-pulse" />
                <span>GSM // SECURE LINE</span>
              </div>
              <span className="font-mono text-[10px] text-gray-500">
                {isPlaying ? "00:24" : "00:00"}
              </span>
            </div>

            {/* Caller Active Badge / Interactive Headpiece */}
            <div className="flex flex-col items-center justify-center my-8 text-center z-10 relative">
              <div className="relative w-20 h-20 rounded-full bg-[#111319] border border-white/[0.05] flex items-center justify-center mb-4">
                {/* Active Caller waves */}
                {isPlaying && (
                  <>
                    <div className="absolute inset-0 rounded-full border border-[#EF4444]/40 animate-ping" style={{ animationDuration: "2.5s" }} />
                    <div className="absolute -inset-2 rounded-full border border-[#EF4444]/20 animate-ping" style={{ animationDuration: "3.5s" }} />
                  </>
                )}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${threatLevel >= 75 ? "bg-[#EF4444]/10 border border-[#EF4444]/30" : "bg-[#2E7DFF]/10 border border-[#2E7DFF]/20"}`}>
                  <Phone className={`w-6 h-6 ${threatLevel >= 75 ? "text-[#EF4444]" : "text-[#2E7DFF]"} ${isPlaying ? "animate-pulse" : ""}`} />
                </div>
              </div>
              <span className="font-mono text-[9px] uppercase text-[#2E7DFF] tracking-wider mb-0.5">{callerLabel}</span>
              <h4 className="font-display font-bold text-base text-[#F5F5F0]">{currentScenario.caller}</h4>
              <p className="font-mono text-[10px] text-gray-500 mt-1">{isPlaying ? "ACTIVE AUDIO WAVE STREAM" : incomingLabel}</p>
            </div>

            {/* LIVE DIALOG TRANSCRIPTION CANVAS */}
            <div 
              ref={transcriptionContainerRef}
              className="flex-1 min-h-[160px] max-h-[220px] overflow-y-auto p-4 rounded-2xl bg-[#030406] border border-white/[0.02] flex flex-col gap-3 relative scrollbar-thin z-10"
            >
              {currentSentenceIdx === -1 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                  <Mic className="w-6 h-6 text-gray-600 mb-2 animate-bounce" />
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">
                    {sui.clickStart}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {currentScenario.speech.slice(0, currentSentenceIdx).map((sent, i) => (
                    <div key={i} className="text-left bg-white/[0.01] p-3 rounded-xl border border-white/[0.02]">
                      <p className="font-mono text-[9px] text-gray-500 mb-1">
                        SENC-{String(i+1).padStart(2, "0")} // SECURE_RAM_TRANSCRIPTION
                      </p>
                      <p className="font-sans text-xs text-gray-300 leading-relaxed">
                        {highlightTriggers(sent)}
                      </p>
                    </div>
                  ))}

                  {/* Active Sentence Typing */}
                  {visibleSentence && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-left bg-[#110D12] p-3 rounded-xl border border-[#EF4444]/15"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[9px] text-[#EF4444] uppercase tracking-wider flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-ping" />
                          LIVE PARSING...
                        </span>
                      </div>
                      <p className="font-sans text-xs text-[#F5F5F0] leading-relaxed">
                        {highlightTriggers(visibleSentence)}
                      </p>
                    </motion.div>
                  )}
                  <div ref={transcriptionEndRef} />
                </div>
              )}
            </div>

            {/* KIRA Real-time Threat Overlay Box */}
            <AnimatePresence>
              {threatLevel >= 75 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="mt-4 p-4 rounded-xl bg-[#7F1D1D]/40 border border-[#EF4444]/40 flex items-center gap-3 z-10"
                >
                  <AlertTriangle className="w-5 h-5 text-[#EF4444] shrink-0 animate-bounce" />
                  <div className="text-left">
                    <p className="font-mono text-[10px] font-black text-[#EF4444] uppercase tracking-wider">
                      {warningBubbleLabel}
                    </p>
                    <p className="font-sans text-[11px] text-gray-300 leading-normal mt-0.5">
                      {(language === "ru" ? "Фраз обнаружено: " : "Threat triggers matching: ") + currentScenario.triggers.slice(0, currentSentenceIdx + 1).length + (language === "ru" ? ". Запущен процесс экстренного глушения семантики." : ". Active intercept loop deployed.")}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Simulation Controls Footer */}
            <div className="grid grid-cols-2 gap-3 mt-6 z-10">
              <button
                onClick={startSimulation}
                disabled={isPlaying || currentSentenceIdx !== -1}
                className={`py-3 px-4 rounded-xl font-sans text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isPlaying || currentSentenceIdx !== -1
                    ? "bg-gray-800 text-gray-500 border border-transparent cursor-not-allowed"
                    : "bg-[#2E7DFF] text-[#F5F5F0] hover:bg-[#2E7DFF]/90 cursor-pointer shadow-[0_0_15px_rgba(46,125,255,0.2)] hover:shadow-[0_0_20px_rgba(46,125,255,0.4)]"
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                {btnStart}
              </button>
              <button
                onClick={resetSimulation}
                className="py-3 px-4 rounded-xl font-sans text-xs font-bold bg-[#111216] border border-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.02] cursor-pointer transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {btnReset}
              </button>
            </div>

          </div>

          {/* NEURAL HUD AND LOGS COLUMN (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* THREAT CLIMBER HUD */}
            <div className="p-6 rounded-3xl bg-[#090A0E] border border-white/[0.04]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {threatMeterLabel}
                </h4>
                <span className={`font-mono text-xs font-black ${threatLevel >= 75 ? "text-[#EF4444]" : threatLevel >= 40 ? "text-amber-500" : "text-[#2E7DFF]"}`}>
                  {threatLevel}% THREAT_LEVEL
                </span>
              </div>
              
              {/* Dynamic Progress Bar */}
              <div className="w-full h-3.5 bg-[#030406] rounded-full overflow-hidden border border-white/[0.02] p-[2px]">
                <motion.div 
                  className={`w-full h-full rounded-full origin-left ${threatLevel >= 75 ? "bg-[#EF4444]" : threatLevel >= 40 ? "bg-amber-500" : "bg-[#2E7DFF]"} shadow-[0_0_12px_currentColor]`}
                  initial={{ scaleX: 0.05 }}
                  animate={{ scaleX: threatLevel / 100 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              {/* Secure Shield Confirmation */}
              {threatLevel >= 95 && (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-4 p-3 rounded-xl bg-[#101B2B] border border-[#2E7DFF]/30 flex items-center justify-center gap-2.5"
                >
                  <ShieldCheck className="w-4 h-4 text-[#2E7DFF] animate-pulse" />
                  <span className="font-mono text-[10px] font-black tracking-wider text-[#2E7DFF] uppercase">
                    {simulationFinishedLabel}
                  </span>
                </motion.div>
              )}
            </div>

            {/* 7 LAYER PIPELINE STATUS TRACKER */}
            <div className="p-6 rounded-3xl bg-[#090A0E] border border-white/[0.04] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {sui.statusHeader}
                  </h4>
                  <span className="font-mono text-[10px] text-gray-500">
                    {activeLayersCount}/7 ACTIVE
                  </span>
                </div>

                <div className="space-y-2.5">
                  {layers.map((layerLabel, index) => {
                    const isActive = index < activeLayersCount;
                    const isScanning = index === activeLayersCount && isPlaying;
                    const isThreatLayer = index >= 2 && index < 5 && threatLevel >= 50; // Middle layers highlighting threat
                    
                    return (
                      <div 
                        key={index}
                        className={`p-2.5 sm:p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                          isActive 
                            ? isThreatLayer && threatLevel >= 75
                              ? "bg-[#2E1010]/50 border-[#EF4444]/40 shadow-[0_0_8px_rgba(239,68,68,0.15)]"
                              : "bg-[#0B1527]/60 border-[#2E7DFF]/35" 
                            : isScanning
                              ? "bg-white/[0.01] border-[#2E7DFF]/30 animate-pulse"
                              : "bg-transparent border-white/[0.02]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2.5 h-2.5 rounded-full ${
                            isActive
                              ? isThreatLayer && threatLevel >= 75
                                ? "bg-[#EF4444]"
                                : "bg-[#2E7DFF]"
                              : isScanning
                                ? "bg-amber-400 animate-ping"
                                : "bg-gray-800"
                          }`} />
                          <span className={`font-mono text-[10px] sm:text-xs tracking-tight ${
                            isActive
                              ? isThreatLayer && threatLevel >= 75
                                ? "text-[#EF4444] font-semibold"
                                : "text-gray-200"
                              : "text-gray-500"
                          }`}>
                            {layerLabel}
                          </span>
                        </div>

                        <span className={`font-mono text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded ${
                          isActive
                            ? isThreatLayer && threatLevel >= 75
                              ? "bg-[#EF4444]/15 text-[#EF4444]"
                              : "bg-[#2E7DFF]/15 text-[#2E7DFF]"
                            : isScanning
                              ? "bg-amber-400/10 text-amber-400"
                              : "bg-transparent text-gray-700"
                        }`}>
                          {isActive 
                            ? isThreatLayer && threatLevel >= 75 ? "ALERT" : "VERIFIED" 
                            : isScanning ? "SCANNING" : "STANDBY"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* REAL-TIME ENCRYPTED TERMINAL CONSOLE */}
            <div className="p-5 rounded-3xl bg-[#030406] border border-white/[0.04] h-48 flex flex-col justify-between">
              <div className="flex items-center gap-2 border-b border-white/[0.04] pb-2 mb-2">
                <Terminal className="w-4 h-4 text-gray-500" />
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-semibold">
                  {logsLabel}
                </span>
                <span className="ml-auto w-2 h-2 rounded-full bg-[#2E7DFF] animate-ping" />
              </div>

              <div className="flex-1 overflow-y-auto font-mono text-[10px] text-gray-400 text-left space-y-1.5 scrollbar-thin">
                {consoleLogs.map((log, index) => {
                  let colorClass = "text-gray-400";
                  if (log.startsWith("[OK]")) colorClass = "text-[#2E7DFF]";
                  else if (log.startsWith("[SUCCESS]") || log.startsWith("[DOME")) colorClass = "text-[#10B981] font-bold";
                  else if (log.startsWith("[WARN]")) colorClass = "text-amber-500";
                  else if (log.startsWith("[CRITICAL]") || log.startsWith("[ALERT]") || log.startsWith("[BLOCKED]")) colorClass = "text-[#EF4444] font-black";

                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`leading-normal ${colorClass}`}
                    >
                      {log}
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
});

export default LiveSimulatorSection;
