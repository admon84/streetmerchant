import {Store} from '../store';

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
    {
      brand: 'pokemon',
      model: 'elite-trainer-box',
      series: 'mega-evolution',
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681776',
    },
    {
      brand: 'pokemon',
      model: 'elite-trainer-box',
      series: 'mega-evolution',
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681784',
    },
    {
      brand: 'pokemon',
      model: 'booster-bundle',
      series: 'mega-evolution',
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681782',
    },
    {
      brand: 'pokemon',
      model: 'booster-display-box',
      series: 'mega-evolution',
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94886127',
    },
    {
      brand: 'pokemon',
      model: 'booster-bundle',
      series: 'destined-rivals',
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300067',
    },
    {
      brand: 'pokemon',
      model: 'elite-trainer-box',
      series: 'destined-rivals',
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
