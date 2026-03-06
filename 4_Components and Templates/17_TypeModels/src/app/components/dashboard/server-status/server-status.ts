import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit,OnDestroy {
  
  currentStatus= signal<'online' | 'offline' | 'unknown'>('offline');
  private interval?: ReturnType<typeof setInterval>;
  
  //alternative for ngOnDestroy 
  private destroyRef = inject(DestroyRef); //almost same as ngOnDestroy but it is used with signals and it will automatically clean up any resources when the component is destroyed, without the need for us to manually implement the ngOnDestroy method.


  ngOnInit() {
    this.interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.33) {
        this.currentStatus.set('online');
      } else if (random < 0.66) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    } , 5000);
    
    //jya wr place krat ahe tyat declare kra
    this.destroyRef.onDestroy(() => {
      clearInterval(this.interval);
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }

}
