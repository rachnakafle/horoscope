import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  nvalue! : string
  transform(value: string): any {
    this.nvalue = value.split('').reverse().join('');
    return this.nvalue;
  }

}
