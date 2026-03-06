import { Component, ContentChild, ElementRef, Host, HostBinding, HostListener, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
})
export class Control {
 
  label = input.required<string>();
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
}
