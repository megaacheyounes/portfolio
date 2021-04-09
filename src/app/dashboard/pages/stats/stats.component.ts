import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  // stats = [];

  error;
  // @ViewChild('paginator') paginator;
  loading = false;

  data;

  highlights = [
    {
      title: 'title 1 ',
      value: 30,
      icon: 'visibility_on',
      bg: 'gr-1'
    }, {
      title: 'title 2 ',
      value: 3000,
      icon: 'email',
      bg: 'gr-2'
    }, {
      title: 'title 3 ',
      value: -5,
      icon: 'cloud_download',
      bg: 'gr-3'
    }, {
      title: 'title 4 ',
      value: 305,
      icon: 'vpn_key',
      bg: 'gr-4'
    }
  ];

  constructor(private _mainService: MainService) {

  }

  ngOnInit() {
    this.updateLoadingFlag(this._mainService.loadStats$()).subscribe((response: any) => {
      this.data = response;
    },
      error => {
        this.error = error;
      });
  }

  setCategory($category) {

  }

  updateLoadingFlag(request: Observable<Object>) {
    this.loading = true;
    return request.pipe(finalize(() => this.loading = false));
  }
}
