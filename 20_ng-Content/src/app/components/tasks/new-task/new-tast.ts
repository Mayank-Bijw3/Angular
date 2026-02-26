import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NewTaskData } from "../task/task.model";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css'],
  imports: [FormsModule]
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';


  onCancel() {
    this.cancel.emit();
  }

 onSubmit() {
 this.add.emit({
  title: this.enteredTitle,
  summary: this.enteredSummary,
  date: this.enteredDate
  });

 }
 
}