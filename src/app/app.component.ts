import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit() {
      
  }

  a() {

    let j = 2;
    for (let i = 0; i < 10; i++) {
      j *= j * 2;
      const a = '.p-u-' + j + '{ position: absolute; top: -' + j + 'px; }';
      console.log(a);

    }

  }

}
