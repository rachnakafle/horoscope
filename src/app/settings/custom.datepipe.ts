import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
  override transform( dateFormat: any): any {
    // return super.transform(value, 'EEEE d MMMM y h:mm a');
    if(dateFormat === 'MM/DD/YYYY'){
      return super.transform( 'M-d-y');
    }
    else if(dateFormat === 'DD/MM/YYYY'){
      return super.transform( 'd-M-y');
    } 
    else{
      return super.transform('y-M-d' )
    }   
  }
} 


