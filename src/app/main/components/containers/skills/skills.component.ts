import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/main/services/config.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private _configService: ConfigService) { }

  ngOnInit() {
  }

   getSkills(index) {
    return this._configService.skills[index];
  }

   
  get otherSkills() {
    return this._configService.additionalSkills;
  }
}
