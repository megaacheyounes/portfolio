import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../shared/services/config.service";
// resume types
export const SOFTWARE_ENGINEER = "softwareEngineer",
  WEB = "webDeveloper",
  ANDROID = "androidDeveloper";

@Injectable({
  providedIn: "root",
})
export class CvService {
  
  resumeUrl = ( ) => `${BASE_API_URL}/cv`;

  constructor() {}

  showCV(type? ) {
    window.open(this.resumeUrl(), "_blank");

    /*  try {
       this.statsForm.nativeElement.submit();
     } catch (e) {
       window.open(this.resumeUrl(type), '_blank');
     } */
  }
}
