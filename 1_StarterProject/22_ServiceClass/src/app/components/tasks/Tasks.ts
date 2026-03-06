import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/Task";
import { NewTaskComponent } from "./new-task/new-tast";     
import { NewTaskData } from "./task/task.model";
import { TaskService } from "./tasks.service";

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

    //dependency injection

    // private tasksService: TaskService;
    // constructor( tasksService: TaskService) {  //basic DI
    //     this.tasksService = tasksService;
    // }

    //Or
    constructor(private tasksService: TaskService) { } //shortcut DI -> Done

    get selectedUserTasks() {
        return this.tasksService.getUserTasks(this.userId!);
    }
    
    onCompleteTask(taskId: string) {
        this.tasksService.removeTask(taskId);
    }

    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCancelAddTask() {
        this.isAddingTask = false;
    }     
}