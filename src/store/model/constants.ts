// Friendly value objects for IDE intellisense and typo-safety
export const Brand = {
  TestBrand: 'test:brand',
  CaptchaDeterrent: 'captcha-deterrent',
  Pokemon: 'pokemon',
} as const;

export const Series = {
  TestSeries: 'test:series',
  CaptchaDeterrent: 'captcha-deterrent',

  // ---- Sword & Shield Era ----
  // SwordShield: 'sword-shield',
  // RebelClash: 'rebel-clash',
  // DarknessAblaze: 'darkness-ablaze',
  // ChampionsPath: 'champions-path',
  // VividVoltage: 'vivid-voltage',
  // ShiningFates: 'shining-fates',
  // BattleStyles: 'battle-styles',
  // ChillingReign: 'chilling-reign',
  // EvolvingSkies: 'evolving-skies',
  // Celebrations: 'celebrations',
  // FusionStrike: 'fusion-strike',
  // BrilliantStars: 'brilliant-stars',
  // AstralRadiance: 'astral-radiance',
  // PokemonGo: 'pokemon-go',
  // LostOrigin: 'lost-origin',
  // SilverTempest: 'silver-tempest',
  CrownZenith: 'crown-zenith',

  // ---- Scarlet & Violet Era ----
  ScarletViolet: 'scarlet-violet',
  PaldeaEvolved: 'paldea-evolved',
  ObsidianFlames: 'obsidian-flames',
  OneFiveOne: '151',
  ParadoxRift: 'paradox-rift',
  PaldeanFates: 'paldean-fates',
  TemporalForces: 'temporal-forces',
  TwilightMasquerade: 'twilight-masquerade',
  ShroudedFable: 'shrouded-fable',
  StellarCrown: 'stellar-crown',
  SurgingSparks: 'surging-sparks',
  PrismaticEvolutions: 'prismatic-evolutions',
  JourneyTogether: 'journey-together',
  DestinedRivals: 'destined-rivals',
  BlackBolt: 'black-bolt',
  WhiteFlare: 'white-flare',

  // ---- Mega Evolution Era ----
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
  SurpriseBox: 'surprise-box',
  Box2Pack: 'box-2-pack',
  Box3Pack: 'box-3-pack',
  PosterCollection: 'poster-collection',
  BinderCollection: 'binder-collection',
  UnovaCollection: 'unova-collection',
  BloomingWaters: 'blooming-waters',
  UltimatePremiumCollection: 'ultimate-premium-collection',
} as const;

// Types derived from the value objects
export type TBrand = typeof Brand[keyof typeof Brand];
export type TSeries = typeof Series[keyof typeof Series];
export type TModel = typeof Model[keyof typeof Model];

// Arrays containing all valid values for Pokemon TCG (generated from value objects)
export const BRANDS = Object.values(Brand) as readonly TBrand[];
export const SERIES = Object.values(Series) as readonly TSeries[];
export const MODELS = Object.values(Model) as readonly TModel[];
