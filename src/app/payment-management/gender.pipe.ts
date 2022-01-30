import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform( gender: number): string {
    if (gender == 0) {
      return 'Male';
    }
    return 'Female';
  } 
} 
