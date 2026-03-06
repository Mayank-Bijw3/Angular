import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/Task";
import { NewTaskComponent } from "./new-task/new-tast";     
import { NewTaskData } from "./task/task.model";

@Component({
  selector: 'app-tasks',
  templateUrl: './Tasks.html',
  styleUrls: ['./Tasks.css'],
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  
    @Input({required: true}) userId?: string;
    @Input({required: true}) name?: string;

    isAddingTask = false;


    tasks = [
        {id:'t1', userId: 'u1', title: 'kam 1', time: '10:00', summary: 'kam kr  of task 1',dueDate : '2024-06-30'},
        {id:'t2', userId: 'u1', title: 'kam 2', time: '11:00', summary: 'kr kam of task 2',dueDate : '2024-06-30'},
        {id:'t3', userId: 'u1', title: 'kam 3', time: '12:00', summary: 'Summary of task 3',dueDate : '2024-06-30'},
    ];

    get selectedUserTasks() {
        return this.tasks.filter(task => task.userId === this.userId);
    }
    
    onCompleteTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCancelAddTask() {
        this.isAddingTask = false;
    }

    onAddTask(taskData: NewTaskData) {
        this.tasks.unshift({
            id: 't' + Math.random().toString(),
            userId: this.userId!,
            title: taskData.title,
            time: new Date().toISOString(),
            summary: taskData.summary,
            dueDate: taskData.date,
        });
        this.isAddingTask = false;
    }
            
}