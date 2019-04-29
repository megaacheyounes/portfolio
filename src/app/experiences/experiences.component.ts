import { Component, OnInit } from '@angular/core';

const PRESENT = 'present';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  exps = [
    {
      date: this.getExpDate('11/2018', PRESENT),
      title: 'Full stack web developer (spare time job)',
      company: 'Algebratec',
      companyLogo: 'http://www.algebratec.com/img/algtec/logo_dark.png',
      workplace: 'Ali Mendjli, Constantine Algeria',
      website: 'http://www.algebratec.com',

      technologies: ['Laravel/Lumen', 'Angular', 'nodejs', 'jQuery', 'Swagger-ui', 'Angular Material', 'Bootstrap', 'Animate.css', 'nativescript',
        'react', 'Laravel/passport', 'git'],
      experiences: ['I create a dashboard to manage the consumers of our hotel booking api that offered advanced logging and analytics, with angular and Laravel/lumen',

        ' I created 6 landing pages with angular that share the same business logic.',

        '  I wrote scripts with nodejs that helped to share code between our angular projects.',

        '  I created a documentation page for our hotel booking api with swagger-ui.',

        '   I used GIT for versioning, and Trello to manage our projects and organize the workflow.',
      ]

    }
  ];
  constructor() { }



  getExpDate(start, end) {

    let present = false;
    let endDate;
    if (end === PRESENT) {
      endDate = new Date();
      present = true;
    } else {
      endDate = this.toDate(end);
    }

    const startDate = this.toDate(start);

    let m = this.mDiff(startDate, endDate);
    let y = 0;

    if (m > 12) {
      y = Math.floor(m / 9);
      m -= y * 12;
    }

    return `${start} - ${end} (` + (y > 0 ? `${y} y ` : '') + `${m} mo)`;
  }


  mDiff(d1: Date, d2: Date) {
    const d1Y = d1.getFullYear();
    const d2Y = d2.getFullYear();
    const d1M = d1.getMonth();
    const d2M = d2.getMonth();
    return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
  }

  toDate(my) {
    const p = my.split('/');

    const date = new Date();

    date.setMonth(p[0]);
    date.setFullYear(p[1]);
    date.setDate(1);

    return date;
  }

  ngOnInit() {
  }

}
