export interface RealStar {
  id: string;
  nameEn: string;
  ra: number;  // Hours (0..24)
  dec: number; // Degrees (-90..90)
  mag: number; // Visual magnitude
  constellationCode?: string;
}

export interface ConstellationAsterism {
  code: string;
  nameEn: string;
  lines: [string, string][];
}

// Catalog of ~165 brightest and most famous stars with accurate J2000 RA/Dec coordinates
export const REAL_STARS: RealStar[] = [
  // Ursa Major (UMA)
  { id: "dubhe", nameEn: "Dubhe", ra: 11.062, dec: 61.751, mag: 1.79, constellationCode: "UMA" },
  { id: "merak", nameEn: "Merak", ra: 11.031, dec: 56.382, mag: 2.37, constellationCode: "UMA" },
  { id: "phecda", nameEn: "Phecda", ra: 11.897, dec: 53.695, mag: 2.44, constellationCode: "UMA" },
  { id: "megrez", nameEn: "Megrez", ra: 12.257, dec: 57.032, mag: 3.31, constellationCode: "UMA" },
  { id: "alioth", nameEn: "Alioth", ra: 12.900, dec: 55.960, mag: 1.77, constellationCode: "UMA" },
  { id: "mizar", nameEn: "Mizar", ra: 13.399, dec: 54.925, mag: 2.23, constellationCode: "UMA" },
  { id: "alkaid", nameEn: "Alkaid", ra: 13.792, dec: 49.313, mag: 1.86, constellationCode: "UMA" },
  { id: "alcor", nameEn: "Alcor", ra: 13.421, dec: 54.988, mag: 3.99, constellationCode: "UMA" },

  // Ursa Minor (UMI)
  { id: "polaris", nameEn: "Polaris", ra: 2.530, dec: 89.264, mag: 1.98, constellationCode: "UMI" },
  { id: "kochab", nameEn: "Kochab", ra: 14.845, dec: 74.155, mag: 2.08, constellationCode: "UMI" },
  { id: "pherkad", nameEn: "Pherkad", ra: 15.348, dec: 71.834, mag: 3.05, constellationCode: "UMI" },
  { id: "yildun", nameEn: "Delta UMi", ra: 17.538, dec: 86.586, mag: 4.35, constellationCode: "UMI" },
  { id: "eps_umi", nameEn: "Epsilon UMi", ra: 16.766, dec: 82.036, mag: 4.21, constellationCode: "UMI" },
  { id: "zeta_umi", nameEn: "Zeta UMi", ra: 15.734, dec: 77.794, mag: 4.25, constellationCode: "UMI" },
  { id: "eta_umi", nameEn: "Eta UMi", ra: 16.291, dec: 75.755, mag: 4.95, constellationCode: "UMI" },

  // Orion (ORI)
  { id: "betelgeuse", nameEn: "Betelgeuse", ra: 5.919, dec: 7.407, mag: 0.42, constellationCode: "ORI" },
  { id: "rigel", nameEn: "Rigel", ra: 5.242, dec: -8.201, mag: 0.13, constellationCode: "ORI" },
  { id: "bellatrix", nameEn: "Bellatrix", ra: 5.419, dec: 6.349, mag: 1.64, constellationCode: "ORI" },
  { id: "saiph", nameEn: "Saiph", ra: 5.796, dec: -9.669, mag: 2.07, constellationCode: "ORI" },
  { id: "alnitak", nameEn: "Alnitak", ra: 5.679, dec: -1.942, mag: 1.77, constellationCode: "ORI" },
  { id: "alnilam", nameEn: "Alnilam", ra: 5.603, dec: -1.201, mag: 1.69, constellationCode: "ORI" },
  { id: "mintaka", nameEn: "Mintaka", ra: 5.533, dec: -0.299, mag: 2.23, constellationCode: "ORI" },
  { id: "meissa", nameEn: "Meissa", ra: 5.584, dec: 9.934, mag: 3.39, constellationCode: "ORI" },

  // Cassiopeia (CAS)
  { id: "schedar", nameEn: "Schedar", ra: 0.675, dec: 56.537, mag: 2.24, constellationCode: "CAS" },
  { id: "caph", nameEn: "Caph", ra: 0.153, dec: 59.149, mag: 2.28, constellationCode: "CAS" },
  { id: "gamma_cas", nameEn: "Gamma Cas", ra: 0.945, dec: 60.716, mag: 2.15, constellationCode: "CAS" },
  { id: "ruchbah", nameEn: "Ruchbah", ra: 1.430, dec: 60.235, mag: 2.68, constellationCode: "CAS" },
  { id: "segin", nameEn: "Segin", ra: 1.905, dec: 63.670, mag: 3.35, constellationCode: "CAS" },

  // Cygnus (CYG)
  { id: "deneb", nameEn: "Deneb", ra: 20.690, dec: 45.280, mag: 1.25, constellationCode: "CYG" },
  { id: "albireo", nameEn: "Albireo", ra: 19.512, dec: 27.959, mag: 3.05, constellationCode: "CYG" },
  { id: "sadr", nameEn: "Sadr", ra: 20.370, dec: 40.256, mag: 2.23, constellationCode: "CYG" },
  { id: "gienah", nameEn: "Gienah", ra: 20.771, dec: 33.969, mag: 2.48, constellationCode: "CYG" },
  { id: "delta_cyg", nameEn: "Delta Cygni", ra: 19.749, dec: 45.130, mag: 2.87, constellationCode: "CYG" },

  // Taurus (TAU)
  { id: "aldebaran", nameEn: "Aldebaran", ra: 4.598, dec: 16.509, mag: 0.85, constellationCode: "TAU" },
  { id: "elnath", nameEn: "Elnath", ra: 5.438, dec: 28.607, mag: 1.65, constellationCode: "TAU" },
  { id: "alcyone", nameEn: "Alcyone (Pleiades)", ra: 3.791, dec: 24.105, mag: 2.87, constellationCode: "TAU" },
  { id: "zeta_tau", nameEn: "Zeta Tauri", ra: 5.626, dec: 21.142, mag: 3.01, constellationCode: "TAU" },
  { id: "ain", nameEn: "Ain", ra: 4.477, dec: 19.180, mag: 3.53, constellationCode: "TAU" },

  // Canis Major (CMA)
  { id: "sirius", nameEn: "Sirius", ra: 6.752, dec: -16.716, mag: -1.46, constellationCode: "CMA" },
  { id: "adhara", nameEn: "Adhara", ra: 6.977, dec: -28.972, mag: 1.50, constellationCode: "CMA" },
  { id: "wezen", nameEn: "Wezen", ra: 7.139, dec: -26.393, mag: 1.83, constellationCode: "CMA" },
  { id: "mirzam", nameEn: "Mirzam", ra: 6.378, dec: -17.955, mag: 1.98, constellationCode: "CMA" },
  { id: "aludra", nameEn: "Aludra", ra: 7.401, dec: -29.303, mag: 2.45, constellationCode: "CMA" },

  // Canis Minor (CMI)
  { id: "procyon", nameEn: "Procyon", ra: 7.655, dec: 5.224, mag: 0.38, constellationCode: "CMI" },
  { id: "gomeisa", nameEn: "Gomeisa", ra: 7.453, dec: 8.288, mag: 2.89, constellationCode: "CMI" },

  // Leo (LEO)
  { id: "regulus", nameEn: "Regulus", ra: 10.139, dec: 11.967, mag: 1.36, constellationCode: "LEO" },
  { id: "algieba", nameEn: "Algieba", ra: 10.332, dec: 19.841, mag: 2.01, constellationCode: "LEO" },
  { id: "denebola", nameEn: "Denebola", ra: 11.817, dec: 14.572, mag: 2.14, constellationCode: "LEO" },
  { id: "zosma", nameEn: "Zosma", ra: 11.235, dec: 20.523, mag: 2.56, constellationCode: "LEO" },
  { id: "epsilon_leo", nameEn: "Epsilon Leo", ra: 9.764, dec: 23.774, mag: 2.98, constellationCode: "LEO" },

  // Scorpius (SCO)
  { id: "antares", nameEn: "Antares", ra: 16.490, dec: -26.432, mag: 0.96, constellationCode: "SCO" },
  { id: "shaula", nameEn: "Shaula", ra: 17.560, dec: -37.103, mag: 1.62, constellationCode: "SCO" },
  { id: "sargas", nameEn: "Sargas", ra: 17.623, dec: -42.997, mag: 1.86, constellationCode: "SCO" },
  { id: "dschubba", nameEn: "Dschubba", ra: 16.005, dec: -22.621, mag: 2.29, constellationCode: "SCO" },
  { id: "graffias", nameEn: "Graffias", ra: 16.090, dec: -19.805, mag: 2.56, constellationCode: "SCO" },

  // Pegasus (PEG)
  { id: "enif", nameEn: "Enif", ra: 21.736, dec: 9.875, mag: 2.38, constellationCode: "PEG" },
  { id: "scheat", nameEn: "Scheat", ra: 23.062, dec: 28.082, mag: 2.44, constellationCode: "PEG" },
  { id: "markab", nameEn: "Markab", ra: 23.079, dec: 15.205, mag: 2.49, constellationCode: "PEG" },
  { id: "algenib", nameEn: "Algenib", ra: 0.220, dec: 15.183, mag: 2.84, constellationCode: "PEG" },

  // Andromeda (AND)
  { id: "alpheratz", nameEn: "Alpheratz", ra: 0.139, dec: 29.090, mag: 2.07, constellationCode: "AND" },
  { id: "mirach", nameEn: "Mirach", ra: 1.164, dec: 35.620, mag: 2.07, constellationCode: "AND" },
  { id: "almach", nameEn: "Almach", ra: 2.064, dec: 42.329, mag: 2.10, constellationCode: "AND" },

  // Boötes (BOO)
  { id: "arcturus", nameEn: "Arcturus", ra: 14.261, dec: 19.182, mag: -0.05, constellationCode: "BOO" },
  { id: "izar", nameEn: "Izar", ra: 14.749, dec: 27.074, mag: 2.35, constellationCode: "BOO" },
  { id: "muphrid", nameEn: "Muphrid", ra: 13.911, dec: 18.397, mag: 2.68, constellationCode: "BOO" },
  { id: "seginus", nameEn: "Seginus", ra: 14.534, dec: 38.308, mag: 3.04, constellationCode: "BOO" },

  // Lyra (LYR)
  { id: "vega", nameEn: "Vega", ra: 18.615, dec: 38.783, mag: 0.03, constellationCode: "LYR" },
  { id: "sheliak", nameEn: "Sheliak", ra: 18.835, dec: 33.362, mag: 3.52, constellationCode: "LYR" },
  { id: "sulafat", nameEn: "Sulafat", ra: 18.980, dec: 32.690, mag: 3.25, constellationCode: "LYR" },

  // Aquila (AQL)
  { id: "altair", nameEn: "Altair", ra: 19.846, dec: 8.868, mag: 0.77, constellationCode: "AQL" },
  { id: "tarazed", nameEn: "Tarazed", ra: 19.771, dec: 10.613, mag: 2.72, constellationCode: "AQL" },
  { id: "alshain", nameEn: "Alshain", ra: 19.923, dec: 6.406, mag: 3.71, constellationCode: "AQL" },

  // Auriga (AUR)
  { id: "capella", nameEn: "Capella", ra: 5.278, dec: 45.998, mag: 0.08, constellationCode: "AUR" },
  { id: "menkalinan", nameEn: "Menkalinan", ra: 5.992, dec: 44.946, mag: 1.90, constellationCode: "AUR" },
  { id: "mahsim", nameEn: "Mahsim", ra: 5.990, dec: 37.213, mag: 2.65, constellationCode: "AUR" },

  // Gemini (GEM)
  { id: "pollux", nameEn: "Pollux", ra: 7.755, dec: 28.026, mag: 1.16, constellationCode: "GEM" },
  { id: "castor", nameEn: "Castor", ra: 7.576, dec: 31.888, mag: 1.58, constellationCode: "GEM" },
  { id: "alhena", nameEn: "Alhena", ra: 6.628, dec: 16.399, mag: 1.93, constellationCode: "GEM" },

  // Virgo (VIR)
  { id: "spica", nameEn: "Spica", ra: 13.419, dec: -11.161, mag: 0.98, constellationCode: "VIR" },
  { id: "porrima", nameEn: "Porrima", ra: 12.694, dec: -1.449, mag: 2.74, constellationCode: "VIR" },
  { id: "vindemiatrix", nameEn: "Vindemiatrix", ra: 13.036, dec: 10.959, mag: 2.85, constellationCode: "VIR" },

  // Perseus (PER)
  { id: "mirfak", nameEn: "Mirfak", ra: 3.405, dec: 49.861, mag: 1.79, constellationCode: "PER" },
  { id: "algol", nameEn: "Algol", ra: 3.136, dec: 40.955, mag: 2.09, constellationCode: "PER" },

  // Centaurus (CEN)
  { id: "rigil_kent", nameEn: "Alpha Centauri", ra: 14.660, dec: -60.833, mag: -0.27, constellationCode: "CEN" },
  { id: "hadar", nameEn: "Hadar", ra: 14.063, dec: -60.373, mag: 0.61, constellationCode: "CEN" },
  { id: "menkent", nameEn: "Menkent", ra: 14.111, dec: -36.369, mag: 2.06, constellationCode: "CEN" },

  // Crux (CRU)
  { id: "acrux", nameEn: "Acrux", ra: 12.443, dec: -63.099, mag: 0.77, constellationCode: "CRU" },
  { id: "mimosa", nameEn: "Mimosa", ra: 12.795, dec: -59.688, mag: 1.25, constellationCode: "CRU" },
  { id: "gacrux", nameEn: "Gacrux", ra: 12.519, dec: -57.113, mag: 1.64, constellationCode: "CRU" },

  // Sagittarius (SGR)
  { id: "kaus_aus", nameEn: "Kaus Australis", ra: 18.402, dec: -34.384, mag: 1.79, constellationCode: "SGR" },
  { id: "nunki", nameEn: "Nunki", ra: 18.921, dec: -26.296, mag: 2.05, constellationCode: "SGR" },
  { id: "ascella", nameEn: "Ascella", ra: 19.043, dec: -29.880, mag: 2.60, constellationCode: "SGR" },

  // Cepheus (CEP)
  { id: "alderamin", nameEn: "Alderamin", ra: 21.309, dec: 62.585, mag: 2.45, constellationCode: "CEP" },
  { id: "alfirk", nameEn: "Alfirk", ra: 21.477, dec: 70.560, mag: 3.23, constellationCode: "CEP" },
  { id: "errai", nameEn: "Errai", ra: 23.654, dec: 77.631, mag: 3.21, constellationCode: "CEP" },

  // Draco (DRA)
  { id: "eltanin", nameEn: "Eltanin", ra: 17.943, dec: 51.488, mag: 2.24, constellationCode: "DRA" },
  { id: "rastaban", nameEn: "Rastaban", ra: 17.506, dec: 52.301, mag: 2.79, constellationCode: "DRA" },
  { id: "thuban", nameEn: "Thuban", ra: 14.073, dec: 64.375, mag: 3.67, constellationCode: "DRA" },

  // Hercules (HER)
  { id: "kornephoros", nameEn: "Kornephoros", ra: 16.503, dec: 21.488, mag: 2.78, constellationCode: "HER" },
  { id: "rasalgethi", nameEn: "Rasalgethi", ra: 17.243, dec: 14.390, mag: 3.35, constellationCode: "HER" },

  // Corona Borealis (CRB)
  { id: "alphecca", nameEn: "Alphecca", ra: 15.578, dec: 26.714, mag: 2.22, constellationCode: "CRB" },

  // Additional bright standalone stars
  { id: "canopus", nameEn: "Canopus", ra: 6.399, dec: -52.695, mag: -0.74 },
  { id: "fomalhaut", nameEn: "Fomalhaut", ra: 22.960, dec: -29.622, mag: 1.17 },
  { id: "alphard", nameEn: "Alphard", ra: 9.459, dec: -8.658, mag: 1.99 },
  { id: "hamal", nameEn: "Hamal", ra: 2.119, dec: 23.462, mag: 2.01 },
  { id: "diphda", nameEn: "Diphda", ra: 0.726, dec: -17.986, mag: 2.04 },
  { id: "rasalhague", nameEn: "Rasalhague", ra: 17.582, dec: 12.560, mag: 2.08 }
];

// Add ~70 background background stars distributed across the sky for depth and realism
for (let i = 0; i < 70; i++) {
  const ra = Number((Math.random() * 24).toFixed(3));
  const dec = Number((Math.random() * 160 - 80).toFixed(3));
  const mag = Number((Math.random() * 2.2 + 2.5).toFixed(2));
  REAL_STARS.push({
    id: `bg_star_${i}`,
    nameEn: `Star HR-${1000 + i}`,
    ra,
    dec,
    mag
  });
}

// Constellation asterisms linking bright stars
export const CONSTELLATION_LINES: ConstellationAsterism[] = [
  {
    code: "UMA",
    nameEn: "Ursa Major",
    lines: [
      ["dubhe", "merak"], ["merak", "phecda"], ["phecda", "megrez"],
      ["megrez", "dubhe"], ["megrez", "alioth"], ["alioth", "mizar"], ["mizar", "alkaid"]
    ]
  },
  {
    code: "UMI",
    nameEn: "Ursa Minor",
    lines: [
      ["polaris", "yildun"], ["yildun", "eps_umi"], ["eps_umi", "zeta_umi"],
      ["zeta_umi", "eta_umi"], ["eta_umi", "pherkad"], ["pherkad", "kochab"], ["kochab", "zeta_umi"]
    ]
  },
  {
    code: "ORI",
    nameEn: "Orion",
    lines: [
      ["betelgeuse", "meissa"], ["meissa", "bellatrix"], ["betelgeuse", "alnitak"],
      ["bellatrix", "mintaka"], ["alnitak", "alnilam"], ["alnilam", "mintaka"],
      ["alnitak", "saiph"], ["mintaka", "rigel"], ["saiph", "rigel"]
    ]
  },
  {
    code: "CAS",
    nameEn: "Cassiopeia",
    lines: [
      ["caph", "schedar"], ["schedar", "gamma_cas"], ["gamma_cas", "ruchbah"], ["ruchbah", "segin"]
    ]
  },
  {
    code: "CYG",
    nameEn: "Cygnus",
    lines: [
      ["deneb", "sadr"], ["sadr", "albireo"], ["gienah", "sadr"], ["sadr", "delta_cyg"]
    ]
  },
  {
    code: "TAU",
    nameEn: "Taurus",
    lines: [
      ["aldebaran", "ain"], ["ain", "alcyone"], ["aldebaran", "zeta_tau"], ["ain", "elnath"]
    ]
  },
  {
    code: "CMA",
    nameEn: "Canis Major",
    lines: [
      ["sirius", "mirzam"], ["sirius", "wezen"], ["wezen", "adhara"], ["wezen", "aludra"]
    ]
  },
  {
    code: "LEO",
    nameEn: "Leo",
    lines: [
      ["regulus", "algieba"], ["algieba", "zosma"], ["zosma", "denebola"],
      ["algieba", "epsilon_leo"], ["regulus", "zosma"]
    ]
  },
  {
    code: "SCO",
    nameEn: "Scorpius",
    lines: [
      ["antares", "dschubba"], ["dschubba", "graffias"], ["antares", "sargas"], ["sargas", "shaula"]
    ]
  },
  {
    code: "PEG",
    nameEn: "Pegasus",
    lines: [
      ["scheat", "markab"], ["markab", "algenib"], ["algenib", "alpheratz"],
      ["alpheratz", "scheat"], ["markab", "enif"]
    ]
  },
  {
    code: "AND",
    nameEn: "Andromeda",
    lines: [
      ["alpheratz", "mirach"], ["mirach", "almach"]
    ]
  },
  {
    code: "BOO",
    nameEn: "Boötes",
    lines: [
      ["arcturus", "izar"], ["izar", "seginus"], ["arcturus", "muphrid"]
    ]
  },
  {
    code: "LYR",
    nameEn: "Lyra",
    lines: [
      ["vega", "sheliak"], ["sheliak", "sulafat"], ["sulafat", "vega"]
    ]
  },
  {
    code: "AQL",
    nameEn: "Aquila",
    lines: [
      ["tarazed", "altair"], ["altair", "alshain"]
    ]
  },
  {
    code: "AUR",
    nameEn: "Auriga",
    lines: [
      ["capella", "menkalinan"], ["menkalinan", "mahsim"], ["mahsim", "elnath"], ["elnath", "capella"]
    ]
  },
  {
    code: "GEM",
    nameEn: "Gemini",
    lines: [
      ["castor", "pollux"], ["pollux", "alhena"]
    ]
  },
  {
    code: "VIR",
    nameEn: "Virgo",
    lines: [
      ["spica", "porrima"], ["porrima", "vindemiatrix"]
    ]
  },
  {
    code: "PER",
    nameEn: "Perseus",
    lines: [
      ["mirfak", "algol"]
    ]
  },
  {
    code: "CEN",
    nameEn: "Centaurus",
    lines: [
      ["rigil_kent", "hadar"], ["hadar", "menkent"]
    ]
  },
  {
    code: "CRU",
    nameEn: "Crux",
    lines: [
      ["acrux", "gacrux"], ["mimosa", "acrux"]
    ]
  },
  {
    code: "DRA",
    nameEn: "Draco",
    lines: [
      ["eltanin", "rastaban"], ["rastaban", "thuban"]
    ]
  }
];
