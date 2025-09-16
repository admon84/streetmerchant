import {Store} from './store';

export const PokemonCenter: Store = {
  backoffStatusCodes: [403, 429, 503],
  captchaDeterrent: {
    hardLinks: [
      'https://www.pokemoncenter.com/',
      'https://www.pokemoncenter.com/category/tcg-cards',
      'https://www.pokemoncenter.com/category/tcg-cards?category=boxed-sets',
    ],
    searchTerms: ['booster-display-box', 'booster-bundle', 'elite-trainer-box'],
    searchUrl: 'https://www.pokemoncenter.com/search/%%s',
  },
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['please verify you are a human'],
    },
    inStock: {
      container: '#product button',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '#product > div > div p span',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.pokemoncenter.com/product/290-80906/',
    },
    {
      brand: 'Pokemon',
      model: 'Mega Evolution-Phantasmal Flames',
      series: 'Booster Display Box',
      url: 'https://www.pokemoncenter.com/product/10-10190-119/',
    },
    {
      brand: 'Pokemon',
      model: 'Mega Evolution-Phantasmal Flames',
      series: 'Booster Bundle',
      url: 'https://www.pokemoncenter.com/product/10-10191-109/',
    },
    {
      brand: 'Pokemon',
      model: 'Mega Evolution-Phantasmal Flames',
      series: 'Elite Trainer Box',
      url: 'https://www.pokemoncenter.com/product/10-10186-109/',
    },
    {
      brand: 'Pokemon',
      model: 'Scarlet & Violet-Prismatic Evolutions',
      series: 'Elite Trainer Box',
      url: 'https://www.pokemoncenter.com/product/100-10019',
    },
  ],
  name: 'pokemon-center',
  country: 'US',
  successStatusCodes: [
    [200, 299],
    [400, 404],
  ],
  waitUntil: 'networkidle0',
  minPageSleep: 30000,
  maxPageSleep: 45000,
};
