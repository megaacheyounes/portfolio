import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    try {

      const date = new Date(value);

      return this.hr(date);
      return date.getFullYear() + '/' + date.getMonth() + '/' + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes();
    } catch (e) {
      console.log('TCL: FormatDatePipe -> e', e);
      return 'unknown';
    }



  }

  hr(date: any) {
    const delta = Math.round((+new Date - date) / 1000);

    const minute = 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7;

    let fuzzy;

    if (delta < 30) {
      fuzzy = 'just then';
    } else if (delta < minute) {
      fuzzy = delta + ' seconds ago';
    } else if (delta < 2 * minute) {
      fuzzy = 'a minute ago';
    } else if (delta < hour) {
      fuzzy = Math.floor(delta / minute) + ' minutes ago';
    } else if (Math.floor(delta / hour) === 1) {
      fuzzy = '1 hour ago';
    } else if (delta < day) {
      fuzzy = Math.floor(delta / hour) + ' hours ago';
    } else if (delta < day * 2) {
      fuzzy = 'yesterday';
    } else {
      fuzzy = date.toDateString();
    }
    return fuzzy;
  }

}
