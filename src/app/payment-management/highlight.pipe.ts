import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor (private sanitizer: DomSanitizer){}
  transform(firstName: string, cityCode:string): any {

    if(cityCode === 'BT' || cityCode === 'BKT'){
      return this.sanitizer.bypassSecurityTrustHtml('<div style = "background-color: yellow">' + firstName + '</div>');
    }  

    else{
      return this.sanitizer.bypassSecurityTrustHtml('<div style = "background-color: Lightblue">' + firstName + '</div>');
    }   
  }
}
 