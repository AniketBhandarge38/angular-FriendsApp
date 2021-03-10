import { Injectable } from "@angular/core";
import { AllFriends } from "./samplefriends";
import { friend } from "./friend";
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class FriendService {
  getFriends(): Observable<friend[]> {
    const frnds = of(AllFriends);
    return frnds;
  }
}
