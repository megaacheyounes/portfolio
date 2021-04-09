import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SuccessComponent } from 'src/app/shared/components/success/success.component';
import { BASE_API_URL } from 'src/app/shared/services/config.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  CONTACT_URL = BASE_API_URL + '/api/contact';

  form: FormGroup = new FormGroup({
    name: new FormControl('',
      [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(4000),
    ])
  });

  name = this.form.controls.name;
  subject = this.form.controls.subject;
  email = this.form.controls.email;
  message = this.form.controls.message;


  constructor(private http: HttpClient,
    private snackbar: MatSnackBar) { }

  ngOnInit() {


  }

  reinit() {
    this.form.setValue({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }
 
  send(value) {
    if (!this.form.valid) {
      return;
    }
 
    this.http.post(this.CONTACT_URL, value)
      .subscribe(data => {
        // this.reinit();
        this.mesSent();
      }, (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.showSnackbar('please check your information and try again.');
        } else {
          this.showSnackbar('The message was not sent (that\'s all i know).');
        }
      });
  }
  showSnackbar(message) {
    const config: MatSnackBarConfig = new MatSnackBarConfig();
    config.duration = 1000 * 5;
    // todo use template(instead of text messages)

    this.snackbar.open(message, 'dismiss', config);
  }


  mesSent() {
    const config: MatSnackBarConfig = new MatSnackBarConfig();
    config.duration = 1000 * 5;
    // todo use template(instead of text messages)
    this.snackbar.openFromComponent(SuccessComponent, config);

  }


}


