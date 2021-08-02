import {Store} from './store';

export const Sabattus: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.product-template-section .purchase-details .add_to_cart',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-template-section .current_price .money',
    },
    outOfStock: {
      container: '.product-template-section .sold_out',
      text: ['sold out'],
    },
  },
  links: [
    {
      brand: 'discmania',
      model: 'dd3',
      series: 's-line',
      url: 'https://sabattusdiscgolf.com/products/discmania-s-line-dd3-disc-golf-distance-driver',
    },
    {
      brand: 'discmania',
      model: 'cd2',
      series: 's-line',
      url: 'https://sabattusdiscgolf.com/products/discmania-s-line-cd2-disc-golf-control-driver',
    },
  ],
  name: 'sabattus',
  waitUntil: 'domcontentloaded',
};
