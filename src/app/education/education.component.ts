import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {


  eds = [
    {
      date: '2018-2020',
      title: 'Master\'s degree in information technologies',
      institute: 'University of Constantine 2'
    }, {
      date: '2015-2018',
      title: 'Bachelore degree in computer science',
      institute: 'University of Constantine 2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
