import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatLanguage'
})
export class FormatLanguagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split(',')[0] || 'unknow';
  }

}
