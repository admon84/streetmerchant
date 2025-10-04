import {Store, Brand, Series, Model} from '../store';

export const PokemonCenter: Store = {
  disableAdBlocker: true,
  // captchaDeterrent: {
  //   hardLinks: [
  //     'https://www.pokemoncenter.com/',
  //     'https://www.pokemoncenter.com/category/tcg-cards',
  //     'https://www.pokemoncenter.com/category/tcg-cards?category=boxed-sets',
  //   ],
  //   searchTerms: ['booster-display-box', 'booster-bundle', 'elite-trainer-box'],
  //   searchUrl: 'https://www.pokemoncenter.com/search/%%s',
  // },
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
      brand: Brand.TestBrand,
      model: Model.TestModel,
      series: Series.TestSeries,
      url: 'https://www.pokemoncenter.com/product/290-80906/',
    },
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.PhantasmalFlames,
      url: 'https://www.pokemoncenter.com/product/10-10190-119/',
    },
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.PhantasmalFlames,
      url: 'https://www.pokemoncenter.com/product/10-10191-109/',
    },
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.PhantasmalFlames,
      url: 'https://www.pokemoncenter.com/product/10-10186-109/',
    },
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.PrismaticEvolutions,
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
  waitUntil: 'domcontentloaded',
};
