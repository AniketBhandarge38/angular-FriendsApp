import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { friendsComp } from "./friends.component";
import { friendDetailComp } from "./friend-detail.component";
import { FriendService } from "./friend.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, friendsComp, friendDetailComp],
  bootstrap: [AppComponent],
  providers: [FriendService]
})
export class AppModule {}
