import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ISOCode, L10N_CONFIG, L10nConfig, L10nConfigRef, L10nLoader, LogLevel, StorageStrategy } from 'angular-l10n';
import { getConfigByDomain } from './config-by-domain';
import { COUNTRY } from './country';
import { getCurrencyForCountry } from './currency';
import DA from './locale-da';
import EN from './locale-en';

/**
 * returns a L10Config for a given country define in country ENUM and throws an error if country is unknown
 * @param country
 */
export function countryConfig(country: COUNTRY): Partial<L10nConfig['locale']> {
  const currency = getCurrencyForCountry(country).code;
  switch (country) {
    case COUNTRY.DNK:
      return {
        language: 'da',
        languages: [
          { code: 'da', dir: 'ltr' },
          { code: 'en', dir: 'ltr' },
        ],
        defaultLocale: { languageCode: 'da', countryCode: 'DK' },
        currency,
        timezone: 'Europe/Copenhagen',
      };
    default:
      throw new Error(`Unknown country ${country}`);
  }
}

export const l10nConfig: L10nConfig = {
  logger: {
    level: LogLevel.Info,
  },
  locale: {
    storage: StorageStrategy.Local,
    ...countryConfig(getConfigByDomain().country),
  },
  translation: {
    providers: [],
    translationData: [
      { languageCode: 'en', data: EN },
      { languageCode: 'da', data: DA },
    ],
    caching: false,
    composedKeySeparator: '.',
    i18nPlural: true,
  },
  localizedRouting: {
    format: [ISOCode.Language],
    defaultRouting: false,
  },
  localeInterceptor: {
    format: [ISOCode.Language, ISOCode.Country],
  },
};

/**
 * Service that provides configuration for localization through {@link https://robisim74.github.io/angular-l10n/|angular-10n}
 */
@Injectable()
export class LocalizationConfig {
  constructor(
    private l10nLoader: L10nLoader,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(L10N_CONFIG) private configuration: L10nConfigRef,
  ) {}

  /**
   * this function merge the base configuration with settings for current country
   */
  public async load(): Promise<any> {
    /*
    const country = getConfigByDomain().country;
    const providers = [];
    if (isPlatformBrowser(this.platformId)) {
      providers.push(
        { type: ProviderType.Fallback, prefix: './assets/l10n/locale-en', fallbackLanguage: [] },
        { type: ProviderType.Static, prefix: './assets/l10n/locale-' },
      );
    }
    */
    this.configuration.locale = {
      ...this.configuration.locale,
      ...countryConfig(getConfigByDomain().country),
    };
    /*
    this.configuration.translation = {
      ...this.configuration.translation,
    };
    */
    this.configuration.localizedRouting = {
      format: [ISOCode.Language],
      defaultRouting: false,
    };
    return this.l10nLoader.load();
  }
}

export function initLocalization(localizationConfig: LocalizationConfig): () => Promise<any> {
  return () => localizationConfig.load();
}
