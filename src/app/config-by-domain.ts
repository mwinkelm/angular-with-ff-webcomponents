import { get, head, isNil, last, split } from 'lodash-es';
import { COUNTRY } from './country';

export interface ApplicationConfig {
  country: COUNTRY;
  occHost?: string;
  OAuthHost?: string;
}

export function getConfigByDomain() {
  const config: ApplicationConfig = {
    country: COUNTRY.DNK,
  };
  /**
   * @todo determine hostname on SSR
   */
  const hostname = get(globalThis, ['location', 'hostname'], null);
  const port = get(globalThis, ['location', 'port'], null);
  if (!isNil(hostname)) {
    const url = split(hostname, '.');
    if (head(url) === 'frontend') {
      const occHost = [...url];
      occHost[0] = 'api';
      config.occHost = occHost.join('.');

      const oAuthHost = [...url];
      oAuthHost[0] = 'accstorefront';
      config.OAuthHost = oAuthHost.join('.');
    }
    /**
     * Local testing urls, remove and determine country by TLD
     */
    if (last(url) === 'local') {
      url.pop();
    }
    /**
     * Local SSR
     */
    if (port === '4000') {
      config.occHost = 'api.alpha-nightly.dev-sap-comm.elkjop.com';
      config.OAuthHost = 'accstorefront.alpha-nightly.dev-sap-comm.elkjop.com';
    }
    /**
     * Determine country by TLD
     */
    switch (last(url)) {
      case 'se':
        config.country = COUNTRY.SWE;
        break;
      case 'fi':
        config.country = COUNTRY.FIN;
        break;
      case 'no':
        config.country = COUNTRY.NOR;
        break;
    }
  }
  return config;
}
