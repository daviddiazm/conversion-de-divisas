import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FrankfurterService } from '../../services/frankfurter.service';
import { Stock } from '../../interfaces/sotck.interface';
import { CurrencyType } from '../../interfaces/currency-type.type';

@Component({
  selector: 'frankfurter-conversor-page',
  templateUrl: `./frankfurterConversorPage.component.html`,
  styleUrl: './frankfurterConversorPage.component.css',
})
export class FrankfurterConversorPageComponent {

  constructor(private frankfurterService: FrankfurterService) { }

  // currencyList :CurrencyType[] =["AUD" , "BGN" , "BRL" , "CAD" , "CHF" , "CNY" , "CZK" , "DKK" , "GBP" , "HKD" , "HUF" , "IDR" , "ILS" , "INR" , "ISK" , "JPY" , "KRW" , "MXN" , "MYR" , "NOK" , "NZD" , "PHP" , "PLN" , "RON" , "SEK" , "SGD" , "THB" , "TRY" , "USD" , "ZAR" ]
  currencyGet: CurrencyType = ""
  stock?: Stock

  public getStock(): void {
    this.frankfurterService.getStock(this.currencyGet|| 'AUD')
    // this.frankfurterService.getStock("AUD")
      .subscribe((stock:Stock) => {
        if (stock) {
          this.stock = stock
        }
      })
  }

  // private verifyCurrencyExist(value: string) : CurrencyType {
  //   if
  //     (value === "AUD" ||
  //     value === "BGN")
  //     {
  //       return value
  //   } else {
  //     return ''
  //   }
  // }



  public getcurrenciSelect (value: string) : void {
    // this.currencyGet = this.verifyCurrencyExist(value)
    this.currencyGet = this.frankfurterService.verifyCurrencyExist(value)
    console.log('value ', value );
    console.log('cureenGet ', this.currencyGet, );
  }

}
