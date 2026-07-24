import { LanguageCode } from "../languages";

export const sevenLayers: Partial<Record<LanguageCode, Array<{ name: string; tech: string; desc: string }>>> = {
  ru: [
    { name: "Быстрые эвристики (HeuristicsLayer)", tech: "Regex & Signature Maps", desc: "Первичный мгновенный фильтр входящих потоков. Блокирует известные паттерны спам-сетей, подозрительные ссылки и сигнатуры мошеннических скриптов без нагрузки на батарею." },
    { name: "Нейросетевой классификатор (BertPhantomClassifier)", tech: "ONNX Runtime / 28.4 MB Local Model", desc: "Локальный мультимодальный анализ (анализ текста, голоса, поведения на экране, сетевого трафика). Нейросеть rubert-tiny2 обрабатывает данные строго на устройстве, отдельно от алгоритмов консенсуса." },
    { name: "Сценарии социнженерии (Social Eng. Layer)", tech: "DeGenome (18 примитивов)", desc: "Выявляет таксономию манипуляций по 18 примитивам DeGenome: искусственная спешка, запугивание, требования конфиденциальности и эмоциональный прессинг." },
    { name: "Поведенческий анализ (Behavioral Layer)", tech: "Context-Aware State Machine", desc: "Следит за динамикой взаимодействия в реальном времени: скорость набора текста, задержки ответов во время разговора, частота переходов между экранами мобильного банка." },
    { name: "Репутационный контур (Reputation Layer)", tech: "PCD Identity Profiles", desc: "Сверяет манеру общения звонящего с профилями поведенческой идентичности организаций (кто, когда и в каком тоне действительно имеет право звонить от лица банка или ведомства)." },
    { name: "Консенсус и принятие решений (Consensus Agent)", tech: "Consensus Voting Engine", desc: "Алгоритм консенсуса JudgeAgent, независимый от нейросетей. Взвешивает оценки со всех уровней системы, при угрозе блокирует действия и оповещает доверенные контакты." },
    { name: "Иммунная память (Immune Memory)", tech: "Adaptive Incident Shield", desc: "Долгосрочная изолированная память об атаках. Локально адаптирует и дообучает профили защиты на основе предотвращённых инцидентов для защиты от будущих разновидностей угроз." }
  ],
  en: [
    { name: "Fast Heuristics (HeuristicsLayer)", tech: "Regex & Signature Maps", desc: "An instant, lightweight filter for incoming data streams. Blocks known spam-networks, phishing links, and malicious automation patterns without draining battery power." },
    { name: "Neural Classification (BertPhantomClassifier)", tech: "ONNX Runtime / 28.4 MB Local Model", desc: "Local real-time multimodal analysis (text, voice, screen behavior, and network traffic). The rubert-tiny2 on-device neural network operates strictly offline, separate from consensus voting algorithms." },
    { name: "Social Engineering (Social Eng. Layer)", tech: "DeGenome (18 Primitives)", desc: "Identifies manipulation tactics using the DeGenome taxonomy of 18 primitives, uncovering artificial urgency, pressure speech, fear triggers, and isolation requests." },
    { name: "Behavioral Auditing (Behavioral Layer)", tech: "Context-Aware State Machine", desc: "Continuously tracks live user interactions: typing cadence, cognitive processing delays, and switching frequencies between financial and calling apps during a live call." },
    { name: "Reputation Verification (Reputation Layer)", tech: "PCD Identity Profiles", desc: "Cross-checks caller traits with Corporate identity profiles (PCD), identifying when speech patterns and caller actions mismatch official protocols." },
    { name: "Consensus Resolution (Consensus Agent)", tech: "Consensus Voting Engine", desc: "A dedicated consensus voting algorithm (JudgeAgent), independent of the neural networks. It aggregates risk markers from all levels to lock executions and send alerts." },
    { name: "Immune Memory", tech: "Adaptive Incident Shield", desc: "Localized secure attack repository. Enables on-device, zero-leakage fine-tuning of security filters based on recently mitigated threats to handle upcoming attack variations." }
  ],
  es: [
    { name: "Heurística rápida (HeuristicsLayer)", tech: "Regex & Signature Maps", desc: "Un filtro instantáneo y ligero para flujos de datos entrantes. Bloquea redes de spam conocidas, enlaces de phishing y patrones de automatización maliciosos sin agotar la batería." },
    { name: "Clasificación neuronal (BertPhantomClassifier)", tech: "ONNX Runtime / 28.4 MB Local Model", desc: "Una red neuronal rubert-tiny2 comprimida que analiza transcripciones de llamadas y textos en tiempo real. Detecta guiones conversacionales ocultos, manipulación y roles como 'cuenta segura'." },
    { name: "Ingeniería social (Social Eng. Layer)", tech: "DeGenome (18 Primitives)", desc: "Identifica tácticas de manipulación utilizando la taxonomía DeGenome de 18 primitivas, descubriendo urgencia artificial, discursos de presión, desencadenantes de miedo y solicitudes de aislamiento." },
    { name: "Auditoría de comportamiento (Behavioral Layer)", tech: "Context-Aware State Machine", desc: "Realiza un seguimiento continuo de las interacciones del usuario en vivo: cadencia de escritura, retrasos en el procesamiento cognitivo y frecuencias de cambio entre aplicaciones financieras y de llamadas." },
    { name: "Verificación de reputación (Reputation Layer)", tech: "PCD Identity Profiles", desc: "Verifica las características del llamador con perfiles de identidad corporativa (PCD), identificando cuando los patrones de habla y las acciones no coinciden con los protocolos oficiales." },
    { name: "Resolución de consenso (Consensus Agent)", tech: "Consensus Voting Engine", desc: "Un motor de consenso JudgeAgent que agrega marcadores de riesgo de todos los niveles. Al identificar umbrales de amenaza, bloquea la ejecución, alerta al usuario y activa contactos de confianza." },
    { name: "Memoria inmune (Immune Memory)", tech: "Adaptive Incident Shield", desc: "Repositorio local seguro de ataques. Permite el ajuste fino en el dispositivo sin fugas basado en amenazas mitigadas recientemente para manejar futuras variaciones de ataques." }
  ],
  zh: [
    { name: "快速启发式分析 (HeuristicsLayer)", tech: "Regex & Signature Maps", desc: "对输入数据流进行即时、轻量级的过滤。在不消耗电池电量的情况下，阻止已知的垃圾邮件网络、钓鱼链接和恶意自动化模式。" },
    { name: "神经网络分类 (BertPhantomClassifier)", tech: "ONNX Runtime / 28.4 MB Local Model", desc: "一个压缩的 rubert-tiny2 神经网络，实时分析通话记录和文本。检测隐藏的对话脚本、操纵行为和诸如“安全账户”之类扮演的角色。" },
    { name: "社会工程学分析 (Social Eng. Layer)", tech: "DeGenome (18基元)", desc: "使用包含18个基元的 DeGenome 分类法识别操纵策略，揭示人为制造的紧迫感、施压言论、恐惧触发因素和孤立请求。" },
    { name: "行为审计 (Behavioral Layer)", tech: "Context-Aware State Machine", desc: "持续跟踪用户的实时交互：打字节奏、认知处理延迟以及通话期间在金融应用和通话应用之间的切换频率。" },
    { name: "信誉验证 (Reputation Layer)", tech: "PCD Identity Profiles", desc: "将呼叫者特征与企业身份配置文件 (PCD) 进行交叉比对，识别言语模式和呼叫者行为与官方协议不匹配的情况。" },
    { name: "共识决策 (Consensus Agent)", tech: "Consensus Voting Engine", desc: "一个 JudgeAgent 共识引擎，汇总来自所有层级的风险标记。一旦确定达到威胁阈值，它将锁定执行，警告用户并触发受信联系人。" },
    { name: "免疫记忆 (Immune Memory)", tech: "Adaptive Incident Shield", desc: "本地安全的攻击存储库。允许基于最近缓解的威胁进行设备端零泄露安全微调，以应对未来的攻击变体。" }
  ],
  hi: [
    { name: "त्वरित हेयुरिस्टिक्स (HeuristicsLayer)", tech: "Regex & Signature Maps", desc: "आने वाले डेटा स्ट्रीम के लिए एक त्वरित, हल्का फ़िल्टर। बिना बैटरी खर्च किए ज्ञात स्पैम-नेटवर्क, फ़िशिंग लिंक और दुर्भावनापूर्ण ऑटोमेशन पैटर्न को रोकता है।" },
    { name: "न्यूरल वर्गीकरण (BertPhantomClassifier)", tech: "ONNX Runtime / 28.4 MB Local Model", desc: "एक संपीड़ित rubert-tiny2 न्यूरल नेटवर्क जो वास्तविक समय में कॉल ट्रांसक्रिप्ट और टेक्स्ट का विश्लेषण करता है। छिपी हुई बातचीत की स्क्रिप्ट, हेरफेर और 'सुरक्षित खाता' जैसी भूमिकाओं का पता लगाता है।" },
    { name: "सोशल इंजीनियरिंग (Social Eng. Layer)", tech: "DeGenome (18 प्रिमिटिव्स)", desc: "18 प्रिमिटिव्स के DeGenome वर्गीकरण का उपयोग करके हेरफेर की रणनीति की पहचान करता है, कृत्रिम तात्कालिकता, दबाव वाले भाषण, डर के ट्रिगर्स और अलगाव के अनुरोधों को उजागर करता है।" },
    { name: "व्यवहार ऑडिटिंग (Behavioral Layer)", tech: "Context-Aware State Machine", desc: "लाइव उपयोगकर्ता इंटरैक्शन को लगातार ट्रैक करता है: टाइपिंग की गति, संज्ञानात्मक प्रसंस्करण में देरी, और लाइव कॉल के दौरान वित्तीय और कॉलिंग ऐप के बीच स्विच करने की आवृत्ति।" },
    { name: "प्रतिष्ठा सत्यापन (Reputation Layer)", tech: "PCD Identity Profiles", desc: "कॉलर के लक्षणों को कॉर्पोरेट पहचान प्रोफाइल (PCD) के साथ क्रॉस-चेक करता है, यह पहचानता है कि भाषण पैटर्न और कॉलर की कार्रवाई आधिकारिक प्रोटोकॉल से कब मेल नहीं खाती है।" },
    { name: "सर्वसम्मতি समाधान (Consensus Agent)", tech: "Consensus Voting Engine", desc: "एक JudgeAgent सर्वसम्मति इंजन जो सभी स्तरों से जोखिम मार्करों को एकत्रित करता है। खतरे की सीमा की पहचान होने पर, यह निष्पादन को लॉक करता, उपयोगकर्ता को सचेत करता है, और विश्वसनीय संपर्कों को ट्रिगर करता है।" },
    { name: "प्रतिरक्षा मेमोरी (Immune Memory)", tech: "Adaptive Incident Shield", desc: "स्थानीय सुरक्षित हमला रिपॉजिटरी। आगामी हमले के रूपों को संभालने के लिए हाल ही में कम किए गए खतरों के आधार पर ऑन-डिवाइस, शून्य-लीकेज सुरक्षा फ़िल्टर के फाइन-ट्यूनिंग को सक्षम बनाता है।" }
  ],
  ar: [
    { name: "الاستدلال السريع (HeuristicsLayer)", tech: "Regex & Signature Maps", desc: "فلتر فوري وخفيف لتدفقات البيانات الواردة. يحظر شبكات البريد العشوائي المعروفة، وروابط التصيد الاحتيالي، وأنماط الأتمتة الخبيثة دون استهلاك البطارية." },
    { name: "التصنيف العصبي (BertPhantomClassifier)", tech: "ONNX Runtime / 28.4 MB Local Model", desc: "شبكة عصبية مضغوطة من طراز rubert-tiny2 تحلل النصوص والمكالمات في الوقت الفعلي. تكتشف سيناريوهات الحوار المخفية، والتلاعب، وأدوار مثل 'الحساب الآمن'." },
    { name: "الهندسة الاجتماعية (Social Eng. Layer)", tech: "DeGenome (18 عنصرًا أساسيًا)", desc: "تحدد تكتيكات التلاعب باستخدام تصنيف DeGenome المكون من 18 عنصرًا أساسيًا، وتكشف عن الاستعجال المصطنع، وخطاب الضغط، ومثيرات الخوف، وطلبات العزل." },
    { name: "التدقيق السلوكي (Behavioral Layer)", tech: "Context-Aware State Machine", desc: "يتتبع تفاعلات المستخدم المباشرة باستمرار: سرعة الكتابة، والتأخير المعرفي، وتكرار التنقل بين التطبيقات المصرفية وتطبيقات الاتصال أثناء المكالمة المباشرة." },
    { name: "التحقق من السمعة (Reputation Layer)", tech: "PCD Identity Profiles", desc: "يطابق سمات المتصل مع ملفات الهوية المؤسسية (PCD)، ويكتشف عدم تطابق أنماط التحدث وإجراءات المتصل مع البروتوكولات الرسمية." },
    { name: "حل التوافق (Consensus Agent)", tech: "Consensus Voting Engine", desc: "محرك توافق JudgeAgent يجمع مؤشرات الخطر من جميع المستويات. عند تحديد عتبات التهديد، فإنه يقفل الواجهة، وينبه المستخدم، وينبه جهات الاتصال الموثوقة." },
    { name: "الذاكرة المناعية (Immune Memory)", tech: "Adaptive Incident Shield", desc: "مستودع محلي آمن للهجمات. يتيح ضبط فلاتر الأمان محليًا على الجهاز دون أي تسريب وبناءً على التهديدات التي تم تقليلها مؤخرًا للتعامل مع أنواع الهجمات المستقبلية." }
  ],
  pt: [
    { name: "Heurísticas rápidas (HeuristicsLayer)", tech: "Regex & Signature Maps", desc: "Um filtro instantâneo e leve para fluxos de dados recebidos. Bloqueia redes de spam conhecidas, links suspeitos e assinaturas de scripts fraudulentos sem consumir bateria." },
    { name: "Classificação neuronal (BertPhantomClassifier)", tech: "ONNX Runtime / 28.4 MB Local Model", desc: "Uma rede neural rubert-tiny2 compactada que analisa a semântica da chamada ou texto da mensagem em tempo real. Detecta manipulação oculta, cenários de encenação ('conta segura', 'parente em apuros')." },
    { name: "Engenharia social (Social Eng. Layer)", tech: "DeGenome (18 primitivas)", desc: "Identifica táticas de manipulação usando a taxonomia DeGenome de 18 primitivas: pressa artificial, intimidação, exigências de confidencialidade e pressão emocional." },
    { name: "Análise comportamental (Behavioral Layer)", tech: "Context-Aware State Machine", desc: "Monitora a dinâmica da interação em tempo real: velocidade de digitação, atrasos de resposta e frequência de troca para aplicativos bancários durante uma chamada ativa." },
    { name: "Verificação de reputação (Reputation Layer)", tech: "PCD Identity Profiles", desc: "Compara as características do chamador com perfis de identidade corporativa (PCD), identificando quando os padrões de fala e as ações não condizem com os oficiais." },
    { name: "Consenso PHANTOM (Consensus Agent)", tech: "Consensus Voting Engine", desc: "O mecanismo de votação JudgeAgent pondera as avaliações de todos os níveis. Ao suspeitar de uma ameaça, bloqueia a ação perigosa, avisa o usuário e notifica os contatos de confiança." },
    { name: "Memoria imune (Immune Memory)", tech: "Adaptive Incident Shield", desc: "Memória isolada de longo prazo de ataques. Adapta e refina localmente os perfis de proteção com base em incidentes evitados para proteger contra futuras variações de ameaças." }
  ],
  fr: [
    { name: "Heuristiques rapides (HeuristicsLayer)", tech: "Regex & Signature Maps", desc: "Un filtre instantané et léger pour les flux de données entrants. Bloque les réseaux de spam connus, les liens suspects et les scripts frauduleux sans consommer de bourse." },
    { name: "Classification neuronale (BertPhantomClassifier)", tech: "ONNX Runtime / 28.4 MB Local Model", desc: "Un réseau de neurones compressé rubert-tiny2 analysant la sémantique de l'appel ou du message en temps réel. Détecte les manipulations cachées et scénarios de rôles (« compte sécurisé »)." },
    { name: "Ingénierie sociale (Social Eng. Layer)", tech: "DeGenome (18 primitives)", desc: "Identifie les tactiques de manipulation via la taxonomie DeGenome de 18 primitives : urgence artificielle, discours de pression, déclencheurs de peur et demandes d'isolement." },
    { name: "Analyse comportementale (Behavioral Layer)", tech: "Context-Aware State Machine", desc: "Suit la dynamique des interactions en direct : vitesse de frappe, délais de traitement cognitif et bascules vers les applications bancaires pendant un appel." },
    { name: "Vérification de réputation (Reputation Layer)", tech: "PCD Identity Profiles", desc: "Vérifie les traits de l'appelant par rapport aux profils d'identité d'entreprise (PCD), détectant les écarts entre les schémas de parole et les protocoles officiels." },
    { name: "Résolution par consensus (Consensus Agent)", tech: "Consensus Voting Engine", desc: "Un moteur de consensus JudgeAgent agrégeant les marqueurs de risque de tous niveaux. En cas de menace avérée, il verrouille l'interface, alerte l'utilisateur et prévient les contacts de confiance." },
    { name: "Mémoire immunitaire (Immune Memory)", tech: "Adaptive Incident Shield", desc: "Répertoire local sécurisé des attaques. Permet un ajustement fin sans fuite sur l'appareil à partir des menaces récemment atténuées pour parer aux futures variantes d'attaques." }
  ],
  de: [
    { name: "Schnelle Heuristiken (HeuristicsLayer)", tech: "Regex & Signature Maps", desc: "Ein sofortiger, leichtgewichtiger Filter für eingehende Datenströme. Blockiert bekannte Spam-Netzwerke, Phishing-Links und bösartige Automatisierungsmuster ohne Akkubelastung." },
    { name: "Neuronale Klassifikation (BertPhantomClassifier)", tech: "ONNX Runtime / 28.4 MB Local Model", desc: "Ein komprimiertes rubert-tiny2 neuronales Netz, das Anrufe und Texte in Echtzeit analysiert. Erkennt versteckte Gesprächsskripte, Manipulationen und Rollen wie „sicheres Konto“." },
    { name: "Social Engineering (Social Eng. Layer)", tech: "DeGenome (18 Primitive)", desc: "Identifiziert Manipulationstaktiken mithilfe der DeGenome-Taxonomie von 18 Primitiven: künstliche Dringlichkeit, Druckreden, Angstauslöser und Isolationsaufforderungen." },
    { name: "Verhaltensanalyse (Behavioral Layer)", tech: "Context-Aware State Machine", desc: "Verfolgt kontinuierlich Live-Nutzerinteraktionen: Tippgeschwindigkeit, verhaltensorientierte Verarbeitungsverzögerungen und die Häufigkeit des Wechsels zu Banking-Apps während eines Anrufs." },
    { name: "Reputationsüberprüfung (Reputation Layer)", tech: "PCD Identity Profiles", desc: "Gleicht Anrufermerkmale mit Unternehmensidentitätsprofilen (PCD) ab und erkennt Abweichungen zwischen Sprechmustern und offiziellen Protokollen." },
    { name: "Konsens-Entscheidung (Consensus Agent)", tech: "Consensus Voting Engine", desc: "Eine JudgeAgent-Konsens-Engine, die Risikomarker aus allen Ebenen aggregiert. Bei Angriffsverdacht sperrt sie die Ausführung, warnt den Nutzer und benachrichtigt Vertrauenskontakte." },
    { name: "Immungedächtnis (Immune Memory)", tech: "Adaptive Incident Shield", desc: "Lokaler sicherer Angriffsspeicher. Ermöglicht die geräteinterne, leckagefreie Feinabstimmung von Sicherheitsfiltern basierend auf kürzlich abgewehrten Bedrohungen." }
  ],
  ja: [
    { name: "高速ヒューリスティック (HeuristicsLayer)", tech: "Regex & Signature Maps", desc: "受信データストリームに対する即時・軽量フィルター。バッテリーを消費せず、既知のスパムネットワーク、フィッシングリンク、悪意ある自動化パターンを遮断します。" },
    { name: "ニューラル分類 (BertPhantomClassifier)", tech: "ONNX Runtime / 28.4 MB Local Model", desc: "リアルタイムで通話音声やテキストを解析する圧縮版 rubert-tiny2 ニューラルネットワーク。隠された誘導手口や、「安全な口座」といった役割を検出します。" },
    { name: "ソーシャルエンジニアリング (Social Eng. Layer)", tech: "DeGenome (18プリミティブ)", desc: "18のプリミティブからなる DeGenome 分類法を用いて操作手口を特定し、人工的な緊急性、強迫言動、恐怖トリガー、孤立要請を暴きます。" },
    { name: "行動監査 (Behavioral Layer)", tech: "Context-Aware State Machine", desc: "リアルタイムのユーザー操作（タイピングリズム、認知処理の遅延、通話中の金融アプリと通話アプリ間の切り替え頻度）を継続的に追跡します。" },
    { name: "評判検証 (Reputation Layer)", tech: "PCD Identity Profiles", desc: "発信者の特徴を企業アイデンティティプロファイル（PCD）と照合し、話し方のパターンや発信者の行動が公式プロトコルと一致しないケースを特定します。" },
    { name: "合意形成 (Consensus Agent)", tech: "Consensus Voting Engine", desc: "すべての階層からのリスクマーカーを集計する JudgeAgent 合意形成エンジン。脅威しきい値を特定すると、実行をロックし、ユーザーに警告し、信頼できる連絡先をトリガーします。" },
    { name: "免疫記憶 (Immune Memory)", tech: "Adaptive Incident Shield", desc: "ローカライズされた安全な攻撃リポジトリ。最近緩和された脅威に基づいて、デバイス上のゼロリークのセキュリティフィルターの微調整を可能にし、今後の攻撃バリエーションに対処します。" }
  ],
  tr: [
    { name: "Hızlı Sezgisel Analiz (HeuristicsLayer)", tech: "Regex & Signature Maps", desc: "Gelen veri akışları için anında, hafif bir filtre. Pil gücünü tüketmeden bilinen spam ağlarını, kimlik avı bağlantılarını ve kötü amaçlı otomasyon kalıplarını engeller." },
    { name: "Sinirsel Sınıflandırma (BertPhantomClassifier)", tech: "ONNX Runtime / 28.4 MB Local Model", desc: "Yerel gerçek zamanlı multimodal analiz (metin, ses, ekran davranışı ve ağ trafiği). Cihaz içi rubert-tiny2 sinir ağı, mutabakat oylama algoritmalarından ayrı olarak kesinlikle çevrimdışı çalışır." },
    { name: "Sosyal Mühendislik (Social Eng. Layer)", tech: "DeGenome (18 Primitives)", desc: "18 ilkel öğeden oluşan DeGenome taksonomisini kullanarak manipülasyon taktiklerini tanımlar; yapay aciliyet, baskılı konuşma, korku tetikleyicileri ve izole etme taleplerini açığa çıkarır." },
    { name: "Davranışsal Denetim (Behavioral Layer)", tech: "Context-Aware State Machine", desc: "Canlı kullanıcı etkileşimlerini sürekli olarak izler: yazma ritmi, bilişsel işlem gecikmeleri ve canlı bir arama sırasında finansal uygulamalar ile arama uygulamaları arasındaki geçiş sıklıkları." },
    { name: "İtibar Doğrulama (Reputation Layer)", tech: "PCD Identity Profiles", desc: "Arayan kişinin özelliklerini Kurumsal kimlik profilleriyle (PCD) çapraz kontrol ederek konuşma kalıplarının ve arayan eylemlerinin resmi protokollerle eşleşmediği durumları belirler." },
    { name: "Mutabakat Kararı (Consensus Agent)", tech: "Consensus Voting Engine", desc: "Sinir ağlarından bağımsız, özel bir mutabakat oylama algoritması (JudgeAgent). Yürütmeleri kilitlemek ve uyarılar göndermek için tüm seviyelerden gelen risk belirteçlerini toplar." },
    { name: "Bağışıklık Belleği (Immune Memory)", tech: "Adaptive Incident Shield", desc: "Yerelleştirilmiş güvenli saldırı deposu. Gelecekteki saldırı varyasyonlarıyla başa çıkmak için son zamanlarda azaltılan tehditlere dayanarak güvenlik filtrelerinin cihaz içi, sıfır sızıntılı hassas ayarlanmasını sağlar." }
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
