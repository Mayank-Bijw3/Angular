import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Task } from "./task.model";
import { CardComponent } from "../../shared/card/card";

@Component({
  selector: 'app-task',
  templateUrl: './Task.html',       
    styleUrls: ['./Task.css'],
    imports: [CardComponent]
})

export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter();

  onComplete() {
    this.complete.emit(this.task.id);
  }
}