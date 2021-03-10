import { Component, Input } from "@angular/core";
import { friend } from "./friend";
import { AllFriends } from "./samplefriends";
@Component({
  selector: "friendDetail-app",
  templateUrl: "./friend-detail.component.html",
  styleUrls: ["./friend-detail.component.css"]
})
export class friendDetailComp {
  @Input() frnd: friend;
}
