import { Component } from "@angular/core";

import { DUMMY_USERS } from "./dummy-users";

const initaialIndex = 0;

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"],
})
export class UserComponent {
  tpUser = DUMMY_USERS[initaialIndex];

  get imageUrl() {
    return `assets/users/${this.tpUser.avatar}`;
  }

  onSelectUser() {  //REGULAR METHOD
    const randomValue = Math.floor(Math.random() * DUMMY_USERS.length);
    this.tpUser = DUMMY_USERS[randomValue];
}
}