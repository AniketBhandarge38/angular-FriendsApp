import { Injectable } from "@angular/core";
import { AllFriends } from "./samplefriends";
import { friend } from "./friend";
import { Observable, of } from "rxjs";

import { notiService } from "./notification.service";
@Injectable({
  providedIn: "root"
})
export class FriendService {
  constructor(private notice: notiService) {}

  getFriends(): Observable<friend[]> {
    const frnds = of(AllFriends);
    this.notice.add("Friends are fetched using friend service");
    return frnds;
  }
}
