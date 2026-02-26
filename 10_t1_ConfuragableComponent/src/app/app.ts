import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/Header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './components/user/dummy-users';
import { TasksComponent } from "./components/tasks/Tasks";

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('10_t1_ConfuragableComponent');
  user = DUMMY_USERS;
  selectedUserId='u1';

  get selectedUser() {
    return this.user.find(user => user.id === this.selectedUserId); //! -> if not found then it will return null but ! says it will always find the user and it will never return null
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
