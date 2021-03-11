import { Component } from "@angular/core";
import { notiService } from "./notification.service";
@Component({
  selector: "noti-app",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class notiComp {
  constructor(public noti: notiService) {}
}
