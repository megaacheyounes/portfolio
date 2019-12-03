import { Injectable } from '@angular/core';
// resume types
export const SOFTWARE_ENGINEER = 'SoftwareEngineer', WEB = 'FullStackWebDeveloper', ANDROID = 'AndroidDeveloper';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  resumeUrl = type => /* 'http://localhost:3000' +  */`/cv?type=${type}`;

  constructor() { }

  showCV(type = WEB) {
    window.open(this.resumeUrl(type), '_blank');

    /*  try {
       this.statsForm.nativeElement.submit();
     } catch (e) {
       window.open(this.resumeUrl(type), '_blank');
     } */

  }

}
