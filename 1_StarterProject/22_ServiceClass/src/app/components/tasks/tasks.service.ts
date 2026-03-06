import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TaskService {
 private tasks = [
        {id:'t1', userId: 'u1', title: 'kam 1', time: '10:00', summary: 'kam kr  of task 1',dueDate : '2024-06-30'},
        {id:'t2', userId: 'u1', title: 'kam 2', time: '11:00', summary: 'kr kam of task 2',dueDate : '2024-06-30'},
        {id:'t3', userId: 'u1', title: 'kam 3', time: '12:00', summary: 'Summary of task 3',dueDate : '2024-06-30'},
    ];


    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: 't' + Math.random().toString(),
            userId: userId,
            title: taskData.title,
            time: new Date().toISOString(),
            summary: taskData.summary,
            dueDate: taskData.date,
        });
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}   