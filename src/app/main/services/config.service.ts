import { Injectable } from '@angular/core';
import { BIRTHDAY, PERSONAL_INFORMATION } from '../config/info';
import { EDUCATION } from '../config/education';
import { EXPERIENCES, PRESENT } from '../config/experiences';
import { SKILLS, ADDITIONAL_SKILLS } from '../config/skills';
import { WEBSITES, APPS } from '../config/projects';
import { CERTIFICATES } from '../config/certificates';
import { INTERESTS } from '../config/interests';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  get birthday() {
    return BIRTHDAY;
  }

  get infos() {
    return PERSONAL_INFORMATION;
  }

  get education() {
    return EDUCATION;
  }

  get experience() {
    return EXPERIENCES.map(experience => {
      experience['duration'] = this.getDuration(experience);
      return experience;
    });
  }

  get skills() {
    return SKILLS;
  }

  get additionalSkills() {
    return ADDITIONAL_SKILLS;
  }

  get websites() {
    return WEBSITES;
  }

  get apps() {
    return APPS;
  }

  get certificates() {
    return CERTIFICATES;
  }

  get interests() {
    return INTERESTS;
  }


  getDuration(exp) {

    let present = false;
    let endDate;
    if (exp.end === PRESENT) {
      endDate = new Date();
      present = true;
    } else {
      endDate = this.toDate(exp.end);
    }

    const startDate = this.toDate(exp.start);

    let m = this.mDiff(startDate, endDate);
    let y = 0;

    if (m > 12) {
      y = Math.floor(m / 9);
      m -= y * 12;
    }

    return   (y > 0 ? `${y} y ` : '') + `${m} mo`;
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


}
