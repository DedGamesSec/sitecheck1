import type { LanguageCode } from "./languages";
import type { Translations } from "./types";

const ru: Translations = {
  nav: {
    threats: "Угрозы",
    howItWorks: "Как это работает",
    security: "Безопасность",
    earlyAccess: "Ранний доступ"
  },
  brand: {
    tagline: "Защита на устройстве",
    footerTagline: "Защита прямо на устройстве"
  },
  hero: {
    badge: "ПРОТОКОЛ ЗАЩИТЫ // АКТИВЕН",
    titleSub: "[ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ ДЛЯ ЛОКАЛЬНОЙ ЗАЩИТЫ ОТ МОШЕННИКОВ И СПАМА ]",
    scrollStart: "ПРОКРУТИТЕ ДЛЯ ЗАПУСКА",
    scrollContinue: "ПРОКРУЧИВАЙТЕ ДАЛЬШЕ ДЛЯ СТАРТА",
    enterDome: "ВОЙТИ ПОД КУПОЛ"
  },
  mobileCards: [
    {
      badge: "[ ЧТО ЭТО? ]",
      title: "Локальный ИБ-Купол",
      desc: "TrustNode — это надежный щит для вашего Android-смартфона, защищающий от звонков мошенников, опасных сообщений и фишинговых ссылок."
    },
    {
      badge: "[ ЗАЧЕМ ЭТО НУЖНО? ]",
      title: "Защита Нового Поколения",
      desc: "Обычные антивирусы не видят мошенников в Telegram или по телефону. TrustNode распознает психологическое давление и обман на лету."
    },
    {
      badge: "[ ПОЧЕМУ ЭТО РАБОТАЕТ? ]",
      title: "On-Device Безопасность",
      desc: "Полная приватность. Программа работает прямо на вашем процессоре без интернета. Ваши личные сообщения, файлы и звонки никогда не уйдут в сеть."
    },
    {
      badge: "[ ДЛЯ КОГО? ]",
      title: "Абсолютная Приватность",
      desc: "Для тех, кто хочет обезопасить свои банковские карты, личные переписки и защитить пожилых родственников от манипуляций."
    }
  ],
  mobileTabLabels: [
    "ЧТО",
    "ЗАЧЕМ",
    "ПОЧЕМУ",
    "ДЛЯ КОГО"
  ],
  replayIntro: "ПЕРЕЗАПУСТИТЬ ИНТРО (НАВЕРХ)",
  problem: {
    badge: "Актуальные вызовы",
    titleLine1: "Почему существующие решения",
    titleHighlight: "больше не работают?",
    subtitle: "Индустрия киберпреступности эволюционирует быстрее, чем централизованные серверные базы сигнатур.",
    items: [
      {
        title: "Эпидемия соц-инженерии",
        desc: "Мошенники крадут миллиарды через звонки и мессенджеры, используя продвинутые сценарии психологического давления."
      },
      {
        title: "Компрометация приватности",
        desc: "Существующие защитные решения отправляют логи ваших разговоров и переписок на облачные серверы для анализа."
      },
      {
        title: "Бесполезность без сети",
        desc: "Традиционные антифрод-системы мгновенно отключаются и перестают защищать вас, как только пропадает мобильный интернет."
      }
    ]
  },
  how: {
    badge: "Архитектура безопасности",
    title: "Система защиты",
    titleHighlight: "PHANTOM",
    subtitle: "Многоуровневый купол, развёрнутый локально на вашем смартфоне. Ни байта персональных данных не покидает устройство.",
    layersHeading: "Слои защиты устройства",
    layers: [
      {
        name: "Быстрые эвристики (Heuristics — Эвристика)",
        tech: "Regex & Signature Maps",
        desc: "Первичный мгновенный фильтр входящих потоков. Блокирует известные паттерны спам-сетей, подозрительные ссылки и известные сигнатуры скриптов мошенников без нагрузки на батарею."
      },
      {
        name: "ML-Классификация (rubert-tiny2)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "Сжатая нейросетевая модель анализирует семантику разговора или текста сообщений в реальном времени. Обнаруживает скрытые манипуляции, ролевые сценарии («безопасный счёт», «родственник в беде») и психологическое давление."
      },
      {
        name: "Поведенческий анализ",
        tech: "Context-Aware State Machine",
        desc: "Следит за динамикой взаимодействия: скорость ввода, частота переключений между экранами банковских приложений во время звонка, аномальные задержки и паттерны удержания внимания."
      },
      {
        name: "Консенсус PHANTOM",
        tech: "Consensus Voting Engine",
        desc: "Принимает окончательное взвешенное решение на основе выходов всех трёх уровней. При подозрении на атаку блокирует интерфейс, предупреждает пользователя и отправляет моментальный пуш доверенному контакту."
      }
    ],
    usp: [
      {
        title: "Локальный AI (на устройстве)",
        desc: "Нейросеть rubert-tiny2 квантована и оптимизирована под мобильные процессоры. Размер в 28.4 МБ позволяет ей хранить все веса в ОЗУ смартфона, обеспечивая инференс за микросекунды."
      },
      {
        title: "Система маяков",
        desc: "При обнаружении критической фрод-активности уникальная система маяков моментально оповещает ваших близких и доверенных контактов через VK."
      },
      {
        title: "Бескомпромиссная приватность",
        desc: "Никакие текстовые транскрипты или логи не пересылаются в облако. Все вычисления и анализ данных производятся локально в изолированной песочнице смартфона."
      }
    ],
    sevenLayers: [
      {
        name: "Быстрые эвристики (HeuristicsLayer — Слой эвристик)",
        tech: "Regex & Signature Maps",
        desc: "Первичный мгновенный фильтр входящих потоков. Блокирует известные паттерны спам-сетей, подозрительные ссылки и сигнатуры мошеннических скриптов без нагрузки на батарею."
      },
      {
        name: "Нейросетевой классификатор (BertPhantomClassifier — Классификатор BertPhantom)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "Локальный мультимодальный анализ (анализ текста, голоса, поведения на экране, сетевого трафика). Нейросеть rubert-tiny2 обрабатывает данные строго на устройстве, отдельно от алгоритмов консенсуса."
      },
      {
        name: "Сценарии социнженерии (Social Eng. Layer — Слой социнженерии)",
        tech: "DeGenome (18 примитивов)",
        desc: "Выявляет таксономию манипуляций по 18 примитивам DeGenome: искусственная спешка, запугивание, требования конфиденциальности и эмоциональный прессинг."
      },
      {
        name: "Поведенческий анализ (Behavioral Layer — Слой поведенческого анализа)",
        tech: "Context-Aware State Machine",
        desc: "Следит за динамикой взаимодействия в реальном времени: скорость набора текста, задержки ответов во время разговора, частота переходов между экранами мобильного банка."
      },
      {
        name: "Репутационный контур (Reputation Layer — Контур репутации)",
        tech: "PCD Identity Profiles",
        desc: "Сверяет манеру общения звонящего с профилями поведенческой идентичности организаций (кто, когда и в каком тоне действительно имеет право звонить от лица банка или ведомства)."
      },
      {
        name: "Консенсус и принятие решений (Consensus Agent — Агент консенсуса)",
        tech: "Consensus Voting Engine",
        desc: "Алгоритм консенсуса JudgeAgent, независимый от нейросетей. Взвешивает оценки со всех уровней системы, при угрозе блокирует действия и оповещает доверенные контакты."
      },
      {
        name: "Иммунная память (Immune Memory — Иммунная память)",
        tech: "Adaptive Incident Shield",
        desc: "Долгосрочная изолированная память об атаках. Локально адаптирует и дообучает профили защиты на основе предотвращённых инцидентов для защиты от будущих разновидностей угроз."
      }
    ],
    btnSimplified: "Упрощенная структура",
    btnAdvanced: "Патентный PHANTOM 2.0 (7 слоев)",
    pipelineHeader: "Полные запатентованные слои PHANTOM 2.0"
  },
  trust: {
    badge: "Научная валидация & Признание",
    title: "Доказанная",
    titleHighlight: "эффективность",
    subtitle: "Технологическая база TrustNode опирается на строгие математические исследования и признана экспертным научным сообществом.",
    stats: [
      {
        val: "IPC G06F 21/55",
        label: "Заявка на патент ФИПС",
        desc: "Официально зарегистрированная заявка на изобретение уникального алгоритма локального анализа потоков данных."
      },
      {
        val: "I МЕСТО",
        label: "Региональный НИР",
        desc: "Высшая награда в секции Информационных Технологий за лучшую практическую систему кибербезопасности на студенческом конкурсе."
      },
      {
        val: "MSK // 2026",
        label: "Федеральный финал",
        desc: "Официальное приглашение на всероссийский суперфинал ИТ-исследований в Москве (сентябрь 2026)."
      },
      {
        val: "92% / 88%",
        label: "Целевые ориентиры (Target Metrics)",
        desc: "Целевые показатели разработки на этапе архитектуры: Precision (точность) — 92%, Recall (полнота) — 88%, Latency (задержка) — <1 сек, Влияние на батарею — <5% в сутки."
      }
    ]
  },

  header: {
    rustore: "Скачать в RuStore",
    radar: "Product Radar",
    ecoOn: "Эко-режим включён",
    ecoOff: "Эко-режим выключен",
    seniorOn: "Режим для пожилых включён",
    seniorOff: "Режим для пожилых (увеличенный текст)",
    lang: "Сменить язык",
  },
  footer: {
    copyright: "© {year} TrustNode Protocol. Все права защищены.",
    privacyLink: "Политика конфиденциальности (ФЗ-152)",
    termsLink: "Пользовательское соглашение",
    version: "On-Device ML Fraud Shield // v1.2.0 // соответствует ФЗ-152",
      githubOrg: "Все проекты TrustNode на GitHub",
},
  cookie: {
    badgeLabel: "[ ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ // ФЗ-152 ]",
    text: "Мы заботимся о вашей приватности. Сайт использует обезличенные файлы cookie и локальное хранилище для сохранения ваших настроек графики и эко-режима. Ознакомьтесь с нашей",
    privacyLinkText: "Политикой конфиденциальности",
    suffix: "в рамках 152-ФЗ.",
    audit: "ЮРИДИЧЕСКИЙ АУДИТ",
    accept: "Принять",
    reject: "Отклонить"
  },
  legal: {
    privacyTitle: "Политика конфиденциальности",
    termsTitle: "Пользовательское соглашение",
    tabPrivacy: "ПОЛИТИКА ОБРАБОТКИ ПД (ФЗ-152)",
    tabTerms: "ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ",
    closeAria: "Закрыть",
    acknowledge: "Ознакомлен",
    privacy: {
      s1: {
        heading: "[ ОБЩИЕ ПОЛОЖЕНИЯ ]",
        body: "Настоящая Политика в отношении обработки персональных данных составлена в соответствии с требованиями Федерального закона РФ № 152-ФЗ «О персональных данных» от 27.07.2006 года. Она определяет порядок обработки персональных данных пользователей и меры по обеспечению безопасности этих данных, принимаемые командой проекта TrustNode Protocol (далее — Оператор). Наименование и реквизиты юридического лица или ИП, от имени которого действует Оператор: [TODO: уточнить]."
      },
      s2: {
        heading: "[ ПРИНЦИП КУПОЛА: 100% БЕЗОПАСНО ДЛЯ ПРИВАТНОСТИ ]",
        noticeLabel: "Критически важное уведомление:",
        noticeBody: "Веб-сайт проекта TrustNode НЕ собирает, НЕ обрабатывает, НЕ хранит и НЕ передаёт ваши личные данные, адреса электронной почты, пароли или конфиденциальные файлы напрямую. Все защитные механизмы приложения PHANTOM функционируют исключительно локально (On-Device) на процессоре вашего смартфона."
      },
      s3: {
        heading: "[ ОБРАБАТЫВАЕМЫЕ ДАННЫЕ НА САЙТЕ ]",
        intro: "Посещение данного информационного ресурса может сопровождаться автоматической обработкой исключительно обезличенных технических данных:",
        items: [
          "Файлы cookie (необходимы для кэширования параметров производительности и режима энергосбережения сайта);",
          "Анонимные технические заголовки, IP-адрес без привязки к ФИО или конкретной личности;",
          "Параметры пользовательского интерфейса (выбранные режимы графики)."
        ]
      },
      s4: {
        heading: "[ СКАЧИВАНИЕ ПРИЛОЖЕНИЯ ]",
        body: "Скачивание приложения TrustNode осуществляется через официальные площадки — магазин RuStore и GitHub. Сайт TrustNode не собирает и не обрабатывает персональные данные пользователей: все данные, анализируемые приложением, обрабатываются исключительно локально на устройстве пользователя."
      },
      s5: {
        heading: "[ ЛОКАЛИЗАЦИЯ И БЕЗОПАСНОСТЬ ХРАНЕНИЯ ]",
        body: "В соответствии с законодательством РФ, если в процессе индивидуальной переписки в мессенджерах будут зафиксированы персональные данные граждан РФ, Оператор обязуется хранить, систематизировать и обрабатывать их с использованием баз данных, расположенных исключительно на территории Российской Федерации."
      },
      s6: {
        heading: "[ КОНТАКТНАЯ ИНФОРМАЦИЯ ]",
        bodyPrefix: "По любым вопросам, касающимся обработки технической информации или соблюдения требований ФЗ-152, вы можете обратиться напрямую к разработчикам через официальный Telegram-канал проекта: ",
        bodySuffix: "."
      },
      s7: {
        heading: "[ ВНЕШНИЕ ПЛОЩАДКИ РАСПРОСТРАНЕНИЯ ]",
        bodyPrefix: "Загрузка и установка приложения из магазина RuStore или GitHub регулируются правилами соответствующих платформ. TrustNode не выступает оператором персональных данных при использовании внешних площадок: ",
        bodySuffix: " Актуальность и применимость данных ссылок должны быть подтверждены владельцем сайта перед публикацией."
      }
    },
    terms: {
      s1: {
        heading: "[ 1. СТАТУС РЕСУРСА И ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ ]",
        body: "Настоящий веб-сайт является официальным промо-ресурсом проекта TrustNode (далее — ПО TrustNode). Сайт носит исключительно информационный характер и не является публичной офертой в значении Статьи 437(2) Гражданского кодекса РФ. Все условия предоставления раннего доступа к лицензиям оговариваются индивидуально."
      },
      s2: {
        heading: "[ 2. ОТСУТСТВИЕ СРЕДСТВ ШИФРОВАНИЯ (КРИПТОГРАФИИ) ]",
        noticeLabel: "Важная юридическая оговорка:",
        noticeBody: "Программное обеспечение TrustNode представляет собой семантический эвристический анализатор локального трафика и текстовых шаблонов. Оно НЕ содержит средств криптографического шифрования и не изменяет исходный код системных протоколов, в связи с чем не подлежит обязательному лицензированию ФСБ России в соответствии с Постановлением Правительства РФ № 313."
      },
      s3: {
        heading: "[ 3. ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ ]",
        body: "Все графические материалы, товарные знаки, 3D-модели, исходный код сайта и алгоритмы системы PHANTOM являются объектами интеллектуальной собственности разработчиков TrustNode Protocol и защищены Частью IV Гражданского кодекса РФ. Незаконное копирование, декомпиляция или дистрибуция преследуются по ст. 146 УК РФ."
      },
      s4: {
        heading: "[ 4. ПРАВИЛА ИСПОЛЬЗОВАНИЯ ЛИЦЕНЗИЙ ]",
        body: "Ранний бесплатный доступ предоставляется исключительно на условиях индивидуального пользовательского соглашения (EULA), подписываемого или принимаемого в электронном виде при установке ПО. Запрещается использование ПО TrustNode для нелегального перехвата трафика третьих лиц или иных противоправных действий в сетях электросвязи РФ."
      },
      s5: {
        heading: "[ 5. ИЗМЕНЕНИЕ СОГЛАШЕНИЯ ]",
        body: "Администрация ресурса оставляет за собой право в одностороннем порядке изменять условия настоящего Соглашения без предварительного уведомления пользователей. Актуальная версия всегда публикуется на этой странице."
      }
    }
  },
  pageNames: {
    home: "Главная",
    "how-it-works": "Как это работает",
    tech: "Технологии",
    about: "О проекте",
    download: "Скачать",
    comparison: "Сравнение",
    roadmap: "Карта разработки",
    "not-found": "404"
  },
  realDev: {
    title: "Верификация проекта",
    subtitle: "Документальные подтверждения реальной стадии разработки, научные грамоты и слепки архитектуры",
    badge: "ПОДТВЕРЖДЕНИЕ РАЗРАБОТКИ // КРЕДЕНЦИАЛЫ",
    devUi: {
      awards: "Награды и Наука",
      graph: "Карта Разработки",
      core: "Ядро Модели",
      recipient: "ЛАУРЕАТ / ИССЛЕДОВАТЕЛЬ",
      inst: "ИНСТИТУТ",
      event: "НАУЧНЫЙ КОНКУРС",
      nodes: "УЗЛОВ СВЯЗИ",
      conns: "АКТИВНЫХ СВЯЗЕЙ",
      specs: "ХАРАКТЕРИСТИКИ ЯДРА",
      baseArch: "Базовая Архитектура:",
      params: "Количество Параметров:",
      latency: "Задержка Инференса:",
      copied: "Скопировано!",
      copyName: "Имя файла",
      dlOnnx: "Скачать ONNX"
    },
    awardDetails: {
      title: "Грамота за научные исследования",
      issuer: "Министерство образования и науки Челябинской области",
      institution: "ГБПОУ \"Челябинский радиотехнический техникум\"",
      recipient: "Питолин Михаил Евгеньевич",
      event: "III этап областного конкурса студенческих научно-исследовательских работ среди студентов профессиональных образовательных организаций Челябинской области, 2026 год.",
      desc: "Официальное признание превосходства защитных алгоритмов TrustNode в категории Информационной Безопасности. Исследование сфокусировано на семантической классификации угроз социальной инженерии в оперативной памяти мобильных устройств.",
      badge: "РЕГИОНАЛЬНЫЙ ПРИЗЕР"
    },
    graphDetails: {
      title: "Карта связей Obsidian",
      subtitle: "Слепок реального репозитория и базы знаний проекта",
      nodesCount: "74 активных узла",
      edgesCount: "328 связей",
      desc: "Все этапы разработки, от проектирования модулей HeuristicsLayer и BertPhantomClassifier до разработки конфигурации квантования INT8 и тестов безопасности, зафиксированы в едином семантическом графе Obsidian. Это доказывает комплексную архитектурную проработку проекта.",
      badge: "OBSIDIAN VAULT ACTIVE"
    },
    onnxDetails: {
      title: "Реальная нейросетевая модель",
      filename: "rubert_fraud_int8.onnx",
      size: "28.4 MB",
      format: "ONNX Runtime (INT8 quantized)",
      desc: "В корне проекта интегрирован реальный бинарный слепок сжатой языковой модели rubert-tiny2, квантованной в целочисленный формат INT8. Модель оптимизирована для сверхбыстрого инференса на CPU мобильных устройств и полностью работает в локальном RAM.",
      badge: "ЛОКАЛЬНЫЙ ИНФЕРЕНС"
    }
  },
  origin: {
    title: "История проекта",
    subtitle: "От дипломных исследований студента-кибербезопасника до патентов ФИПС и федерального признания",
    badge: "ИСТОРИЯ И КОМАНДА",
    timeline: [
      {
        badge: "ГБПОУ ЧРТ // КБ-284",
        title: "Научные истоки и специализация",
        desc: "Проект зародился в стенах Челябинского радиотехнического техникума в рамках учебной группы КБ-284 (Специальность 10.02.05 — «Информационная безопасность автоматизированных систем») под руководством научного руководителя Морозковой Натальи Анатольевны."
      },
      {
        badge: "НИР // I МЕСТО",
        title: "Триумф на региональном НИР",
        desc: "Комплексная работа и инновационный алгоритм TrustNode принесли проекту I МЕСТО на областном научно-исследовательском конкурсе (НИР) в секции «Информационные технологии»."
      },
      {
        badge: "МОСКВА // СЕНТЯБРЬ 2026",
        title: "Выход на федеральный финал",
        desc: "После успеха на региональном уровне проект был отобран для презентации на престижном региональном научно-исследовательском финале НИР в Москве в сентябре 2026 года, где будут продемонстрированы его возможности в сфере защиты от мошенничества."
      },
      {
        badge: "АРХИТЕКТОР + AI-ПОДРЯДЧИКИ",
        title: "Новая веха: Разработка будущего",
        desc: "Разработка архитектуры безопасности и интеграция ONNX-моделей TrustNode выполнена по передовой методологии «Архитектор + AI-подрядчики», где генерация кода (Kotlin/C++) была делегирована специализированным ИИ-агентам."
      }
    ]
  },
  security: {
    title: "Безопасность купола",
    subtitle: "Как TrustNode защищает собственные алгоритмы и ваши данные от анализа и взлома",
    badge: "ЗАЩИТА САМОГО ПРИЛОЖЕНИЯ",
    complianceLabel: "ЮРИДИЧЕСКАЯ И СЕРТИФИКАЦИОННАЯ КЛАССИФИКАЦИЯ",
    complianceText: "TrustNode классифицируется как семантический эвристический анализатор локальных данных и текстовых паттернов. Система НЕ содержит встроенных средств шифрования стороннего трафика, благодаря чему не требует обязательного лицензирования в ФСБ России по Постановлению Правительства №313.",
    features: [
      {
        title: "Шифрованное хранилище VAULT",
        desc: "Шифрование по стандарту AES-256-GCM с интеграцией аппаратного чипа Android Keystore / StrongBox. Локальные базы защищены через SQLCipher и PBKDF2+HKDF."
      },
      {
        title: "Активная защита AEGIS RASP",
        desc: "Защита приложения во время работы (Runtime Application Self-Protection). Обнаруживает отладку (Anti-Debug), рут-права, эмуляторы и попытки инъекции кода."
      },
      {
        title: "Система аудита Self-Audit",
        desc: "Фоновые периодические проверки целостности исполняемых файлов на базе WorkManager. Вычисляет контрольные суммы CRC32 нативных модулей и сравнивает с эталоном."
      },
      {
        title: "Локальная песочница и 152-ФЗ",
        desc: "Полное соответствие закону о персональных данных. Исходные файлы, логи и аудиопотоки обрабатываются только в ОЗУ устройства и никогда не отправляются на сервера."
      }
    ]
  },
  kira: {
    title: "Голосовой ассистент KIRA",
    subtitle: "Интеллектуальный речевой контур, работающий прямо в оперативной памяти телефона",
    badge: "ПРОГРАММНЫЙ ПЛАН: KIRA",
    features: [
      {
        title: "Локальный Интент-Классификатор",
        desc: "Дообученная надстройка над основной rubert-tiny2. Распознает 15-20 специализированных интентов безопасности, добавляя к модели всего ~200 КБ весов."
      },
      {
        title: "Работа на 100% Офлайн",
        desc: "Никаких обращений к облачным LLM. Вся семантическая структура и шаблоны ответов упакованы в приложение, работая без сети в режиме сверхнизкой задержки."
      },
      {
        title: "Синтетический Датасет Коллаборации",
        desc: "Обучена на узкоспециализированных синтетических диалогах мошеннических схем, сгенерированных в облаке Google Colab с помощью Llama 3.1 и Qwen2.5."
      }
    ]
  },
  explore: {
    title: "Исследуйте протокол безопасности",
    subtitle: "Узнайте больше о локальных AI-технологиях и научной базе TrustNode",
    card1Title: "Технологии купола",
    card1Badge: "СИСТЕМА PHANTOM",
    card1Desc: "Техническая детализация семислойного защитного купола PHANTOM 2.0 и интеллектуальный голосовой ассистент KIRA, работающий локально на устройстве.",
    card1Btn: "Изучить технологии →",
    card2Title: "Доказанная база",
    card2Badge: "ВАЛИДАЦИЯ И ПАТЕНТЫ",
    card2Desc: "Официальный патент ФИПС, золотая медаль на региональном НИР, участие во всероссийском финале в Москве и история создания проекта.",
    card2Btn: "О проекте и команде →",
    card3Title: "Скачать приложение",
    card3Badge: "УСТАНОВКА // ANDROID",
    card3Desc: "Скачайте TrustNode TN1 бесплатно — готовое приложение для локальной защиты от мошенников и спама. Доступно в RuStore.",
    card3Btn: "Скачать приложение →",
    card4Title: "Честное сравнение",
    card4Badge: "ФАКТЫ И КОНКУРЕНТЫ",
    card4Desc: "Объективная сравнительная таблица функциональности TrustNode с существующими на рынке аналогами по ключевым параметрам.",
    card4Btn: "Открыть таблицу сравнения →"
  },
  assembly: {
    leftPrimary: "OFFLINE-FIRST",
    leftSub: "// ДАННЫЕ НЕ ПОКИДАЮТ УСТРОЙСТВО",
    rightPrimary: "ZERO TELEMETRY",
    rightSub: "// НИКАКОЙ ТЕЛЕМЕТРИИ"
  },
  earlyAccessPage: {
    title: "Скачать TrustNode",
    subtitle: "Скачайте приложение TrustNode TN1 бесплатно — локальная защита от телефонного мошенничества и спама прямо на вашем устройстве.",
    badge: "БЕСПЛАТНАЯ ЗАГРУЗКА",
    back: "Назад на Главную",
    rustoreBtn: "Скачать в RuStore",
    githubBtn: "Скачать APK с GitHub",
    feature1Title: "100% Локальная защита",
    feature1Desc: "Все проверки звонков и сообщений выполняются прямо на вашем устройстве — ваши данные никогда не покидают смартфон.",
    feature2Title: "ИИ против мошенников",
    feature2Desc: "Нейросетевая модель на базе rubert-tiny2 распознаёт сценарии социальной инженерии в реальном времени.",
    feature3Title: "Бесплатно и безопасно",
    feature3Desc: "Приложение доступно бесплатно в RuStore. Устанавливайте и защищайте своих близких от мошенников.",
    note: "Приложение доступно для устройств Android. Требуется соединение с интернетом только при первом скачивании.",
  },

  comparisonPage: {
    title: "Честное сравнение",
    subtitle: "Объективный сравнительный анализ возможностей TrustNode и ведущих мировых решений",
    badge: "СРАВНЕНИЕ // ФАКТЫ",
    thFeature: "Функция",
    thTrustNode: "TrustNode (TN1)",
    thKaspersky: "Kaspersky",
    thNorton: "Norton",
    thBitdefender: "Bitdefender",
    thGoogleSpam: "Google Protection",
    features: {
      textAnalysis: "Текстовый анализ (BERT, правила, скоринг риска, URL, гомоглифы)",
      voiceAnalysis: "Голосовой анализ звонков в реальном времени",
      visualAnalysis: "Визуальный анализ (интерфейсы, кошельки, фишинг)",
      socialEngDetect: "Детекция социнженерии (нейросеть + ИИ-агенты)",
      behavioralRasp: "Поведенческий анализ и RASP-мониторинг",
      familyDefense: "Семейная защита Parent-Child (Guardian-система)",
      beaconSystem: "Beacon-система (оповещение контактов через VK)",
      offlineOnDevice: "Работа полностью офлайн (on-device)",
      pricing: "Модель монетизации"
    },
    status: {
      yes: "✅ Есть",
      no: "❌ Нет",
      inDev: "🛠 В разработке"
    },
    pricingValues: {
      trustNode: "Бесплатно",
      kaspersky: "Подписка от ~1990₽/год",
      norton: "Подписка от ~$39.99/год",
      bitdefender: "Подписка от ~$29.99/год",
      googleSpam: "Бесплатно"
    },
    disclaimer: "Мы стремимся к максимальной объективности. Если вы заметили неточность, пожалуйста, свяжитесь с нами в Telegram.",
    telegramBtn: "Написать в Telegram"
  },

  roadmapPage: {
    title: "Дорожная Карта",
    subtitle: "Статус разработки TrustNode, политика безопасного раскрытия и фазы развертывания интеллектуальных модулей",
    badge: "СТАТУС И ПЛАНЫ",
    readyMvp: "ГОТОВЫЙ MVP",
    underDevelopment: "В РАЗРАБОТКЕ",
    conceptualSpec: "КОНЦЕПТ-СПЕЦИФИКАЦИЯ",
    tn1Desc: "Полностью готовое, протестированное Android-приложение для локальной сигнатурной защиты. Требует только дообучения весов и калибровки порогов.",
    packageLabel: "ПАКЕТ:",
    coreEngineLabel: "ДВИЖОК ЯДРА:",
    statusLabel: "СТАТУС:",
    fullyReady: "ПОЛНОСТЬЮ ГОТОВ (MVP)",
    sourceGithub: "Исходный код на GitHub",
    tn3Desc: "7-слойная патентная архитектура PHANTOM 2.0 с независимым ИИ-консенсусом и системой оповещений Beacon.",
    deadlineLabel: "СРОК СДАЧИ:",
    september2026: "СЕНТЯБРЬ 2026",
    phaseLabel: "ФАЗА:",
    architecturePhase: "Проектирование Архитектуры",
    kiraDesc: "Речевой интент-анализатор для блокирования манипулятивного речевого воздействия непосредственно в ходе живого разговора.",
    designPhase: "Проектирование",
    coreComponentLabel: "КЛЮЧЕВОЙ КОМПОНЕНТ:",
    integrationLabel: "ИНТЕГРАЦИЯ:",
    ramAddon: "Локальное расширение ОЗУ",
    disclosureTitle: "Политика ответственного раскрытия",
    disclosureDesc: "Если вы обнаружили потенциальную уязвимость в TrustNode, сообщите об этом команде напрямую. Мы не публикуем детали уязвимостей до их устранения и благодарим исследователей за ответственный подход.",
    reportTelegram: "Сообщить в Telegram",
    reportVk: "Сообщить во VK",
    reportGithub: "Сообщить на GitHub",
    milestonesTitle: "Вехи разработки и релизов",
    milestones: [
      { date: "2024–2025", title: "Научные истоки и региональный НИР", desc: "Проект зародился в ГБПОУ ЧРТ (КБ-284) и занял I место на областном научно-исследовательском конкурсе." },
      { date: "v1.2.0", title: "TrustNode 1 (TN1) — Ready MVP", desc: "Полностью готовое Android-приложение для локальной сигнатурной защиты. Фаза калибровки порогов и дообучения весов." },
      { date: "2025", title: "Интеграция ONNX-ядра", desc: "Внедрение модели rubert_fraud_int8.onnx для локального семантического инференса на устройстве без облака." },
      { date: "СЕНТЯБРЬ 2026", title: "PHANTOM 2.0 — Architecture Phase", desc: "7-слойная патентная архитектура TN3 с независимым ИИ-консенсусом. Срок сдачи: сентябрь 2026." },
      { date: "СЕНТЯБРЬ 2026", title: "Федеральный суперфинал (Москва)", desc: "Представление проекта на федеральном суперфинале научно-исследовательских работ." },
      { date: "v3.0-design", title: "Kira Voice Assistant — Conceptual Spec", desc: "Речевой интент-анализатор для блокирования манипулятивного речевого воздействия. Фаза проектирования." }
    ],
    allProjectsGithub: "Все проекты TrustNode на GitHub"
  }
};

const en: Translations = {
  nav: {
    threats: "Threats",
    howItWorks: "How it works",
    security: "Security",
    earlyAccess: "Early access"
  },
  brand: {
    tagline: "On-Device Shield",
    footerTagline: "Securing device semantics"
  },
  hero: {
    badge: "PROTECTION PROTOCOL // ACTIVE",
    titleSub: "[ ON-DEVICE ANTI-FRAUD APP SECURING YOUR ANDROID PHONE ]",
    scrollStart: "SCROLL TO BEGIN",
    scrollContinue: "KEEP SCROLLING TO START",
    enterDome: "ENTER THE DOME"
  },
  mobileCards: [
    {
      badge: "[ WHAT IS IT? ]",
      title: "Local Security Dome",
      desc: "TrustNode is an offline shield for your Android smartphone, instantly blocking phone fraud, fake support, and phishing links."
    },
    {
      badge: "[ WHY DO I NEED IT? ]",
      title: "Next-Gen Protection",
      desc: "Traditional antivirus apps miss chat/call scams. TrustNode detects emotional pressure and manipulation in real time."
    },
    {
      badge: "[ WHY DOES IT WORK? ]",
      title: "On-Device Security",
      desc: "100% offline. All security calculations are done locally on your phone's processor. Your messages and voice never go to any cloud."
    },
    {
      badge: "[ WHO IS IT FOR? ]",
      title: "Absolute Privacy",
      desc: "Designed for business owners, crypto asset holders, and everyone who wants to secure their family and bank cards from scammers."
    }
  ],
  mobileTabLabels: [
    "WHAT",
    "WHY",
    "HOW",
    "FOR WHOM"
  ],
  replayIntro: "REPLAY INTRO (SCROLL UP)",
  problem: {
    badge: "Current challenges",
    titleLine1: "Why existing solutions",
    titleHighlight: "don't work anymore",
    subtitle: "The cybercrime industry evolves faster than centralized, server-side signature databases can keep up.",
    items: [
      {
        title: "The social-engineering epidemic",
        desc: "Scammers steal billions through calls and messengers, using advanced psychological-pressure scripts."
      },
      {
        title: "Privacy compromised",
        desc: "Existing protection solutions send logs of your calls and messages to cloud servers for analysis."
      },
      {
        title: "Useless without a network",
        desc: "Traditional anti-fraud systems shut down instantly and stop protecting you the moment mobile internet drops."
      }
    ]
  },
  how: {
    badge: "Security architecture",
    title: "The",
    titleHighlight: "PHANTOM defense system",
    subtitle: "A multi-layer dome deployed locally on your smartphone. Not a single byte of personal data ever leaves the device.",
    layersHeading: "Device protection layers",
    layers: [
      {
        name: "Fast heuristics",
        tech: "Regex & Signature Maps",
        desc: "The first instant filter for incoming streams. Blocks known spam-network patterns, suspicious links, and known scam-script signatures without draining the battery."
      },
      {
        name: "ML classification (rubert-tiny2)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "A compressed neural network analyzes the semantics of a call or message text in real time. Detects hidden manipulation, role-play scenarios (\"safe account\", \"relative in trouble\") and psychological pressure."
      },
      {
        name: "Behavioral analysis",
        tech: "Context-Aware State Machine",
        desc: "Tracks interaction dynamics: typing speed, how often the screen switches to banking apps during a call, anomalous delays, and attention-holding patterns."
      },
      {
        name: "PHANTOM consensus",
        tech: "Consensus Voting Engine",
        desc: "Makes the final weighted decision based on the outputs of all three layers. If an attack is suspected, it locks the interface, warns the user, and sends an instant push to a trusted contact."
      }
    ],
    usp: [
      {
        title: "Local AI (on-device)",
        desc: "The rubert-tiny2 neural network is quantized and optimized for mobile processors. At 28.4 MB, it can keep all its weights in the phone's RAM, delivering inference in microseconds."
      },
      {
        title: "Beacon Alerting System",
        desc: "Upon detecting critical fraud activity, our unique Beacon System instantly and securely notifies your loved ones and trusted contacts via VK."
      },
      {
        title: "Uncompromising privacy",
        desc: "No text transcripts or logs are ever sent to the cloud. All computations and data stream auditing stay strictly local inside the app's isolated on-device sandbox."
      }
    ],
    sevenLayers: [
      {
        name: "Fast Heuristics (HeuristicsLayer)",
        tech: "Regex & Signature Maps",
        desc: "An instant, lightweight filter for incoming data streams. Blocks known spam-networks, phishing links, and malicious automation patterns without draining battery power."
      },
      {
        name: "Neural Classification (BertPhantomClassifier)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "Local real-time multimodal analysis (text, voice, screen behavior, and network traffic). The rubert-tiny2 on-device neural network operates strictly offline, separate from consensus voting algorithms."
      },
      {
        name: "Social Engineering (Social Eng. Layer)",
        tech: "DeGenome (18 Primitives)",
        desc: "Identifies manipulation tactics using the DeGenome taxonomy of 18 primitives, uncovering artificial urgency, pressure speech, fear triggers, and isolation requests."
      },
      {
        name: "Behavioral Auditing (Behavioral Layer)",
        tech: "Context-Aware State Machine",
        desc: "Continuously tracks live user interactions: typing cadence, cognitive processing delays, and switching frequencies between financial and calling apps during a live call."
      },
      {
        name: "Reputation Verification (Reputation Layer)",
        tech: "PCD Identity Profiles",
        desc: "Cross-checks caller traits with Corporate identity profiles (PCD), identifying when speech patterns and caller actions mismatch official protocols."
      },
      {
        name: "Consensus Resolution (Consensus Agent)",
        tech: "Consensus Voting Engine",
        desc: "A dedicated consensus voting algorithm (JudgeAgent), independent of the neural networks. It aggregates risk markers from all levels to lock executions and send alerts."
      },
      {
        name: "Immune Memory",
        tech: "Adaptive Incident Shield",
        desc: "Localized secure attack repository. Enables on-device, zero-leakage fine-tuning of security filters based on recently mitigated threats to handle upcoming attack variations."
      }
    ],
    btnSimplified: "Simplified View",
    btnAdvanced: "PHANTOM 2.0 Patent (7 Layers)",
    pipelineHeader: "Official Patented PHANTOM 2.0 Pipeline"
  },
  trust: {
    badge: "Scientific validation & recognition",
    title: "Proven",
    titleHighlight: "effectiveness",
    subtitle: "TrustNode's technology stack rests on rigorous mathematical research and is recognized by the expert scientific community.",
    stats: [
      {
        val: "IPC G06F 21/55",
        label: "Patent Application (FIPS)",
        desc: "An officially registered invention application for a unique local data-stream analysis algorithm."
      },
      {
        val: "1ST PLACE",
        label: "Regional research contest",
        desc: "Top award in the Information Technology track for the best practical cybersecurity system at a student competition."
      },
      {
        val: "MOSCOW // 2026",
        label: "National final",
        desc: "An official invitation to the all-Russian IT research super-final in Moscow (September 2026)."
      },
      {
        val: "92% / 88%",
        label: "Target Metrics (Architecture)",
        desc: "Target development indicators at the architecture stage: Precision — 92%, Recall — 88%, Latency — <1s, Battery impact — <5% per day."
      }
    ]
  },

  header: {
    rustore: "Download on RuStore",
    radar: "Product Radar",
    ecoOn: "Eco mode enabled",
    ecoOff: "Eco mode disabled",
    seniorOn: "Senior mode enabled",
    seniorOff: "Senior mode (larger text)",
    lang: "Change language",
  },
  footer: {
    copyright: "© {year} TrustNode Protocol. All rights reserved.",
    privacyLink: "Privacy Policy (Russian Federal Law 152-FZ)",
    termsLink: "Terms of Service",
    version: "On-Device ML Fraud Shield // v1.2.0 // 152-FZ compliant",
      githubOrg: "All TrustNode projects on GitHub",
},
  cookie: {
    badgeLabel: "[ INFORMATION SECURITY // RUSSIAN LAW 152-FZ ]",
    text: "We care about your privacy. This site uses anonymized cookies and local storage to remember your graphics and eco-mode settings. Read our",
    privacyLinkText: "Privacy Policy",
    suffix: "for details.",
    audit: "LEGAL DETAILS",
    accept: "Accept",
    reject: "Reject"
  },
  legal: {
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Service",
    tabPrivacy: "PRIVACY POLICY (RU LAW 152-FZ)",
    tabTerms: "TERMS OF SERVICE",
    closeAria: "Close",
    acknowledge: "Got it",
    privacy: {
      s1: {
        heading: "[ GENERAL PROVISIONS ]",
        body: "This Privacy Policy is drafted in accordance with Russian Federal Law No. 152-FZ \"On Personal Data\" of 27 July 2006. It defines how the TrustNode Protocol project team (the \"Operator\") processes user personal data and the safeguards applied to it. Full legal name and registration details of the legal entity or sole proprietor acting as the Operator: [TODO: to be confirmed]."
      },
      s2: {
        heading: "[ THE DOME PRINCIPLE: 100% SAFE FOR YOUR PRIVACY ]",
        noticeLabel: "Critical notice:",
        noticeBody: "The TrustNode website does NOT collect, process, store, or transmit your personal data, e-mail address, passwords, or private files directly. All protective mechanisms of the PHANTOM app run exclusively locally (on-device) on your smartphone's processor."
      },
      s3: {
        heading: "[ DATA PROCESSED BY THE WEBSITE ]",
        intro: "Visiting this informational website may involve automatic processing of anonymized technical data only, such as:",
        items: [
          "Cookies (needed to cache performance and eco-mode settings);",
          "Anonymous technical headers and IP address, not linked to a name or specific individual;",
          "Interface settings (selected graphics modes)."
        ]
      },
      s4: {
        heading: "[ APP DOWNLOAD ]",
        body: "Downloading the TrustNode application is done through official platforms — the RuStore store and GitHub. The TrustNode website does not collect or process users' personal data: all data analyzed by the app is processed exclusively on the user's device."
      },
      s5: {
        heading: "[ DATA LOCALIZATION AND STORAGE SECURITY ]",
        body: "In accordance with Russian law, if personal data of Russian citizens is recorded during individual messenger correspondence, the Operator commits to storing, organizing, and processing it exclusively using databases located within the Russian Federation."
      },
      s6: {
        heading: "[ CONTACT INFORMATION ]",
        bodyPrefix: "For any questions about technical data processing or compliance with Law 152-FZ, you can contact the developers directly via the project's official Telegram channel: ",
        bodySuffix: "."
      },
      s7: {
        heading: "[ EXTERNAL DISTRIBUTION PLATFORMS ]",
        bodyPrefix: "Downloading and installing the app from the RuStore store or GitHub is governed by the rules of the respective platforms. TrustNode is not the operator of personal data when external platforms are used: ",
        bodySuffix: " The accuracy and applicability of these links must be confirmed by the site owner before publication."
      }
    },
    terms: {
      s1: {
        heading: "[ 1. SITE STATUS AND DISCLAIMER ]",
        body: "This website is the official promotional resource of the TrustNode project (\"TrustNode software\"). It is purely informational and does not constitute a public offer under Article 437(2) of the Russian Civil Code. All terms for early license access are agreed individually."
      },
      s2: {
        heading: "[ 2. NO ENCRYPTION (CRYPTOGRAPHY) TOOLS ]",
        noticeLabel: "Important legal note:",
        noticeBody: "TrustNode software is a semantic heuristic analyzer of local traffic and text patterns. It does NOT contain cryptographic encryption tools and does not modify the source code of system protocols, and is therefore not subject to mandatory FSB licensing under Russian Government Decree No. 313."
      },
      s3: {
        heading: "[ 3. INTELLECTUAL PROPERTY ]",
        body: "All graphics, trademarks, 3D models, the site's source code, and the PHANTOM system's algorithms are the intellectual property of the TrustNode Protocol developers and are protected under Part IV of the Russian Civil Code. Unauthorized copying, decompilation, or distribution is prosecutable under Article 146 of the Russian Criminal Code."
      },
      s4: {
        heading: "[ 4. LICENSE USAGE RULES ]",
        body: "Early free access is granted solely under an individual End-User License Agreement (EULA), signed or accepted electronically at installation. Using TrustNode software to unlawfully intercept third-party traffic or for any other unlawful activity on Russian telecom networks is prohibited."
      },
      s5: {
        heading: "[ 5. CHANGES TO THIS AGREEMENT ]",
        body: "The site administration reserves the right to unilaterally change the terms of this Agreement without prior notice to users. The current version is always published on this page."
      }
    }
  },
  pageNames: {
    home: "Home",
    "how-it-works": "How It Works",
    tech: "Technology",
    about: "About Us",
    download: "Download",
    comparison: "Comparison",
    "not-found": "404"
  },
  realDev: {
    title: "Project Verification",
    subtitle: "Documentary proof of active development, academic credentials, and software architecture artifacts",
    badge: "DEVELOPMENT EVIDENCE // CREDENTIALS",
    devUi: {
      awards: "Awards & Science",
      graph: "Obsidian Map",
      core: "ONNX Core Engine",
      recipient: "RECIPIENT",
      inst: "INSTITUTION",
      event: "SCIENTIFIC EVENT",
      nodes: "ACTIVE NODES",
      conns: "TOTAL CONNECTIONS",
      specs: "CORE MODEL SPECIFICATIONS",
      baseArch: "Base Architecture:",
      params: "Total Parameters:",
      latency: "Inference Latency:",
      copied: "Copied!",
      copyName: "Copy Name",
      dlOnnx: "Download ONNX"
    },
    awardDetails: {
      title: "Scientific Research Diploma",
      issuer: "Ministry of Education and Science of the Chelyabinsk Region",
      institution: "Chelyabinsk Radiotechnical College (ChRT)",
      recipient: "Pitolin Mikhail Evgenyevich",
      event: "Stage III of the regional competition of student scientific research papers among professional educational organizations of the Chelyabinsk Region, 2026.",
      desc: "Official recognition of the scientific excellence of TrustNode's defense algorithms in the Cybersecurity category. The research focuses on the localized semantic classification of social engineering threats in the RAM of mobile devices.",
      badge: "REGIONAL AWARD"
    },
    graphDetails: {
      title: "Obsidian Connection Map",
      subtitle: "A snapshot of the actual repository and project knowledge base",
      nodesCount: "74 active nodes",
      edgesCount: "328 connections",
      desc: "All stages of development, from designing the HeuristicsLayer and BertPhantomClassifier modules to developing the INT8 quantization configuration and security tests, are documented within a single Obsidian semantic graph, proving comprehensive architectural design.",
      badge: "OBSIDIAN VAULT ACTIVE"
    },
    onnxDetails: {
      title: "Production Neural Network Model",
      filename: "rubert_fraud_int8.onnx",
      size: "28.4 MB",
      format: "ONNX Runtime (INT8 quantized)",
      desc: "A real binary weights file of the highly optimized rubert-tiny2 language model quantized to the INT8 integer format is integrated in the project root. The model is fine-tuned for ultra-fast CPU inference on mobile devices and executes 100% locally in RAM.",
      badge: "LOCAL INFERENCE"
    }
  },
  origin: {
    title: "Project Legacy",
    subtitle: "From a cybersec student's research project to FIPS patents and nationwide recognition",
    badge: "LEGACY & CREDENTIALS",
    timeline: [
      {
        badge: "COLLEGE RESEARCH",
        title: "Academic Foundations",
        desc: "Developed at the Chelyabinsk Radiotechnical College under educational group KB-284 (Specialty 10.02.05 — Information Security of Automated Systems), mentored by scientific advisor Natalia Anatolyevna Morozkova."
      },
      {
        badge: "REGIONAL VICTORY",
        title: "Regional Science Triumph",
        desc: "The comprehensive semantic framework of TrustNode won 1st place in the regional scientific and research competition (IT section) for its novel approach to real-time mobile fraud mitigation."
      },
      {
        badge: "FEDERAL SUPERFINAL",
        title: "National Superfinal Moscow",
        desc: "After success at the regional level, the project was selected for presentation at the prestigious regional scientific research final (NIR) in Moscow in September 2026, where its fraud protection capabilities will be demonstrated."
      },
      {
        badge: "AI-DRIVEN WORKFLOW",
        title: "Architect + AI Agents paradigm",
        desc: "The security architecture and patented TrustNode algorithms are developed under the 'Architect + AI Agents' framework, leveraging specialized AI code generators to accelerate production and deployment."
      }
    ]
  },
  security: {
    title: "Dome Hardening",
    subtitle: "How TrustNode hardens its own environment and secures local user analytics",
    badge: "APPLICATION HARDENING MODEL",
    complianceLabel: "LEGAL & SECURITY COMPLIANCE CLASSIFICATION",
    complianceText: "TrustNode operates strictly as a semantic heuristic text analyzer inside a localized memory environment. Since it does not encrypt or decrypt external network payloads, it does not require mandatory Russian Federal Security Service (FSB) licensing.",
    features: [
      {
        title: "VAULT Secure Storage",
        desc: "Military-grade AES-256-GCM encryption backed by physical Android Keystore / StrongBox hardware chips. Local data collections are hardened via SQLCipher & PBKDF2+HKDF."
      },
      {
        title: "AEGIS Active RASP",
        desc: "Proactive Runtime Application Self-Protection (RASP). Constantly audits memory integrity, blocking debuggers, root tools, emulator environments, and code injections."
      },
      {
        title: "Periodic Self-Audit Engine",
        desc: "Background file and component integrity auditor driven by WorkManager. Calculates CRC32 checksums of native NDK binaries to detect tampering on the fly."
      },
      {
        title: "On-Device Sandbox & Law 152-FZ",
        desc: "Strict localization complying with Russian Federal Law 152-FZ. All call transcribing, messaging, and memory logs stay strictly inside the local device RAM."
      }
    ]
  },
  kira: {
    title: "KIRA Voice Assistant",
    subtitle: "An intelligent, speech-capable companion running fully within your local RAM",
    badge: "PROJECT TIMELINE: KIRA",
    features: [
      {
        title: "Local Intent Classifier",
        desc: "A highly optimized fine-tuned add-on on top of the main rubert-tiny2 model. Resolves 15-20 specific security intents, introducing a mere 200 KB memory footprint."
      },
      {
        title: "100% Offline Execution",
        desc: "No expensive, slow external LLM API calls. Fully offline response templates and speech processing algorithms keep execution latency down to microseconds."
      },
      {
        title: "Advanced Training Datasets",
        desc: "Trained on synthetic dialogues of social-engineering schemes synthesized in Google Colab using advanced Llama 3.1 and Qwen2.5 models for ultimate accuracy."
      }
    ]
  },
  explore: {
    title: "Explore the Security Protocol",
    subtitle: "Learn more about local AI technologies and the scientific foundation of TrustNode",
    card1Title: "Dome Technology",
    card1Badge: "PHANTOM SYSTEM",
    card1Desc: "Technical breakdown of the 7-layer PHANTOM 2.0 security dome and the intelligent voice assistant KIRA running fully on-device.",
    card1Btn: "Explore Technology →",
    card2Title: "Proven Validation",
    card2Badge: "PATENT & AWARDS",
    card2Desc: "Official patent filings, first place in regional IT research, national finals invitation, and our project development journey.",
    card2Btn: "About Us & Team →",
    card3Title: "Download the App",
    card3Badge: "INSTALL // ANDROID",
    card3Desc: "Download TrustNode TN1 for free — the finished on-device app protecting you from fraud and spam. Available on RuStore.",
    card3Btn: "Download App →",
    card4Title: "Honest Comparison",
    card4Badge: "FACTS & COMPETITORS",
    card4Desc: "An objective comparative analysis of TrustNode vs leading global security solutions across key parameters.",
    card4Btn: "Open Comparison Table →"
  },
  assembly: {
    leftPrimary: "OFFLINE-FIRST",
    leftSub: "// DATA NEVER LEAVES DEVICE",
    rightPrimary: "ZERO TELEMETRY",
    rightSub: "// ZERO TELEMETRY COLLECTED"
  },
  earlyAccessPage: {
    title: "Download TrustNode",
    subtitle: "Get the TrustNode TN1 app for free — on-device protection against phone scams and spam, right on your device.",
    badge: "FREE DOWNLOAD",
    back: "Back to Main",
    rustoreBtn: "Download on RuStore",
    githubBtn: "Download APK from GitHub",
    feature1Title: "100% On-Device Protection",
    feature1Desc: "All call and message checks run right on your device — your data never leaves your smartphone.",
    feature2Title: "AI Against Scammers",
    feature2Desc: "The rubert-tiny2-based neural model detects social engineering scenarios in real time.",
    feature3Title: "Free and Secure",
    feature3Desc: "The app is available for free on RuStore. Install it and protect your loved ones from scammers.",
    note: "Available for Android devices. Internet is only needed for the initial download.",
  },

  comparisonPage: {
    title: "Honest Comparison",
    subtitle: "An objective comparative analysis of TrustNode vs leading global security solutions",
    badge: "COMPARISON // FACTS",
    thFeature: "Feature",
    thTrustNode: "TrustNode (TN1)",
    thKaspersky: "Kaspersky",
    thNorton: "Norton",
    thBitdefender: "Bitdefender",
    thGoogleSpam: "Google Protection",
    features: {
      textAnalysis: "Text Analysis (BERT, rules, risk scoring, URL, homoglyphs)",
      voiceAnalysis: "Real-time Call Voice Analysis",
      visualAnalysis: "Visual Analysis (fake UIs, wallets, phishing)",
      socialEngDetect: "Social Engineering Detection (Neural + AI Agents)",
      behavioralRasp: "Behavioral Analysis & RASP Monitoring",
      familyDefense: "Parent-Child Family Defense (Guardian System)",
      beaconSystem: "Beacon System (VK Contact Alerts on fraud)",
      offlineOnDevice: "100% Offline (On-device execution)",
      pricing: "Monetization Model"
    },
    status: {
      yes: "✅ Yes",
      no: "❌ No",
      inDev: "🛠 In Dev"
    },
    pricingValues: {
      trustNode: "Free",
      kaspersky: "Sub from ~1990₽/yr",
      norton: "Sub from ~$39.99/yr",
      bitdefender: "Sub from ~$29.99/yr",
      googleSpam: "Free"
    },
    disclaimer: "We strive for maximum objectivity. If you spot any inaccuracy, please contact us on Telegram.",
    telegramBtn: "Contact on Telegram"
  },

  roadmapPage: {
    title: "Development Roadmap",
    subtitle: "Current progress of TrustNode, responsible disclosure policy, and semantic core deployment timeline",
    badge: "STATUS & PLAN",
    readyMvp: "READY MVP",
    underDevelopment: "UNDER DEVELOPMENT",
    conceptualSpec: "CONCEPTUAL SPEC",
    tn1Desc: "Fully operational and tested Android package for localized signature protection. Requires only model threshold calibration and weight fine-tuning.",
    packageLabel: "PACKAGE:",
    coreEngineLabel: "CORE ENGINE:",
    statusLabel: "STATUS:",
    fullyReady: "FULLY READY (MVP)",
    sourceGithub: "Source code on GitHub",
    tn3Desc: "7-layer patent PHANTOM 2.0 architecture featuring independent AI consensus routing and Beacon notification networks.",
    deadlineLabel: "DEADLINE:",
    september2026: "SEPTEMBER 2026",
    phaseLabel: "PHASE:",
    architecturePhase: "Architecture Phase",
    kiraDesc: "Speech-intent analyzer to capture and neutralize manipulative speech acts during live dial channels.",
    designPhase: "Design Phase",
    coreComponentLabel: "CORE COMPONENT:",
    integrationLabel: "INTEGRATION:",
    ramAddon: "Local RAM Add-on",
    disclosureTitle: "Responsible Disclosure Policy",
    disclosureDesc: "If you discover a potential vulnerability in TrustNode, please report it directly to our team. We do not publish vulnerability details until they are resolved and appreciate responsible disclosure from security researchers.",
    reportTelegram: "Report via Telegram",
    reportVk: "Report via VK",
    reportGithub: "Report via GitHub",
    milestonesTitle: "Development & Release Milestones",
    milestones: [
      { date: "2024–2025", title: "Academic origins & regional NIR victory", desc: "Project born at Chelyabinsk Radiotechnical College (KB-284) and won 1st place in the regional scientific research competition." },
      { date: "v1.2.0", title: "TrustNode 1 (TN1) — Ready MVP", desc: "Fully operational Android package for localized signature protection. Calibration phase for threshold tuning and weight fine-tuning." },
      { date: "2025", title: "ONNX core integration", desc: "Deployment of rubert_fraud_int8.onnx model for local on-device semantic inference without cloud dependency." },
      { date: "SEPTEMBER 2026", title: "PHANTOM 2.0 — Architecture Phase", desc: "7-layer patent TN3 architecture with independent AI consensus routing. Deadline: September 2026." },
      { date: "SEPTEMBER 2026", title: "Federal superfinal (Moscow)", desc: "Project presentation at the prestigious federal scientific research superfinal." },
      { date: "v3.0-design", title: "Kira Voice Assistant — Conceptual Spec", desc: "Speech-intent analyzer to neutralize manipulative speech acts during live calls. Design phase." }
    ],
    allProjectsGithub: "All TrustNode projects on GitHub"
  }
};

const es: Translations = {
  nav: {
    threats: "Amenazas",
    howItWorks: "Cómo funciona",
    security: "Seguridad",
    earlyAccess: "Acceso anticipado"
  },
  brand: {
    tagline: "Escudo en el dispositivo",
    footerTagline: "Protegiendo la semántica del dispositivo"
  },
  hero: {
    badge: "PROTOCOLO DE PROTECCIÓN // ACTIVO",
    titleSub: "[ UNA CÚPULA DE SEGURIDAD LOCAL PARA TU SMARTPHONE ]",
    scrollStart: "DESLIZA PARA COMENZAR",
    scrollContinue: "SIGUE DESLIZANDO PARA EMPEZAR",
    enterDome: "ENTRAR A LA CÚPULA"
  },
  mobileCards: [
    {
      badge: "[ ¿QUÉ ES? ]",
      title: "Cúpula de Seguridad Local",
      desc: "TrustNode es una cúpula personal de ciberseguridad para tu smartphone, que protege el dispositivo de amenazas digitales ocultas en tiempo real."
    },
    {
      badge: "[ ¿PARA QUÉ SIRVE? ]",
      title: "Protección de Nueva Generación",
      desc: "Los antivirus móviles tradicionales son inútiles contra el phishing encubierto y las inyecciones. TrustNode bloquea la actividad maliciosa en tiempo real."
    },
    {
      badge: "[ ¿POR QUÉ FUNCIONA? ]",
      title: "Seguridad en el Dispositivo",
      desc: "Todos los algoritmos se ejecutan totalmente en local, en tu procesador. Ningún archivo personal, conversación o registro de tráfico sale nunca del dispositivo."
    },
    {
      badge: "[ ¿PARA QUIÉN? ]",
      title: "Privacidad Absoluta",
      desc: "Diseñado para entusiastas de las criptomonedas, emprendedores y cualquiera que valore la privacidad absoluta de sus transacciones y la seguridad de sus activos."
    }
  ],
  mobileTabLabels: [
    "QUÉ",
    "PARA QUÉ",
    "POR QUÉ",
    "PARA QUIÉN"
  ],
  replayIntro: "REPETIR INTRO (SUBIR)",
  problem: {
    badge: "Desafíos actuales",
    titleLine1: "¿Por qué las soluciones existentes",
    titleHighlight: "ya no funcionan?",
    subtitle: "La industria del cibercrimen evoluciona más rápido de lo que pueden seguirle las bases de firmas centralizadas en servidores.",
    items: [
      {
        title: "La epidemia de la ingeniería social",
        desc: "Los estafadores roban miles de millones mediante llamadas y mensajería, usando guiones avanzados de presión psicológica."
      },
      {
        title: "La privacidad comprometida",
        desc: "Las soluciones de protección actuales envían registros de tus llamadas y mensajes a servidores en la nube para analizarlos."
      },
      {
        title: "Inútiles sin conexión",
        desc: "Los sistemas antifraude tradicionales se desactivan al instante y dejan de protegerte en cuanto se pierde el internet móvil."
      }
    ]
  },
  how: {
    badge: "Arquitectura de seguridad",
    title: "El sistema de defensa",
    titleHighlight: "PHANTOM",
    subtitle: "Una cúpula multicapa desplegada localmente en tu smartphone. Ni un solo byte de datos personales sale del dispositivo.",
    layersHeading: "Capas de protección del dispositivo",
    layers: [
      {
        name: "Heurísticas rápidas",
        tech: "Regex y mapas de firmas",
        desc: "El primer filtro instantáneo de los flujos entrantes. Bloquea patrones conocidos de redes de spam, enlaces sospechosos y firmas de scripts fraudulentos sin consumir batería."
      },
      {
        name: "Clasificación por ML (rubert-tiny2)",
        tech: "ONNX Runtime / Modelo local de 28.4 MB",
        desc: "Una red neuronal comprimida analiza en tiempo real la semántica de la llamada o del texto del mensaje. Detecta manipulaciones ocultas, guiones de rol (\"cuenta segura\", \"familiar en apuros\") y presión psicológica."
      },
      {
        name: "Análisis de comportamiento",
        tech: "Máquina de estados sensible al contexto",
        desc: "Monitorea la dinámica de la interacción: velocidad de escritura, frecuencia de cambio a apps bancarias durante una llamada, retrasos anómalos y patrones de retención de atención."
      },
      {
        name: "Consenso PHANTOM",
        tech: "Motor de votación por consenso",
        desc: "Toma la decisión final ponderada a partir de las salidas de las tres capas. Ante una posible ataque, bloquea la interfaz, avisa al usuario y envía una notificación instantánea a un contacto de confianza."
      }
    ],
    usp: [
      {
        title: "IA local (en el dispositivo)",
        desc: "La red neuronal rubert-tiny2 está cuantizada y optimizada para procesadores móviles. Con 28.4 MB, puede mantener todos sus pesos en la RAM del teléfono, logrando inferencia en microsegundos."
      },
      {
        title: "Autonomía total",
        desc: "En el metro, en un avión o en medio del bosque: la capa de protección sigue funcionando sin internet ni red celular, sin depender de ninguna API externa."
      },
      {
        title: "Privacidad sin concesiones",
        desc: "Ninguna transcripción de texto, lista de contactos o registro se envía a la nube. Todo el cómputo permanece dentro del entorno aislado de la app."
      }
    ],
    sevenLayers: [
      {
        name: "Heurística rápida (HeuristicsLayer — Capa de heurísticas)",
        tech: "Regex & Signature Maps",
        desc: "Un filtro instantáneo y ligero para flujos de datos entrantes. Bloquea redes de spam conocidas, enlaces de phishing y patrones de automatización maliciosos sin agotar la batería."
      },
      {
        name: "Clasificación neuronal (BertPhantomClassifier — Clasificador BertPhantom)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "Una red neuronal rubert-tiny2 comprimida que analiza transcripciones de llamadas y textos en tiempo real. Detecta guiones conversacionales ocultos, manipulación y roles como 'cuenta segura'."
      },
      {
        name: "Ingeniería social (Social Eng. Layer — Capa de ingeniería social)",
        tech: "DeGenome (18 Primitives)",
        desc: "Identifica tácticas de manipulación utilizando la taxonomía DeGenome de 18 primitivas, descubriendo urgencia artificial, discursos de presión, desencadenantes de miedo y solicitudes de aislamiento."
      },
      {
        name: "Auditoría de comportamiento (Behavioral Layer — Capa de comportamiento)",
        tech: "Context-Aware State Machine",
        desc: "Realiza un seguimiento continuo de las interacciones del usuario en vivo: cadencia de escritura, retrasos en el procesamiento cognitivo y frecuencias de cambio entre aplicaciones financieras y de llamadas."
      },
      {
        name: "Verificación de reputación (Reputation Layer — Capa de reputación)",
        tech: "PCD Identity Profiles",
        desc: "Verifica las características del llamador con perfiles de identidad corporativa (PCD), identificando cuando los patrones de habla y las acciones no coinciden con los protocolos oficiales."
      },
      {
        name: "Resolución de consenso (Consensus Agent — Agente de consenso)",
        tech: "Consensus Voting Engine",
        desc: "Un motor de consenso JudgeAgent que agrega marcadores de riesgo de todos los niveles. Al identificar umbrales de amenaza, bloquea la ejecución, alerta al usuario y activa contactos de confianza."
      },
      {
        name: "Memoria inmune (Immune Memory — Memoria inmune)",
        tech: "Adaptive Incident Shield",
        desc: "Repositorio local seguro de ataques. Permite el ajuste fino en el dispositivo sin fugas basado en amenazas mitigadas recientemente para manejar futuras variaciones de ataques."
      }
    ],
    btnSimplified: "Vista simplificada",
    btnAdvanced: "Patente PHANTOM 2.0 (7 capas)",
    pipelineHeader: "Canalización oficial patentada PHANTOM 2.0"
  },
  trust: {
    badge: "Validación científica y reconocimiento",
    title: "Eficacia",
    titleHighlight: "demostrada",
    subtitle: "La base tecnológica de TrustNode se apoya en investigación matemática rigurosa y es reconocida por la comunidad científica experta.",
    stats: [
      {
        val: "IPC G06F 21/55",
        label: "Solicitud de patente",
        desc: "Solicitud de invención registrada oficialmente para un algoritmo único de análisis local de flujos de datos."
      },
      {
        val: "1er PUESTO",
        label: "Concurso regional de investigación",
        desc: "Máximo galardón en la categoría de Tecnologías de la Información al mejor sistema práctico de ciberseguridad."
      },
      {
        val: "MOSCÚ // 2026",
        label: "Final nacional",
        desc: "Invitación oficial a la gran final panrusa de investigación en TI en Moscú (septiembre de 2026)."
      },
      {
        val: "~82.4%",
        label: "Precisión (Accuracy)",
        desc: "Precisión de reconocimiento de ataques de ingeniería social dirigidos, medida en un conjunto de prueba a ciegas representativo."
      }
    ]
  },

  header: {
    rustore: "Descargar en RuStore",
    radar: "Product Radar",
    ecoOn: "Modo ecológico activado",
    ecoOff: "Modo ecológico desactivado",
    seniorOn: "Modo para mayores activado",
    seniorOff: "Modo para mayores (texto más grande)",
    lang: "Cambiar idioma",
  },
  footer: {
    copyright: "© {year} TrustNode Protocol. Todos los derechos reservados.",
    privacyLink: "Política de privacidad (Ley Federal 152-FZ de Rusia)",
    termsLink: "Términos de uso",
    version: "On-Device ML Fraud Shield // v1.2.0 // conforme a la Ley 152-FZ",
      githubOrg: "Todos los proyectos de TrustNode en GitHub",
},
  cookie: {
    badgeLabel: "[ SEGURIDAD DE LA INFORMACIÓN // LEY RUSA 152-FZ ]",
    text: "Nos importa tu privacidad. Este sitio usa cookies anonimizadas y almacenamiento local para recordar tus preferencias de gráficos y el modo eco. Consulta nuestra",
    privacyLinkText: "Política de privacidad",
    suffix: "para más detalles.",
    audit: "DETALLES LEGALES",
    accept: "Aceptar",
    reject: "Rechazar"
  },
  legal: {
    privacyTitle: "Política de privacidad",
    termsTitle: "Términos de uso",
    tabPrivacy: "POLÍTICA DE PRIVACIDAD (LEY RUSA 152-FZ)",
    tabTerms: "TÉRMINOS DE USO",
    closeAria: "Cerrar",
    acknowledge: "Entendido",
    privacy: {
      s1: {
        heading: "[ DISPOSICIONES GENERALES ]",
        body: "Esta Política de Privacidad se redacta conforme a la Ley Federal de Rusia N.º 152-FZ «Sobre Datos Personales» del 27 de julio de 2006. Define cómo el equipo del proyecto TrustNode Protocol (el «Operador») procesa los datos personales de los usuarios y las medidas de seguridad aplicadas. Razón social y datos de registro de la persona jurídica o autónomo que actúa como Operador: [TODO: por confirmar]."
      },
      s2: {
        heading: "[ EL PRINCIPIO DE LA CÚPULA: 100% SEGURO PARA TU PRIVACIDAD ]",
        noticeLabel: "Aviso crítico:",
        noticeBody: "El sitio web de TrustNode NO recopila, procesa, almacena ni transmite directamente tus datos personales, dirección de correo, contraseñas o archivos privados. Todos los mecanismos de protección de la app PHANTOM funcionan exclusivamente de forma local (on-device) en el procesador de tu smartphone."
      },
      s3: {
        heading: "[ DATOS PROCESADOS POR EL SITIO ]",
        intro: "Visitar este recurso informativo puede implicar el procesamiento automático de datos técnicos exclusivamente anonimizados, como:",
        items: [
          "Cookies (necesarias para almacenar en caché el rendimiento y la configuración del modo eco);",
          "Encabezados técnicos anónimos e IP, sin vincularse a un nombre o persona concreta;",
          "Ajustes de la interfaz (modos gráficos seleccionados)."
        ]
      },
      s4: {
        heading: "[ DESCARGA DE LA APLICACIÓN ]",
        body: "La descarga de la aplicación TrustNode se realiza a través de plataformas oficiales: la tienda RuStore y GitHub. El sitio web de TrustNode no recopila ni procesa los datos personales de los usuarios: todos los datos analizados por la aplicación se procesan exclusivamente de forma local en el dispositivo del usuario."
      },
      s5: {
        heading: "[ LOCALIZACIÓN Y SEGURIDAD DEL ALMACENAMIENTO ]",
        body: "De acuerdo con la legislación rusa, si durante la correspondencia individual por mensajería se registran datos personales de ciudadanos rusos, el Operador se compromete a almacenarlos, organizarlos y procesarlos exclusivamente mediante bases de datos ubicadas en territorio de la Federación de Rusia."
      },
      s6: {
        heading: "[ INFORMACIÓN DE CONTACTO ]",
        bodyPrefix: "Para cualquier pregunta sobre el procesamiento de información técnica o el cumplimiento de la Ley 152-FZ, puedes contactar directamente a los desarrolladores a través del canal oficial de Telegram del proyecto: ",
        bodySuffix: "."
      },
      s7: {
        heading: "[ PLATAFORMAS EXTERNAS DE DISTRIBUCIÓN ]",
        bodyPrefix: "La descarga e instalación de la aplicación desde la tienda RuStore o GitHub se rige por las normas de las respectivas plataformas. TrustNode no actúa como operador de datos personales cuando se utilizan plataformas externas: ",
        bodySuffix: " La exactitud y aplicabilidad de estos enlaces debe ser confirmada por el propietario del sitio antes de su publicación."
      }
    },
    terms: {
      s1: {
        heading: "[ 1. ESTADO DEL SITIO Y EXENCIÓN DE RESPONSABILIDAD ]",
        body: "Este sitio web es el recurso promocional oficial del proyecto TrustNode («el software TrustNode»). Tiene un carácter exclusivamente informativo y no constituye una oferta pública en el sentido del Artículo 437(2) del Código Civil de Rusia. Todas las condiciones de acceso anticipado a las licencias se acuerdan de forma individual."
      },
      s2: {
        heading: "[ 2. AUSENCIA DE HERRAMIENTAS DE CIFRADO (CRIPTOGRAFÍA) ]",
        noticeLabel: "Advertencia legal importante:",
        noticeBody: "El software TrustNode es un analizador heurístico semántico de tráfico local y patrones de texto. NO contiene herramientas de cifrado criptográfico ni modifica el código fuente de los protocolos del sistema, por lo que no está sujeto a la licencia obligatoria del FSB conforme al Decreto del Gobierno de Rusia N.º 313."
      },
      s3: {
        heading: "[ 3. PROPIEDAD INTELECTUAL ]",
        body: "Todos los materiales gráficos, marcas registradas, modelos 3D, el código fuente del sitio y los algoritmos del sistema PHANTOM son propiedad intelectual de los desarrolladores de TrustNode Protocol y están protegidos por la Parte IV del Código Civil de Rusia. La copia, descompilación o distribución no autorizada se persigue conforme al Art. 146 del Código Penal de Rusia."
      },
      s4: {
        heading: "[ 4. NORMAS DE USO DE LAS LICENCIAS ]",
        body: "El acceso anticipado gratuito se concede exclusivamente bajo un Acuerdo de Licencia de Usuario Final (EULA) individual, firmado o aceptado electrónicamente durante la instalación. Está prohibido usar el software TrustNode para interceptar ilegalmente el tráfico de terceros o realizar cualquier otra actividad ilícita en redes de telecomunicaciones de Rusia."
      },
      s5: {
        heading: "[ 5. MODIFICACIONES DEL ACUERDO ]",
        body: "La administración del sitio se reserva el derecho de modificar unilateralmente los términos de este Acuerdo sin previo aviso a los usuarios. La versión vigente siempre se publica en esta página."
      }
    }
  },
  pageNames: {
    home: "Inicio",
    "how-it-works": "Cómo funciona",
    tech: "Tecnología",
    about: "Nosotros",
    download: "Descargar",
    comparison: "Comparación",
    "not-found": "404"
  },
  realDev: {
    title: "Verificación del Proyecto",
    subtitle: "Prueba documental de desarrollo activo, credenciales académicas y artefactos de arquitectura de software",
    badge: "EVIDENCIA DE DESARROLLO // CREDENCIALES",
    devUi: {
      awards: "Premios y Ciencia",
      graph: "Mapa de Desarrollo",
      core: "Motor ONNX",
      recipient: "RECEPTOR",
      inst: "INSTITUCIÓN",
      event: "EVENTO CIENTÍFICO",
      nodes: "NODOS ACTIVOS",
      conns: "CONEXIONES TOTALES",
      specs: "ESPECIFICACIONES DEL MODELO",
      baseArch: "Arquitectura Base:",
      params: "Parámetros Totales:",
      latency: "Latencia de Inferencia:",
      copied: "¡Copiado!",
      copyName: "Copiar Nombre",
      dlOnnx: "Descargar ONNX"
    },
    awardDetails: {
      title: "Diploma de Investigación Científica",
      issuer: "Ministerio de Educación y Ciencia de la Región de Cheliábinsk",
      institution: "Colegio Radiotécnico de Cheliábinsk (ChRT)",
      recipient: "Pitolin Mikhail Evgenyevich",
      event: "Fase III del concurso regional de trabajos de investigación científica estudiantil de la Región de Cheliábinsk, 2026.",
      desc: "Reconocimiento oficial de la excelencia científica de los algoritmos de defensa de TrustNode en la categoría de Ciberseguridad. La investigación se centra en la clasificación semántica localizada de amenazas de ingeniería social en la RAM de dispositivos móviles.",
      badge: "PREMIO REGIONAL"
    },
    graphDetails: {
      title: "Mapa de Conexiones de Obsidian",
      subtitle: "Una instantánea del repositorio real y la base de conocimientos del proyecto",
      nodesCount: "74 nodos activos",
      edgesCount: "328 conexiones",
      desc: "Todas las etapas de desarrollo, desde el diseño de los módulos HeuristicsLayer y BertPhantomClassifier hasta el desarrollo de la configuración de cuantización INT8 y las pruebas de seguridad, están documentadas en un único gráfico semántico de Obsidian, lo que demuestra un diseño arquitectónico integral.",
      badge: "BÓVEDA DE OBSIDIAN ACTIVA"
    },
    onnxDetails: {
      title: "Modelo de Red Neuronal de Producción",
      filename: "rubert_fraud_int8.onnx",
      size: "28.4 MB",
      format: "ONNX Runtime (cuantizado en INT8)",
      desc: "Se integra en la raíz del proyecto un archivo de pesos binarios reales del modelo de lenguaje rubert-tiny2 altamente optimizado y cuantizado al formato entero INT8. El modelo está ajustado para una inferencia ultra rápida en CPU en dispositivos móviles y se ejecuta 100% localmente en RAM.",
      badge: "INFERENCIA LOCAL"
    }
  },
  origin: {
    title: "Historia del Proyecto",
    subtitle: "Desde las investigaciones de tesis de un estudiante de ciberseguridad hasta patentes FIPS y reconocimiento federal",
    badge: "HISTORIA Y EQUIPO",
    timeline: [
      {
        badge: "CRTC // KB-284",
        title: "Bases Académicas y Especialización",
        desc: "El proyecto nació en la Escuela Radiotécnica de Chelyabinsk dentro del grupo KB-284 (Especialidad 10.02.05 — Seguridad de la Información en Sistemas Automatizados), bajo la dirección científica de Natalia Anatolyevna Morozkova."
      },
      {
        badge: "INVESTIGACIÓN // 1.ER LUGAR",
        title: "Triunfo en el concurso regional",
        desc: "El trabalho integral y el innovador algoritmo de TrustNode le otorgaron al proyecto el 1.er lugar en el concurso regional de investigación científica en la sección de 'Tecnologías de la Información'."
      },
      {
        badge: "MOSCÚ // SEPTIEMBRE 2026",
        title: "Pase a la súper final federal",
        desc: "Como resultado de la victoria, la escuela financió por completo el viaje del autor a Moscú para participar en la súper final nacional de proyectos de investigación en septiembre de 2026."
      },
      {
        badge: "ARQUITECTO + AGENTES IA",
        title: "Paradigma de desarrollo del futuro",
        desc: "Diseñado por un único desarrollador bajo la metodología 'Arquitecto + Agentes de IA'. La arquitectura de segurança y los algoritmos son del autor, mientras que la codificación en Kotlin/C++ se delega en la IA."
      }
    ]
  },
  security: {
    title: "Seguridad de la Cúpula",
    subtitle: "Cómo TrustNode protege sus propios algoritmos y sus datos contra análisis y hackeos",
    badge: "MODELO DE PROTECCIÓN DE LA APLICACIÓN",
    complianceLabel: "CLASIFICACIÓN DE CUMPLIMIENTO LEGAL Y DE SEGURIDAD",
    complianceText: "TrustNode se clasifica como un analizador heurístico semántico de datos locales y patrones de texto. El sistema NO contiene herramientas de cifrado para tráfico externo, por lo que no requiere licencias obligatorias del Servicio Federal de Seguridad (FSB) de Rusia.",
    features: [
      {
        title: "Almacenamiento Seguro VAULT",
        desc: "Cifrado AES-256-GCM respaldado por chips físicos Android Keystore / StrongBox. Las bases de datos locales están protegidas mediante SQLCipher y PBKDF2+HKDF."
      },
      {
        title: "Protección Activa AEGIS RASP",
        desc: "Autoprotección de la aplicación en tiempo de ejecución (RASP). Detecta depuración (Anti-Debug), privilegios de root, emuladores e intentos de inyección de código."
      },
      {
        title: "Motor de Autoauditoría Periódica",
        desc: "Comprobaciones en segundo plano de la integridad de los archivos ejecutables a través de WorkManager. Calcula sumas de comprobación CRC32 de binarios nativos NDK."
      },
      {
        title: "Espacio de Trabajo Local y Ley 152-FZ",
        desc: "Cumplimiento estricto de la ley de datos personales. Los registros de voz, archivos y transcripciones se procesan solo en la RAM del dispositivo y nunca se envían a servidores."
      }
    ]
  },
  kira: {
    title: "Asistente de Voz KIRA",
    subtitle: "Un bucle de voz inteligente que se ejecuta directamente en la memoria RAM de su teléfono",
    badge: "CRONOGRAMA DEL PROYECTO: KIRA",
    features: [
      {
        title: "Clasificador de Intenciones Local",
        desc: "Extensión entrenada sobre la red rubert-tiny2 básica. Reconoce entre 15 y 20 intenciones de seguridad especializadas, añadiendo solo ~200 KB de peso al modelo."
      },
      {
        title: "Ejecución 100% Fuera de Línea",
        desc: "Sin conexiones a LLM en la nube. Toda la estructura semántica y las plantillas de respuestas están empaquetadas en la aplicación, funcionando sin conexión con latencia ultra baja."
      },
      {
        title: "Conjunto de Datos Sintéticos",
        desc: "Entrenada con diálogos sintéticos altamente especializados de esquemas de fraude, generados en la nube de Google Colab mediante Llama 3.1 y Qwen2.5."
      }
    ]
  },
  explore: {
    title: "Explore el protocolo de seguridad",
    subtitle: "Obtenga más información sobre la IA local y la base científica de TrustNode",
    card1Title: "Tecnología de cúpula",
    card1Badge: "SISTEMA PHANTOM",
    card1Desc: "Desglose técnico del domo de seguridad de 7 capas PHANTOM 2.0 y el asistente de voz inteligente KIRA que se ejecuta completamente en el dispositivo.",
    card1Btn: "Ver Tecnología →",
    card2Title: "Eficacia Demostrada",
    card2Badge: "VALIDACIÓN Y PATENTES",
    card2Desc: "Patente oficial, primer puesto en concurso regional de investigación, final nacional en Moscú e historia del proyecto.",
    card2Btn: "Sobre Nosotros →",
    card3Title: "Descargar la aplicación",
    card3Badge: "INSTALACIÓN // ANDROID",
    card3Desc: "Descargue TrustNode TN1 gratis — la aplicación lista para la protección local contra fraudes y spam. Disponible en RuStore.",
    card3Btn: "Descargar aplicación →",
    card4Title: "Comparación Honesta",
    card4Badge: "HECHOS Y COMPETIDORES",
    card4Desc: "Una tabla comparativa objetiva de la funcionalidad de TrustNode con los competidores del mercado en parámetros clave.",
    card4Btn: "Abrir Tabla de Comparación →"
  },
  assembly: {
    leftPrimary: "OFFLINE-FIRST",
    leftSub: "// LOS DATOS NUNCA SALEN DEL DISPOSITIVO",
    rightPrimary: "ZERO TELEMETRY",
    rightSub: "// SIN TELEMETRÍA"
  },
  earlyAccessPage: {
    title: "Descargar TrustNode",
    subtitle: "Obtenga gratis la aplicación TrustNode TN1: protección local contra estafas telefónicas y spam en su dispositivo.",
    badge: "DESCARGA GRATUITA",
    back: "Volver al inicio",
    rustoreBtn: "Descargar en RuStore",
    githubBtn: "Descargar APK desde GitHub",
    feature1Title: "Protección 100% local",
    feature1Desc: "Todas las verificaciones de llamadas y mensajes se realizan en su dispositivo: sus datos nunca salen del teléfono.",
    feature2Title: "IA contra estafadores",
    feature2Desc: "El modelo neuronal basado en rubert-tiny2 detecta escenarios de ingeniería social en tiempo real.",
    feature3Title: "Gratis y seguro",
    feature3Desc: "La aplicación está disponible gratis en RuStore. Instálela y proteja a sus seres queridos.",
    note: "Disponible para dispositivos Android. Solo se necesita internet para la descarga inicial.",
  },

  comparisonPage: {
    title: "Comparación honesta",
    subtitle: "Un análisis comparativo objetivo de TrustNode frente a las principales soluciones de seguridad globales",
    badge: "COMPARACIÓN // HECHOS",
    thFeature: "Característica",
    thTrustNode: "TrustNode (TN1)",
    thKaspersky: "Kaspersky",
    thNorton: "Norton",
    thBitdefender: "Bitdefender",
    thGoogleSpam: "Google Protection",
    features: {
      textAnalysis: "Análisis de texto (BERT, reglas, puntuación de riesgo, URL, homoglifos)",
      voiceAnalysis: "Análisis de voz de llamadas en tiempo real",
      visualAnalysis: "Análisis visual (interfaces falsas, carteras, phishing)",
      socialEngDetect: "Detección de ingeniería social (red neuronal + agentes de IA)",
      behavioralRasp: "Análisis de comportamiento y monitoreo RASP",
      familyDefense: "Defensa familiar Parent-Child (sistema Guardian)",
      beaconSystem: "Sistema Beacon (alertas a contactos de VK ante fraudes)",
      offlineOnDevice: "100% sin conexión (ejecución en el dispositivo)",
      pricing: "Modelo de monetización"
    },
    status: {
      yes: "✅ Sí",
      no: "❌ No",
      inDev: "🛠 En desarrollo"
    },
    pricingValues: {
      trustNode: "Gratis",
      kaspersky: "Suscripción desde ~1990₽/año",
      norton: "Suscripción desde ~$39.99/año",
      bitdefender: "Suscripción desde ~$29.99/año",
      googleSpam: "Gratis"
    },
    disclaimer: "Nos esforzamos por lograr la máxima objetividad. Si detectas alguna imprecisión, contáctanos en Telegram.",
    telegramBtn: "Contactar por Telegram"
  },

  roadmapPage: {
    title: "Hoja de Ruta de Desarrollo",
    subtitle: "Progreso actual de TrustNode, política de divulgación responsable y cronograma de despliegue del núcleo semántico",
    badge: "ESTADO Y PLAN",
    readyMvp: "LISTO MVP",
    underDevelopment: "EN DESARROLLO",
    conceptualSpec: "ESPECIFICACIÓN CONCEPTUAL",
    tn1Desc: "Paquete Android totalmente operativo y probado para la protección local por firmas. Solo requiere calibración de umbrales del modelo y ajuste fino de pesos.",
    packageLabel: "PAQUETE:",
    coreEngineLabel: "MOTOR PRINCIPAL:",
    statusLabel: "ESTADO:",
    fullyReady: "TOTALMENTE LISTO (MVP)",
    sourceGithub: "Código fuente en GitHub",
    tn3Desc: "Arquitectura patentada PHANTOM 2.0 de 7 capas con enrutamiento de consenso de IA independiente y redes de notificación Beacon.",
    deadlineLabel: "PLAZO:",
    september2026: "SEPTIEMBRE 2026",
    phaseLabel: "FASE:",
    architecturePhase: "Fase de Arquitectura",
    kiraDesc: "Analizador de intención del habla para capturar y neutralizar actos de habla manipuladores durante llamadas en vivo.",
    designPhase: "Fase de Diseño",
    coreComponentLabel: "COMPONENTE PRINCIPAL:",
    integrationLabel: "INTEGRACIÓN:",
    ramAddon: "Módulo de RAM local",
    disclosureTitle: "Política de divulgación responsable",
    disclosureDesc: "Si descubre una posible vulnerabilidad en TrustNode, repórtela directamente a nuestro equipo. No publicamos detalles de vulnerabilidades hasta que se resuelven y valoramos la divulgación responsable por parte de los investigadores de seguridad.",
    reportTelegram: "Reportar por Telegram",
    reportVk: "Reportar por VK",
    reportGithub: "Reportar por GitHub",
    milestonesTitle: "Hitos de Desarrollo y Lanzamientos",
    milestones: [
      { date: "2024–2025", title: "Orígenes académicos y victoria regional en NIR", desc: "Proyecto nacido en la Facultad de Radiotelecomunicación de Cheliábinsk (KB-284), ganador del 1.er lugar en el concurso regional de investigación científica." },
      { date: "v1.2.0", title: "TrustNode 1 (TN1) — Ready MVP", desc: "Paquete Android totalmente operativo para protección local por firmas. Fase de calibración de umbrales y ajuste fino de pesos." },
      { date: "2025", title: "Integración del núcleo ONNX", desc: "Despliegue del modelo rubert_fraud_int8.onnx para inferencia semántica local en el dispositivo sin dependencia de la nube." },
      { date: "SEPTIEMBRE 2026", title: "PHANTOM 2.0 — Fase de Arquitectura", desc: "Arquitectura patentada TN3 de 7 capas con enrutamiento de consenso de IA independiente. Plazo: septiembre de 2026." },
      { date: "SEPTIEMBRE 2026", title: "Superfinal federal (Moscú)", desc: "Presentación del proyecto en la prestigiosa superfinal federal de investigación científica." },
      { date: "v3.0-design", title: "Kira Voice Assistant — Especificación Conceptual", desc: "Analizador de intención del habla para neutralizar actos de habla manipuladores durante llamadas en vivo. Fase de diseño." }
    ],
    allProjectsGithub: "Todos los proyectos de TrustNode en GitHub"
  }
};

const zh: Translations = {
  nav: {
    threats: "威胁",
    howItWorks: "工作原理",
    security: "安全性",
    earlyAccess: "抢先体验"
  },
  brand: {
    tagline: "本机防护罩",
    footerTagline: "守护设备语义安全"
  },
  hero: {
    badge: "防护协议 // 已激活",
    titleSub: "[ 为你的智能手机打造的本地安全穹顶 ]",
    scrollStart: "向下滚动开始",
    scrollContinue: "继续滚动以开始",
    enterDome: "进入穹顶"
  },
  mobileCards: [
    {
      badge: "[ 这是什么? ]",
      title: "本地安全穹顶",
      desc: "TrustNode 是为你的智能手机打造的个人网络安全穹顶，实时保护设备免受隐藏的数字威胁。"
    },
    {
      badge: "[ 为什么需要它? ]",
      title: "新一代防护",
      desc: "传统手机杀毒软件对隐蔽的网络钓鱼和注入攻击无能为力。TrustNode 可实时拦截恶意活动。"
    },
    {
      badge: "[ 它为什么有效? ]",
      title: "设备端安全",
      desc: "所有算法完全在你的处理器本地运行。任何个人文件、通话记录或流量日志都不会离开设备。"
    },
    {
      badge: "[ 适合谁使用? ]",
      title: "绝对隐私",
      desc: "专为加密货币爱好者、企业家以及任何重视交易隐私、资产安全和保密性的人打造。"
    }
  ],
  mobileTabLabels: [
    "是什么",
    "为什么",
    "原理",
    "适合谁"
  ],
  replayIntro: "重播开场动画（回到顶部）",
  problem: {
    badge: "当前面临的挑战",
    titleLine1: "为什么现有方案",
    titleHighlight: "已经不再奏效？",
    subtitle: "网络犯罪产业的演化速度已经超过了集中式服务器特征库的更新速度。",
    items: [
      {
        title: "社会工程学攻击泛滥",
        desc: "诈骗分子通过电话和即时通讯软件，利用高级心理施压话术盗取巨额资金。"
      },
      {
        title: "隐私被侵犯",
        desc: "现有的防护方案会把你的通话和聊天记录上传到云端服务器进行分析。"
      },
      {
        title: "断网即失效",
        desc: "传统反欺诈系统一旦手机网络中断，就会立即失效，无法再保护你。"
      }
    ]
  },
  how: {
    badge: "安全架构",
    title: "PHANTOM",
    titleHighlight: "防护体系",
    subtitle: "多层安全穹顶完全部署在你的手机本地。个人数据不会有一个字节离开设备。",
    layersHeading: "设备防护层级",
    layers: [
      {
        name: "快速启发式检测",
        tech: "正则表达式与特征库",
        desc: "对传入数据流的首道即时过滤。可拦截已知垃圾信息网络的模式、可疑链接和已知诈骗脚本特征，且不会消耗额外电量。"
      },
      {
        name: "机器学习分类（rubert-tiny2）",
        tech: "ONNX Runtime / 28.4 MB 本地模型",
        desc: "一个经过压缩的神经网络实时分析通话或消息文本的语义，可识别隐藏的操纵手法、角色扮演话术（如“安全账户”“亲人遇险”）以及心理施压。"
      },
      {
        name: "行为分析",
        tech: "情境感知状态机",
        desc: "追踪交互动态：打字速度、通话过程中切换到银行应用的频率、异常延迟以及注意力控制模式。"
      },
      {
        name: "PHANTOM 共识引擎",
        tech: "共识投票引擎",
        desc: "根据三个层级的输出结果做出最终的加权判断。一旦怀疑存在攻击，即锁定界面、警示用户，并向可信联系人发送即时推送通知。"
      }
    ],
    usp: [
      {
        title: "本地 AI（设备端运行）",
        desc: "rubert-tiny2 神经网络经过量化并针对移动处理器优化，体积仅 28.4 MB，可将全部权重保留在手机内存中，实现微秒级推理速度。"
      },
      {
        title: "完全自主运行",
        desc: "无论在地铁、飞机上，还是在偏远山林中，防护层都能在没有网络或手机信号的情况下持续工作，不依赖任何外部 API。"
      },
      {
        title: "毫不妥协的隐私保护",
        desc: "任何文字记录、联系人列表或日志都不会被发送到云端，所有计算都在应用的独立沙盒环境中完成。"
      }
    ],
    sevenLayers: [
      {
        name: "快速启发式分析 (HeuristicsLayer — 启发式层)",
        tech: "Regex & Signature Maps",
        desc: "对输入数据流进行即时、轻量级的过滤。在不消耗电池电量的情况下，阻止已知的垃圾邮件网络、钓鱼链接和恶意自动化模式。"
      },
      {
        name: "神经网络分类 (BertPhantomClassifier — BertPhantom 分类器)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "一个压缩的 rubert-tiny2 神经网络，实时分析通话记录和文本。检测隐藏的对话脚本、操纵行为和诸如“安全账户”之类扮演的角色。"
      },
      {
        name: "社会工程学分析 (Social Eng. Layer — 社会工程层)",
        tech: "DeGenome (18基元)",
        desc: "使用包含18个基元的 DeGenome 分类法识别操纵策略，揭示人为制造的紧迫感、施压言论、恐惧触发因素和孤立请求。"
      },
      {
        name: "行为审计 (Behavioral Layer — 行为层)",
        tech: "Context-Aware State Machine",
        desc: "持续跟踪用户的实时交互：打字节奏、认知处理延迟以及通话期间在金融应用和通话应用之间的切换频率。"
      },
      {
        name: "信誉验证 (Reputation Layer — 信誉层)",
        tech: "PCD Identity Profiles",
        desc: "将呼叫者特征与企业身份配置文件 (PCD) 进行交叉比对，识别言语模式和呼叫者行为与官方协议不匹配的情况。"
      },
      {
        name: "共识决策 (Consensus Agent — 共识代理)",
        tech: "Consensus Voting Engine",
        desc: "一个 JudgeAgent 共识引擎，汇总来自所有层级的风险标记。一旦确定达到威胁阈值，它将锁定执行，警告用户并触发受信联系人。"
      },
      {
        name: "免疫记忆 (Immune Memory — 免疫记忆)",
        tech: "Adaptive Incident Shield",
        desc: "本地安全的攻击存储库。允许基于最近缓解的威胁进行设备端零泄露安全微调，以应对未来的攻击变体。"
      }
    ],
    btnSimplified: "简化视图",
    btnAdvanced: "PHANTOM 2.0 专利 (7层)",
    pipelineHeader: "官方专利 PHANTOM 2.0 流程"
  },
  trust: {
    badge: "科学验证与认可",
    title: "经过验证的",
    titleHighlight: "有效性",
    subtitle: "TrustNode 的技术基础建立在严谨的数学研究之上，并获得了专家科学界的认可。",
    stats: [
      {
        val: "IPC G06F 21/55",
        label: "专利申请",
        desc: "已正式注册的发明专利申请，涉及一种独特的本地数据流分析算法。"
      },
      {
        val: "第一名",
        label: "地区级科研竞赛",
        desc: "在信息技术组别中荣获最佳实用网络安全系统的最高奖项。"
      },
      {
        val: "莫斯科 // 2026",
        label: "全国总决赛",
        desc: "受邀参加将于2026年9月在莫斯科举行的全俄IT科研总决赛。"
      },
      {
        val: "约 82.4%",
        label: "识别准确率",
        desc: "在具有代表性的盲测数据集上，针对定向社会工程学攻击的识别准确率。"
      }
    ]
  },

  header: {
    rustore: "在 RuStore 下载",
    radar: "Product Radar",
    ecoOn: "省电模式已开启",
    ecoOff: "省电模式已关闭",
    seniorOn: "长者模式已开启",
    seniorOff: "长者模式（大号字体）",
    lang: "切换语言",
  },
  footer: {
    copyright: "© {year} TrustNode Protocol。保留所有权利。",
    privacyLink: "隐私政策（俄罗斯联邦第152-FZ号法律）",
    termsLink: "用户协议",
    version: "本机机器学习反欺诈盾牌 // v1.2.0 // 符合第152-FZ号法律",
      githubOrg: "TrustNode 的所有项目都在 GitHub 上",
},
  cookie: {
    badgeLabel: "[ 信息安全 // 俄罗斯第152-FZ号法律 ]",
    text: "我们重视你的隐私。本网站使用匿名化的 Cookie 和本地存储，用于记住你的图形设置和节能模式偏好。请查看我们的",
    privacyLinkText: "隐私政策",
    suffix: "了解详情。",
    audit: "法律详情",
    accept: "同意",
    reject: "拒绝"
  },
  legal: {
    privacyTitle: "隐私政策",
    termsTitle: "用户协议",
    tabPrivacy: "个人数据处理政策（俄第152-FZ号法律）",
    tabTerms: "用户协议",
    closeAria: "关闭",
    acknowledge: "已了解",
    privacy: {
      s1: {
        heading: "[ 总则 ]",
        body: "本隐私政策依据2006年7月27日颁布的俄罗斯联邦第152-FZ号法律《个人数据法》制定，规定了 TrustNode Protocol 项目团队（以下简称“运营方”）处理用户个人数据的方式及相应的数据安全保障措施。 作为运营方的法人实体或个体工商户的名称及注册信息：[TODO：待确认]。"
      },
      s2: {
        heading: "[ 穹顶原则：100% 保护你的隐私 ]",
        noticeLabel: "重要提示：",
        noticeBody: "TrustNode 网站不会直接收集、处理、存储或传输你的个人数据、电子邮箱地址、密码或私密文件。PHANTOM 应用的所有防护机制均完全在你的智能手机处理器本地（设备端）运行。"
      },
      s3: {
        heading: "[ 网站处理的数据 ]",
        intro: "访问本信息网站时，可能会自动处理以下仅经过匿名化的技术数据：",
        items: [
          "Cookie（用于缓存性能参数和节能模式设置）；",
          "匿名技术请求头及IP地址，不与具体姓名或个人身份关联；",
          "界面设置（所选的图形模式）。"
        ]
      },
      s4: {
        heading: "[ 应用下载 ]",
        body: "下载 TrustNode 应用需通过官方平台：RuStore 商店和 GitHub。TrustNode 网站不收集也不处理用户的个人数据：应用分析的所有数据仅存在用户设备本地处理。"
      },
      s5: {
        heading: "[ 数据本地化与存储安全 ]",
        body: "根据俄罗斯法律规定，若在即时通讯个人往来过程中记录到俄罗斯公民的个人数据，运营方承诺仅使用位于俄罗斯联邦境内的数据库对其进行存储、整理和处理。"
      },
      s6: {
        heading: "[ 联系方式 ]",
        bodyPrefix: "如对技术信息处理或第152-FZ号法律合规性有任何疑问，可通过项目官方 Telegram 频道直接联系开发团队：",
        bodySuffix: "。"
      },
      s7: {
        heading: "[ 外部分发平台 ]",
        bodyPrefix: "从 RuStore 商店或 GitHub 下载并安装应用须遵守相应平台的规则。使用外部平台时，TrustNode 不作为个人数据的运营方：",
        bodySuffix: " 发布前，网站所有者必须确认这些链接的准确性和适用性。"
      }
    },
    terms: {
      s1: {
        heading: "[ 一、网站性质与免责声明 ]",
        body: "本网站是 TrustNode 项目（以下简称“TrustNode 软件”）的官方宣传网站，仅具有信息性质，不构成《俄罗斯民法典》第437条第2款所定义的公开要约。所有抢先体验许可证的授予条款均一对一单独商议。"
      },
      s2: {
        heading: "[ 二、不含加密（密码学）功能 ]",
        noticeLabel: "重要法律声明：",
        noticeBody: "TrustNode 软件是一款针对本地流量和文本模式的语义启发式分析工具，不包含任何加密技术手段，也不会修改系统协议的源代码，因此无需根据俄罗斯政府第313号令取得俄联邦安全局（FSB）的强制许可。"
      },
      s3: {
        heading: "[ 三、知识产权 ]",
        body: "本网站的所有图形素材、商标、3D模型、源代码以及 PHANTOM 系统的算法，均为 TrustNode Protocol 开发团队的知识产权，受《俄罗斯民法典》第四部分保护。任何未经授权的复制、反编译或分发行为，将依据《俄罗斯刑法典》第146条追究责任。"
      },
      s4: {
        heading: "[ 四、许可证使用规则 ]",
        body: "免费抢先体验仅依据在安装软件时以电子方式签署或接受的单独最终用户许可协议（EULA）授予。禁止将 TrustNode 软件用于非法拦截第三方流量，或在俄罗斯电信网络中从事任何其他违法行为。"
      },
      s5: {
        heading: "[ 五、协议变更 ]",
        body: "网站管理方保留单方面变更本协议条款的权利，无需事先通知用户。最新版本将始终发布在本页面。"
      }
    }
  },
  pageNames: {
    home: "首页",
    "how-it-works": "工作原理",
    tech: "技术",
    about: "关于我们",
    download: "下载",
    comparison: "对比",
    "not-found": "404"
  },
  realDev: {
    title: "项目验证",
    subtitle: "活跃开发、学术凭证及软件架构文物的证明文件",
    badge: "开发证据 // 凭证",
    devUi: {
      awards: "科研成果与奖项",
      graph: "研发图谱",
      core: "ONNX 核心引擎",
      recipient: "获奖人/研究员",
      inst: "研究机构",
      event: "学术比赛",
      nodes: "活跃节点",
      conns: "连接总数",
      specs: "核心模型规格",
      baseArch: "基础架构:",
      params: "参数总数:",
      latency: "推理延迟:",
      copied: "已复制!",
      copyName: "复制文件名",
      dlOnnx: "下载 ONNX"
    },
    awardDetails: {
      title: "科研成果证书",
      issuer: "车里雅宾斯克州教育与科学部",
      institution: "车里雅宾斯克无线电技术学院 (ChRT)",
      recipient: "Pitolin Mikhail Evgenyevich",
      event: "2026年车里雅宾斯克州职业教育机构学生科研论文区域竞赛第三阶段。",
      desc: "官方认可 TrustNode 防御算法在网络安全领域的科研卓越性。该研究专注于移动设备内存中社交工程威胁的本地化语义分类。",
      badge: "区域获奖者"
    },
    graphDetails: {
      title: "Obsidian 关系图谱",
      subtitle: "项目实际存储库和知识库的快照",
      nodesCount: "74 个活跃节点",
      edgesCount: "328 条连接",
      desc: "研发的所有阶段，从设计 HeuristicsLayer 和 BertPhantomClassifier 模块到开发 INT8 量化配置和安全性测试，全部记录在单个 Obsidian 语义图谱中，证明了其全面的架构设计。",
      badge: "OBSIDIAN 库激活"
    },
    onnxDetails: {
      title: "生产级神经网络模型",
      filename: "rubert_fraud_int8.onnx",
      size: "28.4 MB",
      format: "ONNX Runtime (INT8 量化)",
      desc: "项目根目录中集成了一个高度优化的 rubert-tiny2 语言模型的真实二进制权重文件，该文件已量化为 INT8 整数格式。该模型针对移动设备上的超快速 CPU 推理进行了微调，并在内存中 100% 本地执行。",
      badge: "本地推理"
    }
  },
  origin: {
    title: "项目历程与背景",
    subtitle: "从网络安全专业学生的毕业设计，到荣获国家专利与联邦级科技竞赛认可的演进历程",
    badge: "历史与团队",
    timeline: [
      {
        badge: "学院研究 // KB-284",
        title: "学术基础与专业领域",
        desc: "该项目诞生于车里雅宾斯克无线电技术学院，属于 KB-284 教学组（专业代码 10.02.05 —— 自动化系统信息安全），由导师 Natalia Anatolyevna Morozkova 指导。"
      },
      {
        badge: "科研竞赛 // 第一名",
        title: "区域科研竞赛中夺冠",
        desc: "TrustNode 的综合语义框架和创新算法使该项目在区域科学研究竞赛（信息技术组）中斩获第一名，肯定了其在实时防欺诈方面的成就。"
      },
      {
        badge: "莫斯科 // 2026年9月",
        title: "晋级国家级超级总决赛",
        desc: "基于在区域竞赛中的夺魁，学院全额资助作者前往莫斯科参加 2026 年 9 月举办的享有盛誉的全国研究成果超级总决赛。"
      },
      {
        badge: "系统架构师 + AI 智能体",
        title: "全新里程碑：面向未来的开发",
        desc: "该项目由独立开发者采用前沿的“架构师 + AI 智能体”模式设计：作者本人担任核心系统架构师与算法设计者，而代码编写（Kotlin/C++）则委托给 AI 助手完成。"
      }
    ]
  },
  security: {
    title: "穹顶安全防护",
    subtitle: "TrustNode 如何强化自身运行环境并保护本地用户分析免受逆向与攻击",
    badge: "应用程序加固模型",
    complianceLabel: "法律与安全合规分类",
    complianceText: "TrustNode 严格作为本地化内存环境中的语义启发式文本分析器运行。由于它不对外部网络负载进行加密或解密，因此不需要俄罗斯联邦安全局 (FSB) 的强制许可。",
    features: [
      {
        title: "VAULT 加密存储",
        desc: "由物理 Android Keystore / StrongBox 硬件芯片支持的军用级 AES-256-GCM 加密。本地数据集合通过 SQLCipher 和 PBKDF2+HKDF 进行加固。"
      },
      {
        title: "AEGIS 主动运行时保护 (RASP)",
        desc: "主动运行时应用程序自保护 (RASP)。持续审计内存完整性，拦截调试器、Root工具、模拟器环境和代码注入。"
      },
      {
        title: "Self-Audit 定期自检引擎",
        desc: "由 WorkManager 驱动的后台文件和组件完整性审计器。计算原生 NDK 二进制文件的 CRC32 校验和，以实时检测篡改。"
      },
      {
        title: "本地沙盒与俄罗斯 152-FZ 法律合规",
        desc: "完全符合个人数据保护法。所有通话转录、消息和内存日志均严格保存在本地设备 RAM 中，绝不发送到服务器。"
      }
    ]
  },
  kira: {
    title: "KIRA 语音助手",
    subtitle: "直接在手机运行内存中运行的智能语音分析回路",
    badge: "项目规划：KIRA",
    features: [
      {
        title: "本地意图分类器",
        desc: "基于主 rubert-tiny2 的微调附加组件。可识别 15-20 个特定的安全意图，仅增加约 200 KB 的模型权重。"
      },
      {
        title: "100% 离线执行",
        desc: "无需请求云端大模型 API。所有语义结构和应答模板都打包在应用中，在无网状态下以超低延迟运行。"
      },
      {
        title: "先进训练数据集",
        desc: "在高度专业的欺诈计划合成对话上进行训练，这些对话是使用先进的 Llama 3.1 和 Qwen2.5 模型在 Google Colab 中生成的。"
      }
    ]
  },
  explore: {
    title: "探索安全协议",
    subtitle: "深入了解 TrustNode 的本地人工智能技术与科研基础",
    card1Title: "穹顶防护技术",
    card1Badge: "PHANTOM 防护体系",
    card1Desc: "PHANTOM 2.0 七层防护罩的技术细节以及完全在设备端运行的 KIRA 智能语音助手。",
    card1Btn: "技术细节 →",
    card2Title: "科研验证实力",
    card2Badge: "专利与学术认可",
    card2Desc: "国家专利局专利申请、区域 IT 科研一等奖、受邀参加莫斯科全国总决赛以及我们的研发历程。",
    card2Btn: "关于我们与团队 →",
    card3Title: "下载应用程序",
    card3Badge: "安装 // 安卓",
    card3Desc: "免费下载 TrustNode TN1 — 成熟的本地防诈骗防垃圾信息应用。可在 RuStore 下载。",
    card3Btn: "下载应用 →",
    card4Title: "诚实客观对比",
    card4Badge: "事实与竞品",
    card4Desc: "客观对比 TrustNode 与市场上现有安全解决方案的关键功能和核心参数。",
    card4Btn: "打开对比表格 →"
  },
  assembly: {
    leftPrimary: "OFFLINE-FIRST",
    leftSub: "// 数据绝不离开您的设备",
    rightPrimary: "ZERO TELEMETRY",
    rightSub: "// 没有任何遥测"
  },
  earlyAccessPage: {
    title: "下载 TrustNode",
    subtitle: "免费获取 TrustNode TN1 应用——在您的设备上直接抵御电话诈骗和垃圾信息。",
    badge: "免费下载",
    back: "返回首页",
    rustoreBtn: "在 RuStore 下载",
    githubBtn: "从 GitHub 下载 APK",
    feature1Title: "100% 本地保护",
    feature1Desc: "所有通话和消息检测均在设备上完成——您的数据绝不会离开手机。",
    feature2Title: "AI 对抗诈骗",
    feature2Desc: "基于 rubert-tiny2 的神经网络模型实时识别社会工程学骗局。",
    feature3Title: "免费且安全",
    feature3Desc: "应用在 RuStore 上免费提供。立即安装，保护您的家人免受诈骗。",
    note: "适用于安卓设备。仅首次下载时需要联网。",
  },

  comparisonPage: {
    title: "诚实对比",
    subtitle: "对 TrustNode 与领先全球安全解决方案的客观对比分析",
    badge: "对比 // 事实",
    thFeature: "功能",
    thTrustNode: "TrustNode (TN1)",
    thKaspersky: "Kaspersky",
    thNorton: "Norton",
    thBitdefender: "Bitdefender",
    thGoogleSpam: "Google Protection",
    features: {
      textAnalysis: "文本分析（BERT、规则、风险评分、URL、同形字符）",
      voiceAnalysis: "实时通话语音分析",
      visualAnalysis: "视觉分析（伪造界面、钱包、钓鱼）",
      socialEngDetect: "社交工程检测（神经网络 + AI 代理）",
      behavioralRasp: "行为分析与 RASP 监控",
      familyDefense: "亲子家庭防护（守护者系统）",
      beaconSystem: "信标系统（检测到欺诈时通过 VK 提醒联系人）",
      offlineOnDevice: "100% 离线（设备端执行）",
      pricing: "变现模式"
    },
    status: {
      yes: "✅ 有",
      no: "❌ 无",
      inDev: "🛠 开发中"
    },
    pricingValues: {
      trustNode: "免费",
      kaspersky: "订阅约 ~1990₽/年",
      norton: "订阅约 ~$39.99/年",
      bitdefender: "订阅约 ~$29.99/年",
      googleSpam: "免费"
    },
    disclaimer: "我们力求最大程度的客观性。如发现任何不准确之处，请在 Telegram 上联系我们。",
    telegramBtn: "在 Telegram 上联系"
  },

  roadmapPage: {
    title: "发展路线图",
    subtitle: "TrustNode 的当前进展、负责任披露政策与语义核心部署时间表",
    badge: "状态与计划",
    readyMvp: "就绪 MVP",
    underDevelopment: "开发中",
    conceptualSpec: "概念规格",
    tn1Desc: "完全可用且经过测试的 Android 本地签名防护包。只需调整模型阈值和微调权重。",
    packageLabel: "软件包:",
    coreEngineLabel: "核心引擎:",
    statusLabel: "状态:",
    fullyReady: "完全就绪 (MVP)",
    sourceGithub: "GitHub 上的源代码",
    tn3Desc: "7 层专利 PHANTOM 2.0 架构，具备独立 AI 共识路由与 Beacon 通知网络。",
    deadlineLabel: "截止日期:",
    september2026: "2026 年 9 月",
    phaseLabel: "阶段:",
    architecturePhase: "架构阶段",
    kiraDesc: "语音意图分析器，用于在实时通话中捕捉并消除操纵性言语行为。",
    designPhase: "设计阶段",
    coreComponentLabel: "核心组件:",
    integrationLabel: "集成:",
    ramAddon: "本地内存扩展",
    disclosureTitle: "负责任披露政策",
    disclosureDesc: "如果您在 TrustNode 中发现潜在漏洞，请直接向我们的团队报告。在漏洞修复完成之前我们不会公开其细节，并感谢安全研究人员的负责任披露。",
    reportTelegram: "通过 Telegram 报告",
    reportVk: "通过 VK 报告",
    reportGithub: "通过 GitHub 报告",
    milestonesTitle: "开发与发布里程碑",
    milestones: [
      { date: "2024–2025", title: "学术起源与地区科研竞赛获奖", desc: "项目诞生于车里雅宾斯克无线电技术学院 (KB-284)，并在地区科研竞赛中获得第一名。" },
      { date: "v1.2.0", title: "TrustNode 1 (TN1) — 就绪 MVP", desc: "完全可用的 Android 本地签名防护包。阈值调整与权重微调的校准阶段。" },
      { date: "2025", title: "ONNX 核心集成", desc: "部署 rubert_fraud_int8.onnx 模型，实现不依赖云端的设备端本地语义推理。" },
      { date: "2026 年 9 月", title: "PHANTOM 2.0 — 架构阶段", desc: "具备独立 AI 共识路由的 7 层专利 TN3 架构。截止日期：2026 年 9 月。" },
      { date: "2026 年 9 月", title: "联邦超级总决赛（莫斯科）", desc: "在著名的联邦科研超级总决赛上进行项目展示。" },
      { date: "v3.0-design", title: "Kira 语音助手 — 概念规格", desc: "语音意图分析器，用于在实时通话中消除操纵性言语行为。设计阶段。" }
    ],
    allProjectsGithub: "GitHub 上的所有 TrustNode 项目"
  }
};

const tr: Translations = {
  nav: {
    threats: "Tehditler",
    howItWorks: "Nasıl Çalışır",
    security: "Güvenlik",
    earlyAccess: "Erken Erişim"
  },
  brand: {
    tagline: "Cihaz İçi Kalkan",
    footerTagline: "Cihaz anlamsal güvenliği"
  },
  hero: {
    badge: "KORUMA PROTOKOLÜ // AKTİF",
    titleSub: "[ AKILLI TELEFONUNUZ İÇİN YEREL GÜVENLİK KUBBESİ ]",
    scrollStart: "BAŞLAMAK İÇİN KAYDIRIN",
    scrollContinue: "BAŞLAMAK İÇİN KAYDIRMAYA DEVAM EDİN",
    enterDome: "KUBBEYE GİRİŞ YAP"
  },
  mobileCards: [
    {
      badge: "[ BU NEDİR? ]",
      title: "Yerel Güvenlik Kubbesi",
      desc: "TrustNode, akıllı telefonunuz için yerel bir siber güvenlik kubbesidir ve cihazınızı anında gizli dijital tehditlerden korur."
    },
    {
      badge: "[ NEDEN İHTİYACIM VAR? ]",
      title: "Yeni Nesil Koruma",
      desc: "Standart mobil antivirüsler, gizli oltalama (phishing) ve kod enjeksiyonu saldırılarına karşı yetersiz kalır. TrustNode zararlı aktiviteleri gerçek zamanlı engeller."
    },
    {
      badge: "[ NEDEN ÇALIŞIR? ]",
      title: "Cihaz Üstü (On-Device) Güvenlik",
      desc: "Tüm algoritmalar tamamen yerel olarak kendi işlemcinizde çalışır. Hiçbir kişisel dosya, konuşma veya trafik günlüğü cihazınızdan dışarı çıkmaz."
    },
    {
      badge: "[ KİMİN İÇİN? ]",
      title: "Mutlak Gizlilik",
      desc: "Kripto meraklıları, girişimciler ve işlem gizliliğine, varlık güvenliğine ve mahremiyete mutlak önem veren herkes için tasarlandı."
    }
  ],
  mobileTabLabels: [
    "NEDİR",
    "NEDEN",
    "NASIL",
    "KİMİN İÇİN"
  ],
  replayIntro: "GİRİŞİ YENİDEN OYNAT (YUKARI KAYDIR)",
  problem: {
    badge: "Mevcut zorluklar",
    titleLine1: "Mevcut çözümler neden",
    titleHighlight: "artık işe yaramıyor?",
    subtitle: "Siber suç endüstrisi, merkezi ve sunucu tabanlı imza veritabanlarının yetişemeyeceği kadar hızlı evriliyor.",
    items: [
      {
        title: "Sosyal mühendislik salgını",
        desc: "Dolandırıcılar, gelişmiş psikolojik baskı senaryoları kullanarak aramalar ve mesajlaşma uygulamaları üzerinden milyarlarca lira çalıyor."
      },
      {
        title: "Gizlilikten ödün verilmesi",
        desc: "Mevcut koruma çözümleri, analiz için aramalarınızın ve mesajlarınızın günlüklerini bulut sunucularına gönderir."
      },
      {
        title: "Şebeke olmadan işe yaramaz",
        desc: "Geleneksel dolandırıcılık önleme sistemleri, mobil internet kesildiği an çalışmayı durdurur ve sizi korumayı bırakır."
      }
    ]
  },
  how: {
    badge: "Güvenlik mimarisi",
    title: "Sistem",
    titleHighlight: "PHANTOM savunma sistemi",
    subtitle: "Akıllı telefonunuzda yerel olarak konuşlandırılmış çok katmanlı bir kubbe. Tek bir bayt kişisel veri bile cihazınızdan ayrılmaz.",
    layersHeading: "Cihaz koruma katmanları",
    layers: [
      {
        name: "Hızlı sezgisel analiz (Heuristics — Sezgisel analiz)",
        tech: "Regex & İmza Haritaları",
        desc: "Gelen akışlar için ilk anlık filtre. Pil ömrünü tüketmeden bilinen spam ağı kalıplarını, şüpheli bağlantıları ve bilinen dolandırıcılık senaryosu imzalarını engeller."
      },
      {
        name: "ML Sınıflandırma (rubert-tiny2)",
        tech: "ONNX Çalışma Zamanı / 28.4 MB Yerel Model",
        desc: "Sıkıştırılmış bir yapay sinir ağı, bir arama veya mesaj metninin semantiğini gerçek zamanlı analiz eder. Gizli manipülasyonları, rol yapma senaryolarını (\"güvenli hesap\", \"zor durumdaki akraba\") ve psikolojik baskıyı algılar."
      },
      {
        name: "Davranışsal analiz",
        tech: "Bağlama Duyarlı Durum Makinesi",
        desc: "Etkileşim dinamiklerini izler: yazma hızı, arama sırasında ekranın bankacılık uygulamalarına ne sıklıkta geçiş yaptığı, anormal gecikmeler ve dikkat tutma kalıpları."
      },
      {
        name: "PHANTOM konsensüsü",
        tech: "Konsensüs Oylama Motoru",
        desc: "Her üç katmanın çıktılarına göre nihai ağırlıklı kararı verir. Bir saldırıdan şüphelenilirse arayüzü kilitler, kullanıcıyı uyarır ve güvenilen bir kişiye anlık bildirim gönderir."
      }
    ],
    usp: [
      {
        title: "Yerel Yapay Zeka (cihazda)",
        desc: "rubert-tiny2 yapay sinir ağı, mobil işlemciler için kuantize edilmiş ve optimize edilmiştir. 28.4 MB boyutu sayesinde tüm ağırlıklarını akıllı telefonunuzun RAM'inde saklayarak mikrosaniyeler içinde çıkarım sağlar."
      },
      {
        title: "Tamamen otonom",
        desc: "Metroda, uçakta veya ücra bir bölgede siber güvenlik kubbeniz internet veya hücresel ağ olmadan da çalışmaya devam eder ve harici API'lere bağımlı değildir."
      },
      {
        title: "Tavizsiz gizlilik",
        desc: "Hiçbir metin dökümü, kişi listesi veya günlük buluta gönderilmez. Tüm hesaplamalar uygulamanın izole edilmiş güvenli alanı ile sınırlıdır."
      }
    ],
    sevenLayers: [
      {
        name: "Hızlı Sezgisel Analiz (HeuristicsLayer — Sezgisel Katman)",
        tech: "Regex & Signature Maps",
        desc: "Gelen veri akışları için anında, hafif bir filtre. Pil gücünü tüketmeden bilinen spam ağlarını, kimlik avı bağlantılarını ve kötü amaçlı otomasyon kalıplarını engeller."
      },
      {
        name: "Sinirsel Sınıflandırma (BertPhantomClassifier — BertPhantom Sınıflandırıcı)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "Yerel gerçek zamanlı multimodal analiz (metin, ses, ekran davranışı ve ağ trafiği). Cihaz içi rubert-tiny2 sinir ağı, mutabakat oylama algoritmalarından ayrı olarak kesinlikle çevrimdışı çalışır."
      },
      {
        name: "Sosyal Mühendislik (Social Eng. Layer — Sosyal Mühendislik Katmanı)",
        tech: "DeGenome (18 Primitives)",
        desc: "18 ilkel öğeden oluşan DeGenome taksonomisini kullanarak manipülasyon taktiklerini tanımlar; yapay aciliyet, baskılı konuşma, korku tetikleyicileri ve izole etme taleplerini açığa çıkarır."
      },
      {
        name: "Davranışsal Denetim (Behavioral Layer — Davranış Katmanı)",
        tech: "Context-Aware State Machine",
        desc: "Canlı kullanıcı etkileşimlerini sürekli olarak izler: yazma ritmi, bilişsel işlem gecikmeleri ve canlı bir arama sırasında finansal uygulamalar ile arama uygulamaları arasındaki geçiş sıklıkları."
      },
      {
        name: "İtibar Doğrulama (Reputation Layer — İtibar Katmanı)",
        tech: "PCD Identity Profiles",
        desc: "Arayan kişinin özelliklerini Kurumsal kimlik profilleriyle (PCD) çapraz kontrol ederek konuşma kalıplarının ve arayan eylemlerinin resmi protokollerle eşleşmediği durumları belirler."
      },
      {
        name: "Mutabakat Kararı (Consensus Agent — Mutabakat Aracısı)",
        tech: "Consensus Voting Engine",
        desc: "Sinir ağlarından bağımsız, özel bir mutabakat oylama algoritması (JudgeAgent). Yürütmeleri kilitlemek ve uyarılar göndermek için tüm seviyelerden gelen risk belirteçlerini toplar."
      },
      {
        name: "Bağışıklık Belleği (Immune Memory — Bağışıklık Belleği)",
        tech: "Adaptive Incident Shield",
        desc: "Yerelleştirilmiş güvenli saldırı deposu. Gelecekteki saldırı varyasyonlarıyla başa çıkmak için son zamanlarda azaltılan tehditlere dayanarak güvenlik filtrelerinin cihaz içi, sıfır sızıntılı hassas ayarlanmasını sağlar."
      }
    ],
    btnSimplified: "Basitleştirilmiş Görünüm",
    btnAdvanced: "Patentli PHANTOM 2.0 (7 Katman)",
    pipelineHeader: "Resmi Patentli PHANTOM 2.0 Hattı"
  },
  trust: {
    badge: "Bilimsel Doğrulama & İtibar",
    title: "Kanıtlanmış",
    titleHighlight: "etkinlik",
    subtitle: "TrustNode'un teknolojik temeli, sıkı matematiksel araştırmalara dayanır ve uzman bilimsel topluluk tarafından kabul görmüştür.",
    stats: [
      {
        val: "IPC G06F 21/55",
        label: "FIPS Patenti",
        desc: "Veri akışlarının yerel analizi için benzersiz algoritmanın tescilli buluş başvurusu."
      },
      {
        val: "1. LİK ÖDÜLÜ",
        label: "Bölgesel Ar-Ge",
        desc: "En iyi pratik siber güvenlik sistemi dalında Bilgi Teknolojileri bölümünde en yüksek ödül."
      },
      {
        val: "MOSKOVA // 2026",
        label: "Federal Final",
        desc: "Eylül 2026'da Moskova'da düzenlenecek ulusal BT araştırmaları süper finaline resmi davet."
      },
      {
        val: "~%82.4",
        label: "Doğruluk (Accuracy)",
        desc: "Temsili blind-test veri setinde hedefli sosyal mühendislik saldırılarını tespit etme doğruluğu."
      }
    ]
  },

  header: {
    rustore: "RuStore'dan İndir",
    radar: "Product Radar",
    ecoOn: "Eko mod açık",
    ecoOff: "Eko mod kapalı",
    seniorOn: "Büyükler modu açık",
    seniorOff: "Büyükler modu (büyük yazı)",
    lang: "Dili değiştir",
  },
  footer: {
    copyright: "© {year} TrustNode Protocol. Tüm hakları saklıdır.",
    privacyLink: "Gizlilik Politikası (FZ-152 uyumlu)",
    termsLink: "Kullanıcı Sözleşmesi",
    version: "Cihaz Üstü ML Dolandırıcılık Kalkanı // v1.2.0 // FZ-152 ile uyumlu",
      githubOrg: "TrustNode'un tüm projeleri GitHub'da",
},
  cookie: {
    badgeLabel: "[ BİLGİ GÜVENLİĞİ // FZ-152 ]",
    text: "Gizliliğinize önem veriyoruz. Bu web sitesi, grafik ve eko modu ayarlarınızı kaydetmek için anonimleştirilmiş çerezler ve yerel depolama kullanır. Daha fazla bilgi için",
    privacyLinkText: "Gizlilik Politikamızı",
    suffix: "inceleyebilirsiniz.",
    audit: "YASAL DENETİM",
    accept: "Kabul Et",
    reject: "Reddet"
  },
  legal: {
    privacyTitle: "Gizlilik Politikası",
    termsTitle: "Kullanıcı Sözleşmesi",
    tabPrivacy: "KİŞİSEL VERİLERİN İŞLENMESİ POLİTİKASI",
    tabTerms: "KULLANICI SÖZLEŞMESİ",
    closeAria: "Kapat",
    acknowledge: "Okudum ve anladım",
    privacy: {
      s1: {
        heading: "[ GENEL HÜKÜMLER ]",
        body: "Bu Kişisel Verilerin İşlenmesi Politikası, 27.07.2006 tarihli ve 152-FZ sayılı \"Kişisel Veriler Hakkında\" Rusya Federal Kanunu gerekliliklerine uygun olarak hazırlanmıştır. Kullanıcıların kişisel verilerinin işlenme usullerini ve TrustNode Protocol proje ekibi (bundan böyle \"Veri Sorumlusu\" olarak anılacaktır) tarafından alınan veri güvenliği önlemlerini tanımlar. Veri Sorumlusu olarak hareket eden tüzel kişinin veya şahıs işletmesinin unvanı ve kayıt bilgileri: [TODO: teyit edilecek]."
      },
      s2: {
        heading: "[ KUBBE PRENSİBİ: GİZLİLİK İÇİN %100 GÜVENLİ ]",
        noticeLabel: "Kritik Uyarı:",
        noticeBody: "TrustNode web sitesi kişisel verilerinizi, e-posta adreslerinizi, şifrelerinizi veya hassas dosyalarınızı doğrudan TOPLAMAZ, İŞLEMEZ, SAKLAMAZ ve AKTARMAZ. PHANTOM uygulamasının tüm koruma mekanizmaları tamamen yerel olarak (On-Device) akıllı telefonunuzun işlemcisinde çalışır."
      },
      s3: {
        heading: "[ SİTEDE İŞLENEN VERİLER ]",
        intro: "Bu bilgi kaynağını ziyaret etmeniz, yalnızca anonimleştirilmiş teknik verilerin otomatik olarak işlenmesiyle eşlik edebilir:",
        items: [
          "Çerezler (performans ve enerji tasarrufu ayarlarının önbelleğe alınması için gereklidir);",
          "Ad-soyad veya belirli bir kişiyle ilişkilendirilemeyen anonim teknik başlıklar, IP adresi;",
          "Kullanıcı arayüzü parametreleri (seçilen grafik modları)."
        ]
      },
      s4: {
        heading: "[ UYGULAMA İNDİRME ]",
        body: "TrustNode uygulamasının indirilmesi resmi platformlar üzerinden yapılır — RuStore mağazası ve GitHub. TrustNode web sitesi kullanıcıların kişisel verilerini toplamaz veya işlemez: uygulamanın analiz ettiği tüm veriler yalnızca kullanıcının cihazında yerel olarak işlenir."
      },
      s5: {
        heading: "[ YERELLEŞTİRME VE DEPOLAMA GÜVENLİĞİ ]",
        body: "Yasal mevzuata uygun olarak, mesajlaşma uygulamalarındaki kişisel yazışmalar sırasında vatandaşların kişisel verilerinin kaydedilmesi durumunda, Veri Sorumlusu bunları yalnızca Rusya Federasyonu sınırları içinde bulunan veri tabanlarını kullanarak saklamayı, düzenlemeyi ve işlemeyi taahhüt eder."
      },
      s6: {
        heading: "[ İLETİŞİM BİLGİLERİ ]",
        bodyPrefix: "Teknik bilgilerin işlenmesi veya yasal gerekliliklere uyumla ilgili her türlü sorunuz için resmi Telegram kanalı üzerinden geliştiricilerle doğrudan iletişime geçebilirsiniz: ",
        bodySuffix: "."
      },
      s7: {
        heading: "[ HARİCİ DAĞITIM PLATFORMLARI ]",
        bodyPrefix: "Uygulamanın RuStore mağazasından veya GitHub'dan indirilmesi ve kurulması, ilgili platformların kurallarına tabidir. Harici platformlar kullanıldığında TrustNode kişisel verilerin sorumlusu değildir: ",
        bodySuffix: " Bu bağlantıların doğruluğu ve uygulanabilirliği yayınlanmadan önce site sahibi tarafından teyit edilmelidir."
      }
    },
    terms: {
      s1: {
        heading: "[ 1. KAYNAK DURUMU VE FERAGATNAME ]",
        body: "Bu web sitesi, TrustNode projesinin (bundan böyle \"TrustNode Yazılımı\" olarak anılacaktır) resmi tanıtım kaynağıdır. Site yalnızca bilgilendirme amaçlı olup, Rusya Federasyonu Medeni Kanunu Madde 437(2) anlamında bir kamu icabı (kamuya açık teklif) niteliği taşımaz. Erken erişim lisanslarının sağlanmasına ilişkin tüm koşullar bireysel olarak müzakere edilir."
      },
      s2: {
        heading: "[ 2. ŞİFRELEME (KRİPTOGRAFİ) ARAÇLARININ BULUNMAMASI ]",
        noticeLabel: "Önemli Yasal Uyarı:",
        noticeBody: "TrustNode yazılımı, yerel trafiğin ve metin şablonlarının anlamsal sezgisel analizcisidir. Herhangi bir kriptografik şifreleme aracı içermez ve sistem protokollerinin kaynak kodunu değiştirmez; bu nedenle Rusya Federasyonu Hükümeti'nin 313 sayılı Kararnamesi uyarınca FSB lisansına tabi değildir."
      },
      s3: {
        heading: "[ 3. FİKRİ MÜLKİYET ]",
        body: "Sitedeki tüm grafik materyalleri, ticari markalar, 3D modeller, kaynak kodları ve PHANTOM sisteminin algoritmaları TrustNode Protocol geliştiricilerinin fikri mülkiyetidir ve yasal koruma altındadır. Yasa dışı kopyalama, tersine mühendislik veya dağıtım cezai takibata tabidir."
      },
      s4: {
        heading: "[ 4. LİSANS KULLANIM KURALLARI ]",
        body: "Erken ücretsiz erişim, yalnızca yazılımın kurulumu sırasında elektronik olarak imzalanan veya kabul edilen bireysel kullanıcı lisans sözleşmesi (EULA) koşullarına göre sağlanır. TrustNode yazılımının üçüncü şahısların trafiğini yasa dışı olarak ele geçirmek veya diğer hukuka aykırı eylemlerde bulunmak amacıyla kullanılması yasaktır."
      },
      s5: {
        heading: "[ 5. SÖZLEŞME DEĞİŞİKLİĞİ ]",
        body: "Kaynak yönetimi, kullanıcılara önceden bildirimde bulunmaksızın bu Sözleşmenin koşullarını tek taraflı olarak değiştirme hakkını saklı tutar. Güncel sürüm her zaman bu sayfada yayınlanır."
      }
    }
  },
  pageNames: {
    home: "Ana Sayfa",
    "how-it-works": "Nasıl Çalışır",
    tech: "Teknoloji",
    about: "Hakkımızda",
    download: "İndir",
    comparison: "Karşılaştırma",
    "not-found": "404"
  },
  realDev: {
    title: "Proje Doğrulama",
    subtitle: "Aktif geliştirme aşamasının belgesel kanıtları, akademik kimlik bilgileri ve yazılım mimarisi belgeleri",
    badge: "GELİŞTİRME KANITLARI // REFERANSLAR",
    devUi: {
      awards: "Ödüller & Bilim",
      graph: "Geliştirme Haritası",
      core: "Model Çekirdeği",
      recipient: "ALICI / ARAŞTIRMACI",
      inst: "KURUM",
      event: "BİLİMSEL ETKİNLİK",
      nodes: "AKTİF DÜĞÜM",
      conns: "TOPLAM BAĞLANTI",
      specs: "ÇEKİRDEK MODEL ÖZELLİKLERİ",
      baseArch: "Temel Mimarisi:",
      params: "Toplam Parametre:",
      latency: "Çıkarım Gecikmesi:",
      copied: "Kopyalandı!",
      copyName: "Dosya Adı",
      dlOnnx: "ONNX İndir"
    },
    awardDetails: {
      title: "Bilimsel Araştırma Diploması",
      issuer: "Chelyabinsk Bölgesi Eğitim ve Bilim Bakanlığı",
      institution: "Chelyabinsk Radyoteknik Koleji (ChRT)",
      recipient: "Pitolin Mihail Evgenyeviç",
      event: "Chelyabinsk Bölgesi mesleki eğitim kurumları arasında düzenlenen öğrenci bilimsel araştırma makaleleri bölgesel yarışmasının III. aşaması, 2026.",
      desc: "TrustNode'un savunma algoritmalarının Siber Güvenlik kategorisindeki bilimsel mükemmelliğinin resmi olarak tanınması. Araştırma, mobil cihazların RAM'indeki sosyal mühendislik tehditlerinin yerel anlamsal sınıflandırılmasına odaklanmaktadır.",
      badge: "BÖLGESEL ÖDÜL"
    },
    graphDetails: {
      title: "Obsidian Bağlantı Haritası",
      subtitle: "Gerçek depo ve proje bilgi tabanının bir anlık görüntüsü",
      nodesCount: "74 aktif düğüm",
      edgesCount: "328 bağlantı",
      desc: "HeuristicsLayer ve BertPhantomClassifier modüllerinin tasarımından INT8 kuantizasyon konfigürasyonunun ve güvenlik testlerinin geliştirilmesine kadar geliştirmenin tüm aşamaları, projenin kapsamlı mimari tasarımını kanıtlayacak şekilde tek bir Obsidian anlamsal grafiği içinde belgelenmiştir.",
      badge: "OBSIDIAN KASASI AKTİF"
    },
    onnxDetails: {
      title: "Üretim Yapay Sinir Ağı Modeli",
      filename: "rubert_fraud_int8.onnx",
      size: "28.4 MB",
      format: "ONNX Runtime (INT8 kuantize)",
      desc: "Proje kökünde, INT8 tam sayı formatına kuantize edilmiş son derece optimize edilmiş rubert-tiny2 dil modelinin gerçek bir ikili ağırlık dosyası entegre edilmiştir. Model, mobil cihazlarda ultra hızlı CPU çıkarımı için ince ayarlanmıştır ve %100 yerel olarak RAM üzerinde yürütülür.",
      badge: "YEREL ÇIKARIM"
    }
  },
  origin: {
    title: "Proje Geçmişi",
    subtitle: "Bir siber güvenlik öğrencisinin araştırma projesinden FIPS patentlerine ve ülke çapında tanınmaya uzanan yolculuk",
    badge: "GEÇMİŞ & REFERANSLAR",
    timeline: [
      {
        badge: "KOLEJ ARAŞTIRMASI // KB-284",
        title: "Akademik Temeller ve Uzmanlık",
        desc: "Proje, Çelyabinsk Radyoteknik Koleji bünyesinde, Natalia Anatolyevna Morozkova bilimsel danışmanlığında KB-284 çalışma grubu (Uzmanlık alanı 10.02.05 — 'Otomasyon Sistemlerinin Bilgi Güvenliği') kapsamında doğmuştur."
      },
      {
        badge: "ARAŞTIRMA // 1. LİK",
        title: "Bölgesel Araştırma Yarışmasında Zafer",
        desc: "TrustNode'un kapsamlı anlamsal çerçevesi ve yenilikçi algoritması, projeye 'Bilgi Teknolojileri' bölümündeki bölgesel bilimsel ve araştırma yarışmasında 1.lik ödülünü getirdi."
      },
      {
        badge: "MOSKOVA // EYLÜL 2026",
        title: "Ulusal Süper Final Moskova",
        desc: "Bölgesel zaferin ardından proje, gerçek zamanlı mobil dolandırıcılığı önleme yeteneklerini sergilemek üzere Eylül 2026'da Moskova'da düzenlenen prestijli ulusal süper final araştırma yarışmasına katılmak üzere seçildi."
      },
      {
        badge: "MİMAR + AI TEMSİLCİLERİ",
        title: "Mimar + Yapay Zeka Temsilcileri Paradigması",
        desc: "Güvenlik mimarisi ve patentli TrustNode algoritmaları, üretimi ve dağıtımı hızlandırmak için Kotlin/C++ kod oluşturma görevlerinin yapay zeka temsilcilerine devredildiği 'Mimar + AI Temsilcileri' metodolojisiyle geliştirilmiştir."
      }
    ]
  },
  security: {
    title: "Kubbe Güvenliği",
    subtitle: "TrustNode'un kendi ortamını nasıl güçlendirdiğini ve yerel kullanıcı analizlerini analiz ve bilgisayar korsanlığına karşı nasıl güvence altına aldığını öğrenin",
    badge: "UYGULAMA GÜÇLENDİRME MODELİ",
    complianceLabel: "YASAL VE GÜVENLİK UYUMLULUK SINIFLANDIRMASI",
    complianceText: "TrustNode, yerelleştirilmiş bir bellek ortamında kesinlikle semantik bir sezgisel metin analizörü olarak çalışır. Harici ağ yüklerini şifrelemediği veya şifresini çözmediği için, zorunlu Rusya Federal Güvenlik Servisi (FSB) lisanslaması gerektirmez.",
    features: [
      {
        title: "VAULT Güvenli Depolama",
        desc: "Fiziksel Android Keystore / StrongBox donanım çipleriyle desteklenen askeri düzeyde AES-256-GCM şifreleme. Yerel veri koleksiyonları SQLCipher ve PBKDF2+HKDF ile güçlendirilmiştir."
      },
      {
        title: "AEGIS Aktif RASP",
        desc: "Proaktif Çalışma Zamanı Uygulaması Kendini Koruma (RASP). Bellek bütünlüğünü sürekli olarak denetler; hata ayıklayıcıları, root araçlarını, emülatör ortamlarını ve kod enjeksiyonlarını engeller."
      },
      {
        title: "Periyodik Self-Audit Motoru",
        desc: "WorkManager tarafından yönetilen arka plan dosya ve bileşen bütünlüğü denetleyicisi. Yetkisiz değişiklikleri anında algılamak için yerel NDK ikili dosyalarının CRC32 sağlama toplamlarını hesaplar."
      },
      {
        title: "Cihaz İçi Sandbox ve 152-FZ Yasası",
        desc: "Kişisel verilerin korunması yasalarıyla tam uyumlu sıkı yerelleştirme. Tüm arama dökümleri, mesajlar ve bellek günlükleri kesinlikle cihazın yerel RAM'inde kalır ve asla sunuculara gönderilmez."
      }
    ]
  },
  kira: {
    title: "KIRA Sesli Asistan",
    subtitle: "Tamamen yerel RAM'iniz içinde çalışan akıllı, konuşma yeteneğine sahip bir yardımcı",
    badge: "PROJE ZAMAN ÇİZELGESİ: KIRA",
    features: [
      {
        title: "Yerel Niyet Sınıflandırıcı",
        desc: "Ana rubert-tiny2 modelinin üzerinde son derece optimize edilmiş, ince ayarlı bir eklenti. Yalnızca 200 KB bellek alanı ekleyerek 15-20 özel güvenlik niyetini çözer."
      },
      {
        title: "%100 Çevrimdışı Çalışma",
        desc: "Pahalı ve yavaş harici LLM API çağrıları yok. Tamamen çevrimdışı yanıt şablonları ve konuşma işleme algoritmaları, yürütme gecikmesini mikrosaniyelere indirir."
      },
      {
        title: "Gelişmiş Eğitim Veri Kümesi",
        desc: "En yüksek doğruluk için gelişmiş Llama 3.1 ve Qwen2.5 modelleri kullanılarak Google Colab'de sentezlenen sosyal mühendislik şemalarının yapay diyalogları üzerinde eğitilmiştir."
      }
    ]
  },
  explore: {
    title: "Güvenlik Protokolünü Keşfedin",
    subtitle: "TrustNode yerel yapay zeka teknolojileri ve bilimsel temelleri hakkında daha fazla bilgi edinin",
    card1Title: "Kubbe Teknolojisi",
    card1Badge: "PHANTOM SİSTEMİ",
    card1Desc: "7 katmanlı PHANTOM 2.0 güvenlik kubbesinin teknik detayları ve tamamen cihaz üzerinde çalışan akıllı sesli asistan KIRA.",
    card1Btn: "Teknolojiyi İncele →",
    card2Title: "Kanıtlanmış Başarı",
    card2Badge: "PATENT & ÖDÜLLER",
    card2Desc: "Resmi patentler, bölgesel araştırma birinciliği, Moskova ulusal finali ve projemizin gelişim serüveni.",
    card2Btn: "Ekip ve Hakkımızda →",
    card3Title: "Uygulamayı İndir",
    card3Badge: "KURULUM // ANDROID",
    card3Desc: "TrustNode TN1'i ücretsiz indirin — dolandırıcılık ve spam'e karşı hazır, yerel koruma uygulaması. RuStore'da mevcuttur.",
    card3Btn: "Uygulamayı İndir →",
    card4Title: "Dürüst Karşılaştırma",
    card4Badge: "GERÇEKLER & RAKİPLER",
    card4Desc: "Önemli parametrelere göre TrustNode ile piyasadaki mevcut rakiplerin işlevselliğinin objektif karşılaştırma tablosu.",
    card4Btn: "Karşılaştırma Tablosunu Aç →"
  },
  assembly: {
    leftPrimary: "OFFLINE-FIRST",
    leftSub: "// VERİLER CİHAZINIZDAN ÇIKMAZ",
    rightPrimary: "ZERO TELEMETRY",
    rightSub: "// TELEMETRİ TOPLANMAZ"
  },
  earlyAccessPage: {
    title: "TrustNode'u İndir",
    subtitle: "TrustNode TN1 uygulamasını ücretsiz edinin — telefon dolandırıcılığına ve spam'e karşı cihaz içi koruma.",
    badge: "ÜCRETSİZ İNDİRME",
    back: "Ana Sayfaya Dön",
    rustoreBtn: "RuStore'dan İndir",
    githubBtn: "GitHub'dan APK İndir",
    feature1Title: "%100 Cihaz İçi Koruma",
    feature1Desc: "Tüm arama ve mesaj kontrolleri cihazınızda çalışır — verileriniz telefonunuzdan asla çıkmaz.",
    feature2Title: "Dolandırıcılara Karşı Yapay Zeka",
    feature2Desc: "rubert-tiny2 tabanlı sinir ağı modeli sosyal mühendislik senaryolarını gerçek zamanlı algılar.",
    feature3Title: "Ücretsiz ve Güvenli",
    feature3Desc: "Uygulama RuStore'da ücretsiz olarak mevcuttur. Kurun ve sevdiklerinizi dolandırıcılardan koruyun.",
    note: "Android cihazlar için kullanılabilir. İnternet yalnızca ilk indirmede gereklidir.",
  },

  comparisonPage: {
    title: "Dürüst Karşılaştırma",
    subtitle: "TrustNode ile önde gelen küresel güvenlik çözümlerinin objektif karşılaştırmalı analizi",
    badge: "KARŞILAŞTIRMA // GERÇEKLER",
    thFeature: "Özellik",
    thTrustNode: "TrustNode (TN1)",
    thKaspersky: "Kaspersky",
    thNorton: "Norton",
    thBitdefender: "Bitdefender",
    thGoogleSpam: "Google Protection",
    features: {
      textAnalysis: "Metin analizi (BERT, kurallar, risk puanlama, URL, homoglifler)",
      voiceAnalysis: "Gerçek zamanlı arama ses analizi",
      visualAnalysis: "Görsel analiz (sahte arayüzler, cüzdanlar, kimlik avı)",
      socialEngDetect: "Sosyal mühendislik tespiti (sinir ağı + AI aracıları)",
      behavioralRasp: "Davranış analizi ve RASP izleme",
      familyDefense: "Ebeveyn-Çocuk aile koruması (Guardian sistemi)",
      beaconSystem: "Beacon sistemi (dolandırıcılıkta VK temaslarına uyarı)",
      offlineOnDevice: "%100 çevrimdışı (cihaz üzerinde çalışır)",
      pricing: "Para kazanma modeli"
    },
    status: {
      yes: "✅ Evet",
      no: "❌ Hayır",
      inDev: "🛠 Geliştirme aşamasında"
    },
    pricingValues: {
      trustNode: "Ücretsiz",
      kaspersky: "Yıllık ~1990₽ abonelik",
      norton: "Yıllık ~$39.99 abonelik",
      bitdefender: "Yıllık ~$29.99 abonelik",
      googleSpam: "Ücretsiz"
    },
    disclaimer: "Maksimum objektiflik için çaba gösteriyoruz. Herhangi bir yanlışlık fark ederseniz, lütfen Telegram üzerinden bizimle iletişime geçin.",
    telegramBtn: "Telegram'dan iletişime geçin"
  },

  roadmapPage: {
    title: "Geliştirme Yol Haritası",
    subtitle: "TrustNode'un mevcut ilerlemesi, sorumlu açıklama politikası ve anlamsal çekirdek dağıtım zaman çizelgesi",
    badge: "DURUM VE PLAN",
    readyMvp: "HAZIR MVP",
    underDevelopment: "GELİŞTİRME AŞAMASINDA",
    conceptualSpec: "KAVRAMSAL SPEC",
    tn1Desc: "Yerel imza koruması için tamamen çalışır durumda ve test edilmiş Android paketi. Yalnızca model eşik kalibrasyonu ve ağırlık ince ayarı gerektirir.",
    packageLabel: "PAKET:",
    coreEngineLabel: "ÇEKİRDEK MOTOR:",
    statusLabel: "DURUM:",
    fullyReady: "TAMAMEN HAZIR (MVP)",
    sourceGithub: "GitHub'da kaynak kodu",
    tn3Desc: "Bağımsız yapay zeka konsensüs yönlendirmesi ve Beacon bildirim ağlarına sahip 7 katmanlı patentli PHANTOM 2.0 mimarisi.",
    deadlineLabel: "SON TESLİM:",
    september2026: "EYLÜL 2026",
    phaseLabel: "FAZ:",
    architecturePhase: "Mimari Faz",
    kiraDesc: "Canlı görüşmeler sırasında manipülatif konuşma eylemlerini yakalamak ve etkisiz hale getirmek için konuşma-niyet analizörü.",
    designPhase: "Tasarım Fazı",
    coreComponentLabel: "ANA BİLEŞEN:",
    integrationLabel: "ENTEGRASYON:",
    ramAddon: "Yerel RAM eklentisi",
    disclosureTitle: "Sorumlu Açıklama Politikası",
    disclosureDesc: "TrustNode'da potansiyel bir güvenlik açığı keşfederseniz, lütfen doğrudan ekibimize bildirin. Güvenlik açıkları çözülene kadar detaylarını yayınlamıyor ve güvenlik araştırmacılarının sorumlu açıklamalarını takdir ediyoruz.",
    reportTelegram: "Telegram ile bildir",
    reportVk: "VK ile bildir",
    reportGithub: "GitHub ile bildir",
    milestonesTitle: "Geliştirme ve Sürüm Kilometre Taşları",
    milestones: [
      { date: "2024–2025", title: "Akademik kökenler ve bölgesel NIR zaferi", desc: "Proje Çelyabinsk Radyo Teknik Koleji'nde (KB-284) doğdu ve bölgesel bilimsel araştırma yarışmasında 1. oldu." },
      { date: "v1.2.0", title: "TrustNode 1 (TN1) — Ready MVP", desc: "Yerel imza koruması için tamamen çalışır durumda Android paketi. Eşik ayarlama ve ağırlık ince ayarı için kalibrasyon aşaması." },
      { date: "2025", title: "ONNX çekirdek entegrasyonu", desc: "Bulut bağımlılığı olmadan cihaz üzerinde yerel anlamsal çıkarım için rubert_fraud_int8.onnx modelinin dağıtımı." },
      { date: "EYLÜL 2026", title: "PHANTOM 2.0 — Mimari Faz", desc: "Bağımsız yapay zeka konsensüs yönlendirmesine sahip 7 katmanlı patentli TN3 mimarisi. Son teslim: Eylül 2026." },
      { date: "EYLÜL 2026", title: "Federal süper final (Moskova)", desc: "Projenin prestijli federal bilimsel araştırma süper finalinde sunumu." },
      { date: "v3.0-design", title: "Kira Ses Asistanı — Kavramsal Spec", desc: "Canlı görüşmeler sırasında manipülatif konuşma eylemlerini etkisiz hale getiren konuşma-niyet analizörü. Tasarım fazı." }
    ],
    allProjectsGithub: "GitHub'daki tüm TrustNode projeleri"
  }
};

const hi: Translations = {
  nav: {
    threats: "ख़तरे",
    howItWorks: "यह कैसे काम करता है",
    security: "सुरक्षा",
    earlyAccess: "अर्ली एक्सेस"
  },
  brand: {
    tagline: "ऑन-डिवाइस शील्ड",
    footerTagline: "डिवाइस को पूरी तरह सुरक्षित रखते हुए"
  },
  hero: {
    badge: "प्रोटेक्शन प्रोटोकॉल // सक्रिय",
    titleSub: "[ आपके स्मार्टफ़ोन के लिए एक लोकल सिक्योरिटी डोम ]",
    scrollStart: "शुरू करने के लिए स्क्रॉल करें",
    scrollContinue: "शुरू करने के लिए स्क्रॉल जारी रखें",
    enterDome: "डोम में प्रवेश करें"
  },
  mobileCards: [
    {
      badge: "[ यह क्या है? ]",
      title: "लोकल सिक्योरिटी डोम",
      desc: "TrustNode आपके स्मार्टफ़ोन के लिए एक निजी साइबर-सुरक्षा डोम है, जो डिवाइस को छिपे हुए डिजिटल ख़तरों से रीयल-टाइम में बचाता है।"
    },
    {
      badge: "[ इसकी ज़रूरत क्यों है? ]",
      title: "नई पीढ़ी की सुरक्षा",
      desc: "आम मोबाइल एंटीवायरस छिपे हुए फ़िशिंग और इंजेक्शन हमलों के आगे बेबस हैं। TrustNode दुर्भावनापूर्ण गतिविधि को रीयल-टाइम में रोकता है।"
    },
    {
      badge: "[ यह काम कैसे करता है? ]",
      title: "ऑन-डिवाइस सुरक्षा",
      desc: "सभी एल्गोरिदम पूरी तरह आपके प्रोसेसर पर लोकली चलते हैं। कोई भी निजी फ़ाइल, बातचीत या ट्रैफ़िक लॉग कभी डिवाइस से बाहर नहीं जाता।"
    },
    {
      badge: "[ यह किसके लिए है? ]",
      title: "पूर्ण गोपनीयता",
      desc: "क्रिप्टो प्रेमियों, उद्यमियों और उन सभी के लिए बनाया गया है जिन्हें लेन-देन की पूर्ण गोपनीयता, संपत्ति की सुरक्षा और निजता प्रिय है।"
    }
  ],
  mobileTabLabels: [
    "क्या",
    "क्यों",
    "कैसे",
    "किसके लिए"
  ],
  replayIntro: "इंट्रो फिर से देखें (ऊपर जाएँ)",
  problem: {
    badge: "मौजूदा चुनौतियाँ",
    titleLine1: "मौजूदा समाधान",
    titleHighlight: "अब काम क्यों नहीं करते?",
    subtitle: "साइबर-अपराध उद्योग सेंट्रलाइज़्ड सर्वर-आधारित सिग्नेचर डेटाबेस से कहीं तेज़ी से विकसित हो रहा है।",
    items: [
      {
        title: "सोशल इंजीनियरिंग की महामारी",
        desc: "जालसाज़ कॉल और मैसेजिंग ऐप्स के ज़रिए, उन्नत मनोवैज्ञानिक दबाव तकनीकों का इस्तेमाल करके अरबों की चोरी करते हैं।"
      },
      {
        title: "गोपनीयता से समझौता",
        desc: "मौजूदा सुरक्षा समाधान विश्लेषण के लिए आपकी कॉल और चैट के लॉग क्लाउड सर्वर पर भेज देते हैं।"
      },
      {
        title: "नेटवर्क के बिना बेकार",
        desc: "पारंपरिक एंटी-फ्रॉड सिस्टम मोबाइल इंटरनेट गायब होते ही तुरंत निष्क्रिय हो जाते हैं और सुरक्षा देना बंद कर देते हैं।"
      }
    ]
  },
  how: {
    badge: "सुरक्षा आर्किटेक्चर",
    title: "PHANTOM",
    titleHighlight: "रक्षा प्रणाली",
    subtitle: "आपके स्मार्टफ़ोन पर लोकली तैनात एक मल्टी-लेयर डोम। निजी डेटा का एक भी बाइट डिवाइस से बाहर नहीं जाता।",
    layersHeading: "डिवाइस सुरक्षा की परतें",
    layers: [
      {
        name: "तेज़ हेयुरिस्टिक्स",
        tech: "रेजेक्स और सिग्नेचर मैप्स",
        desc: "इनकमिंग स्ट्रीम्स के लिए पहला तुरंत फ़िल्टर। बैटरी खर्च किए बिना जाने-पहचाने स्पैम नेटवर्क पैटर्न, संदिग्ध लिंक और घोटाले वाली स्क्रिप्ट की सिग्नेचर को ब्लॉक करता है।"
      },
      {
        name: "ML वर्गीकरण (rubert-tiny2)",
        tech: "ONNX Runtime / 28.4 MB लोकल मॉडल",
        desc: "एक कंप्रेस्ड न्यूरल नेटवर्क कॉल या मैसेज टेक्स्ट के अर्थ का रीयल-टाइम विश्लेषण करता है। यह छिपी हुई हेरफेर, भूमिका-आधारित परिदृश्य (\"सेफ़ अकाउंट\", \"रिश्तेदार मुसीबत में\") और मनोवैज्ञानिक दबाव को पहचानता है।"
      },
      {
        name: "व्यवहार विश्लेषण",
        tech: "कॉन्टेक्स्ट-अवेयर स्टेट मशीन",
        desc: "इंटरैक्शन की गतिशीलता को ट्रैक करता है: टाइपिंग स्पीड, कॉल के दौरान बैंकिंग ऐप्स पर स्विच करने की आवृत्ति, असामान्य देरी और ध्यान बनाए रखने के पैटर्न।"
      },
      {
        name: "PHANTOM कंसेंसस",
        tech: "कंसेंसस वोटिंग इंजन",
        desc: "तीनों परतों के परिणामों के आधार पर अंतिम भारांकित निर्णय लेता है। हमले की आशंका होने पर इंटरफ़ेस को लॉक करता है, यूज़र को चेतावनी देता है और किसी विश्वसनीय संपर्क को तुरंत पुश नोटिफ़िकेशन भेजता है।"
      }
    ],
    usp: [
      {
        title: "लोकल AI (ऑन-डिवाइस)",
        desc: "rubert-tiny2 न्यूरल नेटवर्क को क्वांटाइज़ करके मोबाइल प्रोसेसर के लिए ऑप्टिमाइज़ किया गया है। सिर्फ़ 28.4 MB का यह मॉडल अपने सभी वेट्स फ़ोन की RAM में रख सकता है, जिससे माइक्रोसेकंड में इनफ़रेंस मिलता है।"
      },
      {
        title: "पूर्ण स्वायत्तता",
        desc: "मेट्रो में हों, फ़्लाइट में हों या घने जंगल में — सुरक्षा परत बिना इंटरनेट या सेल्युलर नेटवर्क के, बिना किसी बाहरी API पर निर्भर हुए काम करती रहती है।"
      },
      {
        title: "बेजोड़ गोपनीयता",
        desc: "कोई भी टेक्स्ट ट्रांसक्रिप्ट, कॉन्टैक्ट लिस्ट या लॉग कभी क्लाउड पर नहीं भेजा जाता। सारी गणना ऐप के अलग-थलग सैंडबॉक्स के भीतर ही होती है।"
      }
    ],
    sevenLayers: [
      {
        name: "त्वरित हेयुरिस्टिक्स (HeuristicsLayer — हेयुरिस्टिक्स परत)",
        tech: "Regex & Signature Maps",
        desc: "आने वाले डेटा स्ट्रीम के लिए एक त्वरित, हल्का फ़िल्टर। बिना बैटरी खर्च किए ज्ञात स्पैम-नेटवर्क, फ़िशिंग लिंक और दुर्भावनापूर्ण ऑटोमेशन पैटर्न को रोकता है।"
      },
      {
        name: "न्यूरल वर्गीकरण (BertPhantomClassifier — BertPhantom वर्गीकरणकर्ता)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "एक संपीड़ित rubert-tiny2 न्यूरल नेटवर्क जो वास्तविक समय में कॉल ट्रांसक्रिप्ट और टेक्स्ट का विश्लेषण करता है। छिपी हुई बातचीत की स्क्रिप्ट, हेरफेर और 'सुरक्षित खाता' जैसी भूमिकाओं का पता लगाता है।"
      },
      {
        name: "सोशल इंजीनियरिंग (Social Eng. Layer — सोशल इंजीनियरिंग परत)",
        tech: "DeGenome (18 प्रिमिटिव्स)",
        desc: "18 प्रिमिटिव्स के DeGenome वर्गीकरण का उपयोग करके हेरफेर की रणनीति की पहचान करता है, कृत्रिम तात्कालिकता, दबाव वाले भाषण, डर के ट्रिगर्स और अलगाव के अनुरोधों को उजागर करता है।"
      },
      {
        name: "व्यवहार ऑडिटिंग (Behavioral Layer — व्यवहार परत)",
        tech: "Context-Aware State Machine",
        desc: "लाइव उपयोगकर्ता इंटरैक्शन को लगातार ट्रैक करता है: टाइपिंग की गति, संज्ञानात्मक प्रसंस्करण में देरी, और लाइव कॉल के दौरान वित्तीय और कॉलिंग ऐप के बीच स्विच करने की आवृत्ति।"
      },
      {
        name: "प्रतिष्ठा सत्यापन (Reputation Layer — प्रतिष्ठा परत)",
        tech: "PCD Identity Profiles",
        desc: "कॉलर के लक्षणों को कॉर्पोरेट पहचान प्रोफाइल (PCD) के साथ क्रॉस-चेक करता है, यह पहचानता है कि भाषण पैटर्न और कॉलर की कार्रवाई आधिकारिक प्रोटोकॉल से कब मेल नहीं खाती है।"
      },
      {
        name: "सर्वसम्मতি समाधान (Consensus Agent — सर्वसम्मति एजेंट)",
        tech: "Consensus Voting Engine",
        desc: "एक JudgeAgent सर्वसम्मति इंजन जो सभी स्तरों से जोखिम मार्करों को एकत्रित करता है। खतरे की सीमा की पहचान होने पर, यह निष्पादन को लॉक करता, उपयोगकर्ता को सचेत करता है, और विश्वसनीय संपर्कों को ट्रिगर करता है।"
      },
      {
        name: "प्रतिरक्षा मेमोरी (Immune Memory — प्रतिरक्षा मेमोरी)",
        tech: "Adaptive Incident Shield",
        desc: "स्थानीय सुरक्षित हमला रिपॉजिटरी। आगामी हमले के रूपों को संभालने के लिए हाल ही में कम किए गए खतरों के आधार पर ऑन-डिवाइस, शून्य-लीकेज सुरक्षा फ़िल्टर के फाइन-ट्यूनिंग को सक्षम बनाता है।"
      }
    ],
    btnSimplified: "सरलीकृत दृश्य",
    btnAdvanced: "PHANTOM 2.0 पेटेंट (7 परतें)",
    pipelineHeader: "आधिकारिक पेटेंटेड PHANTOM 2.0 पाइपलाइन"
  },
  trust: {
    badge: "वैज्ञानिक सत्यापन और मान्यता",
    title: "सिद्ध",
    titleHighlight: "प्रभावशीलता",
    subtitle: "TrustNode की तकनीकी नींव कठोर गणितीय शोध पर टिकी है और इसे विशेषज्ञ वैज्ञानिक समुदाय से मान्यता मिली है।",
    stats: [
      {
        val: "IPC G06F 21/55",
        label: "पेटेंट आवेदन",
        desc: "स्थानीय डेटा-स्ट्रीम विश्लेषण के एक अनूठे एल्गोरिदम के लिए आधिकारिक रूप से पंजीकृत आविष्कार आवेदन।"
      },
      {
        val: "पहला स्थान",
        label: "क्षेत्रीय शोध प्रतियोगिता",
        desc: "सर्वश्रेष्ठ व्यावहारिक साइबर-सुरक्षा प्रणाली के लिए इन्फ़ॉर्मेशन टेक्नोलॉजी श्रेणी में सर्वोच्च पुरस्कार।"
      },
      {
        val: "मास्को // 2026",
        label: "राष्ट्रीय फ़ाइनल",
        desc: "मॉस्को में होने वाले अखिल-रूसी IT शोध सुपर-फ़ाइनल (सितंबर 2026) का आधिकारिक निमंत्रण।"
      },
      {
        val: "~82.4%",
        label: "सटीकता (Accuracy)",
        desc: "एक प्रतिनिधि ब्लाइंड-टेस्ट सेट पर टार्गेटेड सोशल-इंजीनियरिंग हमलों की पहचान की सटीकता।"
      }
    ]
  },

  header: {
    rustore: "RuStore से डाउनलोड करें",
    radar: "Product Radar",
    ecoOn: "इको मोड चालू",
    ecoOff: "इको मोड बंद",
    seniorOn: "वरिष्ठ मोड चालू",
    seniorOff: "वरिष्ठ मोड (बड़ा टेक्स्ट)",
    lang: "भाषा बदलें",
  },
  footer: {
    copyright: "© {year} TrustNode Protocol. सर्वाधिकार सुरक्षित।",
    privacyLink: "गोपनीयता नीति (रूसी संघीय क़ानून 152-FZ)",
    termsLink: "उपयोग की शर्तें",
    version: "ऑन-डिवाइस ML फ़्रॉड शील्ड // v1.2.0 // 152-FZ अनुरूप",
      githubOrg: "GitHub पर TrustNode की सभी परियोजनाएँ",
},
  cookie: {
    badgeLabel: "[ सूचना सुरक्षा // रूसी क़ानून 152-FZ ]",
    text: "हमें आपकी निजता की परवाह है। यह साइट आपकी ग्राफ़िक्स और इको-मोड सेटिंग्स याद रखने के लिए बेनाम कुकीज़ और लोकल स्टोरेज का उपयोग करती है। हमारी",
    privacyLinkText: "गोपनीयता नीति",
    suffix: "देखें।",
    audit: "क़ानूनी जानकारी",
    accept: "स्वीकार करें",
    reject: "अस्वीकार करें"
  },
  legal: {
    privacyTitle: "गोपनीयता नीति",
    termsTitle: "उपयोग की शर्तें",
    tabPrivacy: "व्यक्तिगत डेटा नीति (रूसी क़ानून 152-FZ)",
    tabTerms: "उपयोग की शर्तें",
    closeAria: "बंद करें",
    acknowledge: "समझ गया",
    privacy: {
      s1: {
        heading: "[ सामान्य प्रावधान ]",
        body: "यह गोपनीयता नीति 27 जुलाई 2006 के रूसी संघीय क़ानून संख्या 152-FZ \"व्यक्तिगत डेटा पर\" के अनुसार तैयार की गई है। यह तय करती है कि TrustNode Protocol प्रोजेक्ट टीम (\"ऑपरेटर\") यूज़र के व्यक्तिगत डेटा को कैसे प्रोसेस करती है और उसकी सुरक्षा के लिए क्या उपाय अपनाती है। ऑपरेटर के रूप में कार्यरत क़ानूनी संस्था या व्यक्तिगत उद्यमी का नाम और पंजीकरण विवरण: [TODO: पुष्टि की जानी है]।"
      },
      s2: {
        heading: "[ डोम सिद्धांत: आपकी निजता के लिए 100% सुरक्षित ]",
        noticeLabel: "अत्यंत महत्वपूर्ण सूचना:",
        noticeBody: "TrustNode वेबसाइट आपके व्यक्तिगत डेटा, ईमेल पते, पासवर्ड या निजी फ़ाइलों को सीधे तौर पर एकत्र, प्रोसेस, संग्रहीत या ट्रांसमिट नहीं करती। PHANTOM ऐप के सभी सुरक्षा तंत्र केवल आपके स्मार्टफ़ोन के प्रोसेसर पर लोकली (ऑन-डिवाइस) काम करते हैं।"
      },
      s3: {
        heading: "[ साइट पर प्रोसेस किया जाने वाला डेटा ]",
        intro: "इस सूचनात्मक वेबसाइट पर आने पर केवल बेनाम तकनीकी डेटा का स्वचालित प्रोसेसिंग हो सकता है, जैसे:",
        items: [
          "कुकीज़ (परफ़ॉर्मेंस और इको-मोड सेटिंग्स कैश करने के लिए ज़रूरी);",
          "बेनाम तकनीकी हेडर्स और IP एड्रेस, जो किसी नाम या व्यक्ति से नहीं जुड़ा होता;",
          "इंटरफ़ेस सेटिंग्स (चुने गए ग्राफ़िक्स मोड)।"
        ]
      },
      s4: {
        heading: "[ ऐप डाउनलोड ]",
        body: "TrustNode ऐप डाउनलोड करना आधिकारिक प्लेटफ़ॉर्म के माध्यम से किया जाता है — RuStore स्टोर और GitHub। TrustNode वेबसाइट उपयोगकर्ताओं का व्यक्तिगत डेटा एकत्र या संसाधित नहीं करती है: ऐप द्वारा विश्लेषित सभी डेटा केवल उपयोगकर्ता के डिवाइस पर स्थानीय रूप से संसाधित होता है।"
      },
      s5: {
        heading: "[ डेटा लोकलाइज़ेशन और स्टोरेज सुरक्षा ]",
        body: "रूसी क़ानून के अनुसार, अगर मैसेंजर पर व्यक्तिगत बातचीत के दौरान रूसी नागरिकों का व्यक्तिगत डेटा दर्ज होता है, तो ऑपरेटर उसे केवल रूसी संघ के क्षेत्र में स्थित डेटाबेस का उपयोग करके संग्रहीत, व्यवस्थित और प्रोसेस करने का वचन देता है।"
      },
      s6: {
        heading: "[ संपर्क जानकारी ]",
        bodyPrefix: "तकनीकी जानकारी की प्रोसेसिंग या क़ानून 152-FZ के अनुपालन से जुड़े किसी भी सवाल के लिए, आप प्रोजेक्ट के आधिकारिक Telegram चैनल के ज़रिए सीधे डेवलपर्स से संपर्क कर सकते हैं: ",
        bodySuffix: "।"
      },
      s7: {
        heading: "[ बाहरी वितरण प्लेटफ़ॉर्म ]",
        bodyPrefix: "RuStore स्टोर या GitHub से ऐप डाउनलोड और इंस्टॉल करना संबंधित प्लेटफ़ॉर्म के नियमों द्वारा नियंत्रित होता है। बाहरी प्लेटफ़ॉर्म का उपयोग करते समय TrustNode व्यक्तिगत डेटा की संचालक नहीं है: ",
        bodySuffix: " प्रकाशन से पहले इन लिंक की सटीकता और प्रयोज्यता की पुष्टि साइट स्वामी द्वारा की जानी चाहिए।"
      }
    },
    terms: {
      s1: {
        heading: "[ 1. साइट की स्थिति और उत्तरदायित्व से इनकार ]",
        body: "यह वेबसाइट TrustNode प्रोजेक्ट (\"TrustNode सॉफ़्टवेयर\") का आधिकारिक प्रचार संसाधन है। यह विशुद्ध रूप से सूचनात्मक है और रूसी नागरिक संहिता के अनुच्छेद 437(2) के अर्थ में सार्वजनिक प्रस्ताव नहीं है। अर्ली एक्सेस लाइसेंस देने की सभी शर्तों पर व्यक्तिगत रूप से सहमति बनती है।"
      },
      s2: {
        heading: "[ 2. एन्क्रिप्शन (क्रिप्टोग्राफ़ी) टूल्स का अभाव ]",
        noticeLabel: "महत्वपूर्ण क़ानूनी टिप्पणी:",
        noticeBody: "TrustNode सॉफ़्टवेयर लोकल ट्रैफ़िक और टेक्स्ट पैटर्न का एक सिमेंटिक हेयुरिस्टिक विश्लेषक है। इसमें कोई क्रिप्टोग्राफ़िक एन्क्रिप्शन टूल नहीं है और यह सिस्टम प्रोटोकॉल के सोर्स कोड में कोई बदलाव नहीं करता, इसलिए रूसी सरकार के डिक्री संख्या 313 के तहत इसे FSB से अनिवार्य लाइसेंस लेने की ज़रूरत नहीं है।"
      },
      s3: {
        heading: "[ 3. बौद्धिक संपदा ]",
        body: "सभी ग्राफ़िक सामग्री, ट्रेडमार्क, 3D मॉडल, इस साइट का सोर्स कोड और PHANTOM सिस्टम के एल्गोरिदम, TrustNode Protocol डेवलपर्स की बौद्धिक संपदा हैं और रूसी नागरिक संहिता के भाग IV के तहत संरक्षित हैं। अनधिकृत कॉपी, डीकंपाइलेशन या वितरण रूसी दंड संहिता की धारा 146 के तहत दंडनीय है।"
      },
      s4: {
        heading: "[ 4. लाइसेंस उपयोग के नियम ]",
        body: "निःशुल्क अर्ली एक्सेस केवल एक व्यक्तिगत एंड-यूज़र लाइसेंस एग्रीमेंट (EULA) की शर्तों पर दी जाती है, जिसे सॉफ़्टवेयर इंस्टॉल करते समय इलेक्ट्रॉनिक रूप से हस्ताक्षरित या स्वीकार किया जाता है। TrustNode सॉफ़्टवेयर का इस्तेमाल थर्ड पार्टी के ट्रैफ़िक को गैरक़ानूनी तरीक़े से इंटरसेप्ट करने या रूसी दूरसंचार नेटवर्क में किसी अन्य गैरक़ानूनी कार्य के लिए करना प्रतिबंधित है।"
      },
      s5: {
        heading: "[ 5. समझौते में बदलाव ]",
        body: "साइट प्रशासन को यूज़र्स को पहले से सूचित किए बिना, इस समझौते की शर्तों को एकतरफ़ा बदलने का अधिकार सुरक्षित है। मौजूदा संस्करण हमेशा इसी पेज पर प्रकाशित रहता है।"
      }
    }
  },
  pageNames: {
    home: "मुख्य",
    "how-it-works": "यह कैसे काम करता है",
    tech: "तकनीक",
    about: "हमारे बारे में",
    download: "डाउनलोड करें",
    comparison: "तुलना",
    "not-found": "404"
  },
  realDev: {
    title: "परियोजना सत्यापन",
    subtitle: "सक्रिय विकास, शैक्षणिक क्रेडेंशियल्स और सॉफ्टवेयर आर्किटेक्चर कलाकृतियों का दस्तावेजी प्रमाण",
    badge: "विकास साक्ष्य // क्रेडेंशियल्स",
    devUi: {
      awards: "पुरस्कार और विज्ञान",
      graph: "विकास मानचित्र",
      core: "ONNX कोर इंजन",
      recipient: "प्राप्तकर्ता",
      inst: "संस्थान",
      event: "वैज्ञानिक कार्यक्रम",
      nodes: "सक्रिय नोड्स",
      conns: "कुल कनेक्शन",
      specs: "कोर मॉडल विनिर्देश",
      baseArch: "मूल वास्तुकला:",
      params: "कुल पैरामीटर:",
      latency: "अनुमान विलंबता:",
      copied: "कॉपी किया गया!",
      copyName: "नाम कॉपी करें",
      dlOnnx: "ONNX डाउनलोड करें"
    },
    awardDetails: {
      title: "वैज्ञानिक अनुसंधान डिप्लोमा",
      issuer: "चेल्याबिंस्क क्षेत्र का शिक्षा और विज्ञान मंत्रालय",
      institution: "चेल्याबिंस्क रेडियोटेक्निकल कॉलेज (ChRT)",
      recipient: "Pitolin Mikhail Evgenyevich",
      event: "चेल्याबिंस्क क्षेत्र के व्यावसायिक शैक्षणिक संगठनों के बीच छात्र वैज्ञानिक अनुसंधान पत्रों की क्षेत्रीय प्रतियोगिता का चरण III, 2026।",
      desc: "साइबर सुरक्षा श्रेणी में TrustNode के रक्षा एल्गोरिदम की वैज्ञानिक उत्कृष्टता की आधिकारिक मान्यता। अनुसंधान मोबाइल उपकरणों के रैम में सोशल इंजीनियरिंग खतरों के स्थानीयकृत सिमेंटिक वर्गीकरण पर केंद्रित है।",
      badge: "क्षेत्रीय पुरस्कार"
    },
    graphDetails: {
      title: "ऑब्सीडियन कनेक्शन मैप",
      subtitle: "वास्तविक भंडार और परियोजना ज्ञान आधार का एक स्नैपशॉट",
      nodesCount: "74 सक्रिय नोड्स",
      edgesCount: "328 कनेक्शन",
      desc: "HeuristicsLayer और BertPhantomClassifier मॉड्यूल को डिजाइन करने से लेकर INT8 क्वांटाइजेशन कॉन्फ़िगरेशन और सुरक्षा परीक्षणों को विकसित करने तक, विकास के सभी चरणों को एक ही ऑब्सीडियन सिमेंटिक ग्राफ के भीतर प्रलेखित किया गया है, जो व्यापक वास्तुशिल्प डिजाइन को साबित करता है।",
      badge: "ऑब्सीडियन वॉल्ट सक्रिय"
    },
    onnxDetails: {
      title: "उत्पादन न्यूरल नेटवर्क मॉडल",
      filename: "rubert_fraud_int8.onnx",
      size: "28.4 MB",
      format: "ONNX रनटाइम (INT8 क्वांटाइज़्ड)",
      desc: "परियोजना के रूट में अत्यधिक अनुकूलित rubert-tiny2 भाषा मॉडल का एक वास्तविक बाइनरी वेट फ़ाइल एकीकृत है जो INT8 पूर्णांक प्रारूप में क्वांटाइज़्ड है। मॉडल को मोबाइल उपकरणों पर अल्ट्रा-फास्ट सीपीयू अनुमान के लिए फाइन-ट्यून किया गया है और यह रैम में 100% स्थानीय रूप से निष्पादित होता है।",
      badge: "स्थानीय अनुमान"
    }
  },
  origin: {
    title: "परियोजना का इतिहास",
    subtitle: "एक साइबर सुरक्षा छात्र के शोध पत्र से लेकर पेटेंट और राष्ट्रीय स्तर पर मान्यता प्राप्त करने तक का सफर",
    badge: "इतिहास और टीम",
    timeline: [
      {
        badge: "कॉलेज रिसर्च // KB-284",
        title: "शैक्षणिक आधार और विशेषज्ञता",
        desc: "यह परियोजना चेल्याबिंस्क रेडियोटेक्निकल कॉलेज में शैक्षिक समूह KB-284 (विशेषज्ञता 10.02.05 — स्वचालित प्रणालियों की सूचना सुरक्षा) के तहत वैज्ञानिक सलाहकार नतालिया अनातोलीवना मोरोज़्कोवा के मार्गदर्शन में विकसित की गई थी।"
      },
      {
        badge: "अनुसंधान // प्रथम स्थान",
        title: "क्षेत्रीय अनुसंधान प्रतियोगिता में विजय",
        desc: "TrustNode के व्यापक सिमेंटिक ढांचे और अभिनव एल्गोरिदम ने आईटी अनुभाग में क्षेत्रीय वैज्ञानिक और अनुसंधान प्रतियोगिता में परियोजना को पहला स्थान दिलाया।"
      },
      {
        badge: "मास्को // सितंबर 2026",
        title: "राष्ट्रीय सुपरफ़ाइनल में प्रवेश",
        desc: "क्षेत्रीय जीत के आधार पर, कॉलेज सितंबर 2026 में होने वाले प्रतिष्ठित राष्ट्रव्यापी अनुसंधान सुपरफ़ाइनल के लिए मास्को की यात्रा का पूरा खर्च उठा रहा है।"
      },
      {
        badge: "आर्किटेक्ट + एआई एजेंट",
        title: "नया मील का पत्थर: भविष्य का विकास",
        desc: "एकल डेवलपर द्वारा 'आर्किटेक्ट + एआई एजेंट' पद्धति का उपयोग करके बनाया गया। सुरक्षा आर्किटेक्चर और एल्गोरिदम लेखक द्वारा बनाए गए हैं, जबकि कोड लेखन (Kotlin/C++) एआई एजेंटों को सौंपा गया है।"
      }
    ]
  },
  security: {
    title: "डोм सुरक्षा",
    subtitle: "TrustNode अपने स्वयं के एल्गोरिदम और आपके डेटा को विश्लेषण और हैकिंग से कैसे सुरक्षित रखता है",
    badge: "एप्लिकेशन सुरक्षा मॉडल",
    complianceLabel: "कानूनी & सुरक्षा अनुपालन वर्गीकरण",
    complianceText: "TrustNode एक स्थानीयकृत मेमोरी वातावरण के भीतर अर्थगत अनुमानी पाठ विश्леषक के रूप में कार्य करता है। चूंकि यह बाहरी नेटवर्क पेलोड को एन्क्रिप्ट या डिक्रिप्ट नहीं करता है, इसलिए इसके लिए रूसी संघीय सुरक्षा सेवा (FSB) लाइसेंसिंग की आवश्यकता नहीं है।",
    features: [
      {
        title: "VAULT सुरक्षित स्टोरेज",
        desc: "भौतिक Android Keystore / StrongBox हार्डवेयर चिप्स द्वारा समर्थित सैन्य-ग्रेड AES-256-GCM एन्क्रिप्शन। स्थानीय डेटा SQLCipher और PBKDF2+HKDF के माध्यम से सुरक्षित है।"
      },
      {
        title: "AEGIS सक्रिय RASP सुरक्षा",
        desc: "सक्रिय रनटाइम एप्लिकेशन सेल्फ-प्रोटेक्शन (RASP)। मेमोरी अखंडता का लगातार ऑडिट करता है, डिबगर्स, रूट टूल्स, एमुलेटर वातावरण और कोड इंजेक्शन को रोकता है।"
      },
      {
        title: "आवधिक स्व-ऑडिट इंजन",
        desc: "WorkManager द्वारा संचालित पृष्ठभूमि फ़ाइल और घटक अखंडता परीक्षक। वास्तविक समय में छेड़छाड़ का पता लगाने के लिए मूल NDK बाइनरी के CRC32 चेकसम की गणना करता है।"
      },
      {
        title: "ऑन-डिवाइस सैंडबॉक्स और कानून 152-FZ",
        desc: "व्यक्तिगत डेटा कानून का पूर्ण अनुपालन। सभी कॉल ट्रांसक्रिप्शन, मैसेजिंग और मेमोरी लॉग केवल स्थानीय डिवाइस रैम के भीतर रहते हैं और कभी भी सर्वर पर नहीं भेजे जाते हैं।"
      }
    ]
  },
  kira: {
    title: "कीра (KIRA) वॉयс असिस्टेंट",
    subtitle: "एक बुद्धिमान भाषण-सक्षम साथी जो पूरी तरह से आपके स्थानीय रैम के भीतर चलता है",
    badge: "परियोजना समयरेखा: KIRA",
    features: [
      {
        title: "स्थानीय इरादा वर्गीकारक",
        desc: "मुख्य rubert-tiny2 के शीर्ष पर एक अत्यधिक अनुकूलित फाइन-ट्यून्ड ऐड-ऑन। केवल 200 KB मेमोरी फ़ुटप्रिंट के साथ 15-20 विशिष्ट सुरक्षा इरादों को हल करता है।"
      },
      {
        title: "100% ऑफ़लाइन निष्पादन",
        desc: "कोई महंगा, धीमा बाहरी LLM API कॉल नहीं। पूरी तरह से ऑफ़लाइन प्रतिक्रिया टेम्पलेट और भाषण प्रसंस्करण एल्गोरिदम निष्पादन विलंबता को सूक्ष्मसेकंड तक कम रखते हैं।"
      },
      {
        title: "उन्नत प्रशिक्षण डेटासेट",
        desc: "अंतिम सटीकता के लिए उन्नत Llama 3.1 और Qwen2.5 का उपयोग करके Google Colab में संश्लेषित योजनाओं के सिंथेटिक संवादों पर प्रशिक्षित।"
      }
    ]
  },
  explore: {
    title: "सुरक्षा प्रोटोकॉल का अन्वेषण करें",
    subtitle: "TrustNode की स्थानीय AI तकनीकों and वैज्ञानिक आधार के बारे में अधिक जानें",
    card1Title: "डोम तकनीक",
    card1Badge: "PHANTOM प्रणाली",
    card1Desc: "7-स्तरीय PHANTOM 2.0 सुरक्षा डोम का तकनीकी विवरण और पूरी तरह से ऑन-डिवाइस चलने वाला इंटेलिजেন্ট वॉयс असिस्टेंट KIRA।",
    card1Btn: "तकनीक जानें →",
    card2Title: "प्रमाणित मान्यता",
    card2Badge: "पेटेंट और पुरस्कार",
    card2Desc: "आधिकारिक पेटेंट, क्षेत्रीय IT अनुसंधान में प्रथम स्थान, राष्ट्रीय फाइनल और हमारी परियोजना यात्रा।",
    card2Btn: "हमारे और टीम के बारे में →",
    card3Title: "ऐप डाउनलोड करें",
    card3Badge: "इंस्टॉलेशन // एंड्रॉइड",
    card3Desc: "TrustNode TN1 मुफ्त में डाउनलोड करें — धोखाधड़ी और स्पैम से स्थानीय सुरक्षा के लिए तैयार ऐप। RuStore पर उपलब्ध।",
    card3Btn: "ऐप डाउनलोड करें →",
    card4Title: "ईमानदार तुलना",
    card4Badge: "तथ्य और प्रतियोगी",
    card4Desc: "प्रमुख मापदंडों में प्रमुख वैश्विक सुरक्षा समाधानों के साथ TrustNode की कार्यक्षमता का एक निष्पक्ष तुलनात्मक विश्लेषण।",
    card4Btn: "तुलना तालिका खोलें →"
  },
  assembly: {
    leftPrimary: "OFFLINE-FIRST",
    leftSub: "// डेटा कभी डिवाइस नहीं छोड़ता",
    rightPrimary: "ZERO TELEMETRY",
    rightSub: "// कोई टेलीमेट्री नहीं"
  },
  earlyAccessPage: {
    title: "TrustNode डाउनलोड करें",
    subtitle: "TrustNode TN1 ऐप मुफ्त में पाएं — आपके डिवाइस पर ही फोन घोटाले और स्पैम से सुरक्षा।",
    badge: "मुफ्त डाउनलोड",
    back: "मुख्य पृष्ठ पर वापस",
    rustoreBtn: "RuStore से डाउनलोड करें",
    githubBtn: "GitHub से APK डाउनलोड करें",
    feature1Title: "100% ऑन-डिवाइस सुरक्षा",
    feature1Desc: "कॉल और संदेशों की सभी जाँचें आपके डिवाइस पर ही चलती हैं — आपका डेटा कभी स्मार्टफोन से बाहर नहीं जाता।",
    feature2Title: "स्कैमर्स के खिलाफ AI",
    feature2Desc: "rubert-tiny2-आधारित न्यूरल मॉडल सोशल इंजीनियरिंग परिदृश्यों को रीयल टाइम में पहचानता है।",
    feature3Title: "मुफ्त और सुरक्षित",
    feature3Desc: "ऐप RuStore पर मुफ्त उपलब्ध है। इसे इंस्टॉल करें और अपने प्रियजनों को स्कैमर्स से बचाएं।",
    note: "Android डिवाइस के लिए उपलब्ध। इंटरनेट केवल प्रारंभिक डाउनलोड के लिए आवश्यक है।",
  },

  comparisonPage: {
    title: "ईमानदार तुलना",
    subtitle: "TrustNode बनाम प्रमुख वैश्विक सुरक्षा समाधानों का एक वस्तुनिष्ठ तुलनात्मक विश्लेषण",
    badge: "तुलना // तथ्य",
    thFeature: "सुविधा",
    thTrustNode: "TrustNode (TN1)",
    thKaspersky: "Kaspersky",
    thNorton: "Norton",
    thBitdefender: "Bitdefender",
    thGoogleSpam: "Google Protection",
    features: {
      textAnalysis: "पाठ विश्लेषण (BERT, नियम, जोखिम स्कोरिंग, URL, होमोग्लिफ)",
      voiceAnalysis: "रीयल-टाइम कॉल वॉयस विश्लेषण",
      visualAnalysis: "दृश्य विश्लेषण (नकली यूआई, वॉलेट, फ़िशिंग)",
      socialEngDetect: "सोशल इंजीनियरिंग डिटेक्शन (न्यूरल + AI एजेंट)",
      behavioralRasp: "व्यवहार विश्लेषण और RASP निगरानी",
      familyDefense: "पेरेंट-चाइल्ड फैमिली डिफेंस (गार्जियन सिस्टम)",
      beaconSystem: "बीकन सिस्टम (धोखाधड़ी पर VK संपर्क अलर्ट)",
      offlineOnDevice: "100% ऑफ़लाइन (ऑन-डिवाइस निष्पादन)",
      pricing: "मुद्रीकरण मॉडल"
    },
    status: {
      yes: "✅ हाँ",
      no: "❌ नहीं",
      inDev: "🛠 विकास में"
    },
    pricingValues: {
      trustNode: "मुफ़्त",
      kaspersky: "सदस्यता ~1990₽/वर्ष से",
      norton: "सदस्यता ~$39.99/वर्ष से",
      bitdefender: "सदस्यता ~$29.99/वर्ष से",
      googleSpam: "मुफ़्त"
    },
    disclaimer: "हम अधिकतम निष्पक्षता के लिए प्रयास करते हैं। यदि आपको कोई अशुद्धि दिखे, तो कृपया हमसे Telegram पर संपर्क करें।",
    telegramBtn: "Telegram पर संपर्क करें"
  },

  roadmapPage: {
    title: "विकास रोडमैप",
    subtitle: "TrustNode की वर्तमान प्रगति, जिम्मेदार प्रकटीकरण नीति और सिमेंटिक कोर परिनियोजन समयरेखा",
    badge: "स्थिति और योजना",
    readyMvp: "तैयार MVP",
    underDevelopment: "विकास में",
    conceptualSpec: "संकल्पनात्मक विनिर्देश",
    tn1Desc: "लोकल सिग्नेचर सुरक्षा के लिए पूर्ण रूप से चालू और परीक्षित Android पैकेज। केवल मॉडल थ्रेशोल्ड अंशांकन और वेट फाइन-ट्यूनिंग की आवश्यकता है।",
    packageLabel: "पैकेज:",
    coreEngineLabel: "कोर इंजन:",
    statusLabel: "स्थिति:",
    fullyReady: "पूरी तरह तैयार (MVP)",
    sourceGithub: "GitHub पर सोर्स कोड",
    tn3Desc: "स्वतंत्र AI सर्वसम्मति रूटिंग और बीकन सूचना नेटवर्क वाली 7-परत पेटेंट PHANTOM 2.0 वास्तुकला।",
    deadlineLabel: "समय सीमा:",
    september2026: "सितंबर 2026",
    phaseLabel: "चरण:",
    architecturePhase: "आर्किटेक्चर चरण",
    kiraDesc: "लाइव कॉल के दौरान हेरफेर करने वाले भाषण कृत्यों को पकड़ने और बेअसर करने के लिए भाषण-आशय विश्लेषक।",
    designPhase: "डिज़ाइन चरण",
    coreComponentLabel: "मुख्य घटक:",
    integrationLabel: "एकीकरण:",
    ramAddon: "लोकल RAM ऐड-ऑन",
    disclosureTitle: "जिम्मेदार प्रकटीकरण नीति",
    disclosureDesc: "यदि आपको TrustNode में कोई संभावित कमजोरी मिले, तो कृपया सीधे हमारी टीम को सूचित करें। हम कमजोरियों के समाधान होने तक उनके विवरण प्रकाशित नहीं करते हैं और सुरक्षा शोधकर्ताओं के जिम्मेदार प्रकटीकरण की सराहना करते हैं।",
    reportTelegram: "टेलीग्राम से रिपोर्ट करें",
    reportVk: "VK से रिपोर्ट करें",
    reportGithub: "GitHub से रिपोर्ट करें",
    milestonesTitle: "विकास और रिलीज़ माइलस्टोन",
    milestones: [
      { date: "2024–2025", title: "शैक्षणिक उत्पत्ति और क्षेत्रीय NIR जीत", desc: "चेल्याबिंस्क रेडियोटेक्निकल कॉलेज (KB-284) में जन्मी परियोजना ने क्षेत्रीय वैज्ञानिक अनुसंधान प्रतियोगिता में पहला स्थान जीता।" },
      { date: "v1.2.0", title: "TrustNode 1 (TN1) — रेडी MVP", desc: "लोकल सिग्नेचर सुरक्षा के लिए पूर्ण रूप से चालू Android पैकेज। थ्रेशोल्ड समायोजन और वेट फाइन-ट्यूनिंग के लिए अंशांकन चरण।" },
      { date: "2025", title: "ONNX कोर एकीकरण", desc: "क्लाउड निर्भरता के बिना डिवाइस पर स्थानीय सिमेंटिक इन्फरेंस के लिए rubert_fraud_int8.onnx मॉडल की परिनियोजन।" },
      { date: "सितंबर 2026", title: "PHANTOM 2.0 — आर्किटेक्चर चरण", desc: "स्वतंत्र AI सर्वसम्मति रूटिंग वाली 7-परत पेटेंट TN3 वास्तुकला। समय सीमा: सितंबर 2026।" },
      { date: "सितंबर 2026", title: "संघीय सुपरफाइनल (मास्को)", desc: "प्रतिष्ठित संघीय वैज्ञानिक अनुसंधान सुपरफाइनल में परियोजना प्रस्तुति।" },
      { date: "v3.0-design", title: "किरा वॉइस असिस्टेंट — संकल्पनात्मक विनिर्देश", desc: "लाइव कॉल के दौरान हेरफेर करने वाले भाषण कृत्यों को बेअसर करने के लिए भाषण-आशय विश्लेषक। डिज़ाइन चरण।" }
    ],
    allProjectsGithub: "GitHub पर सभी TrustNode प्रोजेक्ट"
  }
};

const ar: Translations = {
  nav: {
    threats: "التهديدات",
    howItWorks: "كيف يعمل",
    security: "الأمان",
    earlyAccess: "الوصول المبكر"
  },
  brand: {
    tagline: "درع على الجهاز",
    footerTagline: "حماية جهازك بالكامل"
  },
  hero: {
    badge: "بروتوكول الحماية // نشط",
    titleSub: "[ قبة أمان محلية لهاتفك الذكي ]",
    scrollStart: "مرّر للأسفل للبدء",
    scrollContinue: "استمر بالتمرير للبدء",
    enterDome: "الدخول إلى القبة"
  },
  mobileCards: [
    {
      badge: "[ ما هو؟ ]",
      title: "قبة أمان محلية",
      desc: "TrustNode هي قبة أمن سيبراني شخصية لهاتفك الذكي، تحمي جهازك من التهديدات الرقمية الخفية أولاً بأول."
    },
    {
      badge: "[ لماذا أحتاجه؟ ]",
      title: "حماية من الجيل الجديد",
      desc: "برامج مكافحة الفيروسات التقليدية عاجزة أمام التصيّد الخفي وهجمات الحقن. TrustNode يوقف النشاط الضار في الوقت الفعلي."
    },
    {
      badge: "[ لماذا ينجح؟ ]",
      title: "أمان على الجهاز مباشرة",
      desc: "كل الخوارزميات تعمل بالكامل محليًا على معالج هاتفك. لا تغادر أي ملفات شخصية أو محادثات أو سجلات اتصال الجهازَ أبدًا."
    },
    {
      badge: "[ لمن هذا التطبيق؟ ]",
      title: "خصوصية مطلقة",
      desc: "صُمم لهواة العملات المشفرة ورواد الأعمال وكل من يقدّر الخصوصية التامة للمعاملات وأمان الأصول والسرّية."
    }
  ],
  mobileTabLabels: [
    "ما هو",
    "لماذا",
    "كيف",
    "لمن"
  ],
  replayIntro: "إعادة تشغيل المقدمة (التمرير للأعلى)",
  problem: {
    badge: "التحديات الحالية",
    titleLine1: "لماذا لم تعد الحلول الحالية",
    titleHighlight: "فعّالة؟",
    subtitle: "تتطور صناعة الجرائم الإلكترونية أسرع من قواعد بيانات التوقيعات المركزية على الخوادم.",
    items: [
      {
        title: "وباء الهندسة الاجتماعية",
        desc: "يسرق المحتالون مليارات عبر المكالمات وتطبيقات المراسلة، مستخدمين أساليب ضغط نفسي متقدمة."
      },
      {
        title: "المساس بالخصوصية",
        desc: "ترسل حلول الحماية الحالية سجلات مكالماتك ورسائلك إلى خوادم سحابية لتحليلها."
      },
      {
        title: "عديم الفائدة بدون شبكة",
        desc: "تتوقف أنظمة مكافحة الاحتيال التقليدية فورًا عن حمايتك بمجرد انقطاع الإنترنت المحمول."
      }
    ]
  },
  how: {
    badge: "بنية الأمان",
    title: "نظام الدفاع",
    titleHighlight: "PHANTOM",
    subtitle: "قبة متعددة الطبقات تعمل محليًا بالكامل على هاتفك الذكي. لا تغادر أي بايت واحد من بياناتك الشخصية الجهاز.",
    layersHeading: "طبقات حماية الجهاز",
    layers: [
      {
        name: "فحص إرشادي سريع",
        tech: "Regex وخرائط التوقيعات",
        desc: "المرشح الفوري الأول للتدفقات الواردة. يحظر أنماط شبكات البريد العشوائي المعروفة، والروابط المشبوهة، وتوقيعات نصوص الاحتيال المعروفة دون استهلاك البطارية."
      },
      {
        name: "تصنيف بالتعلم الآلي (rubert-tiny2)",
        tech: "ONNX Runtime / نموذج محلي 28.4 ميغابايت",
        desc: "شبكة عصبية مضغوطة تحلل دلالات المكالمة أو نص الرسالة في الوقت الفعلي. تكتشف التلاعب الخفي، وسيناريوهات تمثيل الأدوار (\"حساب آمن\"، \"قريب في ورطة\")، والضغط النفسي."
      },
      {
        name: "تحليل السلوك",
        tech: "آلة حالة واعية بالسياق",
        desc: "تتابع ديناميكية التفاعل: سرعة الكتابة، وتكرار التبديل إلى تطبيقات البنوك أثناء المكالمة، والتأخيرات غير الطبيعية، وأنماط شدّ الانتباه."
      },
      {
        name: "إجماع PHANTOM",
        tech: "محرك التصويت بالإجماع",
        desc: "يتخذ القرار النهائي الموزون بناءً على مخرجات الطبقات الثلاث. عند الاشتباه بهجوم، يقفل الواجهة، وينبّه المستخدم، ويرسل إشعارًا فوريًا إلى جهة اتصال موثوقة."
      }
    ],
    usp: [
      {
        title: "ذكاء اصطناعي محلي (على الجهاز)",
        desc: "شبكة rubert-tiny2 العصبية مُكمَّمة ومُحسَّنة لمعالجات الهواتف. بحجم 28.4 ميغابايت فقط، يمكنها الاحتفاظ بجميع أوزانها في ذاكرة الهاتف، ما يتيح استدلالاً في أجزاء من الثانية."
      },
      {
        title: "استقلالية تامة",
        desc: "في المترو، أو على متن طائرة، أو في أعماق الغابة — تستمر طبقة الحماية في العمل دون إنترنت أو شبكة خلوية، دون الاعتماد على أي واجهة برمجية خارجية."
      },
      {
        title: "خصوصية لا تقبل التنازل",
        desc: "لا تُرسل أي نصوص محادثات أو قوائم جهات اتصال أو سجلات إلى السحابة أبدًا. تبقى جميع العمليات الحسابية داخل بيئة معزولة خاصة بالتطبيق."
      }
    ],
    sevenLayers: [
      {
        name: "الاستدلال السريع (HeuristicsLayer — طبقة الاستدلال)",
        tech: "Regex & Signature Maps",
        desc: "فلتر فوري وخفيف لتدفقات البيانات الواردة. يحظر شبكات البريد العشوائي المعروفة، وروابط التصيد الاحتيالي، وأنماط الأتمتة الخبيثة دون استهلاك البطارية."
      },
      {
        name: "التصنيف العصبي (BertPhantomClassifier — مصنف BertPhantom)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "شبكة عصبية مضغوطة من طراز rubert-tiny2 تحلل النصوص والمكالمات في الوقت الفعلي. تكتشف سيناريوهات الحوار المخفية، والتلاعب، وأدوار مثل 'الحساب الآمن'."
      },
      {
        name: "الهندسة الاجتماعية (Social Eng. Layer — طبقة الهندسة الاجتماعية)",
        tech: "DeGenome (18 عنصرًا أساسيًا)",
        desc: "تحدد تكتيكات التلاعب باستخدام تصنيف DeGenome المكون من 18 عنصرًا أساسيًا، وتكشف عن الاستعجال المصطنع، وخطاب الضغط، ومثيرات الخوف، وطلبات العزل."
      },
      {
        name: "التدقيق السلوكي (Behavioral Layer — الطبقة السلوكية)",
        tech: "Context-Aware State Machine",
        desc: "يتتبع تفاعلات المستخدم المباشرة باستمرار: سرعة الكتابة، والتأخير المعرفي، وتكرار التنقل بين التطبيقات المصرفية وتطبيقات الاتصال أثناء المكالمة المباشرة."
      },
      {
        name: "التحقق من السمعة (Reputation Layer — طبقة السمعة)",
        tech: "PCD Identity Profiles",
        desc: "يطابق سمات المتصل مع ملفات الهوية المؤسسية (PCD)، ويكتشف عدم تطابق أنماط التحدث وإجراءات المتصل مع البروتوكولات الرسمية."
      },
      {
        name: "حل التوافق (Consensus Agent — وكيل الإجماع)",
        tech: "Consensus Voting Engine",
        desc: "محرك توافق JudgeAgent يجمع مؤشرات الخطر من جميع المستويات. عند تحديد عتبات التهديد، فإنه يقفل الواجهة، وينبه المستخدم، وينبه جهات الاتصال الموثوقة."
      },
      {
        name: "الذاكرة المناعية (Immune Memory — الذاكرة المناعية)",
        tech: "Adaptive Incident Shield",
        desc: "مستودع محلي آمن للهجمات. يتيح ضبط فلاتر الأمان محليًا على الجهاز دون أي تسريب وبناءً على التهديدات التي تم تقليلها مؤخرًا للتعامل مع أنواع الهجمات المستقبلية."
      }
    ],
    btnSimplified: "عرض مبسط",
    btnAdvanced: "براءة اختراع PHANTOM 2.0 (7 طبقات)",
    pipelineHeader: "مخطط حماية PHANTOM 2.0 الرسمي الحاصل على براءة اختراع"
  },
  trust: {
    badge: "اعتماد علمي وتقدير",
    title: "فعالية",
    titleHighlight: "مثبتة",
    subtitle: "تستند البنية التقنية لـ TrustNode إلى أبحاث رياضية دقيقة، وتحظى بتقدير المجتمع العلمي المتخصص.",
    stats: [
      {
        val: "IPC G06F 21/55",
        label: "طلب براءة اختراع",
        desc: "طلب اختراع مسجّل رسميًا لخوارزمية فريدة لتحليل تدفقات البيانات محليًا."
      },
      {
        val: "المركز الأول",
        label: "مسابقة بحثية إقليمية",
        desc: "الجائزة الأولى في قسم تكنولوجيا المعلومات لأفضل نظام أمن سيبراني عملي."
      },
      {
        val: "موسكو // 2026",
        label: "النهائي الوطني",
        desc: "دعوة رسمية للنهائي الروسي الكبير لأبحاث تكنولوجيا المعلومات في موسكو (سبتمبر 2026)."
      },
      {
        val: "~82.4%",
        label: "الدقة",
        desc: "دقة التعرّف على هجمات الهندسة الاجتماعية الموجَّهة، على مجموعة اختبار عمياء تمثيلية."
      }
    ]
  },

  header: {
    rustore: "تنزيل من RuStore",
    radar: "Product Radar",
    ecoOn: "الوضع البيئي مفعّل",
    ecoOff: "الوضع البيئي معطّل",
    seniorOn: "وضع كبار السن مفعّل",
    seniorOff: "وضع كبار السن (نص أكبر)",
    lang: "تغيير اللغة",
  },
  footer: {
    copyright: "© {year} TrustNode Protocol. جميع الحقوق محفوظة.",
    privacyLink: "سياسة الخصوصية (القانون الفيدرالي الروسي 152-FZ)",
    termsLink: "شروط الاستخدام",
    version: "درع مكافحة الاحتيال بالتعلم الآلي على الجهاز // v1.2.0 // متوافق مع القانون 152-FZ",
      githubOrg: "جميع مشاريع TrustNode على GitHub",
},
  cookie: {
    badgeLabel: "[ أمن المعلومات // القانون الروسي 152-FZ ]",
    text: "نهتم بخصوصيتك. يستخدم هذا الموقع ملفات تعريف ارتباط مجهولة وتخزينًا محليًا لحفظ إعدادات الرسومات ووضع توفير الطاقة الخاصة بك. اطّلع على",
    privacyLinkText: "سياسة الخصوصية",
    suffix: "لمزيد من التفاصيل.",
    audit: "التفاصيل القانونية",
    accept: "موافق",
    reject: "رفض"
  },
  legal: {
    privacyTitle: "سياسة الخصوصية",
    termsTitle: "شروط الاستخدام",
    tabPrivacy: "سياسة معالجة البيانات الشخصية (القانون الروسي 152-FZ)",
    tabTerms: "شروط الاستخدام",
    closeAria: "إغلاق",
    acknowledge: "فهمت",
    privacy: {
      s1: {
        heading: "[ أحكام عامة ]",
        body: "أُعدّت سياسة الخصوصية هذه وفقًا لمتطلبات القانون الفيدرالي الروسي رقم 152-FZ «بشأن البيانات الشخصية» الصادر بتاريخ 27 يوليو 2006. وهي تحدد كيفية معالجة فريق مشروع TrustNode Protocol (يُشار إليه فيما يلي بـ«المشغّل») للبيانات الشخصية للمستخدمين والتدابير المتخذة لحمايتها. الاسم القانوني وبيانات التسجيل للكيان القانوني أو صاحب المشروع الفردي الذي يعمل بصفته المشغّل: [TODO: بحاجة إلى تأكيد]."
      },
      s2: {
        heading: "[ مبدأ القبة: حماية كاملة بنسبة 100% لخصوصيتك ]",
        noticeLabel: "إشعار بالغ الأهمية:",
        noticeBody: "لا يقوم موقع TrustNode بجمع أو معالجة أو تخزين أو نقل بياناتك الشخصية أو عنوان بريدك الإلكتروني أو كلمات المرور أو الملفات السرية بشكل مباشر. تعمل جميع آليات الحماية في تطبيق PHANTOM محليًا حصريًا على معالج هاتفك الذكي."
      },
      s3: {
        heading: "[ البيانات التي يعالجها الموقع ]",
        intro: "قد تتضمن زيارة هذا الموقع المعلوماتي معالجة تلقائية لبيانات تقنية مجهولة الهوية حصريًا، مثل:",
        items: [
          "ملفات تعريف الارتباط (ضرورية لتخزين إعدادات الأداء ووضع توفير الطاقة مؤقتًا)؛",
          "ترويسات تقنية مجهولة وعنوان IP، غير مرتبطة باسم أو هوية شخص محدد؛",
          "إعدادات واجهة المستخدم (أوضاع الرسومات المختارة)."
        ]
      },
      s4: {
        heading: "[ تحميل التطبيق ]",
        body: "يتم تحميل تطبيق TrustNode عبر المنصات الرسمية — متجر RuStore وGitHub. لا يجمع موقع TrustNode بيانات المستخدمين الشخصية أو يعالجها: فجميع البيانات التي يحللها التطبيق تُعالج حصريًا محليًا على جهاز المستخدم."
      },
      s5: {
        heading: "[ توطين البيانات وأمن التخزين ]",
        body: "وفقًا للتشريعات الروسية، في حال تسجيل بيانات شخصية لمواطنين روس أثناء المراسلات الفردية عبر تطبيقات المراسلة، يلتزم المشغّل بتخزينها وتنظيمها ومعالجتها باستخدام قواعد بيانات موجودة حصريًا داخل أراضي الاتحاد الروسي."
      },
      s6: {
        heading: "[ معلومات التواصل ]",
        bodyPrefix: "لأي استفسارات تتعلق بمعالجة المعلومات التقنية أو الامتثال لمتطلبات القانون 152-FZ، يمكنك التواصل مباشرة مع المطورين عبر قناة تيليجرام الرسمية للمشروع: ",
        bodySuffix: "."
      },
      s7: {
        heading: "[ منصات التوزيع الخارجية ]",
        bodyPrefix: "يخضع تحميل التطبيق وتثبيته من متجر RuStore أو GitHub لقواعد المنصات المعنية. لا تُعد TrustNode مشغّلة للبيانات الشخصية عند استخدام منصات خارجية: ",
        bodySuffix: " يجب على مالك الموقع تأكيد دقة هذه الروابط وإمكانية تطبيقها قبل النشر."
      }
    },
    terms: {
      s1: {
        heading: "[ 1. وضع الموقع وإخلاء المسؤولية ]",
        body: "هذا الموقع هو المصدر الترويجي الرسمي لمشروع TrustNode (يُشار إليه فيما يلي بـ«برنامج TrustNode»). الموقع ذو طابع معلوماتي بحت ولا يشكّل عرضًا عامًا بالمعنى المقصود في المادة 437(2) من القانون المدني الروسي. تُتفق على جميع شروط منح ترخيص الوصول المبكر بشكل فردي."
      },
      s2: {
        heading: "[ 2. عدم احتواء أدوات تشفير (تشفير خوارزمي) ]",
        noticeLabel: "ملاحظة قانونية هامة:",
        noticeBody: "برنامج TrustNode هو محلل إرشادي دلالي لحركة المرور المحلية وأنماط النصوص. لا يحتوي على أي أدوات تشفير خوارزمي ولا يُجري أي تعديل على الشيفرة المصدرية لبروتوكولات النظام، وبالتالي فهو غير خاضع للترخيص الإلزامي من جهاز الأمن الفيدرالي الروسي (FSB) بموجب مرسوم الحكومة الروسية رقم 313."
      },
      s3: {
        heading: "[ 3. الملكية الفكرية ]",
        body: "جميع المواد الرسومية والعلامات التجارية والنماذج ثلاثية الأبعاد والشيفرة المصدرية للموقع وخوارزميات نظام PHANTOM هي ملكية فكرية لمطوري TrustNode Protocol ومحمية بموجب الجزء الرابع من القانون المدني الروسي. يخضع أي نسخ أو فك تجميع أو توزيع غير مصرح به للملاحقة وفقًا للمادة 146 من قانون العقوبات الروسي."
      },
      s4: {
        heading: "[ 4. قواعد استخدام التراخيص ]",
        body: "يُمنح الوصول المبكر المجاني حصريًا وفق شروط اتفاقية ترخيص مستخدم نهائي فردية (EULA)، تُوقَّع أو تُقبَل إلكترونيًا عند تثبيت البرنامج. يُحظر استخدام برنامج TrustNode لاعتراض حركة مرور أطراف ثالثة بشكل غير قانوني أو أي نشاط آخر غير قانوني على شبكات الاتصالات الروسية."
      },
      s5: {
        heading: "[ 5. تعديل الاتفاقية ]",
        body: "تحتفظ إدارة الموقع بالحق في تعديل شروط هذه الاتفاقية من جانب واحد دون إشعار مسبق للمستخدمين. يُنشر الإصدار الحالي دائمًا على هذه الصفحة."
      }
    }
  },
  pageNames: {
    home: "الرئيسية",
    "how-it-works": "كيف يعمل",
    tech: "التكنولوجيا",
    about: "من نحن",
    download: "تنزيل",
    comparison: "مقارنة",
    "not-found": "404"
  },
  realDev: {
    title: "التحقق من المشروع",
    subtitle: "إثبات وثائقي للتطوير النشط والمؤهلات الأكاديمية ومصنوعات هندسة البرمجيات",
    badge: "أدلة التطوير // الاعتمادات",
    devUi: {
      awards: "الجوائز والعلوم",
      graph: "خريطة التطوير",
      core: "محرك ONNX الأساسي",
      recipient: "المتلقي / الباحث",
      inst: "المؤسسة",
      event: "الحدث العلمي",
      nodes: "العقد النشطة",
      conns: "إجمالي الاتصالات",
      specs: "مواصفات المحرك الأساسي",
      baseArch: "البنية الأساسية:",
      params: "إجمالي المعاملات:",
      latency: "زمن استجابة الاستدلال:",
      copied: "تم النسخ!",
      copyName: "نسخ اسم الملف",
      dlOnnx: "تنزيل ONNX"
    },
    awardDetails: {
      title: "دبلوما البحث العلمي",
      issuer: "وزارة التعليم والعلوم في منطقة تشيليابينسك",
      institution: "كلية تشيليابينسك للهندسة الراديوية (ChRT)",
      recipient: "Pitolin Mikhail Evgenyevich",
      event: "المرحلة الثالثة من المسابقة الإقليمية لأوراق البحث العلمي الطلابية بين المؤسسات التعليمية المهنية في منطقة تشيليابينسك، 2026.",
      desc: "اعتراف رسمي بالتميز العلمي لخوارزميات دفاع TrustNode في فئة الأمن السيبراني. يركز البحث على التصنيف الدلالي المحلي لتهديدات الهندسة الاجتماعية في ذاكرة الوصول العشوائي (RAM) للأجهزة المحمولة.",
      badge: "جائزة إقليمية"
    },
    graphDetails: {
      title: "خريطة اتصالات Obsidian",
      subtitle: "لقطة من المستودع الفعلي وقاعدة معرفة المشروع",
      nodesCount: "74 عقدة نشطة",
      edgesCount: "328 اتصال",
      desc: "جميع مراحل التطوير، من تصميم وحدات HeuristicsLayer و BertPhantomClassifier إلى تطوير تكوين تكميم INT8 واختبارات الأمان، موثقة داخل رسم بياني دلالي واحد لـ Obsidian، مما يثبت التصميم المعماري الشامل.",
      badge: "قبو OBSIDIAN نشط"
    },
    onnxDetails: {
      title: "نموذج الشبكة العصبية للإنتاج",
      filename: "rubert_fraud_int8.onnx",
      size: "28.4 ميكابايت",
      format: "ONNX Runtime (INT8 كمي)",
      desc: "تم دمج ملف أوزان ثنائي حقيقي لنموذج اللغة rubert-tiny2 المحسن للغاية والمكمم إلى تنسيق 정수 INT8 في جذر المشروع. تم ضبط النموذج بدقة لزمن استجابة فائق السرعة على وحدة المعالجة المركزية (CPU) للأجهزة المحمولة ويعمل محليًا بنسبة 100% في ذاكرة الوصول العشوائي.",
      badge: "استدلال محلي"
    }
  },
  origin: {
    title: "تاريخ المشروع",
    subtitle: "من الأبحاث الأكاديمية لطالب في الأمن السيبراني إلى براءات الاختراع والاعتراف الاتحادي",
    badge: "التاريخ والفريق",
    timeline: [
      {
        badge: "أبحاث الكلية // KB-284",
        title: "الأسس الأكاديمية والتخصص",
        desc: "نشأ المشروع داخل أسوار كلية تشيليابينسك للهندسة اللاسلكية في المجموعة التعليمية KB-284 (تخصص 10.02.05 — أمن معلومات الأنظمة الآلية) تحت إشراف المستشارة العلمية ناتاليا أناتوليفنا موروزكوفا."
      },
      {
        badge: "البحث العلمي // المركز الأول",
        title: "الانتصار في البحث العلمي الإقليمي",
        desc: "حصد الإطار الدلالي الشامل والخوارزمية المبتكرة لـ TrustNode المركز الأول في المسابقة العلمية والبحثية الإقليمية (قسم تكنولوجيا المعلومات)."
      },
      {
        badge: "موسكو // سبتمبر 2026",
        title: "الوصول إلى السوبر فاينال الاتحادي",
        desc: "بناءً على الانتصار الإقليمي, قامت الكلية بتمويل رحلة المؤلف بالكامل إلى موسكو للمشاركة في السوبر فاينال الوطني المرموق للأبحاث العلمية في سبتمبر 2026."
      },
      {
        badge: "المهندس المعماري + وكلاء الذكاء الاصطناعي",
        title: "عصر جديد: تطوير المستقبل",
        desc: "تم تصميم المشروع بواسطة مطور مستقل باستخدام منهجية 'المهندس المعماري + وكلاء الذكاء الاصطناعي'. صمم المؤلف بنية الأمن وخوارزميات براءات الاختراع بنفسه، وتم تفويض كتابة الأكواد (Kotlin/C++) لوكلاء الذكاء الاصطناعي."
      }
    ]
  },
  security: {
    title: "أمان القبة",
    subtitle: "كيف تحمي TrustNode خوارزمياتها الخاصة وبياناتك من التحليل والاختراق",
    badge: "نموذج حماية التطبيق",
    complianceLabel: "تصنيف الامتثال القانوني والأمني",
    complianceText: "يتم تصنيف TrustNode كمحلل إرشادي دلالي للبيانات المحلية وأنماط النصوص. لا يحتوي النظام على أي أدوات تشفير لحركة مرور خارجية، وبالتالي لا يتطلب ترخيصًا إلزاميًا من جهاز الأمن الفيدرالي الروسي (FSB).",
    features: [
      {
        title: "مستودع VAULT الآمن",
        desc: "تشفير AES-256-GCM مدعوم بشريحة عتاد Android Keystore / StrongBox. يتم تأمين قواعد البيانات المحلية عبر SQLCipher و PBKDF2+HKDF."
      },
      {
        title: "حماية AEGIS RASP النشطة",
        desc: "الحماية الذاتية للتطبيق أثناء التشغيل (RASP). تكتشف أدوات التصحيح (Anti-Debug)، وصلاحيات الروت، والمحاكيات، ومحاولات حقن الشيفرة."
      },
      {
        title: "محرك التدقيق الذاتي الدوري",
        desc: "فحوصات دورية في الخلفية للتأكد من سلامة الملفات القابلة للتنفيذ عبر WorkManager. يحسب مجموع التحقق CRC32 لملفات NDK الثنائية الأصلية."
      },
      {
        title: "بيئة العمل المحلية وقانون 152-FZ",
        desc: "امتثال كامل لقانون البيانات الشخصية. تُعالج ملفات الصوت والسجلات والترجمات في ذاكرة الوصول العشوائي للجهاز فقط ولا تُرسل مطلقًا إلى السيرفرات."
      }
    ]
  },
  kira: {
    title: "المساعد الصوتي KIRA",
    subtitle: "دائرة كلامية ذكية تعمل مباشرة في ذاكرة الوصول العشوائي (RAM) لهاتفك",
    badge: "خطة البرنامج: KIRA",
    features: [
      {
        title: "مصنف النوايا المحلي",
        desc: "إضافة مدربة ومحسنة فوق نموذج rubert-tiny2 الأساسي. يتعرف على 15-20 نية أمنية متخصصة، مضافًا إلى وزن النموذج ~200 كيلوبايت فقط."
      },
      {
        title: "تشغيل أوفلاين بنسبة 100%",
        desc: "لا توجد اتصالات بنماذج لغوية سحابية مكلفة. جميع هياكل الدلالات وقوالب الاستجابة معبأة في التطبيق، وتعمل بدون شبكة بزمن انتقال فائق القصر."
      },
      {
        title: "مجموعات البيانات التدريبية المتقدمة",
        desc: "تم تدريبه على حوارات تركيبية متخصصة للغاية لخطط الاحتيال، تم إنشاؤها في سحابة Google Colab باستخدام نموذجي Llama 3.1 و Qwen2.5."
      }
    ]
  },
  explore: {
    title: "استكشف بروتوكول الأمان",
    subtitle: "تعرف على المزيد حول تقنيات الذكاء الاصطناعي المحلية والأساس العلمي لـ TrustNode",
    card1Title: "تكنولوجيا القبة",
    card1Badge: "نظام PHANTOM",
    card1Desc: "التفاصيل التقنية لقبة الحماية السباعية PHANTOM 2.0 والمساعد الصوتي الذكي KIRA الذي يعمل بالكامل على الجهاز.",
    card1Btn: "استكشف التكنولوجيا →",
    card2Title: "كفاءة مثبتة",
    card2Badge: "براءات الاختراع والجوائز",
    card2Desc: "براءات الاختراع الرسمية، المركز الأول في الأبحاث الإقليمية، وتاريخ تطوير المشروع.",
    card2Btn: "عنا وعن الفريق →",
    card3Title: "تنزيل التطبيق",
    card3Badge: "التثبيت // أندرويد",
    card3Desc: "قم بتنزيل TrustNode TN1 مجانًا — التطبيق الجاهز للحماية المحلية من الاحتيال والرسائل المزعجة. متوفر على RuStore.",
    card3Btn: "تنزيل التطبيق →",
    card4Title: "مقارنة منصفة",
    card4Badge: "حقائق ومنافسون",
    card4Desc: "جدول مقارنة موضوعي لميزات TrustNode مع الحلول المنافسة المتاحة في السوق عبر المعلمات الرئيسية.",
    card4Btn: "افتح جدول المقارنة →"
  },
  assembly: {
    leftPrimary: "OFFLINE-FIRST",
    leftSub: "// البيانات لا تغادر جهازك أبداً",
    rightPrimary: "ZERO TELEMETRY",
    rightSub: "// لا توجد قياسات عن بعد"
  },
  earlyAccessPage: {
    title: "تنزيل TrustNode",
    subtitle: "احصل على تطبيق TrustNode TN1 مجاناً — حماية محلية ضد احتيال الهاتف والرسائل المزعجة مباشرة على جهازك.",
    badge: "تنزيل مجاني",
    back: "العودة للرئيسية",
    rustoreBtn: "تنزيل من RuStore",
    githubBtn: "تنزيل APK من GitHub",
    feature1Title: "حماية محلية 100%",
    feature1Desc: "تتم جميع فحوصات المكالمات والرسائل على جهازك مباشرة — بياناتك لا تغادر هاتفك أبداً.",
    feature2Title: "ذكاء اصطناعي ضد المحتالين",
    feature2Desc: "النموذج العصبي المبني على rubert-tiny2 يكتشف سيناريوهات الهندسة الاجتماعية في الوقت الفعلي.",
    feature3Title: "مجاني وآمن",
    feature3Desc: "التطبيق متاح مجاناً على RuStore. ثبّته واحمِ أحباءك من المحتالين.",
    note: "متوفر لأجهزة أندرويد. الإنترنت مطلوب فقط للتنزيل الأولي.",
  },

  comparisonPage: {
    title: "مقارنة صادقة",
    subtitle: "تحليل مقارن موضوعي لـ TrustNode مقابل الحلول الأمنية العالمية الرائدة",
    badge: "مقارنة // حقائق",
    thFeature: "الميزة",
    thTrustNode: "TrustNode (TN1)",
    thKaspersky: "Kaspersky",
    thNorton: "Norton",
    thBitdefender: "Bitdefender",
    thGoogleSpam: "Google Protection",
    features: {
      textAnalysis: "تحليل النصوص (BERT، القواعد، تقييم المخاطر، URL، المتشابهات البصرية)",
      voiceAnalysis: "تحليل صوت المكالمات في الوقت الفعلي",
      visualAnalysis: "التحليل البصري (واجهات مزيفة، محافظ، تصيد)",
      socialEngDetect: "كشف الهندسة الاجتماعية (شبكة عصبية + وكلاء ذكاء اصطناعي)",
      behavioralRasp: "تحليل السلوك ومراقبة RASP",
      familyDefense: "حماية الأسرة (نظام الوصي)",
      beaconSystem: "نظام المنارة (تنبيهات جهات الاتصال عبر VK عند الاحتيال)",
      offlineOnDevice: "100% دون اتصال (تنفيذ على الجهاز)",
      pricing: "نموذج تحقيق الدخل"
    },
    status: {
      yes: "✅ نعم",
      no: "❌ لا",
      inDev: "🛠 قيد التطوير"
    },
    pricingValues: {
      trustNode: "مجانًا",
      kaspersky: "اشتراك من ~1990₽/سنة",
      norton: "اشتراك من ~$39.99/سنة",
      bitdefender: "اشتراك من ~$29.99/سنة",
      googleSpam: "مجانًا"
    },
    disclaimer: "نحن نسعى لأقصى درجات الموضوعية. إذا لاحظت أي عدم دقة، يرجى التواصل معنا عبر Telegram.",
    telegramBtn: "تواصل عبر Telegram"
  },

  roadmapPage: {
    title: "خارطة طريق التطوير",
    subtitle: "التقدم الحالي لـ TrustNode، سياسة الكشف المسؤول، والجدول الزمني لتطوير النواة الدلالية",
    badge: "الحالة والخطة",
    readyMvp: "MVP جاهز",
    underDevelopment: "قيد التطوير",
    conceptualSpec: "المواصفات المفاهيمية",
    tn1Desc: "حزمة Android كاملة التشغيل ومختبرة للحماية المحلية بالتوقيعات. لا تتطلب سوى معايرة عتبات النموذج وضبط أوزان دقيق.",
    packageLabel: "الحزمة:",
    coreEngineLabel: "المحرك الأساسي:",
    statusLabel: "الحالة:",
    fullyReady: "جاهز تماماً (MVP)",
    sourceGithub: "الكود المصدري على GitHub",
    tn3Desc: "بنية PHANTOM 2.0 الحاصلة على براءة اختراع من 7 طبقات مع توجيه إجماع ذكاء اصطناعي مستقل وشبكات إشعارات Beacon.",
    deadlineLabel: "الموعد النهائي:",
    september2026: "سبتمبر 2026",
    phaseLabel: "المرحلة:",
    architecturePhase: "مرحلة التصميم المعماري",
    kiraDesc: "محلل نية الكلام لالتقاط وتحييد أفعال الكلام المتلاعبة أثناء المكالمات المباشرة.",
    designPhase: "مرحلة التصميم",
    coreComponentLabel: "المكوّن الأساسي:",
    integrationLabel: "التكامل:",
    ramAddon: "إضافة ذاكرة الوصول العشوائي المحلية",
    disclosureTitle: "سياسة الكشف المسؤول",
    disclosureDesc: "إذا اكتشفت ثغرة محتملة في TrustNode، فيرجى إبلاغ فريقنا مباشرة. لا ننشر تفاصيل الثغرات حتى يتم إصلاحها ونقدّر الكشف المسؤول من باحثي الأمن.",
    reportTelegram: "الإبلاغ عبر Telegram",
    reportVk: "الإبلاغ عبر VK",
    reportGithub: "الإبلاغ عبر GitHub",
    milestonesTitle: "معالم التطوير والإصدارات",
    milestones: [
      { date: "2024–2025", title: "الأصول الأكاديمية والفوز الإقليمي في البحث العلمي", desc: "مشروع وُلد في كلية تشيليابينسك للراديو التقنية (KB-284) وحصل على المركز الأول في المسابقة الإقليمية للبحث العلمي." },
      { date: "v1.2.0", title: "TrustNode 1 (TN1) — Ready MVP", desc: "حزمة Android كاملة التشغيل للحماية المحلية بالتوقيعات. مرحلة معايرة ضبط العتبات وضبط الأوزان بدقة." },
      { date: "2025", title: "دمج نواة ONNX", desc: "نشر نموذج rubert_fraud_int8.onnx للاستدلال الدلالي المحلي على الجهاز دون الاعتماد على السحابة." },
      { date: "سبتمبر 2026", title: "PHANTOM 2.0 — مرحلة التصميم المعماري", desc: "بنية TN3 الحاصلة على براءة اختراع من 7 طبقات مع توجيه إجماع ذكاء اصطناعي مستقل. الموعد النهائي: سبتمبر 2026." },
      { date: "سبتمبر 2026", title: "النهائي الفيدرالي الفائق (موسكو)", desc: "عرض المشروع في النهائي الفيدرالي الفائق المرموق للبحث العلمي." },
      { date: "v3.0-design", title: "مساعد كيرا الصوتي — المواصفات المفاهيمية", desc: "محلل نية الكلام لتحييد أفعال الكلام المتلاعبة أثناء المكالمات المباشرة. مرحلة التصميم." }
    ],
    allProjectsGithub: "جميع مشاريع TrustNode على GitHub"
  }
};

const pt: Translations = {
  nav: {
    threats: "Ameaças",
    howItWorks: "Como funciona",
    security: "Segurança",
    earlyAccess: "Acesso antecipado"
  },
  brand: {
    tagline: "Escudo no dispositivo",
    footerTagline: "Protegendo a semântica do dispositivo"
  },
  hero: {
    badge: "PROTOCOLO DE PROTEÇÃO // ATIVO",
    titleSub: "[ UMA CÚPULA DE SEGURANÇA LOCAL PARA O SEU SMARTPHONE ]",
    scrollStart: "ROLE PARA COMEÇAR",
    scrollContinue: "CONTINUE ROLANDO PARA COMEÇAR",
    enterDome: "ENTRAR NA CÚPULA"
  },
  mobileCards: [
    {
      badge: "[ O QUE É? ]",
      title: "Cúpula de Segurança Local",
      desc: "TrustNode é uma cúpula pessoal de cibersegurança para o seu smartphone, protegendo o dispositivo de ameaças digitais ocultas em tempo real."
    },
    {
      badge: "[ POR QUE PRECISO DISSO? ]",
      title: "Proteção de Nova Geração",
      desc: "Antivírus móveis tradicionais são inúteis contra phishing oculto e ataques de injeção. O TrustNode bloqueia atividades maliciosas em tempo real."
    },
    {
      badge: "[ POR QUE FUNCIONA? ]",
      title: "Segurança no Dispositivo",
      desc: "Todos os algoritmos rodam totalmente em local, no seu processador. Nenhum arquivo pessoal, conversa ou registro de tráfego jamais sai do dispositivo."
    },
    {
      badge: "[ PARA QUEM É? ]",
      title: "Privacidade Absoluta",
      desc: "Criado para entusiastas de criptomoedas, empreendedores e qualquer pessoa que valorize a privacidade total de transações, segurança de ativos e confidencialidade."
    }
  ],
  mobileTabLabels: [
    "O QUÊ",
    "POR QUÊ",
    "COMO",
    "PARA QUEM"
  ],
  replayIntro: "REPETIR INTRODUÇÃO (VOLTAR AO TOPO)",
  problem: {
    badge: "Desafios atuais",
    titleLine1: "Por que as soluções existentes",
    titleHighlight: "não funcionam mais?",
    subtitle: "A indústria do cibercrime evolui mais rápido do que os bancos de dados de assinaturas centralizados em servidores conseguem acompanhar.",
    items: [
      {
        title: "A epidemia da engenharia social",
        desc: "Golpistas roubam bilhões por meio de chamadas e mensageiros, usando roteiros avançados de pressão psicológica."
      },
      {
        title: "Privacidade comprometida",
        desc: "As soluções de proteção existentes enviam registros das suas chamadas e mensagens para servidores na nuvem para análise."
      },
      {
        title: "Inútil sem rede",
        desc: "Sistemas antifraude tradicionais desligam instantaneamente e param de proteger você assim que a internet móvel cai."
      }
    ]
  },
  how: {
    badge: "Arquitetura de segurança",
    title: "O sistema de defesa",
    titleHighlight: "PHANTOM",
    subtitle: "Uma cúpula de múltiplas camadas implantada localmente no seu smartphone. Nem um único byte de dados pessoais sai do dispositivo.",
    layersHeading: "Camadas de proteção do dispositivo",
    layers: [
      {
        name: "Heurísticas rápidas",
        tech: "Regex e mapas de assinaturas",
        desc: "O primeiro filtro instantâneo para os fluxos recebidos. Bloqueia padrões conhecidos de redes de spam, links suspeitos e assinaturas de scripts fraudulentos conhecidos, sem consumir bateria."
      },
      {
        name: "Classificação por ML (rubert-tiny2)",
        tech: "ONNX Runtime / Modelo local de 28,4 MB",
        desc: "Uma rede neural comprimida analisa em tempo real a semântica da chamada ou do texto da mensagem. Detecta manipulação oculta, cenários de encenação (\"conta segura\", \"parente em apuros\") e pressão psicológica."
      },
      {
        name: "Análise comportamental",
        tech: "Máquina de estados sensível ao contexto",
        desc: "Monitora a dinâmica da interação: velocidade de digitação, frequência de troca para apps bancários durante uma chamada, atrasos anômalos e padrões de retenção de atenção."
      },
      {
        name: "Consenso PHANTOM",
        tech: "Motor de votação por consenso",
        desc: "Toma a decisão final ponderada com base nas saídas das três camadas. Ao suspeitar de um ataque, bloqueia a interface, avisa o usuário e envia uma notificação instantânea a um contato de confiança."
      }
    ],
    usp: [
      {
        title: "IA local (no dispositivo)",
        desc: "A rede neural rubert-tiny2 é quantizada e otimizada para processadores móveis. Com 28,4 MB, consegue manter todos os seus pesos na RAM do telefone, entregando inferência em microssegundos."
      },
      {
        title: "Autonomia total",
        desc: "No metrô, em um avião ou em meio à floresta — a camada de proteção continua funcionando sem internet ou rede celular, sem depender de nenhuma API externa."
      },
      {
        title: "Privacidade sem concessões",
        desc: "Nenhuma transcrição de texto, lista de contatos ou registro é enviado para a nuvem. Todo o processamento permanece dentro do ambiente isolado do aplicativo."
      }
    ],
    sevenLayers: [
      {
        name: "Heurísticas rápidas (HeuristicsLayer — Camada de heurísticas)",
        tech: "Regex & Signature Maps",
        desc: "Um filtro instantâneo e leve para fluxos de dados recebidos. Bloqueia redes de spam conhecidas, links suspeitos e assinaturas de scripts fraudulentos sem consumir bateria."
      },
      {
        name: "Classificação neuronal (BertPhantomClassifier — Classificador BertPhantom)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "Uma rede neural rubert-tiny2 compactada que analisa a semântica da chamada ou texto da mensagem em tempo real. Detecta manipulação oculta, cenários de encenação ('conta segura', 'parente em apuros')."
      },
      {
        name: "Engenharia social (Social Eng. Layer — Camada de engenharia social)",
        tech: "DeGenome (18 primitivas)",
        desc: "Identifica táticas de manipulação usando a taxonomia DeGenome de 18 primitivas: pressa artificial, intimidação, exigências de confidencialidade e pressão emocional."
      },
      {
        name: "Análise comportamental (Behavioral Layer — Camada comportamental)",
        tech: "Context-Aware State Machine",
        desc: "Monitora a dinâmica da interação em tempo real: velocidade de digitação, atrasos de resposta e frequência de troca para aplicativos bancários durante uma chamada ativa."
      },
      {
        name: "Verificação de reputação (Reputation Layer — Camada de reputação)",
        tech: "PCD Identity Profiles",
        desc: "Compara as características do chamador com perfis de identidade corporativa (PCD), identificando quando os padrões de fala e as ações não condizem com os oficiais."
      },
      {
        name: "Consenso PHANTOM (Consensus Agent — Agente de consenso)",
        tech: "Consensus Voting Engine",
        desc: "O mecanismo de votação JudgeAgent pondera as avaliações de todos os níveis. Ao suspeitar de uma ameaça, bloqueia a ação perigosa, avisa o usuário e notifica os contatos de confiança."
      },
      {
        name: "Memoria imune (Immune Memory — Memória imune)",
        tech: "Adaptive Incident Shield",
        desc: "Memória isolada de longo prazo de ataques. Adapta e refina localmente os perfis de proteção com base em incidentes evitados para proteger contra futuras variações de ameaças."
      }
    ],
    btnSimplified: "Estrutura simplificada",
    btnAdvanced: "Patente PHANTOM 2.0 (7 camadas)",
    pipelineHeader: "Camadas oficiais patenteadas do PHANTOM 2.0"
  },
  trust: {
    badge: "Validação científica e reconhecimento",
    title: "Eficácia",
    titleHighlight: "comprovada",
    subtitle: "A base tecnológica do TrustNode se apoia em pesquisa matemática rigorosa e é reconhecida pela comunidade científica especializada.",
    stats: [
      {
        val: "IPC G06F 21/55",
        label: "Pedido de patente",
        desc: "Pedido de invenção oficialmente registrado para um algoritmo único de análise local de fluxos de dados."
      },
      {
        val: "1º LUGAR",
        label: "Concurso regional de pesquisa",
        desc: "Principal prêmio na categoria de Tecnologia da Informação pelo melhor sistema prático de cibersegurança."
      },
      {
        val: "MOSCOU // 2026",
        label: "Final nacional",
        desc: "Convite oficial para a grande final russa de pesquisa em TI, em Moscou (setembro de 2026)."
      },
      {
        val: "~82,4%",
        label: "Precisão (Accuracy)",
        desc: "Precisão no reconhecimento de ataques direcionados de engenharia social, em um conjunto de teste cego representativo."
      }
    ]
  },

  header: {
    rustore: "Baixar na RuStore",
    radar: "Product Radar",
    ecoOn: "Modo ecológico ativado",
    ecoOff: "Modo ecológico desativado",
    seniorOn: "Modo sênior ativado",
    seniorOff: "Modo sênior (texto maior)",
    lang: "Mudar idioma",
  },
  footer: {
    copyright: "© {year} TrustNode Protocol. Todos os direitos reservados.",
    privacyLink: "Política de Privacidade (Lei Federal Russa 152-FZ)",
    termsLink: "Termos de Uso",
    version: "On-Device ML Fraud Shield // v1.2.0 // em conformidade com a Lei 152-FZ",
      githubOrg: "Todos os projetos do TrustNode no GitHub",
},
  cookie: {
    badgeLabel: "[ SEGURANÇA DA INFORMAÇÃO // LEI RUSSA 152-FZ ]",
    text: "Nos importamos com sua privacidade. Este site usa cookies anonimizados e armazenamento local para lembrar suas preferências de gráficos e o modo eco. Confira nossa",
    privacyLinkText: "Política de Privacidade",
    suffix: "para mais detalhes.",
    audit: "DETALHES LEGAIS",
    accept: "Aceitar",
    reject: "Rejeitar"
  },
  legal: {
    privacyTitle: "Política de Privacidade",
    termsTitle: "Termos de Uso",
    tabPrivacy: "POLÍTICA DE DADOS PESSOAIS (LEI RUSSA 152-FZ)",
    tabTerms: "TERMOS DE USO",
    closeAria: "Fechar",
    acknowledge: "Entendi",
    privacy: {
      s1: {
        heading: "[ DISPOSIÇÕES GERAIS ]",
        body: "Esta Política de Privacidade é elaborada em conformidade com a Lei Federal Russa nº 152-FZ \"Sobre Dados Pessoais\", de 27 de julho de 2006. Ela define como a equipe do projeto TrustNode Protocol (o \"Operador\") processa os dados pessoais dos usuários e as salvaguardas aplicadas. Razão social e dados de registro da pessoa jurídica ou do profissional autônomo que atua como Operadora: [TODO: a confirmar]."
      },
      s2: {
        heading: "[ O PRINCÍPIO DA CÚPULA: 100% SEGURO PARA SUA PRIVACIDADE ]",
        noticeLabel: "Aviso crítico:",
        noticeBody: "O site do TrustNode NÃO coleta, processa, armazena ou transmite diretamente seus dados pessoais, endereço de e-mail, senhas ou arquivos privados. Todos os mecanismos de proteção do aplicativo PHANTOM funcionam exclusivamente de forma local (on-device) no processador do seu smartphone."
      },
      s3: {
        heading: "[ DADOS PROCESSADOS PELO SITE ]",
        intro: "Visitar este site informativo pode envolver o processamento automático apenas de dados técnicos anonimizados, como:",
        items: [
          "Cookies (necessários para armazenar em cache o desempenho e as configurações do modo eco);",
          "Cabeçalhos técnicos anônimos e endereço IP, sem vínculo a um nome ou pessoa específica;",
          "Configurações da interface (modos gráficos selecionados)."
        ]
      },
      s4: {
        heading: "[ BAIXAR O APLICATIVO ]",
        body: "O download do aplicativo TrustNode é feito por meio de plataformas oficiais — a loja RuStore e o GitHub. O site da TrustNode não coleta nem processa os dados pessoais dos usuários: todos os dados analisados pelo aplicativo são processados exclusivamente no dispositivo do usuário."
      },
      s5: {
        heading: "[ LOCALIZAÇÃO E SEGURANÇA DO ARMAZENAMENTO ]",
        body: "De acordo com a legislação russa, se dados pessoais de cidadãos russos forem registrados durante correspondência individual por mensageiro, o Operador se compromete a armazená-los, organizá-los e processá-los exclusivamente usando bancos de dados localizados no território da Federação Russa."
      },
      s6: {
        heading: "[ INFORMAÇÕES DE CONTATO ]",
        bodyPrefix: "Para quaisquer dúvidas sobre o processamento de informações técnicas ou conformidade com a Lei 152-FZ, você pode contatar os desenvolvedores diretamente pelo canal oficial do projeto no Telegram: ",
        bodySuffix: "."
      },
      s7: {
        heading: "[ PLATAFORMAS EXTERNAS DE DISTRIBUIÇÃO ]",
        bodyPrefix: "O download e a instalação do aplicativo pela loja RuStore ou pelo GitHub são regidos pelas regras das respectivas plataformas. A TrustNode não é operadora de dados pessoais quando plataformas externas são usadas: ",
        bodySuffix: " A exatidão e a aplicabilidade desses links devem ser confirmadas pelo proprietário do site antes da publicação."
      }
    },
    terms: {
      s1: {
        heading: "[ 1. STATUS DO SITE E ISENÇÃO DE RESPONSABILIDADE ]",
        body: "Este site é o recurso promocional oficial do projeto TrustNode (\"software TrustNode\"). Tem caráter exclusivamente informativo e não constitui oferta pública nos termos do Artigo 437(2) do Código Civil Russo. Todas as condições de acesso antecipado às licenças são acordadas individualmente."
      },
      s2: {
        heading: "[ 2. AUSÊNCIA DE FERRAMENTAS DE CRIPTOGRAFIA ]",
        noticeLabel: "Aviso jurídico importante:",
        noticeBody: "O software TrustNode é um analisador heurístico semântico de tráfego local e padrões de texto. Ele NÃO contém ferramentas de criptografia e não modifica o código-fonte de protocolos do sistema, portanto não está sujeito ao licenciamento obrigatório pelo FSB russo nos termos do Decreto Governamental nº 313."
      },
      s3: {
        heading: "[ 3. PROPRIEDADE INTELECTUAL ]",
        body: "Todos os materiais gráficos, marcas registradas, modelos 3D, o código-fonte do site e os algoritmos do sistema PHANTOM são propriedade intelectual dos desenvolvedores do TrustNode Protocol e protegidos pela Parte IV do Código Civil Russo. Cópia, descompilação ou distribuição não autorizadas são puníveis nos termos do Art. 146 do Código Penal Russo."
      },
      s4: {
        heading: "[ 4. REGRAS DE USO DAS LICENÇAS ]",
        body: "O acesso antecipado gratuito é concedido exclusivamente sob um Contrato de Licença de Usuário Final (EULA) individual, assinado ou aceito eletronicamente na instalação. É proibido usar o software TrustNode para interceptar ilegalmente o tráfego de terceiros ou realizar qualquer outra atividade ilícita em redes de telecomunicações russas."
      },
      s5: {
        heading: "[ 5. ALTERAÇÕES NO ACORDO ]",
        body: "A administração do site reserva-se o direito de alterar unilateralmente os termos deste Acordo sem aviso prévio aos usuários. A versão atual é sempre publicada nesta página."
      }
    }
  },
  pageNames: {
    home: "Início",
    "how-it-works": "Como Funciona",
    tech: "Tecnologia",
    about: "Sobre Nós",
    download: "Baixar",
    comparison: "Comparação",
    "not-found": "404"
  },
  realDev: {
    title: "Verificação do Projeto",
    subtitle: "Prova documental de desenvolvimento ativo, credenciais acadêmicas e artefatos de arquitetura de software",
    badge: "EVIDÊNCIA DE DESENVOVIMENTO // CREDENCIAIS",
    devUi: {
      awards: "Prêmios e Ciência",
      graph: "Mapa de Desenvolvimento",
      core: "Motor ONNX",
      recipient: "RECEPTOR",
      inst: "INSTITUIÇÃO",
      event: "EVENTO CIENTÍFICO",
      nodes: "NÓS ATIVOS",
      conns: "CONEXÕES TOTAIS",
      specs: "ESPECIFICAÇÕES DO MODELO",
      baseArch: "Arquitetura Base:",
      params: "Total de Parâmetros:",
      latency: "Latência de Inferência:",
      copied: "Copiado!",
      copyName: "Copiar Nome",
      dlOnnx: "Baixar ONNX"
    },
    awardDetails: {
      title: "Diploma de Pesquisa Científica",
      issuer: "Ministério da Educação e Ciência da Região de Chelyabinsk",
      institution: "Colegio Radiotécnico de Chelyabinsk (ChRT)",
      recipient: "Pitolin Mikhail Evgenyevich",
      event: "Etapa III da competição regional de trabalhos de pesquisa científica estudantil entre organizações educacionais profissionais da Região de Chelyabinsk, 2026.",
      desc: "Reconhecimento oficial da excelência científica dos algoritmos de defesa do TrustNode na categoria de Cibersegurança. A pesquisa foca na classificação semântica localizada de ameaças de engenharia social na memória RAM de dispositivos móveis.",
      badge: "PRÊMIO REGIONAL"
    },
    graphDetails: {
      title: "Mapa de Conexões do Obsidian",
      subtitle: "Um instantâneo do repositório real e da base de conhecimento do projeto",
      nodesCount: "74 nós ativos",
      edgesCount: "328 conexões",
      desc: "Todas as etapas do desenvolvimento, desde o design dos módulos HeuristicsLayer e BertPhantomClassifier até o desenvolvimento da configuração de quantização INT8 e testes de segurança, estão documentadas em um único gráfico semântico do Obsidian, comprovando o design arquitetônico abrangente.",
      badge: "COFRE OBSIDIAN ATIVO"
    },
    onnxDetails: {
      title: "Modelo de Rede Neural de Produção",
      filename: "rubert_fraud_int8.onnx",
      size: "28.4 MB",
      format: "ONNX Runtime (quantizado em INT8)",
      desc: "Um arquivo real de pesos binários do modelo de linguagem rubert-tiny2 altamente otimizado, quantizado para o formato inteiro INT8, está integrado na raiz do projeto. O modelo é ajustado para inferência ultra-rápida em CPU de dispositivos móveis e executa 100% localmente na memória RAM.",
      badge: "INFERÊNCIA LOCAL"
    }
  },
  origin: {
    title: "História do Projeto",
    subtitle: "Das pesquisas de conclusão de curso de um estudante de segurança cibernética a patentes oficiais e reconhecimento federal",
    badge: "HISTÓRIA E EQUIPE",
    timeline: [
      {
        badge: "CRTC // KB-284",
        title: "Fundação Acadêmica e Especialização",
        desc: "O projeto nasceu na Escola Radiotécnica de Chelyabinsk no grupo KB-284 (Especialização 10.02.05 — Segurança da Informação de Sistemas Automatizados), sob a orientação de Natalia Anatolyevna Morozkova."
      },
      {
        badge: "PESQUISA // 1º LUGAR",
        title: "Triunfo na pesquisa regional",
        desc: "A estrutura semântica integrada e o algoritmo inovador do TrustNode trouxeram ao projeto o 1º lugar no concurso regional de pesquisa científica na seção de 'Tecnologia da Informação'."
      },
      {
        badge: "MOSCOU // SETEMBRO 2026",
        title: "Acesso à superfinal federal",
        desc: "Devido à vitória regional, a escola financiou integralmente a viagem do autor a Moscou para participar da prestigiada superfinal de pesquisa nacional em setembro de 2026."
      },
      {
        badge: "ARQUITETO + AGENTES DE IA",
        title: "Novo paradigma de desenvolvimento",
        desc: "Criado por um desenvolvedor solo com o paradigma 'Arquiteto + Agentes de IA'. A arquitetura de segurança e os algoritmos são do autor, enquanto a codificação (Kotlin/C++) foi realizada por agentes de IA."
      }
    ]
  },
  security: {
    title: "Segurança da Cúpula",
    subtitle: "Como o TrustNode protege seus próprios algoritmos e seus dados contra análise e invasão",
    badge: "MODELO DE PROTEÇÃO DO APLICATIVO",
    complianceLabel: "CLASSIFICAÇÃO DE CONFORMIDADE LEGAL E SEGURANÇA",
    complianceText: "O TrustNode é classificado como um analysador heurístico semântico de dados locais e padrões de texto. O sistema NÃO содержит ferramentas de criptografia para tráfego de terceiros, portanto, não exige licenciamento obrigatório do FSB russo.",
    features: [
      {
        title: "Armazenamento Seguro VAULT",
        desc: "Criptografia AES-256-GCM com integração do chip de hardware Android Keystore / StrongBox. As bases locais são protegidas via SQLCipher e PBKDF2+HKDF."
      },
      {
        title: "Proteção Ativa AEGIS RASP",
        desc: "Autoproteção do aplicativo em tempo de execução (RASP). Detecta depuração (Anti-Debug), privilégios de root, emuladores e tentativas de injeção de código."
      },
      {
        title: "Sistema de Autoauditoria Periódica",
        desc: "Verificações periódicas em segundo plano da integridade de arquivos executáveis baseadas no WorkManager. Calcula somas de verificação CRC32 dos binários nativos do NDK."
      },
      {
        title: "Sandbox Local e Lei Federal 152-FZ",
        desc: "Conformidade total com a lei de dados pessoais. Arquivos originais, logs e fluxos de áudio são processados apenas na RAM do dispositivo e nunca saem do aparelho."
      }
    ]
  },
  kira: {
    title: "Assistente de Voz KIRA",
    subtitle: "Um circuito de fala inteligente operando diretamente na memória RAM do seu celular",
    badge: "PLANO DO PROJETO: KIRA",
    features: [
      {
        title: "Classificador de Intenção Local",
        desc: "Extensão ajustada sobre a rede rubert-tiny2 principal. Reconhece de 15 a 20 intenções de segurança específicas, adicionando apenas ~200 KB de peso ao modelo."
      },
      {
        title: "Execução 100% Off-line",
        desc: "Sem chamadas para LLMs em nuvem. Toda a estrutura semântica e os modelos de resposta estão embutidos no aplicativo, rodando sem rede em modo de latência ultra baixa."
      },
      {
        title: "Dataset de Treinamento Avançado",
        desc: "Treinado em diálogos sintéticos altamente especializados de esquemas de fraude, gerados no Google Colab usando Llama 3.1 e Qwen2.5."
      }
    ]
  },
  explore: {
    title: "Explore o Protocolo de Segurança",
    subtitle: "Saiba mais sobre as tecnologias de IA local e a base científica do TrustNode",
    card1Title: "Tecnologia do Domo",
    card1Badge: "SISTEMA PHANTOM",
    card1Desc: "Detalhamento técnico do domo de segurança de 7 camadas PHANTOM 2.0 e o assistente de voz inteligente KIRA rodando localmente no dispositivo.",
    card1Btn: "Ver Tecnologia →",
    card2Title: "Validação Comprovada",
    card2Badge: "PATENTES E PRÊMIOS",
    card2Desc: "Patentes oficiais, primeiro lugar em pesquisa regional de TI e nossa jornada de desenvolvimento.",
    card2Btn: "Sobre Nós e Equipe →",
    card3Title: "Baixar o aplicativo",
    card3Badge: "INSTALAÇÃO // ANDROID",
    card3Desc: "Baixe o TrustNode TN1 gratuitamente — o aplicativo pronto para proteção local contra fraudes e spam. Disponível na RuStore.",
    card3Btn: "Baixar aplicativo →",
    card4Title: "Comparação Justa",
    card4Badge: "FATOS & CONCORRENTES",
    card4Desc: "Uma tabela de comparação objetiva da funcionalidade do TrustNode com as soluções existentes no mercado por parâmetros fundamentais.",
    card4Btn: "Abrir Tabela de Comparação →"
  },
  assembly: {
    leftPrimary: "OFFLINE-FIRST",
    leftSub: "// DADOS NUNCA DEIXAM O DISPOSITIVO",
    rightPrimary: "ZERO TELEMETRY",
    rightSub: "// SEM TELEMETRIA"
  },
  earlyAccessPage: {
    title: "Baixar TrustNode",
    subtitle: "Obtenha o app TrustNode TN1 gratuitamente — proteção local contra golpes e spam direto no seu dispositivo.",
    badge: "DOWNLOAD GRATUITO",
    back: "Voltar ao início",
    rustoreBtn: "Baixar na RuStore",
    githubBtn: "Baixar APK do GitHub",
    feature1Title: "Proteção 100% local",
    feature1Desc: "Todas as verificações de chamadas e mensagens acontecem no seu dispositivo — seus dados nunca saem do smartphone.",
    feature2Title: "IA contra golpistas",
    feature2Desc: "O modelo neural baseado em rubert-tiny2 detecta cenários de engenharia social em tempo real.",
    feature3Title: "Grátis e seguro",
    feature3Desc: "O aplicativo está disponível gratuitamente na RuStore. Instale e proteja seus entes queridos.",
    note: "Disponível para dispositivos Android. A internet é necessária apenas para o download inicial.",
  },

  comparisonPage: {
    title: "Comparação Honesta",
    subtitle: "Uma análise comparativa objetiva do TrustNode frente às principais soluções de segurança globais",
    badge: "COMPARAÇÃO // FATOS",
    thFeature: "Recurso",
    thTrustNode: "TrustNode (TN1)",
    thKaspersky: "Kaspersky",
    thNorton: "Norton",
    thBitdefender: "Bitdefender",
    thGoogleSpam: "Google Protection",
    features: {
      textAnalysis: "Análise de texto (BERT, regras, pontuação de risco, URL, homoglifos)",
      voiceAnalysis: "Análise de voz de chamadas em tempo real",
      visualAnalysis: "Análise visual (interfaces falsas, carteiras, phishing)",
      socialEngDetect: "Detecção de engenharia social (rede neural + agentes de IA)",
      behavioralRasp: "Análise comportamental e monitoramento RASP",
      familyDefense: "Defesa familiar Pai-Filho (sistema Guardian)",
      beaconSystem: "Sistema Beacon (alertas de contato VK sobre fraude)",
      offlineOnDevice: "100% offline (execução no dispositivo)",
      pricing: "Modelo de monetização"
    },
    status: {
      yes: "✅ Sim",
      no: "❌ Não",
      inDev: "🛠 Em desenvolvimento"
    },
    pricingValues: {
      trustNode: "Grátis",
      kaspersky: "Assinatura a partir de ~1990₽/ano",
      norton: "Assinatura a partir de ~$39.99/ano",
      bitdefender: "Assinatura a partir de ~$29.99/ano",
      googleSpam: "Grátis"
    },
    disclaimer: "Buscamos a máxima objetividade. Se você notar alguma imprecisão, entre em contato conosco no Telegram.",
    telegramBtn: "Fale conosco no Telegram"
  },

  roadmapPage: {
    title: "Roteiro de Desenvolvimento",
    subtitle: "Progresso atual do TrustNode, política de divulgação responsável e cronograma de implantação do núcleo semântico",
    badge: "STATUS E PLANO",
    readyMvp: "MVP PRONTO",
    underDevelopment: "EM DESENVOLVIMENTO",
    conceptualSpec: "ESPECIFICAÇÃO CONCEITUAL",
    tn1Desc: "Pacote Android totalmente operacional e testado para proteção local por assinaturas. Requer apenas calibração de limites do modelo e ajuste fino dos pesos.",
    packageLabel: "PACOTE:",
    coreEngineLabel: "MOTOR PRINCIPAL:",
    statusLabel: "STATUS:",
    fullyReady: "TOTALMENTE PRONTO (MVP)",
    sourceGithub: "Código-fonte no GitHub",
    tn3Desc: "Arquitetura patenteada PHANTOM 2.0 de 7 camadas com roteamento de consenso de IA independente e redes de notificação Beacon.",
    deadlineLabel: "PRAZO:",
    september2026: "SETEMBRO DE 2026",
    phaseLabel: "FASE:",
    architecturePhase: "Fase de Arquitetura",
    kiraDesc: "Analisador de intenção de fala para capturar e neutralizar atos manipulativos de fala durante chamadas ao vivo.",
    designPhase: "Fase de Design",
    coreComponentLabel: "COMPONENTE PRINCIPAL:",
    integrationLabel: "INTEGRAÇÃO:",
    ramAddon: "Complemento de RAM local",
    disclosureTitle: "Política de Divulgação Responsável",
    disclosureDesc: "Se você descobrir uma possível vulnerabilidade no TrustNode, relate-a diretamente à nossa equipe. Não publicamos detalhes de vulnerabilidades até que sejam resolvidas e valorizamos a divulgação responsável por parte de pesquisadores de segurança.",
    reportTelegram: "Relatar via Telegram",
    reportVk: "Relatar via VK",
    reportGithub: "Relatar via GitHub",
    milestonesTitle: "Marcos de Desenvolvimento e Lançamentos",
    milestones: [
      { date: "2024–2025", title: "Origens acadêmicas e vitória regional na pesquisa científica", desc: "Projeto nascido no Colégio Radiotécnico de Chelyabinsk (KB-284), vencedor do 1.º lugar na competição regional de pesquisa científica." },
      { date: "v1.2.0", title: "TrustNode 1 (TN1) — Ready MVP", desc: "Pacote Android totalmente operacional para proteção local por assinaturas. Fase de calibração de limites e ajuste fino dos pesos." },
      { date: "2025", title: "Integração do núcleo ONNX", desc: "Implantação do modelo rubert_fraud_int8.onnx para inferência semântica local no dispositivo sem dependência de nuvem." },
      { date: "SETEMBRO DE 2026", title: "PHANTOM 2.0 — Fase de Arquitetura", desc: "Arquitetura patenteada TN3 de 7 camadas com roteamento de consenso de IA independente. Prazo: setembro de 2026." },
      { date: "SETEMBRO DE 2026", title: "Superfinal federal (Moscou)", desc: "Apresentação do projeto na prestigiada superfinal federal de pesquisa científica." },
      { date: "v3.0-design", title: "Kira Voice Assistant — Especificação Conceitual", desc: "Analisador de intenção de fala para neutralizar atos manipulativos de fala durante chamadas ao vivo. Fase de design." }
    ],
    allProjectsGithub: "Todos os projetos TrustNode no GitHub"
  }
};

const fr: Translations = {
  nav: {
    threats: "Menaces",
    howItWorks: "Fonctionnement",
    security: "Sécurité",
    earlyAccess: "Accès anticipé"
  },
  brand: {
    tagline: "Bouclier embarqué",
    footerTagline: "Protéger la sémantique de l'appareil"
  },
  hero: {
    badge: "PROTOCOLE DE PROTECTION // ACTIF",
    titleSub: "[ UN DÔME DE SÉCURITÉ LOCAL POUR VOTRE SMARTPHONE ]",
    scrollStart: "FAITES DÉFILER POUR COMMENCER",
    scrollContinue: "CONTINUEZ À FAIRE DÉFILER POUR DÉMARRER",
    enterDome: "ENTRER DANS LE DÔME"
  },
  mobileCards: [
    {
      badge: "[ QU'EST-CE QUE C'EST ? ]",
      title: "Dôme de sécurité local",
      desc: "TrustNode est un dôme personnel de cybersécurité pour votre smartphone, protégeant l'appareil des menaces numériques cachées en temps réel."
    },
    {
      badge: "[ POURQUOI EN AI-JE BESOIN ? ]",
      title: "Protection nouvelle génération",
      desc: "Les antivirus mobiles classiques sont impuissants face au phishing furtif et aux injections. TrustNode bloque les activités malveillantes en temps réel."
    },
    {
      badge: "[ POURQUOI ÇA MARCHE ? ]",
      title: "Sécurité embarquée",
      desc: "Tous les algorithmes s'exécutent entièrement en local sur votre processeur. Aucun fichier personnel, conversation ou journal de trafic ne quitte jamais l'appareil."
    },
    {
      badge: "[ POUR QUI ? ]",
      title: "Confidentialité absolue",
      desc: "Conçu pour les passionnés de crypto, les entrepreneurs et tous ceux pour qui la confidentialité totale des transactions, la sécurité des actifs et la vie privée comptent."
    }
  ],
  mobileTabLabels: [
    "QUOI",
    "POURQUOI",
    "COMMENT",
    "POUR QUI"
  ],
  replayIntro: "REJOUER L'INTRO (REMONTER)",
  problem: {
    badge: "Défis actuels",
    titleLine1: "Pourquoi les solutions existantes",
    titleHighlight: "ne fonctionnent-elles plus ?",
    subtitle: "L'industrie de la cybercriminalité évolue plus vite que les bases de signatures centralisées côté serveur.",
    items: [
      {
        title: "L'épidémie d'ingénierie sociale",
        desc: "Les escrocs volent des milliards par appels et messageries, en utilisant des scénarios avancés de pression psychologique."
      },
      {
        title: "Une confidentialité compromise",
        desc: "Les solutions de protection existantes envoient les journaux de vos appels et messages vers des serveurs cloud pour analyse."
      },
      {
        title: "Inutile sans réseau",
        desc: "Les systèmes anti-fraude traditionnels s'arrêtent instantanément et ne vous protègent plus dès que l'internet mobile disparaît."
      }
    ]
  },
  how: {
    badge: "Architecture de sécurité",
    title: "Le système de défense",
    titleHighlight: "PHANTOM",
    subtitle: "Un dôme multicouche déployé localement sur votre smartphone. Pas un seul octet de données personnelles ne quitte l'appareil.",
    layersHeading: "Couches de protection de l'appareil",
    layers: [
      {
        name: "Heuristiques rapides",
        tech: "Regex et cartes de signatures",
        desc: "Le premier filtre instantané des flux entrants. Bloque les schémas connus de réseaux de spam, les liens suspects et les signatures de scripts frauduleux connus, sans consommer de batterie."
      },
      {
        name: "Classification par ML (rubert-tiny2)",
        tech: "ONNX Runtime / Modèle local de 28,4 Mo",
        desc: "Un réseau de neurones compressé analyse en temps réel la sémantique de l'appel ou du texte du message. Il détecte les manipulations cachées, les scénarios de rôle (« compte sécurisé », « proche en difficulté ») et la pression psychologique."
      },
      {
        name: "Analyse comportementale",
        tech: "Machine à états sensible au contexte",
        desc: "Suit la dynamique de l'interaction : vitesse de frappe, fréquence de bascule vers les applications bancaires pendant un appel, délais anormaux et schémas de rétention d'attention."
      },
      {
        name: "Consensus PHANTOM",
        tech: "Moteur de vote par consensus",
        desc: "Prend la décision finale pondérée à partir des résultats des trois couches. En cas de suspicion d'attaque, verrouille l'interface, alerte l'utilisateur et envoie une notification instantanée à un contact de confiance."
      }
    ],
    usp: [
      {
        title: "IA locale (sur l'appareil)",
        desc: "Le réseau de neurones rubert-tiny2 est quantifié et optimisé pour les processeurs mobiles. Avec seulement 28,4 Mo, il peut conserver tous ses poids dans la RAM du téléphone, offrant une inférence en microsecondes."
      },
      {
        title: "Autonomie totale",
        desc: "Dans le métro, en avion ou en pleine forêt — la couche de protection continue de fonctionner sans internet ni réseau cellulaire, sans dépendre d'aucune API externe."
      },
      {
        title: "Confidentialité sans compromis",
        desc: "Aucune transcription de texte, liste de contacts ou journal n'est jamais envoyé vers le cloud. Tous les calculs restent confinés au bac à sable isolé de l'application."
      }
    ],
    sevenLayers: [
      {
        name: "Heuristiques rapides (HeuristicsLayer — Couche d'heuristiques)",
        tech: "Regex & Signature Maps",
        desc: "Un filtre instantané et léger pour les flux de données entrants. Bloque les réseaux de spam connus, les liens suspects et les scripts frauduleux sans consommer de bourse."
      },
      {
        name: "Classification neuronale (BertPhantomClassifier — Classifieur BertPhantom)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "Un réseau de neurones compressé rubert-tiny2 analysant la sémantique de l'appel ou du message en temps réel. Détecte les manipulations cachées et scénarios de rôles (« compte sécurisé »)."
      },
      {
        name: "Ingénierie sociale (Social Eng. Layer — Couche d'ingénierie sociale)",
        tech: "DeGenome (18 primitives)",
        desc: "Identifie les tactiques de manipulation via la taxonomie DeGenome de 18 primitives : urgence artificielle, discours de pression, déclencheurs de peur et demandes d'isolement."
      },
      {
        name: "Analyse comportementale (Behavioral Layer — Couche comportementale)",
        tech: "Context-Aware State Machine",
        desc: "Suit la dynamique des interactions en direct : vitesse de frappe, délais de traitement cognitif et bascules vers les applications bancaires pendant un appel."
      },
      {
        name: "Vérification de réputation (Reputation Layer — Couche de réputation)",
        tech: "PCD Identity Profiles",
        desc: "Vérifie les traits de l'appelant par rapport aux profils d'identité d'entreprise (PCD), détectant les écarts entre les schémas de parole et les protocoles officiels."
      },
      {
        name: "Résolution par consensus (Consensus Agent — Agent de consensus)",
        tech: "Consensus Voting Engine",
        desc: "Un moteur de consensus JudgeAgent agrégeant les marqueurs de risque de tous niveaux. En cas de menace avérée, il verrouille l'interface, alerte l'utilisateur et prévient les contacts de confiance."
      },
      {
        name: "Mémoire immunitaire (Immune Memory — Mémoire immunitaire)",
        tech: "Adaptive Incident Shield",
        desc: "Répertoire local sécurisé des attaques. Permet un ajustement fin sans fuite sur l'appareil à partir des menaces récemment atténuées pour parer aux futures variantes d'attaques."
      }
    ],
    btnSimplified: "Structure simplifiée",
    btnAdvanced: "Brevet PHANTOM 2.0 (7 couches)",
    pipelineHeader: "Pipeline officiel breveté PHANTOM 2.0"
  },
  trust: {
    badge: "Validation scientifique & reconnaissance",
    title: "Efficacité",
    titleHighlight: "prouvée",
    subtitle: "La base technologique de TrustNode s'appuie sur une recherche mathématique rigoureuse et est reconnue par la communauté scientifique experte.",
    stats: [
      {
        val: "IPC G06F 21/55",
        label: "Dépôt de brevet",
        desc: "Demande d'invention officiellement enregistrée pour un algorithme unique d'analyse locale de flux de données."
      },
      {
        val: "1ÈRE PLACE",
        label: "Concours de recherche régional",
        desc: "Plus haute distinction de la section Technologies de l'Information pour le meilleur système pratique de cybersécurité."
      },
      {
        val: "MOSCOU // 2026",
        label: "Finale nationale",
        desc: "Invitation officielle à la grande finale russe de recherche en informatique à Moscou (septembre 2026)."
      },
      {
        val: "~82,4 %",
        label: "Précision (Accuracy)",
        desc: "Précision de reconnaissance des attaques d'ingénierie sociale ciblées, sur un échantillon de test à l'aveugle représentatif."
      }
    ]
  },

  header: {
    rustore: "Télécharger sur RuStore",
    radar: "Product Radar",
    ecoOn: "Mode éco activé",
    ecoOff: "Mode éco désactivé",
    seniorOn: "Mode seniors activé",
    seniorOff: "Mode seniors (texte plus grand)",
    lang: "Changer de langue",
  },
  footer: {
    copyright: "© {year} TrustNode Protocol. Tous droits réservés.",
    privacyLink: "Politique de confidentialité (loi fédérale russe 152-FZ)",
    termsLink: "Conditions d'utilisation",
    version: "On-Device ML Fraud Shield // v1.2.0 // conforme à la loi 152-FZ",
      githubOrg: "Tous les projets TrustNode sur GitHub",
},
  cookie: {
    badgeLabel: "[ SÉCURITÉ DE L'INFORMATION // LOI RUSSE 152-FZ ]",
    text: "Nous accordons de l'importance à votre vie privée. Ce site utilise des cookies anonymisés et un stockage local pour mémoriser vos préférences graphiques et le mode éco. Consultez notre",
    privacyLinkText: "Politique de confidentialité",
    suffix: "pour en savoir plus.",
    audit: "DÉTAILS LÉGAUX",
    accept: "Accepter",
    reject: "Refuser"
  },
  legal: {
    privacyTitle: "Politique de confidentialité",
    termsTitle: "Conditions d'utilisation",
    tabPrivacy: "POLITIQUE DE DONNÉES PERSONNELLES (LOI RUSSE 152-FZ)",
    tabTerms: "CONDITIONS D'UTILISATION",
    closeAria: "Fermer",
    acknowledge: "Compris",
    privacy: {
      s1: {
        heading: "[ DISPOSITIONS GÉNÉRALES ]",
        body: "Cette Politique de confidentialité est rédigée conformément à la loi fédérale russe n° 152-FZ « Sur les données personnelles » du 27 juillet 2006. Elle définit la manière dont l'équipe du projet TrustNode Protocol (l'« Opérateur ») traite les données personnelles des utilisateurs et les mesures de sécurité appliquées. Dénomination et informations d'immatriculation de la personne morale ou de l'entrepreneur individuel agissant en tant qu'Opérateur : [TODO : à confirmer]."
      },
      s2: {
        heading: "[ LE PRINCIPE DU DÔME : 100 % SÛR POUR VOTRE VIE PRIVÉE ]",
        noticeLabel: "Avis critique :",
        noticeBody: "Le site web de TrustNode NE collecte PAS, ne traite pas, ne stocke pas et ne transmet pas directement vos données personnelles, votre adresse e-mail, vos mots de passe ou vos fichiers privés. Tous les mécanismes de protection de l'application PHANTOM fonctionnent exclusivement en local (on-device) sur le processeur de votre smartphone."
      },
      s3: {
        heading: "[ DONNÉES TRAITÉES PAR LE SITE ]",
        intro: "La visite de ce site informatif peut impliquer le traitement automatique de données techniques exclusivement anonymisées, telles que :",
        items: [
          "Les cookies (nécessaires à la mise en cache des performances et des réglages du mode éco) ;",
          "Des en-têtes techniques anonymes et une adresse IP, non liés à un nom ou à une personne identifiée ;",
          "Les paramètres de l'interface (modes graphiques sélectionnés)."
        ]
      },
      s4: {
        heading: "[ TÉLÉCHARGEMENT DE L'APPLICATION ]",
        body: "Le téléchargement de l'application TrustNode s'effectue via les plateformes officielles — la boutique RuStore et GitHub. Le site TrustNode ne collecte ni ne traite les données personnelles des utilisateurs : toutes les données analysées par l'application sont traitées exclusivement en local sur l'appareil de l'utilisateur."
      },
      s5: {
        heading: "[ LOCALISATION ET SÉCURITÉ DU STOCKAGE ]",
        body: "Conformément à la législation russe, si des données personnelles de citoyens russes sont enregistrées lors d'une correspondance individuelle par messagerie, l'Opérateur s'engage à les stocker, les organiser et les traiter exclusivement à l'aide de bases de données situées sur le territoire de la Fédération de Russie."
      },
      s6: {
        heading: "[ COORDONNÉES ]",
        bodyPrefix: "Pour toute question relative au traitement d'informations techniques ou à la conformité avec la loi 152-FZ, vous pouvez contacter directement les développeurs via le canal Telegram officiel du projet : ",
        bodySuffix: "."
      },
      s7: {
        heading: "[ PLATEFORMES EXTERNES DE DISTRIBUTION ]",
        bodyPrefix: "Le téléchargement et l'installation de l'application depuis la boutique RuStore ou GitHub sont régis par les règles des plateformes concernées. TrustNode n'est pas opérateur de données personnelles lorsque des plateformes externes sont utilisées : ",
        bodySuffix: " L'exactitude et l'applicabilité de ces liens doivent être confirmées par le propriétaire du site avant publication."
      }
    },
    terms: {
      s1: {
        heading: "[ 1. STATUT DU SITE ET LIMITATION DE RESPONSABILITÉ ]",
        body: "Ce site est la ressource promotionnelle officielle du projet TrustNode (« logiciel TrustNode »). Il a un caractère purement informatif et ne constitue pas une offre publique au sens de l'article 437(2) du Code civil russe. Toutes les conditions d'accès anticipé aux licences sont négociées individuellement."
      },
      s2: {
        heading: "[ 2. ABSENCE D'OUTILS DE CHIFFREMENT (CRYPTOGRAPHIE) ]",
        noticeLabel: "Remarque juridique importante :",
        noticeBody: "Le logiciel TrustNode est un analyseur heuristique sémantique du trafic local et des modèles de texte. Il NE contient PAS d'outils de chiffrement cryptographique et ne modifie pas le code source des protocoles système ; il n'est donc pas soumis à la licence obligatoire du FSB russe en vertu du décret gouvernemental n° 313."
      },
      s3: {
        heading: "[ 3. PROPRIÉTÉ INTELLECTUELLE ]",
        body: "Tous les éléments graphiques, marques déposées, modèles 3D, le code source du site et les algorithmes du système PHANTOM sont la propriété intellectuelle des développeurs de TrustNode Protocol et sont protégés par la partie IV du Code civil russe. Toute copie, décompilation ou distribution non autorisée est passible de poursuites en vertu de l'article 146 du Code pénal russe."
      },
      s4: {
        heading: "[ 4. RÈGLES D'UTILISATION DES LICENCES ]",
        body: "L'accès anticipé gratuit est accordé exclusivement dans le cadre d'un contrat de licence utilisateur final (EULA) individuel, signé ou accepté électroniquement lors de l'installation. Il est interdit d'utiliser le logiciel TrustNode pour intercepter illégalement le trafic de tiers ou pour toute autre activité illicite sur les réseaux de télécommunications russes."
      },
      s5: {
        heading: "[ 5. MODIFICATION DE L'ACCORD ]",
        body: "L'administration du site se réserve le droit de modifier unilatéralement les termes de cet accord sans préavis aux utilisateurs. La version actuelle est toujours publiée sur cette page."
      }
    }
  },
  pageNames: {
    home: "Accueil",
    "how-it-works": "Comment ça marche",
    tech: "Technologie",
    about: "À Propos",
    download: "Télécharger",
    comparison: "Comparaison",
    "not-found": "404"
  },
  realDev: {
    title: "Vérification du Projet",
    subtitle: "Preuve documentaire de développement actif, diplômes universitaires et artefacts d'architecture logicielle",
    badge: "PREUVE DE DÉVELOPPEMENT // IDENTIFIANTS",
    devUi: {
      awards: "Prix et Science",
      graph: "Carte de Développement",
      core: "Moteur ONNX",
      recipient: "LAURÉAT",
      inst: "INSTITUTION",
      event: "ÉVÉNEMENT SCIENTIFIQUE",
      nodes: "NŒUDS ACTIFS",
      conns: "CONNEXIONS TOTALES",
      specs: "SPÉCIFICATIONS DU MODÈLE",
      baseArch: "Architecture de Base:",
      params: "Paramètres Totaux:",
      latency: "Latence d'Inférence:",
      copied: "Copié!",
      copyName: "Copier le Nom",
      dlOnnx: "Télécharger ONNX"
    },
    awardDetails: {
      title: "Diplôme de Recherche Scientifique",
      issuer: "Ministère de l'Éducation et de la Science de la région de Cheliabinsk",
      institution: "Collège Radiotechnique de Cheliabinsk (ChRT)",
      recipient: "Pitolin Mikhail Evgenyevich",
      event: "Étape III du concours régional de travaux de recherche scientifique d'étudiants parmi les organisations d'enseignement professionnel de la région de Cheliabinsk, 2026.",
      desc: "Reconnaissance officielle de l'excellence scientifique des algorithmes de défense de TrustNode dans la catégorie Cybersécurité. La recherche se concentre sur la classification sémantique localisée des menaces d'ingénierie sociale dans la RAM des appareils mobiles.",
      badge: "PRIX RÉGIONAL"
    },
    graphDetails: {
      title: "Carte de Connexions Obsidian",
      subtitle: "Un instantané du dépôt réel et de la base de connaissances du projet",
      nodesCount: "74 nœuds actifs",
      edgesCount: "328 connexions",
      desc: "Toutes les étapes du développement, de la conception des modules HeuristicsLayer et BertPhantomClassifier au développement de la configuration de quantification INT8 et aux tests de sécurité, sont documentées dans un graphique sémantique Obsidian unique, prouvant une conception architecturale complète.",
      badge: "COFFRE OBSIDIAN ACTIF"
    },
    onnxDetails: {
      title: "Modèle de Réseau Neuronal de Production",
      filename: "rubert_fraud_int8.onnx",
      size: "28.4 Mo",
      format: "ONNX Runtime (quantifié en INT8)",
      desc: "Un véritable fichier de poids binaires du modèle de langage hautement optimisé rubert-tiny2, quantifié au format entier INT8, est intégré à la racine du projet. Le modèle est affiné pour une inférence CPU ultra-rapide sur les appareils mobiles et s'exécute à 100 % localement dans la RAM.",
      badge: "INFERENCE LOCALE"
    }
  },
  origin: {
    title: "Histoire du Projet",
    subtitle: "Des recherches universitaires d'un étudiant en cybersécurité aux brevets officiels et à la reconnaissance nationale",
    badge: "HISTOIRE ET ÉQUIPE",
    timeline: [
      {
        badge: "RECHERCHE COLLÈGE",
        title: "Fondations Académiques",
        desc: "Développé au Collège Radiotechnique de Chelyabinsk au sein du groupe d'études KB-284 (Spécialité 10.02.05 — Sécurité de l'Information des Systèmes Automatisés), sous la direction de la conseillère scientifique Natalia Anatolyevna Morozkova."
      },
      {
        badge: "VICTOIRE RÉGIONALE",
        title: "Triomphe Scientifique Régional",
        desc: "Le cadre sémantique global de TrustNode a remporté la 1ère place du concours de recherche scientifique régional (section informatique) pour son approche novatrice de la lutte contre la fraude."
      },
      {
        badge: "SUPERFINALE FÉDÉRALE",
        title: "Superfinale Nationale à Moscou",
        desc: "Suite à ce triomphe, l'établissement finance intégralement le voyage de l'auteur à Moscou pour participer à la prestigieuse superfinale nationale de recherche en septembre 2026."
      },
      {
        badge: "CONCEPTEUR + AGENTS IA",
        title: "Nouveau paradigme de développement",
        desc: "Conçu par un développeur solo selon la méthodologie 'Concepteur + Agents IA' : l'auteur crée l'architecture de sécurité et les algorithmes, tandis que le codage (Kotlin/C++) est délégué à des agents IA."
      }
    ]
  },
  security: {
    title: "Sécurité du Dôme",
    subtitle: "Comment TrustNode protège ses propres algorithmes et vos données contre l'analyse et le piratage",
    badge: "MODÈLE DE SÉCURITÉ DE L'APPLICATION",
    complianceLabel: "CLASSIFICATION DE CONFORMITÉ LÉGALE ET SÉCURITAIRE",
    complianceText: "TrustNode est classé comme un analyseur heuristique sémantique de données locales et de motifs textuels. Le système ne contient aucun outil de chiffrement tiers, il n'est donc pas soumis à l'octroi d'une licence obligatoire par le FSB russe.",
    features: [
      {
        title: "Stockage Sécurisé VAULT",
        desc: "Chiffrement AES-256-GCM de niveau militaire soutenu par les puces physiques Android Keystore / StrongBox. Les bases de données locales sont sécurisées via SQLCipher et PBKDF2+HKDF."
      },
      {
        title: "Protection Active AEGIS RASP",
        desc: "Autoprotection de l'application au moment de l'exécution (RASP). Détecte le débogage (Anti-Debug), les privilèges root, les émulateurs et les injections de code."
      },
      {
        title: "Moteur d'Auto-audit Périodique",
        desc: "Vérifications d'intégrité en arrière-plan des exécutables gérées par WorkManager. Calcule les sommes de contrôle CRC32 des binaires NDK natifs pour détecter les altérations."
      },
      {
        title: "Bac à sable local & Loi 152-FZ",
        desc: "Conformité stricte à la loi sur les données personnelles. Toutes les transcriptions d'appels, messages et journaux restent uniquement dans la RAM locale de l'appareil et ne sont jamais envoyés aux serveurs."
      }
    ]
  },
  kira: {
    title: "Assistant Vocal KIRA",
    subtitle: "Un circuit de parole intelligent fonctionnant entièrement dans la mémoire RAM locale de votre smartphone",
    badge: "CALENDRIER DU PROJET : KIRA",
    features: [
      {
        title: "Classificateur d'Intents Local",
        desc: "Un module complémentaire affiné et hautement optimisé au-dessus du modèle principal rubert-tiny2. Résout 15 à 20 intentions de sécurité spécifiques pour une empreinte mémoire de seulement 200 Ko."
      },
      {
        title: "Exécution 100 % hors ligne",
        desc: "Aucun appel d'API LLM externe lent et coûteux. Les modèles de réponse entièrement hors ligne et les algorithmes de traitement de la parole maintiennent la latence d'exécution à l'échelle de l'enregistrement."
      },
      {
        title: "Jeux de données d'entraînement avancés",
        desc: "Entraîné sur des dialogues synthétiques de schémas d'ingénierie sociale synthétisés dans Google Colab à l'aide de modèles avancés Llama 3.1 et Qwen2.5 pour une précision ultime."
      }
    ]
  },
  explore: {
    title: "Explorez le Protocole de Sécurité",
    subtitle: "En savoir plus sur les technologies d'IA locales et les fondements scientifiques de TrustNode",
    card1Title: "Technologie du Dôme",
    card1Badge: "SYSTÈME PHANTOM",
    card1Desc: "Détails techniques du dôme de sécurité à 7 couches PHANTOM 2.0 et l'assistant vocal intelligent KIRA fonctionnant entièrement sur l'appareil.",
    card1Btn: "Découvrir la Tech →",
    card2Title: "Efficacité Prouvée",
    card2Badge: "BREVETS ET PRIX",
    card2Desc: "Brevets officiels, première place en recherche régionale et histoire du projet.",
    card2Btn: "À Propos & Équipe →",
    card3Title: "Télécharger l'application",
    card3Badge: "INSTALLATION // ANDROID",
    card3Desc: "Téléchargez TrustNode TN1 gratuitement — l'application prête pour une protection locale contre les fraudes et le spam. Disponible sur RuStore.",
    card3Btn: "Télécharger l'application →",
    card4Title: "Comparatif Honnête",
    card4Badge: "FAITS ET CONCURRENTS",
    card4Desc: "Un tableau comparatif objectif des fonctionnalités de TrustNode par rapport aux solutions existantes sur le marché selon des critères clés.",
    card4Btn: "Ouvrir le Tableau Comparatif →"
  },
  assembly: {
    leftPrimary: "OFFLINE-FIRST",
    leftSub: "// LES DONNÉES NE QUITTENT JAMAIS L'APPAREIL",
    rightPrimary: "ZERO TELEMETRY",
    rightSub: "// ZÉRO TÉLÉMÉTRIE"
  },
  earlyAccessPage: {
    title: "Télécharger TrustNode",
    subtitle: "Obtenez gratuitement l'application TrustNode TN1 — une protection locale contre les arnaques téléphoniques et le spam, directement sur votre appareil.",
    badge: "TÉLÉCHARGEMENT GRATUIT",
    back: "Retour à l'accueil",
    rustoreBtn: "Télécharger sur RuStore",
    githubBtn: "Télécharger l'APK depuis GitHub",
    feature1Title: "Protection 100% locale",
    feature1Desc: "Toutes les vérifications d'appels et de messages se font sur votre appareil — vos données ne quittent jamais votre smartphone.",
    feature2Title: "IA contre les arnaqueurs",
    feature2Desc: "Le modèle neuronal basé sur rubert-tiny2 détecte les scénarios d'ingénierie sociale en temps réel.",
    feature3Title: "Gratuit et sécurisé",
    feature3Desc: "L'application est disponible gratuitement sur RuStore. Installez-la et protégez vos proches.",
    note: "Disponible pour les appareils Android. Internet n'est nécessaire que pour le premier téléchargement.",
  },

  comparisonPage: {
    title: "Comparaison honnête",
    subtitle: "Une analyse comparative objective de TrustNode par rapport aux principales solutions de sécurité mondiales",
    badge: "COMPARAISON // FAITS",
    thFeature: "Fonctionnalité",
    thTrustNode: "TrustNode (TN1)",
    thKaspersky: "Kaspersky",
    thNorton: "Norton",
    thBitdefender: "Bitdefender",
    thGoogleSpam: "Google Protection",
    features: {
      textAnalysis: "Analyse de texte (BERT, règles, notation du risque, URL, homoglyphes)",
      voiceAnalysis: "Analyse vocale des appels en temps réel",
      visualAnalysis: "Analyse visuelle (interfaces factices, portefeuilles, phishing)",
      socialEngDetect: "Détection d'ingénierie sociale (réseau neuronal + agents IA)",
      behavioralRasp: "Analyse comportementale et surveillance RASP",
      familyDefense: "Défense familiale Parent-Enfant (système Guardian)",
      beaconSystem: "Système Beacon (alertes des contacts VK en cas de fraude)",
      offlineOnDevice: "100% hors ligne (exécution sur l'appareil)",
      pricing: "Modèle de monétisation"
    },
    status: {
      yes: "✅ Oui",
      no: "❌ Non",
      inDev: "🛠 En développement"
    },
    pricingValues: {
      trustNode: "Gratuit",
      kaspersky: "Abonnement à partir de ~1990₽/an",
      norton: "Abonnement à partir de ~$39.99/an",
      bitdefender: "Abonnement à partir de ~$29.99/an",
      googleSpam: "Gratuit"
    },
    disclaimer: "Nous nous efforçons d'atteindre une objectivité maximale. Si vous repérez une inexactitude, contactez-nous sur Telegram.",
    telegramBtn: "Contacter sur Telegram"
  },

  roadmapPage: {
    title: "Feuille de route de développement",
    subtitle: "Progrès actuels de TrustNode, politique de divulgation responsable et calendrier de déploiement du noyau sémantique",
    badge: "STATUT ET PLAN",
    readyMvp: "MVP PRÊT",
    underDevelopment: "EN DÉVELOPPEMENT",
    conceptualSpec: "SPÉCIFICATION CONCEPTUELLE",
    tn1Desc: "Paquet Android entièrement opérationnel et testé pour la protection locale par signatures. Nécessite uniquement l'étalonnage des seuils du modèle et l'ajustement fin des poids.",
    packageLabel: "PAQUET :",
    coreEngineLabel: "MOTEUR PRINCIPAL :",
    statusLabel: "STATUT :",
    fullyReady: "ENTIÈREMENT PRÊT (MVP)",
    sourceGithub: "Code source sur GitHub",
    tn3Desc: "Architecture brevetée PHANTOM 2.0 en 7 couches avec routage de consensus IA indépendant et réseaux de notification Beacon.",
    deadlineLabel: "ÉCHÉANCE :",
    september2026: "SEPTEMBRE 2026",
    phaseLabel: "PHASE :",
    architecturePhase: "Phase d'architecture",
    kiraDesc: "Analyseur d'intention vocale pour capturer et neutraliser les actes de parole manipulateurs lors d'appels en direct.",
    designPhase: "Phase de conception",
    coreComponentLabel: "COMPOSANT PRINCIPAL :",
    integrationLabel: "INTÉGRATION :",
    ramAddon: "Extension RAM locale",
    disclosureTitle: "Politique de divulgation responsable",
    disclosureDesc: "Si vous découvrez une vulnérabilité potentielle dans TrustNode, signalez-la directement à notre équipe. Nous ne publions pas les détails des vulnérabilités avant leur résolution et apprécions la divulgation responsable des chercheurs en sécurité.",
    reportTelegram: "Signaler via Telegram",
    reportVk: "Signaler via VK",
    reportGithub: "Signaler via GitHub",
    milestonesTitle: "Jalons de développement et de versions",
    milestones: [
      { date: "2024–2025", title: "Origines académiques et victoire régionale en recherche scientifique", desc: "Projet né au Collège de radiotélécommunication de Tcheliabinsk (KB-284), vainqueur de la 1re place au concours régional de recherche scientifique." },
      { date: "v1.2.0", title: "TrustNode 1 (TN1) — Ready MVP", desc: "Paquet Android entièrement opérationnel pour la protection locale par signatures. Phase d'étalonnage des seuils et d'ajustement fin des poids." },
      { date: "2025", title: "Intégration du noyau ONNX", desc: "Déploiement du modèle rubert_fraud_int8.onnx pour l'inférence sémantique locale sur l'appareil sans dépendance au cloud." },
      { date: "SEPTEMBRE 2026", title: "PHANTOM 2.0 — Phase d'architecture", desc: "Architecture brevetée TN3 en 7 couches avec routage de consensus IA indépendant. Échéance : septembre 2026." },
      { date: "SEPTEMBRE 2026", title: "Superfinale fédérale (Moscou)", desc: "Présentation du projet à la prestigieuse superfinale fédérale de recherche scientifique." },
      { date: "v3.0-design", title: "Kira Voice Assistant — Spécification conceptuelle", desc: "Analyseur d'intention vocale pour neutraliser les actes de parole manipulateurs lors d'appels en direct. Phase de conception." }
    ],
    allProjectsGithub: "Tous les projets TrustNode sur GitHub"
  }
};

const de: Translations = {
  nav: {
    threats: "Bedrohungen",
    howItWorks: "So funktioniert's",
    security: "Sicherheit",
    earlyAccess: "Früher Zugang"
  },
  brand: {
    tagline: "On-Device-Schutzschild",
    footerTagline: "Schutz direkt auf dem Gerät"
  },
  hero: {
    badge: "SCHUTZPROTOKOLL // AKTIV",
    titleSub: "[ EINE LOKALE SICHERHEITSKUPPEL FÜR IHR SMARTPHONE ]",
    scrollStart: "SCROLLEN ZUM STARTEN",
    scrollContinue: "WEITERSCROLLEN ZUM START",
    enterDome: "KUPPEL BETRETEN"
  },
  mobileCards: [
    {
      badge: "[ WAS IST DAS? ]",
      title: "Lokale Sicherheitskuppel",
      desc: "TrustNode ist eine persönliche Cybersicherheits-Kuppel für Ihr Smartphone, die das Gerät in Echtzeit vor versteckten digitalen Bedrohungen schützt."
    },
    {
      badge: "[ WOZU BRAUCHE ICH DAS? ]",
      title: "Schutz der nächsten Generation",
      desc: "Herkömmliche mobile Antivirenprogramme sind gegen verdecktes Phishing und Injection-Angriffe machtlos. TrustNode blockiert schädliche Aktivitäten in Echtzeit."
    },
    {
      badge: "[ WARUM FUNKTIONIERT ES? ]",
      title: "Sicherheit auf dem Gerät",
      desc: "Alle Algorithmen laufen vollständig lokal auf Ihrem Prozessor. Keine persönlichen Dateien, Gespräche oder Verkehrsprotokolle verlassen jemals das Gerät."
    },
    {
      badge: "[ FÜR WEN IST ES? ]",
      title: "Absolute Privatsphäre",
      desc: "Entwickelt für Krypto-Enthusiasten, Unternehmer und alle, denen absolute Transaktionsprivatsphäre, Sicherheit der Vermögenswerte und Vertraulichkeit wichtig sind."
    }
  ],
  mobileTabLabels: [
    "WAS",
    "WOZU",
    "WARUM",
    "FÜR WEN"
  ],
  replayIntro: "INTRO ERNEUT ABSPIELEN (NACH OBEN)",
  problem: {
    badge: "Aktuelle Herausforderungen",
    titleLine1: "Warum bestehende Lösungen",
    titleHighlight: "nicht mehr funktionieren",
    subtitle: "Die Cyberkriminalität entwickelt sich schneller weiter, als es zentrale, serverseitige Signaturdatenbanken mithalten können.",
    items: [
      {
        title: "Die Epidemie des Social Engineering",
        desc: "Betrüger stehlen Milliarden über Anrufe und Messenger, indem sie ausgeklügelte Skripte psychologischen Drucks einsetzen."
      },
      {
        title: "Gefährdete Privatsphäre",
        desc: "Bestehende Schutzlösungen senden Protokolle Ihrer Anrufe und Nachrichten zur Analyse an Cloud-Server."
      },
      {
        title: "Nutzlos ohne Netz",
        desc: "Herkömmliche Anti-Fraud-Systeme schalten sich sofort ab und schützen Sie nicht mehr, sobald die mobile Internetverbindung ausfällt."
      }
    ]
  },
  how: {
    badge: "Sicherheitsarchitektur",
    title: "Das",
    titleHighlight: "PHANTOM-Verteidigungssystem",
    subtitle: "Eine mehrschichtige Kuppel, die lokal auf Ihrem Smartphone läuft. Kein einziges Byte persönlicher Daten verlässt jemals das Gerät.",
    layersHeading: "Schutzebenen des Geräts",
    layers: [
      {
        name: "Schnelle Heuristiken",
        tech: "Regex & Signaturkarten",
        desc: "Der erste sofortige Filter für eingehende Datenströme. Blockiert bekannte Muster von Spam-Netzwerken, verdächtige Links und bekannte Betrugsskript-Signaturen, ohne den Akku zu belasten."
      },
      {
        name: "ML-Klassifikation (rubert-tiny2)",
        tech: "ONNX Runtime / 28,4-MB-Lokalmodell",
        desc: "Ein komprimiertes neuronales Netz analysiert in Echtzeit die Semantik eines Anrufs oder Nachrichtentexts. Erkennt versteckte Manipulation, Rollenspiel-Szenarien („sicheres Konto“, „Angehöriger in Not“) und psychologischen Druck."
      },
      {
        name: "Verhaltensanalyse",
        tech: "Kontextbewusste Zustandsmaschine",
        desc: "Verfolgt die Interaktionsdynamik: Tippgeschwindigkeit, Häufigkeit des Wechsels zu Banking-Apps während eines Anrufs, ungewöhnliche Verzögerungen und Muster der Aufmerksamkeitsbindung."
      },
      {
        name: "PHANTOM-Konsens",
        tech: "Konsens-Abstimmungs-Engine",
        desc: "Trifft die endgültige gewichtete Entscheidung auf Basis der Ergebnisse aller drei Ebenen. Bei Angriffsverdacht sperrt es die Oberfläche, warnt den Nutzer und sendet eine sofortige Push-Benachrichtigung an eine vertrauenswürdige Kontaktperson."
      }
    ],
    usp: [
      {
        title: "Lokale KI (auf dem Gerät)",
        desc: "Das neuronale Netz rubert-tiny2 ist quantisiert und für mobile Prozessoren optimiert. Mit nur 28,4 MB kann es alle Gewichte im RAM des Telefons halten und liefert Inferenz im Mikrosekundenbereich."
      },
      {
        title: "Vollständige Autonomie",
        desc: "In der U-Bahn, im Flugzeug oder tief im Wald — die Schutzebene funktioniert weiter ohne Internet oder Mobilfunknetz, unabhängig von jeder externen API."
      },
      {
        title: "Kompromisslose Privatsphäre",
        desc: "Keine Textprotokolle, Kontaktlisten oder Logs werden jemals in die Cloud gesendet. Alle Berechnungen bleiben innerhalb der isolierten Sandbox der App."
      }
    ],
    sevenLayers: [
      {
        name: "Schnelle Heuristiken (HeuristicsLayer — Heuristik-Ebene)",
        tech: "Regex & Signature Maps",
        desc: "Ein sofortiger, leichtgewichtiger Filter für eingehende Datenströme. Blockiert bekannte Spam-Netzwerke, Phishing-Links und bösartige Automatisierungsmuster ohne Akkubelastung."
      },
      {
        name: "Neuronale Klassifikation (BertPhantomClassifier — BertPhantom-Klassifikator)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "Ein komprimiertes rubert-tiny2 neuronales Netz, das Anrufe und Texte in Echtzeit analysiert. Erkennt versteckte Gesprächsskripte, Manipulationen und Rollen wie „sicheres Konto“."
      },
      {
        name: "Soziale Manipulation (Social Engineering Layer — Social-Engineering-Ebene)",
        tech: "DeGenome (18 Primitive)",
        desc: "Identifiziert Manipulationstaktiken mithilfe der DeGenome-Taxonomie von 18 Primitiven: künstliche Dringlichkeit, Druckreden, Angstauslöser und Isolationsaufforderungen."
      },
      {
        name: "Verhaltensanalyse (Behavioral Layer — Verhaltensebene)",
        tech: "Context-Aware State Machine",
        desc: "Verfolgt kontinuierlich Live-Nutzerinteraktionen: Tippgeschwindigkeit, verhaltensorientierte Verarbeitungsverzögerungen und die Häufigkeit des Wechsels zu Banking-Apps während eines Anrufs."
      },
      {
        name: "Reputationsüberprüfung (Reputation Layer — Reputationsebene)",
        tech: "PCD Identity Profiles",
        desc: "Gleicht Anrufermerkmale mit Unternehmensidentitätsprofilen (PCD) ab und erkennt Abweichungen zwischen Sprechmustern und offiziellen Protokollen."
      },
      {
        name: "Konsens-Entscheidung (Consensus Agent — Konsens-Agent)",
        tech: "Consensus Voting Engine",
        desc: "Eine JudgeAgent-Konsens-Engine, die Risikomarker aus allen Ebenen aggregiert. Bei Angriffsverdacht sperrt sie die Ausführung, warnt den Nutzer und benachrichtigt Vertrauenskontakte."
      },
      {
        name: "Immungedächtnis (Immune Memory — Immungedächtnis)",
        tech: "Adaptive Incident Shield",
        desc: "Lokaler sicherer Angriffsspeicher. Ermöglicht die geräteinterne, leckagefreie Feinabstimmung von Sicherheitsfiltern basierend auf kürzlich abgewehrten Bedrohungen."
      }
    ],
    btnSimplified: "Vereinfachte Struktur",
    btnAdvanced: "PHANTOM 2.0 Patent (7 Schichten)",
    pipelineHeader: "Offizielle patentierte PHANTOM 2.0 Pipeline"
  },
  trust: {
    badge: "Wissenschaftliche Validierung & Anerkennung",
    title: "Nachgewiesene",
    titleHighlight: "Wirksamkeit",
    subtitle: "Die Technologiebasis von TrustNode stützt sich auf rigorose mathematische Forschung und wird von der wissenschaftlichen Fachwelt anerkannt.",
    stats: [
      {
        val: "IPC G06F 21/55",
        label: "Patentanmeldung",
        desc: "Offiziell registrierte Erfindungsanmeldung für einen einzigartigen Algorithmus zur lokalen Analyse von Datenströmen."
      },
      {
        val: "1. PLATZ",
        label: "Regionaler Forschungswettbewerb",
        desc: "Höchste Auszeichnung im Bereich Informationstechnologie für das beste praktische Cybersicherheitssystem."
      },
      {
        val: "MOSKAU // 2026",
        label: "Nationales Finale",
        desc: "Offizielle Einladung zum gesamtrussischen IT-Forschungsfinale in Moskau (September 2026)."
      },
      {
        val: "~82,4 %",
        label: "Genauigkeit (Accuracy)",
        desc: "Erkennungsgenauigkeit gezielter Social-Engineering-Angriffe auf einem repräsentativen Blind-Test-Datensatz."
      }
    ]
  },

  header: {
    rustore: "Bei RuStore herunterladen",
    radar: "Product Radar",
    ecoOn: "Öko-Modus aktiviert",
    ecoOff: "Öko-Modus deaktiviert",
    seniorOn: "Seniorenmodus aktiviert",
    seniorOff: "Seniorenmodus (größere Schrift)",
    lang: "Sprache ändern",
  },
  footer: {
    copyright: "© {year} TrustNode Protocol. Alle Rechte vorbehalten.",
    privacyLink: "Datenschutzerklärung (russisches Bundesgesetz 152-FZ)",
    termsLink: "Nutzungsbedingungen",
    version: "On-Device ML Fraud Shield // v1.2.0 // konform mit Gesetz 152-FZ",
      githubOrg: "Alle TrustNode-Projekte auf GitHub",
},
  cookie: {
    badgeLabel: "[ INFORMATIONSSICHERHEIT // RUSSISCHES GESETZ 152-FZ ]",
    text: "Uns ist Ihre Privatsphäre wichtig. Diese Website verwendet anonymisierte Cookies und lokalen Speicher, um Ihre Grafik- und Öko-Modus-Einstellungen zu merken. Lesen Sie unsere",
    privacyLinkText: "Datenschutzerklärung",
    suffix: "für Details.",
    audit: "RECHTLICHE DETAILS",
    accept: "Akzeptieren",
    reject: "Ablehnen"
  },
  legal: {
    privacyTitle: "Datenschutzerklärung",
    termsTitle: "Nutzungsbedingungen",
    tabPrivacy: "DATENSCHUTZRICHTLINIE (RU-GESETZ 152-FZ)",
    tabTerms: "NUTZUNGSBEDINGUNGEN",
    closeAria: "Schließen",
    acknowledge: "Verstanden",
    privacy: {
      s1: {
        heading: "[ ALLGEMEINE BESTIMMUNGEN ]",
        body: "Diese Datenschutzerklärung wurde in Übereinstimmung mit dem russischen Bundesgesetz Nr. 152-FZ „Über personenbezogene Daten“ vom 27. Juli 2006 erstellt. Sie legt fest, wie das TrustNode-Protocol-Projektteam (der „Betreiber“) personenbezogene Nutzerdaten verarbeitet und welche Schutzmaßnahmen gelten. Firmenname und Registrierungsangaben der juristischen Person oder des Einzelunternehmers, der als Verantwortlicher handelt: [TODO: noch zu bestätigen]."
      },
      s2: {
        heading: "[ DAS KUPPEL-PRINZIP: 100 % SICHER FÜR IHRE PRIVATSPHÄRE ]",
        noticeLabel: "Wichtiger Hinweis:",
        noticeBody: "Die TrustNode-Website sammelt, verarbeitet, speichert oder überträgt Ihre persönlichen Daten, E-Mail-Adresse, Passwörter oder privaten Dateien NICHT direkt. Alle Schutzmechanismen der PHANTOM-App laufen ausschließlich lokal (on-device) auf dem Prozessor Ihres Smartphones."
      },
      s3: {
        heading: "[ VON DER WEBSITE VERARBEITETE DATEN ]",
        intro: "Der Besuch dieser Informationswebsite kann die automatische Verarbeitung ausschließlich anonymisierter technischer Daten umfassen, wie zum Beispiel:",
        items: [
          "Cookies (erforderlich zum Zwischenspeichern von Leistungs- und Öko-Modus-Einstellungen);",
          "Anonyme technische Header und IP-Adresse, ohne Verknüpfung zu einem Namen oder einer bestimmten Person;",
          "Oberflächen-Einstellungen (ausgewählte Grafikmodi)."
        ]
      },
      s4: {
        heading: "[ APP-DOWNLOAD ]",
        body: "Der Download der TrustNode-App erfolgt über offizielle Plattformen — den RuStore-Store und GitHub. Die TrustNode-Website erhebt und verarbeitet keine personenbezogenen Daten der Nutzer: Alle von der App analysierten Daten werden ausschließlich lokal auf dem Gerät des Nutzers verarbeitet."
      },
      s5: {
        heading: "[ DATENLOKALISIERUNG UND SPEICHERSICHERHEIT ]",
        body: "Gemäß russischem Recht verpflichtet sich der Betreiber, personenbezogene Daten russischer Bürger, die während einer individuellen Messenger-Korrespondenz erfasst werden, ausschließlich in Datenbanken auf dem Gebiet der Russischen Föderation zu speichern, zu organisieren und zu verarbeiten."
      },
      s6: {
        heading: "[ KONTAKTINFORMATIONEN ]",
        bodyPrefix: "Bei Fragen zur Verarbeitung technischer Informationen oder zur Einhaltung des Gesetzes 152-FZ können Sie die Entwickler direkt über den offiziellen Telegram-Kanal des Projekts kontaktieren: ",
        bodySuffix: "."
      },
      s7: {
        heading: "[ EXTERNE VERTRIEBSPLATTFORMEN ]",
        bodyPrefix: "Der Download und die Installation der App aus dem RuStore-Store oder von GitHub unterliegen den Regeln der jeweiligen Plattformen. TrustNode ist bei der Nutzung externer Plattformen nicht Verantwortlicher für personenbezogene Daten: ",
        bodySuffix: " Die Richtigkeit und Anwendbarkeit dieser Links muss vom Website-Betreiber vor der Veröffentlichung bestätigt werden."
      }
    },
    terms: {
      s1: {
        heading: "[ 1. STATUS DER WEBSITE UND HAFTUNGSAUSSCHLUSS ]",
        body: "Diese Website ist die offizielle Werberessource des TrustNode-Projekts („TrustNode-Software“). Sie hat rein informativen Charakter und stellt kein öffentliches Angebot im Sinne von Artikel 437(2) des russischen Zivilgesetzbuchs dar. Alle Bedingungen für den frühen Lizenzzugang werden individuell vereinbart."
      },
      s2: {
        heading: "[ 2. KEINE VERSCHLÜSSELUNGSWERKZEUGE (KRYPTOGRAFIE) ]",
        noticeLabel: "Wichtiger rechtlicher Hinweis:",
        noticeBody: "Die TrustNode-Software ist ein semantischer heuristischer Analysator für lokalen Datenverkehr und Textmuster. Sie enthält KEINE kryptografischen Verschlüsselungswerkzeuge und verändert den Quellcode von Systemprotokollen nicht, weshalb sie nicht der obligatorischen FSB-Lizenzierung gemäß Regierungsverordnung Nr. 313 unterliegt."
      },
      s3: {
        heading: "[ 3. GEISTIGES EIGENTUM ]",
        body: "Alle grafischen Materialien, Marken, 3D-Modelle, der Quellcode der Website sowie die Algorithmen des PHANTOM-Systems sind geistiges Eigentum der TrustNode-Protocol-Entwickler und durch Teil IV des russischen Zivilgesetzbuchs geschützt. Unbefugtes Kopieren, Dekompilieren oder Verbreiten wird gemäß Art. 146 des russischen Strafgesetzbuchs verfolgt."
      },
      s4: {
        heading: "[ 4. LIZENZNUTZUNGSREGELN ]",
        body: "Kostenloser Frühzugang wird ausschließlich unter den Bedingungen eines individuellen Endnutzer-Lizenzvertrags (EULA) gewährt, der bei der Installation elektronisch unterschrieben oder akzeptiert wird. Die Nutzung der TrustNode-Software zum illegalen Abfangen des Datenverkehrs Dritter oder für sonstige rechtswidrige Handlungen in russischen Telekommunikationsnetzen ist untersagt."
      },
      s5: {
        heading: "[ 5. ÄNDERUNG DER VEREINBARUNG ]",
        body: "Die Website-Administration behält sich das Recht vor, die Bedingungen dieser Vereinbarung einseitig ohne vorherige Ankündigung an die Nutzer zu ändern. Die aktuelle Version wird stets auf dieser Seite veröffentlicht."
      }
    }
  },
  pageNames: {
    home: "Startseite",
    "how-it-works": "Wie es funktioniert",
    tech: "Technologie",
    about: "Über Uns",
    download: "Herunterladen",
    comparison: "Vergleich",
    "not-found": "404"
  },
  realDev: {
    title: "Projekt-Verifizierung",
    subtitle: "Dokumentarischer Nachweis der aktiven Entwicklung, akademische Referenzen und Artefakte der Softwarearchitektur",
    badge: "ENTWICKLUNGSNACHWEIS // REFERENZEN",
    devUi: {
      awards: "Auszeichnungen & Wissenschaft",
      graph: "Entwicklungs-Map",
      core: "ONNX-Kernmotor",
      recipient: "EMPFÄNGER",
      inst: "INSTITUTION",
      event: "WISSENSCHAFTLICHES EVENT",
      nodes: "AKTIVE KNOTEN",
      conns: "GESAMTVERBINDUNGEN",
      specs: "KERNMODELL-SPEZIFIKATIONEN",
      baseArch: "Basis-Architektur:",
      params: "Gesamtparameter:",
      latency: "Inferenz-Latenz:",
      copied: "Kopiert!",
      copyName: "Name kopieren",
      dlOnnx: "ONNX herunterladen"
    },
    awardDetails: {
      title: "Diplom für wissenschaftliche Forschung",
      issuer: "Ministerium für Bildung und Wissenschaft der Region Tscheljabinsk",
      institution: "Radiotechnisches Kolleg Tscheljabinsk (ChRT)",
      recipient: "Pitolin Mikhail Evgenyevich",
      event: "Phase III des regionalen Wettbewerbs studentischer wissenschaftlicher Forschungsarbeiten unter professionellen Bildungseinrichtungen der Region Tscheljabinsk, 2026.",
      desc: "Offizielle Anerkennung der wissenschaftlichen Exzellenz der TrustNode-Abwehralgorithmen in der Kategorie Cybersicherheit. Die Forschung konzentriert sich auf die lokalisierte semantische Klassifizierung von Social-Engineering-Bedrohungen im RAM von Mobilgeräten.",
      badge: "REGIONALER PREIS"
    },
    graphDetails: {
      title: "Obsidian-Verbindungsnetz",
      subtitle: "Ein Schnappschuss des tatsächlichen Repositories und der Projekt-Wissensdatenbank",
      nodesCount: "74 aktive Knoten",
      edgesCount: "328 Verbindungen",
      desc: "Alle Entwicklungsstufen, vom Entwurf der Module HeuristicsLayer und BertPhantomClassifier bis zur Entwicklung der INT8-Quantisierungskonfiguration und Sicherheitstests, sind in einem einzigen semantischen Obsidian-Graphen dokumentiert, was ein umfassendes Architekturdesign belegt.",
      badge: "OBSIDIAN VAULT AKTIV"
    },
    onnxDetails: {
      title: "Produktions-Neuronales Netzwerk-Modell",
      filename: "rubert_fraud_int8.onnx",
      size: "28.4 MB",
      format: "ONNX-Runtime (INT8 quantisiert)",
      desc: "Eine echte binäre Gewichtsdatei des hochoptimierten rubert-tiny2-Sprachmodells, das in das ganzzahlige INT8-Format quantisiert wurde, ist im Projekt-Root integriert. Das Modell is für ultraschnelle CPU-Inferenz auf Mobilgeräten feingetunt und wird zu 100 % lokal im RAM ausgeführt.",
      badge: "LOKALE INFERENZ"
    }
  },
  origin: {
    title: "Projektgeschichte",
    subtitle: "Von den Abschlussarbeiten eines Cybersicherheitsstudenten bis hin zu Patenten und nationaler Anerkennung",
    badge: "GESCHICHTE UND TEAM",
    timeline: [
      {
        badge: "KOLLEG-FORSCHUNG",
        title: "Akademische Grundlagen",
        desc: "Entwickelt am Radiotechnischen Kolleg Tscheljabinsk in der Studiengruppe KB-284 (Fachrichtung 10.02.05 — Informationssicherheit automatisierter Systeme) unter der wissenschaftlichen Leitung von Natalia Anna Morozkova."
      },
      {
        badge: "REGIONALER SIEG",
        title: "Regionaler Forschungserfolg",
        desc: "Das umfassende semantische Framework von TrustNode belegte den 1. Platz beim regionalen wissenschaftlichen Forschungswettbewerb in der Sektion Informationstechnologie."
      },
      {
        badge: "SUPERFINALE MOSKAU",
        title: "Bundesweites Superfinale",
        desc: "Aufgrund des regionalen Triumphs finanziert das Kolleg die Reise des Autors nach Moskau zum angesehenen bundesweiten Forschungs-Superfinale im September 2026 vollständig."
      },
      {
        badge: "ARCHITEKT + KI-AGENTEN",
        title: "Entwicklungsparadigma der Zukunft",
        desc: "Erstellt von einem Solo-Entwickler nach der Methode 'Architekt + KI-Agenten'. Die Sicherheitsarchitektur und Patentalgorithmen stammen vom Autor, während die Codierung (Kotlin/C++) an KI-Agenten delegiert wurde."
      }
    ]
  },
  security: {
    title: "Kuppelsicherheit",
    subtitle: "Wie TrustNode seine eigenen Algorithmen und Ihre Daten vor Analyse und Hacking schützt",
    badge: "ANWENDUNGSSICHERHEITSMODELL",
    complianceLabel: "RECHTLICHE & SICHERHEITSKLASSIFIZIERUNG",
    complianceText: "TrustNode arbeitet ausschließlich als semantisch-heuristischer Textanalysator in einer lokalen Speicherumgebung. Da es keine externen Netzwerknutzdaten verschlüsselt oder entschlüsselt, ist keine gesetzlich vorgeschriebene FSB-Lizenzierung erforderlich.",
    features: [
      {
        title: "Sicherer VAULT-Speicher",
        desc: "AES-256-GCM-Verschlüsselung auf Militärniveau, unterstützt durch physische Android Keystore / StrongBox-Hardwarechips. Lokale Datensätze sind über SQLCipher & PBKDF2+HKDF geschützt."
      },
      {
        title: "AEGIS Aktiver RASP-Schutz",
        desc: "Proaktive Runtime Application Self-Protection (RASP). Überprüft ständig die Speicherintegrität und blockiert Debugger, Root-Tools, Emulatorumgebungen und Code-Injections."
      },
      {
        title: "Regelmäßige Self-Audit-Engine",
        desc: "Hintergrundintegritätsprüfung für Dateien und Komponenten via WorkManager. Berechnet CRC32-Prüfsummen nativer NDK-Binärdateien, um Manipulationen sofort zu erkennen."
      },
      {
        title: "On-Device-Sandbox & Gesetz 152-FZ",
        desc: "Strikte Einhaltung des russischen Bundesgesetzes 152-FZ. Alle Anruftranskriptionen, Nachrichten und Speicherprotokolle verbleiben ausschließlich im RAM des lokalen Geräts."
      }
    ]
  },
  kira: {
    title: "KIRA Sprachassistent",
    subtitle: "Ein intelligenter, sprachfähiger Begleiter, der vollständig in Ihrem lokalen RAM läuft",
    badge: "PROJEKTZEITPLAN: KIRA",
    features: [
      {
        title: "Lokaler Intent-Klassifikator",
        desc: "Ein hochgradig optimiertes, feingetuntes Add-On auf Basis des rubert-tiny2-Hauptmodells. Erkennt 15-20 spezifische Sicherheits-Intents bei nur 200 KB Speicherbedarf."
      },
      {
        title: "100% Offline-Ausführung",
        desc: "Keine teuren, langsamen externen LLM-API-Aufrufe. Vollständige Offline-Antwortvorlagen und Sprachverarbeitungsalgorithmen halten die Latenz im Mikrosekundenbereich."
      },
      {
        title: "Fortschrittliche Trainingsdaten",
        desc: "Trainiert mit hochspezialisierten synthetischen Dialogen von Betrugsszenarien, die in Google Colab mit Llama 3.1 und Qwen2.5 generiert wurden."
      }
    ]
  },
  explore: {
    title: "Entdecken Sie das Sicherheitsprotokoll",
    subtitle: "Erfahren Sie mehr über die lokalen KI-Technologien und die wissenschaftliche Basis von TrustNode",
    card1Title: "Kuppel-Technologie",
    card1Badge: "PHANTOM-SYSTEM",
    card1Desc: "Technische Details der 7-schichtigen PHANTOM 2.0 Sicherheitskuppel und der intelligente Sprachassistent KIRA, der vollständig auf dem Gerät läuft.",
    card1Btn: "Technologie erkunden →",
    card2Title: "Bewährte Validierung",
    card2Badge: "PATENTE & AUSZEICHNUNGEN",
    card2Desc: "Offizielle Patente, erster Platz in der regionalen IT-Forschung und unsere Entwicklungsgeschichte.",
    card2Btn: "Über Uns & Team →",
    card3Title: "App herunterladen",
    card3Badge: "INSTALLATION // ANDROID",
    card3Desc: "Laden Sie TrustNode TN1 kostenlos herunter — die fertige App für lokalen Schutz vor Betrug und Spam. Erhältlich bei RuStore.",
    card3Btn: "App herunterladen →",
    card4Title: "Ehrlicher Vergleich",
    card4Badge: "FAKTEN & KONKURRENZ",
    card4Desc: "Ein objektiver Vergleich der Funktionalität von TrustNode mit den auf dem Markt befindlichen Alternativen anhand von Schlüsselparametern.",
    card4Btn: "Vergleichstabelle öffnen →"
  },
  assembly: {
    leftPrimary: "OFFLINE-FIRST",
    leftSub: "// DATEN VERLASSEN DAS GERÄT NIE",
    rightPrimary: "ZERO TELEMETRY",
    rightSub: "// KEINE TELEMETRIE"
  },
  earlyAccessPage: {
    title: "TrustNode herunterladen",
    subtitle: "Holen Sie sich die TrustNode TN1 App kostenlos — lokaler Schutz vor Telefonbetrug und Spam direkt auf Ihrem Gerät.",
    badge: "KOSTENLOSER DOWNLOAD",
    back: "Zurück zur Startseite",
    rustoreBtn: "Bei RuStore herunterladen",
    githubBtn: "APK von GitHub herunterladen",
    feature1Title: "100% lokaler Schutz",
    feature1Desc: "Alle Anruf- und Nachrichtenprüfungen laufen direkt auf Ihrem Gerät — Ihre Daten verlassen nie Ihr Smartphone.",
    feature2Title: "KI gegen Betrüger",
    feature2Desc: "Das auf rubert-tiny2 basierende neuronale Modell erkennt Social-Engineering-Szenarien in Echtzeit.",
    feature3Title: "Kostenlos und sicher",
    feature3Desc: "Die App ist kostenlos bei RuStore erhältlich. Installieren Sie sie und schützen Sie Ihre Liebsten.",
    note: "Verfügbar für Android-Geräte. Internet wird nur für den ersten Download benötigt.",
  },

  comparisonPage: {
    title: "Ehrlicher Vergleich",
    subtitle: "Eine objektive vergleichende Analyse von TrustNode gegenüber führenden globalen Sicherheitslösungen",
    badge: "VERGLEICH // FAKTEN",
    thFeature: "Merkmal",
    thTrustNode: "TrustNode (TN1)",
    thKaspersky: "Kaspersky",
    thNorton: "Norton",
    thBitdefender: "Bitdefender",
    thGoogleSpam: "Google Protection",
    features: {
      textAnalysis: "Textanalyse (BERT, Regeln, Risiko-Scoring, URL, Homoglyphen)",
      voiceAnalysis: "Echtzeit-Sprachanalyse von Anrufen",
      visualAnalysis: "Visuelle Analyse (gefälschte Oberflächen, Wallets, Phishing)",
      socialEngDetect: "Social-Engineering-Erkennung (neuronales Netz + KI-Agenten)",
      behavioralRasp: "Verhaltensanalyse und RASP-Überwachung",
      familyDefense: "Familienverteidigung Parent-Child (Guardian-System)",
      beaconSystem: "Beacon-System (VK-Kontaktbenachrichtigung bei Betrug)",
      offlineOnDevice: "100% offline (Ausführung auf dem Gerät)",
      pricing: "Monetarisierungsmodell"
    },
    status: {
      yes: "✅ Ja",
      no: "❌ Nein",
      inDev: "🛠 In Entwicklung"
    },
    pricingValues: {
      trustNode: "Kostenlos",
      kaspersky: "Abo ab ~1990₽/Jahr",
      norton: "Abo ab ~$39.99/Jahr",
      bitdefender: "Abo ab ~$29.99/Jahr",
      googleSpam: "Kostenlos"
    },
    disclaimer: "Wir streben nach maximaler Objektivität. Falls Sie eine Ungenauigkeit bemerken, kontaktieren Sie uns bitte über Telegram.",
    telegramBtn: "Kontakt über Telegram"
  },

  roadmapPage: {
    title: "Entwicklungs-Roadmap",
    subtitle: "Aktueller Fortschritt von TrustNode, Richtlinie zur verantwortungsvollen Offenlegung und Zeitplan für die Bereitstellung des semantischen Kerns",
    badge: "STATUS & PLAN",
    readyMvp: "FERTIGES MVP",
    underDevelopment: "IN ENTWICKLUNG",
    conceptualSpec: "KONZEPT-SPEZIFIKATION",
    tn1Desc: "Voll funktionsfähiges und getestetes Android-Paket für lokalen Signaturschutz. Benötigt nur Modellschwellenkalibrierung und Gewichts-Feintuning.",
    packageLabel: "PAKET:",
    coreEngineLabel: "KERNMOTOR:",
    statusLabel: "STATUS:",
    fullyReady: "VOLLSTÄNDIG FERTIG (MVP)",
    sourceGithub: "Quellcode auf GitHub",
    tn3Desc: "Patentierte PHANTOM-2.0-Architektur mit 7 Schichten, unabhängigem KI-Konsens-Routing und Beacon-Benachrichtigungsnetzwerken.",
    deadlineLabel: "FRIST:",
    september2026: "SEPTEMBER 2026",
    phaseLabel: "PHASE:",
    architecturePhase: "Architekturphase",
    kiraDesc: "Sprachintent-Analysator, um manipulative Sprechakte während Live-Anrufen zu erfassen und zu neutralisieren.",
    designPhase: "Entwurfsphase",
    coreComponentLabel: "KERNKOMPONENTE:",
    integrationLabel: "INTEGRATION:",
    ramAddon: "Lokales RAM-Add-on",
    disclosureTitle: "Richtlinie zur verantwortungsvollen Offenlegung",
    disclosureDesc: "Wenn Sie eine potenzielle Schwachstelle in TrustNode entdecken, melden Sie diese bitte direkt unserem Team. Wir veröffentlichen keine Details zu Schwachstellen, bis sie behoben sind, und schätzen die verantwortungsvolle Offenlegung durch Sicherheitsforscher.",
    reportTelegram: "Per Telegram melden",
    reportVk: "Per VK melden",
    reportGithub: "Per GitHub melden",
    milestonesTitle: "Entwicklungs- und Release-Meilensteine",
    milestones: [
      { date: "2024–2025", title: "Akademische Ursprünge und regionaler NIR-Sieg", desc: "Projekt am Tscheljabinsker Radiotechnischen Kolleg (KB-284) entstanden und beim regionalen wissenschaftlichen Forschungswettbewerb auf Platz 1." },
      { date: "v1.2.0", title: "TrustNode 1 (TN1) — Ready MVP", desc: "Voll funktionsfähiges Android-Paket für lokalen Signaturschutz. Kalibrierphase für Schwellenabstimmung und Gewichts-Feintuning." },
      { date: "2025", title: "ONNX-Kernintegration", desc: "Bereitstellung des Modells rubert_fraud_int8.onnx für lokale semantische Inferenz auf dem Gerät ohne Cloud-Abhängigkeit." },
      { date: "SEPTEMBER 2026", title: "PHANTOM 2.0 — Architekturphase", desc: "Patentierte TN3-Architektur mit 7 Schichten und unabhängigem KI-Konsens-Routing. Frist: September 2026." },
      { date: "SEPTEMBER 2026", title: "Bundes-Superfinale (Moskau)", desc: "Präsentation des Projekts beim renommierten föderalen Superfinale der wissenschaftlichen Forschung." },
      { date: "v3.0-design", title: "Kira Voice Assistant — Konzeptspezifikation", desc: "Sprachintent-Analysator, um manipulative Sprechakte während Live-Anrufen zu neutralisieren. Entwurfsphase." }
    ],
    allProjectsGithub: "Alle TrustNode-Projekte auf GitHub"
  }
};

const ja: Translations = {
  nav: {
    threats: "脅威",
    howItWorks: "仕組み",
    security: "セキュリティ",
    earlyAccess: "早期アクセス"
  },
  brand: {
    tagline: "オンデバイス・シールド",
    footerTagline: "デバイスを丸ごと守る"
  },
  hero: {
    badge: "保護プロトコル // 稼働中",
    titleSub: "[ あなたのスマートフォンのためのローカル・セキュリティ・ドーム ]",
    scrollStart: "スクロールして開始",
    scrollContinue: "さらにスクロールして開始",
    enterDome: "ドームに入る"
  },
  mobileCards: [
    {
      badge: "[ これは何？ ]",
      title: "ローカル・セキュリティ・ドーム",
      desc: "TrustNodeは、あなたのスマートフォンのための個人用サイバーセキュリティ・ドームです。見えない脅威からリアルタイムでデバイスを守ります。"
    },
    {
      badge: "[ なぜ必要？ ]",
      title: "次世代の防御",
      desc: "従来のモバイル向けウイルス対策ソフトは、巧妙なフィッシングやインジェクション攻撃には無力です。TrustNodeは悪意ある活動をリアルタイムで遮断します。"
    },
    {
      badge: "[ なぜ機能する？ ]",
      title: "オンデバイス・セキュリティ",
      desc: "すべてのアルゴリズムはあなたの端末上で完全にローカルに動作します。個人ファイル、会話、通信ログが外部に送信されることは一切ありません。"
    },
    {
      badge: "[ 誰のため？ ]",
      title: "絶対的なプライバシー",
      desc: "取引の完全なプライバシー、資産の安全、機密保持を重視する暗号資産愛好家、起業家、すべての人のために設計されています。"
    }
  ],
  mobileTabLabels: [
    "何",
    "なぜ",
    "仕組み",
    "対象者"
  ],
  replayIntro: "イントロをもう一度見る（上へ戻る）",
  problem: {
    badge: "現在の課題",
    titleLine1: "既存のソリューションが",
    titleHighlight: "通用しなくなった理由",
    subtitle: "サイバー犯罪業界の進化は、集中管理された署名データベースの更新速度をはるかに上回っています。",
    items: [
      {
        title: "ソーシャルエンジニアリングの蔓延",
        desc: "詐欺師は電話やメッセージアプリを通じ、巧妙な心理的圧力の手口で数十億もの資金を盗み取っています。"
      },
      {
        title: "損なわれるプライバシー",
        desc: "既存の保護ソリューションは、分析のために通話やメッセージのログをクラウドサーバーへ送信しています。"
      },
      {
        title: "ネットワークがなければ無力",
        desc: "従来の詐欺対策システムは、モバイル通信が途切れた瞬間に機能を停止し、保護できなくなります。"
      }
    ]
  },
  how: {
    badge: "セキュリティ・アーキテクチャ",
    title: "PHANTOM",
    titleHighlight: "防御システム",
    subtitle: "スマートフォン上でローカルに動作する多層構造のドームです。個人データは1バイトたりともデバイスの外に出ません。",
    layersHeading: "デバイス保護のレイヤー",
    layers: [
      {
        name: "高速ヒューリスティック検知",
        tech: "正規表現＆シグネチャマップ",
        desc: "受信データストリームに対する最初の即時フィルター。バッテリーを消費することなく、既知のスパムネットワークのパターン、不審なリンク、既知の詐欺スクリプトの特徴を遮断します。"
      },
      {
        name: "ML分類（rubert-tiny2）",
        tech: "ONNX Runtime / 28.4 MBのローカルモデル",
        desc: "圧縮されたニューラルネットワークが、通話やメッセージ本文の意味をリアルタイムで解析します。隠された誘導手口、ロールプレイ的シナリオ（「安全な口座」「トラブルに遭った親族」など）、心理的圧力を検出します。"
      },
      {
        name: "行動分析",
        tech: "文脈認識ステートマシン",
        desc: "入力速度、通話中に銀行アプリへ切り替える頻度、異常な遅延、注意を引きつけるパターンなど、やり取りの動態を追跡します。"
      },
      {
        name: "PHANTOMコンセンサス",
        tech: "合意形成投票エンジン",
        desc: "3つの層の出力に基づいて最終的な重み付き判断を下します。攻撃の疑いがある場合、画面をロックし、ユーザーに警告し、信頼できる連絡先に即座にプッシュ通知を送ります。"
      }
    ],
    usp: [
      {
        title: "ローカルAI（オンデバイス）",
        desc: "rubert-tiny2ニューラルネットワークはモバイル向けに量子化・最適化されています。わずか28.4 MBで全ての重みをスマートフォンのメモリ上に保持でき、マイクロ秒単位で推論が可能です。"
      },
      {
        title: "完全なオフライン動作",
        desc: "地下鉄でも、飛行機の中でも、山奥でも――保護レイヤーはインターネットやモバイル通信がなくても、外部APIに依存することなく動作し続けます。"
      },
      {
        title: "妥協のないプライバシー",
        desc: "テキストの記録、連絡先リスト、ログがクラウドに送信されることは一切ありません。すべての演算はアプリ内の隔離されたサンドボックス内で完結します。"
      }
    ],
    sevenLayers: [
      {
        name: "高速ヒューリスティック (HeuristicsLayer — ヒューリスティック層)",
        tech: "Regex & Signature Maps",
        desc: "受信データストリームに対する即時・軽量フィルター。バッテリーを消費せず、既知のスパムネットワーク、フィッシングリンク、悪意ある自動化パターンを遮断します。"
      },
      {
        name: "ニューラル分類 (BertPhantomClassifier — BertPhantom分類器)",
        tech: "ONNX Runtime / 28.4 MB Local Model",
        desc: "リアルタイムで通話音声やテキストを解析する圧縮版 rubert-tiny2 ニューラルネットワーク。隠された誘導手口や、「安全な口座」といった役割を検出します。"
      },
      {
        name: "ソーシャルエンジニアリング (Social Eng. Layer — ソーシャルエンジニアリング層)",
        tech: "DeGenome (18プリミティブ)",
        desc: "18のプリミティブからなる DeGenome 分類法を用いて操作手口を特定し、人工的な緊急性、強迫言動、恐怖トリガー、孤立要請を暴きます。"
      },
      {
        name: "行動監査 (Behavioral Layer — 行動層)",
        tech: "Context-Aware State Machine",
        desc: "リアルタイムのユーザー操作（タイピングリズム、認知処理の遅延、通話中の金融アプリと通話アプリ間の切り替え頻度）を継続的に追跡します。"
      },
      {
        name: "評判検証 (Reputation Layer — 評判層)",
        tech: "PCD Identity Profiles",
        desc: "発信者の特徴を企業アイデンティティプロファイル（PCD）と照合し、話し方のパターンや発信者の行動が公式プロトコルと一致しないケースを特定します。"
      },
      {
        name: "合意形成 (Consensus Agent — 合意エージェント)",
        tech: "Consensus Voting Engine",
        desc: "すべての階層からのリスクマーカーを集計する JudgeAgent 合意形成エンジン。脅威しきい値を特定すると、実行をロックし、ユーザーに警告し、信頼できる連絡先をトリガーします。"
      },
      {
        name: "免疫記憶 (Immune Memory — 免疫記憶)",
        tech: "Adaptive Incident Shield",
        desc: "ローカライズされた安全な攻撃リポジトリ。最近緩和された脅威に基づいて、デバイス上のゼロリークのセキュリティフィルターの微調整を可能にし、今後の攻撃バリエーションに対処します。"
      }
    ],
    btnSimplified: "簡易構造表示",
    btnAdvanced: "特許 PHANTOM 2.0（7レイヤー）",
    pipelineHeader: "公式特許取得済み PHANTOM 2.0 パイプライン"
  },
  trust: {
    badge: "科学的検証と評価",
    title: "実証された",
    titleHighlight: "有効性",
    subtitle: "TrustNodeの技術基盤は厳密な数学的研究に基づいており、専門家の科学コミュニティから評価を得ています。",
    stats: [
      {
        val: "IPC G06F 21/55",
        label: "特許出願",
        desc: "ローカルデータストリーム解析のための独自アルゴリズムに関する、正式に登録された発明出願。"
      },
      {
        val: "第1位",
        label: "地域研究コンテスト",
        desc: "実用的なサイバーセキュリティシステム部門で、情報技術分野の最高賞を受賞。"
      },
      {
        val: "モスクワ // 2026",
        label: "全国決勝",
        desc: "モスクワで開催されるロシア全国IT研究スーパーファイナル（2026年9月）への公式招待。"
      },
      {
        val: "約82.4%",
        label: "精度（Accuracy）",
        desc: "代表的なブラインドテストにおける、標的型ソーシャルエンジニアリング攻撃の検出精度。"
      }
    ]
  },

  header: {
    rustore: "RuStore からダウンロード",
    radar: "Product Radar",
    ecoOn: "エコモード有効",
    ecoOff: "エコモード無効",
    seniorOn: "シニアモード有効",
    seniorOff: "シニアモード（大きな文字）",
    lang: "言語を変更",
  },
  footer: {
    copyright: "© {year} TrustNode Protocol. All rights reserved.",
    privacyLink: "プライバシーポリシー（ロシア連邦法152-FZ）",
    termsLink: "利用規約",
    version: "オンデバイスML不正検知シールド // v1.2.0 // 152-FZ準拠",
      githubOrg: "GitHub 上のすべての TrustNode プロジェクト",
},
  cookie: {
    badgeLabel: "[ 情報セキュリティ // ロシア法152-FZ ]",
    text: "私たちはあなたのプライバシーを大切にしています。当サイトでは、グラフィック設定やエコモードの設定を記憶するために、匿名化されたCookieとローカルストレージを使用しています。詳しくは",
    privacyLinkText: "プライバシーポリシー",
    suffix: "をご確認ください。",
    audit: "法的詳細",
    accept: "同意する",
    reject: "拒否する"
  },
  legal: {
    privacyTitle: "プライバシーポリシー",
    termsTitle: "利用規約",
    tabPrivacy: "個人データ取扱方針（ロシア法152-FZ）",
    tabTerms: "利用規約",
    closeAria: "閉じる",
    acknowledge: "確認しました",
    privacy: {
      s1: {
        heading: "[ 総則 ]",
        body: "本プライバシーポリシーは、2006年7月27日付ロシア連邦法第152-FZ号「個人データについて」の要件に基づき作成されています。本ポリシーは、TrustNode Protocolプロジェクトチーム（以下「運営者」）によるユーザー個人データの取扱方法およびそのセキュリティ対策を定めるものです。 運営者として活動する法人または個人事業主の名称および登記情報：[TODO：要確認]。"
      },
      s2: {
        heading: "[ ドームの原則：プライバシーを100%保護 ]",
        noticeLabel: "重要なお知らせ：",
        noticeBody: "TrustNodeのウェブサイトは、あなたの個人データ、メールアドレス、パスワード、機密ファイルを直接収集・処理・保存・送信することは一切ありません。PHANTOMアプリの保護機構はすべて、お使いのスマートフォンのプロセッサ上でローカル（オンデバイス）でのみ動作します。"
      },
      s3: {
        heading: "[ サイトが処理するデータ ]",
        intro: "本情報サイトへのアクセスに伴い、以下のような匿名化された技術データのみが自動的に処理される場合があります。",
        items: [
          "Cookie（パフォーマンスおよびエコモード設定のキャッシュに必要）",
          "氏名や特定の個人と結びつかない匿名の技術ヘッダーおよびIPアドレス",
          "インターフェース設定（選択したグラフィックモード）"
        ]
      },
      s4: {
        heading: "[ アプリのダウンロード ]",
        body: "TrustNodeアプリのダウンロードは、公式プラットフォームであるRuStoreストアとGitHubを通じて行われます。TrustNodeのウェブサイトはユーザーの個人データを収集・処理しません。アプリが分析するすべてのデータは、ユーザーのデバイス上でのみローカル処理されます。"
      },
      s5: {
        heading: "[ データのローカライゼーションと保管の安全性 ]",
        body: "ロシアの法律に基づき、メッセージアプリでの個別のやり取りの中でロシア国民の個人データが記録された場合、運営者はロシア連邦領域内に設置されたデータベースのみを使用して、これを保管・整理・処理することを約束します。"
      },
      s6: {
        heading: "[ お問い合わせ先 ]",
        bodyPrefix: "技術情報の取扱いや第152-FZ号法への準拠に関するご質問は、プロジェクトの公式Telegramチャンネルを通じて開発者に直接お問い合わせください：",
        bodySuffix: "。"
      },
      s7: {
        heading: "[ 外部配信プラットフォーム ]",
        bodyPrefix: "RuStoreストアまたはGitHubからのアプリのダウンロードとインストールは、それぞれのプラットフォームの規則に従います。外部プラットフォームを利用する場合、TrustNodeは個人データの運営者ではありません：",
        bodySuffix: " 公開前に、これらのリンクの正確性と適用可能性をサイト運営者が確認する必要があります。"
      }
    },
    terms: {
      s1: {
        heading: "[ 1. サイトのステータスおよび免責事項 ]",
        body: "本ウェブサイトは、TrustNodeプロジェクト（以下「TrustNodeソフトウェア」）の公式プロモーションサイトです。本サイトは純粋に情報提供を目的としたものであり、ロシア民法第437条第2項に定める公開の申し込みには該当しません。早期アクセスライセンスの提供条件はすべて個別に協議されます。"
      },
      s2: {
        heading: "[ 2. 暗号化（暗号技術）手段の非搭載 ]",
        noticeLabel: "重要な法的注記：",
        noticeBody: "TrustNodeソフトウェアは、ローカルトラフィックおよびテキストパターンを解析する意味論的ヒューリスティック分析ツールです。暗号化技術は一切含まれておらず、システムプロトコルのソースコードを変更することもないため、ロシア政府令第313号に基づくFSB（連邦保安庁）の強制ライセンスの対象とはなりません。"
      },
      s3: {
        heading: "[ 3. 知的財産権 ]",
        body: "本サイトのすべてのグラフィック素材、商標、3Dモデル、ソースコード、およびPHANTOMシステムのアルゴリズムは、TrustNode Protocol開発チームの知的財産であり、ロシア民法第IV部により保護されています。無断での複製、逆コンパイル、または配布は、ロシア刑法第146条に基づき処罰の対象となります。"
      },
      s4: {
        heading: "[ 4. ライセンス利用規則 ]",
        body: "無料の早期アクセスは、ソフトウェアのインストール時に電子的に署名または同意される個別のエンドユーザーライセンス契約（EULA）に基づいてのみ提供されます。TrustNodeソフトウェアを第三者の通信を不正に傍受する目的、またはロシアの電気通信ネットワークにおけるその他の違法行為に使用することは禁止されています。"
      },
      s5: {
        heading: "[ 5. 規約の変更 ]",
        body: "サイト運営者は、ユーザーへの事前通知なく、本規約の内容を一方的に変更する権利を留保します。最新版は常にこのページに掲載されます。"
      }
    }
  },
  pageNames: {
    home: "ホーム",
    "how-it-works": "仕組み",
    tech: "テクノロジー",
    about: "私たちについて",
    download: "ダウンロード",
    comparison: "比較",
    "not-found": "404"
  },
  realDev: {
    title: "プロジェクト検証",
    subtitle: "アクティブな開発、学術的資格、およびソフトウェアアーキテクチャアーティファクトの文書証明",
    badge: "開発実績 // 資格情報",
    devUi: {
      awards: "受賞と科学",
      graph: "開発マップ",
      core: "ONNXコアエンジン",
      recipient: "受賞者・研究者",
      inst: "所属機関",
      event: "科学コンテスト",
      nodes: "アクティブノード",
      conns: "総接続数",
      specs: "コアモデル仕様",
      baseArch: "基本アーキテクチャ:",
      params: "総パラメータ数:",
      latency: "推論レイテンシ:",
      copied: "コピー完了!",
      copyName: "ファイル名をコピー",
      dlOnnx: "ONNXをダウンロード"
    },
    awardDetails: {
      title: "科学研究ディプロマ",
      issuer: "チェリャビンスク州教育科学省",
      institution: "チェリャビンスク無線技術専門学校 (ChRT)",
      recipient: "ピトリン・ミハイル・エフゲニエヴィチ",
      event: "チェリャビンスク州の職業教育機関の学生を対象とした、学生科学研究論文地域コンテストの第3ステージ、2026年。",
      desc: "サイバーセキュリティ部門における TrustNode の防御アルゴリズムの学術的卓越性に対する公式な認定。モバイルデバイスの RAM 内におけるソーシャルエンジニアリング脅威のローカルな意味論的分類に焦点を当てた研究です。",
      badge: "地方最優秀賞"
    },
    graphDetails: {
      title: "Obsidian 関連マップ",
      subtitle: "実際の開発リポジトリとプロジェクトナレッジベースのスナップショット",
      nodesCount: "74 個のアクティブノード",
      edgesCount: "328 個の接続",
      desc: "HeuristicsLayer や BertPhantomClassifier の設計から、INT8 量化設定およびセキュリティテストの開発に至るまで、開発の全段階が単一の Obsidian 意味論的グラフ内に記録されており、網羅的なアーキテクチャ設計を証明しています。",
      badge: "OBSIDIAN ボールト有効"
    },
    onnxDetails: {
      title: "プロダクション仕様ニューラルネットワークモデル",
      filename: "rubert_fraud_int8.onnx",
      size: "28.4 MB",
      format: "ONNX Runtime (INT8 量子化済)",
      desc: "INT8 整数形式に量子化された、高度に最適化された rubert-tiny2 言語モデルの実バイナリウェイトファイルがプロジェクトルートに統合されています。このモデルはモバイルデバイスの CPU 上での超高速推論のために微調整されており、RAM 上で100%ローカルに実行されます。",
      badge: "ローカル推論"
    }
  },
  origin: {
    title: "プロジェクトの歩み",
    subtitle: "一人のサイバーセキュリティ学生の卒業研究から始まり、特許取得や全国的な認定に至るまでの軌跡",
    badge: "歩みと开发体制",
    timeline: [
      {
        badge: "技術専門学校研究 // KB-284",
        title: "学術的基礎と専門分野",
        desc: "チェリャビンスク無線工学技術専門学校にて、KB-284研究グループ（専門分野 10.02.05 — 「自動化システム情報セキュリティ」）の一環として、指導教官ナタリア・アナトリエヴナ・モロズコワの指導のもとで開発がスタートしました。"
      },
      {
        badge: "学術研究 // 第1位",
        title: "地域研究コンテストでの優勝",
        desc: "TrustNodeの高度なセマンティック解析フレームワークと革新的なアルゴリズムは、地域の学術研究コンペティションの「情報技術」セクションで第1位を獲得しました。"
      },
      {
        badge: "モスクワ // 2026年9月",
        title: "全国スーパーファイナル進出",
        desc: "地方コンテストでの輝かしい優勝を受け、専門学校の全額援助により、2026年9月にモスクワで開催される権威ある全国研究コンテスト・スーパーファイナルへの出場を果たしました。"
      },
      {
        badge: "アーキテクト ＋ AI エージェント",
        title: "新マイルストーン：未来の開発体制",
        desc: "本プロジェクトは、ソロ開発者が「アーキテクト＋AIエージェント」体制で設計。セキュリティ構造と特許アルゴリズムは著者が構築し、コードの実装（Kotlin/C++）をAIエージェントに委託しました。"
      }
    ]
  },
  security: {
    title: "ドームの安全対策",
    subtitle: "TrustNodeが独自のアルゴリズムとユーザーデータを解析やハッキングから保護する方法",
    badge: "アプリケーション加固モデル",
    complianceLabel: "法的およびセキュリティ準拠の分類",
    complianceText: "TrustNodeは、ローカルメモリ環境内の意味論的ヒューリスティックテキスト分析ツールとしてのみ動作します。外部ネットワークペイロードを暗号化または復号することはないため、ロシア連邦保安庁（FSB）による強制ライセンスの対象外となります。",
    features: [
      {
        title: "暗号化ストレージ VAULT",
        desc: "Android Keystore / StrongBox 物理ハードウェアチップを基盤とする軍用レベルの AES-256-GCM 暗号化。ローカルデータベースは SQLCipher と PBKDF2+HKDF で保護されています。"
      },
      {
        title: "アクティブ保護 AEGIS RASP",
        desc: "実行時アプリケーション自己保護（RASP）。メモリの完全性を継続的に監視し、デバッガ（Anti-Debug）、ルート権限、エミュレータ、コードインジェクションを検出・遮断します。"
      },
      {
        title: "自己監査エンジン Self-Audit",
        desc: "WorkManager を使用したバックグラウンドでの実行ファイル完全性監査。ネイティブ NDK バイナリの CRC32 チェックサムを算出し、改ざんをリアルタイムに検知します。"
      },
      {
        title: "オンデバイス・サンドボックスと個人情報保護法",
        desc: "個人データ保护法に完全準拠。音声、記録、テキストのログはデバイスの RAM 上でのみ処理され、サーバーに送信されることはありません。"
      }
    ]
  },
  kira: {
    title: "音声アシスタント KIRA",
    subtitle: "スマートフォンの RAM 上で完全に動作する、インテリジェントな音声認識回路",
    badge: "プロジェクト計画：KIRA",
    features: [
      {
        title: "ローカル意図分類器",
        desc: "ベースとなる rubert-tiny2 上に構築された追加の調整レイヤー。わずか約200 KBのウェイト追加で、15〜20個のセキュリティに特化した意図を識別します。"
      },
      {
        title: "100% オフライン動作",
        desc: "クラウド上の大規模言語モデル（LLM）への問い合わせは一切不要。すべての意味構造と応答テンプレートはアプリ内にパッケージ化され、ネットワークなしで超低遅延で機能します。"
      },
      {
        title: "高度な合成データセット",
        desc: "Google Colab上にて Llama 3.1 や Qwen2.5 などの先端モデルを用いて生成された、ソーシャルエンジニアリング詐欺に特化した合成対話データセットで訓練されています。"
      }
    ]
  },
  explore: {
    title: "セキュリティプロトコルを探る",
    subtitle: "TrustNodeのローカルAI技術と科学的基盤について詳細を見る",
    card1Title: "ドームテクノロジー",
    card1Badge: "PHANTOMシステム",
    card1Desc: "7層のPHANTOM 2.0セキュリティドームの技術仕様と、完全にオンデバイスで動作するKIRAインテリジェント音声アシスタントの解説。",
    card1Btn: "技術仕様を見る →",
    card2Title: "確かな実績と検証",
    card2Badge: "特許と受賞歴",
    card2Desc: "公式特許出願、地域IT研究コンテスト最優秀賞、モスクワ全国決勝大会への進出実績と歩み。",
    card2Btn: "チームと概要 →",
    card3Title: "アプリをダウンロード",
    card3Badge: "インストール // Android",
    card3Desc: "TrustNode TN1 を無料でダウンロード — 詐欺やスパムから守る完成済みオンデバイスアプリ。RuStore で入手可能。",
    card3Btn: "アプリをダウンロード →",
    card4Title: "誠実な比較",
    card4Badge: "客観的データ・競合比較",
    card4Desc: "業界の競合製品（Kaspersky、Nortonなど）とTrustNodeの主要機能を客観的に比較。",
    card4Btn: "比較表を表示する →"
  },
  assembly: {
    leftPrimary: "OFFLINE-FIRST",
    leftSub: "// データは端末から一切送信されません",
    rightPrimary: "ZERO TELEMETRY",
    rightSub: "// テレメトリの収集は一切ありません"
  },
  earlyAccessPage: {
    title: "TrustNode をダウンロード",
    subtitle: "TrustNode TN1 アプリを無料で入手 — 電話詐欺やスパムからデバイス上で直接保護します。",
    badge: "無料ダウンロード",
    back: "ホームに戻る",
    rustoreBtn: "RuStore からダウンロード",
    githubBtn: "GitHub から APK をダウンロード",
    feature1Title: "100% オンデバイス保護",
    feature1Desc: "通話とメッセージのすべてのチェックはデバイス上で実行され、データがスマートフォンの外に出ることはありません。",
    feature2Title: "詐欺師に対抗するAI",
    feature2Desc: "rubert-tiny2 ベースのニューラルモデルがソーシャルエンジニアリング手法をリアルタイムで検知します。",
    feature3Title: "無料で安全",
    feature3Desc: "アプリは RuStore で無料提供されています。インストールして、大切な人を詐欺師から守りましょう。",
    note: "Android デバイスに対応。インターネットは初回ダウンロード時のみ必要です。",
  },

  comparisonPage: {
    title: "誠実な比較",
    subtitle: "TrustNode と主要なグローバルセキュリティソリューションの客観的な比較分析",
    badge: "比較 // 事実",
    thFeature: "機能",
    thTrustNode: "TrustNode (TN1)",
    thKaspersky: "Kaspersky",
    thNorton: "Norton",
    thBitdefender: "Bitdefender",
    thGoogleSpam: "Google Protection",
    features: {
      textAnalysis: "テキスト分析（BERT、ルール、リスクスコアリング、URL、ホモグリフ）",
      voiceAnalysis: "リアルタイム通話音声分析",
      visualAnalysis: "ビジュアル分析（偽造UI、ウォレット、フィッシング）",
      socialEngDetect: "ソーシャルエンジニアリング検出（ニューラルネット + AIエージェント）",
      behavioralRasp: "行動分析とRASP監視",
      familyDefense: "親子ファミリー防御（Guardianシステム）",
      beaconSystem: "ビーコンシステム（不正時VKコンタクトへの通知）",
      offlineOnDevice: "100%オフライン（端末内実行）",
      pricing: "収益化モデル"
    },
    status: {
      yes: "✅ あり",
      no: "❌ なし",
      inDev: "🛠 開発中"
    },
    pricingValues: {
      trustNode: "無料",
      kaspersky: "年間サブスク ~1990₽",
      norton: "年間サブスク ~$39.99",
      bitdefender: "年間サブスク ~$29.99",
      googleSpam: "無料"
    },
    disclaimer: "最大限の客観性を追求しています。誤りに気づいた場合は、Telegram にてご連絡ください。",
    telegramBtn: "Telegram で連絡する"
  },

  roadmapPage: {
    title: "開発ロードマップ",
    subtitle: "TrustNode の現在の進捗状況、責任ある開示ポリシー、セマンティックコア展開のタイムライン",
    badge: "ステータスと計画",
    readyMvp: "準備完了 MVP",
    underDevelopment: "開発中",
    conceptualSpec: "コンセプト仕様",
    tn1Desc: "ローカル署名保護のための完全稼働・テスト済みの Android パッケージ。モデルの閾値調整と重みのファインチューニングのみが必要です。",
    packageLabel: "パッケージ:",
    coreEngineLabel: "コアエンジン:",
    statusLabel: "ステータス:",
    fullyReady: "完全準備完了 (MVP)",
    sourceGithub: "GitHub のソースコード",
    tn3Desc: "独立した AI コンセンサスルーティングと Beacon 通知ネットワークを備えた 7 層特許 PHANTOM 2.0 アーキテクチャ。",
    deadlineLabel: "期限:",
    september2026: "2026年9月",
    phaseLabel: "フェーズ:",
    architecturePhase: "アーキテクチャフェーズ",
    kiraDesc: "ライブ通話中の操作的な発話を捕捉・中和する音声意図分析器。",
    designPhase: "デザインフェーズ",
    coreComponentLabel: "主要コンポーネント:",
    integrationLabel: "統合:",
    ramAddon: "ローカル RAM アドオン",
    disclosureTitle: "責任ある開示ポリシー",
    disclosureDesc: "TrustNode に潜在的な脆弱性を発見した場合は、直接チームにご報告ください。脆弱性が解決されるまで詳細は公開せず、セキュリティ研究者による責任ある開示に感謝しています。",
    reportTelegram: "Telegram で報告",
    reportVk: "VK で報告",
    reportGithub: "GitHub で報告",
    milestonesTitle: "開発・リリースのマイルストーン",
    milestones: [
      { date: "2024–2025", title: "学術的な起源と地域研究コンテストでの勝利", desc: "チェリャビンスク無線技術専門学校 (KB-284) で生まれたプロジェクトが、地域科学研究コンテストで 1 位を獲得しました。" },
      { date: "v1.2.0", title: "TrustNode 1 (TN1) — 準備完了 MVP", desc: "ローカル署名保護のための完全稼働の Android パッケージ。閾値調整と重みのファインチューニングのためのキャリブレーションフェーズ。" },
      { date: "2025", title: "ONNX コア統合", desc: "クラウド依存なしで端末上でローカルにセマンティック推論を行う rubert_fraud_int8.onnx モデルの展開。" },
      { date: "2026年9月", title: "PHANTOM 2.0 — アーキテクチャフェーズ", desc: "独立した AI コンセンサスルーティングを備えた 7 層特許 TN3 アーキテクチャ。期限: 2026 年 9 月。" },
      { date: "2026年9月", title: "連邦スーパーファイナル（モスクワ）", desc: "権威ある連邦科学研究スーパーファイナルでのプロジェクト発表。" },
      { date: "v3.0-design", title: "Kira ボイスアシスタント — コンセプト仕様", desc: "ライブ通話中の操作的な発話を中和する音声意図分析器。デザインフェーズ。" }
    ],
    allProjectsGithub: "GitHub のすべての TrustNode プロジェクト"
  }
};

export const translations: Record<LanguageCode, Translations> = { ru, en, es, zh, tr, hi, ar, pt, fr, de, ja };
