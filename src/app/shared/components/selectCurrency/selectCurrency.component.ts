import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrencyCollection } from '../../../frankfurter/interfaces/currencyCollection.interface';
import { FrankfurterService } from '../../../frankfurter/services/frankfurter.service';
import { CurrencyType } from '../../../frankfurter/interfaces/currency-type.type';

@Component({
  selector: 'shared-select-currency',
  templateUrl: './selectCurrency.component.html',
  styleUrl: './selectCurrency.component.css',
})
export class SelectCurrencyComponent implements OnInit {
  public currencyCollection?: CurrencyCollection
  currencies: { code: string, description: string }[] = [];

  @Output()
  currencyCode = new EventEmitter<CurrencyType>()

  constructor( private frankfurterService:FrankfurterService ) {}

  ngOnInit(): void {
    this.frankfurterService.getAllCurrencies()
      .subscribe((collection)=> {
        this.currencyCollection = collection

        this.currencies = Object.keys(collection).map(key => ({
          code: key,
          description: this.currencyCollection![key as keyof CurrencyCollection]
        }));
      })
  }

  public onCode(code: string):void {
    this.currencyCode.emit(this.frankfurterService.verifyCurrencyExist(code))
  }

}
