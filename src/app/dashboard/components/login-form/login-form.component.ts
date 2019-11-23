import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH, DASHBOARD_STATS_URL } from '../../config/config';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

const FORM_EMAIL = 'email';
const FORM_PASSWORD = 'password';
const FORM_REMEMBER_ME = 'rememberMe';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  loading;
  error;

  constructor(private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router) {
    if (_authService.getToken()) {
      this.redirectToStats();
    }
  }

  ngOnInit() {
    const loginForm = {};
    loginForm[FORM_EMAIL] = ['', [Validators.required, Validators.email]];
    loginForm[FORM_PASSWORD] = ['', [Validators.required, Validators.minLength(PASSWORD_MIN_LENGTH),
    Validators.maxLength(PASSWORD_MAX_LENGTH)]];
    loginForm[FORM_REMEMBER_ME] = [false, []];
    this.form = this._formBuilder.group(loginForm);
  }

  get emailFC() {
    return this.form.get(FORM_EMAIL);
  }

  get passwordFC() {
    return this.form.get(FORM_PASSWORD);
  }

  get rememberMeFC() {
    return this.form.get(FORM_REMEMBER_ME);
  }

  attemptLogin() {

    if (!this.form.valid) {
      return;
    }

    this.redirectOnSuccess(this.updateError(this.updateLoading(this._authService.attemptLogin(this.form.value))));
  }


  redirectOnSuccess(request: Observable<Object>) {
    return request.subscribe(response => this.redirectToStats());
  }

  redirectToStats() {
    this._router.navigateByUrl(DASHBOARD_STATS_URL);
  }

  updateError(request: Observable<Object>) {
    this.error = false;
    return request.pipe(tap(_ => 'ignore', error => this.error = error));
  }


  updateLoading(request: Observable<Object>) {
    this.loading = true;
    return request.pipe(finalize(() => this.loading = false));
  }
}
