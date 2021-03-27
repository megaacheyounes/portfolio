import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit,
} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConfigService } from "src/app/main/services/config.service";
import { CvService } from "src/app/main/services/cv.service";

declare var particlesJS: any;

@Component({
  selector: "app-bio",
  templateUrl: "./bio.component.html",
  styleUrls: ["./bio.component.scss"],
})
export class BioComponent implements OnInit,AfterViewInit {
  @Output() downloadEvent = new EventEmitter();

  @ViewChild("statsForm", { static: true }) statsForm;

  constructor(
    private _configService: ConfigService,
    private _cvService: CvService
  ) {}

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
  
  ngAfterViewInit() {
  }

  goToRepo(){
    window.open("https://github.com/megaacheyounes/portfolio","_blank");
  }

  showCV(type?) {
    this._cvService.showCV(type);
  }

  get infos() {
    return this._configService.infos;
  }

  get birthday() {
    return this._configService.birthday;
  }
}
