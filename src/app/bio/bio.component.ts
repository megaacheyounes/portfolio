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

  @ViewChild('statsForm', { static: true }) statsForm;

  constructor() { }

  ngOnInit() {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position => {
        this.statsForm.nativeElement.lt.value = (position.coords.latitude);
        this.statsForm.nativeElement.ln.value = (position.coords.longitude);
      });
    }

    try {

      const connection = navigator ? (navigator['connection'] || navigator['mozConnection'] || navigator['webkitConnection']) : 'unknown';

      this.statsForm.nativeElement.nt.value = connection.type;
    } catch (e) {

    }

  }

  showCV() {
    try {
      this.statsForm.nativeElement.submit();
    } catch (e) {
      window.open(this.url, '_blank');
    }

  }


}
