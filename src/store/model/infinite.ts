import {Store} from './store';

export const Infinite: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '#ContentPlaceHolder1_divBuyNowButton',
      text: ['select your disc'],
    },
    maxPrice: {
      container: '#ContentPlaceHolder1_lblOurPrice',
    },
    outOfStock: {
      container: '#ContentPlaceHolder1_tblPricing',
      text: ['out of stock'],
    },
  },
  links: [
    {
      brand: 'innova',
      model: 'firebird',
      series: 'champion glow - nate sexton',
      url: 'https://infinitediscs.com/Innova-Firebird/Champion-Colored-Glow',
    },
    {
      brand: 'innova',
      model: 'eagle',
      series: 'champion',
      url: 'https://infinitediscs.com/Innova-Eagle/Champion',
    },
    {
      brand: 'discmania',
      model: 'dd3',
      series: 's-line',
      url: 'https://infinitediscs.com/Discmania-DD3',
    },
    {
      brand: 'discmania',
      model: 'cd2',
      series: 's-line',
      url: 'https://infinitediscs.com/Discmania-CD2',
    },
  ],
  name: 'infinite',
  waitUntil: 'domcontentloaded',
};
