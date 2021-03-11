import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class notiService {
  notifications: string[] = [];

  add(noti: string) {
    this.notifications.push(noti);
  }

  clear() {
    this.notifications = [];
  }
}
