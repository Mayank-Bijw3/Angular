import { Component } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";
import { Ticket } from './ticket/ticket';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  
}
