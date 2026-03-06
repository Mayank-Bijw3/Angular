import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInput } from './components/user-input/user-input';
import { InvestmentInput } from './model/investment-input.model';
import { InvestmentResults } from './components/investment-results/investment-results';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, UserInput, InvestmentResults  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
   

}
