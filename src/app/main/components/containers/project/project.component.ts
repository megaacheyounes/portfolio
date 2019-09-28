import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConfigService } from 'src/app/main/services/config.service';
declare var $: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {

  constructor(private _configService: ConfigService) {
  }

  ngOnInit() {
  }

  get websites() {
    return this._configService.websites;
  }

  get apps() {
    return this._configService.apps;
  }

  ngAfterViewInit() {
    $('.b').slick({
      dots: true,
      infinite: false,
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.a').slick({
      dots: true,
      infinite: true,
      autoplaySpeed: 2000,
      centerMode: true,
      variableWidth: true,
      centerPadding: '32px',
      slidesToShow: 1,
      focusOnSelect: true,
      autoplay: true,

    });
  }
}
