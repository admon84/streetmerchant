import {Store} from '../store';

export const PokemonCenter: Store = {
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
      container: '#product button[class*="add-to-cart-button"]',
      text: ['add to cart'],
    },
    outOfStock: {
      container: '#product button[class*="add-to-cart-button"]',
      text: ['unavailable'],
    },
    maxPrice: {
      container: '#product p[class*="product-price"] span',
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
      brand: 'pokemon',
      model: 'booster-display-box',
      series: 'mega-evolution-phantasmal-flames',
      url: 'https://www.pokemoncenter.com/product/10-10190-119/',
    },
    {
      brand: 'pokemon',
      model: 'booster-bundle',
      series: 'mega-evolution-phantasmal-flames',
      url: 'https://www.pokemoncenter.com/product/10-10191-109/',
    },
    {
      brand: 'pokemon',
      model: 'elite-trainer-box',
      series: 'mega-evolution-phantasmal-flames',
      url: 'https://www.pokemoncenter.com/product/10-10186-109/',
    },
    {
      brand: 'pokemon',
      model: 'elite-trainer-box',
      series: 'scarlet-violet-prismatic-evolution',
      url: 'https://www.pokemoncenter.com/product/100-10019',
    },
  ],
  name: 'pokemon-center',
  country: 'US',
  backoffStatusCodes: [403, 429, 503],
  successStatusCodes: [
    [200, 299],
    [400, 404],
  ],
  waitUntil: 'networkidle0',
};
