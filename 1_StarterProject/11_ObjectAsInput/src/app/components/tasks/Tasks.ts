import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-tasks',
  templateUrl: './Tasks.html',
  styleUrls: ['./Tasks.css']
})
export class TasksComponent {
  
    @Input({required: true}) name?: string;
}