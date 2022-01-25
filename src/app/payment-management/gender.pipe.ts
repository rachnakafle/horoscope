import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(name: string, gender: any): string {
    if (gender == 0) {
      return 'Male';
    }
    return 'Female';
  }
} 
