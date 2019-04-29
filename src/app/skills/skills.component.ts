import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills1 = [
    {
      name: 'Angular',
      value: '80'
    },
    {
      name: 'JQuery',
      value: '50'
    }, {
      name: 'ExpressJS',
      value: '50'
    }, {
      name: 'Laravel',
      value: '60'
    },
    {
      name: 'MySQL',
      value: '75'
    },
    {
      name: 'Mongodb',
      value: '50'
    },
  ];

  skills2 = [
    {
      name: 'Android',
      value: '80'
    },
    {
      name: 'Java',
      value: '85'
    }, {
      name: 'C',
      value: '50'
    }, {
      name: 'Matlab',
      value: '40'
    },
    {
      name: 'Wordpress',
      value: '50'
    },
    {
      name: 'Linux',
      value: '50'
    },
  ];

  otherSkills = ['photoshop', 'after effects', 'GIT', 'CI/CD', 'Firebase', 'Heroku'];

  constructor() { }

  ngOnInit() {
  }

}
