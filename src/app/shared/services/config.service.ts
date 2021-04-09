import { Injectable } from "@angular/core";
import { BIRTHDAY, PERSONAL_INFORMATION } from "../../main/config/info";
import { EDUCATION } from "../../main/config/education";
import { EXPERIENCES, PRESENT } from "../../main/config/experiences";
import { SKILLS, ADDITIONAL_SKILLS } from "../../main/config/skills";
import { WEBSITES, APPS } from "../../main/config/projects";
import { CERTIFICATES } from "../../main/config/certificates";
import { INTERESTS } from "../../main/config/interests";
import { environment } from "src/environments/environment";

export const BASE_API_URL = environment.production ? "" : "http://localhost:3000";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  LOCAL = true;
  BASE_API_URL = this.LOCAL ? "http://localhost:3000" : "";

  constructor() {}

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
    return EXPERIENCES.map((experience) => {
      experience["duration"] = this.getDuration(experience);
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
    let endDate;
    if (exp.end === PRESENT) {
      endDate = new Date();
    } else {
      endDate = new Date(Date.parse(exp.end));
    }

    const startDate = new Date(Date.parse(exp.start));

    let m = this.mDiff(startDate, endDate);
    let y = 0;

    if (m > 12) {
      y = Math.floor(m / 9);
      m -= y * 12;
    }

    return (y > 0 ? `${y} yr ` : "") + `${m} mos`;
  }

  mDiff(d1: Date, d2: Date) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
}
