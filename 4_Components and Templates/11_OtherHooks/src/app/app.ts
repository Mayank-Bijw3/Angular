import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { ServerStatus } from "./components/dashboard/server-status/server-status";
import { Traffic } from "./components/dashboard/traffic/traffic";
import { Tickets } from "./components/dashboard/tickets/tickets";
import { DashboardItem } from "./components/dashboard/dashboard-item/dashboard-item";

@Component({
  selector: 'app-root',
  imports: [Header, ServerStatus, Traffic, Tickets, DashboardItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('11_OtherHooks');

  
}
