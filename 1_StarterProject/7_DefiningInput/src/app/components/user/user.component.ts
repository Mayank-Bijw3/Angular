import { Component,Input } from "@angular/core"; //1

import { DUMMY_USERS } from "./dummy-users";

const initaialIndex = 0;

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"],
})
export class UserComponent {
  
  @Input() avatar!:String;  //it can be anything int,boolean , char
  @Input({required: true}) name!:String;  //!-> says it will be filled by other component
        //sending property requireed i.e it is compulory to send this property from other component
 
 
        get imageUrl() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    // this.avatar.set //it does not work here as signals are read only in other component and we can not change it here as it is read only
    //  here but we can change it in parent component where it is defined as signal
  }
}