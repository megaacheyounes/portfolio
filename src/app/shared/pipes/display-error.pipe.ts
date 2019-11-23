import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayError'
})
export class DisplayErrorPipe implements PipeTransform {

  transform(error: any, ...args: any[]): any {

    const temp = [error, error['error'], error['message'], error['errors'] ? error['errors']['message'] : null];
    for (const msg of temp) {
      if (typeof msg === 'string') {
        return msg;
      }
    }

    return 'unknown error';

  }

}
