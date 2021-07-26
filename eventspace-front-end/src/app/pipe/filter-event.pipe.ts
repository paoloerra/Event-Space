import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEvent'
})
export class FilterEventPipe implements PipeTransform {

  transform(array: any[], property: string, value: string): any {
    if(value == "All") {
      return array;
    }
    return array.filter(a => a[property] == value);
  }

}
