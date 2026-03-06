import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Task } from "./task.model";

@Component({
  selector: 'app-task',
  templateUrl: './Task.html',       
    styleUrls: ['./Task.css']
})

export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter();

  onComplete() {
    this.complete.emit(this.task.id);
  }
}