import { Component } from "@angular/core";

import { DUMMY_USERS } from "./dummy-users";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"],
})
export class UserComponent {
  tpUser = DUMMY_USERS[0];

  // get method is used to create a property that can be accessed like a regular property but is computed dynamically when accessed. 
  // It allows you to define a method that can be accessed as if it were a property, without needing to call it like a function. 
  // This can be useful for creating read-only properties or for performing calculations on the fly when the property is accessed.
  get imagePath(): string {
    return `assets/users/${this.tpUser.avatar}`;
  }
} 