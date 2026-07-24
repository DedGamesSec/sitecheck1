import { SKY_LABELS_I18N } from "./skyLabelsI18n";

export const STAR_NAMES_RU: Record<string, string> = {
  // Constellations (retained for compatibility, but we will bypass translation for constellations to keep them in Latin)
  "Ursa Major": "Ursa Major",
  "UMA": "Ursa Major",
  "Ursa Minor": "Ursa Minor",
  "UMI": "Ursa Minor",
  "Orion": "Orion",
  "ORI": "Orion",
  "Cassiopeia": "Cassiopeia",
  "CAS": "Cassiopeia",
  "Cygnus": "Cygnus",
  "CYG": "Cygnus",
  "Taurus": "Taurus",
  "TAU": "Taurus",
  "Leo": "Leo",
  "LEO": "Leo",
  "Scorpius": "Scorpius",
  "SCO": "Scorpius",
  "Canis Major": "Canis Major",
  "CMA": "Canis Major",
  "Canis Minor": "Canis Minor",
  "CMI": "Canis Minor",
  "Pegasus": "Pegasus",
  "PEG": "Pegasus",
  "Andromeda": "Andromeda",
  "AND": "Andromeda",
  "Boötes": "Boötes",
  "Bootes": "Boötes",
  "BOO": "Boötes",
  "Lyra": "Lyra",
  "LYR": "Lyra",
  "Aquila": "Aquila",
  "AQL": "Aquila",
  "Auriga": "Auriga",
  "AUR": "Auriga",
  "Gemini": "Gemini",
  "GEM": "Gemini",
  "Virgo": "Virgo",
  "VIR": "Virgo",
  "Perseus": "Perseus",
  "PER": "Perseus",
  "Centaurus": "Centaurus",
  "CEN": "Centaurus",
  "Crux": "Crux",
  "CRU": "Crux",
  "Sagittarius": "Sagittarius",
  "SGR": "Sagittarius",
  "Cepheus": "Cepheus",
  "CEP": "Cepheus",
  "Draco": "Draco",
  "DRA": "Draco",
  "Hercules": "Hercules",
  "HER": "Hercules",
  "Pisces": "Pisces",
  "PSC": "Pisces",
  "Aries": "Aries",
  "ARI": "Aries",
  "Cancer": "Cancer",
  "CNC": "Cancer",
  "Corona Borealis": "Corona Borealis",
  "CRB": "Corona Borealis",
  "Ophiuchus": "Ophiuchus",
  "OPH": "Ophiuchus",

  // Stars
  "Sirius": "Сириус",
  "Canopus": "Канопус",
  "Arcturus": "Арктур",
  "Alpha Centauri": "Альфа Центавра",
  "Rigil Kentaurus": "Альфа Центавра",
  "Vega": "Вега",
  "Capella": "Капелла",
  "Rigel": "Ригель",
  "Procyon": "Процион",
  "Betelgeuse": "Бетельгейзе",
  "Achernar": "Ахернар",
  "Hadar": "Хадар",
  "Altair": "Альтаир",
  "Acrux": "Акрукс",
  "Aldebaran": "Альдебаран",
  "Antares": "Антарес",
  "Spica": "Спика",
  "Pollux": "Поллукс",
  "Fomalhaut": "Фомальгаут",
  "Deneb": "Денеб",
  "Mimosa": "Мимоза",
  "Regulus": "Регул",
  "Adhara": "Адара",
  "Castor": "Кастор",
  "Gacrux": "Гакрукс",
  "Shaula": "Шаула",
  "Bellatrix": "Беллатрикс",
  "Elnath": "Эльнат",
  "Miaplacidus": "Миаплацидус",
  "Alnilam": "Альнилам",
  "Alnair": "Альнаир",
  "Alnitak": "Альнитак",
  "Alioth": "Алиот",
  "Dubhe": "Дубхе",
  "Mirfak": "Мирфак",
  "Wezen": "Везен",
  "Sargas": "Саргас",
  "Kaus Australis": "Каус Аустралис",
  "Avior": "Авиор",
  "Alkaid": "Алькаид",
  "Menkalinan": "Менкалинан",
  "Atria": "Атриа",
  "Alhena": "Альхена",
  "Peacock": "Пикок",
  "Alsephina": "Альсефина",
  "Mirzam": "Мирзам",
  "Alphard": "Альфард",
  "Polaris": "Полярная звезда",
  "Hamal": "Хамал",
  "Algieba": "Альгиба",
  "Diphda": "Дифда",
  "Mizar": "Мицар",
  "Alcor": "Алькор",
  "Nunki": "Нунки",
  "Menkar": "Менкар",
  "Alpheratz": "Альфератц",
  "Mirach": "Мирах",
  "Almach": "Альмах",
  "Merak": "Мерак",
  "Phecda": "Фекда",
  "Megrez": "Мегрез",
  "Scheat": "Шеат",
  "Markab": "Маркаб",
  "Algenib": "Альгениб",
  "Enif": "Эниф",
  "Schedar": "Шедар",
  "Caph": "Каф",
  "Ruchbah": "Рукбах",
  "Segin": "Сегин",
  "Albireo": "Альбирео",
  "Sadr": "Садр",
  "Gienah": "Гиенах",
  "Mintaka": "Минтака",
  "Saiph": "Саиф",
  "Rasalhague": "Расальхаг",
  "Kochab": "Кохаб",
  "Pherkad": "Феркад",
  "Thuban": "Тубан",
  "Eltanin": "Эльтанин",
  "Rastaban": "Растабан",
  "Izar": "Изар",
  "Alphecca": "Альфекка",
  "Zosma": "Зосма",
  "Denebola": "Денебола",
  "Vindemiatrix": "Виндемиатрикс",

  // Solar System Bodies
  "Sun": "Солнце",
  "Moon": "Луна",
  "Mercury": "Меркурий",
  "Venus": "Венера",
  "Mars": "Марс",
  "Jupiter": "Юпитер",
  "Saturn": "Сатурн",
  "Uranus": "Уран",
  "Neptune": "Нептун",
  "Pluto": "Плутон",

  // Comets & Asteroids
  "1 Ceres": "Астероид Церера (1 Ceres)",
  "Ceres": "Астероид Церера (1 Ceres)",
  "4 Vesta": "Астероид Веста (4 Vesta)",
  "Vesta": "Астероид Веста (4 Vesta)",
  "2 Pallas": "Астероид Паллада (2 Pallas)",
  "Pallas": "Астероид Паллада (2 Pallas)",
  "1P/Halley": "Комета Галлея (1P)",
  "Halley's Comet": "Комета Галлея (1P)",
  "Comet Halley": "Комета Галлея (1P)",
  "C/2020 F3 (NEOWISE)": "Комета NEOWISE (C/2020 F3)",
  "C/2020 F3": "Комета NEOWISE (C/2020 F3)",
  "Comet NEOWISE": "Комета NEOWISE (C/2020 F3)",
  "Comet Tsuchinshan-ATLAS": "Комета Цзыцзиньшань-ATLAS",
  "433 Eros": "Астероид Эрос (433 Eros)",
  "Eros": "Астероид Эрос (433 Eros)",
  "99942 Apophis": "Астероид Апофис (99942 Apophis)",
  "Apophis": "Астероид Апофис (99942 Apophis)",
  "2P/Encke": "Комета Энке (2P)",
  "Comet Encke": "Комета Энке (2P)",
  "3 Juno": "Астероид Юнона (3 Juno)",
  "Juno": "Астероид Юнона (3 Juno)",
  "16 Psyche": "Астероид Психея (16 Psyche)",
  "Psyche": "Астероид Психея (16 Psyche)"
};

// Constellations stay in Latin per user directive "Созвездия (88 IAU) — НЕ переводятся"
export const CONSTELLATION_LATIN: Record<string, string> = {
  "Ursa Major": "Ursa Major", "UMA": "Ursa Major",
  "Ursa Minor": "Ursa Minor", "UMI": "Ursa Minor",
  "Orion": "Orion", "ORI": "Orion",
  "Cassiopeia": "Cassiopeia", "CAS": "Cassiopeia",
  "Cygnus": "Cygnus", "CYG": "Cygnus",
  "Taurus": "Taurus", "TAU": "Taurus",
  "Leo": "Leo", "LEO": "Leo",
  "Scorpius": "Scorpius", "SCO": "Scorpius",
  "Canis Major": "Canis Major", "CMA": "Canis Major",
  "Canis Minor": "Canis Minor", "CMI": "Canis Minor",
  "Pegasus": "Pegasus", "PEG": "Pegasus",
  "Andromeda": "Andromeda", "AND": "Andromeda",
  "Boötes": "Boötes", "Bootes": "Boötes", "BOO": "Boötes",
  "Lyra": "Lyra", "LYR": "Lyra",
  "Aquila": "Aquila", "AQL": "Aquila",
  "Auriga": "Auriga", "AUR": "Auriga",
  "Gemini": "Gemini", "GEM": "Gemini",
  "Virgo": "Virgo", "VIR": "Virgo",
  "Perseus": "Perseus", "PER": "Perseus",
  "Centaurus": "Centaurus", "CEN": "Centaurus",
  "Crux": "Crux", "CRU": "Crux",
  "Sagittarius": "Sagittarius", "SGR": "Sagittarius",
  "Cepheus": "Cepheus", "CEP": "Cepheus",
  "Draco": "Draco", "DRA": "Draco",
  "Hercules": "Hercules", "HER": "Hercules",
  "Pisces": "Pisces", "PSC": "Pisces",
  "Aries": "Aries", "ARI": "Aries",
  "Cancer": "Cancer", "CNC": "Cancer",
  "Corona Borealis": "Corona Borealis", "CRB": "Corona Borealis",
  "Ophiuchus": "Ophiuchus", "OPH": "Ophiuchus"
};

export const CONSTELLATION_RU: Record<string, string> = {
  "Ursa Major": "Большая Медведица", "UMA": "Большая Медведица",
  "Ursa Minor": "Малая Медведица", "UMI": "Малая Медведица",
  "Orion": "Орион", "ORI": "Орион",
  "Cassiopeia": "Кассиопея", "CAS": "Кассиопея",
  "Cygnus": "Лебедь", "CYG": "Лебедь",
  "Taurus": "Телец", "TAU": "Телец",
  "Leo": "Лев", "LEO": "Лев",
  "Scorpius": "Скорпион", "SCO": "Скорпион",
  "Canis Major": "Большой Пёс", "CMA": "Большой Пёс",
  "Canis Minor": "Малый Пёс", "CMI": "Малый Пёс",
  "Pegasus": "Пегас", "PEG": "Пегас",
  "Andromeda": "Андромеда", "AND": "Андромеда",
  "Boötes": "Волопас", "Bootes": "Волопас", "BOO": "Волопас",
  "Lyra": "Лира", "LYR": "Лира",
  "Aquila": "Орёл", "AQL": "Орёл",
  "Auriga": "Возничий", "AUR": "Возничий",
  "Gemini": "Близнецы", "GEM": "Близнецы",
  "Virgo": "Дева", "VIR": "Дева",
  "Perseus": "Персей", "PER": "Персей",
  "Centaurus": "Центавр", "CEN": "Центавр",
  "Crux": "Южный Крест", "CRU": "Южный Крест",
  "Sagittarius": "Стрелец", "SGR": "Стрелец",
  "Cepheus": "Цефей", "CEP": "Цефей",
  "Draco": "Дракон", "DRA": "Дракон",
  "Hercules": "Геркулес", "HER": "Геркулес",
  "Pisces": "Рыбы", "PSC": "Рыбы",
  "Aries": "Овен", "ARI": "Овен",
  "Cancer": "Рак", "CNC": "Рак",
  "Corona Borealis": "Северная Корона", "CRB": "Северная Корона",
  "Ophiuchus": "Змееносец", "OPH": "Змееносец"
};

export const STAR_NAMES_I18N: Record<string, Record<string, string>> = {
  // Stars
  "Sirius": {
    ru: "Сириус", en: "Sirius", es: "Sirio", zh: "天狼星", ar: "الشعرى اليمانية",
    fr: "Sirius", de: "Sirius", pt: "Sirius", hi: "व्याध तारा", ja: "シリウス", tr: "Akyıldız"
  },
  "Canopus": {
    ru: "Канопус", en: "Canopus", es: "Canopo", zh: "老人星", ar: "سهيل",
    fr: "Canopus", de: "Kanopus", pt: "Canopo", hi: "अगस्त্য", ja: "カノープス", tr: "Kanopus"
  },
  "Arcturus": {
    ru: "Арктур", en: "Arcturus", es: "Arcturo", zh: "大角星", ar: "السماك الرامح",
    fr: "Arcturus", de: "Arktur", pt: "Arcturo", hi: "स्वाती", ja: "アークトゥルス", tr: "Arkturus"
  },
  "Alpha Centauri": {
    ru: "Альфа Центавра", en: "Alpha Centauri", es: "Alfa Centauri", zh: "南门二", ar: "رجل القنطور",
    fr: "Alpha Centauri", de: "Alpha Centauri", pt: "Alfa Centauri", hi: "मित्रक", ja: "ケンタウルス座アルファ星", tr: "Alfa Centauri"
  },
  "Rigil Kentaurus": {
    ru: "Альфа Центавра", en: "Alpha Centauri", es: "Alfa Centauri", zh: "南门二", ar: "رجل القنطور",
    fr: "Alpha Centauri", de: "Alpha Centauri", pt: "Alfa Centauri", hi: "मित्रक", ja: "ケンタウルス座アルファ星", tr: "Alfa Centauri"
  },
  "Vega": {
    ru: "Вега", en: "Vega", es: "Vega", zh: "织女星", ar: "النسر الواقع",
    fr: "Véga", de: "Vega", pt: "Vega", hi: "अभिजित", ja: "ベガ", tr: "Vega"
  },
  "Capella": {
    ru: "Капелла", en: "Capella", es: "Capella", zh: "五车二", ar: "العيوق",
    fr: "Capella", de: "Capella", pt: "Capella", hi: "ब्रह्महृदय", ja: "カペラ", tr: "Capella"
  },
  "Rigel": {
    ru: "Ригель", en: "Rigel", es: "Rigel", zh: "参宿七", ar: "رجل الجبار",
    fr: "Rigel", de: "Rigel", pt: "Rigel", hi: "राजन्य", ja: "リゲル", tr: "Rigel"
  },
  "Procyon": {
    ru: "Процион", en: "Procyon", es: "Proción", zh: "南河三", ar: "الشعرى الشامية",
    fr: "Procyon", de: "Prokyon", pt: "Procyon", hi: "प्रेशियस", ja: "プロキオン", tr: "Procyon"
  },
  "Betelgeuse": {
    ru: "Бетельгейзе", en: "Betelgeuse", es: "Betelgeuse", zh: "参宿四", ar: "إبط الجوزاء",
    fr: "Bételgeuse", de: "Beteigeuze", pt: "Betelgeuse", hi: "आर्द्रा", ja: "ベテルギウス", tr: "Betelgeuse"
  },
  "Altair": {
    ru: "Альтаир", en: "Altair", es: "Altair", zh: "河鼓二", ar: "النسر الطائر",
    fr: "Altaïr", de: "Altair", pt: "Altair", hi: "श्रवण तारा", ja: "アルタイル", tr: "Altair"
  },
  "Aldebaran": {
    ru: "Альдебаран", en: "Aldebaran", es: "Aldebarán", zh: "毕宿五", ar: "الدبران",
    fr: "Aldébaran", de: "Aldebaran", pt: "Aldebaran", hi: "रोहिणी", ja: "アルデバラン", tr: "Aldebaran"
  },
  "Antares": {
    ru: "Антарес", en: "Antares", es: "Antares", zh: "心宿二", ar: "قلب العقرب",
    fr: "Antarès", de: "Antares", pt: "Antares", hi: "ज्येष्ठा", ja: "アンタレス", tr: "Antares"
  },
  "Spica": {
    ru: "Спика", en: "Spica", es: "Espica", zh: "角宿一", ar: "السماك الأعزل",
    fr: "Épi", de: "Spica", pt: "Espiga", hi: "चित्रा", ja: "スピカ", tr: "Spika"
  },
  "Pollux": {
    ru: "Поллукс", en: "Pollux", es: "Pólux", zh: "北河三", ar: "رأس التوأم المؤخر",
    fr: "Pollux", de: "Pollux", pt: "Pólux", hi: "पुनर्वसु", ja: "ポルックス", tr: "Polluks"
  },
  "Castor": {
    ru: "Кастор", en: "Castor", es: "Cástor", zh: "北河二", ar: "رأس التوأم المقدم",
    fr: "Castor", de: "Castor", pt: "Cástor", hi: "कस्तूरी", ja: "カストル", tr: "Kastor"
  },
  "Fomalhaut": {
    ru: "Фомальгаут", en: "Fomalhaut", es: "Fomalhaut", zh: "北落师门", ar: "فم الحوت",
    fr: "Fomalhaut", de: "Fomalhaut", pt: "Fomalhaut", hi: "फ़ोमॉलहौट", ja: "フォーマルハウト", tr: "Fomalhaut"
  },
  "Deneb": {
    ru: "Денеб", en: "Deneb", es: "Deneb", zh: "天津四", ar: "ذنب الدجاجة",
    fr: "Deneb", de: "Deneb", pt: "Deneb", hi: "डेनेब", ja: "デネブ", tr: "Deneb"
  },
  "Regulus": {
    ru: "Регул", en: "Regulus", es: "Régulo", zh: "轩辕十四", ar: "الملكي",
    fr: "Régulus", de: "Regulus", pt: "Régulo", hi: "मघा", ja: "レグルス", tr: "Regulus"
  },
  "Polaris": {
    ru: "Полярная звезда", en: "Polaris", es: "Estrella Polar", zh: "北极星", ar: "نجم الجدي",
    fr: "Étoile Polaire", de: "Polarstern", pt: "Estrela Polar", hi: "ध्रुव तारा", ja: "ポラリス", tr: "Demirkazık"
  },

  // Big Dipper & Orion Star Localizations
  "Dubhe": {
    ru: "Дубхе", en: "Dubhe", es: "Dubhe", zh: "天枢", ar: "دبة", fr: "Dubhe", de: "Dubhe", pt: "Dubhe", hi: "दुभे", ja: "ドゥーベ", tr: "Dubhe"
  },
  "Merak": {
    ru: "Мерак", en: "Merak", es: "Merak", zh: "天璇", ar: "المراق", fr: "Merak", de: "Merak", pt: "Merak", hi: "मेराक", ja: "メラク", tr: "Merak"
  },
  "Phecda": {
    ru: "Фекда", en: "Phecda", es: "Phecda", zh: "天玑", ar: "الفخذ", fr: "Phecda", de: "Phecda", pt: "Phecda", hi: "फेक्दा", ja: "フェクダ", tr: "Phecda"
  },
  "Megrez": {
    ru: "Мегрез", en: "Megrez", es: "Megrez", zh: "天权", ar: "المغرز", fr: "Megrez", de: "Megrez", pt: "Megrez", hi: "मेग्रेज़", ja: "メグレス", tr: "Megrez"
  },
  "Alioth": {
    ru: "Алиот", en: "Alioth", es: "Alioth", zh: "玉衡", ar: "الأليّة", fr: "Alioth", de: "Alioth", pt: "Alioth", hi: "अलिओथ", ja: "アリオト", tr: "Alioth"
  },
  "Mizar": {
    ru: "Мицар", en: "Mizar", es: "Mizar", zh: "开阳", ar: "المئزر", fr: "Mizar", de: "Mizar", pt: "Mizar", hi: "मिज़ार", ja: "ミザール", tr: "Mizar"
  },
  "Alkaid": {
    ru: "Алькаид", en: "Alkaid", es: "Alkaid", zh: "摇光", ar: "القائد", fr: "Alkaid", de: "Alkaid", pt: "Alkaid", hi: "अल्काइड", ja: "アルカイド", tr: "Alkaid"
  },
  "Alcor": {
    ru: "Алькор", en: "Alcor", es: "Alcor", zh: "辅", ar: "الخوار", fr: "Alcor", de: "Alcor", pt: "Alcor", hi: "अल्कोर", ja: "アルコル", tr: "Alcor"
  },
  "Bellatrix": {
    ru: "Беллатрикс", en: "Bellatrix", es: "Bellatrix", zh: "参宿五", ar: "بلاطريكس", fr: "Bellatrix", de: "Bellatrix", pt: "Bellatrix", hi: "बेलाट्रिक्स", ja: "ベラトリックス", tr: "Bellatrix"
  },
  "Saiph": {
    ru: "Саиф", en: "Saiph", es: "Saiph", zh: "参宿六", ar: "سيف", fr: "Saiph", de: "Saiph", pt: "Saiph", hi: "सैफ", ja: "サイフ", tr: "Saiph"
  },
  "Alnitak": {
    ru: "Альнитак", en: "Alnitak", es: "Alnitak", zh: "参宿一", ar: "النطاق", fr: "Alnitak", de: "Alnitak", pt: "Alnitak", hi: "अल्निटาक", ja: "アルニタク", tr: "Alnitak"
  },
  "Alnilam": {
    ru: "Альнилам", en: "Alnilam", es: "Alnilam", zh: "参宿二", ar: "النظام", fr: "Alnilam", de: "Alnilam", pt: "Alnilam", hi: "अल्नीलाम", ja: "アルニラム", tr: "Alnilam"
  },
  "Mintaka": {
    ru: "Минтака", en: "Mintaka", es: "Mintaka", zh: "参宿三", ar: "المنطقة", fr: "Mintaka", de: "Mintaka", pt: "Mintaka", hi: "मिन्ताка", ja: "ミンタカ", tr: "Mintaka"
  },
  "Kochab": {
    ru: "Кохаб", en: "Kochab", es: "Kochab", zh: "帝", ar: "كوكب", fr: "Kochab", de: "Kochab", pt: "Kochab", hi: "कोचाब", ja: "コカブ", tr: "Kochab"
  },
  "Pherkad": {
    ru: "Феркад", en: "Pherkad", es: "Pherkad", zh: "太子", ar: "فرقد", fr: "Pherkad", de: "Pherkad", pt: "Pherkad", hi: "फरकाड", ja: "フェルカド", tr: "Pherkad"
  },

  // Comets & Asteroids
  "Ceres": {
    ru: "Астероид Церера (1 Ceres)", en: "Asteroid Ceres (1 Ceres)", es: "Asteroide Ceres", zh: "谷神星", ar: "سيريس",
    fr: "Cérès", de: "Ceres", pt: "Ceres", hi: "सेरेस", ja: "ケレス", tr: "Ceres"
  },
  "1 Ceres": {
    ru: "Астероид Церера (1 Ceres)", en: "Asteroid Ceres (1 Ceres)", es: "Asteroide Ceres", zh: "谷神星", ar: "سيريس",
    fr: "Cérès", de: "Ceres", pt: "Ceres", hi: "सेरेस", ja: "ケレス", tr: "Ceres"
  },
  "Vesta": {
    ru: "Астероид Веста (4 Vesta)", en: "Asteroid Vesta (4 Vesta)", es: "Asteroide Vesta", zh: "灶神星", ar: "فيستا",
    fr: "Vesta", de: "Vesta", pt: "Vesta", hi: "वेस्टา", ja: "ベスタ", tr: "Vesta"
  },
  "4 Vesta": {
    ru: "Астероид Веста (4 Vesta)", en: "Asteroid Vesta (4 Vesta)", es: "Asteroide Vesta", zh: "灶神星", ar: "فيستا",
    fr: "Vesta", de: "Vesta", pt: "Vesta", hi: "веста", ja: "ベスタ", tr: "Vesta"
  },
  "Pallas": {
    ru: "Астероид Паллада (2 Pallas)", en: "Asteroid Pallas (2 Pallas)", es: "Asteroide Palas", zh: "智神星", ar: "بالاس",
    fr: "Pallas", de: "Pallas", pt: "Palas", hi: "पैलस", ja: "パラス", tr: "Pallas"
  },
  "2 Pallas": {
    ru: "Астероид Паллада (2 Pallas)", en: "Asteroid Pallas (2 Pallas)", es: "Asteroide Palas", zh: "智神星", ar: "بالاس",
    fr: "Pallas", de: "Pallas", pt: "Palas", hi: "पैलस", ja: "パラス", tr: "Pallas"
  },
  "Halley's Comet": {
    ru: "Комета Галлея (1P)", en: "Halley's Comet (1P)", es: "Cometa Halley", zh: "哈雷彗星", ar: "مذنب هالي",
    fr: "Comète de Halley", de: "Halleyscher Komet", pt: "Cometa Halley", hi: "हैली धूमकेतु", ja: "ハレー彗星", tr: "Halley Kuyruklu Yıldızı"
  },
  "1P/Halley": {
    ru: "Комета Галлея (1P)", en: "Halley's Comet (1P)", es: "Cometa Halley", zh: "哈雷彗星", ar: "مذنب هالي",
    fr: "Comète de Halley", de: "Halleyscher Komet", pt: "Cometa Halley", hi: "हैली धूमकेतु", ja: "ハレー彗星", tr: "Halley Kuyruklu Yıldızı"
  },
  "Comet Halley": {
    ru: "Комета Галлея (1P)", en: "Halley's Comet (1P)", es: "Cometa Halley", zh: "哈雷彗星", ar: "مذنب هالي",
    fr: "Comète de Halley", de: "Halleyscher Komet", pt: "Cometa Halley", hi: "हैली धूमकेतु", ja: "ハレー彗星", tr: "Halley Kuyruklu Yıldızı"
  },
  "Comet NEOWISE": {
    ru: "Комета NEOWISE (C/2020 F3)", en: "Comet NEOWISE (C/2020 F3)", es: "Cometa NEOWISE", zh: "NEOWISE彗星", ar: "مذنب نيوايز",
    fr: "Comète NEOWISE", de: "Komet NEOWISE", pt: "Cometa NEOWISE", hi: "नियोवाइज़ धूमकेतु", ja: "ネオワイズ彗星", tr: "NEOWISE Kuyruklu Yıldızı"
  },
  "C/2020 F3 (NEOWISE)": {
    ru: "Комета NEOWISE (C/2020 F3)", en: "Comet NEOWISE (C/2020 F3)", es: "Cometa NEOWISE", zh: "NEOWISE彗星", ar: "مذنب نيوايز",
    fr: "Comète NEOWISE", de: "Komet NEOWISE", pt: "Cometa NEOWISE", hi: "नियोवाइज़ धूमकेतु", ja: "ネオワイズ彗星", tr: "NEOWISE Kuyruklu Yıldızı"
  },
  "C/2020 F3": {
    ru: "Комета NEOWISE (C/2020 F3)", en: "Comet NEOWISE (C/2020 F3)", es: "Cometa NEOWISE", zh: "NEOWISE彗星", ar: "مذنب نيوايز",
    fr: "Comète NEOWISE", de: "Komet NEOWISE", pt: "Cometa NEOWISE", hi: "नियोवाइज़ धूमकेतु", ja: "ネオワイズ彗星", tr: "NEOWISE Kuyruklu Yıldızı"
  },
  "Eros": {
    ru: "Астероид Эрос (433 Eros)", en: "Asteroid Eros (433 Eros)", es: "Asteroide Eros", zh: "爱神星", ar: "إيروس",
    fr: "Éros", de: "Eros", pt: "Eros", hi: "एरोस", ja: "エロス", tr: "Eros"
  },
  "433 Eros": {
    ru: "Астероид Эрос (433 Eros)", en: "Asteroid Eros (433 Eros)", es: "Asteroide Eros", zh: "爱神星", ar: "إيروس",
    fr: "Éros", de: "Eros", pt: "Eros", hi: "एरोस", ja: "エロス", tr: "Eros"
  },
  "Apophis": {
    ru: "Астероид Апофис (99942 Apophis)", en: "Asteroid Apophis (99942 Apophis)", es: "Asteroide Apofis", zh: "阿波菲斯", ar: "أبوفيس",
    fr: "Apophis", de: "Apophis", pt: "Apófis", hi: "अपोفिस", ja: "アポフィス", tr: "Apofis"
  },
  "99942 Apophis": {
    ru: "Астероид Апофис (99942 Apophis)", en: "Asteroid Apophis (99942 Apophis)", es: "Asteroide Apofis", zh: "阿波菲斯", ar: "أبوفيس",
    fr: "Apophis", de: "Apophis", pt: "Apófis", hi: "अपोفिस", ja: "アポフィス", tr: "Apofis"
  },
  "Encke": {
    ru: "Комета Энке (2P)", en: "Comet Encke (2P)", es: "Cometa Encke", zh: "恩克彗星", ar: "مذنب إنكي",
    fr: "Comète d'Encke", de: "Enckescher Komet", pt: "Cometa Encke", hi: "एन्के धूमकेतु", ja: "エンケ彗星", tr: "Encke Kuyruklu Yıldızı"
  },
  "2P/Encke": {
    ru: "Комета Энке (2P)", en: "Comet Encke (2P)", es: "Cometa Encke", zh: "恩克彗星", ar: "مذنب إنكي",
    fr: "Comète d'Encke", de: "Enckescher Komet", pt: "Cometa Encke", hi: "एन्के धूमकेतु", ja: "エンケ彗星", tr: "Encke Kuyruklu Yıldızı"
  },
  "Juno": {
    ru: "Астероид Юнона (3 Juno)", en: "Asteroid Juno (3 Juno)", es: "Asteroide Juno", zh: "婚神星", ar: "جونو",
    fr: "Junon", de: "Juno", pt: "Juno", hi: "जूनो", ja: "ジュノー", tr: "Juno"
  },
  "3 Juno": {
    ru: "Астероид Юнона (3 Juno)", en: "Asteroid Juno (3 Juno)", es: "Asteroide Juno", zh: "婚神星", ar: "جونو",
    fr: "Junon", de: "Juno", pt: "Juno", hi: "जूनो", ja: "ジュノー", tr: "Juno"
  },
  "Psyche": {
    ru: "Астероид Психея (16 Psyche)", en: "Asteroid Psyche (16 Psyche)", es: "Asteroide Psique", zh: "灵神星", ar: "سايكي",
    fr: "Psyché", de: "Psyche", pt: "Psique", hi: "साइकी", ja: "プシケ", tr: "Psyche"
  },
  "16 Psyche": {
    ru: "Астероид Психея (16 Psyche)", en: "Asteroid Psyche (16 Psyche)", es: "Asteroide Psique", zh: "灵神星", ar: "سايكي",
    fr: "Psyché", de: "Psyche", pt: "Psique", hi: "साइकी", ja: "プシケ", tr: "Psyche"
  }
};

export function getRussianName(englishName: string, lang: string = "ru"): string {
  if (!englishName) return "";

  const cleanName = englishName.replace(/\s*\([^)]*\)/g, "").trim();

  // 1. Check if it is a constellation
  if (lang === "ru") {
    if (CONSTELLATION_RU[englishName]) {
      return CONSTELLATION_RU[englishName];
    }
    if (CONSTELLATION_RU[cleanName]) {
      return CONSTELLATION_RU[cleanName];
    }
  }

  if (CONSTELLATION_LATIN[englishName]) {
    return CONSTELLATION_LATIN[englishName];
  }
  if (CONSTELLATION_LATIN[cleanName]) {
    return CONSTELLATION_LATIN[cleanName];
  }

  // 2. Direct translation from STAR_NAMES_I18N
  if (STAR_NAMES_I18N[englishName] && STAR_NAMES_I18N[englishName][lang]) {
    return STAR_NAMES_I18N[englishName][lang];
  }
  if (STAR_NAMES_I18N[cleanName] && STAR_NAMES_I18N[cleanName][lang]) {
    return STAR_NAMES_I18N[cleanName][lang];
  }

  // 3. Fallback to original STAR_NAMES_RU if requested language is "ru"
  if (lang === "ru") {
    if (STAR_NAMES_RU[englishName]) return STAR_NAMES_RU[englishName];
    if (STAR_NAMES_RU[cleanName]) return STAR_NAMES_RU[cleanName];
  }

  // 4. Dynamic translation matching for comets / asteroids based on the lang param
  const upper = englishName.toUpperCase();
  const getCometLabel = (l: string) => SKY_LABELS_I18N[l]?.comet || SKY_LABELS_I18N["en"]?.comet || "Comet";
  const getAsteroidLabel = (l: string) => SKY_LABELS_I18N[l]?.asteroid || SKY_LABELS_I18N["en"]?.asteroid || "Asteroid";

  if (upper.includes("CERES")) return `${getAsteroidLabel(lang)} Ceres (1 Ceres)`;
  if (upper.includes("VESTA")) return `${getAsteroidLabel(lang)} Vesta (4 Vesta)`;
  if (upper.includes("PALLAS")) return `${getAsteroidLabel(lang)} Pallas (2 Pallas)`;
  if (upper.includes("HALLEY")) return `${getCometLabel(lang)} Halley (1P)`;
  if (upper.includes("NEOWISE")) return `${getCometLabel(lang)} NEOWISE (C/2020 F3)`;
  if (upper.includes("EROS")) return `${getAsteroidLabel(lang)} Eros (433 Eros)`;
  if (upper.includes("APOPHIS")) return `${getAsteroidLabel(lang)} Apophis (99942 Apophis)`;
  if (upper.includes("ENCKE")) return `${getCometLabel(lang)} Encke (2P)`;
  if (upper.includes("JUNO")) return `${getAsteroidLabel(lang)} Juno (3 Juno)`;
  if (upper.includes("PSYCHE")) return `${getAsteroidLabel(lang)} Psyche (16 Psyche)`;

  // 5. Dynamic translation matching for satellites based on the lang param
  const getSatelliteBase = (key: string, l: string): string => {
    const dict = SKY_LABELS_I18N[l] || SKY_LABELS_I18N["en"];
    return dict[key as keyof typeof dict] || SKY_LABELS_I18N["en"][key as keyof typeof dict] || "";
  };

  if (upper.includes("ISS") || upper.includes("ZARYA")) return `${getSatelliteBase("iss", lang)} [${englishName}]`;
  if (upper.includes("TIANGONG") || upper.includes("CSS")) return `${getSatelliteBase("tiangong", lang)} [${englishName}]`;
  if (upper.includes("HUBBLE") || upper.includes("HST")) return `${getSatelliteBase("hubble", lang)} [${englishName}]`;
  if (upper.includes("STARLINK")) return `${getSatelliteBase("starlink", lang)} [${englishName}]`;
  if (upper.includes("ONEWEB")) return `${getSatelliteBase("oneweb", lang)} [${englishName}]`;
  if (upper.includes("NOAA")) return `${getSatelliteBase("noaa", lang)} [${englishName}]`;
  if (upper.includes("COSMOS") || upper.includes("KOSMOS")) return `${getSatelliteBase("cosmos", lang)} [${englishName}]`;
  if (upper.includes("METEOR")) return `${getSatelliteBase("meteor", lang)} [${englishName}]`;
  if (upper.includes("RESURS")) return `${getSatelliteBase("resurs", lang)} [${englishName}]`;
  if (upper.includes("LANDSAT")) return `${getSatelliteBase("landsat", lang)} [${englishName}]`;
  if (upper.includes("TERRA") || upper.includes("AQUA") || upper.includes("SUOMI")) return `${getSatelliteBase("nasa", lang)} [${englishName}]`;
  if (upper.includes("IRIDIUM")) return `${getSatelliteBase("iridium", lang)} [${englishName}]`;
  if (upper.includes("GLOBALSTAR")) return `${getSatelliteBase("globalstar", lang)} [${englishName}]`;

  // 6. Fallback to englishName
  return englishName;
}
