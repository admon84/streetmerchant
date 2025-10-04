import {Store, Brand, Series, Model} from '../store';

export const Target: Store = {
  // disableAdBlocker: true,
  currency: '$',
  captchaDeterrent: {
    hardLinks: [
      'https://www.target.com/',
      'https://www.target.com/s?searchTerm=pokemon+cards',
      'https://www.target.com/c/collectible-trading-cards-hobby-collectibles-toys/pokemon/-/N-27p31Z569t0',
    ],
    searchUrl: 'https://www.target.com/s?searchTerm=%%s',
    searchTerms: [
      'pokemon+booster+display+box',
      'pokemon+booster+bundle',
      'pokemon+elite+trainer+box',
    ],
  },
  labels: {
    captcha: {
      container: 'body',
      text: ['made us think you were a bot'],
    },
    inStock: [
      {
        container: '[data-test="preorderButton"]',
        text: ['Preorder now'],
      },
      {
        container: '[data-test="shipItButton"]',
        text: ['Ship it'],
      },
    ],
    maxPrice: {
      container: '[data-test="product-price"]',
    },
  },
  links: [
    // ----================----
    // ---- Mega Evolution ----
    // ----================----
    // Mega Booster Bundle — 94681782
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681782',
    },
    // Mega Booster Box — 94886127
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94886127',
    },
    // Mega Gardevoir ETB — 94681784
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681784',
    },
    // Mega Lucario ETB — 94681776
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681776',
    },
    // Mega Sleeved Booster 1 — 94681787
    {
      brand: Brand.Pokemon,
      model: Model.BoosterPack,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681787',
    },
    // Mega Sleeved Booster 2 — 94681769
    {
      brand: Brand.Pokemon,
      model: Model.BoosterPack,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681769',
    },
    // Mega Checklane Blister — 94681764
    {
      brand: Brand.Pokemon,
      model: Model.Blister2Pack,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681764',
    },
    // Mega Golduck 3PK Blister — 94681786
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681786',
    },
    // Mega Psyduck 3PK Blister — 94681766
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.MegaEvolution,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681766',
    },

    // ----==========================----
    // ---- Black Bolt & White Flare ----
    // ----==========================----
    // WHT Binder — 94636851
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.WhiteFlare,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94636851',
    },
    // BLK Binder — 94636856
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.BlackBolt,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94636856',
    },
    // WHT Sticker 3PK — 94681780
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.WhiteFlare,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681780',
    },
    // BLK Sticker 3PK — 94681767
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.BlackBolt,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681767',
    },
    // WHT ETB — 94636860
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.WhiteFlare,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94636860',
    },
    // BLK ETB — 94636862
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.BlackBolt,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94636862',
    },
    // WHT Bundle — 94681785
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.WhiteFlare,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681785',
    },
    // BLK Bundle — 94681770
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.BlackBolt,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94681770',
    },
    // Unova Collection — 94636866
    {
      brand: Brand.Pokemon,
      model: Model.UnovaCollection,
      series: Series.BlackBolt,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94636866',
    },

    // ----=================----
    // ---- Destined Rivals ----
    // ----=================----
    // DR Garchomp Collection — 94411712
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.DestinedRivals,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94411712',
    },
    // DR Mewtwo Box — 94411681
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.DestinedRivals,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94411681',
    },
    // DR Booster Box — 94300071
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.DestinedRivals,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300071',
    },
    // DR Booster Bundle — 94300067
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.DestinedRivals,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300067',
    },
    // DR ETB — 94300069
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.DestinedRivals,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300069',
    },
    // DR 3 Pack Blister — 94300051
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.DestinedRivals,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300051',
    },
    // DR 3 Pack Blister #2 — 94300082
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.DestinedRivals,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300082',
    },
    // DR Single Blister — 94300061
    {
      brand: Brand.Pokemon,
      model: Model.Blister2Pack,
      series: Series.DestinedRivals,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300061',
    },

    // ----======================----
    // ---- Prismatic Evolutions ----
    // ----======================----
    // Pris SPC — 94300072
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.PrismaticEvolutions,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300072',
    },
    // Pris Pouch Collection — 94300053
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.PrismaticEvolutions,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300053',
    },
    // Pris Glaceon Sticker — 94300080
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.PrismaticEvolutions,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300080',
    },
    // Pris Sylveon Sticker — 94300058
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.PrismaticEvolutions,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300058',
    },
    // Pris Leafeon Sticker — 94300075
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.PrismaticEvolutions,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300075',
    },
    // Pris Binder Collection — 94300066
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.PrismaticEvolutions,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94300066',
    },
    // Pris Surprise Box — 94336414
    {
      brand: Brand.Pokemon,
      model: Model.SurpriseBox,
      series: Series.PrismaticEvolutions,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94336414',
    },
    // Pris Booster Bundle — 93954446
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.PrismaticEvolutions,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-93954446',
    },
    // Pris Poster Collection — 93803457
    {
      brand: Brand.Pokemon,
      model: Model.PosterCollection,
      series: Series.PrismaticEvolutions,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-93803457',
    },
    // Pris ETB — 93954435
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.PrismaticEvolutions,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-93954435',
    },

    // ----================----
    // ---- 151 Collection ----
    // ----================----
    // 151 Blooming — 94724987
    {
      brand: Brand.Pokemon,
      model: Model.BloomingWaters,
      series: Series.OneFiveOne,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94724987',
    },
    // 151 UPC — 88897906
    {
      brand: Brand.Pokemon,
      model: Model.UltimatePremiumCollection,
      series: Series.OneFiveOne,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-88897906',
    },
    // 151 Booster Bundle — 88897904
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.OneFiveOne,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-88897904',
    },
    // 151 Zapdos Box — 88897898
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.OneFiveOne,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-88897898',
    },
    // 151 Alakazam — 89444931
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.OneFiveOne,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-89444931',
    },
    // 151 ETB — 88897899
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.OneFiveOne,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-88897899',
    },
    // 151 Binder — 89444929
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.OneFiveOne,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-89444929',
    },
    // 151 Poster — 89444928

    // ----===============----
    // ---- Paldean Fates ----
    // ----===============----
    // PF Booster Bundle — 89432660
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.PaldeanFates,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-89432660',
    },
    // PF ETB — 89432659
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.PaldeanFates,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-89432659',
    },

    // ----==============----
    // ---- Crown Zenith ----
    // ----==============----
    // CZ Booster Bundle — 94091405
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.CrownZenith,
      url: 'https://www.target.com/p/pokemon-trading-cards/-/A-94091405',
    },
  ],
  name: 'target',
  country: 'US',
  backoffStatusCodes: [403, 429, 503],
  successStatusCodes: [
    [200, 299],
    [400, 404],
  ],
  waitUntil: 'domcontentloaded',
};
