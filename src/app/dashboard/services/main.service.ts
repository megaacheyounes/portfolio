import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { STATS_URL, TOKEN_HEADER } from '../config/config';
import { LOG_REQUEST } from '../config/utils';
import { request } from 'http';


@Injectable({
  providedIn: 'root'
})
export class MainService {


  constructor(private _httpClient: HttpClient,
    private _authService: AuthService) { }

  loadStats$() {
    return LOG_REQUEST(this.transformAll(this._httpClient.get(STATS_URL, this.tokenHeader)));
  }

  transformAll(request: Observable<Object>) {
    return request.pipe(
      map((response: any) => response.map(item => this.transform(item)))
    );

  }

  transform(item) {
    if (item.ip && item.ip.includes('f')) {
      // ::ffff:10.69.178.208
      const temp = item.ip.split(':');
      item.ip = temp.pop();
    }

    return item;
  }

  get tokenHeader() {
    const headers = {};
    headers[TOKEN_HEADER] = this._authService.getToken();
    return { headers };
  }


}
