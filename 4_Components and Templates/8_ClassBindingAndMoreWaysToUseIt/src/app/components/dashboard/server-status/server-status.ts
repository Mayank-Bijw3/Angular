import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus {
  currentStatus:'online' | 'offline' | 'unknown' = 'offline';
  //explicitly defining the type of currentStatus to be one of the three string literals: 'online', 'offline', or 'unknown'. 
  // This is a TypeScript feature called a union type, which allows us to specify that a variable can only take on a limited set of values.
  //  By doing this, we can catch errors at compile time if we try to assign a value to currentStatus that is not one of the specified strings.

  constructor() {
    setInterval(() => {
      const random = Math.random();
      if (random < 0.33) {
        this.currentStatus = 'online';
      } else if (random < 0.66) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    } , 5000);
  }
}
