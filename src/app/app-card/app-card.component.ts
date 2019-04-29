import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

  open() {
    window.open(this.project.link);
  }

}
