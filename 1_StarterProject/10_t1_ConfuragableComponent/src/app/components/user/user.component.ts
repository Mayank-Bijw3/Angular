import { Component,computed,EventEmitter,Input,Output } from "@angular/core"; //1

const initaialIndex = 0;

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"],
})
export class UserComponent {
   
  @Input({required: true}) id:string | number | undefined;

  @Input({required: true}) avatar?:string ;
  
  @Input({required: true}) name:string | undefined;

  @Output() pqr  = new EventEmitter();
  

  imageUrl = computed(() => 'assets/users/' + this.avatar);

  onSelectUser() {  
    this.pqr.emit(this.id);
}
}