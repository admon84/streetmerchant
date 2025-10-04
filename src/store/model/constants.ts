// Arrays containing all valid values for Pokemon TCG
export const BRANDS = ['test:brand', 'captcha-deterrent', 'pokemon'] as const;

export const SERIES = [
  'test:series',
  'captcha-deterrent',
  'crown-zenith',
  'scarlet-violet',
  'prismatic-evolution', // scarlet-violet
  'journey-together', // scarlet-violet
  'destined-rivals', // scarlet-violet
  'black-bolt', // scarlet-violet
  'white-flare', // scarlet-violet
  'stellar-crown', // scarlet-violet
  'shrouded-fable', // scarlet-violet
  'twilight-masquerade', // scarlet-violet
  'temporal-forces', // scarlet-violet
  'paldean-fates', // scarlet-violet
  'paradox-rift', // scarlet-violet
  'obsidian-flames', // scarlet-violet
  'paldea-evolved', // scarlet-violet
  'mega-evolution',
  'phantasmal-flames', // mega-evolution
] as const;

export const MODELS = [
  'test:model',
  'captcha-deterrent',
  'single-booster-pack',
  'three-pack-blister',
  'booster-display-box',
  'booster-bundle',
  'elite-trainer-box',
  'surprise-box',
] as const;

// Types derived from the arrays
export type TBrand = typeof BRANDS[number];
export type TSeries = typeof SERIES[number];
export type TModel = typeof MODELS[number];

// Friendly value objects for IDE intellisense and typo-safety
export const Brand = {
  TestBrand: 'test:brand' as TBrand,
  CaptchaDeterrent: 'captcha-deterrent' as TBrand,
  Pokemon: 'pokemon' as TBrand,
} as const;

export const Series = {
  TestSeries: 'test:series' as TSeries,
  CaptchaDeterrent: 'captcha-deterrent' as TSeries,
  CrownZenith: 'crown-zenith' as TSeries,
  ScarletViolet: 'scarlet-violet' as TSeries,
  PrismaticEvolution: 'prismatic-evolution' as TSeries,
  JourneyTogether: 'journey-together' as TSeries,
  DestinedRivals: 'destined-rivals' as TSeries,
  BlackBolt: 'black-bolt' as TSeries,
  WhiteFlare: 'white-flare' as TSeries,
  StellarCrown: 'stellar-crown' as TSeries,
  ShroudedFable: 'shrouded-fable' as TSeries,
  TwilightMasquerade: 'twilight-masquerade' as TSeries,
  TemporalForces: 'temporal-forces' as TSeries,
  PaldeanFates: 'paldean-fates' as TSeries,
  ParadoxRift: 'paradox-rift' as TSeries,
  ObsidianFlames: 'obsidian-flames' as TSeries,
  PaldeaEvolved: 'paldea-evolved' as TSeries,
  MegaEvolution: 'mega-evolution' as TSeries,
  PhantasmalFlames: 'phantasmal-flames' as TSeries,
} as const;

export const Model = {
  TestModel: 'test:model' as TModel,
  CaptchaDeterrent: 'captcha-deterrent' as TModel,
  SingleBoosterPack: 'single-booster-pack' as TModel,
  ThreePackBlister: 'three-pack-blister' as TModel,
  BoosterDisplayBox: 'booster-display-box' as TModel,
  BoosterBundle: 'booster-bundle' as TModel,
  EliteTrainerBox: 'elite-trainer-box' as TModel,
  SurpriseBox: 'surprise-box' as TModel,
} as const;
