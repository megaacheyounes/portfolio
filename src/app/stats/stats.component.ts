import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stat } from '../stat';
import { isArray } from 'util';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  // stats = [];
  secret = '';
  stats: Stat[];
  statsColumns: String[] = ['date', 'ip', 'method', 'language', 'device', 'location', 'os', 'browser'];
  error;
  @ViewChild('paginator') paginator;

  dataSource;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

  loadStats() {
    const url = /* 'http://localhost:3000' + */ '/stats';
    console.log('secret', this.secret);
    this.http.post(url, { secret: this.secret }).subscribe((data: Stat[]) => {
      this.dataSource = new MatTableDataSource<Stat>(data);
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.error = err.error;
      console.log('err', err);
    });

  }

}
