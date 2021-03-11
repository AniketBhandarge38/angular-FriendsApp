import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComp } from "./dashboard.component";
import { friendsComp } from "./friends.component";
import { friendDetailComp } from "./friend-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "friends", component: friendsComp },
  { path: "dashboard", component: DashboardComp },
  { path: "detail:/id", component: friendDetailComp }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
