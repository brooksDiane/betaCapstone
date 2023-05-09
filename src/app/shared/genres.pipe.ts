import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genres'
})
export class GenresPipe implements PipeTransform {
  transform(arr: string[] | undefined): string {
    if (arr) {
      let str = arr.join(', ');
      return str;
    } else {
      return '';
    }
  }
}
