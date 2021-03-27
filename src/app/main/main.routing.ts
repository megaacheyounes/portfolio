import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StatsComponent } from "../stats/stats.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { NoContentComponent } from "./components/pages/no-content/no-content.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "analytics", component: StatsComponent },
  { path: "**", pathMatch: "full", component: NoContentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
