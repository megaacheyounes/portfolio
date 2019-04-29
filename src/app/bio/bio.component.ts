import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {


  infos = [
    {
      icon: 'assets/nopp-web.png',
      value: 'Megaache Younes'
    },
    {
      icon: 'assets/cake.png',
      value: '18-06-1997 (21 years old)'
    },
    {
      icon: 'assets/relation.png',
      value: 'single'
    },
    {
      icon: 'assets/location-web.png',
      value: 'Ngaous, Batna Algeria'
    },
    {
      icon: '',
      value: ''
    },
    {
      icon: 'assets/mail-web.png',
      value: 'megaache.younes' + '-gm*.com'.replace('-', '@').replace('*', 'ail')
    },

    {
      icon: 'assets/phone-web.png',
      value: '069681+'.replace('+', '8696')
    },
    {
      icon: 'assets/circle.png',
      value: 'megaache.herokuapp.com'
    },
  ];

  url = /* 'http://localhost:3000' +  */'/cv';

  @ViewChild('statsForm') statsForm;

  constructor() { }

  ngOnInit() {

  }

  showCV() {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position => {
        this.statsForm.nativeElement.lt.value = (position.coords.latitude);
        this.statsForm.nativeElement.ln.value = (position.coords.longitude);
      });
    }


    const connection = navigator['connection'] || navigator['mozConnection'] || navigator['webkitConnection'];

    this.statsForm.nativeElement.nt.value = connection.type;

    this.statsForm.nativeElement.submit();

  }


}
