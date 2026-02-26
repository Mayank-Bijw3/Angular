import { Component,EventEmitter,Input, output, Output } from "@angular/core"; //1

import { DUMMY_USERS } from "./dummy-users";

const initaialIndex = 0;

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"],
})
export class UserComponent {

  get imageUrl() {
  return 'assets/users/' + this.avatar;
  }

  @Input({required: true}) id!:String;
  @Input() avatar!:String;  
  @Input({required: true}) name!:String;  


  @Output() selected = new EventEmitter<String>(); //it is used to send event from child to parent component and it is of type void as we are not sending any data with this event
      //or 
  select2 = output<string>();
 
  //both @Output and output create event emitter and uses emit method
    
  
  onSelectUser() {
    this.selected.emit(this.id); //it will emit the event to parent component and it will trigger the event in parent component
  }
}