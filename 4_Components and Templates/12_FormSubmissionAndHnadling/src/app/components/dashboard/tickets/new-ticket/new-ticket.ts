import { Component } from '@angular/core';
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
  onSubmit(titleElement:HTMLInputElement , textElement:string, form:HTMLFormElement){
    console.dir(titleElement.value );
    console.dir(textElement);
    form.reset(); // it resets the form 
    
  }
}
