import { Component,  Input } from "@angular/core";
import { Task } from "./task.model";
import { CardComponent } from "../../shared/card/card";
import { DatePipe } from "@angular/common";
import { TaskService } from "../tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './Task.html',       
    styleUrls: ['./Task.css'],
    imports: [CardComponent, DatePipe]
})

export class TaskComponent {
  @Input({required: true}) task!: Task;

  constructor(private tasksService: TaskService) {
  }
  onComplete() {
    this.tasksService.removeTask(this.task.id);
  }
}