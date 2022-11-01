import 'whatwg-fetch';
import { HTTPError } from './errors';

const fetchSvgSymbol = async () => {
  try {
    const response = await fetch(`/assets/images/svg/symbol.svg`);
    if (!response.ok) {
      throw new HTTPError(`Fetch error: ${response.statusText}`);
    }
    const svg = await response.text();
    document.body.insertAdjacentHTML('afterbegin', svg);
  } catch (e) {
    if (e instanceof HTTPError) {
      console.error(`HTTPError: ${e.message}`);
    } else if (e instanceof Error) {
      console.log(e.stack);
    } else {
      throw e;
    }
  }
};

export const inlineSVG = () => {
  fetchSvgSymbol();
};
