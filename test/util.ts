import {Browser, launch} from 'puppeteer';
import {config} from '../src/config';
import {logger} from '../src/logger';
import {Link, Store} from '../src/store/model';
import * as proxyChain from 'proxy-chain';

export function getTestLink(): Link {
  const link: Link = {
    brand: 'test:brand',
    cartUrl: 'https://www.example.com/cartUrl',
    model: 'test:model',
    price: 100,
    series: 'test:series',
    url: 'https://www.example.com/url',
  };
  return link;
}

export function getCaptchaTestLink(): Link {
  const link: Link = {
    brand: 'test:brand',
    cartUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/RickRoll.png/250px-RickRoll.png',
    model: 'test:model',
    price: 100,
    series: 'test:series',
    url: 'https://en.wikipedia.org/wiki/Rickrolling',
  };
  return link;
}

export function getTestStore(): Store {
  const storeLinks = [getTestLink(), getCaptchaTestLink()];

  const store: Store = {
    currency: '',
    labels: {
      captcha: {
        container: '#firstHeading',
        text: ['Rickrolling'],
      },
      captchaHandler: {
        challenge: 'figure[typeof="mw:File/Thumb"] a img.mw-file-element',
        input: '#searchInput',
        submit: 'body',
        captureType: 'image',
      },
      inStock: {
        container: 'test:container',
        text: ['test:text'],
      },
    },
    links: storeLinks,
    name: 'test:name',
    country: 'TEST',
  };

  return store;
}

let activeProxyServer: string | undefined;

export async function launchTestBrowser(): Promise<Browser> {
  const args: string[] = [];

  // Skip Chromium Linux Sandbox
  // https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
  if (config.browser.isTrusted) {
    args.push('--no-sandbox');
    args.push('--disable-setuid-sandbox');
  }

  // https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#tips
  // https://stackoverflow.com/questions/48230901/docker-alpine-with-node-js-and-chromium-headless-puppeter-failed-to-launch-c
  if (config.docker) {
    args.push('--disable-dev-shm-usage');
    args.push('--no-sandbox');
    args.push('--disable-setuid-sandbox');
    args.push('--headless');
    args.push('--disable-gpu');
    config.browser.open = false;
  }

  // Add SSL certificate handling flags for proxies
  args.push('--ignore-certificate-errors');
  args.push('--ignore-ssl-errors');
  args.push('--ignore-certificate-errors-spki-list');
  args.push('--disable-web-security');
  args.push('--allow-running-insecure-content');

  let proxyServer: string | undefined;

  // Add the address of the proxy server if defined
  if (config.proxy.address) {
    // If proxy authentication is required, use proxyChain
    if (config.proxy.user && config.proxy.pass) {
      try {
        const originalProxyUrl = `${config.proxy.protocol}://${config.proxy.address}:${config.proxy.port}`;

        // Create an anonymous proxy that handles authentication
        proxyServer = await proxyChain.anonymizeProxy(originalProxyUrl);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        activeProxyServer = proxyServer;

        logger.info(
          `ℹ Using authenticated proxy via proxyChain: ${proxyServer}`
        );
        args.push(`--proxy-server=${proxyServer}`);
      } catch (error) {
        logger.error('Failed to create authenticated proxy:', error);
        // Fallback to basic proxy without authentication
        const proxyUrl = `${config.proxy.protocol}://${config.proxy.address}:${config.proxy.port}`;
        args.push(`--proxy-server=${proxyUrl}`);
      }
    } else {
      // No authentication needed
      const proxyUrl = `${config.proxy.protocol}://${config.proxy.address}:${config.proxy.port}`;
      args.push(`--proxy-server=${proxyUrl}`);
    }
  }

  if (args.length > 0) {
    logger.info('ℹ puppeteer config: ', args);
  }

  const browser = await launch({
    args,
    defaultViewport: {
      height: config.page.height,
      width: config.page.width,
    },
    headless: config.browser.isHeadless,
    ignoreHTTPSErrors: true, // Additional SSL error handling
  });

  config.browser.userAgent = await browser.userAgent();

  return browser;
}
