import { AfterViewChecked, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button,Control,FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements OnInit, AfterViewChecked{
  
  @ViewChild('form') private form?:ElementRef<HTMLFormElement>;
  
  // Decorator content of viewChile is visible only in afterviewwchecked not in oninit but when using it as a signal it is accessible in both

  add =output<{title:string;text:string}>();


  ngOnInit(): void {
    console.log('IN ONINIT');
    console.log(this.form?.nativeElement);
      
  }
  ngAfterViewChecked(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
      
  }

  onSubmit(titleElement:string , textElement:string){
        this.add.emit({title: titleElement,text: textElement})
    this.form?.nativeElement.reset();
    
  }
}
