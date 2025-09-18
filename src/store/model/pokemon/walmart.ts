import {Store} from '../store';

export const Walmart: Store = {
  currency: '$',
  captchaDeterrent: {
    hardLinks: [
      'https://www.walmart.com/',
      'https://www.walmart.com/search?q=pokemon+trading+cards',
    ],
    searchUrl: 'https://www.walmart.com/search?q=%%s',
    searchTerms: [
      'pokemon+booster+display+box',
      'pokemon+booster+bundle',
      'pokemon+elite+trainer+box',
    ],
  },
  labels: {
    inStock: {
      container: '.button.spin-button.prod-ProductCTA--primary.button--primary',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'span[class*="price-characteristic"]',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.walmart.com/ip/Keurig-K-compact-Brewer-Black-Coffee-Maker/806217614',
    },
    {
      brand: 'pokemon',
      model: 'booster-bundle',
      series: 'scarlet-violet-white-flare',
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Scarlet-Violet-10-5-White-Bolt-Booster-Bundle-Set-6-Packs/16516160047',
    },
    {
      brand: 'pokemon',
      model: 'booster-bundle',
      series: 'scarlet-violet-black-bolt',
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Scarlet-Violet-Black-Bolt-Booster-Bundle/16484003729',
    },
    {
      brand: 'pokemon',
      model: 'booster-bundle',
      series: 'scarlet-violet-prismatic-evolution',
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Scarlet-Violet-Prismatic-Evolution-Booster-Bundle/14803962651',
    },
    {
      brand: 'pokemon',
      model: 'booster-bundle',
      series: 'mega-evolution',
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Mega-Evolution-Booster-Bundle/17344505131',
    },
    {
      brand: 'pokemon',
      model: 'elite-trainer-box',
      series: 'mega-evolution',
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Mega-Evolution-Elite-Trainer-Box/17525309434',
    },
    {
      brand: 'pokemon',
      model: 'elite-trainer-box',
      series: 'mega-evolution',
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Mega-Evolution-Elite-Trainer-Box/17576818418',
    },
    {
      brand: 'pokemon',
      model: 'elite-trainer-box',
      series: 'scarlet-violet-white-flare',
      url: 'https://www.walmart.com/ip/Pokemon-TCG-White-Flare-Elite-Trainer-Box/16446322202',
    },
    {
      brand: 'pokemon',
      model: 'elite-trainer-box',
      series: 'scarlet-violet-black-bolt',
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Black-Bolt-Elite-Trainer-Box/16498668973',
    },
  ],
  name: 'walmart',
  country: 'US',
  backoffStatusCodes: [403, 429, 503],
  successStatusCodes: [
    [200, 299],
    [400, 404],
  ],
  waitUntil: 'networkidle0',
};
