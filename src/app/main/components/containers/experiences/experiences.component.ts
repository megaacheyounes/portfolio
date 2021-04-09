import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  exps;

  constructor(private _configService: ConfigService) { }

  ngOnInit() {
    this.exps = this._configService.experience;
  }

  openLink(link) {
    window.open(link, '_blank');
  }

}
