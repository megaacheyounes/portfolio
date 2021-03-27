import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var WOW: any;
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {


  constructor() { }


  ngOnInit() {

  }

  ngAfterViewInit() {
    this.initParticlesJs();
    // new WOW().init();
  }

  initParticlesJs() {

    particlesJS.load('particles-js', 'assets/particles/config.json');

  }

}
