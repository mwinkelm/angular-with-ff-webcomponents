/**
 * Known currencies
 */
import { COUNTRY } from './country';

const EUR = { code: 'EUR', name: 'Euro', label: '€', checkoutCurrencyLabel: '€' };
const NOK = { code: 'NOK', name: 'norsk krone', label: ',-', checkoutCurrencyLabel: 'NOK' };
const DKK = { code: 'DKK', name: 'dansk krone', label: '.-', checkoutCurrencyLabel: 'DKK' };
const SEK = { code: 'SEK', name: 'svensk krona', label: '.-', checkoutCurrencyLabel: 'SEK' };
const ISK = { code: 'ISK', name: 'íslensk króna', label: ',-', checkoutCurrencyLabel: 'ISK' };

export const CURRENCIES = [EUR, NOK, DKK, SEK, ISK];

export function getCurrencyForCountry(country: COUNTRY) {
  switch (country) {
    case COUNTRY.FIN:
      return EUR;
    case COUNTRY.DNK:
    case COUNTRY.GRL:
    case COUNTRY.FRO:
      return DKK;
    case COUNTRY.ISL:
      return ISK;
    case COUNTRY.SWE:
      return SEK;
    case COUNTRY.NOR:
      return NOK;
  }
}
