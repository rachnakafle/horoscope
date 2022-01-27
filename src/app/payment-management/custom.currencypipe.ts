import { Pipe, PipeTransform } from '@angular/core';
import {
  formatCurrency,
  getCurrencySymbol,
  registerLocaleData,
} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

@Pipe({
  name: 'customCurrency',
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(
    value: number,
    currencyCode: string = 'EUR',
    digitsInfo: string = '3.2-2',
    locale: string = 'fr'
  ): string | null {
    return formatCurrency(
      value,
      locale,
      getCurrencySymbol(currencyCode, 'wide'),
      currencyCode,
      digitsInfo
    );
  }
}
