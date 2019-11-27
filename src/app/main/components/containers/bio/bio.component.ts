import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { CvService, SOFTWARE_ENGINEER } from 'src/app/main/services/cv.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  @Output() downloadEvent = new EventEmitter();

  @ViewChild('statsForm', { static: true }) statsForm;

  constructor(private _configService: ConfigService,
    private _cvService: CvService) { }

  ngOnInit() {

    /*  if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
         this.statsForm.nativeElement.lt.value = (position.coords.latitude);
         this.statsForm.nativeElement.ln.value = (position.coords.longitude);
       });
     }

    try {
      const connection = navigator ? (navigator['connection'] || navigator['mozConnection'] || navigator['webkitConnection']) : 'unknown';

      this.statsForm.nativeElement.nt.value = connection.type;
    } catch (e) {

    }*/
  }

  showCV(type?) {
    this._cvService.showCV(SOFTWARE_ENGINEER);
    //this.downloadEvent.emit(type);
  }


  get infos() {
    return this._configService.infos;
  }

  get birthday() {
    return this._configService.birthday;
  }




}
