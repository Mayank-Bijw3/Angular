import { Component, input, output, signal } from '@angular/core';
import { TicketModule } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
  data = input.required<TicketModule>();

  detailsVisible =signal(false);

  onToggleDetails(){
    this.detailsVisible.set(!this.detailsVisible());
  }
  
  close = output();

  onMarkAsCompleted(){
    this.close.emit();
  }
}
