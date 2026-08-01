import { LanguageCode } from "../languages";

export const sevenLayers: Partial<Record<LanguageCode, Array<{ name: string; tech: string; desc: string }>>> = {
  ru: [
    { name: "Акустический анализ (Сейчас работает)", tech: "RMS / Zero-Crossing / Silence / Energy", desc: "Акустический анализ звонка в реальном времени на устройстве: анализ голоса и интонаций, темпа речи, пауз и энергетических паттернов разговора. Без передачи данных на сервер." },
    { name: "ML-классификация (rubert-tiny2)", tech: "ONNX Runtime / INT8 / ~29 MB", desc: "Используется облегчённая нейросеть rubert-tiny2 (ONNX INT8, ~29 МБ) для анализа текста и метаданных на устройстве. Обновления моделей и баз данных поставляются вместе с обновлением приложения — интернет не требуется для повседневной работы, только для установки новых версий." },
    { name: "Распознавание речи (ASR) — В разработке (Roadmap)", tech: "ASR — Roadmap", desc: "Распознавание речи (ASR) входящего звонка. Следующий этап эволюции PHANTOM." },
    { name: "Семантический анализ содержания — В разработке (Roadmap)", tech: "DeGenome (18 примитивов) — Roadmap", desc: "Семантический анализ содержания разговора: детекция ключевых фраз-триггеров, признаков психологического давления и требований срочных действий. Следующий этап эволюции PHANTOM." },
    { name: "Репутационный контур (PCD) — В разработке (Roadmap)", tech: "PCD Identity Profiles — Roadmap", desc: "Сверяет манеру общения звонящего с профилями поведенческой идентичности организаций. В разработке (Roadmap)." },
    { name: "Сверка с базой номеров — В разработке (Roadmap)", tech: "Local Blacklist DB — Roadmap", desc: "Быстрая локальная проверка номера по базе подозрительных номеров и чёрным спискам. В разработке (Roadmap)." },
    { name: "Консенсус и итоговый вердикт (Consensus Agent — Агент консенсуса)", tech: "Consensus Voting Engine", desc: "Алгоритм консенсуса JudgeAgent, независимый от нейросетей. Взвешивает оценки со всех уровней системы, при угрозе блокирует действия и оповещает доверенные контакты." }
  ],
  en: [
    { name: "Acoustic Analysis (Live)", tech: "RMS / Zero-Crossing / Silence / Energy", desc: "Real-time on-device acoustic analysis of the call: voice and intonations, speech tempo, pauses, and energy patterns of the conversation. No data is sent to any server." },
    { name: "ML Classification (rubert-tiny2)", tech: "ONNX Runtime / INT8 / ~29 MB", desc: "Uses the lightweight rubert-tiny2 neural network (ONNX INT8, ~29 MB) to analyze text and metadata on-device. Model and database updates ship with app updates — no internet is required for daily use, only to install new versions." },
    { name: "Speech Recognition (ASR) — Roadmap", tech: "ASR — Roadmap", desc: "Speech recognition (ASR) of the incoming call. The next stage of PHANTOM's evolution." },
    { name: "Semantic Content Analysis — Roadmap", tech: "DeGenome (18 Primitives) — Roadmap", desc: "Semantic analysis of the conversation's content: detection of key trigger phrases, signs of psychological pressure, and demands for urgent action. The next stage of PHANTOM's evolution." },
    { name: "Reputation Verification (PCD) — Roadmap", tech: "PCD Identity Profiles — Roadmap", desc: "Cross-checks the caller's manner of speech against corporate identity profiles (PCD). In development (Roadmap)." },
    { name: "Number Blacklist Check — Roadmap", tech: "Local Blacklist DB — Roadmap", desc: "A fast local check of the number against a database of suspicious numbers and blacklists. In development (Roadmap)." },
    { name: "Consensus & Final Verdict (Consensus Agent)", tech: "Consensus Voting Engine", desc: "A dedicated consensus voting algorithm (JudgeAgent), independent of the neural networks. It aggregates risk markers from all levels to lock dangerous actions and alert trusted contacts." }
  ],
  es: [
    { name: "Análisis acústico (Activo)", tech: "RMS / Zero-Crossing / Silence / Energy", desc: "Análisis acústico de la llamada en tiempo real en el dispositivo: análisis de la voz y las entonaciones, el ritmo del habla, las pausas y los patrones energéticos de la conversación. Sin envío de datos al servidor." },
    { name: "Clasificación ML (rubert-tiny2)", tech: "ONNX Runtime / INT8 / ~29 MB", desc: "Se utiliza una red neuronal ligera rubert-tiny2 (ONNX INT8, ~29 MB) para analizar texto y metadatos en el dispositivo. Las actualizaciones de modelos y bases de datos llegan con la actualización de la app; no se requiere internet para el uso diario, solo para instalar nuevas versiones." },
    { name: "Reconocimiento de voz (ASR) — En desarrollo (Roadmap)", tech: "ASR — Roadmap", desc: "Reconocimiento de voz (ASR) de la llamada entrante. La siguiente etapa de la evolución de PHANTOM." },
    { name: "Análisis semántico del contenido — En desarrollo (Roadmap)", tech: "DeGenome (18 Primitives) — Roadmap", desc: "Análisis semántico del contenido de la conversación: detección de frases clave, indicios de presión psicológica y exigencias de acciones urgentes. La siguiente etapa de la evolución de PHANTOM." },
    { name: "Verificación de reputación (PCD) — En desarrollo (Roadmap)", tech: "PCD Identity Profiles — Roadmap", desc: "Compara la forma de hablar del interlocutor con los perfiles de identidad corporativa (PCD). En desarrollo (Roadmap)." },
    { name: "Comprobación de números en lista negra — En desarrollo (Roadmap)", tech: "Local Blacklist DB — Roadmap", desc: "Verificación local rápida del número contra una base de números sospechosos y listas negras. En desarrollo (Roadmap)." },
    { name: "Resolución de consenso (Consensus Agent — Agente de consenso)", tech: "Consensus Voting Engine", desc: "Un motor de consenso JudgeAgent que agrega marcadores de riesgo de todos los niveles. Al identificar umbrales de amenaza, bloquea la ejecución, alerta al usuario y activa contactos de confianza." }
  ],
  zh: [
    { name: "声学分析（已上线）", tech: "RMS / Zero-Crossing / Silence / Energy", desc: "在设备端实时进行通话声学分析：分析声音与语调、语速、停顿以及对话的能量模式。数据绝不发送至服务器。" },
    { name: "ML 分类 (rubert-tiny2)", tech: "ONNX Runtime / INT8 / ~29 MB", desc: "使用轻量级神经网络 rubert-tiny2（ONNX INT8，约 29 MB）在设备端分析文本和元数据。模型与数据库随应用更新一起发布——日常使用无需联网，仅在安装新版本时需要。" },
    { name: "语音识别 (ASR) — 开发中 (Roadmap)", tech: "ASR — Roadmap", desc: "对来电进行语音识别（ASR）。PHANTOM 进化的下一阶段。" },
    { name: "对话内容语义分析 — 开发中 (Roadmap)", tech: "DeGenome (18基元) — Roadmap", desc: "对话内容语义分析：检测关键触发短语、心理施压迹象以及要求紧急操作的指令。PHANTOM 进化的下一阶段。" },
    { name: "信誉验证 (PCD) — 开发中 (Roadmap)", tech: "PCD Identity Profiles — Roadmap", desc: "将对方说话方式与企业身份配置文件 (PCD) 进行比对。开发中（Roadmap）。" },
    { name: "号码黑名单核验 — 开发中 (Roadmap)", tech: "Local Blacklist DB — Roadmap", desc: "在设备端快速将号码与可疑号码库及黑名单进行比对。开发中（Roadmap）。" },
    { name: "共识决策 (Consensus Agent — 共识代理)", tech: "Consensus Voting Engine", desc: "一个 JudgeAgent 共识引擎，汇总来自所有层级的风险标记。一旦确定达到威胁阈值，它将锁定执行，警告用户并触发受信联系人。" }
  ],
  hi: [
    { name: "ध्वनिक विश्लेषण (लाइव)", tech: "RMS / Zero-Crossing / Silence / Energy", desc: "कॉल का डिवाइस पर रीयल-टाइम ध्वनिक विश्लेषण: आवाज़ और स्वर-उतार-चढ़ाव, भाषण की गति, ठहराव और बातचीत के ऊर्जा पैटर्न का विश्लेषण। सर्वर पर कोई डेटा नहीं भेजा जाता।" },
    { name: "ML वर्गीकरण (rubert-tiny2)", tech: "ONNX Runtime / INT8 / ~29 MB", desc: "डिवाइस पर टेक्स्ट और मेटाडेटा का विश्लेषण करने के लिए हल्के rubert-tiny2 न्यूरल नेटवर्क (ONNX INT8, ~29 MB) का उपयोग किया जाता है। मॉडल और डेटाबेस अपडेट ऐप अपडेट के साथ आते हैं; दैनिक उपयोग के लिए इंटरनेट की आवश्यकता नहीं होती, केवल नए संस्करण स्थापित करने के लिए होती है।" },
    { name: "वाक् पहचान (ASR) — विकासाधीन (Roadmap)", tech: "ASR — Roadmap", desc: "आने वाली कॉल की वाक् पहचान (ASR)। PHANTOM विकास का अगला चरण।" },
    { name: "सामग्री का सिमेंटिक विश्लेषण — विकासाधीन (Roadmap)", tech: "DeGenome (18 प्रिमिटिव्स) — Roadmap", desc: "बातचीत की सामग्री का सिमेंटिक विश्लेषण: मुख्य ट्रिगर वाक्यांशों, मनोवैज्ञानिक दबाव के संकेतों और तत्काल कार्रवाई की मांगों का पता लगाना। PHANTOM विकास का अगला चरण।" },
    { name: "प्रतिष्ठा सत्यापन (PCD) — विकासाधीन (Roadmap)", tech: "PCD Identity Profiles — Roadmap", desc: "कॉलर के बोलने के तरीके की तुलना कॉर्पोरेट पहचान प्रोफाइल (PCD) से करता है। विकासाधीन (Roadmap)।" },
    { name: "नंबर ब्लैकलिस्ट जाँच — विकासाधीन (Roadmap)", tech: "Local Blacklist DB — Roadmap", desc: "संदिग्ध नंबरों के डेटाबेस और ब्लैकलिस्ट के विरुद्ध नंबर की त्वरित स्थानीय जाँच। विकासाधीन (Roadmap)।" },
    { name: "सर्वसम्मति समाधान (Consensus Agent — सर्वसम्मति एजेंट)", tech: "Consensus Voting Engine", desc: "एक JudgeAgent सर्वसम्मति इंजन जो सभी स्तरों से जोखिम मार्करों को एकत्रित करता है। खतरे की सीमा की पहचान होने पर, यह निष्पादन को लॉक करता, उपयोगकर्ता को सचेत करता है, और विश्वसनीय संपर्कों को ट्रिगर करता है।" }
  ],
  ar: [
    { name: "التحليل الصوتي (مفعّل)", tech: "RMS / Zero-Crossing / Silence / Energy", desc: "تحليل صوتي للمكالمة في الوقت الفعلي على الجهاز: تحليل الصوت ونبراته وإيقاع الكلام والتوقفات وأنماط الطاقة في المحادثة. دون إرسال أي بيانات إلى الخادم." },
    { name: "تصنيف التعلم الآلي (rubert-tiny2)", tech: "ONNX Runtime / INT8 / ~29 MB", desc: "تُستخدم شبكة عصبية خفيفة rubert-tiny2 (ONNX INT8، ~29 م.ب) لتحليل النصوص والبيانات الوصفية على الجهاز. تُنشر تحديثات النماذج وقواعد البيانات مع تحديث التطبيق؛ ولا يلزم الإنترنت للاستخدام اليومي، بل فقط لتثبيت إصدارات جديدة." },
    { name: "التعرف على الكلام (ASR) — قيد التطوير (Roadmap)", tech: "ASR — Roadmap", desc: "التعرف على الكلام (ASR) للمكالمة الواردة. المرحلة التالية من تطور PHANTOM." },
    { name: "التحليل الدلالي للمحتوى — قيد التطوير (Roadmap)", tech: "DeGenome (18 عنصرًا أساسيًا) — Roadmap", desc: "التحليل الدلالي لمحتوى المحادثة: كشف العبارات المفتاحية المحفزة ومؤشرات الضغط النفسي ومطالب التصرف العاجل. المرحلة التالية من تطور PHANTOM." },
    { name: "التحقق من السمعة (PCD) — قيد التطوير (Roadmap)", tech: "PCD Identity Profiles — Roadmap", desc: "يطابق أسلوب حديث المتصل مع ملفات الهوية المؤسسية (PCD). قيد التطوير (Roadmap)." },
    { name: "فحص قائمة الأرقام السوداء — قيد التطوير (Roadmap)", tech: "Local Blacklist DB — Roadmap", desc: "فحص محلي سريع للرقم مقابل قاعدة أرقام مشبوهة وقوائم سوداء. قيد التطوير (Roadmap)." },
    { name: "حل التوافق (Consensus Agent — وكيل الإجماع)", tech: "Consensus Voting Engine", desc: "محرك توافق JudgeAgent يجمع مؤشرات الخطر من جميع المستويات. عند تحديد عتبات التهديد، فإنه يقفل الواجهة، وينبه المستخدم، وينبه جهات الاتصال الموثوقة." }
  ],
  pt: [
    { name: "Análise acústica (Ativo)", tech: "RMS / Zero-Crossing / Silence / Energy", desc: "Análise acústica da chamada em tempo real no dispositivo: análise da voz e entonações, ritmo da fala, pausas e padrões de energia da conversa. Sem envio de dados ao servidor." },
    { name: "Classificação ML (rubert-tiny2)", tech: "ONNX Runtime / INT8 / ~29 MB", desc: "Usa-se a rede neural leve rubert-tiny2 (ONNX INT8, ~29 MB) para analisar texto e metadados no dispositivo. As atualizações de modelos e bancos de dados chegam com a atualização do app; não é preciso internet no uso diário, apenas para instalar novas versões." },
    { name: "Reconhecimento de fala (ASR) — Em desenvolvimento (Roadmap)", tech: "ASR — Roadmap", desc: "Reconhecimento de fala (ASR) da chamada recebida. A próxima etapa da evolução do PHANTOM." },
    { name: "Análise semântica do conteúdo — Em desenvolvimento (Roadmap)", tech: "DeGenome (18 primitivas) — Roadmap", desc: "Análise semântica do conteúdo da conversa: detecção de frases-chave disparadoras, sinais de pressão psicológica e exigências de ações urgentes. A próxima etapa da evolução do PHANTOM." },
    { name: "Verificação de reputação (PCD) — Em desenvolvimento (Roadmap)", tech: "PCD Identity Profiles — Roadmap", desc: "Compara o estilo de fala do interlocutor com perfis de identidade corporativa (PCD). Em desenvolvimento (Roadmap)." },
    { name: "Checagem de números em lista negra — Em desenvolvimento (Roadmap)", tech: "Local Blacklist DB — Roadmap", desc: "Verificação local rápida do número contra um banco de números suspeitos e listas negras. Em desenvolvimento (Roadmap)." },
    { name: "Consenso PHANTOM (Consensus Agent — Agente de consenso)", tech: "Consensus Voting Engine", desc: "O mecanismo de votação JudgeAgent pondera as avaliações de todos os níveis. Ao suspeitar de uma ameaça, bloqueia a ação perigosa, avisa o usuário e notifica os contatos de confiança." }
  ],
  fr: [
    { name: "Analyse acoustique (Active)", tech: "RMS / Zero-Crossing / Silence / Energy", desc: "Analyse acoustique de l'appel en temps réel sur l'appareil : voix et intonations, rythme de parole, pauses et profils énergétiques de la conversation. Aucune donnée n'est envoyée au serveur." },
    { name: "Classification ML (rubert-tiny2)", tech: "ONNX Runtime / INT8 / ~29 MB", desc: "Un réseau neuronal léger rubert-tiny2 (ONNX INT8, ~29 Mo) analyse texte et métadonnées sur l'appareil. Les mises à jour de modèles et de bases sont livrées avec l'application ; internet n'est pas requis au quotidien, seulement pour installer de nouvelles versions." },
    { name: "Reconnaissance vocale (ASR) — En développement (Roadmap)", tech: "ASR — Roadmap", desc: "Reconnaissance vocale (ASR) de l'appel entrant. Prochaine étape de l'évolution de PHANTOM." },
    { name: "Analyse sémantique du contenu — En développement (Roadmap)", tech: "DeGenome (18 primitives) — Roadmap", desc: "Analyse sémantique du contenu de la conversation : détection de phrases-clés déclencheurs, signes de pression psychologique et exigences d'actions urgentes. Prochaine étape de l'évolution de PHANTOM." },
    { name: "Vérification de réputation (PCD) — En développement (Roadmap)", tech: "PCD Identity Profiles — Roadmap", desc: "Compare la façon de parler de l'appelant aux profils d'identité d'entreprise (PCD). En développement (Roadmap)." },
    { name: "Contrôle de numéros en liste noire — En développement (Roadmap)", tech: "Local Blacklist DB — Roadmap", desc: "Vérification locale rapide du numéro contre une base de numéros suspects et des listes noires. En développement (Roadmap)." },
    { name: "Résolution par consensus (Consensus Agent — Agent de consensus)", tech: "Consensus Voting Engine", desc: "Un moteur de consensus JudgeAgent agrégeant les marqueurs de risque de tous niveaux. En cas de menace avérée, il verrouille l'interface, alerte l'utilisateur et prévient les contacts de confiance." }
  ],
  de: [
    { name: "Akustische Analyse (Live)", tech: "RMS / Zero-Crossing / Silence / Energy", desc: "Echtzeit-Akustikanalyse des Anrufs auf dem Gerät: Stimme und Intonation, Sprechtempo, Pausen und Energieprofile des Gesprächs. Keine Datenübertragung an Server." },
    { name: "ML-Klassifikation (rubert-tiny2)", tech: "ONNX Runtime / INT8 / ~29 MB", desc: "Ein leichtgewichtiges neuronales Netz rubert-tiny2 (ONNX INT8, ~29 MB) analysiert Text und Metadaten auf dem Gerät. Modell- und Datenbank-Updates kommen mit dem App-Update; Internet ist im Alltag nicht nötig, nur zum Installieren neuer Versionen." },
    { name: "Spracherkennung (ASR) — In Entwicklung (Roadmap)", tech: "ASR — Roadmap", desc: "Spracherkennung (ASR) des eingehenden Anrufs. Die nächste Stufe der PHANTOM-Evolution." },
    { name: "Semantische Inhaltsanalyse — In Entwicklung (Roadmap)", tech: "DeGenome (18 Primitive) — Roadmap", desc: "Semantische Analyse des Gesprächsinhalts: Erkennung von Schlüssel-Triggerphrasen, Anzeichen psychologischen Drucks und Forderungen nach sofortigem Handeln. Die nächste Stufe der PHANTOM-Evolution." },
    { name: "Reputationsprüfung (PCD) — In Entwicklung (Roadmap)", tech: "PCD Identity Profiles — Roadmap", desc: "Gleicht den Sprechstil des Anrufers mit Unternehmensidentitätsprofilen (PCD) ab. In Entwicklung (Roadmap)." },
    { name: "Nummern-Blacklist-Abgleich — In Entwicklung (Roadmap)", tech: "Local Blacklist DB — Roadmap", desc: "Schneller lokaler Abgleich der Nummer gegen eine Datenbank verdächtiger Nummern und Blacklists. In Entwicklung (Roadmap)." },
    { name: "Konsens-Entscheidung (Consensus Agent — Konsens-Agent)", tech: "Consensus Voting Engine", desc: "Eine JudgeAgent-Konsens-Engine, die Risikomarker aus allen Ebenen aggregiert. Bei Angriffsverdacht sperrt sie die Ausführung, warnt den Nutzer und benachrichtigt Vertrauenskontakte." }
  ],
  ja: [
    { name: "音響解析（稼働中）", tech: "RMS / Zero-Crossing / Silence / Energy", desc: "端末上で通話をリアルタイムに音響解析：声とイントネーション、話す速さ、間、会話のエネルギー・パターンを分析。サーバーへのデータ送信は一切ありません。" },
    { name: "ML分類（rubert-tiny2）", tech: "ONNX Runtime / INT8 / ~29 MB", desc: "軽量ニューラルネットワーク rubert-tiny2（ONNX INT8、約29MB）を端末上でテキスト・メタデータ分析に使用します。モデルとデータベースの更新はアプリ更新に同梱され、日常利用にインターネットは不要です（新バージョンのインストール時のみ必要）。" },
    { name: "音声認識（ASR）— 開発中（Roadmap）", tech: "ASR — Roadmap", desc: "着信通話の音声認識（ASR）。PHANTOM進化の次のステージ。" },
    { name: "会話内容の意味解析 — 開発中（Roadmap）", tech: "DeGenome (18プリミティブ) — Roadmap", desc: "会話内容の意味解析：重要なトリガーフレーズ、心理的圧迫の兆候、緊急対応の要求を検出します。PHANTOM進化の次のステージ。" },
    { name: "評判検証（PCD）— 開発中（Roadmap）", tech: "PCD Identity Profiles — Roadmap", desc: "発信者の話し方を企業アイデンティティプロファイル（PCD）と照合します。開発中（Roadmap）。" },
    { name: "番号ブラックリスト照合 — 開発中（Roadmap）", tech: "Local Blacklist DB — Roadmap", desc: "番号を疑わしい番号データベースやブラックリストと高速に照合します。開発中（Roadmap）。" },
    { name: "合意形成 (Consensus Agent — 合意エージェント)", tech: "Consensus Voting Engine", desc: "すべての階層からのリスクマーカーを集計する JudgeAgent 合意形成エンジン。脅威しきい値を特定すると、実行をロックし、ユーザーに警告し、信頼できる連絡先をトリガーします。" }
  ],
  tr: [
    { name: "Akustik Analiz (Aktif)", tech: "RMS / Zero-Crossing / Silence / Energy", desc: "Aramanın cihaz üzerinde gerçek zamanlı akustik analizi: ses ve tonlama, konuşma temposu, duraklamalar ve konuşmanın enerji kalıpları. Sunucuya hiçbir veri gönderilmez." },
    { name: "ML Sınıflandırma (rubert-tiny2)", tech: "ONNX Runtime / INT8 / ~29 MB", desc: "Metin ve meta verileri cihaz üzerinde analiz etmek için hafif bir rubert-tiny2 sinir ağı (ONNX INT8, ~29 MB) kullanılır. Model ve veritabanı güncellemeleri uygulama güncellemesiyle gelir; günlük kullanımda internet gerekmez, yalnızca yeni sürüm kurulumunda gerekir." },
    { name: "Konuşma Tanıma (ASR) — Geliştiriliyor (Roadmap)", tech: "ASR — Roadmap", desc: "Gelen aramanın konuşma tanıması (ASR). PHANTOM evriminin bir sonraki aşaması." },
    { name: "İçerik Semantik Analizi — Geliştiriliyor (Roadmap)", tech: "DeGenome (18 Primitives) — Roadmap", desc: "Konuşma içeriğinin semantik analizi: anahtar tetikleyici ifadelerin, psikolojik baskı belirtilerinin ve acil eylem taleplerinin tespiti. PHANTOM evriminin bir sonraki aşaması." },
    { name: "İtibar Doğrulama (PCD) — Geliştiriliyor (Roadmap)", tech: "PCD Identity Profiles — Roadmap", desc: "Arayanın konuşma tarzını kurumsal kimlik profilleriyle (PCD) karşılaştırır. Geliştiriliyor (Roadmap)." },
    { name: "Numara Kara Liste Kontrolü — Geliştiriliyor (Roadmap)", tech: "Local Blacklist DB — Roadmap", desc: "Numaranın şüpheli numaralar veritabanına ve kara listelere karşı hızlı yerel kontrolü. Geliştiriliyor (Roadmap)." },
    { name: "Mutabakat Kararı (Consensus Agent — Mutabakat Aracısı)", tech: "Consensus Voting Engine", desc: "Sinir ağlarından bağımsız, özel bir mutabakat oylama algoritması (JudgeAgent). Yürütmeleri kilitlemek ve uyarılar göndermek için tüm seviyelerden gelen risk belirteçlerini toplar." }
  ]
};

export const btnSimplified: Partial<Record<LanguageCode, string>> = {
  ru: "Упрощенная структура",
  en: "Simplified View",
  es: "Vista simplificada",
  zh: "简化视图",
  hi: "सरलीकृत दृश्य",
  ar: "عرض مبسط",
  pt: "Estrutura simplificada",
  fr: "Structure simplifiée",
  de: "Vereinfachte Struktur",
  ja: "簡易構造表示",
  tr: "Basitleştirilmiş Görünüm"
};

export const btnAdvanced: Partial<Record<LanguageCode, string>> = {
  ru: "Патентный PHANTOM 2.0 (7 слоев)",
  en: "PHANTOM 2.0 Patent (7 Layers)",
  es: "Patente PHANTOM 2.0 (7 capas)",
  zh: "PHANTOM 2.0 专利 (7层)",
  hi: "PHANTOM 2.0 पेटेंट (7 परतें)",
  ar: "براءة اختراع PHANTOM 2.0 (7 طبقات)",
  pt: "Patente PHANTOM 2.0 (7 camadas)",
  fr: "Brevet PHANTOM 2.0 (7 couches)",
  de: "PHANTOM 2.0 Patent (7 Schichten)",
  ja: "特許 PHANTOM 2.0（7レイヤー）",
  tr: "Patentli PHANTOM 2.0 (7 Katman)"
};

export const pipelineHeader: Partial<Record<LanguageCode, string>> = {
  ru: "Полные запатентованные слои PHANTOM 2.0",
  en: "Official Patented PHANTOM 2.0 Pipeline",
  es: "Canalización oficial patentada PHANTOM 2.0",
  zh: "官方专利 PHANTOM 2.0 流程",
  hi: "आधिकारिक पेटेंटेड PHANTOM 2.0 पाइपलाइन",
  ar: "مخطط حماية PHANTOM 2.0 الرسمي الحاصل على براءة اختراع",
  pt: "Camadas oficiais patenteadas do PHANTOM 2.0",
  fr: "Pipeline officiel breveté PHANTOM 2.0",
  de: "Offizielle patentierte PHANTOM 2.0 Pipeline",
  ja: "公式特許取得済み PHANTOM 2.0 パイプライン",
  tr: "Resmi Patentli PHANTOM 2.0 Hattı"
};
