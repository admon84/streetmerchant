import * as Process from 'process';
import {config} from './config'; // Needs to be loaded first
import {startAPIServer, stopAPIServer} from './web';
import {Browser, launch} from 'puppeteer';
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

  let start = getNextMinute();
  logger.info('ℹ search will begin at ' + start.toLocaleTimeString());

  if (await waitUntilTime(start)) {
    for (const store of storeList.values()) {
      // logger.debug('store links', {meta: {links: store.links}});
      if (store.setupAction !== undefined) {
        store.setupAction(browser);
      }

      tryLookupAndLoop(browser, store);
    }
  }

  await startAPIServer();
}

const getNextMinute = (date?: Date) => {
  date = date || new Date();
  let next = date.getMinutes() + 1;
  next = (next > 59 ? 0 : next);
  date.setMinutes(next, 0, 0);
  return date;
}

async function waitUntilTime(date: Date) {
  let now = new Date();
  while(now < date) {
    await sleep(500);
    now = new Date();
  }
  return Promise.resolve(true);
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

  if (args.length > 0) {
    logger.info('ℹ puppeteer config: ', args);
  }

  await stop();
  const browser = await launch({
    args,
    defaultViewport: {
      height: config.page.height,
      width: config.page.width,
    },
    headless: config.browser.isHeadless,
  });

  config.browser.userAgent = await browser.userAgent();

  return browser;
}

void loopMain();

process.on('SIGINT', stopAndExit);
process.on('SIGQUIT', stopAndExit);
process.on('SIGTERM', stopAndExit);
