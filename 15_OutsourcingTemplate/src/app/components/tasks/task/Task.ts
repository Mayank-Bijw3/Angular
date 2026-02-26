import { Component, Input } from "@angular/core";
import { Task } from "./task.model";

@Component({
  selector: 'app-task',
  templateUrl: './Task.html',       
    styleUrls: ['./Task.css']
})

export class TaskComponent {
  @Input({required: true}) task!: Task;
}