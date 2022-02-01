import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'custom2Date',
})
export class Custom2DatePipe extends DatePipe implements PipeTransform {
  pipe = new DatePipe('en-US');
  override transform(datevalue: any, format: any): any {
    if(format != 0){
      return this.pipe.transform(datevalue, format);
    }
    else {
      return datevalue;
    }    
  }
}
