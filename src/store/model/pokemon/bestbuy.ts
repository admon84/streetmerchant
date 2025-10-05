import {Brand, Model, Series, Store} from '../store';

export const BestBuy: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.fulfillment-add-to-cart-button',
      text: ['add to cart'],
    },
    outOfStock: {
      container:
        'button.c-button.c-button-disabled[data-button-state="SOLD_OUT]',
      text: ['coming soon'],
    },
    maxPrice: {
      container: '.priceView-price',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://api.bestbuy.com/click/-/6489491/pdp',
    },

    // Mega Evolutions Links
    // Mega Booster Bundle — 6639108
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.MegaEvolution,
      url: 'https://api.bestbuy.com/click/-/6639108/pdp',
    },
    // Mega Booster Box — 6639109
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.MegaEvolution,
      url: 'https://api.bestbuy.com/click/-/6639109/pdp',
    },
    // Mega ETB Varies — 6639103
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.MegaEvolution,
      url: 'https://api.bestbuy.com/click/-/6639103/pdp',
    },
    // Mega Sleeved Booster — 6639110
    {
      brand: Brand.Pokemon,
      model: Model.BoosterPack,
      series: Series.MegaEvolution,
      url: 'https://api.bestbuy.com/click/-/6639110/pdp',
    },
    // Mega 3PK Blister — 6639101
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.MegaEvolution,
      url: 'https://api.bestbuy.com/click/-/6639101/pdp',
    },
    // Mega Mini Tin Varies — 6639102
    {
      brand: Brand.Pokemon,
      model: Model.MiniTin2Pack,
      series: Series.MegaEvolution,
      url: 'https://api.bestbuy.com/click/-/6639102/pdp',
    },
    // ⸻⸻⸻⸻⸻
    // Black Bolt and White Flare Links
    // WHT ETB — 6632397
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.BlackBolt,
      url: 'https://api.bestbuy.com/click/-/6632397/pdp',
    },
    // BLK ETB — 6632397
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.BlackBolt,
      url: 'https://api.bestbuy.com/click/-/6632397/pdp',
    },
    // WHT Booster Bundle — 6632399
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.BlackBolt,
      url: 'https://api.bestbuy.com/click/-/6632399/pdp',
    },
    // BLK Booster Bundle — 6632402
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.BlackBolt,
      url: 'https://api.bestbuy.com/click/-/6632402/pdp',
    },
    // WHT Binder — 6632390
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.BlackBolt,
      url: 'https://api.bestbuy.com/click/-/6632390/pdp',
    },
    // BLK Binder — 6632388
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.BlackBolt,
      url: 'https://api.bestbuy.com/click/-/6632388/pdp',
    },
    // WHT Sticker 3PK — 6632395
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.BlackBolt,
      url: 'https://api.bestbuy.com/click/-/6632395/pdp',
    },
    // BLK Sticker 3PK — 6632393
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.BlackBolt,
      url: 'https://api.bestbuy.com/click/-/6632393/pdp',
    },
    // Unova Collection — 6632391
    {
      brand: Brand.Pokemon,
      model: Model.UnovaCollection,
      series: Series.BlackBolt,
      url: 'https://api.bestbuy.com/click/-/6632391/pdp',
    },
    // ⸻⸻⸻⸻⸻
    // Destined Rivals Links
    // DR Booster Box — 6624826
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.DestinedRivals,
      url: 'https://api.bestbuy.com/click/-/6624826/pdp',
    },
    // DR ETB — 6624825
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.DestinedRivals,
      url: 'https://api.bestbuy.com/click/-/6624825/pdp',
    },
    // DR Booster Bundle — 6624828
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.DestinedRivals,
      url: 'https://api.bestbuy.com/click/-/6624828/pdp',
    },
    // DR Garchomp Collection — 6625124
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.DestinedRivals,
      url: 'https://api.bestbuy.com/click/-/6625124/pdp',
    },
    // DR Mewtwo Box — 6625125
    {
      brand: Brand.Pokemon,
      model: Model.Box2Pack,
      series: Series.DestinedRivals,
      url: 'https://api.bestbuy.com/click/-/6625125/pdp',
    },
    // DR 3PK Booster — 6624830
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.DestinedRivals,
      url: 'https://api.bestbuy.com/click/-/6624830/pdp',
    },
    // DR Sleeved Booster — 6624827
    {
      brand: Brand.Pokemon,
      model: Model.BoosterPack,
      series: Series.DestinedRivals,
      url: 'https://api.bestbuy.com/click/-/6624827/pdp',
    },
    // ⸻⸻⸻⸻⸻
    // Prismatic Evolutions Links
    // Pris Glaceon Sticker — 6606078
    // {
    //   brand: Brand.Pokemon,
    //   model: Model.Blister3Pack,
    //   series: Series.PrismaticEvolutions,
    //   url: 'https://api.bestbuy.com/click/-/6606078/pdp',
    // },
    // Pris Binder Collection — 6606079
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.PrismaticEvolutions,
      url: 'https://api.bestbuy.com/click/-/6606079/pdp',
    },
    // Pris Surprise Box — 6607717
    {
      brand: Brand.Pokemon,
      model: Model.SurpriseBox,
      series: Series.PrismaticEvolutions,
      url: 'https://api.bestbuy.com/click/-/6607717/pdp',
    },
    // Pris Booster Bundle — 6608206
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.PrismaticEvolutions,
      url: 'https://api.bestbuy.com/click/-/6608206/pdp',
    },
    // Pris Poster Collection — 6606080
    {
      brand: Brand.Pokemon,
      model: Model.PosterCollection,
      series: Series.PrismaticEvolutions,
      url: 'https://api.bestbuy.com/click/-/6606080/pdp',
    },
    // PRIS ETB — 6606082
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.PrismaticEvolutions,
      url: 'https://api.bestbuy.com/click/-/6606082/pdp',
    },
    // Pris Mini Tin — 6607719
    {
      brand: Brand.Pokemon,
      model: Model.MiniTin2Pack,
      series: Series.PrismaticEvolutions,
      url: 'https://api.bestbuy.com/click/-/6607719/pdp',
    },
    // Pris 2-Pack Blister — 6607716
    {
      brand: Brand.Pokemon,
      model: Model.Blister2Pack,
      series: Series.PrismaticEvolutions,
      url: 'https://api.bestbuy.com/click/-/6607716/pdp',
    },
    // ⸻⸻⸻⸻⸻
    // 151 Links
    // 151 Blooming — 6609201
    {
      brand: Brand.Pokemon,
      model: Model.BloomingWaters,
      series: Series.OneFiveOne,
      url: 'https://api.bestbuy.com/click/-/6609201/pdp',
    },
  ],
  name: 'bestbuy',
  country: 'US',
};

/* Copy Paste template

Paste the SKU from the site in between both sets of /-// example: /-/sku/cart, /-/sku/pdp

{
  brand: '',
  cartUrl: 'https://api.bestbuy.com/click/-//cart',
  model: '',
  series: '',
  url: 'https://api.bestbuy.com/click/-//pdp',
},
*/
