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
  ru: "Запустите один из сценариев угроз и посмотрите, как TrustNode защищает в реальном времени: акустический анализ и ML-классификация rubert-tiny2 работают на устройстве, а слои распознавания речи, семантики и репутации показаны как концепция (Roadmap).",
  en: "Trigger a social engineering attack scenario and watch TrustNode defend in real time: acoustic analysis and rubert-tiny2 ML classification run on-device, while the speech recognition, semantics, and reputation layers are shown as a Roadmap concept.",
  es: "Inicie uno de los escenarios de amenazas y vea cómo TrustNode defiende en tiempo real: el análisis acústico y la clasificación ML rubert-tiny2 funcionan en el dispositivo, y las capas de reconocimiento de voz, semántica y reputación se muestran como concepto (Roadmap).",
  zh: "启动以下社交工程威胁场景，看看 TrustNode 如何实时防御：声学分析与 rubert-tiny2 ML 分类在设备端运行，而语音识别、语义与声誉层作为 Roadmap 概念展示。",
  hi: "एक सामाजिक इंजीनियरिंग हमले का परिदृश्य शुरू करें और देखें कि TrustNode वास्तविक समय में कैसे बचाव करता है: ध्वनिक विश्लेषण और rubert-tiny2 ML वर्गीकरण डिवाइस पर चलते हैं, जबकि वाक् पहचान, सिमेंटिक और प्रतिष्ठा परतें Roadmap अवधारणा के रूप में दिखाई जाती हैं।",
  ar: "قم بتشغيل أحد سيناريوهات التهديد وشاهد كيف يدافع TrustNode في الوقت الفعلي: التحليل الصوتي وتصنيف التعلم الآلي rubert-tiny2 يعملان على الجهاز، بينما تُعرض طبقات التعرف على الكلام والدلالة والسمعة كمفهوم (Roadmap).",
  pt: "Inicie um dos cenários de ameaça e veja como o TrustNode defende em tempo real: a análise acústica e a classificação ML rubert-tiny2 rodam no dispositivo, enquanto as camadas de reconhecimento de fala, semântica e reputação são mostradas como conceito (Roadmap).",
  fr: "Lancez un scénario d'attaque et observez comment TrustNode défend en temps réel : l'analyse acoustique et la classification ML rubert-tiny2 fonctionnent sur l'appareil, tandis que les couches de reconnaissance vocale, de sémantique et de réputation sont montrées comme concept (Roadmap).",
  de: "Starten Sie eines der Bedrohungsszenarien und sehen Sie, wie TrustNode in Echtzeit schützt: Akustikanalyse und ML-Klassifikation rubert-tiny2 laufen auf dem Gerät, während Spracherkennungs-, Semantik- und Reputationsebenen als Roadmap-Konzept gezeigt werden.",
  ja: "ソーシャルエンジニアリング攻撃のシナリオを実行して、TrustNodeがリアルタイムにどう守るかご覧ください：音響解析と rubert-tiny2 のML分類は端末上で稼働し、音声認識・意味解析・評判のレイヤーは Roadmap 構想として表示されます。"
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
  ],
  es: [
    {
      id: "bank",
      name: "Falsa seguridad bancaria",
      caller: "Policía Federal / Seguridad Bancaria",
      speech: [
        "¡Hola! Le habla el detective Miller de la Unidad de Delitos Financieros, sobre su cuenta.",
        "Hemos detectado un intento de transferencia no autorizada de 1.500 $ desde un dispositivo desconocido.",
        "Para proteger su saldo, debemos trasladar todos sus fondos a nuestra caja fuerte temporal protegida.",
        "Por favor, indíquenos el código de verificación de un solo uso que le enviamos por SMS para autorizar la transferencia.",
        "No cuelgue ni hable con nadie, o será considerado responsable legalmente por colaborar con ciberdelincuentes.",
      ],
      threatMilestones: [15, 40, 65, 88, 98],
      triggers: [
        "Delitos Financieros",
        "transferencia no autorizada",
        "caja fuerte",
        "código de verificación",
        "responsable legalmente",
      ],
    },
    {
      id: "delivery",
      name: "Estafa de paquetería",
      caller: "Bot automatizado del servicio de mensajería",
      speech: [
        "Hola, la entrega de su paquete se ha suspendido por un número de apartamento incompleto.",
        "El paquete está retenido en nuestro centro de clasificación y desde mañana se aplican cargos por devolución.",
        "Entre ahora en trustnode-tracking-secure.com/id824 para pagar la pequeña tasa de verificación de 1,50 $.",
        "Deberá introducir los datos de su tarjeta de crédito y su dirección completa para verificar la propiedad.",
        "Si no verifica la propiedad en 2 horas, el paquete se destruirá automáticamente.",
      ],
      threatMilestones: [10, 25, 55, 82, 95],
      triggers: [
        "suspendido",
        "trustnode-tracking-secure.com",
        "tasa de verificación",
        "tarjeta de crédito",
        "destruirá",
      ],
    },
    {
      id: "investment",
      name: "Inversión VIP en criptomonedas",
      caller: "Broker senior de TrustCapital",
      speech: [
        "¡Hola! Enhorabuena, su perfil fue seleccionado para nuestro nivel VIP exclusivo de alto rendimiento.",
        "Nuestro software de IA garantiza un 100 % de acierto en derivados cripto modernos.",
        "Solo necesita hacer hoy un depósito inicial de 100 $ para activar su terminal premium.",
        "Mañana por la mañana recibirá 500 $ de beneficio pasivo directos a su tarjeta Visa.",
        "Las plazas son limitadas, solo quedan 2. ¡Transfiera ahora mismo para reservar la suya!",
      ],
      threatMilestones: [12, 32, 60, 85, 97],
      triggers: [
        "alto rendimiento",
        "100 % de acierto",
        "depósito inicial",
        "beneficio pasivo",
        "ahora mismo",
      ],
    },
  ],
  zh: [
    {
      id: "bank",
      name: "假冒银行安全部门",
      caller: "联邦警察 / 银行安全部门",
      speech: [
        "您好！我是金融犯罪调查部门的米勒探员，现就您的账户问题来电。",
        "我们检测到一笔来自未知设备的未经授权转账操作，金额为 1,500 美元。",
        "为保护您的余额，我们必须将您剩余的资金转入临时的安全保管账户。",
        "请提供我们刚刚发送到您手机的一次性验证码，以授权这笔转账。",
        "请勿挂断或与任何人交谈，否则您将被视为协助网络犯罪分子而承担法律责任。",
      ],
      threatMilestones: [15, 40, 65, 88, 98],
      triggers: [
        "金融犯罪调查",
        "未经授权转账",
        "安全保管账户",
        "验证码",
        "法律责任",
      ],
    },
    {
      id: "delivery",
      name: "包裹快递钓鱼诈骗",
      caller: "快递服务自动机器人",
      speech: [
        "您好，由于您的公寓门牌号不完整，您的包裹派送已被暂停。",
        "包裹目前存放在我们的分拣中心，从明天起将收取退件费用。",
        "请立即访问 trustnode-tracking-secure.com/id824 支付 1.50 美元的小额验证费。",
        "您需要输入您的信用卡信息和完整账单地址以验证身份。",
        "若 2 小时内未能完成验证，包裹将被自动销毁。",
      ],
      threatMilestones: [10, 25, 55, 82, 95],
      triggers: [
        "暂停",
        "trustnode-tracking-secure.com",
        "验证费",
        "信用卡信息",
        "销毁",
      ],
    },
    {
      id: "investment",
      name: "VIP 加密货币投资",
      caller: "TrustCapital 高级经纪人",
      speech: [
        "您好！恭喜您，您的账户已被选入我们专属的高收益 VIP 席位。",
        "我们专有的 AI 神经网络软件保证在现代加密货币衍生品上拥有 100% 的胜率。",
        "您只需在今天完成 100 美元的快速初始入金，即可激活您的尊享终端。",
        "到明早，您将直接收到 500 美元的纯被动收益，返回到您的 Visa 卡。",
        "名额极其有限，仅剩 2 个。请立即转账加密货币或银行汇款以锁定名额！",
      ],
      threatMilestones: [12, 32, 60, 85, 97],
      triggers: [
        "高收益 VIP",
        "100% 的胜率",
        "初始入金",
        "被动收益",
        "立即转账",
      ],
    },
  ],
  tr: [
    {
      id: "bank",
      name: "Sahte banka güvenliği",
      caller: "Federal Polis / Banka Güvenliği",
      speech: [
        "Merhaba! Mali Suçlar Birimi'nden Dedektif Miller, hesabınızla ilgili arıyorum.",
        "Bilinmeyen bir cihazdan 1.500 $ tutarında yetkisiz transfer girişimi tespit ettik.",
        "Bakiyenizi korumak için tüm paranızı geçici güvenli kasamıza aktarmamız gerekiyor.",
        "Lütfen transferi onaylamak için telefonunuza gönderdiğimiz tek kullanımlık doğrulama kodunu verin.",
        "Sakın kapatmayın veya kimseyle konuşmayın, aksi halde siber suçlulara yardım etmekten yasal olarak sorumlu tutulursunuz.",
      ],
      threatMilestones: [15, 40, 65, 88, 98],
      triggers: [
        "Mali Suçlar",
        "yetkisiz transfer",
        "güvenli kasa",
        "doğrulama kodu",
        "yasal olarak sorumlu",
      ],
    },
    {
      id: "delivery",
      name: "Paket teslimatı kimlik avı",
      caller: "Kargo Hizmeti Otomatik Botu",
      speech: [
        "Merhaba, daire numaranız eksik olduğu için paket teslimatınız askıya alındı.",
        "Paketiniz şu anda ayrıştırma merkezimizde tutuluyor ve yarından itibaren iade ücreti uygulanacak.",
        "Lütfen hemen trustnode-tracking-secure.com/id824 adresine girip küçük 1,50 $ doğrulama ücretini ödeyin.",
        "Sahipliği doğrulamak için kredi kartı bilgilerinizi ve tam fatura adresinizi girmeniz gerekecek.",
        "2 saat içinde doğrulama yapılmazsa paketiniz otomatik olarak imha edilecektir.",
      ],
      threatMilestones: [10, 25, 55, 82, 95],
      triggers: [
        "askıya alındı",
        "trustnode-tracking-secure.com",
        "doğrulama ücreti",
        "kredi kartı",
        "imha",
      ],
    },
    {
      id: "investment",
      name: "VIP Kripto Yatırımı",
      caller: "TrustCapital Kıdemli Broker",
      speech: [
        "Merhaba! Tebrikler, profiliniz özel yüksek getirili VIP katmanımız için seçildi.",
        "Özel yapay zeka yazılımımız modern kripto türevlerinde %100 kazanç oranı garanti eder.",
        "Tek yapmanız gereken bugün 100 $ tutarında hızlı bir başlangıç yatırımı yaparak premium terminalinizi aktifleştirmek.",
        "Yarın sabaha kadar Visa kartınıza 500 $ saf pasif kazanç olarak geri dönecek.",
        "Kontenjan çok sınırlı, sadece 2 kişi kaldı. Hemen şimdi kripto veya banka havalesi göndererek yerinizi alın!",
      ],
      threatMilestones: [12, 32, 60, 85, 97],
      triggers: [
        "yüksek getirili",
        "%100 kazanç",
        "başlangıç yatırımı",
        "pasif kazanç",
        "Hemen şimdi",
      ],
    },
  ],
  hi: [
    {
      id: "bank",
      name: "नकली बैंक सुरक्षा",
      caller: "संघीय पुलिस / बैंक सुरक्षा",
      speech: [
        "नमस्ते! मैं वित्तीय अपराध इकाई से डिटेक्टिव मिलर हूँ, आपके खाते के बारे में कॉल कर रहा हूँ।",
        "हमें किसी अज्ञात डिवाइस से 1,500 डॉलर का अनधिकृत ट्रांसफर प्रयास मिला है।",
        "आपकी राशि की सुरक्षा के लिए हमें आपके बाकी फंड को हमारे अस्थायी सुरक्षित वॉल्ट में ट्रांसफर करना होगा।",
        "ट्रांसफर की अनुमति के लिए कृपया वह एक-बार वाला वेरिफिकेशन कोड दें जो हमने अभी आपके फोन पर भेजा है।",
        "फोन मत काटिए या किसी से बात मत कीजिए, नहीं तो साइबर अपराधियों की मदद करने के लिए आप कानूनी रूप से ज़िम्मेदार होंगे।",
      ],
      threatMilestones: [15, 40, 65, 88, 98],
      triggers: [
        "वित्तीय अपराध",
        "अनधिकृत ट्रांसफर",
        "सुरक्षित वॉल्ट",
        "वेरिफिकेशन कोड",
        "कानूनी रूप से",
      ],
    },
    {
      id: "delivery",
      name: "पार्सल डिलीवरी फ़िशिंग",
      caller: "कूरियर सेवा स्वचालित बॉट",
      speech: [
        "नमस्ते, अपार्टमेंट नंबर अधूरा होने के कारण आपकी पार्सल डिलीवरी रोक दी गई है।",
        "पार्सल फिलहाल हमारे सॉर्टिंग सेंटर में है, और कल से वापसी शुल्क लागू होगा।",
        "कृपया तुरंत trustnode-tracking-secure.com/id824 पर जाएँ और 1.50 डॉलर का छोटा सत्यापन शुल्क दें।",
        "स्वामित्व सत्यापित करने के लिए आपको अपना क्रेडिट कार्ड विवरण और पूरा बिलिंग पता देना होगा।",
        "2 घंटे के भीतर सत्यापन न करने पर पार्सल अपने आप नष्ट कर दिया जाएगा।",
      ],
      threatMilestones: [10, 25, 55, 82, 95],
      triggers: [
        "रोक दी",
        "trustnode-tracking-secure.com",
        "सत्यापन शुल्क",
        "क्रेडिट कार्ड",
        "नष्ट",
      ],
    },
    {
      id: "investment",
      name: "VIP क्रिप्टो निवेश",
      caller: "TrustCapital के वरिष्ठ ब्रोकर",
      speech: [
        "नमस्ते! बधाई हो, आपकी प्रोफ़ाइल हमारे विशेष उच्च-रिटर्न VIP स्तर के लिए चुनी गई है।",
        "हमारा स्वामित्व वाला AI न्यूरल सॉफ्टवेयर आधुनिक क्रिप्टो डेरिवेटिव पर 100% जीत दर की गारंटी देता है।",
        "आपको बस आज 100 डॉलर का त्वरित प्रारंभिक जमा करना है ताकि आपका प्रीमियम टर्मिनल सक्रिय हो जाए।",
        "कल सुबह तक आपको 500 डॉलर का शुद्ध निष्क्रिय लाभ सीधे आपके Visa कार्ड पर मिलेगा।",
        "सीटें बहुत सीमित हैं, केवल 2 बची हैं। अपनी सीट पाने के लिए अभी क्रिप्टो या बैंक ट्रांसफर भेजें!",
      ],
      threatMilestones: [12, 32, 60, 85, 97],
      triggers: [
        "उच्च-रिटर्न",
        "100% जीत दर",
        "प्रारंभिक जमा",
        "निष्क्रिय लाभ",
        "अभी",
      ],
    },
  ],
  ar: [
    {
      id: "bank",
      name: "أمان مصرفي مزيف",
      caller: "الشرطة الفيدرالية / أمن البنك",
      speech: [
        "مرحباً! أنا المحقق ميلر من وحدة الجرائم المالية، أتصل بشأن حسابك.",
        "رصدنا محاولة تحويل غير مصرح به بمبلغ 1500 دولار من جهاز غير معروف.",
        "لحماية رصيدك يجب علينا تحويل أموالك المتبقية إلى الخزنة الآمنة المؤقتة لدينا.",
        "يرجى تزويدنا برمز التحقق لمرة واحدة الذي أرسلناه للتو إلى هاتفك لتأكيد التحويل.",
        "لا تغلق الخط ولا تتحدث مع أحد، وإلا ستتحمل مسؤولية قانونية عن مساعدة مجرمي الإنترنت.",
      ],
      threatMilestones: [15, 40, 65, 88, 98],
      triggers: [
        "الجرائم المالية",
        "تحويل غير مصرح",
        "الخزنة الآمنة",
        "رمز التحقق",
        "مسؤولية قانونية",
      ],
    },
    {
      id: "delivery",
      name: "التصيد عبر توصيل الطرود",
      caller: "بوت خدمة التوصيل الآلي",
      speech: [
        "مرحباً، تم تعليق توصيل طردك بسبب رقم شقة غير مكتمل.",
        "الطرد محفوظ حالياً في مركز الفرز لدينا، وستُطبق رسوم إعادة الإرسال ابتداءً من الغد.",
        "يرجى زيارة trustnode-tracking-secure.com/id824 فوراً لدفع رسوم تحقق صغيرة قدرها 1.50 دولار.",
        "ستحتاج إلى إدخال تفاصيل بطاقتك الائتمانية وعنوان الفوترة الكامل للتحقق من الملكية.",
        "إذا لم تتحقق من الملكية خلال ساعتين، فسيتم إتلاف الطرد تلقائياً.",
      ],
      threatMilestones: [10, 25, 55, 82, 95],
      triggers: [
        "تعليق",
        "trustnode-tracking-secure.com",
        "رسوم تحقق",
        "بطاقتك الائتمانية",
        "إتلاف",
      ],
    },
    {
      id: "investment",
      name: "استثمار عملات رقمية VIP",
      caller: "وسيط أول في TrustCapital",
      speech: [
        "مرحباً! تهانينا، تم اختيار حسابك لمستوانا الحصري VIP عالي العائد.",
        "برنامجنا الحصري بالذكاء الاصطناعي يضمن نسبة ربح 100% في مشتقات العملات الرقمية الحديثة.",
        "كل ما عليك هو إيداع مبلغ 100 دولار اليوم لتفعيل محطتك المميزة.",
        "بحلول صباح الغد ستحصل على 500 دولار من الأرباح السلبية الصافية مباشرة على بطاقة فيزا الخاصة بك.",
        "المقاعد محدودة للغاية، بقي مقعدان فقط. أرسل التحويل الآن لتأمين مقعدك!",
      ],
      threatMilestones: [12, 32, 60, 85, 97],
      triggers: [
        "عالي العائد",
        "نسبة ربح 100%",
        "إيداع",
        "الأرباح السلبية",
        "الآن",
      ],
    },
  ],
  pt: [
    {
      id: "bank",
      name: "Falsa segurança bancária",
      caller: "Polícia Federal / Segurança do Banco",
      speech: [
        "Olá! Aqui é o detetive Miller da Unidade de Crimes Financeiros, ligando a respeito da sua conta.",
        "Detectamos uma tentativa de transferência não autorizada de 1.500 dólares a partir de um dispositivo desconhecido.",
        "Para proteger o seu saldo, precisamos transferir seus fundos restantes para o nosso cofre temporário protegido.",
        "Por favor, forneça o código de verificação de uso único que acabamos de enviar ao seu celular para autorizar a transferência.",
        "Não desligue nem fale com ninguém, ou você será legalmente responsabilizado por ajudar criminosos cibernéticos.",
      ],
      threatMilestones: [15, 40, 65, 88, 98],
      triggers: [
        "Crimes Financeiros",
        "transferência não autorizada",
        "cofre",
        "código de verificação",
        "legalmente responsabilizado",
      ],
    },
    {
      id: "delivery",
      name: "Phishing de entrega de pacotes",
      caller: "Bot automatizado do serviço de entregas",
      speech: [
        "Olá, a entrega do seu pacote foi suspensa devido a um número de apartamento incompleto.",
        "O pacote está retido no nosso centro de triagem e taxas de devolução serão aplicadas a partir de amanhã.",
        "Acesse agora trustnode-tracking-secure.com/id824 para pagar a pequena taxa de verificação de 1,50 dólar.",
        "Você precisará informar os dados do seu cartão de crédito e o endereço de cobrança completo para verificar a propriedade.",
        "Se a verificação não for feita em 2 horas, o pacote será destruído automaticamente.",
      ],
      threatMilestones: [10, 25, 55, 82, 95],
      triggers: [
        "suspensa",
        "trustnode-tracking-secure.com",
        "taxa de verificação",
        "cartão de crédito",
        "destruído",
      ],
    },
    {
      id: "investment",
      name: "Investimento VIP em cripto",
      caller: "Corretor sênior da TrustCapital",
      speech: [
        "Olá! Parabéns, seu perfil foi selecionado para o nosso nível VIP exclusivo de alto retorno.",
        "Nosso software proprietário de IA garante 100% de taxa de acerto em derivativos cripto modernos.",
        "Você só precisa fazer um depósito inicial rápido de 100 dólares hoje para ativar seu terminal premium.",
        "Até amanhã de manhã, você receberá 500 dólares em lucro passivo puro direto no seu cartão Visa.",
        "As vagas são limitadas, restam apenas 2. Envie a transferência cripto ou bancária agora mesmo para garantir a sua!",
      ],
      threatMilestones: [12, 32, 60, 85, 97],
      triggers: [
        "alto retorno",
        "100% de taxa de acerto",
        "depósito inicial",
        "lucro passivo",
        "agora mesmo",
      ],
    },
  ],
  fr: [
    {
      id: "bank",
      name: "Fausse sécurité bancaire",
      caller: "Police fédérale / Sécurité bancaire",
      speech: [
        "Bonjour ! Ici l'inspecteur Miller de la brigade des délits financiers, à propos de votre compte.",
        "Nous avons détecté une tentative de virement non autorisé de 1 500 dollars depuis un appareil inconnu.",
        "Pour protéger votre solde, nous devons transférer vos fonds restants vers notre coffre sécurisé temporaire.",
        "Merci de nous communiquer le code de vérification à usage unique que nous venons de vous envoyer par SMS pour autoriser le virement.",
        "Ne raccrochez pas et ne parlez à personne, sinon vous serez tenu légalement responsable d'aide à des cybercriminels.",
      ],
      threatMilestones: [15, 40, 65, 88, 98],
      triggers: [
        "délits financiers",
        "virement non autorisé",
        "coffre sécurisé",
        "code de vérification",
        "légalement responsable",
      ],
    },
    {
      id: "delivery",
      name: "Hameçonnage de livraison",
      caller: "Bot automatisé du service de livraison",
      speech: [
        "Bonjour, la livraison de votre colis a été suspendue en raison d'un numéro d'appartement incomplet.",
        "Le colis est conservé dans notre centre de tri et des frais de renvoi s'appliqueront à partir de demain.",
        "Veuillez vous rendre immédiatement sur trustnode-tracking-secure.com/id824 pour régler les frais de vérification de 1,50 dollar.",
        "Vous devrez saisir les coordonnées de votre carte bancaire et votre adresse de facturation complète pour vérifier la propriété.",
        "Si la vérification n'est pas effectuée sous 2 heures, le colis sera automatiquement détruit.",
      ],
      threatMilestones: [10, 25, 55, 82, 95],
      triggers: [
        "suspendue",
        "trustnode-tracking-secure.com",
        "frais de vérification",
        "carte bancaire",
        "détruit",
      ],
    },
    {
      id: "investment",
      name: "Investissement crypto VIP",
      caller: "Courtier senior chez TrustCapital",
      speech: [
        "Bonjour ! Félicitations, votre profil a été sélectionné pour notre niveau VIP exclusif à haut rendement.",
        "Notre logiciel d'IA propriétaire garantit un taux de réussite de 100 % sur les dérivés crypto modernes.",
        "Il vous suffit d'effectuer aujourd'hui un dépôt initial rapide de 100 dollars pour activer votre terminal premium.",
        "D'ici demain matin, vous recevrez 500 dollars de profit passif pur directement sur votre carte Visa.",
        "Les places sont très limitées, il n'en reste que 2. Envoyez le virement crypto ou bancaire maintenant pour réserver la vôtre !",
      ],
      threatMilestones: [12, 32, 60, 85, 97],
      triggers: [
        "haut rendement",
        "taux de réussite de 100 %",
        "dépôt initial",
        "profit passif",
        "maintenant",
      ],
    },
  ],
  de: [
    {
      id: "bank",
      name: "Falsche Bankensicherheit",
      caller: "Bundespolizei / Bankensicherheit",
      speech: [
        "Hallo! Hier ist Detective Miller von der Abteilung für Finanzkriminalität, ich rufe wegen Ihres Kontos an.",
        "Wir haben einen nicht autorisierten Überweisungsversuch über 1.500 $ von einem unbekannten Gerät festgestellt.",
        "Um Ihr Guthaben zu schützen, müssen wir Ihre restlichen Mittel in unseren temporären gesicherten Tresor überweisen.",
        "Bitte nennen Sie uns den Einmal-Code, den wir Ihnen soeben per SMS gesendet haben, um die Überweisung zu bestätigen.",
        "Legen Sie nicht auf und sprechen Sie mit niemandem, sonst werden Sie für die Unterstützung von Cyberkriminellen rechtlich haftbar gemacht.",
      ],
      threatMilestones: [15, 40, 65, 88, 98],
      triggers: [
        "Finanzkriminalität",
        "nicht autorisierten Überweisungsversuch",
        "gesicherten Tresor",
        "Einmal-Code",
        "rechtlich haftbar",
      ],
    },
    {
      id: "delivery",
      name: "Paketlieferung-Phishing",
      caller: "Automatisierter Kurierdienst-Bot",
      speech: [
        "Hallo, die Zustellung Ihres Pakets wurde wegen einer unvollständigen Wohnungsnummer ausgesetzt.",
        "Das Paket liegt in unserem Sortierzentrum, und ab morgen fallen Rücksendegebühren an.",
        "Bitte rufen Sie sofort trustnode-tracking-secure.com/id824 auf und zahlen Sie die kleine Verifizierungsgebühr von 1,50 $.",
        "Sie müssen Ihre Kreditkartendaten und Ihre vollständige Rechnungsadresse eingeben, um das Eigentum zu bestätigen.",
        "Wenn Sie das Eigentum nicht innerhalb von 2 Stunden bestätigen, wird das Paket automatisch vernichtet.",
      ],
      threatMilestones: [10, 25, 55, 82, 95],
      triggers: [
        "ausgesetzt",
        "trustnode-tracking-secure.com",
        "Verifizierungsgebühr",
        "Kreditkartendaten",
        "vernichtet",
      ],
    },
    {
      id: "investment",
      name: "VIP-Krypto-Investition",
      caller: "Senior-Broker bei TrustCapital",
      speech: [
        "Hallo! Herzlichen Glückwunsch, Ihr Profil wurde für unsere exklusive VIP-Stufe mit hoher Rendite ausgewählt.",
        "Unsere eigene KI-Software garantiert eine Gewinnquote von 100 % bei modernen Krypto-Derivaten.",
        "Sie müssen nur heute eine schnelle Ersteinzahlung von 100 $ leisten, um Ihr Premium-Terminal zu aktivieren.",
        "Bis morgen früh erhalten Sie 500 $ reinen passiven Gewinn direkt auf Ihre Visa-Karte.",
        "Die Plätze sind stark begrenzt, es sind nur noch 2 frei. Senden Sie jetzt sofort die Krypto- oder Banküberweisung, um Ihren Platz zu sichern!",
      ],
      threatMilestones: [12, 32, 60, 85, 97],
      triggers: [
        "hoher Rendite",
        "Gewinnquote von 100 %",
        "Ersteinzahlung",
        "passiven Gewinn",
        "jetzt sofort",
      ],
    },
  ],
  ja: [
    {
      id: "bank",
      name: "偽の銀行セキュリティ",
      caller: "連邦警察 / 銀行セキュリティ",
      speech: [
        "こんにちは！金融犯罪対策ユニットのミラー刑事です。あなたの口座についてご連絡しました。",
        "未知のデバイスから 1,500 ドルの不正送金の試みを検知しました。",
        "残高を保護するため、残りの資金を当行の一時的な安全な保管口座へ移す必要があります。",
        "送金を承認するため、先ほどお客様の携帯に送信したワンタイム認証コードをお知らせください。",
        "電話を切らず誰にも話さないでください。サイバー犯罪者を助けた場合、法的責任を負うことになります。",
      ],
      threatMilestones: [15, 40, 65, 88, 98],
      triggers: [
        "金融犯罪",
        "不正送金",
        "安全な保管口座",
        "認証コード",
        "法的責任",
      ],
    },
    {
      id: "delivery",
      name: "荷物配達フィッシング",
      caller: "配達サービス自動ボット",
      speech: [
        "こんにちは。部屋番号が不完全なため、お荷物の配達を一時停止しました。",
        "荷物は現在仕分けセンターに保管されており、明日から返送料が発生します。",
        "すぐに trustnode-tracking-secure.com/id824 にアクセスし、1.50 ドルの少額の確認手数料をお支払いください。",
        "所有権を確認するため、クレジットカード情報と請求先住所の入力をお願いします。",
        "2 時間以内に確認が完了しない場合、荷物は自動的に破棄されます。",
      ],
      threatMilestones: [10, 25, 55, 82, 95],
      triggers: [
        "一時停止",
        "trustnode-tracking-secure.com",
        "確認手数料",
        "クレジットカード",
        "破棄",
      ],
    },
    {
      id: "investment",
      name: "VIP 暗号資産投資",
      caller: "TrustCapital 上級ブローカー",
      speech: [
        "こんにちは！おめでとうございます。あなたのアカウントが、当社の高利回り VIP 枠に選ばれました。",
        "当社独自の AI ニューラルソフトウェアは、最新の暗号資産デリバティブで 100% の勝率を保証します。",
        "今日 100 ドルの初期入金を行うだけで、プレミアムターミナルが有効になります。",
        "明朝までに 500 ドルの純粋な受動的利益が Visa カードに直接振り込まれます。",
        "席は非常に限られており、残り 2 枠です。今すぐ送金して席を確保してください！",
      ],
      threatMilestones: [12, 32, 60, 85, 97],
      triggers: [
        "高利回り",
        "100% の勝率",
        "初期入金",
        "受動的利益",
        "今すぐ",
      ],
    },
  ],
};

// Map default scenarios for languages not defined to EN
const getScenarios = (lang: LanguageCode): Scenario[] => {
  return SCENARIOS_BY_LANG[lang] || SCENARIOS_BY_LANG.en;
};

const LAYER_LABELS_BY_LANG: Partial<Record<LanguageCode, string[]>> = {
  ru: [
    "Слой 1: Акустический анализ (голос, интонации, темп речи) — работает",
    "Слой 2: ML-классификация rubert-tiny2 (текст и метаданные) — работает",
    "Слой 3: Распознавание речи (ASR) — Roadmap",
    "Слой 4: Семантический анализ содержания — Roadmap",
    "Слой 5: Репутационный контур (PCD) — Roadmap",
    "Слой 6: Сверка с базой номеров — Roadmap",
    "Слой 7: Консенсус и итоговый вердикт — работает"
  ],
  en: [
    "Layer 1: Acoustic Analysis (voice, intonation, speech rate) — live",
    "Layer 2: ML Classification rubert-tiny2 (text & metadata) — live",
    "Layer 3: Speech Recognition (ASR) — Roadmap",
    "Layer 4: Semantic Content Analysis — Roadmap",
    "Layer 5: Reputation Loop (PCD) — Roadmap",
    "Layer 6: Local Number Database Check — Roadmap",
    "Layer 7: Consensus & Final Verdict — live"
  ],
  es: [
    "Capa 1: Análisis acústico (voz, entonación, ritmo del habla) — activo",
    "Capa 2: Clasificación ML rubert-tiny2 (texto y metadatos) — activa",
    "Capa 3: Reconocimiento de voz (ASR) — Roadmap",
    "Capa 4: Análisis semántico del contenido — Roadmap",
    "Capa 5: Contorno de reputación (PCD) — Roadmap",
    "Capa 6: Verificación contra la base de números — Roadmap",
    "Capa 7: Consenso y veredicto final — activo"
  ],
  zh: [
    "第 1 层：声学分析（语音、语调、语速）— 已运行",
    "第 2 层：ML 分类 rubert-tiny2（文本与元数据）— 已运行",
    "第 3 层：语音识别（ASR）— Roadmap",
    "第 4 层：语义内容分析 — Roadmap",
    "第 5 层：声誉评估环（PCD）— Roadmap",
    "第 6 层：号码库比对 — Roadmap",
    "第 7 层：共识与最终裁决 — 已运行"
  ],
  tr: [
    "Katman 1: Akustik Analiz (ses, tonlama, konuşma hızı) — aktif",
    "Katman 2: ML Sınıflandırma rubert-tiny2 (metin ve meta veriler) — aktif",
    "Katman 3: Konuşma Tanıma (ASR) — Roadmap",
    "Katman 4: İçeriğin Semantik Analizi — Roadmap",
    "Katman 5: İtibar Döngüsü (PCD) — Roadmap",
    "Katman 6: Numara Veritabanı Kontrolü — Roadmap",
    "Katman 7: Konsensüs ve Nihai Karar — aktif"
  ],
  hi: [
    "परत 1: ध्वनिक विश्लेषण (आवाज़, स्वर, भाषण गति) — सक्रिय",
    "परत 2: ML वर्गीकरण rubert-tiny2 (टेक्स्ट और मेटाडेटा) — सक्रिय",
    "परत 3: वाक् पहचान (ASR) — Roadmap",
    "परत 4: सामग्री का सिमेंटिक विश्लेषण — Roadmap",
    "परत 5: प्रतिष्ठा लूप (PCD) — Roadmap",
    "परत 6: नंबर डेटाबेस से जाँच — Roadmap",
    "परत 7: सर्वसम्मति और अंतिम निर्णय — सक्रिय"
  ],
  ar: [
    "الطبقة 1: التحليل الصوتي (الصوت، التنغيم، سرعة الكلام) — نشط",
    "الطبقة 2: تصنيف التعلم الآلي rubert-tiny2 (النص والبيانات الوصفية) — نشط",
    "الطبقة 3: التعرف على الكلام (ASR) — Roadmap",
    "الطبقة 4: التحليل الدلالي للمحتوى — Roadmap",
    "الطبقة 5: حلقة السمعة (PCD) — Roadmap",
    "الطبقة 6: التحقق من قاعدة الأرقام — Roadmap",
    "الطبقة 7: الإجماع والحكم النهائي — نشط"
  ],
  pt: [
    "Camada 1: Análise acústica (voz, entonação, ritmo da fala) — ativa",
    "Camada 2: Classificação ML rubert-tiny2 (texto e metadados) — ativa",
    "Camada 3: Reconhecimento de fala (ASR) — Roadmap",
    "Camada 4: Análise semântica do conteúdo — Roadmap",
    "Camada 5: Circuito de reputação (PCD) — Roadmap",
    "Camada 6: Verificação na base de números — Roadmap",
    "Camada 7: Consenso e veredito final — ativo"
  ],
  fr: [
    "Couche 1 : Analyse acoustique (voix, intonation, rythme de parole) — active",
    "Couche 2 : Classification ML rubert-tiny2 (texte et métadonnées) — active",
    "Couche 3 : Reconnaissance vocale (ASR) — Roadmap",
    "Couche 4 : Analyse sémantique du contenu — Roadmap",
    "Couche 5 : Boucle de réputation (PCD) — Roadmap",
    "Couche 6 : Vérification dans la base de numéros — Roadmap",
    "Couche 7 : Consensus et verdict final — actif"
  ],
  de: [
    "Ebene 1: Akustische Analyse (Stimme, Intonation, Sprechtempo) — aktiv",
    "Ebene 2: ML-Klassifikation rubert-tiny2 (Text & Metadaten) — aktiv",
    "Ebene 3: Spracherkennung (ASR) — Roadmap",
    "Ebene 4: Semantische Inhaltsanalyse — Roadmap",
    "Ebene 5: Reputationsschleife (PCD) — Roadmap",
    "Ebene 6: Abgleich mit der Nummerndatenbank — Roadmap",
    "Ebene 7: Konsens und endgültiges Urteil — aktiv"
  ],
  ja: [
    "第1レイヤー：音響解析（声・イントネーション・話す速さ）— 稼働中",
    "第2レイヤー：ML分類 rubert-tiny2（テキストとメタデータ）— 稼働中",
    "第3レイヤー：音声認識（ASR）— Roadmap",
    "第4レイヤー：内容の意味解析 — Roadmap",
    "第5レイヤー：評判ループ（PCD）— Roadmap",
    "第6レイヤー：番号データベース照合 — Roadmap",
    "第7レイヤー：コンセンサスと最終判定 — 稼働中"
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
      "[ALERT] Слои анализа зафиксировали критические аномалии угрозы.",
      "[SUCCESS] Локальная база SQLCipher заблокирована на запись во избежание сброса.",
      "[BLOCKED] KIRA: Итоговый вердикт: блокировка входящего воздействия.",
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
      "[ALERT] Analysis layers detected critical threat anomalies.",
      "[SUCCESS] Core SQLCipher user state secured to prevent tampering.",
      "[BLOCKED] KIRA: Final verdict: block the incoming interaction.",
      "[DOME HARDENED] Threat neutralized. Call memory flushed. Core systems secure."
    ]
  },
  es: {
    scanning: [
      "[OK] Códec de audio OPUS activo. Enrutando la voz directamente a la RAM local segura.",
      "[INFO] Inicializando el clasificador Rubert-tiny2 en la sandbox del dispositivo.",
      "[OK] Calibrando la acústica ambiente. Cancelación de ruido: Activa.",
      "[INFO] Escaneando el espectro de frecuencias en busca de señales de clonación de voz con IA...",
    ],
    done: [
      "[ALERT] Las capas de análisis detectaron anomalías de amenaza críticas.",
      "[SUCCESS] El estado protegido de SQLCipher fue asegurado para evitar manipulaciones.",
      "[BLOCKED] KIRA: Veredicto final: bloquear la interacción entrante.",
      "[DOME HARDENED] Amenaza neutralizada. Memoria de la llamada purgada. Sistemas principales seguros.",
    ],
  },
  zh: {
    scanning: [
      "[OK] OPUS 语音编解码器已激活。语音数据正直接路由至本地安全内存。",
      "[INFO] 正在设备沙盒内初始化 Rubert-tiny2 分类器。",
      "[OK] 正在校准环境声学参数。降噪：已启用。",
      "[INFO] 正在扫描频谱，检测 AI 语音克隆特征...",
    ],
    done: [
      "[ALERT] 分析层检测到严重威胁异常。",
      "[SUCCESS] 核心 SQLCipher 用户状态已锁定，防止被篡改。",
      "[BLOCKED] KIRA：最终裁决：拦截本次交互。",
      "[DOME HARDENED] 威胁已消除。通话内存已清除。核心系统安全。",
    ],
  },
  tr: {
    scanning: [
      "[OK] OPUS ses codec'i etkin. Ses verisi doğrudan yerel güvenli RAM'e yönlendiriliyor.",
      "[INFO] Cihaz sandbox'ında Rubert-tiny2 sınıflandırıcısı başlatılıyor.",
      "[OK] Ortam akustiği kalibre ediliyor. Gürültü engelleme: Aktif.",
      "[INFO] Yapay zeka ses klonlama imzaları için frekans spektrumu taranıyor...",
    ],
    done: [
      "[ALERT] Analiz katmanları kritik tehdit anormallikleri tespit etti.",
      "[SUCCESS] Kurcalamayı önlemek için temel SQLCipher kullanıcı durumu güvence altına alındı.",
      "[BLOCKED] KIRA: Nihai karar: gelen etkileşimi engelle.",
      "[DOME HARDENED] Tehdit etkisiz hale getirildi. Arama belleği temizlendi. Çekirdek sistemler güvende.",
    ],
  },
  hi: {
    scanning: [
      "[OK] OPUS ऑडियो स्ट्रीम कोडेक सक्रिय। आवाज़ का डेटा सीधे स्थानीय सुरक्षित RAM में भेजा जा रहा है।",
      "[INFO] डिवाइस सैंडबॉक्स में Rubert-tiny2 क्लासिफायर आरंभ हो रहा है।",
      "[OK] परिवेशीय ध्वनिकी कैलिब्रेट की जा रही है। शोर रद्दीकरण: सक्रिय।",
      "[INFO] AI आवाज़ क्लोनिंग संकेतों के लिए आवृत्ति स्पेक्ट्रम स्कैन हो रहा है...",
    ],
    done: [
      "[ALERT] विश्लेषण परतों ने गंभीर खतरे की असामान्यताएँ पाईं।",
      "[SUCCESS] छेड़छाड़ रोकने के लिए मुख्य SQLCipher उपयोगकर्ता स्थिति सुरक्षित कर दी गई।",
      "[BLOCKED] KIRA: अंतिम निर्णय: आने वाले संवाद को ब्लॉक करें।",
      "[DOME HARDENED] खतरा निष्प्रभावी। कॉल मेमोरी साफ़ की गई। मुख्य सिस्टम सुरक्षित।",
    ],
  },
  ar: {
    scanning: [
      "[OK] مشفر صوت OPUS نشط. يتم توجيه بيانات الصوت مباشرة إلى ذاكرة الوصول العشوائي الآمنة المحلية.",
      "[INFO] تهيئة مصنف Rubert-tiny2 داخل صندوق الرمل الخاص بالجهاز.",
      "[OK] معايرة الخصائص الصوتية للمحيط. إلغاء الضوضاء: نشط.",
      "[INFO] فحص طيف الترددات بحثاً عن بصمات استنساخ الصوت بالذكاء الاصطناعي...",
    ],
    done: [
      "[ALERT] رصدت طبقات التحليل شذوذاً حرجاً في التهديد.",
      "[SUCCESS] تم تأمين حالة مستخدم SQLCipher الأساسية لمنع العبث.",
      "[BLOCKED] KIRA: الحكم النهائي: حظر التفاعل الوارد.",
      "[DOME HARDENED] تم تحييد التهديد. تم مسح ذاكرة المكالمة. الأنظمة الأساسية آمنة.",
    ],
  },
  pt: {
    scanning: [
      "[OK] Codec de áudio OPUS ativo. Roteando o áudio diretamente para a RAM local segura.",
      "[INFO] Inicializando o classificador Rubert-tiny2 dentro da sandbox do dispositivo.",
      "[OK] Calibrando a acústica do ambiente. Cancelamento de ruído: Ativo.",
      "[INFO] Escaneando o espectro de frequências em busca de assinaturas de clonagem de voz por IA...",
    ],
    done: [
      "[ALERT] As camadas de análise detectaram anomalias críticas de ameaça.",
      "[SUCCESS] O estado protegido do SQLCipher foi garantido para evitar adulterações.",
      "[BLOCKED] KIRA: Veredito final: bloquear a interação recebida.",
      "[DOME HARDENED] Ameaça neutralizada. Memória da chamada limpa. Sistemas principais seguros.",
    ],
  },
  fr: {
    scanning: [
      "[OK] Codec audio OPUS actif. Acheminement de la voix directement vers la RAM sécurisée locale.",
      "[INFO] Initialisation du classifieur Rubert-tiny2 dans la sandbox de l'appareil.",
      "[OK] Calibrage de l'acoustique ambiante. Suppression du bruit : active.",
      "[INFO] Analyse du spectre de fréquences à la recherche de signatures de clonage vocal par IA...",
    ],
    done: [
      "[ALERT] Les couches d'analyse ont détecté des anomalies de menace critiques.",
      "[SUCCESS] L'état protégé SQLCipher a été sécurisé pour empêcher toute altération.",
      "[BLOCKED] KIRA : Verdict final : bloquer l'interaction entrante.",
      "[DOME HARDENED] Menace neutralisée. Mémoire de l'appel purgée. Systèmes principaux sécurisés.",
    ],
  },
  de: {
    scanning: [
      "[OK] OPUS-Audiocodec aktiv. Sprachdaten werden direkt in den lokalen sicheren RAM geleitet.",
      "[INFO] Rubert-tiny2-Klassifikator wird in der Geräte-Sandbox initialisiert.",
      "[OK] Raumakustik wird kalibriert. Geräuschunterdrückung: Aktiv.",
      "[INFO] Frequenzspektrum wird auf KI-Stimmklon-Signaturen gescannt...",
    ],
    done: [
      "[ALERT] Die Analyseeinstanzen haben kritische Bedrohungsanomalien festgestellt.",
      "[SUCCESS] Der geschützte SQLCipher-Benutzerstatus wurde gegen Manipulation gesichert.",
      "[BLOCKED] KIRA: Endgültiges Urteil: eingehende Interaktion blockieren.",
      "[DOME HARDENED] Bedrohung neutralisiert. Anrufspeicher geleert. Kernsysteme sicher.",
    ],
  },
  ja: {
    scanning: [
      "[OK] OPUS 音声ストリームコーデック有効。音声データをローカルの安全な RAM へ直接ルーティングします。",
      "[INFO] デバイスサンドボックス内で Rubert-tiny2 分類器を初期化しています。",
      "[OK] 周囲の音響をキャリブレーション中。ノイズキャンセリング：有効。",
      "[INFO] AI 音声クローン署名を検出するため周波数スペクトルをスキャンしています...",
    ],
    done: [
      "[ALERT] 分析レイヤーが重大な脅威の異常を検出しました。",
      "[SUCCESS] 改ざん防止のため、コア SQLCipher ユーザー状態を保護しました。",
      "[BLOCKED] KIRA: 最終判定：着信インタラクションをブロック。",
      "[DOME HARDENED] 脅威を中和しました。通話メモリを消去。コアシステムは安全です。",
    ],
  },
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
    ru: { start: "Запустить симуляцию", reset: "Сбросить", caller: "Собеседник", incoming: "Входящий вызов...", secure: "СЕССИЯ ЗАЩИЩЕНА", threat: "Шкала угрозы социального инжиниринга", logs: "ЛОГ СИСТЕМЫ ОБОРОНЫ PHANTOM", finished: "СИМУЛЯЦИЯ ЗАВЕРШЕНА // УГРОЗА БЛОКИРОВАНА", warning: "KIRA: ОБНАРУЖЕНА УГРОЗА! ПОВЕСЬТЕ ТРУБКУ!", clickStart: "Нажмите кнопку ниже, чтобы запустить симуляцию голосового потока", statusHeader: "СТАТУС СЛОЕВ ФИЛЬТРАЦИИ PHANTOM 2.0", consoleBadge: "ИНТЕРАКТИВНАЯ ТЕСТОВАЯ КОНСОЛЬ // PHANTOM 2.0", secureLine: "GSM // ЗАЩИЩЕННАЯ ЛИНИЯ", activeStream: "АКТИВНЫЙ ЗВУКОВОЙ ПОТОК", secRamLabel: "ЗАЩИЩЕННАЯ РАМ ТРАНСКРИПЦИЯ", liveParsing: "ЖИВОЙ АНАЛИЗ...", threatFmt: "УРОВЕНЬ УГРОЗЫ", layersActiveFmt: "АКТИВНО", badgeVerified: "ПРОВЕРЕНО", badgeAlert: "ТРЕВОГА", badgeScanning: "СКАНИРОВАНИЕ", badgeStandby: "ОЖИДАНИЕ", interceptPrefix: "Обнаружено фраз угрозы: ", interceptSuffix: ". Consensus вынес решение о блокировке входящего воздействия.", logScan3: "[SCAN] СЛОЙ_3: Лексическое совпадение: \"{t}\"", logWarn4: "[WARN] СЛОЙ_4: Обнаружена схема манипуляции. Вес семантической аномалии: 0.72.", logScan3b: "[SCAN] СЛОЙ_3: Найдено совпадение: \"{t}\"", logCritical5: "[CRITICAL] СЛОЙ_5: Обнаружено давление авторитетом. Враждебные паттерны совпали с вероятностью 94%.", logScan6: "[SCAN] СЛОЙ_6: Фраза \"{t}\" совпадает с сигнатурами из чёрного списка." },
    en: { start: "Start Simulation", reset: "Reset", caller: "Caller", incoming: "Incoming call...", secure: "SESSION SECURED", threat: "Social Engineering Threat Level", logs: "PHANTOM DEFENSE LOG", finished: "SIMULATION COMPLETE // ATTACK BLOCKED", warning: "KIRA: ATTEMPTED FRAUD DETECTED! HANG UP!", clickStart: "Click 'Start Simulation' below to stream voice data packets", statusHeader: "PHANTOM 2.0 DEFENSE LAYER STATUS", consoleBadge: "INTERACTIVE TEST CONSOLE // PHANTOM 2.0", secureLine: "GSM // SECURE LINE", activeStream: "ACTIVE AUDIO WAVE STREAM", secRamLabel: "SECURE_RAM_TRANSCRIPTION", liveParsing: "LIVE PARSING...", threatFmt: "THREAT_LEVEL", layersActiveFmt: "ACTIVE", badgeVerified: "VERIFIED", badgeAlert: "ALERT", badgeScanning: "SCANNING", badgeStandby: "STANDBY", interceptPrefix: "Threat triggers matching: ", interceptSuffix: ". Consensus issued a verdict to block the incoming interaction.", logScan3: "[SCAN] LAYER_3: Lexical match detected phrase: \"{t}\"", logWarn4: "[WARN] LAYER_4: Manipulation scheme detected. Semantic anomaly weight: 0.72.", logScan3b: "[SCAN] LAYER_3: Match found: \"{t}\"", logCritical5: "[CRITICAL] LAYER_5: Authority coercion detected. Hostile dialog patterns matched with 94% probability.", logScan6: "[SCAN] LAYER_6: Phrase \"{t}\" matches blacklisted signatures." },
    es: { start: "Iniciar Simulación", reset: "Reiniciar", caller: "Interlocutor", incoming: "Llamada entrante...", secure: "SESIÓN PROTEGIDA", threat: "Nivel de Amenaza de Ingeniería Social", logs: "REGISTRO DE DEFENSA PHANTOM", finished: "SIMULACIÓN COMPLETADA // ATAQUE BLOQUEADO", warning: "KIRA: ¡FRAUDE DETECTADO! ¡CUELGUE!", clickStart: "Haga clic en 'Iniciar simulación' abajo para transmitir datos de voz", statusHeader: "ESTADO DE CAPAS PHANTOM 2.0", consoleBadge: "CONSOLA DE PRUEBA INTERACTIVA // PHANTOM 2.0", secureLine: "GSM // LÍNEA SEGURA", activeStream: "FLUJO DE AUDIO ACTIVO", secRamLabel: "TRANSCRIPCIÓN EN RAM SEGURA", liveParsing: "ANÁLISIS EN VIVO...", threatFmt: "NIVEL DE AMENAZA", layersActiveFmt: "ACTIVAS", badgeVerified: "VERIFICADO", badgeAlert: "ALERTA", badgeScanning: "ESCANEANDO", badgeStandby: "EN ESPERA", interceptPrefix: "Frases coincidentes: ", interceptSuffix: ". El consenso emitió un veredicto para bloquear la interacción entrante.", logScan3: "[SCAN] CAPA_3: Coincidencia léxica detectada en la frase: \"{t}\"", logWarn4: "[WARN] CAPA_4: Esquema de manipulación detectado. Peso de anomalía semántica: 0.72.", logScan3b: "[SCAN] CAPA_3: Coincidencia encontrada: \"{t}\"", logCritical5: "[CRITICAL] CAPA_5: Coerción de autoridad detectada. Patrones hostiles coinciden con un 94 % de probabilidad.", logScan6: "[SCAN] CAPA_6: La frase \"{t}\" coincide con firmas en lista negra." },
    zh: { start: "开始模拟", reset: "重置", caller: "对方", incoming: "来电中...", secure: "会话已加密保护", threat: "社交工程威胁级别", logs: "PHANTOM 防御日志", finished: "模拟完成 // 攻击已被拦截", warning: "KIRA：检测到诈骗危险！请立即挂机！", clickStart: "点击下方按钮启动语音流模拟", statusHeader: "PHANTOM 2.0 防御层状态", consoleBadge: "交互式测试终端 // PHANTOM 2.0", secureLine: "GSM // 安全线路", activeStream: "活动音频流", secRamLabel: "安全内存实时转写", liveParsing: "实时解析中...", threatFmt: "威胁等级", layersActiveFmt: "已激活", badgeVerified: "已验证", badgeAlert: "警报", badgeScanning: "扫描中", badgeStandby: "待命", interceptPrefix: "匹配到的威胁短语：", interceptSuffix: "。共识机制已作出拦截本次交互的裁决。", logScan3: "[SCAN] 第3层：检测到词汇匹配短语：\"{t}\"", logWarn4: "[WARN] 第4层：检测到操纵手法。语义异常权重：0.72。", logScan3b: "[SCAN] 第3层：发现匹配：\"{t}\"", logCritical5: "[CRITICAL] 第5层：检测到权威胁迫。敌对对话模式匹配概率为 94%。", logScan6: "[SCAN] 第6层：短语\"{t}\"与黑名单特征匹配。" },
    tr: { start: "Simülasyonu Başlat", reset: "Sıfırla", caller: "Arayan", incoming: "Gelen arama...", secure: "OTURUM GÜVENLİ", threat: "Sosyal Mühendislik Tehdit Seviyesi", logs: "PHANTOM SAVUNMA GÜNLÜĞÜ", finished: "SİMÜLASYON TAMAMLANDI // SALDIRI ENGELLENDİ", warning: "KIRA: DOLANDIRICILIK ALGILANDI! TELEFONU KAPATIN!", clickStart: "Ses veri paketlerini akıtmak için 'Simülasyonu Başlat'a tıklayın", statusHeader: "PHANTOM 2.0 SAVUNMA KATMANI DURUMU", consoleBadge: "ETKİLEŞİMLİ TEST KONSOLU // PHANTOM 2.0", secureLine: "GSM // GÜVENLİ HAT", activeStream: "AKTİF SES AKIŞI", secRamLabel: "GÜVENLİ RAM TRANSKRİPSİ", liveParsing: "CANLI AYRIŞTIRMA...", threatFmt: "TEHDİT SEVİYESİ", layersActiveFmt: "AKTİF", badgeVerified: "DOĞRULANDI", badgeAlert: "ALARM", badgeScanning: "TARANIYOR", badgeStandby: "BEKLEMEDE", interceptPrefix: "Eşleşen tehdit ifadeleri: ", interceptSuffix: ". Konsensüs gelen etkileşimi engelleme kararı verdi.", logScan3: "[SCAN] KATMAN_3: Sözcüksel eşleşme tespit edildi: \"{t}\"", logWarn4: "[WARN] KATMAN_4: Manipülasyon şeması tespit edildi. Anlamsal anormallik ağırlığı: 0.72.", logScan3b: "[SCAN] KATMAN_3: Eşleşme bulundu: \"{t}\"", logCritical5: "[CRITICAL] KATMAN_5: Otorite baskısı tespit edildi. Düşmanca diyalog kalıpları %94 olasılıkla eşleşti.", logScan6: "[SCAN] KATMAN_6: \"{t}\" ifadesi kara listedeki imzalarla eşleşiyor." },
    hi: { start: "सिमुलेशन शुरू करें", reset: "रीसेट करें", caller: "कैलर", incoming: "आने वाली कॉल...", secure: "सत्र सुरक्षित", threat: "सामाजिक इंजीनियरिंग खतरा स्तर", logs: "PHANTOM रक्षा लॉग", finished: "सिमुलेशन पूरा // हमला अवरुद्ध", warning: "KIRA: धोखाधड़ी का पता चला! फोन काटें!", clickStart: "वॉइस स्ट्रीम सिमुलेशन शुरू करने के लिए नीचे क्लिक करें", statusHeader: "PHANTOM 2.0 रक्षा स्तर स्थिति", consoleBadge: "इंटरैक्टिव टेस्ट कंसोल // PHANTOM 2.0", secureLine: "GSM // सुरक्षित लाइन", activeStream: "सक्रिय ऑडियो स्ट्रीम", secRamLabel: "सुरक्षित RAM ट्रांसक्रिप्शन", liveParsing: "लाइव पार्सिंग...", threatFmt: "खतरा स्तर", layersActiveFmt: "सक्रिय", badgeVerified: "सत्यापित", badgeAlert: "चेतावनी", badgeScanning: "स्कैन हो रहा", badgeStandby: "स्टैंडबाय", interceptPrefix: "मिलान वाले खतरे: ", interceptSuffix: "। सर्वसम्मति ने आने वाले संवाद को ब्लॉक करने का निर्णय दिया।", logScan3: "[SCAN] परत_3: शाब्दिक मिलान वाक्यांश मिला: \"{t}\"", logWarn4: "[WARN] परत_4: हेरफेर योजना मिली। शब्दार्थ असामान्यता भार: 0.72।", logScan3b: "[SCAN] परत_3: मिलान मिला: \"{t}\"", logCritical5: "[CRITICAL] परत_5: अधिकार बल प्रयोग मिला। शत्रुतापूर्ण डायलॉग पैटर्न 94% संभावना से मेल खाते हैं।", logScan6: "[SCAN] परत_6: वाक्यांश \"{t}\" ब्लैकलिस्टेड हस्ताक्षरों से मेल खाता है।" },
    ar: { start: "بدء المحاكاة", reset: "إعادة ضبط", caller: "المتصل", incoming: "مكالمة واردة...", secure: "جلسة آمنة", threat: "مستوى تهديد الهندسة الاجتماعية", logs: "سجل دفاع PHANTOM", finished: "اكتملت المحاكاة // تم حظر الهجوم", warning: "KIRA: تم اكتشاف محاولة احتيال! أغلِق الخط!", clickStart: "انقر على زر البدء أدناه لبدء محاكاة تدفق الصوت", statusHeader: "حالة طبقات الحماية PHANTOM 2.0", consoleBadge: "وحدة الاختبار التفاعلية // PHANTOM 2.0", secureLine: "GSM // خط آمن", activeStream: "تدفق صوتي نشط", secRamLabel: "نسخ في الذاكرة الآمنة", liveParsing: "تحليل مباشر...", threatFmt: "مستوى التهديد", layersActiveFmt: "نشطة", badgeVerified: "موثق", badgeAlert: "إنذار", badgeScanning: "فحص", badgeStandby: "استعداد", interceptPrefix: "العبارات المطابقة للتهديد: ", interceptSuffix: ". أصدر الإجماع حكمًا بحظر التفاعل الوارد.", logScan3: "[SCAN] الطبقة_3: تطابق معجمي في العبارة: \"{t}\"", logWarn4: "[WARN] الطبقة_4: تم رصد مخطط تلاعب. وزن الشذوذ الدلالي: 0.72.", logScan3b: "[SCAN] الطبقة_3: تم العثور على تطابق: \"{t}\"", logCritical5: "[CRITICAL] الطبقة_5: تم رصد إكراه بالسلطة. أنماط الحوار العدائية تطابقت بنسبة 94%.", logScan6: "[SCAN] الطبقة_6: العبارة \"{t}\" تطابق بصمات القائمة السوداء." },
    pt: { start: "Iniciar Simulação", reset: "Reiniciar", caller: "Chamador", incoming: "Chamada recebida...", secure: "SESSÃO PROTEGIDA", threat: "Nível de Ameaça de Engenharia Social", logs: "REGISTRO DE DEFESA PHANTOM", finished: "SIMULAÇÃO CONCLUÍDA // ATAQUE BLOQUEADO", warning: "KIRA: FRAUDE DETECTADA! DESLIGUE O TELEFONE!", clickStart: "Clique no botão abaixo para iniciar a simulação de voz", statusHeader: "STATUS DA CAMADA DE DEFESA PHANTOM 2.0", consoleBadge: "CONSOLE DE TESTE INTERATIVO // PHANTOM 2.0", secureLine: "GSM // LINHA SEGURA", activeStream: "FLUXO DE ÁUDIO ATIVO", secRamLabel: "TRANSCRIÇÃO NA RAM SEGURA", liveParsing: "ANÁLISE AO VIVO...", threatFmt: "NÍVEL DE AMEAÇA", layersActiveFmt: "ATIVAS", badgeVerified: "VERIFICADO", badgeAlert: "ALERTA", badgeScanning: "ESCANEANDO", badgeStandby: "EM ESPERA", interceptPrefix: "Frases de ameaça correspondentes: ", interceptSuffix: ". O consenso emitiu um veredito para bloquear a interação recebida.", logScan3: "[SCAN] CAMADA_3: Correspondência lexical detectada na frase: \"{t}\"", logWarn4: "[WARN] CAMADA_4: Esquema de manipulação detectado. Peso de anomalia semântica: 0.72.", logScan3b: "[SCAN] CAMADA_3: Correspondência encontrada: \"{t}\"", logCritical5: "[CRITICAL] CAMADA_5: Coerção de autoridade detectada. Padrões hostis correspondem com 94% de probabilidade.", logScan6: "[SCAN] CAMADA_6: A frase \"{t}\" corresponde a assinaturas na lista negra." },
    fr: { start: "Lancer la simulation", reset: "Réinitialiser", caller: "Appelant", incoming: "Appel entrant...", secure: "SÉANCE SÉCURISÉE", threat: "Niveau de Menace d'Ingénierie Sociale", logs: "JOURNAL DE DÉFENSE PHANTOM", finished: "SIMULATION TERMINÉE // ATTAQUE BLOQUÉE", warning: "KIRA : FRAUDE DÉTECTÉE ! RACCROCHEZ !", clickStart: "Cliquez sur le bouton ci-dessous pour démarrer la simulation", statusHeader: "ÉTAT DES COUCHES PHANTOM 2.0", consoleBadge: "CONSOLE DE TEST INTERACTIVE // PHANTOM 2.0", secureLine: "GSM // LIGNE SÉCURISÉE", activeStream: "FLUX AUDIO ACTIF", secRamLabel: "TRANSCRIPTION RAM SÉCURISÉE", liveParsing: "ANALYSE EN DIRECT...", threatFmt: "NIVEAU DE MENACE", layersActiveFmt: "ACTIVES", badgeVerified: "VÉRIFIÉ", badgeAlert: "ALERTE", badgeScanning: "ANALYSE", badgeStandby: "EN VEILLE", interceptPrefix: "Phrases de menace correspondantes : ", interceptSuffix: ". Le consensus a émis un verdict de blocage de l'interaction entrante.", logScan3: "[SCAN] COUCHE_3 : Correspondance lexicale détectée dans la phrase : \"{t}\"", logWarn4: "[WARN] COUCHE_4 : Schéma de manipulation détecté. Poids d'anomalie sémantique : 0.72.", logScan3b: "[SCAN] COUCHE_3 : Correspondance trouvée : \"{t}\"", logCritical5: "[CRITICAL] COUCHE_5 : Coercition d'autorité détectée. Les schémas hostiles correspondent à 94 % de probabilité.", logScan6: "[SCAN] COUCHE_6 : La phrase \"{t}\" correspond à des signatures en liste noire." },
    de: { start: "Simulation starten", reset: "Zurücksetzen", caller: "Anrufer", incoming: "Eingehender Anruf...", secure: "SITZUNG GESICHERT", threat: "Bedrohungsstufe für Social Engineering", logs: "PHANTOM-ABWEHRLOGBUCH", finished: "SIMULATION ABGESCHLOSSEN // ANGRIFF BLOCKIERT", warning: "KIRA: BETRUGSVERSUCH ERKANNT! AUFLEGEN!", clickStart: "Klicken Sie unten, um die Sprachdatensimulation zu starten", statusHeader: "PHANTOM 2.0 SCHUTZSCHICHT-STATUS", consoleBadge: "INTERAKTIVE TESTKONSOLE // PHANTOM 2.0", secureLine: "GSM // SICHERE LEITUNG", activeStream: "AKTIVER AUDIO-STREAM", secRamLabel: "TRANSCRIPTION IM SICHEREN RAM", liveParsing: "LIVE-ANALYSE...", threatFmt: "BEDROHUNGSSTUFE", layersActiveFmt: "AKTIV", badgeVerified: "GEPRÜFT", badgeAlert: "ALARM", badgeScanning: "SCANNT", badgeStandby: "BEREITSCHAFT", interceptPrefix: "Übereinstimmende Bedrohungsphrasen: ", interceptSuffix: ". Der Konsens fällte das Urteil, die eingehende Interaktion zu blockieren.", logScan3: "[SCAN] EBENE_3: Lexikalische Übereinstimmung erkannt in: \"{t}\"", logWarn4: "[WARN] EBENE_4: Manipulationsschema erkannt. Semantisches Anomaliegewicht: 0.72.", logScan3b: "[SCAN] EBENE_3: Übereinstimmung gefunden: \"{t}\"", logCritical5: "[CRITICAL] EBENE_5: Autoritätsdruck erkannt. Feindliche Dialogmuster mit 94 % Wahrscheinlichkeit.", logScan6: "[SCAN] EBENE_6: Phrase \"{t}\" stimmt mit gelisteten Signaturen überein." },
    ja: { start: "シミュレーション開始", reset: "リセット", caller: "発信者", incoming: "着信中...", secure: "セッション保護中", threat: "ソーシャルエンジニアリング脅威レベル", logs: "PHANTOM防御ログ", finished: "シミュレーション完了 // 攻撃ブロック", warning: "KIRA: 詐欺攻撃を検知！すぐに切断してください！", clickStart: "下のボタンをクリックして音声ストリームを開始してください", statusHeader: "PHANTOM 2.0 防御レイヤーステータス", consoleBadge: "インタラクティブテストコンソール // PHANTOM 2.0", secureLine: "GSM // セキュア回線", activeStream: "アクティブ音声ストリーム", secRamLabel: "セキュアRAM転写", liveParsing: "ライブ解析中...", threatFmt: "脅威レベル", layersActiveFmt: "アクティブ", badgeVerified: "検証済み", badgeAlert: "警告", badgeScanning: "スキャン中", badgeStandby: "待機中", interceptPrefix: "一致する脅威フレーズ: ", interceptSuffix: "。コンセンサスが着信インタラクションをブロックする判定を下しました。", logScan3: "[SCAN] レイヤー_3: 語彙一致フレーズを検出: \"{t}\"", logWarn4: "[WARN] レイヤー_4: 操作スキームを検出。意味的異常ウェイト: 0.72。", logScan3b: "[SCAN] レイヤー_3: 一致を発見: \"{t}\"", logCritical5: "[CRITICAL] レイヤー_5: 権威による強制を検出。敵対的ダイアログパターンが 94% の確率で一致。", logScan6: "[SCAN] レイヤー_6: フレーズ \"{t}\" がブラックリスト署名と一致。" }
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
          `${sui.logScan3.replace("{t}", currentScenario.triggers[0] || "fraud pattern")}`,
        ]);
      }
      if (step === 2) {
        setConsoleLogs(prev => [
          ...prev,
          `${sui.logWarn4}`,
          `${sui.logScan3b.replace("{t}", currentScenario.triggers[1] || "unauthorized")}`
        ]);
      }
      if (step === 3) {
        setConsoleLogs(prev => [
          ...prev,
          `${sui.logCritical5}`,
          `${sui.logScan6.replace("{t}", currentScenario.triggers[2] || "verification code")}`
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
              {sui.consoleBadge}
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
                <span>{sui.secureLine}</span>
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
              <p className="font-mono text-[10px] text-gray-500 mt-1">{isPlaying ? sui.activeStream : incomingLabel}</p>
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
                        SENC-{String(i+1).padStart(2, "0")} // {sui.secRamLabel}
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
                          {sui.liveParsing}
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
                      {sui.interceptPrefix + currentScenario.triggers.slice(0, currentSentenceIdx + 1).length + sui.interceptSuffix}
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
                  {threatLevel}% {sui.threatFmt}
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
                    {activeLayersCount}/7 {sui.layersActiveFmt}
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
                            ? isThreatLayer && threatLevel >= 75 ? sui.badgeAlert : sui.badgeVerified 
                            : isScanning ? sui.badgeScanning : sui.badgeStandby}
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
