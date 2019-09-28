import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CvService, WEB, ANDROID, SOFTWARE_ENGINEER } from 'src/app/main/services/cv.service';

@Component({
  selector: 'app-download-cv',
  templateUrl: './download-cv.component.html',
  styleUrls: ['./download-cv.component.scss']
})
export class DownloadCVComponent implements OnInit {

  @ViewChild('section', { static: true }) section;

  constructor(private _cvService: CvService) { }

  ngOnInit() {
  }

  reveal() {
    this.section.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  showCV(type?) {
    this._cvService.showCV(type);
  }

  get softwareEngineer() {
    return SOFTWARE_ENGINEER;
  }

  get web() {
    return WEB;
  }

  get android() {
    return ANDROID;
  }

}
