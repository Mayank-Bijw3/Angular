import { Component, EventEmitter, Inject, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NewTaskData } from "../task/task.model";
import { TaskService } from "../tasks.service";
import { inject } from "@angular/core";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css'],
  imports: [FormsModule]
})
export class NewTaskComponent {
  @Input({required: true}) userId?: string;  
  @Output() close = new EventEmitter();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TaskService); //another way of DI -> inject() function

  onCancel() {
    this.close.emit();
  }

 onSubmit() {
 this.tasksService.addTask(
   {
     title: this.enteredTitle,
     summary: this.enteredSummary,
     date: this.enteredDate
   },
   this.userId!
 );
  this.close.emit();
 }
 
}