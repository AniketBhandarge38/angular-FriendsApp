import { Component } from "@angular/core";
import { friend } from "./friend";
import { FriendService } from "./friend.service";
import { notiService } from "./notification.service";
import { AllFriends } from "./samplefriends";

@Component({
  selector: "friends-app",
  templateUrl: "./friends.component.html",
  styleUrls: ["./friends.component.css"]
})
export class friendsComp {
  myfriends: friend[];

  constructor(private frndService: FriendService) {}

  getFriends() {
    this.frndService.getFriends().subscribe(f => (this.myfriends = f));
  }

  ngOnInit() {
    this.getFriends();
  }
}
