import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements OnInit, AfterViewChecked {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  enteredTitle = '';
  enteredText = '';

  add = output<{ title: string; text: string }>();

  ngOnInit(): void {
    console.log('IN ONINIT');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewChecked(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    //this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
