import { Component } from "@angular/core";
import { friend } from "./friend";
import { FriendService } from "./friend.service";

@Component({
  selector: "dash-app",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComp {
  frndssss: friend[] = [];

  constructor(private frndservice: FriendService) {}

  ngOnInit() {
    this.getbestfriends();
  }

  getbestfriends() {
    this.frndservice
      .getFriends()
      .subscribe(f => (this.frndssss = f.slice(1, 5)));
  }
}
