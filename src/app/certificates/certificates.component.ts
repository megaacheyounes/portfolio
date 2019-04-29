import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  links = [
    {
      title: 'Responsive web design',
      link: 'https://www.freecodecamp.org/certification/megaacheyounes/responsive-web-design',
      issuer: 'FreeCodeCamp'
    }, {
      title: 'Javascript algorithms and data structures',
      link: 'https://www.freecodecamp.org/certification/megaacheyounes/javascript-algorithms-and-data-structures',
      issuer: 'FreeCodeCamp'
    }, {
      title: 'Apis and microservices',
      link: 'https://www.freecodecamp.org/certification/megaacheyounes/apis-and-microservices',
      issuer: 'FreeCodeCamp'
    }, {
      title: 'Information security and quality assurance',
      link: 'https://www.freecodecamp.org/certification/megaacheyounes/information-security-and-quality-assurance',
      issuer: 'FreeCodeCamp'
    }, {
      title: 'Java tutorial',
      issuer: 'SoloLearn',
      link: 'https://www.sololearn.com/Certificate/1068-9450597/jpg'
    }, {
      title: 'PHP tutorial',
      issuer: 'SoloLearn',
      link: 'https://www.sololearn.com/Certificate/1059-9450597/jpg'
    }
  ];

  constructor() { }

  ngOnInit() {

  }

  check(link) {
    window.open(link, '_blank');
  }

}
