import { Component, OnInit } from '@angular/core';
declare var WOW: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit() {

    new WOW().init();
  }

  a() {

    let j = 2;
    for (let i = 0; i < 10; i++) {
      j *= j * 2;
      const a = '.p-u-' + j + '{ poistion: absolute; top: -' + j + 'px; }';
      console.log(a);

    }

  }

}
