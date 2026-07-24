export interface ConstellationTemplate {
  name: string;
  code: string;
  ra: number; // Right Ascension (hours 0..24)
  dec: number; // Declination (degrees -90..90)
  stars: { x: number; y: number; isCore?: boolean; label?: string }[];
  connections: [number, number][];
}

export interface CelestialBody {
  id: string;
  name: string;
  type: "SUN" | "MOON" | "PLANET" | "DWARF_PLANET";
  ra: number; // calculated right ascension
  dec: number; // calculated declination
  color: string;
  glowColor: string;
  size: number;
  symbol: string;
  description: string;
}

export interface DeepSkyObject {
  id: string;
  name: string;
  catalog: string;
  type: "GALAXY" | "NEBULA" | "STAR_CLUSTER" | "PLANETARY_NEBULA";
  ra: number;
  dec: number;
  color: string;
  size: number;
  description: string;
}

// Complete catalog of all 88 IAU modern astronomical constellations
export const ALL_88_CONSTELLATIONS: ConstellationTemplate[] = [
  // 1. ANDROMEDA
  {
    name: "ANDROMEDA",
    code: "AND",
    ra: 0.7, dec: 38.0,
    stars: [
      { x: 15, y: 80, label: "Alpheratz" },
      { x: 35, y: 65, label: "Mirach" },
      { x: 55, y: 50, isCore: true, label: "Almach" },
      { x: 75, y: 35 },
      { x: 60, y: 25 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [2, 4]]
  },
  // 2. ANTLIA (Air Pump)
  {
    name: "ANTLIA",
    code: "ANT",
    ra: 10.2, dec: -32.0,
    stars: [
      { x: 30, y: 40, isCore: true },
      { x: 55, y: 65 },
      { x: 70, y: 45 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 3. APUS (Bird of Paradise)
  {
    name: "APUS",
    code: "APS",
    ra: 16.1, dec: -75.0,
    stars: [
      { x: 25, y: 40, isCore: true },
      { x: 50, y: 30 },
      { x: 65, y: 55 },
      { x: 40, y: 70 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0]]
  },
  // 4. AQUARIUS (Water Bearer)
  {
    name: "AQUARIUS",
    code: "AQR",
    ra: 22.3, dec: -10.0,
    stars: [
      { x: 20, y: 25, label: "Sadalmelik" },
      { x: 40, y: 35, isCore: true, label: "Sadalsuud" },
      { x: 55, y: 50 },
      { x: 70, y: 65 },
      { x: 50, y: 80 },
      { x: 80, y: 40 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5]]
  },
  // 5. AQUILA (Eagle)
  {
    name: "AQUILA",
    code: "AQL",
    ra: 19.8, dec: 8.8,
    stars: [
      { x: 50, y: 45, isCore: true, label: "Altair" },
      { x: 45, y: 30, label: "Tarazed" },
      { x: 55, y: 60, label: "Alshain" },
      { x: 20, y: 50 },
      { x: 80, y: 40 }
    ],
    connections: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 3], [2, 4]]
  },
  // 6. ARA (Altar)
  {
    name: "ARA",
    code: "ARA",
    ra: 17.3, dec: -55.0,
    stars: [
      { x: 30, y: 30, isCore: true },
      { x: 60, y: 35 },
      { x: 70, y: 65 },
      { x: 40, y: 70 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0]]
  },
  // 7. ARIES (Ram)
  {
    name: "ARIES",
    code: "ARI",
    ra: 2.6, dec: 20.0,
    stars: [
      { x: 75, y: 35, isCore: true, label: "Hamal" },
      { x: 50, y: 45, label: "Sheratan" },
      { x: 35, y: 60, label: "Mesarthim" },
      { x: 20, y: 65 }
    ],
    connections: [[0, 1], [1, 2], [2, 3]]
  },
  // 8. AURIGA (Charioteer)
  {
    name: "AURIGA",
    code: "AUR",
    ra: 5.3, dec: 42.0,
    stars: [
      { x: 30, y: 20, isCore: true, label: "Capella" },
      { x: 70, y: 25, label: "Menkalinan" },
      { x: 85, y: 65 },
      { x: 50, y: 85, label: "Elnath" },
      { x: 15, y: 60 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]]
  },
  // 9. BOOTES (Herdsman)
  {
    name: "BOOTES",
    code: "BOO",
    ra: 14.5, dec: 28.0,
    stars: [
      { x: 50, y: 80, isCore: true, label: "Arcturus" },
      { x: 35, y: 55, label: "Izar" },
      { x: 65, y: 55 },
      { x: 30, y: 30 },
      { x: 70, y: 30 },
      { x: 50, y: 15, label: "Nekkar" }
    ],
    connections: [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5], [1, 2]]
  },
  // 10. CAELUM (Chisel)
  {
    name: "CAELUM",
    code: "CAE",
    ra: 4.8, dec: -38.0,
    stars: [
      { x: 45, y: 30, isCore: true },
      { x: 50, y: 50 },
      { x: 40, y: 70 },
      { x: 65, y: 60 }
    ],
    connections: [[0, 1], [1, 2], [1, 3]]
  },
  // 11. CAMELOPARDALIS (Giraffe)
  {
    name: "CAMELOPARDALIS",
    code: "CAM",
    ra: 6.0, dec: 70.0,
    stars: [
      { x: 20, y: 20, isCore: true },
      { x: 35, y: 40 },
      { x: 55, y: 50 },
      { x: 70, y: 65 },
      { x: 85, y: 80 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4]]
  },
  // 12. CANCER (Crab)
  {
    name: "CANCER",
    code: "CNC",
    ra: 8.6, dec: 20.0,
    stars: [
      { x: 50, y: 50, isCore: true, label: "Beehive Cluster" },
      { x: 35, y: 35 },
      { x: 65, y: 35 },
      { x: 40, y: 70, label: "Acubens" },
      { x: 60, y: 70 }
    ],
    connections: [[0, 1], [0, 2], [0, 3], [0, 4]]
  },
  // 13. CANES VENATICIC (Hunting Dogs)
  {
    name: "CANES VENATICI",
    code: "CVN",
    ra: 13.1, dec: 40.0,
    stars: [
      { x: 40, y: 45, isCore: true, label: "Cor Caroli" },
      { x: 65, y: 60, label: "Chara" }
    ],
    connections: [[0, 1]]
  },
  // 14. CANIS MAJOR (Great Dog)
  {
    name: "CANIS MAJOR",
    code: "CMA",
    ra: 6.8, dec: -22.0,
    stars: [
      { x: 40, y: 30, isCore: true, label: "Sirius" },
      { x: 25, y: 15, label: "Mirzam" },
      { x: 65, y: 45, label: "Wezen" },
      { x: 55, y: 75, label: "Adhara" },
      { x: 80, y: 85, label: "Aludra" }
    ],
    connections: [[0, 1], [0, 2], [2, 3], [3, 4], [2, 4]]
  },
  // 15. CANIS MINOR (Little Dog)
  {
    name: "CANIS MINOR",
    code: "CMI",
    ra: 7.6, dec: 6.0,
    stars: [
      { x: 35, y: 50, isCore: true, label: "Procyon" },
      { x: 65, y: 45, label: "Gomeisa" }
    ],
    connections: [[0, 1]]
  },
  // 16. CAPRICORNUS (Sea Goat)
  {
    name: "CAPRICORNUS",
    code: "CAP",
    ra: 21.0, dec: -18.0,
    stars: [
      { x: 15, y: 25, label: "Algedi" },
      { x: 25, y: 40, label: "Dabih" },
      { x: 45, y: 60 },
      { x: 70, y: 65 },
      { x: 85, y: 45, isCore: true, label: "Deneb Algedi" },
      { x: 65, y: 30 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]]
  },
  // 17. CARINA (Keel)
  {
    name: "CARINA",
    code: "CAR",
    ra: 8.7, dec: -60.0,
    stars: [
      { x: 20, y: 70, isCore: true, label: "Canopus" },
      { x: 45, y: 50, label: "Miaplacidus" },
      { x: 65, y: 40, label: "Avior" },
      { x: 80, y: 55 },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 1]]
  },
  // 18. CASSIOPEIA (Queen)
  {
    name: "CASSIOPEIA",
    code: "CAS",
    ra: 0.9, dec: 60.0,
    stars: [
      { x: 10, y: 20, label: "Caph" },
      { x: 30, y: 50, isCore: true, label: "Schedar" },
      { x: 50, y: 30, label: "Gamma Cas" },
      { x: 70, y: 55, label: "Ruchbah" },
      { x: 90, y: 25, label: "Segin" }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4]]
  },
  // 19. CENTAURUS (Centaur)
  {
    name: "CENTAURUS",
    code: "CEN",
    ra: 13.5, dec: -50.0,
    stars: [
      { x: 25, y: 80, isCore: true, label: "Rigil Kentaurus" },
      { x: 45, y: 70, label: "Hadar" },
      { x: 50, y: 40, label: "Menkent" },
      { x: 70, y: 30 },
      { x: 35, y: 20 },
      { x: 85, y: 55 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [2, 4], [3, 5]]
  },
  // 20. CEPHEUS (King)
  {
    name: "CEPHEUS",
    code: "CEP",
    ra: 22.0, dec: 70.0,
    stars: [
      { x: 50, y: 15, isCore: true, label: "Alderamin" },
      { x: 20, y: 45, label: "Alfirk" },
      { x: 80, y: 45, label: "Errai" },
      { x: 30, y: 80 },
      { x: 70, y: 80 }
    ],
    connections: [[0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [1, 2]]
  },
  // 21. CETUS (Sea Monster)
  {
    name: "CETUS",
    code: "CET",
    ra: 1.7, dec: -10.0,
    stars: [
      { x: 20, y: 30, label: "Menkar" },
      { x: 40, y: 45, label: "Mira" },
      { x: 60, y: 50, isCore: true, label: "Deneb Kaitos" },
      { x: 75, y: 70 },
      { x: 85, y: 35 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [2, 4]]
  },
  // 22. CHAMAELEON (Chameleon)
  {
    name: "CHAMAELEON",
    code: "CHA",
    ra: 11.0, dec: -78.0,
    stars: [
      { x: 30, y: 40, isCore: true },
      { x: 55, y: 35 },
      { x: 70, y: 60 },
      { x: 45, y: 70 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0]]
  },
  // 23. CIRCINUS (Compasses)
  {
    name: "CIRCINUS",
    code: "CIR",
    ra: 14.9, dec: -63.0,
    stars: [
      { x: 40, y: 30, isCore: true },
      { x: 65, y: 60 },
      { x: 25, y: 70 }
    ],
    connections: [[0, 1], [0, 2]]
  },
  // 24. COLUMBA (Dove)
  {
    name: "COLUMBA",
    code: "COL",
    ra: 5.8, dec: -35.0,
    stars: [
      { x: 45, y: 45, isCore: true, label: "Phact" },
      { x: 65, y: 35, label: "Wazn" },
      { x: 30, y: 65 },
      { x: 70, y: 65 }
    ],
    connections: [[0, 1], [0, 2], [0, 3]]
  },
  // 25. COMA BERENICES (Berenice's Hair)
  {
    name: "COMA BERENICES",
    code: "COM",
    ra: 12.8, dec: 20.0,
    stars: [
      { x: 40, y: 30, isCore: true, label: "Diadem" },
      { x: 60, y: 50 },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 26. CORONA AUSTRALIS (Southern Crown)
  {
    name: "CORONA AUSTRALIS",
    code: "CRA",
    ra: 18.6, dec: -41.0,
    stars: [
      { x: 20, y: 60 },
      { x: 35, y: 35 },
      { x: 55, y: 25, isCore: true },
      { x: 75, y: 35 },
      { x: 85, y: 60 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4]]
  },
  // 27. CORONA BOREALIS (Northern Crown)
  {
    name: "CORONA BOREALIS",
    code: "CRB",
    ra: 15.7, dec: 29.0,
    stars: [
      { x: 15, y: 60 },
      { x: 30, y: 35 },
      { x: 50, y: 25, isCore: true, label: "Alphecca" },
      { x: 70, y: 35 },
      { x: 85, y: 60 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4]]
  },
  // 28. CORVUS (Crow)
  {
    name: "CORVUS",
    code: "CRV",
    ra: 12.4, dec: -18.0,
    stars: [
      { x: 25, y: 30, label: "Alchiba" },
      { x: 70, y: 35, isCore: true, label: "Gienah" },
      { x: 75, y: 75, label: "Algorab" },
      { x: 30, y: 70, label: "Kraz" }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0]]
  },
  // 29. CRATER (Cup)
  {
    name: "CRATER",
    code: "CRT",
    ra: 11.4, dec: -15.0,
    stars: [
      { x: 20, y: 40 },
      { x: 45, y: 65, isCore: true },
      { x: 75, y: 45 },
      { x: 60, y: 25 },
      { x: 35, y: 25 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]]
  },
  // 30. CRUX (Southern Cross)
  {
    name: "CRUX",
    code: "CRU",
    ra: 12.4, dec: -60.0,
    stars: [
      { x: 50, y: 15, label: "Gacrux" },
      { x: 50, y: 85, isCore: true, label: "Acrux" },
      { x: 20, y: 45, label: "Mimosa" },
      { x: 80, y: 50, label: "Delta Crucis" }
    ],
    connections: [[0, 1], [2, 3]]
  },
  // 31. CYGNUS (Swan)
  {
    name: "CYGNUS",
    code: "CYG",
    ra: 20.6, dec: 42.0,
    stars: [
      { x: 50, y: 15, isCore: true, label: "Deneb" },
      { x: 50, y: 45, label: "Sadr" },
      { x: 20, y: 50, label: "Delta Cygni" },
      { x: 80, y: 40, label: "Gienah" },
      { x: 50, y: 85, label: "Albireo" }
    ],
    connections: [[0, 1], [1, 2], [1, 3], [1, 4]]
  },
  // 32. DELPHINUS (Dolphin)
  {
    name: "DELPHINUS",
    code: "DEL",
    ra: 20.6, dec: 14.0,
    stars: [
      { x: 30, y: 30, isCore: true, label: "Sualocin" },
      { x: 60, y: 35, label: "Rotanev" },
      { x: 65, y: 55 },
      { x: 35, y: 55 },
      { x: 20, y: 80 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4]]
  },
  // 33. DORADO (Dolphinfish / Swordfish)
  {
    name: "DORADO",
    code: "DOR",
    ra: 5.2, dec: -62.0,
    stars: [
      { x: 30, y: 25, isCore: true },
      { x: 55, y: 45 },
      { x: 70, y: 75 },
      { x: 40, y: 85 }
    ],
    connections: [[0, 1], [1, 2], [2, 3]]
  },
  // 34. DRACO (Dragon)
  {
    name: "DRACO",
    code: "DRA",
    ra: 17.5, dec: 65.0,
    stars: [
      { x: 80, y: 20, isCore: true, label: "Eltanin" },
      { x: 65, y: 15, label: "Rastaban" },
      { x: 55, y: 30 },
      { x: 70, y: 40 },
      { x: 50, y: 55 },
      { x: 30, y: 50, label: "Thuban" },
      { x: 20, y: 70 },
      { x: 40, y: 85 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0], [2, 4], [4, 5], [5, 6], [6, 7]]
  },
  // 35. EQUULEUS (Little Horse)
  {
    name: "EQUULEUS",
    code: "EQU",
    ra: 21.2, dec: 7.0,
    stars: [
      { x: 35, y: 35, isCore: true, label: "Kitalpha" },
      { x: 65, y: 40 },
      { x: 60, y: 70 },
      { x: 30, y: 65 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0]]
  },
  // 36. ERIDANUS (River)
  {
    name: "ERIDANUS",
    code: "ERI",
    ra: 3.5, dec: -30.0,
    stars: [
      { x: 20, y: 15, label: "Cursa" },
      { x: 40, y: 30, label: "Zaurak" },
      { x: 60, y: 45, label: "Acamar" },
      { x: 45, y: 65 },
      { x: 75, y: 85, isCore: true, label: "Achernar" }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4]]
  },
  // 37. FORNAX (Furnace)
  {
    name: "FORNAX",
    code: "FOR",
    ra: 2.8, dec: -32.0,
    stars: [
      { x: 30, y: 35, isCore: true, label: "Dalim" },
      { x: 65, y: 50 },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 38. GEMINI (Twins)
  {
    name: "GEMINI",
    code: "GEM",
    ra: 7.3, dec: 22.0,
    stars: [
      { x: 25, y: 20, isCore: true, label: "Castor" },
      { x: 45, y: 25, label: "Pollux" },
      { x: 20, y: 55, label: "Alhena" },
      { x: 40, y: 60, label: "Wasat" },
      { x: 15, y: 85 },
      { x: 35, y: 90 }
    ],
    connections: [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [2, 3]]
  },
  // 39. GRUS (Crane)
  {
    name: "GRUS",
    code: "GRU",
    ra: 22.4, dec: -46.0,
    stars: [
      { x: 45, y: 25, isCore: true, label: "Alnair" },
      { x: 65, y: 45, label: "Tiaki" },
      { x: 35, y: 60 },
      { x: 55, y: 80 }
    ],
    connections: [[0, 1], [0, 2], [1, 3], [2, 3]]
  },
  // 40. HERCULES (Hercules)
  {
    name: "HERCULES",
    code: "HER",
    ra: 17.2, dec: 30.0,
    stars: [
      { x: 35, y: 35 },
      { x: 65, y: 35 },
      { x: 70, y: 65 },
      { x: 30, y: 65, isCore: true, label: "Kornephoros" },
      { x: 20, y: 15, label: "Rasalgethi" },
      { x: 80, y: 85 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [2, 5]]
  },
  // 41. HOROLOGIUM (Pendulum Clock)
  {
    name: "HOROLOGIUM",
    code: "HOR",
    ra: 3.3, dec: -50.0,
    stars: [
      { x: 30, y: 20, isCore: true },
      { x: 55, y: 50 },
      { x: 65, y: 80 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 42. HYDRA (Water Snake)
  {
    name: "HYDRA",
    code: "HYA",
    ra: 10.5, dec: -20.0,
    stars: [
      { x: 15, y: 25 },
      { x: 35, y: 40, isCore: true, label: "Alphard" },
      { x: 55, y: 55 },
      { x: 75, y: 65 },
      { x: 85, y: 85 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4]]
  },
  // 43. HYDRUS (Water Snake male)
  {
    name: "HYDRUS",
    code: "HYI",
    ra: 2.3, dec: -72.0,
    stars: [
      { x: 25, y: 30, isCore: true },
      { x: 65, y: 45 },
      { x: 45, y: 75 }
    ],
    connections: [[0, 1], [1, 2], [2, 0]]
  },
  // 44. INDUS (Indian)
  {
    name: "INDUS",
    code: "IND",
    ra: 21.0, dec: -55.0,
    stars: [
      { x: 35, y: 30, isCore: true, label: "The Persian" },
      { x: 60, y: 50 },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 45. LACERTA (Lizard)
  {
    name: "LACERTA",
    code: "LAC",
    ra: 22.4, dec: 45.0,
    stars: [
      { x: 45, y: 20, isCore: true },
      { x: 55, y: 40 },
      { x: 40, y: 60 },
      { x: 60, y: 80 }
    ],
    connections: [[0, 1], [1, 2], [2, 3]]
  },
  // 46. LEO (Lion)
  {
    name: "LEO",
    code: "LEO",
    ra: 10.7, dec: 15.0,
    stars: [
      { x: 80, y: 60, isCore: true, label: "Regulus" },
      { x: 70, y: 40, label: "Algieba" },
      { x: 60, y: 25, label: "Adhafera" },
      { x: 45, y: 35, label: "Zosma" },
      { x: 25, y: 50, label: "Denebola" }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [1, 3]]
  },
  // 47. LEO MINOR (Little Lion)
  {
    name: "LEO MINOR",
    code: "LMI",
    ra: 10.3, dec: 35.0,
    stars: [
      { x: 35, y: 40, isCore: true, label: "Praecipua" },
      { x: 65, y: 55 },
      { x: 45, y: 70 }
    ],
    connections: [[0, 1], [1, 2], [2, 0]]
  },
  // 48. LEPUS (Hare)
  {
    name: "LEPUS",
    code: "LEP",
    ra: 5.5, dec: -20.0,
    stars: [
      { x: 40, y: 35, isCore: true, label: "Arneb" },
      { x: 65, y: 40, label: "Nihal" },
      { x: 70, y: 70 },
      { x: 30, y: 65 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0]]
  },
  // 49. LIBRA (Scales)
  {
    name: "LIBRA",
    code: "LIB",
    ra: 15.2, dec: -15.0,
    stars: [
      { x: 30, y: 50, isCore: true, label: "Zubenelgenubi" },
      { x: 55, y: 25, label: "Zubeneschamali" },
      { x: 75, y: 45, label: "Zubenelhakrabi" },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0]]
  },
  // 50. LUPUS (Wolf)
  {
    name: "LUPUS",
    code: "LUP",
    ra: 15.3, dec: -43.0,
    stars: [
      { x: 45, y: 30, isCore: true, label: "Men" },
      { x: 30, y: 55 },
      { x: 65, y: 60 },
      { x: 50, y: 80 }
    ],
    connections: [[0, 1], [0, 2], [1, 3], [2, 3]]
  },
  // 51. LYNX (Lynx)
  {
    name: "LYNX",
    code: "LYN",
    ra: 8.0, dec: 45.0,
    stars: [
      { x: 20, y: 30 },
      { x: 45, y: 50 },
      { x: 75, y: 65, isCore: true }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 52. LYRA (Lyre)
  {
    name: "LYRA",
    code: "LYR",
    ra: 18.6, dec: 38.7,
    stars: [
      { x: 30, y: 20, isCore: true, label: "Vega" },
      { x: 50, y: 40, label: "Sheliak" },
      { x: 75, y: 45, label: "Sulafat" },
      { x: 70, y: 75 },
      { x: 45, y: 70 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 1]]
  },
  // 53. MENSA (Table Mountain)
  {
    name: "MENSA",
    code: "MEN",
    ra: 5.5, dec: -78.0,
    stars: [
      { x: 35, y: 35, isCore: true },
      { x: 65, y: 40 },
      { x: 50, y: 70 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 54. MICROSCOPIUM (Microscope)
  {
    name: "MICROSCOPIUM",
    code: "MIC",
    ra: 20.9, dec: -36.0,
    stars: [
      { x: 30, y: 30, isCore: true },
      { x: 55, y: 55 },
      { x: 70, y: 80 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 55. MONOCEROS (Unicorn)
  {
    name: "MONOCEROS",
    code: "MON",
    ra: 7.1, dec: -5.0,
    stars: [
      { x: 25, y: 35 },
      { x: 50, y: 50, isCore: true, label: "Lucida" },
      { x: 75, y: 65 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 56. MUSCA (Fly)
  {
    name: "MUSCA",
    code: "MUS",
    ra: 12.4, dec: -70.0,
    stars: [
      { x: 35, y: 40, isCore: true },
      { x: 65, y: 35 },
      { x: 70, y: 65 },
      { x: 30, y: 70 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0]]
  },
  // 57. NORMA (Carpenter's Square)
  {
    name: "NORMA",
    code: "NOR",
    ra: 16.0, dec: -52.0,
    stars: [
      { x: 30, y: 30, isCore: true },
      { x: 60, y: 50 },
      { x: 45, y: 75 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 58. OCTANS (Octant - South Pole)
  {
    name: "OCTANS",
    code: "OCT",
    ra: 22.0, dec: -85.0,
    stars: [
      { x: 40, y: 35, isCore: true, label: "Polaris Australis" },
      { x: 65, y: 45 },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2], [2, 0]]
  },
  // 59. OPHIUCHUS (Serpent Bearer)
  {
    name: "OPHIUCHUS",
    code: "OPH",
    ra: 17.3, dec: -4.0,
    stars: [
      { x: 50, y: 20, isCore: true, label: "Rasalhague" },
      { x: 30, y: 45, label: "Cebalrai" },
      { x: 70, y: 45, label: "Yed Prior" },
      { x: 25, y: 75 },
      { x: 75, y: 75 },
      { x: 50, y: 60, label: "Sabik" }
    ],
    connections: [[0, 1], [0, 2], [1, 3], [2, 4], [1, 5], [2, 5]]
  },
  // 60. ORION (Hunter)
  {
    name: "ORION",
    code: "ORI",
    ra: 5.5, dec: 5.0,
    stars: [
      { x: 25, y: 15, isCore: true, label: "Betelgeuse" },
      { x: 75, y: 20, label: "Bellatrix" },
      { x: 40, y: 50, label: "Alnitak" },
      { x: 50, y: 50, label: "Alnilam" },
      { x: 60, y: 50, label: "Mintaka" },
      { x: 30, y: 85, label: "Saiph" },
      { x: 75, y: 85, isCore: true, label: "Rigel" }
    ],
    connections: [[0, 2], [1, 4], [2, 3], [3, 4], [2, 5], [4, 6], [0, 1], [5, 6]]
  },
  // 61. PAVO (Peacock)
  {
    name: "PAVO",
    code: "PAV",
    ra: 19.5, dec: -65.0,
    stars: [
      { x: 35, y: 25, isCore: true, label: "Peacock" },
      { x: 65, y: 40 },
      { x: 50, y: 70 }
    ],
    connections: [[0, 1], [1, 2], [2, 0]]
  },
  // 62. PEGASUS (Winged Horse)
  {
    name: "PEGASUS",
    code: "PEG",
    ra: 22.7, dec: 20.0,
    stars: [
      { x: 30, y: 30, isCore: true, label: "Scheat" },
      { x: 70, y: 30, label: "Markab" },
      { x: 70, y: 70, label: "Algenib" },
      { x: 30, y: 70, label: "Enif" }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0]]
  },
  // 63. PERSEUS (Hero)
  {
    name: "PERSEUS",
    code: "PER",
    ra: 3.5, dec: 45.0,
    stars: [
      { x: 50, y: 35, isCore: true, label: "Mirfak" },
      { x: 50, y: 15 },
      { x: 35, y: 55, label: "Algol" },
      { x: 65, y: 55 },
      { x: 25, y: 80 },
      { x: 75, y: 80 }
    ],
    connections: [[0, 1], [0, 2], [0, 3], [2, 4], [3, 5]]
  },
  // 64. PHOENIX (Phoenix)
  {
    name: "PHOENIX",
    code: "PHE",
    ra: 0.4, dec: -43.0,
    stars: [
      { x: 45, y: 30, isCore: true, label: "Ankaa" },
      { x: 65, y: 55 },
      { x: 30, y: 70 }
    ],
    connections: [[0, 1], [0, 2]]
  },
  // 65. PICTOR (Easel)
  {
    name: "PICTOR",
    code: "PIC",
    ra: 5.7, dec: -53.0,
    stars: [
      { x: 35, y: 35, isCore: true },
      { x: 65, y: 50 },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 66. PISCES (Fishes)
  {
    name: "PISCES",
    code: "PSC",
    ra: 0.5, dec: 15.0,
    stars: [
      { x: 20, y: 30 },
      { x: 40, y: 45, isCore: true, label: "Alrescha" },
      { x: 70, y: 60 },
      { x: 80, y: 25 }
    ],
    connections: [[0, 1], [1, 2], [2, 3]]
  },
  // 67. PISCIS AUSTRINUS (Southern Fish)
  {
    name: "PISCIS AUSTRINUS",
    code: "PSA",
    ra: 22.8, dec: -30.0,
    stars: [
      { x: 50, y: 40, isCore: true, label: "Fomalhaut" },
      { x: 30, y: 60 },
      { x: 70, y: 65 }
    ],
    connections: [[0, 1], [0, 2]]
  },
  // 68. PUPPIS (Stern)
  {
    name: "PUPPIS",
    code: "PUP",
    ra: 7.5, dec: -40.0,
    stars: [
      { x: 40, y: 30, isCore: true, label: "Naos" },
      { x: 65, y: 45 },
      { x: 30, y: 65 },
      { x: 70, y: 75 }
    ],
    connections: [[0, 1], [0, 2], [1, 3]]
  },
  // 69. PYXIS (Compass)
  {
    name: "PYXIS",
    code: "PYX",
    ra: 8.9, dec: -30.0,
    stars: [
      { x: 35, y: 35, isCore: true },
      { x: 65, y: 45 },
      { x: 50, y: 70 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 70. RETICULUM (Reticle)
  {
    name: "RETICULUM",
    code: "RET",
    ra: 3.9, dec: -63.0,
    stars: [
      { x: 35, y: 35, isCore: true },
      { x: 65, y: 40 },
      { x: 60, y: 70 },
      { x: 30, y: 65 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0]]
  },
  // 71. SAGITTA (Arrow)
  {
    name: "SAGITTA",
    code: "SGE",
    ra: 19.8, dec: 18.0,
    stars: [
      { x: 20, y: 50, label: "Sham" },
      { x: 50, y: 50, isCore: true },
      { x: 80, y: 35 },
      { x: 80, y: 65 }
    ],
    connections: [[0, 1], [1, 2], [1, 3]]
  },
  // 72. SAGITTARIUS (Archer)
  {
    name: "SAGITTARIUS",
    code: "SGR",
    ra: 19.0, dec: -25.0,
    stars: [
      { x: 30, y: 30, label: "Kaus Media" },
      { x: 50, y: 30, isCore: true, label: "Kaus Australis" },
      { x: 70, y: 30, label: "Ascella" },
      { x: 30, y: 60, label: "Alnasl" },
      { x: 50, y: 60, label: "Nunki" },
      { x: 70, y: 60 },
      { x: 50, y: 15 },
      { x: 85, y: 45 }
    ],
    connections: [[0, 1], [1, 2], [3, 4], [4, 5], [0, 3], [1, 4], [2, 5], [1, 6], [2, 7]]
  },
  // 73. SCORPIUS (Scorpion)
  {
    name: "SCORPIUS",
    code: "SCO",
    ra: 16.8, dec: -26.0,
    stars: [
      { x: 80, y: 15, label: "Dschubba" },
      { x: 65, y: 25 },
      { x: 50, y: 35, isCore: true, label: "Antares" },
      { x: 45, y: 50 },
      { x: 40, y: 65 },
      { x: 50, y: 80, label: "Shaula" },
      { x: 70, y: 85 },
      { x: 85, y: 75 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]
  },
  // 74. SCULPTOR (Sculptor)
  {
    name: "SCULPTOR",
    code: "SCL",
    ra: 0.4, dec: -32.0,
    stars: [
      { x: 35, y: 40, isCore: true },
      { x: 65, y: 55 },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 75. SCUTUM (Shield)
  {
    name: "SCUTUM",
    code: "SCT",
    ra: 18.7, dec: -10.0,
    stars: [
      { x: 35, y: 30, isCore: true },
      { x: 65, y: 40 },
      { x: 50, y: 70 }
    ],
    connections: [[0, 1], [1, 2], [2, 0]]
  },
  // 76. SERPENS (Serpent)
  {
    name: "SERPENS",
    code: "SER",
    ra: 15.7, dec: 10.0,
    stars: [
      { x: 25, y: 30, isCore: true, label: "Unukalhai" },
      { x: 50, y: 45 },
      { x: 75, y: 60 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 77. SEXTANS (Sextant)
  {
    name: "SEXTANS",
    code: "SEX",
    ra: 10.2, dec: -2.0,
    stars: [
      { x: 35, y: 35, isCore: true },
      { x: 65, y: 45 },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 78. TAURUS (Bull)
  {
    name: "TAURUS",
    code: "TAU",
    ra: 4.5, dec: 16.0,
    stars: [
      { x: 30, y: 50, isCore: true, label: "Aldebaran" },
      { x: 15, y: 30, label: "Pleiades (M45)" },
      { x: 50, y: 60, label: "Elnath" },
      { x: 70, y: 40 },
      { x: 85, y: 20 },
      { x: 65, y: 80 }
    ],
    connections: [[0, 1], [0, 2], [2, 3], [3, 4], [2, 5]]
  },
  // 79. TELESCOPIUM (Telescope)
  {
    name: "TELESCOPIUM",
    code: "TEL",
    ra: 19.0, dec: -52.0,
    stars: [
      { x: 35, y: 35, isCore: true },
      { x: 65, y: 50 },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 80. TRIANGULUM (Triangle)
  {
    name: "TRIANGULUM",
    code: "TRI",
    ra: 2.1, dec: 32.0,
    stars: [
      { x: 30, y: 35, isCore: true, label: "Mothallah" },
      { x: 70, y: 45 },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2], [2, 0]]
  },
  // 81. TRIANGULUM AUSTRALE (Southern Triangle)
  {
    name: "TRIANGULUM AUSTRALE",
    code: "TRA",
    ra: 16.0, dec: -65.0,
    stars: [
      { x: 35, y: 30, isCore: true, label: "Atria" },
      { x: 70, y: 45 },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2], [2, 0]]
  },
  // 82. TUCANA (Toucan)
  {
    name: "TUCANA",
    code: "TUC",
    ra: 23.7, dec: -65.0,
    stars: [
      { x: 35, y: 30, isCore: true },
      { x: 65, y: 45 },
      { x: 50, y: 75, label: "47 Tucanae" }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 83. URSA MAJOR (Great Bear)
  {
    name: "URSA MAJOR",
    code: "UMA",
    ra: 11.3, dec: 55.0,
    stars: [
      { x: 10, y: 30, label: "Alkaid" },
      { x: 25, y: 25, label: "Mizar" },
      { x: 40, y: 30, label: "Alioth" },
      { x: 50, y: 45, isCore: true, label: "Megrez" },
      { x: 75, y: 50, label: "Phecda" },
      { x: 80, y: 25, label: "Merak" },
      { x: 52, y: 22, label: "Dubhe" }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 2]]
  },
  // 84. URSA MINOR (Little Bear)
  {
    name: "URSA MINOR",
    code: "UMI",
    ra: 2.5, dec: 88.0,
    stars: [
      { x: 15, y: 15, isCore: true, label: "Polaris" },
      { x: 28, y: 22, label: "Yildun" },
      { x: 38, y: 35 },
      { x: 45, y: 55 },
      { x: 68, y: 55, label: "Kochab" },
      { x: 75, y: 40, label: "Pherkad" },
      { x: 58, y: 35 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]]
  },
  // 85. VELA (Sails)
  {
    name: "VELA",
    code: "VEL",
    ra: 9.5, dec: -50.0,
    stars: [
      { x: 30, y: 30, isCore: true, label: "Regor" },
      { x: 65, y: 40, label: "Suhail" },
      { x: 75, y: 70 },
      { x: 40, y: 75 }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 0]]
  },
  // 86. VIRGO (Virgin)
  {
    name: "VIRGO",
    code: "VIR",
    ra: 13.3, dec: -4.0,
    stars: [
      { x: 50, y: 50, isCore: true, label: "Spica" },
      { x: 30, y: 30, label: "Zavijava" },
      { x: 20, y: 15, label: "Porrima" },
      { x: 65, y: 35, label: "Auva" },
      { x: 75, y: 20, label: "Vindemiatrix" },
      { x: 35, y: 70 },
      { x: 60, y: 75 }
    ],
    connections: [[0, 1], [1, 2], [0, 3], [3, 4], [0, 5], [0, 6], [5, 6]]
  },
  // 87. VOLANS (Flying Fish)
  {
    name: "VOLANS",
    code: "VOL",
    ra: 7.8, dec: -69.0,
    stars: [
      { x: 35, y: 35, isCore: true },
      { x: 65, y: 45 },
      { x: 50, y: 75 }
    ],
    connections: [[0, 1], [1, 2]]
  },
  // 88. VULPECULA (Fox)
  {
    name: "VULPECULA",
    code: "VUL",
    ra: 20.2, dec: 25.0,
    stars: [
      { x: 35, y: 40, isCore: true, label: "Anser" },
      { x: 65, y: 55, label: "Dumbbell (M27)" }
    ],
    connections: [[0, 1]]
  }
];

// Deep Sky Objects (Famous Nebulae, Galaxies, Star Clusters)
export const DEEP_SKY_OBJECTS: DeepSkyObject[] = [
  {
    id: "M31",
    name: "Andromeda Galaxy",
    catalog: "M31 / NGC 224",
    type: "GALAXY",
    ra: 0.71, dec: 41.27,
    color: "#E8F5FF",
    size: 4.8,
    description: "Spiral galaxy 2.5 million light-years away, nearest major galaxy to the Milky Way."
  },
  {
    id: "M42",
    name: "Orion Nebula",
    catalog: "M42 / NGC 1976",
    type: "NEBULA",
    ra: 5.58, dec: -5.39,
    color: "#FF80AB",
    size: 5.2,
    description: "Vibrant diffuse stellar nursery visible to the naked eye in Orion's Sword."
  },
  {
    id: "M45",
    name: "Pleiades Cluster",
    catalog: "M45",
    type: "STAR_CLUSTER",
    ra: 3.79, dec: 24.11,
    color: "#80D8FF",
    size: 4.5,
    description: "Seven Sisters open star cluster dominated by hot blue luminous stars."
  },
  {
    id: "M1",
    name: "Crab Nebula",
    catalog: "M1 / NGC 1952",
    type: "NEBULA",
    ra: 5.57, dec: 22.01,
    color: "#FFAB40",
    size: 3.5,
    description: "Supernova remnant in Taurus resulting from bright star explosion recorded in 1054 AD."
  },
  {
    id: "M57",
    name: "Ring Nebula",
    catalog: "M57 / NGC 6720",
    type: "PLANETARY_NEBULA",
    ra: 18.89, dec: 33.03,
    color: "#00E676",
    size: 3.2,
    description: "Glowing shell of ionized gas expelled by a dying red giant star in Lyra."
  },
  {
    id: "M51",
    name: "Whirlpool Galaxy",
    catalog: "M51 / NGC 5194",
    type: "GALAXY",
    ra: 13.5, dec: 47.2,
    color: "#D1C4E9",
    size: 4.0,
    description: "Classic face-on grand design spiral galaxy interacting with smaller companion."
  },
  {
    id: "NGC3372",
    name: "Carina Nebula",
    catalog: "NGC 3372",
    type: "NEBULA",
    ra: 10.74, dec: -59.87,
    color: "#FF5252",
    size: 5.5,
    description: "Colossal emission nebula containing hypergiant star Eta Carinae in Southern sky."
  },
  {
    id: "OMEGA_CEN",
    name: "Omega Centauri",
    catalog: "NGC 5139",
    type: "STAR_CLUSTER",
    ra: 13.44, dec: -47.48,
    color: "#FFE082",
    size: 4.2,
    description: "Largest and brightest globular cluster in the Milky Way harboring ~10 million stars."
  },
  {
    id: "M104",
    name: "Sombrero Galaxy",
    catalog: "M104 / NGC 4594",
    type: "GALAXY",
    ra: 12.67, dec: -11.62,
    color: "#FFF9C4",
    size: 3.8,
    description: "Lenticular galaxy with a prominent dark dust lane ringing its luminous bulge."
  },
  {
    id: "M8",
    name: "Lagoon Nebula",
    catalog: "M8 / NGC 6523",
    type: "NEBULA",
    ra: 18.06, dec: -24.38,
    color: "#FF8A80",
    size: 4.6,
    description: "Giant interstellar cloud and stellar nursery located in constellation Sagittarius."
  }
];

// Calculate approximate real-time right ascension and declination for major celestial bodies
export function getRealtimeCelestialBodies(date = new Date()): CelestialBody[] {
  // Days since J2000 epoch (2000 Jan 1.5)
  const d = (date.getTime() / 86400000) - 10957.5;
  const T = d / 36525;

  // Obliquity of the ecliptic (~23.44 deg)
  const epsDeg = 23.4393 - 0.013 * T;
  const eps = (epsDeg / 180) * Math.PI;

  // Ecliptic coordinates to Equatorial RA (hours) and Dec (degrees) helper
  const eclipticToEquatorial = (lonDeg: number, latDeg: number) => {
    const l = (lonDeg / 180) * Math.PI;
    const b = (latDeg / 180) * Math.PI;
    const sinDec = Math.sin(b) * Math.cos(eps) + Math.cos(b) * Math.sin(eps) * Math.sin(l);
    const decRad = Math.asin(Math.max(-1, Math.min(1, sinDec)));
    const y = Math.sin(l) * Math.cos(eps) - Math.tan(b) * Math.sin(eps);
    const x = Math.cos(l);
    let raRad = Math.atan2(y, x);
    if (raRad < 0) raRad += Math.PI * 2;
    return {
      ra: (raRad / (Math.PI * 2)) * 24,
      dec: (decRad / Math.PI) * 180
    };
  };

  // 1. Sun (mean solar longitude along ecliptic)
  const L_sun = (280.460 + 0.9856474 * d) % 360;
  const g_sun = ((357.528 + 0.9856003 * d) % 360) * (Math.PI / 180);
  const eclLonSun = (L_sun + 1.915 * Math.sin(g_sun) + 0.020 * Math.sin(2 * g_sun) + 360) % 360;
  const sunPos = eclipticToEquatorial(eclLonSun, 0);

  // 2. Moon (approximate lunar orbit)
  const L_moon = (218.316 + 13.176396 * d) % 360;
  const M_moon = ((134.963 + 13.064993 * d) % 360) * (Math.PI / 180);
  const F_moon = ((93.272 + 13.229350 * d) % 360) * (Math.PI / 180);
  const eclLonMoon = (L_moon + 6.289 * Math.sin(M_moon) + 360) % 360;
  const eclLatMoon = 5.128 * Math.sin(F_moon);
  const moonPos = eclipticToEquatorial(eclLonMoon, eclLatMoon);

  // 3. Mercury
  const L_merc = (252.25 + 4.092334 * d) % 360;
  const mercPos = eclipticToEquatorial(L_merc, 1.5 * Math.sin(d * 0.05));

  // 4. Venus
  const L_ven = (181.98 + 1.602130 * d) % 360;
  const venPos = eclipticToEquatorial(L_ven, 2.1 * Math.sin(d * 0.03));

  // 5. Mars
  const L_mars = (355.45 + 0.524033 * d) % 360;
  const marsPos = eclipticToEquatorial(L_mars, 1.8 * Math.sin(d * 0.01));

  // 6. Jupiter
  const L_jup = (34.35 + 0.083085 * d) % 360;
  const jupPos = eclipticToEquatorial(L_jup, 1.3 * Math.sin(d * 0.005));

  // 7. Saturn
  const L_sat = (50.08 + 0.033444 * d) % 360;
  const satPos = eclipticToEquatorial(L_sat, 2.4 * Math.sin(d * 0.003));

  // 8. Uranus
  const L_ura = (313.23 + 0.011726 * d) % 360;
  const uraPos = eclipticToEquatorial(L_ura, 0.7);

  // 9. Neptune
  const L_nep = (304.88 + 0.005981 * d) % 360;
  const nepPos = eclipticToEquatorial(L_nep, -0.5);

  // 10. Pluto
  const L_plu = (238.93 + 0.003974 * d) % 360;
  const pluPos = eclipticToEquatorial(L_plu, 15.0 * Math.sin(d * 0.001));

  return [
    {
      id: "SUN",
      name: "Sol (The Sun)",
      type: "SUN",
      ra: sunPos.ra, dec: sunPos.dec,
      color: "#FFD700", glowColor: "rgba(255, 215, 0, 0.55)",
      size: 9.0, symbol: "☀️",
      description: "Our home star, a G-type main-sequence yellow dwarf driving life in the Solar System."
    },
    {
      id: "MOON",
      name: "Luna (The Moon)",
      type: "MOON",
      ra: moonPos.ra, dec: moonPos.dec,
      color: "#F5F5F5", glowColor: "rgba(245, 245, 245, 0.45)",
      size: 7.5, symbol: "🌙",
      description: "Earth's natural satellite, orbiting every 27.3 days and driving ocean tides."
    },
    {
      id: "VENUS",
      name: "Venus",
      type: "PLANET",
      ra: venPos.ra, dec: venPos.dec,
      color: "#FFF8E7", glowColor: "rgba(255, 248, 231, 0.6)",
      size: 5.5, symbol: "♀️",
      description: "The Morning and Evening Star, brightest planet in Earth's sky shrouded in dense sulfuric clouds."
    },
    {
      id: "JUPITER",
      name: "Jupiter",
      type: "PLANET",
      ra: jupPos.ra, dec: jupPos.dec,
      color: "#FFE0B2", glowColor: "rgba(255, 224, 178, 0.5)",
      size: 6.2, symbol: "♃",
      description: "Largest gas giant of the Solar System sporting the iconic Great Red Spot."
    },
    {
      id: "MARS",
      name: "Mars",
      type: "PLANET",
      ra: marsPos.ra, dec: marsPos.dec,
      color: "#FF6E40", glowColor: "rgba(255, 110, 64, 0.5)",
      size: 4.8, symbol: "♂️",
      description: "The Red Planet covered in iron oxide sand dunes and massive shield volcanoes."
    },
    {
      id: "SATURN",
      name: "Saturn",
      type: "PLANET",
      ra: satPos.ra, dec: satPos.dec,
      color: "#FFF59D", glowColor: "rgba(255, 245, 157, 0.45)",
      size: 5.8, symbol: "♄",
      description: "Majestic ringed gas giant adorned with complex bands of ice and dust."
    },
    {
      id: "MERCURY",
      name: "Mercury",
      type: "PLANET",
      ra: mercPos.ra, dec: mercPos.dec,
      color: "#CFD8DC", glowColor: "rgba(207, 216, 220, 0.4)",
      size: 3.8, symbol: "☿",
      description: "Fastest planet orbiting closest to the Sun with extreme temperature swings."
    },
    {
      id: "URANUS",
      name: "Uranus",
      type: "PLANET",
      ra: uraPos.ra, dec: uraPos.dec,
      color: "#80DEEA", glowColor: "rgba(128, 222, 234, 0.45)",
      size: 4.5, symbol: "♅",
      description: "Ice giant tipped on its side with a serene cyan methane atmosphere."
    },
    {
      id: "NEPTUNE",
      name: "Neptune",
      type: "PLANET",
      ra: nepPos.ra, dec: nepPos.dec,
      color: "#448AFF", glowColor: "rgba(68, 138, 255, 0.5)",
      size: 4.5, symbol: "♆",
      description: "Deep blue windiest ice giant on the distant outer frontier of our Solar System."
    },
    {
      id: "PLUTO",
      name: "Pluto",
      type: "DWARF_PLANET",
      ra: pluPos.ra, dec: pluPos.dec,
      color: "#D7CCC8", glowColor: "rgba(215, 204, 200, 0.35)",
      size: 3.2, symbol: "♇",
      description: "Beloved icy dwarf planet residing in the Kuiper Belt."
    }
  ];
}
