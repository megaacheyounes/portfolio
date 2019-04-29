import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
