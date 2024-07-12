import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FrankfurterService } from '../../services/frankfurter.service';
import { Currency } from '../../interfaces/currency.interface';

@Component({
  selector: 'frankfurter-conversor-page',
  templateUrl: `./frankfurterConversorPage.component.html`,
  styleUrl: './frankfurterConversorPage.component.css',
})
export class FrankfurterConversorPageComponent {

  constructor(private frankfurterService: FrankfurterService) {}

  currency?:Currency

  public getCurency():void {
    this.frankfurterService.getCurrencies()
      .subscribe((currency)=> {
        if(currency) {
          this.currency = currency
        }
      })
  }
}
