import { Injectable } from '@angular/core';
// resume types
export const SOFTWARE_ENGINEER = 'softwareEngineer', WEB = 'webDeveloper', ANDROID = 'androidDeveloper';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  resumeUrl = type => /* 'http://localhost:3000' +  */`/cv?type=${type}`;

  constructor() { }

  showCV(type = SOFTWARE_ENGINEER) {
    window.open(this.resumeUrl(type), '_blank');

    /*  try {
       this.statsForm.nativeElement.submit();
     } catch (e) {
       window.open(this.resumeUrl(type), '_blank');
     } */

  }

}
