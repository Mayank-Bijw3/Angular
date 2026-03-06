import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit {
  currentStatus= signal<'online' | 'offline' | 'unknown'>('offline');
  //due to signals it is able to get the baground status change
  ngOnInit() {
    setInterval(() => {
      const random = Math.random();
      if (random < 0.33) {
        this.currentStatus.set('online');
      } else if (random < 0.66) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    } , 5000);
  }
}
