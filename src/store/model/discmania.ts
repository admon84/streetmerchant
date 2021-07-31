import {Store} from './store';

export const Discmania: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#AddToCartText',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.js-product-price-text .money',
    },
    outOfStock: {
      container: '#AddToCartText',
      text: ['sold out'],
    },
  },
  links: [
    // {
    //   brand: 'discmania',
    //   model: 'p2',
    //   series: 'd-line',
    //   url: 'https://www.discmania.net/collections/p2/products/d-line-p2-1',
    // },
    {
      brand: 'discmania',
      model: 'p2',
      series: 'd-line',
      url: 'https://europe.discmania.net/collections/p2/products/d-line-p2',
    },
  ],
  name: 'discmania',
  waitUntil: 'domcontentloaded',
};
