import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Project } from '../project';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  websites: Project[] = [
    {
      name: 'Hot headlines',
      description: 'news website that show the news from the most popular websites',
      image: 'assets/websites/01.jpg',
      link: 'hotheadlines.herokuapp.com'
    },
    {
      name: 'youtube downloader',
      description: 'download and covert multiple youtube videos with ease',
      image: 'assets/websites/02.jpg',
      link: 'youtube.herokuapp.com'
    },
    {
      name: 'fitGirl repacks',
      description: 'advanced search and filtring tool for fitGirl games repacks',
      image: 'assets/websites/03.jpg',
      link: 'fitgirl.herokuapp.com'
    },
  ];

  version = '2.2  5/2019';

  constructor() { }


  ngOnInit() {


  }

  ngAfterViewInit() {

  }


}
