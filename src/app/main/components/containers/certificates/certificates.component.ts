import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/main/services/config.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {


  constructor(private _configService: ConfigService) { }

  ngOnInit() {

  }

  get links() {
    return this._configService.certificates;
  }

  check(link) {
    window.open(link, '_blank');
  }



}
