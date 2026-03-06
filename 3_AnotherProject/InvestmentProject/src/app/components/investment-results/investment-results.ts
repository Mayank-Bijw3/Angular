import { CurrencyPipe,} from '@angular/common';
import { Component } from '@angular/core';
import { InvestmentService } from '../../service/investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  constructor(private investmentService: InvestmentService) {}

  get results() {
    return this.investmentService.resultsData;
  }
}
