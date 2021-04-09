import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Stat } from 'src/app/main/models/stat';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  stats: Stat[];
  statsColumns: String[] = ['date', 'ip', 'method', 'language', 'device', 'location', 'os', 'browser'];
  dataSource;
  @Input() data;

  excludeLocals;

  constructor() { }

  ngOnInit() {
    this.update();
  }

  update() {
    const temp = this.data.filter(item => this.excludeLocals ? this.shouldInclude(item) : true);
    this.dataSource = new MatTableDataSource(temp);
  }

  shouldInclude(item) {
    const ip = item.ip;
    return !(ip === '::1' || ip === '127.0.0.1');
  }

}
