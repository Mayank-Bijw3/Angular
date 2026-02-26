import { Component } from "@angular/core";

import { DUMMY_USERS } from "./dummy-users";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"],
})
export class UserComponent {
  tpUser = DUMMY_USERS[0];
}