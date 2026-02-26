import { Component,computed,EventEmitter,Input,Output } from "@angular/core"; //1
import { User } from "./user.model";
import { CardComponent } from "../shared/card/card";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"],
    imports: [CardComponent]
})
export class UserComponent {

  @Input({required: true}) user:User | undefined;
  @Output() pqr  = new EventEmitter();

  @Input({required: true}) isSelected! : boolean;
  
  imageUrl = computed(() => 'assets/users/' + this.user?.avatar)!;

  onSelectUser() {  
    this.pqr.emit(this.user?.id);
}
}