import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button,Control,FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {

  @ViewChild('form' /* or ButtonComponenrt*/) private form?:ElementRef<HTMLFormElement>;
  // it is a decorator can be use to select element from template and to use in .ts class 
  // it requires some input either a class name like ButtonComponent

  //can also be accessed as
 // private form? = viewChild<ElementRef<HTMLFormElement>>('form');

  onSubmit(titleElement:HTMLInputElement , textElement:string){
    console.dir(titleElement.value );
    console.dir(textElement);
    this.form?.nativeElement.reset(); // it resets the form 
    // ? -> access only if form is popullated else do not access
    // nativeElement for -> ElementRef as it provides a wrapper on form and then access .reset
  }
}
