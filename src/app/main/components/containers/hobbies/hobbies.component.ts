import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {


  constructor(private _configService: ConfigService) {
  }

  ngOnInit() {
  }

  get hs() {
    return this._configService.interests;
  }

}
