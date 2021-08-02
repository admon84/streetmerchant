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
    //   brand: 'discmania originals',
    //   model: 'p2',
    //   series: 'd-line',
    //   url: 'https://europe.discmania.net/collections/p2/products/d-line-p2',
    // },
    {
      brand: 'discmania',
      model: 'dd3',
      series: 's-line',
      url: 'https://www.discmania.net/products/s-line-dd3',
    },
    {
      brand: 'discmania',
      model: 'cd2',
      series: 's-line',
      url: 'https://www.discmania.net/products/s-line-cd2',
    }
  ],
  name: 'discmania',
  waitUntil: 'domcontentloaded',
};
