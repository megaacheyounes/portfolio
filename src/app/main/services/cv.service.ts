import { Injectable } from "@angular/core";
import { BASE_API_URL } from "./config.service";
// resume types
export const SOFTWARE_ENGINEER = "softwareEngineer",
  WEB = "webDeveloper",
  ANDROID = "androidDeveloper";

@Injectable({
  providedIn: "root",
})
export class CvService {
  
  resumeUrl = (type) => `${BASE_API_URL}/cv?type=${type}`;

  constructor() {}

  showCV(type = SOFTWARE_ENGINEER) {
    window.open(this.resumeUrl(type), "_blank");

    /*  try {
       this.statsForm.nativeElement.submit();
     } catch (e) {
       window.open(this.resumeUrl(type), '_blank');
     } */
  }
}
