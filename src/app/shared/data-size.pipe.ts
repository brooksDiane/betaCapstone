import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataSize'
})
export class DataSizePipe implements PipeTransform {
  transform(size: number): unknown {
    let sizeString = '';
    if (size > 500000000) {
      sizeString = (size / 1000000000).toFixed(1) + ' GB';
    } else {
      sizeString = (size / 1000000).toFixed(0) + ' MB';
    }
    return sizeString;
  }
}
