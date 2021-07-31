import {Store} from './store';

export const InnovaProShop: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '#add-to-cart-wrapper',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.price-section--withoutTax .price--withoutTax',
    },
    outOfStock: {
      container: '.productView-options .alertBox--error',
      text: ['sold out'],
    },
  },
  links: [
    {
      brand: 'innova',
      model: 'firebird',
      series: 'champion glow - nate sexton',
      url: 'https://proshop.innovadiscs.com/champion-glow-firebird-nate-sexton-tour-series/',
    },
  ],
  name: 'innova-pro-shop',
  waitUntil: 'domcontentloaded',
};
