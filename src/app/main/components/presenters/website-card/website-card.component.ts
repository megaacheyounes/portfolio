import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/main/models/project';



@Component({
  selector: 'app-website-card',
  templateUrl: './website-card.component.html',
  styleUrls: ['./website-card.component.scss']
})
export class WebsiteCardComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

  open() {
    window.open(this.project.link);
  }

}
