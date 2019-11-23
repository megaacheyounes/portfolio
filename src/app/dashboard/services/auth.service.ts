import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TOKEN_COOKIE_KEY, LOGIN_URL, TOKEN_VALIDITY_DAYS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { LOG_REQUEST } from '../config/utils';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token;

  constructor(private _cookieService: CookieService,
    private _httpClient: HttpClient) { }

  attemptLogin(postData) {
    console.log('TCL: AuthService -> attemptLogin -> postData', postData);
    const rememberMe = postData.rememberMe;
    return LOG_REQUEST(this._httpClient.post(LOGIN_URL, postData))
      .pipe(map((response: any) => response['token']),
        tap(
          response => this.onLoginSuccess(response, rememberMe),
          _ => 'ignore'
        ));
  }

  onLoginSuccess(response: any, rememberMe) {
    this.token = response;
    if (rememberMe) {
      this.setToken(response);
    }
  }

  setToken(token) {
    if (!token || token.length < 1) {
      return null;
    }
    return this._cookieService.set(TOKEN_COOKIE_KEY, token, TOKEN_VALIDITY_DAYS);
  }

  getToken() {
    if (this.token) {
      return this.token;
    }
    return this._cookieService.get(TOKEN_COOKIE_KEY);
  }

}
