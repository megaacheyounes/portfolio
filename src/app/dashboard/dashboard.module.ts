import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { MainService } from './services/main.service';
import { DataTableComponent } from './components/data-table/data-table.component';


import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { StatsComponent } from './pages/stats/stats.component';
import { AuthService } from './services/auth.service';
// import { MatCheckboxModule, MatProgressSpinnerModule, MatListModule, MatTableModule, MatBadgeModule, MatDividerModule } from '@angular/material';
import { RouteGuard } from './services/route-gaurd.guard';
import { MainComponent } from './components/main/main.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    DataTableComponent,
    LoginFormComponent,
    LoginComponent,
    StatsComponent,
    MainComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    // MatCheckboxModule,
    // MatProgressSpinnerModule,
    // MatListModule,
    // MatTableModule,
    // MatBadgeModule,
    // MatDividerModule
  ],
  providers: [
    MainService,
    AuthService,
    RouteGuard
  ]
})
export class DashboardModule { }
