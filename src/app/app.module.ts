import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { friendsComp } from "./friends.component";
import { friendDetailComp } from "./friend-detail.component";
import { FriendService } from "./friend.service";
import { notiComp } from "./notification.component";
import { notiService } from "./notification.service";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComp } from "./dashboard.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    friendsComp,
    friendDetailComp,
    notiComp,
    DashboardComp
  ],
  bootstrap: [AppComponent],
  providers: [FriendService, notiService]
})
export class AppModule {}
