
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DASHBOARD_LOGIN_URL, DASHBOARD_STATS_URL } from './config/config';
import { LoginComponent } from './pages/login/login.component';
import { StatsComponent } from './pages/stats/stats.component';
import { RouteGuard } from './services/route-gaurd.guard';

const ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'stats',
        component: StatsComponent,
        canActivate: [RouteGuard]
    },
    {
        path: '',
        redirectTo: '/dashboard/login',
        pathMatch: 'prefix'
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {
}
