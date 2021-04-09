import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DEBUG } from './config';

export const LOG_REQUEST = (request: Observable<Object>) => {
    if (!DEBUG) {
        return request;
    }
    return request.pipe(tap(r => {
        console.log('TCL: MainService -> logRequest -> Response', r);
    }, e => {
        console.log('TCL: MainService -> logRequest -> Error ', e);
    }));
};
