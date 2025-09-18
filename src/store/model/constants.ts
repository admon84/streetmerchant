// Arrays containing all valid values for Pokemon TCG
export const BRANDS = ['test:brand', 'captcha-deterrent', 'pokemon'] as const;

export const SERIES = [
  'test:series',
  'captcha-deterrent',
  'crown-zenith',
  'scarlet-violet',
  'scarlet-violet-prismatic-evolution',
  'scarlet-violet-journey-together',
  'scarlet-violet-destined-rivals',
  'scarlet-violet-black-bolt',
  'scarlet-violet-white-flare',
  'scarlet-violet-stellar-crown',
  'scarlet-violet-shrouded-fable',
  'scarlet-violet-twilight-masquerade',
  'scarlet-violet-temporal-forces',
  'scarlet-violet-paldean-fates',
  'scarlet-violet-paradox-rift',
  'scarlet-violet-obsidian-flames',
  'scarlet-violet-paldea-evolved',
  'mega-evolution',
  'mega-evolution-phantasmal-flames',
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
export type Brand = typeof BRANDS[number];
export type Series = typeof SERIES[number];
export type Model = typeof MODELS[number];
