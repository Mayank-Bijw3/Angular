import { Component,computed,EventEmitter,Input,Output } from "@angular/core"; //1

type User = {
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

  @Input({required: true}) user:User | undefined;
  @Output() pqr  = new EventEmitter();
  
  imageUrl = computed(() => 'assets/users/' + this.user?.avatar)!;

  onSelectUser() {  
    this.pqr.emit(this.user?.id);
}
}