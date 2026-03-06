import { Component, Input } from "@angular/core";


interface Task {    id: string;
    userId: string;
    title: string;
    time: string;
    dueDate: string;
    summary: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './Task.html',       
    styleUrls: ['./Task.css']
})

export class TaskComponent {
  @Input({required: true}) task!: Task;
}