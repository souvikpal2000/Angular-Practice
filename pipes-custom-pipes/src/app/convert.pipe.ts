import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, type:string): any {
    if(!value){
      return '';
    }
    switch(type){
      case "km":
        return value * 1.60934;
      case "m":
        return value * 1.60934 * 1000;
      case "cm":
        return value * 1.60934 * 1000 * 100;
      default:
        return "Incorrect Type";
    }
  }
}
