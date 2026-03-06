import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css']
})
export class NewTaskComponent {
  @Output() taskAdded = new EventEmitter();

  @Output() cancel = new EventEmitter();

  onCancel() {
    this.cancel.emit();
  }

  addTask(taskName: string) {
    this.taskAdded.emit(taskName);

  }
}