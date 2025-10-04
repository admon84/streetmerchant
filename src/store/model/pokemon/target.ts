import {Store, Brand, Series, Model} from '../store';

export const Target: Store = {
  // disableAdBlocker: true,
  currency: '$',
  captchaDeterrent: {
    hardLinks: [
      'https://www.target.com/',
      'https://www.target.com/s?searchTerm=pokemon+cards',
      'https://www.target.com/c/collectible-trading-cards-hobby-collectibles-toys/pokemon/-/N-27p31Z569t0',
    ],
    searchUrl: 'https://www.target.com/s?searchTerm=%%s',
    searchTerms: [
      'pokemon+booster+display+box',
      'pokemon+booster+bundle',
      'pokemon+elite+trainer+box',
    ],
  },
  labels: {
    captcha: {
      container: 'body',
      text: ['made us think you were a bot'],
    },
    inStock: [
      {
        container: '[data-test="preorderButton"]',
        text: ['Preorder now'],
      },
      {
        container: '[data-test="shipItButton"]',
        text: ['Ship it'],
      },
    ],
    maxPrice: {
      container: '[data-test="product-price"]',
    },
  },
  links: [
    // Mega Booster Bundle — 94681782
    // Mega Booster Box — 94886127
    // Mega Gardevoir ETB — 94681784
    // Mega Lucario ETB — 94681776
    // Mega Sleeved Booster 1 — 94681787
    // Mega Sleeved Booster 2 — 94681769
    // Mega Checklane Blister — 94681764
    // Mega Golduck 3PK Blister — 94681786
    // Mega Psyduck 3PK Blister — 94681766
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681782',
    },

    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681776',
    },
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681784',
    },
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681782',
    },
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94886127',
    },
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.DestinedRivals,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300067',
    },
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.DestinedRivals,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300069',
    },
  ],
  name: 'target',
  country: 'US',
  backoffStatusCodes: [403, 429, 503],
  successStatusCodes: [
    [200, 299],
    [400, 404],
  ],
  waitUntil: 'domcontentloaded',
};
