import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private _configService: ConfigService) { }

  ngOnInit() {
  }

  get skills1() {
    return this._configService.skills.slice(0, this._configService.skills.length / 2);
  }

  get skills2() {
    return this._configService.skills.slice(this._configService.skills.length / 2);
  }

  get otherSkills() {
    return this._configService.additionalSkills;
  }
}
