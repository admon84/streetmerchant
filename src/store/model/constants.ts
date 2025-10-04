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
  BoosterPack: 'booster-pack',
  MiniTin2Pack: 'mini-tin-2-pack',
  Blister2Pack: 'blister-2-pack',
  Blister3Pack: 'blister-3-pack',
  BoosterBundle: 'booster-bundle',
  BoosterBundle2Pack: 'booster-bundle-2-pack',
  EliteTrainerBox: 'elite-trainer-box',
  MiniTinDisplay: 'mini-tin-display',
  BoosterDisplayBox: 'booster-display-box',
  PosterCollection: 'poster-collection',
  BinderCollection: 'binder-collection',
  UnovaCollection: 'unova-collection',
  SurpriseBox: 'surprise-box',
  Box2Pack: 'box-2-pack',
  Box3Pack: 'box-3-pack',
  UPC: 'upc',
} as const;

// Types derived from the value objects
export type TBrand = typeof Brand[keyof typeof Brand];
export type TSeries = typeof Series[keyof typeof Series];
export type TModel = typeof Model[keyof typeof Model];

// Arrays containing all valid values for Pokemon TCG (generated from value objects)
export const BRANDS = Object.values(Brand) as readonly TBrand[];
export const SERIES = Object.values(Series) as readonly TSeries[];
export const MODELS = Object.values(Model) as readonly TModel[];
