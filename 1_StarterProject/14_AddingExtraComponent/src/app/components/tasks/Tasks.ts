import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './Tasks.html',
  styleUrls: ['./Tasks.css'],
  imports: [TaskComponent]
})
export class TasksComponent {
  
    @Input({required: true}) id?: string;
    @Input({required: true}) name?: string;
    tasks = [
        {id:'t1', userId: 'u1', title: 'kam 1', time: '10:00', summary: 'kam kr  of task 1',dueDate : '2024-06-30'},
        {id:'t2', userId: 'u1', title: 'kam 2', time: '11:00', summary: 'kr kam of task 2',dueDate : '2024-06-30'},
        {id:'t3', userId: 'u1', title: 'kam 3', time: '12:00', summary: 'Summary of task 3',dueDate : '2024-06-30'},
    ];

    get selectedUserTasks() {
        return this.tasks.filter(task => task.userId === this.id);
    }
}