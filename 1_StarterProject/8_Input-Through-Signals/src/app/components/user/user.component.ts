import { Component,computed,input,Input } from "@angular/core"; //1

import { DUMMY_USERS } from "./dummy-users";

const initaialIndex = 0;

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"],
})
export class UserComponent {
  
  // @Input() avatar!:String;  //it can be anything int,boolean , char
  // @Input({required: true}) name!:String;  //!-> says it will be filled by other component
  //       //sending property requireed i.e it is compulory to send this property from other component

  // Input -> Decorator which is used to receive data from parent component to child component
  //input -> its a special function which is used to receive data from parent component to child component
    avatar=input<string>(''); //''-> default value and <> -> type of data it will receive generics
    //avatar.input.required<string>(''); 
    name=input.required<string>();

    // get imageUrl() {
    // return 'assets/users/' + this.avatar;

    imageUrl = computed(() => 'assets/users/' + this.avatar());
  
  onSelectUser() {}
}