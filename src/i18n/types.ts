export interface MobileCard {
  badge: string;
  title: string;
  desc: string;
}

export interface ProblemItem {
  title: string;
  desc: string;
}

export interface LayerItem {
  name: string;
  tech: string;
  desc: string;
}

export interface UspItem {
  title: string;
  desc: string;
}

export interface StatItem {
  val: string;
  label: string;
  desc: string;
}

export interface SocialItem {
  name: string;
  desc: string;
  badge: string;
  action: string;
}

export interface LegalSimpleSection {
  heading: string;
  body: string;
}

export interface LegalNoticeSection {
  heading: string;
  noticeLabel: string;
  noticeBody: string;
}

export interface LegalListSection {
  heading: string;
  intro: string;
  items: string[];
}

export interface LegalContactSection {
  heading: string;
  bodyPrefix: string;
  bodySuffix: string;
}

export interface PageNames {
  home: string;
  "how-it-works": string;
  tech: string;
  about: string;
  download: string;
  "comparison": string;
  "not-found": string;
  roadmap?: string;
  privacy?: string;
  terms?: string;
}

export interface Translations {
  pageNames: PageNames;
  nav: {
    threats: string;
    howItWorks: string;
    security: string;
    earlyAccess: string;
  };
  brand: {
    tagline: string;
    footerTagline: string;
  };
  header: {
    rustore: string;
    radar: string;
    ecoOn: string;
    ecoOff: string;
    seniorOn: string;
    seniorOff: string;
    lang: string;
  };
  hero: {
    badge: string;
    titleSub: string;
    scrollStart: string;
    scrollContinue: string;
    enterDome: string;
  };
  mobileCards: MobileCard[];
  mobileTabLabels: string[];
  replayIntro: string;
  problem: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    items: ProblemItem[];
  };
  how: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    layersHeading: string;
    layers: LayerItem[];
    sevenLayers: LayerItem[];
    btnSimplified: string;
    btnAdvanced: string;
    pipelineHeader: string;
    usp: UspItem[];
  };
  realDev: {
    title: string;
    subtitle: string;
    badge: string;
    devUi: {
      awards: string;
      graph: string;
      core: string;
      recipient: string;
      inst: string;
      event: string;
      nodes: string;
      conns: string;
      specs: string;
      baseArch: string;
      params: string;
      latency: string;
      copied: string;
      copyName: string;
      dlOnnx: string;
    };
    awardDetails: {
      title: string;
      issuer: string;
      institution: string;
      recipient: string;
      event: string;
      desc: string;
      badge: string;
    };
    graphDetails: {
      title: string;
      subtitle: string;
      nodesCount: string;
      edgesCount: string;
      desc: string;
      badge: string;
    };
    onnxDetails: {
      title: string;
      filename: string;
      size: string;
      format: string;
      desc: string;
      badge: string;
    };
  };
  origin: {
    title: string;
    subtitle: string;
    badge: string;
    timeline: Array<{ badge: string; title: string; desc: string }>;
  };
  security: {
    title: string;
    subtitle: string;
    badge: string;
    complianceLabel: string;
    complianceText: string;
    features: Array<{ title: string; desc: string }>;
  };
  kira: {
    title: string;
    subtitle: string;
    badge: string;
    features: Array<{ title: string; desc: string }>;
  };
  explore: {
    title: string;
    subtitle: string;
    card1Title: string;
    card1Badge: string;
    card1Desc: string;
    card1Btn: string;
    card2Title: string;
    card2Badge: string;
    card2Desc: string;
    card2Btn: string;
    card3Title: string;
    card3Badge: string;
    card3Desc: string;
    card3Btn: string;
    card4Title: string;
    card4Badge: string;
    card4Desc: string;
    card4Btn: string;
  };
  trust: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    stats: StatItem[];
  };
  footer: {
    copyright: string;
    privacyLink: string;
    termsLink: string;
    version: string;
    githubOrg: string;
  };
  cookie: {
    badgeLabel: string;
    text: string;
    privacyLinkText: string;
    suffix: string;
    audit: string;
    accept: string;
    reject: string;
  };
  legal: {
    privacyTitle: string;
    termsTitle: string;
    tabPrivacy: string;
    tabTerms: string;
    closeAria: string;
    acknowledge: string;
    privacy: {
      s1: LegalSimpleSection;
      s2: LegalNoticeSection;
      s3: LegalListSection;
      s4: LegalSimpleSection;
      s5: LegalSimpleSection;
      s6: LegalContactSection;
      s7: LegalContactSection;
      date: string;
    };
    terms: {
      s1: LegalSimpleSection;
      s2: LegalNoticeSection;
      s3: LegalSimpleSection;
      s4: LegalSimpleSection;
      s5: LegalSimpleSection;
    };
  };
  assembly: {
    leftPrimary: string;
    leftSub: string;
    rightPrimary: string;
    rightSub: string;
  };
  earlyAccessPage: {
    title: string;
    subtitle: string;
    badge: string;
    back: string;
    rustoreBtn: string;
    githubBtn: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    note: string;
  };
  comparisonPage: {
    title: string;
    subtitle: string;
    badge: string;
    thFeature: string;
    thTrustNode: string;
    thKaspersky: string;
    thNorton: string;
    thBitdefender: string;
    thGoogleSpam: string;
    features: {
      textAnalysis: string;
      voiceAnalysis: string;
      visualAnalysis: string;
      socialEngDetect: string;
      behavioralRasp: string;
      familyDefense: string;
      beaconSystem: string;
      offlineOnDevice: string;
      pricing: string;
    };
    status: {
      yes: string;
      no: string;
      inDev: string;
    };
    pricingValues: {
      trustNode: string;
      kaspersky: string;
      norton: string;
      bitdefender: string;
      googleSpam: string;
    };
    disclaimer: string;
    telegramBtn: string;
  };
  roadmapPage: {
    title: string;
    subtitle: string;
    badge: string;
    readyMvp: string;
    underDevelopment: string;
    conceptualSpec: string;
    tn1Desc: string;
    packageLabel: string;
    coreEngineLabel: string;
    statusLabel: string;
    fullyReady: string;
    sourceGithub: string;
    tn3Desc: string;
    deadlineLabel: string;
    september2026: string;
    phaseLabel: string;
    architecturePhase: string;
    kiraDesc: string;
    designPhase: string;
    coreComponentLabel: string;
    integrationLabel: string;
    ramAddon: string;
    disclosureTitle: string;
    disclosureDesc: string;
    reportTelegram: string;
    reportVk: string;
    reportGithub: string;
    milestonesTitle: string;
    milestones: Array<{ date: string; title: string; desc: string }>;
    allProjectsGithub: string;
  };
}
