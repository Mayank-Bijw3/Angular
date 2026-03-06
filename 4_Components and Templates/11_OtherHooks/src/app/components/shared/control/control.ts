import { Component, Host, HostBinding, HostListener, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  //this is recommended by angular team
  host: {
    class: 'control',
    '(click)': 'onClick()' 
  }
})
export class Control {
  
  //@HostBinding('class') className = 'control';
 
  onClick() {
    console.log('Control clicked');
  }

  // @HostListener('click') onClickHost() {
  //   console.log('Control clicked from HostListener');
  // }
 
  label = input.required<string>();
}
