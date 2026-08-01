import { LanguageCode } from "../languages";

export const title: Partial<Record<LanguageCode, string>> = {
  ru: "История проекта",
  en: "Project Legacy",
  es: "Historia del Proyecto",
  zh: "项目历程与背景",
  hi: "परियोजना का इतिहास",
  ar: "تاريخ المشروع",
  pt: "História do Projeto",
  fr: "Histoire du Projet",
  de: "Projektgeschichte",
  ja: "プロジェクトの歩み",
  tr: "Proje Geçmişi"
};

export const subtitle: Partial<Record<LanguageCode, string>> = {
  ru: "От дипломных исследований студента-кибербезопасника до патентов ФИПС и федерального признания",
  en: "From a cybersec student's research project to FIPS patents and nationwide recognition",
  es: "Desde las investigaciones de tesis de un estudiante de ciberseguridad hasta patentes FIPS y reconocimiento federal",
  zh: "从网络安全专业学生的毕业设计，到荣获国家专利与联邦级科技竞赛认可的演进历程",
  hi: "एक साइबर सुरक्षा छात्र के शोध पत्र से लेकर पेटेंट और राष्ट्रीय स्तर पर मान्यता प्राप्त करने तक का सफर",
  ar: "من الأبحاث الأكاديمية لطالب في الأمن السيبراني إلى براءات الاختراع والاعتراف الاتحادي",
  pt: "Das pesquisas de conclusão de curso de um estudante de segurança cibernética a patentes oficiais e reconhecimento federal",
  fr: "Des recherches universitaires d'un étudiant en cybersécurité aux brevets officiels et à la reconnaissance nationale",
  de: "Von den Abschlussarbeiten eines Cybersicherheitsstudenten bis hin zu Patenten und nationaler Anerkennung",
  ja: "一人のサイバーセキュリティ学生の卒業研究から始まり、特許取得や全国的な認定に至るまでの軌跡",
  tr: "Bir siber güvenlik öğrencisinin araştırma projesinden FIPS patentlerine ve ülke çapında tanınmaya uzanan yolculuk"
};

export const badge: Partial<Record<LanguageCode, string>> = {
  ru: "ИСТОРИЯ И КОМАНДА",
  en: "LEGACY & CREDENTIALS",
  es: "HISTORIA Y EQUIPO",
  zh: "历史与团队",
  hi: "इतिहास और टीम",
  ar: "التاريخ والفريق",
  pt: "HISTÓRIA E EQUIPE",
  fr: "HISTOIRE ET ÉQUIPE",
  de: "GESCHICHTE UND TEAM",
  ja: "歩みと开发体制",
  tr: "GEÇMİŞ & REFERANSLAR"
};

export const timeline: Partial<Record<LanguageCode, Array<{ badge: string; title: string; desc: string }>>> = {
  ru: [
    { badge: "ГБПОУ ЧРТ // КБ-284", title: "Научные истоки и специализация", desc: "Проект зародился в стенах Челябинского радиотехнического техникума в рамках учебной группы КБ-284 (Специальность 10.02.05 — «Информационная безопасность автоматизированных систем») под руководством научного руководителя Морозковой Натальи Анатольевны." },
    { badge: "НИР // I МЕСТО", title: "Триумф на региональном НИР", desc: "Комплексная работа над локальным алгоритмом антифрода TrustNode принесла проекту I МЕСТО на областном научно-исследовательском конкурсе (НИР) в секции «Информационные технологии»." },
    { badge: "МОСКВА // СЕНТЯБРЬ 2026", title: "Выход на федеральный финал", desc: "По результатам триумфальной победы проект был успешно представлен на федеральном суперфинале научно-исследовательских работ в Москве в сентябре 2026 года для демонстрации эффективности мобильного купола защиты." },
    { badge: "АРХИТЕКТОР + AI-ПОДРЯДЧИКИ", title: "Новая веха: Разработка будущего", desc: "Разработка архитектуры безопасности и интеграция ONNX-моделей TrustNode выполнена по передовой методологии «Архитектор + AI-подрядчики», где генерация кода (Kotlin/C++) была делегирована специализированным ИИ-агентам." }
  ],
  en: [
    { badge: "COLLEGE RESEARCH", title: "Academic Foundations", desc: "Developed at the Chelyabinsk Radiotechnical College under educational group KB-284 (Specialty 10.02.05 — Information Security of Automated Systems), mentored by scientific advisor Natalia Anatolyevna Morozkova." },
    { badge: "REGIONAL VICTORY", title: "Regional Science Triumph", desc: "The comprehensive semantic framework of TrustNode won 1st place in the regional scientific and research competition (IT section) for detecting mobile fraud in real time entirely on-device." },
    { badge: "FEDERAL SUPERFINAL", title: "National Superfinal Moscow", desc: "Following the regional triumph, the project was selected for presentation at the prestigious federal scientific research superfinal in Moscow in September 2026 to demonstrate its real-time defense capabilities." },
    { badge: "AI-DRIVEN WORKFLOW", title: "Architect + AI Agents paradigm", desc: "The security architecture and patented TrustNode algorithms are developed under the 'Architect + AI Agents' framework, leveraging specialized AI code generators to accelerate production and deployment." }
  ],
  es: [
    { badge: "CRTC // KB-284", title: "Bases Académicas y Especialización", desc: "El proyecto nació en la Escuela Radiotécnica de Chelyabinsk dentro del grupo KB-284 (Especialidad 10.02.05 — Seguridad de la Información en Sistemas Automatizados), bajo la dirección científica de Natalia Anatolyevna Morozkova." },
    { badge: "INVESTIGACIÓN // 1.ER LUGAR", title: "Triunfo en el concurso regional", desc: "El trabajo sobre el algoritmo local de anti-fraude de TrustNode le otorgó al proyecto el 1.er lugar en el concurso regional de investigación científica en la sección de 'Tecnologías de la Información'." },
    { badge: "MOSCÚ // SEPTIEMBRE 2026", title: "Pase a la súper final federal", desc: "Como resultado de la victoria, la escuela financió por completo el viaje del autor a Moscú para participar en la súper final nacional de proyectos de investigación en septiembre de 2026." },
    { badge: "ARQUITECTO + AGENTES IA", title: "Paradigma de desarrollo del futuro", desc: "Diseñado por un único desarrollador bajo la metodología 'Arquitecto + Agentes de IA'. La arquitectura de segurança y los algoritmos son del autor, mientras que la codificación en Kotlin/C++ se delega en la IA." }
  ],
  zh: [
    { badge: "学院研究 // KB-284", title: "学术基础与专业领域", desc: "该项目诞生于车里雅宾斯克无线电技术学院，属于 KB-284 教学组（专业代码 10.02.05 —— 自动化系统信息安全），由导师 Natalia Anatolyevna Morozkova 指导。" },
    { badge: "科研竞赛 // 第一名", title: "区域科研竞赛中夺冠", desc: "针对 TrustNode 本地反欺诈算法的研究工作，使该项目在区域科学研究竞赛（信息技术组）中斩获第一名。" },
    { badge: "莫斯科 // 2026年9月", title: "晋级国家级超级总决赛", desc: "基于在区域竞赛中的夺魁，学院全额资助作者前往莫斯科参加 2026 年 9 月举办的享有盛誉的全国研究成果超级总决赛。" },
    { badge: "系统架构师 + AI 智能体", title: "全新里程碑：面向未来的开发", desc: "该项目由独立开发者采用前沿的“架构师 + AI 智能体”模式设计：作者本人担任核心系统架构师与算法设计者，而代码编写（Kotlin/C++）则委托给 AI 助手完成。" }
  ],
  hi: [
    { badge: "कॉलेज रिसर्च // KB-284", title: "शैक्षणिक आधार और विशेषज्ञता", desc: "यह परियोजना चेल्याबिंस्क रेडियोटेक्निकल कॉलेज में शैक्षिक समूह KB-284 (विशेषज्ञता 10.02.05 — स्वचालित प्रणालियों की सूचना सुरक्षा) के तहत वैज्ञानिक सलाहकार नतालिया अनातोलीवना मोरोज़्कोवा के मार्गदर्शन में विकसित की गई थी।" },
    { badge: "अनुसंधान // प्रथम स्थान", title: "क्षेत्रीय अनुसंधान प्रतियोगिता में विजय", desc: "TrustNode के स्थानीय धोखाधड़ी-रोधी एल्गोरिदम पर किए गए कार्य ने आईटी अनुभाग में क्षेत्रीय वैज्ञानिक और अनुसंधान प्रतियोगिता में परियोजना को पहला स्थान दिलाया।" },
    { badge: "मास्को // सितंबर 2026", title: "राष्ट्रीय सुपरफ़ाइनल में प्रवेश", desc: "क्षेत्रीय जीत के आधार पर, कॉलेज सितंबर 2026 में होने वाले प्रतिष्ठित राष्ट्रव्यापी अनुसंधान सुपरफ़ाइनल के लिए मास्को की यात्रा का पूरा खर्च उठा रहा है।" },
    { badge: "आर्किटेक्ट + एआई एजेंट", title: "नया मील का पत्थर: भविष्य का विकास", desc: "एकल डेवलपर द्वारा 'आर्किटेक्ट + एआई एजेंट' पद्धति का उपयोग करके बनाया गया। सुरक्षा आर्किटेक्चर और एल्गोरिदम लेखक द्वारा बनाए गए हैं, जबकि कोड लेखन (Kotlin/C++) एआई एजेंटों को सौंपा गया है।" }
  ],
  ar: [
    { badge: "أبحاث الكلية // KB-284", title: "الأسس الأكاديمية والتخصص", desc: "نشأ المشروع داخل أسوار كلية تشيليابينسك للهندسة اللاسلكية في المجموعة التعليمية KB-284 (تخصص 10.02.05 — أمن معلومات الأنظمة الآلية) تحت إشراف المستشارة العلمية ناتاليا أناتوليفنا موروزكوفا." },
    { badge: "البحث العلمي // المركز الأول", title: "الانتصار في البحث العلمي الإقليمي", desc: "حصد العمل على خوارزمية مكافحة الاحتيال المحلية لـ TrustNode المركز الأول في المسابقة العلمية والبحثية الإقليمية (قسم تكنولوجيا المعلومات)." },
    { badge: "موسكو // سبتمبر 2026", title: "الوصول إلى السوبر فاينال الاتحادي", desc: "بناءً على الانتصار الإقليمي, قامت الكلية بتمويل رحلة المؤلف بالكامل إلى موسكو للمشاركة في السوبر فاينال الوطني المرموق للأبحاث العلمية في سبتمبر 2026." },
    { badge: "المهندس المعماري + وكلاء الذكاء الاصطناعي", title: "عصر جديد: تطوير المستقبل", desc: "تم تصميم المشروع بواسطة مطور مستقل باستخدام منهجية 'المهندس المعماري + وكلاء الذكاء الاصطناعي'. صمم المؤلف بنية الأمن وخوارزميات براءات الاختراع بنفسه، وتم تفويض كتابة الأكواد (Kotlin/C++) لوكلاء الذكاء الاصطناعي." }
  ],
  pt: [
    { badge: "CRTC // KB-284", title: "Fundação Acadêmica e Especialização", desc: "O projeto nasceu na Escola Radiotécnica de Chelyabinsk no grupo KB-284 (Especialização 10.02.05 — Segurança da Informação de Sistemas Automatizados), sob a orientação de Natalia Anatolyevna Morozkova." },
    { badge: "PESQUISA // 1º LUGAR", title: "Triunfo na pesquisa regional", desc: "O trabalho sobre o algoritmo local antifraude do TrustNode trouxe ao projeto o 1º lugar no concurso regional de pesquisa científica na seção de 'Tecnologia da Informação'." },
    { badge: "MOSCOU // SETEMBRO 2026", title: "Acesso à superfinal federal", desc: "Devido à vitória regional, a escola financiou integralmente a viagem do autor a Moscou para participar da prestigiada superfinal de pesquisa nacional em setembro de 2026." },
    { badge: "ARQUITETO + AGENTES DE IA", title: "Novo paradigma de desenvolvimento", desc: "Criado por um desenvolvedor solo com o paradigma 'Arquiteto + Agentes de IA'. A arquitetura de segurança e os algoritmos são do autor, enquanto a codificação (Kotlin/C++) foi realizada por agentes de IA." }
  ],
  fr: [
    { badge: "RECHERCHE COLLÈGE", title: "Fondations Académiques", desc: "Développé au Collège Radiotechnique de Chelyabinsk au sein du groupe d'études KB-284 (Spécialité 10.02.05 — Sécurité de l'Information des Systèmes Automatisés), sous la direction de la conseillère scientifique Natalia Anatolyevna Morozkova." },
    { badge: "VICTOIRE RÉGIONALE", title: "Triomphe Scientifique Régional", desc: "Le travail sur l'algorithme local antifraude de TrustNode a remporté la 1ère place du concours de recherche scientifique régional (section informatique)." },
    { badge: "SUPERFINALE FÉDÉRALE", title: "Superfinale Nationale à Moscou", desc: "Suite à ce triomphe, l'établissement finance intégralement le voyage de l'auteur à Moscou pour participer à la prestigieuse superfinale nationale de recherche en septembre 2026." },
    { badge: "CONCEPTEUR + AGENTS IA", title: "Nouveau paradigme de développement", desc: "Conçu par un développeur solo selon la méthodologie 'Concepteur + Agents IA' : l'auteur crée l'architecture de sécurité et les algorithmes, tandis que le codage (Kotlin/C++) est délégué à des agents IA." }
  ],
  de: [
    { badge: "KOLLEG-FORSCHUNG", title: "Akademische Grundlagen", desc: "Entwickelt am Radiotechnischen Kolleg Tscheljabinsk in der Studiengruppe KB-284 (Fachrichtung 10.02.05 — Informationssicherheit automatisierter Systeme) unter der wissenschaftlichen Leitung von Natalia Anatolyevna Morozkova." },
    { badge: "REGIONALER SIEG", title: "Regionaler Forschungserfolg", desc: "Die Arbeit am lokalen Antifraud-Algorithmus von TrustNode belegte den 1. Platz beim regionalen wissenschaftlichen Forschungswettbewerb in der Sektion Informationstechnologie." },
    { badge: "SUPERFINALE MOSKAU", title: "Bundesweites Superfinale", desc: "Aufgrund des regionalen Triumphs finanziert das Kolleg die Reise des Autors nach Moskau zum angesehenen bundesweiten Forschungs-Superfinale im September 2026 vollständig." },
    { badge: "ARCHITEKT + KI-AGENTEN", title: "Entwicklungsparadigma der Zukunft", desc: "Erstellt von einem Solo-Entwickler nach der Methode 'Architekt + KI-Agenten'. Die Sicherheitsarchitektur und Patentalgorithmen stammen vom Autor, während die Codierung (Kotlin/C++) an KI-Agenten delegiert wurde." }
  ],
  ja: [
    { badge: "技術専門学校研究 // KB-284", title: "学術的基礎と専門分野", desc: "チェリャビンスク無線工学技術専門学校にて、KB-284研究グループ（専門分野 10.02.05 — 「自動化システム情報セキュリティ」）の一環として、指導教官ナタリア・アナトリエヴナ・モロズコワの指導のもとで開発がスタートしました。" },
    { badge: "学術研究 // 第1位", title: "地域研究コンテストでの優勝", desc: "TrustNodeのローカル不正防止アルゴリズムの研究により、地域の学術研究コンペティションの「情報技術」セクションで第1位を獲得しました。" },
    { badge: "モスクワ // 2026年9月", title: "全国スーパーファイナル進出", desc: "地方コンテストでの輝かしい優勝を受け、専門学校の全額援助により、2026年9月にモスクワで開催される権威ある全国研究コンテスト・スーパーファイナルへの出場を果たしました。" },
    { badge: "アーキテクト ＋ AI エージェント", title: "新マイルストーン：未来の開発体制", desc: "本プロジェクトは、ソロ開発者が「アーキテクト＋AIエージェント」体制で設計。セキュリティ構造と特許アルゴリズムは著者が構築し、コードの実装（Kotlin/C++）をAIエージェントに委託しました。" }
  ],
  tr: [
    { badge: "KOLEJ ARAŞTIRMASI // KB-284", title: "Akademik Temeller ve Uzmanlık", desc: "Proje, Çelyabinsk Radyoteknik Koleji bünyesinde, Natalia Anatolyevna Morozkova bilimsel danışmanlığında KB-284 çalışma grubu (Uzmanlık alanı 10.02.05 — 'Otomasyon Sistemlerinin Bilgi Güvenliği') kapsamında doğmuştur." },
    { badge: "ARAŞTIRMA // 1. LİK", title: "Bölgesel Araştırma Yarışmasında Zafer", desc: "TrustNode'un yerel dolandırıcılık önleme algoritması üzerindeki çalışmalar, projeye 'Bilgi Teknolojileri' bölümündeki bölgesel bilimsel ve araştırma yarışmasında 1.lik ödülünü getirdi." },
    { badge: "MOSKOVA // EYLÜL 2026", title: "Ulusal Süper Final Moskova", desc: "Bölgesel zaferin ardından proje, gerçek zamanlı mobil dolandırıcılığı önleme yeteneklerini sergilemek üzere Eylül 2026'da Moskova'da düzenlenen prestijli ulusal süper final araştırma yarışmasına katılmak üzere seçildi." },
    { badge: "MİMAR + AI TEMSİLCİLERİ", title: "Mimar + Yapay Zeka Temsilcileri Paradigması", desc: "Güvenlik mimarisi ve patentli TrustNode algoritmaları, üretimi ve dağıtımı hızlandırmak için Kotlin/C++ kod oluşturma görevlerinin yapay zeka temsilcilerine devredildiği 'Mimar + AI Temsilcileri' metodolojisiyle geliştirilmiştir." }
  ]
};
