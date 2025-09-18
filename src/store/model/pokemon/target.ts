import {Store} from '../store';

export const Target: Store = {
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
      url: 'https://www.target.com/p/pok-233-mon-trading-card-game-mega-evolution-elite-trainer-box-lucario/-/A-94681776#lnk=sametab',
    },
    {
      brand: 'pokemon',
      model: 'elite-trainer-box',
      series: 'mega-evolution',
      url: 'https://www.target.com/p/pok-233-mon-trading-card-game-mega-evolution-elite-trainer-box-gardevoir/-/A-94681784#lnk=sametab',
    },
    {
      brand: 'pokemon',
      model: 'booster-bundle',
      series: 'mega-evolution',
      url: 'https://www.target.com/p/pok-233-mon-trading-card-game-mega-evolution-booster-bundle/-/A-94681782#lnk=sametab',
    },
    {
      brand: 'pokemon',
      model: 'booster-display-box',
      series: 'mega-evolution',
      url: 'https://www.target.com/p/pok-233-mon-trading-card-game-mega-evolution-booster-display/-/A-94886127#lnk=sametab',
    },
    {
      brand: 'pokemon',
      model: 'booster-bundle',
      series: 'scarlet-violet-destined-rivals',
      url: 'https://www.target.com/p/pok-233-mon-trading-card-game-scarlet-38-violet-8212-destined-rivals-booster-bundle/-/A-94300067#lnk=sametab',
    },
    {
      brand: 'pokemon',
      model: 'elite-trainer-box',
      series: 'scarlet-violet-destined-rivals',
      url: 'https://www.target.com/p/pok-233-mon-trading-card-game-scarlet-38-violet-8212-destined-rivals-elite-trainer-box/-/A-94300069#lnk=sametab',
    },
  ],
  name: 'target',
  country: 'US',
  waitUntil: 'networkidle0',
  minPageSleep: 30000,
  maxPageSleep: 45000,
};
