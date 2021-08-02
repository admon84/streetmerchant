import {Store} from './store';
import {Browser, HTTPResponse} from 'puppeteer';
import {logger} from '../../logger';
import open from 'open';

export function generateOpenCartAction(product: string, url: string) {
  return async (browser: Browser) => {
    const page = await browser.newPage();

    const checkoutUrl = 'https://proshop.innovadiscs.com/checkout';

    logger.info(`🚀🚀🚀 [${InnovaProShop.name}] ${product}, starting auto add to cart... 🚀🚀🚀`);
    let response: HTTPResponse | null;
    try {

      logger.info(`🚀🚀🚀 [${InnovaProShop.name}] ${product}, adding to cart... 🚀🚀🚀`);
      response = await page.goto(url, {waitUntil: 'networkidle0'});
      if (response === null) {
        throw new Error('RenderProductPageFailed');
      }

      const selectQuery = '[data-product-option-change] .form-select:not(:disabled)';

      const selectArray = await page.$$(selectQuery);
      const selectWeight = selectArray[0];
      const selectColor = selectArray[1];

      const optionArray = await page.$$(`${selectQuery} > option:nth-child(2)`);
      const optionWeight = optionArray[0];
      const optionColor = optionArray[1];

      if (selectWeight && optionWeight) {
        const opionValue = await optionWeight.getProperty('value');
        if (opionValue) {
          const option: string = await opionValue.jsonValue();
          await selectWeight.select(option);
        }
      }

      if (selectColor && optionColor) {
        const opionValue = await optionColor.getProperty('value');
        if (opionValue) {
          const option: string = await opionValue.jsonValue();
          await selectColor.select(option);
        }
      }
      await page.click('input#form-action-addToCart');
      logger.info(`🚀🚀🚀 [${InnovaProShop.name}] ${product}, opening checkout: ${checkoutUrl} 🚀🚀🚀`);

    } catch (error) {
      logger.info(error);
      logger.error(`✖ [${InnovaProShop.name}] ${product} could not automatically add to cart, opening page`);
    }

    open(url);

    await page.close();

    return checkoutUrl;
  };
}

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
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://proshop.innovadiscs.com/dx-wraith/',
    },
    {
      brand: 'innova',
      model: 'firebird',
      series: 'champion glow - nate sexton',
      url: 'https://proshop.innovadiscs.com/champion-glow-firebird-nate-sexton-tour-series/',
    },
    // {
    //   brand: 'innova',
    //   model: 'destroyer',
    //   series: 'star - test',
    //   url: 'https://proshop.innovadiscs.com/star-destroyer-test/',
    // },
  ],
  name: 'innova-pro-shop',
  waitUntil: 'domcontentloaded',
};
