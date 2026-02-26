import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/Header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './components/user/dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('3_DynamicReading');

  users = DUMMY_USERS;  //user type data

  onSelectUser(id: String) {
    console.log('Selected user ID:', id);
    
  }
}
