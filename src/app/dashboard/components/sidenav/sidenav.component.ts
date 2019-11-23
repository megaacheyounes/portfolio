import { Component, OnInit, Output } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() category;

  menu = [
    {
      title: 'main',
      items: [
        {
          name: 'home',
          id: 'home',
          icon: 'dashboard'
        }, {
          name: 'inbox',
          id: 'inbox',
          icon: 'mail',
          notification: 12
        }, {
          name: 'info',
          id: 'info',
          icon: 'user'
        },
      ]
    },
    {
      title: 'analytics',
      items: [
        {
          name: 'views',
          id: 'views',
          icon: 'visiblity_on'
        }, {
          name: 'cv downloads',
          id: 'cv_downloads',
          icon: 'cloud_download'
        }, {
          name: 'contact',
          id: 'contact',
          icon: 'send'
        },
      ]
    }
  ]

  constructor(private _configService: ConfigService) { }

  ngOnInit() {
  }

  action(id) {
    console.log('TCL: SidenavComponent -> action -> id', id);

  }

  get name() {
    return this._configService.infos[0].value;
  }

  get email() {
    return this._configService.infos.find(r => r.value.indexOf('@') !== -1).value;
  }
}
