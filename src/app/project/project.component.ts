import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Project } from '../project';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {


  websites: Project[] = [
    {
      name: 'Hot headlines',
      description: 'news website that show the news from the most popular websites',
      image: 'assets/websites/hh.JPG',
      link: 'http://hotheadlines.herokuapp.com'
    },
    {
      name: 'youtube downloader',
      description: 'download and covert multiple youtube videos with ease',
      image: 'assets/websites/yq.JPG',
      link: 'http://youtubequeue.herokuapp.com'
    },
    {
      name: 'fitGirl repacks',
      description: 'advanced search and filtring tool for fitGirl games repacks',
      image: 'assets/websites/fg.JPG',
      link: 'http://fitgirl-repacks.herokuapp.com/'
    },
  ];

  apps: Project[] = [
    {
      name: 'Golden Souq',
      description: `Quickly sell things you list on megsouq and find great deals nearby.
      Electronics, games, clothes, cars, furniture, décor and much more.`,
      image: 'assets/android/gs.png',
      link: 'https://play.google.com/store/apps/details?id=app.megaache.goldensouq'
    },
    {
      name: 'Smart base converter',
      description: `Smart base converter/calculator allows you to convert real and fractional numbers from base n to n.`,
      image: 'assets/android/sbc.png',
      link: 'https://play.google.com/store/apps/details?id=app.megaache.smartbaseconverter'
    },
    {
      name: 'M Torch',
      description: `illuminate your way with the best flashlight app for android`,
      image: 'assets/android/mtorch.png?' + Date.now(),
      link: 'https://play.google.com/store/apps/details?id=app.megaache.mtorch'
    },
    {
      name: 'Smart flash alert',
      description: `let your flashlight notify you about incoming calls or received messages`,
      image: 'assets/android/sfa.png?' + Date.now(),
      link: 'https://play.google.com/store/apps/details?id=app.megaache.smartflashalerts'
    },
    {
      name: 'More apps',
      description: 'you can check all my published apps on my playstore',
      image: 'assets/android/ps.png?' + Date.now(),
      link: 'https://play.google.com/store/apps/developer?id=Megaache+smart+apps'
    }
  ];

  constructor() {

  }

  ngOnInit() {


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


    /**
     *  var sendmail = require('sendmail')({silent: true})
 sendmail({
   from: 'vikaskohli@email.com',
   to: 'vikaskohli@email.com,vikaskohli1@email.com',
   subject: varsubject, // Subject line
   html: varhtml,
   attachments: [
   ]
 }, function (err, reply) {
   console.log(err && err.stack)
   console.dir(reply)
 });
     */
    // school work done_all(skills) message(contact me) mood(hobbies/entertainment)
    // fitness_center audiotrack directions_run  videogame_asset
  }
}
