import * as Process from 'process';
import {config} from './config'; // Needs to be loaded first
import {startAPIServer, stopAPIServer} from './web';
import Puppeteer, {Browser} from 'puppeteer';
import {getSleepTime} from './util';
import {logger} from './logger';
import {storeList} from './store/model';
import {tryLookupAndLoop} from './store';

let browser: Browser | undefined;

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Schedules a restart of the bot
 */
async function restartMain() {
  if (config.restartTime > 0) {
    await sleep(config.restartTime);
    await stop();
    loopMain();
  }
}

/**
 * Starts the bot.
 */
async function main() {
  browser = await launchBrowser();

  for (const store of storeList.values()) {
    // logger.debug('store links', {meta: {links: store.links}});
    if (store.setupAction !== undefined) {
      store.setupAction(browser);
    }

    setTimeout(tryLookupAndLoop, getSleepTime(store), browser, store);
  }

  await startAPIServer();
}

async function stop() {
  await stopAPIServer();

  if (browser) {
    // Use temporary swap variable to avoid any race condition
    const browserTemporary = browser;
    browser = undefined;
    await browserTemporary.close();
  }
}

async function stopAndExit() {
  await stop();
  Process.exit(0);
}

/**
 * Will continually run until user interferes.
 */
async function loopMain() {
  try {
    restartMain();
    await main();
  } catch (error: unknown) {
    logger.error(
      '✖ something bad happened, resetting streetmerchant in 5 seconds',
      error
    );
    setTimeout(loopMain, 5000);
  }
}

export async function launchBrowser(): Promise<Browser> {
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

  // Add the address of the proxy server if defined
  if (config.proxy.address) {
    args.push(
      `--proxy-server=${config.proxy.protocol}://${config.proxy.address}:${config.proxy.port}`
    );
  }

  // Additional arguments to avoid bot detection
  args.push('--disable-blink-features=AutomationControlled');
  args.push('--disable-features=VizDisplayCompositor');
  args.push('--disable-web-security');
  args.push('--disable-features=TranslateUI');
  args.push('--disable-ipc-flooding-protection');

  if (args.length > 0) {
    logger.info('ℹ puppeteer config: ', args);
  }

  await stop();
  const browser = await Puppeteer.launch({
    executablePath: '/opt/homebrew/bin/chromium',
    args,
    defaultViewport: {
      height: config.page.height,
      width: config.page.width,
    },
    headless: config.browser.isHeadless,
    ignoreDefaultArgs: ['--enable-automation'],
  });

  config.browser.userAgent = await browser.userAgent();

  // Remove webdriver property and other automation indicators
  const pages = await browser.pages();
  for (const page of pages) {
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', {
        get: () => undefined,
      });

      // Mock plugins and languages to appear more human
      Object.defineProperty(navigator, 'plugins', {
        get: () => [1, 2, 3, 4, 5],
      });

      Object.defineProperty(navigator, 'languages', {
        get: () => ['en-US', 'en'],
      });

      // Mock permissions
      const originalQuery = window.navigator.permissions.query;
      window.navigator.permissions.query = parameters =>
        parameters.name === 'notifications'
          ? Promise.resolve({
              state: Notification.permission,
            } as PermissionStatus)
          : originalQuery(parameters);
    });
  }

  return browser;
}

void loopMain();

process.on('SIGINT', stopAndExit);
process.on('SIGQUIT', stopAndExit);
process.on('SIGTERM', stopAndExit);
