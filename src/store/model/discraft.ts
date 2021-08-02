import {Store} from './store';

export const Discraft: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.order-box .btn-add-to-basket',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.order-box .lbl-price',
    },
    outOfStock: {
      container: '.order-box .out-stock',
      text: ['out of stock'],
    },
  },
  links: [
    {
      brand: 'discraft',
      model: 'undertaker',
      series: 'titanium - paul mcbeth',
      url: 'https://www.discraft.com/titanium-undertaker-paul-mcbeth-signature-series-pmtiundertaker',
    },
  ],
  name: 'discraft',
  waitUntil: 'domcontentloaded',
};
