import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
  override transform(value: any, _args?: any): any {
    // return super.transform(value, 'EEEE d MMMM y h:mm a');
    return super.transform(value, 'M-d-y');
  }
} 
