import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const d = false;
const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
  , {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
