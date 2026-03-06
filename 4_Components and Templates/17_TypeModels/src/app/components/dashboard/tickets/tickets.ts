import { Component } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";
import { Ticket } from './ticket/ticket';
import { TicketModule } from './ticket.model';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket,Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets: TicketModule[] = [];

  onAdd(ticketData:{title:string;text:string}){
    const ticket : TicketModule ={
      title : ticketData.title,
      request : ticketData.text,
      id: Math.random().toString(),
      status : 'open'
    }

    this.tickets.push(ticket);
  }

  onCloseTicket(id:string){
    this.tickets = this.tickets.map((ticket)=>{
      if(ticket.id === id){
        return {...ticket, status:'closed'}
      }
      return ticket;
    })
  }
}
