import { LanguageCode } from "../languages";

export const title: Record<LanguageCode, string> = {
  ru: "Верификация проекта",
  en: "Project Verification",
  tr: "Proje Doğrulama",
  es: "Verificación del Proyecto",
  zh: "项目验证",
  hi: "परियोजना सत्यापन",
  ar: "التحقق من المشروع",
  pt: "Verificação do Projeto",
  fr: "Vérification du Projet",
  de: "Projekt-Verifizierung",
  ja: "プロジェクト検証"
};

export const subtitle: Record<LanguageCode, string> = {
  ru: "Документальные подтверждения реальной стадии разработки, научные грамоты и слепки архитектуры",
  en: "Documentary proof of active development, academic credentials, and software architecture artifacts",
  tr: "Aktif geliştirme aşamasının belgesel kanıtları, akademik kimlik bilgileri ve yazılım mimarisi belgeleri",
  es: "Prueba documental de desarrollo activo, credenciales académicas y artefactos de arquitectura de software",
  zh: "活跃开发、学术凭证及软件架构文物的证明文件",
  hi: "सक्रिय विकास, शैक्षणिक क्रेडेंशियल्स और सॉफ्टवेयर आर्किटेक्चर कलाकृतियों का दस्तावेजी प्रमाण",
  ar: "إثبات وثائقي للتطوير النشط والمؤهلات الأكاديمية ومصنوعات هندسة البرمجيات",
  pt: "Prova documental de desenvolvimento ativo, credenciais acadêmicas e artefatos de arquitetura de software",
  fr: "Preuve documentaire de développement actif, diplômes universitaires et artefacts d'architecture logicielle",
  de: "Dokumentarischer Nachweis der aktiven Entwicklung, akademische Referenzen und Artefakte der Softwarearchitektur",
  ja: "アクティブな開発、学術的資格、およびソフトウェアアーキテクチャアーティファクトの文書証明"
};

export const badge: Record<LanguageCode, string> = {
  ru: "ПОДТВЕРЖДЕНИЕ РАЗРАБОТКИ // КРЕДЕНЦИАЛЫ",
  en: "DEVELOPMENT EVIDENCE // CREDENTIALS",
  tr: "GELİŞTİRME KANITLARI // REFERANSLAR",
  es: "EVIDENCIA DE DESARROLLO // CREDENCIALES",
  zh: "开发证据 // 凭证",
  hi: "विकास साक्ष्य // क्रेडेंशियल्स",
  ar: "أدلة التطوير // الاعتمادات",
  pt: "EVIDÊNCIA DE DESENVOVIMENTO // CREDENCIAIS",
  fr: "PREUVE DE DÉVELOPPEMENT // IDENTIFIANTS",
  de: "ENTWICKLUNGSNACHWEIS // REFERENZEN",
  ja: "開発実績 // 資格情報"
};

export const devUi: Record<LanguageCode, Record<string, string>> = {
  ru: { awards: "Награды и Наука", graph: "Карта Разработки", core: "Ядро Модели", recipient: "ЛАУРЕАТ / ИССЛЕДОВАТЕЛЬ", inst: "ИНСТИТУТ", event: "НАУЧНЫЙ КОНКУРС", nodes: "УЗЛОВ СВЯЗИ", conns: "АКТИВНЫХ СВЯЗЕЙ", specs: "ХАРАКТЕРИСТИКИ ЯДРА", baseArch: "Базовая Архитектура:", params: "Количество Параметров:", latency: "Задержка Инференса:", copied: "Скопировано!", copyName: "Имя файла", dlOnnx: "Скачать ONNX" },
  en: { awards: "Awards & Science", graph: "Obsidian Map", core: "ONNX Core Engine", recipient: "RECIPIENT", inst: "INSTITUTION", event: "SCIENTIFIC EVENT", nodes: "ACTIVE NODES", conns: "TOTAL CONNECTIONS", specs: "CORE MODEL SPECIFICATIONS", baseArch: "Base Architecture:", params: "Total Parameters:", latency: "Inference Latency:", copied: "Copied!", copyName: "Copy Name", dlOnnx: "Download ONNX" },
  es: { awards: "Premios y Ciencia", graph: "Mapa de Desarrollo", core: "Motor ONNX", recipient: "RECEPTOR", inst: "INSTITUCIÓN", event: "EVENTO CIENTÍFICO", nodes: "NODOS ACTIVOS", conns: "CONEXIONES TOTALES", specs: "ESPECIFICACIONES DEL MODELO", baseArch: "Arquitectura Base:", params: "Parámetros Totales:", latency: "Latencia de Inferencia:", copied: "¡Copiado!", copyName: "Copiar Nombre", dlOnnx: "Descargar ONNX" },
  zh: { awards: "科研成果与奖项", graph: "研发图谱", core: "ONNX 核心引擎", recipient: "获奖人/研究员", inst: "研究机构", event: "学术比赛", nodes: "活跃节点", conns: "连接总数", specs: "核心模型规格", baseArch: "基础架构:", params: "参数总数:", latency: "推理延迟:", copied: "已复制!", copyName: "复制文件名", dlOnnx: "下载 ONNX" },
  tr: { awards: "Ödüller & Bilim", graph: "Geliştirme Haritası", core: "Model Çekirdeği", recipient: "ALICI / ARAŞTIRMACI", inst: "KURUM", event: "BİLİMSEL ETKİNLİK", nodes: "AKTİF DÜĞÜM", conns: "TOPLAM BAĞLANTI", specs: "ÇEKİRDEK MODEL ÖZELLİKLERİ", baseArch: "Temel Mimarisi:", params: "Toplam Parametre:", latency: "Çıkarım Gecikmesi:", copied: "Kopyalandı!", copyName: "Dosya Adı", dlOnnx: "ONNX İndir" },
  hi: { awards: "पुरस्कार और विज्ञान", graph: "विकास मानचित्र", core: "ONNX कोर इंजन", recipient: "प्राप्तकर्ता", inst: "संस्थान", event: "वैज्ञानिक कार्यक्रम", nodes: "सक्रिय नोड्स", conns: "कुल कनेक्शन", specs: "कोर मॉडल विनिर्देश", baseArch: "मूल वास्तुकला:", params: "कुल पैरामीटर:", latency: "अनुमान विलंबता:", copied: "कॉपी किया गया!", copyName: "नाम कॉपी करें", dlOnnx: "ONNX डाउनलोड करें" },
  ar: { awards: "الجوائز والعلوم", graph: "خريطة التطوير", core: "محرك ONNX الأساسي", recipient: "المتلقي / الباحث", inst: "المؤسسة", event: "الحدث العلمي", nodes: "العقد النشطة", conns: "إجمالي الاتصالات", specs: "مواصفات المحرك الأساسي", baseArch: "البنية الأساسية:", params: "إجمالي المعاملات:", latency: "زمن استجابة الاستدلال:", copied: "تم النسخ!", copyName: "نسخ اسم الملف", dlOnnx: "تنزيل ONNX" },
  pt: { awards: "Prêmios e Ciência", graph: "Mapa de Desenvolvimento", core: "Motor ONNX", recipient: "RECEPTOR", inst: "INSTITUIÇÃO", event: "EVENTO CIENTÍFICO", nodes: "NÓS ATIVOS", conns: "CONEXÕES TOTAIS", specs: "ESPECIFICAÇÕES DO MODELO", baseArch: "Arquitetura Base:", params: "Total de Parâmetros:", latency: "Latência de Inferência:", copied: "Copiado!", copyName: "Copiar Nome", dlOnnx: "Baixar ONNX" },
  fr: { awards: "Prix et Science", graph: "Carte de Développement", core: "Moteur ONNX", recipient: "LAURÉAT", inst: "INSTITUTION", event: "ÉVÉNEMENT SCIENTIFIQUE", nodes: "NŒUDS ACTIFS", conns: "CONNEXIONS TOTALES", specs: "SPÉCIFICATIONS DU MODÈLE", baseArch: "Architecture de Base:", params: "Paramètres Totaux:", latency: "Latence d'Inférence:", copied: "Copié!", copyName: "Copier le Nom", dlOnnx: "Télécharger ONNX" },
  de: { awards: "Auszeichnungen & Wissenschaft", graph: "Entwicklungs-Map", core: "ONNX-Kernmotor", recipient: "EMPFÄNGER", inst: "INSTITUTION", event: "WISSENSCHAFTLICHES EVENT", nodes: "AKTIVE KNOTEN", conns: "GESAMTVERBINDUNGEN", specs: "KERNMODELL-SPEZIFIKATIONEN", baseArch: "Basis-Architektur:", params: "Gesamtparameter:", latency: "Inferenz-Latenz:", copied: "Kopiert!", copyName: "Name kopieren", dlOnnx: "ONNX herunterladen" },
  ja: { awards: "受賞と科学", graph: "開発マップ", core: "ONNXコアエンジン", recipient: "受賞者・研究者", inst: "所属機関", event: "科学コンテスト", nodes: "アクティブノード", conns: "総接続数", specs: "コアモデル仕様", baseArch: "基本アーキテクチャ:", params: "総パラメータ数:", latency: "推論レイテンシ:", copied: "コピー完了!", copyName: "ファイル名をコピー", dlOnnx: "ONNXをダウンロード" }
};

export const awardDetails: Record<LanguageCode, { title: string, issuer: string, institution: string, recipient: string, event: string, desc: string, badge: string }> = {
  ru: {
    title: "Грамота за научные исследования",
    issuer: "Министерство образования и науки Челябинской области",
    institution: "ГБПОУ \"Челябинский радиотехнический техникум\"",
    recipient: "Питолин Михаил Евгеньевич",
    event: "III этап областного конкурса студенческих научно-исследовательских работ среди студентов профессиональных образовательных организаций Челябинской области, 2026 год.",
    desc: "Официальное признание превосходства защитных алгоритмов TrustNode в категории Информационной Безопасности. Исследование сфокусировано на семантической классификации угроз социальной инженерии в оперативной памяти мобильных устройств.",
    badge: "РЕГИОНАЛЬНЫЙ ПРИЗЕР"
  },
  en: {
    title: "Scientific Research Diploma",
    issuer: "Ministry of Education and Science of the Chelyabinsk Region",
    institution: "Chelyabinsk Radiotechnical College (ChRT)",
    recipient: "Pitolin Mikhail Evgenyevich",
    event: "Stage III of the regional competition of student scientific research papers among professional educational organizations of the Chelyabinsk Region, 2026.",
    desc: "Official recognition of the scientific excellence of TrustNode's defense algorithms in the Cybersecurity category. The research focuses on the localized semantic classification of social engineering threats in the RAM of mobile devices.",
    badge: "REGIONAL AWARD"
  },
  tr: {
    title: "Bilimsel Araştırma Diploması",
    issuer: "Chelyabinsk Bölgesi Eğitim ve Bilim Bakanlığı",
    institution: "Chelyabinsk Radyoteknik Koleji (ChRT)",
    recipient: "Pitolin Mihail Evgenyeviç",
    event: "Chelyabinsk Bölgesi mesleki eğitim kurumları arasında düzenlenen öğrenci bilimsel araştırma makaleleri bölgesel yarışmasının III. aşaması, 2026.",
    desc: "TrustNode'un savunma algoritmalarının Siber Güvenlik kategorisindeki bilimsel mükemmelliğinin resmi olarak tanınması. Araştırma, mobil cihazların RAM'indeki sosyal mühendislik tehditlerinin yerel anlamsal sınıflandırılmasına odaklanmaktadır.",
    badge: "BÖLGESEL ÖDÜL"
  },
  es: {
    title: "Diploma de Investigación Científica",
    issuer: "Ministerio de Educación y Ciencia de la Región de Cheliábinsk",
    institution: "Colegio Radiotécnico de Cheliábinsk (ChRT)",
    recipient: "Pitolin Mikhail Evgenyevich",
    event: "Fase III del concurso regional de trabajos de investigación científica estudiantil de la Región de Cheliábinsk, 2026.",
    desc: "Reconocimiento oficial de la excelencia científica de los algoritmos de defensa de TrustNode en la categoría de Ciberseguridad. La investigación se centra en la clasificación semántica localizada de amenazas de ingeniería social en la RAM de dispositivos móviles.",
    badge: "PREMIO REGIONAL"
  },
  zh: {
    title: "科研成果证书",
    issuer: "车里雅宾斯克州教育与科学部",
    institution: "车里雅宾斯克无线电技术学院 (ChRT)",
    recipient: "Pitolin Mikhail Evgenyevich",
    event: "2026年车里雅宾斯克州职业教育机构学生科研论文区域竞赛第三阶段。",
    desc: "官方认可 TrustNode 防御算法在网络安全领域的科研卓越性。该研究专注于移动设备内存中社交工程威胁的本地化语义分类。",
    badge: "区域获奖者"
  },
  hi: {
    title: "वैज्ञानिक अनुसंधान डिप्लोमा",
    issuer: "चेल्याबिंस्क क्षेत्र का शिक्षा और विज्ञान मंत्रालय",
    institution: "चेल्याबिंस्क रेडियोटेक्निकल कॉलेज (ChRT)",
    recipient: "Pitolin Mikhail Evgenyevich",
    event: "चेल्याबिंस्क क्षेत्र के व्यावसायिक शैक्षणिक संगठनों के बीच छात्र वैज्ञानिक अनुसंधान पत्रों की क्षेत्रीय प्रतियोगिता का चरण III, 2026।",
    desc: "साइबर सुरक्षा श्रेणी में TrustNode के रक्षा एल्गोरिदम की वैज्ञानिक उत्कृष्टता की आधिकारिक मान्यता। अनुसंधान मोबाइल उपकरणों के रैम में सोशल इंजीनियरिंग खतरों के स्थानीयकृत सिमेंटिक वर्गीकरण पर केंद्रित है।",
    badge: "क्षेत्रीय पुरस्कार"
  },
  ar: {
    title: "دبلوما البحث العلمي",
    issuer: "وزارة التعليم والعلوم في منطقة تشيليابينسك",
    institution: "كلية تشيليابينسك للهندسة الراديوية (ChRT)",
    recipient: "Pitolin Mikhail Evgenyevich",
    event: "المرحلة الثالثة من المسابقة الإقليمية لأوراق البحث العلمي الطلابية بين المؤسسات التعليمية المهنية في منطقة تشيليابينسك، 2026.",
    desc: "اعتراف رسمي بالتميز العلمي لخوارزميات دفاع TrustNode في فئة الأمن السيبراني. يركز البحث على التصنيف الدلالي المحلي لتهديدات الهندسة الاجتماعية في ذاكرة الوصول العشوائي (RAM) للأجهزة المحمولة.",
    badge: "جائزة إقليمية"
  },
  pt: {
    title: "Diploma de Pesquisa Científica",
    issuer: "Ministério da Educação e Ciência da Região de Chelyabinsk",
    institution: "Colegio Radiotécnico de Chelyabinsk (ChRT)",
    recipient: "Pitolin Mikhail Evgenyevich",
    event: "Etapa III da competição regional de trabalhos de pesquisa científica estudantil entre organizações educacionais profissionais da Região de Chelyabinsk, 2026.",
    desc: "Reconhecimento oficial da excelência científica dos algoritmos de defesa do TrustNode na categoria de Cibersegurança. A pesquisa foca na classificação semântica localizada de ameaças de engenharia social na memória RAM de dispositivos móveis.",
    badge: "PRÊMIO REGIONAL"
  },
  fr: {
    title: "Diplôme de Recherche Scientifique",
    issuer: "Ministère de l'Éducation et de la Science de la région de Cheliabinsk",
    institution: "Collège Radiotechnique de Cheliabinsk (ChRT)",
    recipient: "Pitolin Mikhail Evgenyevich",
    event: "Étape III du concours régional de travaux de recherche scientifique d'étudiants parmi les organisations d'enseignement professionnel de la région de Cheliabinsk, 2026.",
    desc: "Reconnaissance officielle de l'excellence scientifique des algorithmes de défense de TrustNode dans la catégorie Cybersécurité. La recherche se concentre sur la classification sémantique localisée des menaces d'ingénierie sociale dans la RAM des appareils mobiles.",
    badge: "PRIX RÉGIONAL"
  },
  de: {
    title: "Diplom für wissenschaftliche Forschung",
    issuer: "Ministerium für Bildung und Wissenschaft der Region Tscheljabinsk",
    institution: "Radiotechnisches Kolleg Tscheljabinsk (ChRT)",
    recipient: "Pitolin Mikhail Evgenyevich",
    event: "Phase III des regionalen Wettbewerbs studentischer wissenschaftlicher Forschungsarbeiten unter professionellen Bildungseinrichtungen der Region Tscheljabinsk, 2026.",
    desc: "Offizielle Anerkennung der wissenschaftlichen Exzellenz der TrustNode-Abwehralgorithmen in der Kategorie Cybersicherheit. Die Forschung konzentriert sich auf die lokalisierte semantische Klassifizierung von Social-Engineering-Bedrohungen im RAM von Mobilgeräten.",
    badge: "REGIONALER PREIS"
  },
  ja: {
    title: "科学研究ディプロマ",
    issuer: "チェリャビンスク州教育科学省",
    institution: "チェリャビンスク無線技術専門学校 (ChRT)",
    recipient: "ピトリン・ミハイル・エフゲニエヴィチ",
    event: "チェリャビンスク州の職業教育機関の学生を対象とした、学生科学研究論文地域コンテストの第3ステージ、2026年。",
    desc: "サイバーセキュリティ部門における TrustNode の防御アルゴリズムの学術的卓越性に対する公式な認定。モバイルデバイスの RAM 内におけるソーシャルエンジニアリング脅威のローカルな意味論的分類に焦点を当てた研究です。",
    badge: "地方最優秀賞"
  }
};

export const graphDetails: Record<LanguageCode, { title: string, subtitle: string, nodesCount: string, edgesCount: string, desc: string, badge: string }> = {
  ru: {
    title: "Карта связей Obsidian",
    subtitle: "Слепок реального репозитория и базы знаний проекта",
    nodesCount: "74 активных узла",
    edgesCount: "328 связей",
    desc: "Все этапы разработки, от проектирования модулей HeuristicsLayer и BertPhantomClassifier до разработки конфигурации квантования INT8 и тестов безопасности, зафиксированы в едином семантическом графе Obsidian. Это доказывает комплексную архитектурную проработку проекта.",
    badge: "OBSIDIAN VAULT ACTIVE"
  },
  en: {
    title: "Obsidian Connection Map",
    subtitle: "A snapshot of the actual repository and project knowledge base",
    nodesCount: "74 active nodes",
    edgesCount: "328 connections",
    desc: "All stages of development, from designing the HeuristicsLayer and BertPhantomClassifier modules to developing the INT8 quantization configuration and security tests, are documented within a single Obsidian semantic graph, proving comprehensive architectural design.",
    badge: "OBSIDIAN VAULT ACTIVE"
  },
  tr: {
    title: "Obsidian Bağlantı Haritası",
    subtitle: "Gerçek depo ve proje bilgi tabanının bir anlık görüntüsü",
    nodesCount: "74 aktif düğüm",
    edgesCount: "328 bağlantı",
    desc: "HeuristicsLayer ve BertPhantomClassifier modüllerinin tasarımından INT8 kuantizasyon konfigürasyonunun ve güvenlik testlerinin geliştirilmesine kadar geliştirmenin tüm aşamaları, projenin kapsamlı mimari tasarımını kanıtlayacak şekilde tek bir Obsidian anlamsal grafiği içinde belgelenmiştir.",
    badge: "OBSIDIAN KASASI AKTİF"
  },
  es: {
    title: "Mapa de Conexiones de Obsidian",
    subtitle: "Una instantánea del repositorio real y la base de conocimientos del proyecto",
    nodesCount: "74 nodos activos",
    edgesCount: "328 conexiones",
    desc: "Todas las etapas de desarrollo, desde el diseño de los módulos HeuristicsLayer y BertPhantomClassifier hasta el desarrollo de la configuración de cuantización INT8 y las pruebas de seguridad, están documentadas en un único gráfico semántico de Obsidian, lo que demuestra un diseño arquitectónico integral.",
    badge: "BÓVEDA DE OBSIDIAN ACTIVA"
  },
  zh: {
    title: "Obsidian 关系图谱",
    subtitle: "项目实际存储库和知识库的快照",
    nodesCount: "74 个活跃节点",
    edgesCount: "328 条连接",
    desc: "研发的所有阶段，从设计 HeuristicsLayer 和 BertPhantomClassifier 模块到开发 INT8 量化配置和安全性测试，全部记录在单个 Obsidian 语义图谱中，证明了其全面的架构设计。",
    badge: "OBSIDIAN 库激活"
  },
  hi: {
    title: "ऑब्सीडियन कनेक्शन मैप",
    subtitle: "वास्तविक भंडार और परियोजना ज्ञान आधार का एक स्नैपशॉट",
    nodesCount: "74 सक्रिय नोड्स",
    edgesCount: "328 कनेक्शन",
    desc: "HeuristicsLayer और BertPhantomClassifier मॉड्यूल को डिजाइन करने से लेकर INT8 क्वांटाइजेशन कॉन्फ़िगरेशन और सुरक्षा परीक्षणों को विकसित करने तक, विकास के सभी चरणों को एक ही ऑब्सीडियन सिमेंटिक ग्राफ के भीतर प्रलेखित किया गया है, जो व्यापक वास्तुशिल्प डिजाइन को साबित करता है।"
    ,badge: "ऑब्सीडियन वॉल्ट सक्रिय"
  },
  ar: {
    title: "خريطة اتصالات Obsidian",
    subtitle: "لقطة من المستودع الفعلي وقاعدة معرفة المشروع",
    nodesCount: "74 عقدة نشطة",
    edgesCount: "328 اتصال",
    desc: "جميع مراحل التطوير، من تصميم وحدات HeuristicsLayer و BertPhantomClassifier إلى تطوير تكوين تكميم INT8 واختبارات الأمان، موثقة داخل رسم بياني دلالي واحد لـ Obsidian، مما يثبت التصميم المعماري الشامل.",
    badge: "قبو OBSIDIAN نشط"
  },
  pt: {
    title: "Mapa de Conexões do Obsidian",
    subtitle: "Um instantâneo do repositório real e da base de conhecimento do projeto",
    nodesCount: "74 nós ativos",
    edgesCount: "328 conexões",
    desc: "Todas as etapas do desenvolvimento, desde o design dos módulos HeuristicsLayer e BertPhantomClassifier até o desenvolvimento da configuração de quantização INT8 e testes de segurança, estão documentadas em um único gráfico semântico do Obsidian, comprovando o design arquitetônico abrangente.",
    badge: "COFRE OBSIDIAN ATIVO"
  },
  fr: {
    title: "Carte de Connexions Obsidian",
    subtitle: "Un instantané du dépôt réel et de la base de connaissances du projet",
    nodesCount: "74 nœuds actifs",
    edgesCount: "328 connexions",
    desc: "Toutes les étapes du développement, de la conception des modules HeuristicsLayer et BertPhantomClassifier au développement de la configuration de quantification INT8 et aux tests de sécurité, sont documentées dans un graphique sémantique Obsidian unique, prouvant une conception architecturale complète.",
    badge: "COFFRE OBSIDIAN ACTIF"
  },
  de: {
    title: "Obsidian-Verbindungsnetz",
    subtitle: "Ein Schnappschuss des tatsächlichen Repositories und der Projekt-Wissensdatenbank",
    nodesCount: "74 aktive Knoten",
    edgesCount: "328 Verbindungen",
    desc: "Alle Entwicklungsstufen, vom Entwurf der Module HeuristicsLayer und BertPhantomClassifier bis zur Entwicklung der INT8-Quantisierungskonfiguration und Sicherheitstests, sind in einem einzigen semantischen Obsidian-Graphen dokumentiert, was ein umfassendes Architekturdesign belegt.",
    badge: "OBSIDIAN VAULT AKTIV"
  },
  ja: {
    title: "Obsidian 関連マップ",
    subtitle: "実際の開発リポジトリとプロジェクトナレッジベースのスナップショット",
    nodesCount: "74 個のアクティブノード",
    edgesCount: "328 個の接続",
    desc: "HeuristicsLayer や BertPhantomClassifier の設計から、INT8 量化設定およびセキュリティテストの開発に至るまで、開発の全段階が単一の Obsidian 意味論的グラフ内に記録されており、網羅的なアーキテクチャ設計を証明しています。",
    badge: "OBSIDIAN ボールト有効"
  }
};

export const onnxDetails: Record<LanguageCode, { title: string, filename: string, size: string, format: string, desc: string, badge: string }> = {
  ru: {
    title: "Реальная нейросетевая модель",
    filename: "rubert_fraud_int8.onnx",
    size: "28.4 MB",
    format: "ONNX Runtime (INT8 quantized)",
    desc: "В корне проекта интегрирован реальный бинарный слепок сжатой языковой модели rubert-tiny2, квантованной в целочисленный формат INT8. Модель оптимизирована для сверхбыстрого инференса на CPU мобильных устройств и полностью работает в локальном RAM.",
    badge: "ЛОКАЛЬНЫЙ ИНФЕРЕНС"
  },
  en: {
    title: "Production Neural Network Model",
    filename: "rubert_fraud_int8.onnx",
    size: "28.4 MB",
    format: "ONNX Runtime (INT8 quantized)",
    desc: "A real binary weights file of the highly optimized rubert-tiny2 language model quantized to the INT8 integer format is integrated in the project root. The model is fine-tuned for ultra-fast CPU inference on mobile devices and executes 100% locally in RAM.",
    badge: "LOCAL INFERENCE"
  },
  tr: {
    title: "Üretim Yapay Sinir Ağı Modeli",
    filename: "rubert_fraud_int8.onnx",
    size: "28.4 MB",
    format: "ONNX Runtime (INT8 kuantize)",
    desc: "Proje kökünde, INT8 tam sayı formatına kuantize edilmiş son derece optimize edilmiş rubert-tiny2 dil modelinin gerçek bir ikili ağırlık dosyası entegre edilmiştir. Model, mobil cihazlarda ultra hızlı CPU çıkarımı için ince ayarlanmıştır ve %100 yerel olarak RAM üzerinde yürütülür.",
    badge: "YEREL ÇIKARIM"
  },
  es: {
    title: "Modelo de Red Neuronal de Producción",
    filename: "rubert_fraud_int8.onnx",
    size: "28.4 MB",
    format: "ONNX Runtime (cuantizado en INT8)",
    desc: "Se integra en la raíz del proyecto un archivo de pesos binarios reales del modelo de lenguaje rubert-tiny2 altamente optimizado y cuantizado al formato entero INT8. El modelo está ajustado para una inferencia ultra rápida en CPU en dispositivos móviles y se ejecuta 100% localmente en RAM.",
    badge: "INFERENCIA LOCAL"
  },
  zh: {
    title: "生产级神经网络模型",
    filename: "rubert_fraud_int8.onnx",
    size: "28.4 MB",
    format: "ONNX Runtime (INT8 量化)",
    desc: "项目根目录中集成了一个高度优化的 rubert-tiny2 语言模型的真实二进制权重文件，该文件已量化为 INT8 整数格式。该模型针对移动设备上的超快速 CPU 推理进行了微调，并在内存中 100% 本地执行。",
    badge: "本地推理"
  },
  hi: {
    title: "उत्पादन न्यूरल नेटवर्क मॉडल",
    filename: "rubert_fraud_int8.onnx",
    size: "28.4 MB",
    format: "ONNX रनटाइम (INT8 क्वांटाइज़्ड)",
    desc: "परियोजना के रूट में अत्यधिक अनुकूलित rubert-tiny2 भाषा मॉडल का एक वास्तविक बाइनरी वेट फ़ाइल एकीकृत है जो INT8 पूर्णांक प्रारूप में क्वांटाइज़्ड है। मॉडल को मोबाइल उपकरणों पर अल्ट्रा-फास्ट सीपीयू अनुमान के लिए फाइन-ट्यून किया गया है और यह रैम में 100% स्थानीय रूप से निष्पादित होता है।",
    badge: "स्थानीय अनुमान"
  },
  ar: {
    title: "نموذج الشبكة العصبية للإنتاج",
    filename: "rubert_fraud_int8.onnx",
    size: "28.4 ميكابايت",
    format: "ONNX Runtime (INT8 كمي)",
    desc: "تم دمج ملف أوزان ثنائي حقيقي لنموذج اللغة rubert-tiny2 المحسن للغاية والمكمم إلى تنسيق 정수 INT8 في جذر المشروع. تم ضبط النموذج بدقة لزمن استجابة فائق السرعة على وحدة المعالجة المركزية (CPU) للأجهزة المحمولة ويعمل محليًا بنسبة 100% في ذاكرة الوصول العشوائي.",
    badge: "استدلال محلي"
  },
  pt: {
    title: "Modelo de Rede Neural de Produção",
    filename: "rubert_fraud_int8.onnx",
    size: "28.4 MB",
    format: "ONNX Runtime (quantizado em INT8)",
    desc: "Um arquivo real de pesos binários do modelo de linguagem rubert-tiny2 altamente otimizado, quantizado para o formato inteiro INT8, está integrado na raiz do projeto. O modelo é ajustado para inferência ultra-rápida em CPU de dispositivos móveis e executa 100% localmente na memória RAM.",
    badge: "INFERÊNCIA LOCAL"
  },
  fr: {
    title: "Modèle de Réseau Neuronal de Production",
    filename: "rubert_fraud_int8.onnx",
    size: "28.4 Mo",
    format: "ONNX Runtime (quantifié en INT8)",
    desc: "Un véritable fichier de poids binaires du modèle de langage hautement optimisé rubert-tiny2, quantifié au format entier INT8, est intégré à la racine du projet. Le modèle est affiné pour une inférence CPU ultra-rapide sur les appareils mobiles et s'exécute à 100 % localement dans la RAM.",
    badge: "INFERENCE LOCALE"
  },
  de: {
    title: "Produktions-Neuronales Netzwerk-Modell",
    filename: "rubert_fraud_int8.onnx",
    size: "28.4 MB",
    format: "ONNX-Runtime (INT8 quantisiert)",
    desc: "Eine echte binäre Gewichtsdatei des hochoptimierten rubert-tiny2-Sprachmodells, das in das ganzzahlige INT8-Format quantisiert wurde, ist im Projekt-Root integriert. Das Modell is für ultraschnelle CPU-Inferenz auf Mobilgeräten feingetunt und wird zu 100 % lokal im RAM ausgeführt.",
    badge: "LOKALE INFERENZ"
  },
  ja: {
    title: "プロダクション仕様ニューラルネットワークモデル",
    filename: "rubert_fraud_int8.onnx",
    size: "28.4 MB",
    format: "ONNX Runtime (INT8 量子化済)",
    desc: "INT8 整数形式に量子化された、高度に最適化された rubert-tiny2 言語モデルの実バイナリウェイトファイルがプロジェクトルートに統合されています。このモデルはモバイルデバイスの CPU 上での超高速推論のために微調整されており、RAM 上で100%ローカルに実行されます。",
    badge: "ローカル推論"
  }
};
