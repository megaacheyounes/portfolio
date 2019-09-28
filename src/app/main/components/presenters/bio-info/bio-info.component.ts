import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bio-info',
  templateUrl: './bio-info.component.html',
  styleUrls: ['./bio-info.component.scss']
})
export class BioInfoComponent implements OnInit {

  @Input() info;

  constructor() { }

  ngOnInit() {
  }

}
