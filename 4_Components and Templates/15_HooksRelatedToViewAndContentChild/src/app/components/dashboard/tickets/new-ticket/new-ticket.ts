import { AfterViewChecked, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
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

  ngOnInit(): void {
    console.log('IN ONINIT');
    console.log(this.form?.nativeElement);
      
  }
  ngAfterViewChecked(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
      
  }

  onSubmit(titleElement:HTMLInputElement , textElement:string){
    console.dir(titleElement.value );
    console.dir(textElement);
    this.form?.nativeElement.reset();
    
  }
}
