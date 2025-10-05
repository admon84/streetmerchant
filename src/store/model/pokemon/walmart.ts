import {Store, Brand, Series, Model} from '../store';

// TODO: Add walmart queue detection (about to restock)

export const Walmart: Store = {
  disableAdBlocker: true,
  currency: '$',
  captchaDeterrent: {
    hardLinks: [
      'https://www.walmart.com/',
      'https://www.walmart.com/search?q=pokemon+trading+cards',
    ],
    searchUrl: 'https://www.walmart.com/search?q=%%s',
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
    inStock: {
      container: '.button.spin-button.prod-ProductCTA--primary.button--primary',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'span[class*="price-characteristic"]',
    },
  },
  links: [
    {
      brand: Brand.TestBrand,
      model: Model.TestModel,
      series: Series.TestSeries,
      url: 'https://www.walmart.com/ip/Keurig-K-compact-Brewer-Black-Coffee-Maker/806217614',
    },

    // Mega Evolutions Links
    // Mega Booster Bundle — 17344505131
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.MegaEvolution,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Mega-Evolution-Booster-Bundle/17344505131',
    },
    // Mega Booster Box — 17344605256
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.MegaEvolution,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Mega-Evolution-Booster-Box/17344605256',
    },
    // Mega ETB Varies — 17328862239
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.MegaEvolution,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Mega-Evolution-Elite-Trainer-Box/17328862239',
    },
    // Mega Sleeved Booster — 17344605257
    {
      brand: Brand.Pokemon,
      model: Model.BoosterPack,
      series: Series.MegaEvolution,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Mega-Evolution-Sleeved-Booster/17344605257',
    },
    // ⸻⸻⸻⸻⸻
    // Black Bolt and White Flare Links
    // WHT ETB — 16446322202
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.WhiteFlare,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-White-Flare-Elite-Trainer-Box/16446322202',
    },
    // BLK ETB — 16498668973
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.BlackBolt,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Black-Bolt-Elite-Trainer-Box/16498668973',
    },
    // WHT Booster Bundle — 16516160047
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.WhiteFlare,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-White-Flare-Booster-Bundle/16516160047',
    },
    // BLK Booster Bundle — 16484003729
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.BlackBolt,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Black-Bolt-Booster-Bundle/16484003729',
    },
    // WHT Binder — 16516160046
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.WhiteFlare,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-White-Flare-Binder-Collection/16516160046',
    },
    // BLK Binder — 16454374284
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.BlackBolt,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Black-Bolt-Binder-Collection/16454374284',
    },
    // WHT Sticker — 16448166186
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.WhiteFlare,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-White-Flare-Sticker-3PK/16448166186',
    },
    // BLK Sticker — 16448166601
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.BlackBolt,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Black-Bolt-Sticker-3PK/16448166601',
    },
    // Unova Poster — 16517213276
    {
      brand: Brand.Pokemon,
      model: Model.PosterCollection,
      series: Series.BlackBolt,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Unova-Poster/16517213276',
    },
    // Unova Collection — 16454274271
    {
      brand: Brand.Pokemon,
      model: Model.UnovaCollection,
      series: Series.BlackBolt,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Unova-Collection/16454274271',
    },
    // ⸻⸻⸻⸻⸻
    // Destined Rivals Links
    // DR Booster Display Box 36CT — 16017668684
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.DestinedRivals,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Destined-Rivals-Booster-Display-Box-36CT/16017668684',
    },
    // DR Build & Battle — 15958966839
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.DestinedRivals,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Destined-Rivals-Build-Battle/15958966839',
    },
    // DR MewTwo — 15992924968
    {
      brand: Brand.Pokemon,
      model: Model.BoosterDisplayBox,
      series: Series.DestinedRivals,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Destined-Rivals-MewTwo/15992924968',
    },
    // DR 3PK Blister — 16060605120
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.DestinedRivals,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Destined-Rivals-3PK-Blister/16060605120',
    },
    // DR Blister — 16034470614
    {
      brand: Brand.Pokemon,
      model: Model.Blister2Pack,
      series: Series.DestinedRivals,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Destined-Rivals-Blister/16034470614',
    },
    // DR ETB — 15718673510
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.DestinedRivals,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Destined-Rivals-ETB/15718673510',
    },
    // DR Garchomp — 16036963618
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.DestinedRivals,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Destined-Rivals-Garchomp/16036963618',
    },
    // DR Booster Bundle — 15700422581
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.DestinedRivals,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Destined-Rivals-Booster-Bundle/15700422581',
    },
    // ⸻⸻⸻⸻⸻
    // Prismatic Evolutions Links
    // Pouch Collection — 14169661774
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.PrismaticEvolutions,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Prismatic-Evolutions-Pouch-Collection/14169661774',
    },
    // Booster Bundle — 14803962651
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.PrismaticEvolutions,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Prismatic-Evolutions-Booster-Bundle/14803962651',
    },
    // Glaceon Sticker — 14885471059
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.PrismaticEvolutions,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Prismatic-Evolutions-Glaceon-Sticker/14885471059',
    },
    // Sylveon Sticker — 14862473632
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.PrismaticEvolutions,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Prismatic-Evolutions-Sylveon-Sticker/14862473632',
    },
    // Leafeon Sticker — 14904152274
    {
      brand: Brand.Pokemon,
      model: Model.Blister3Pack,
      series: Series.PrismaticEvolutions,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Prismatic-Evolutions-Leafeon-Sticker/14904152274',
    },
    // Binder Collection — 14078321300
    {
      brand: Brand.Pokemon,
      model: Model.BinderCollection,
      series: Series.PrismaticEvolutions,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Prismatic-Evolutions-Binder-Collection/14078321300',
    },
    // Poster Collection — 14091452016
    {
      brand: Brand.Pokemon,
      model: Model.PosterCollection,
      series: Series.PrismaticEvolutions,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Prismatic-Evolutions-Poster-Collection/14091452016',
    },
    // Elite Trainer Box — 13816151308
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.PrismaticEvolutions,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Prismatic-Evolutions-Elite-Trainer-Box/13816151308',
    },
    // Surprise Box — 14148473268
    {
      brand: Brand.Pokemon,
      model: Model.SurpriseBox,
      series: Series.PrismaticEvolutions,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Prismatic-Evolutions-Surprise-Box/14148473268',
    },
    // Mini Tin Display — 5984332803
    {
      brand: Brand.Pokemon,
      model: Model.MiniTinDisplay,
      series: Series.PrismaticEvolutions,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Prismatic-Evolutions-Mini-Tin-Display/5984332803',
    },
    // SPC — 15494520186
    {
      brand: Brand.Pokemon,
      model: Model.UltimatePremiumCollection,
      series: Series.PrismaticEvolutions,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Prismatic-Evolutions-SPC/5984332803',
    },
    // 2 Pack Blister — 14764973846
    {
      brand: Brand.Pokemon,
      model: Model.Blister2Pack,
      series: Series.PrismaticEvolutions,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Prismatic-Evolutions-2PK-Blister/14764973846',
    },
    // ⸻⸻⸻⸻⸻
    // 151 Links
    // 151 Tin Display — 16522474508
    {
      brand: Brand.Pokemon,
      model: Model.MiniTinDisplay,
      series: Series.OneFiveOne,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-151-Tin-Display/16522474508',
    },
    // 151 Mini Tin — 3034232830
    {
      brand: Brand.Pokemon,
      model: Model.MiniTin2Pack,
      series: Series.OneFiveOne,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-151-Mini-Tin/3034232830',
    },
    // 151 Booster Bundle — 1160437186
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.OneFiveOne,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-151-Booster-Bundle/1160437186',
    },
    // 151 Poster — 2121361619
    {
      brand: Brand.Pokemon,
      model: Model.PosterCollection,
      series: Series.OneFiveOne,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-151-Poster/2121361619',
    },
    // 151 Booster Bundle 2Pk — 15375908353
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle2Pack,
      series: Series.OneFiveOne,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-151-Booster-Bundle-2Pk/15375908353',
    },
    // 151 ETB — 3417089291
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.OneFiveOne,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-151-ETB/3417089291',
    },
    // 151 UPC — 3100716488
    {
      brand: Brand.Pokemon,
      model: Model.UltimatePremiumCollection,
      series: Series.OneFiveOne,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-151-UPC/3100716488',
    },
    // 151 Zapdos — 3534446787
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.OneFiveOne,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-151-Zapdos/3534446787',
    },
    // 151 Alakazam — 2555285136
    {
      brand: Brand.Pokemon,
      model: Model.EliteTrainerBox,
      series: Series.OneFiveOne,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-151-Alakazam/2555285136',
    },
    // ⸻⸻⸻⸻⸻
    // Paldean Fates Links
    // Booster Bundle — 5226743077
    {
      brand: Brand.Pokemon,
      model: Model.BoosterBundle,
      series: Series.PaldeanFates,
      url: 'https://www.walmart.com/ip/Pokemon-TCG-Paldean-Fates-Booster-Bundle/5226743077',
    },
  ],
  name: 'walmart',
  country: 'US',
  backoffStatusCodes: [403, 429, 503],
  successStatusCodes: [
    [200, 299],
    [400, 404],
  ],
  waitUntil: 'domcontentloaded',
};
