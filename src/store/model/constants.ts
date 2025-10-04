// Friendly value objects for IDE intellisense and typo-safety
export const Brand = {
  TestBrand: 'test:brand',
  CaptchaDeterrent: 'captcha-deterrent',
  Pokemon: 'pokemon',
} as const;

export const Series = {
  TestSeries: 'test:series',
  CaptchaDeterrent: 'captcha-deterrent',
  CrownZenith: 'crown-zenith',
  ScarletViolet: 'scarlet-violet',
  PrismaticEvolution: 'prismatic-evolution',
  JourneyTogether: 'journey-together',
  DestinedRivals: 'destined-rivals',
  BlackBolt: 'black-bolt',
  WhiteFlare: 'white-flare',
  StellarCrown: 'stellar-crown',
  ShroudedFable: 'shrouded-fable',
  TwilightMasquerade: 'twilight-masquerade',
  TemporalForces: 'temporal-forces',
  PaldeanFates: 'paldean-fates',
  ParadoxRift: 'paradox-rift',
  ObsidianFlames: 'obsidian-flames',
  PaldeaEvolved: 'paldea-evolved',
  MegaEvolution: 'mega-evolution',
  PhantasmalFlames: 'phantasmal-flames',
} as const;

export const Model = {
  TestModel: 'test:model',
  CaptchaDeterrent: 'captcha-deterrent',
  SingleBoosterPack: 'single-booster-pack',
  ThreePackBlister: 'three-pack-blister',
  BoosterDisplayBox: 'booster-display-box',
  BoosterBundle: 'booster-bundle',
  EliteTrainerBox: 'elite-trainer-box',
  SurpriseBox: 'surprise-box',
} as const;

// Types derived from the value objects
export type TBrand = typeof Brand[keyof typeof Brand];
export type TSeries = typeof Series[keyof typeof Series];
export type TModel = typeof Model[keyof typeof Model];

// Arrays containing all valid values for Pokemon TCG (generated from value objects)
export const BRANDS = Object.values(Brand) as readonly TBrand[];
export const SERIES = Object.values(Series) as readonly TSeries[];
export const MODELS = Object.values(Model) as readonly TModel[];
