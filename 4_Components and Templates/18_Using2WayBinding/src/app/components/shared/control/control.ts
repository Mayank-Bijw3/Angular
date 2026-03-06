import { AfterContentInit, afterEveryRender, afterNextRender, Component, ContentChild, ElementRef, Host, HostBinding, HostListener, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
})
export class Control implements AfterContentInit {
  
  label = input.required<string>();

  
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  
  ngAfterContentInit(): void {
    console.log(this.control);
    
  }

  constructor(){ // These both are log whenever there is any change in the entire webside not in just this component but in entire website
    afterEveryRender(()=>{
      console.log("after every Render");
      
    });// After every render get executed if anything in the website is and after next render get executed when an next change happen
    afterNextRender(()=>{
      console.log("after next Render");
    });
  }
}
