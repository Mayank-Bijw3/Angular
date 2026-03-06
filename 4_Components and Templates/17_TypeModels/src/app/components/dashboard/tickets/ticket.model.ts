export interface TicketModule{
    id:string;
    title:string;
    request:string;
    status: 'open' | 'closed'; //unions
}