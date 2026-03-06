import { Component,computed,signal } from "@angular/core"; //1

import { DUMMY_USERS } from "./dummy-users";

const initaialIndex = 0;

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"],
})
export class UserComponent {
  tpUser = signal(DUMMY_USERS[initaialIndex]); //2

  // get imageUrl() {
  //   return `assets/users/${this.tpUser.avatar}`;
  // }  bye bye

  imageUrl = computed(() => 'assets/users/' + this.tpUser().avatar); //4

  onSelectUser() {  //REGULAR METHOD
    const randomValue = Math.floor(Math.random() * DUMMY_USERS.length);
    this.tpUser.set(DUMMY_USERS[randomValue]); //3
}
}