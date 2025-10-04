import {Link, TModel, TSeries} from '../store';
import {logger} from '../../../logger';

export interface Card {
  brand: string;
  model: TModel;
}

interface LinksBuilderOptions {
  productsSelector: string;
  sitePrefix: string;
  titleAttribute?: string;
  titleSelector: string;
  urlSelector?: string;
}

const isPartialUrlRegExp = /^(?!https?:).*/i;

export function getProductLinksBuilder(options: LinksBuilderOptions) {
  return (docElement: cheerio.Cheerio, series: TSeries): Link[] => {
    const productElements = docElement.find(options.productsSelector);
    const links: Link[] = [];
    for (let i = 0; i < productElements.length; i++) {
      const productElement = productElements.eq(i);
      const titleElement = productElement.find(options.titleSelector).first();

      const title = options.titleAttribute
        ? titleElement.attr()?.[options.titleAttribute]
        : titleElement.text()?.replace(/\n/g, ' ').trim();

      if (!title) {
        continue;
      }

      let urlElement = titleElement;

      if (options.urlSelector) {
        urlElement = urlElement.find(options.urlSelector).first();
      }

      let url = urlElement.attr()?.href;

      if (!url) {
        continue;
      }

      if (isPartialUrlRegExp.exec(url)) {
        url = options.sitePrefix + url;
      }

      const card = parseCard(title);

      if (card) {
        links.push({
          brand: card.brand as any,
          model: card.model,
          series,
          url,
        });
      } else {
        logger.error(`Failed to parse card: ${title}`, {url});
      }
    }

    return links;
  };
}

export function parseCard(name: string): Card | null {
  let model = name.split(' ');
  const brand = model.shift();

  if (!brand) {
    return null;
  }

  // Split non spaced TitleCase words only after extracting brand
  model = model
    .join(' ')
    .replace(/([A-Z][a-z]+)([A-Z][a-z]+)/g, '$1 $2')
    .split(' ');

  if (model.length === 0) return null;

  return {
    brand: brand.toLowerCase(),
    model: model.join(' ').toLowerCase().trim() as TModel,
  };
}
