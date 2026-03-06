import { Component,computed,EventEmitter,Input,Output } from "@angular/core"; //1

type User1 = {
  id:string | number | undefined,
  avatar?:string ,
  name:string | undefined
}
interface User2{   //only for objects 
  id:string | number | undefined,
  avatar?:string ,
  name:string | undefined
}

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"],
})
export class UserComponent {
   
  // @Input({required: true}) id:string | number | undefined;
  // @Input({required: true}) avatar?:string ;
  // @Input({required: true}) name:string | undefined;

  //insted of thi swe can do

  @Input({required: true}) user:{
    id:string | number | undefined,
    avatar?:string ,
    name:string | undefined
  } | undefined;

  //or defining an alias i.e alternate name or property that we are going to use multiple times
  //check on top
  @Input({required: true}) user1:User1 | undefined;

  @Input({required: true}) user2:User2 | undefined;




  @Output() pqr  = new EventEmitter();
  

  imageUrl = computed(() => 'assets/users/' + this.user?.avatar)!;

  onSelectUser() {  
    this.pqr.emit(this.user?.id);
}
}