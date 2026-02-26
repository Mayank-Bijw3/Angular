import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { form } from "@angular/forms/signals";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css'],
  imports: [FormsModule]
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter();

  enteredTitle = '';
  //or enteredTitle = signal('');

  enteredSummary = '';
  enteredDate = '';


  onCancel() {
    this.cancel.emit();
  }

 
}