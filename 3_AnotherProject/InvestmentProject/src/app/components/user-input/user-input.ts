import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../service/investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {


  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  investmentDuration = '10';
  

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.initialInvestment,  //+ is used to convert the string input to a number in angular
      annualInvestment: +this.annualInvestment, 
      expectedReturn: +this.expectedReturn, 
      duration: +this.investmentDuration
    });
    
  }
}
