import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './main/main.module#MainModule'
  }/* , {
    path: '/stats',
    loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule)
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
