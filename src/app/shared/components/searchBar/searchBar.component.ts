import {  Component, EventEmitter, Output } from '@angular/core';
import { CurrencyType } from '../../../frankfurter/interfaces/currency-type.type';

@Component({
  selector: 'shared-search-bar',
  template: `
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
      placeholder=""
      #currencyInput
      (keyup.enter)="emitCurrency(currencyInput.value)"
    />
  </div>
  `,
  styleUrl: './searchBar.component.css',
})
export class SearchBarComponent {

  @Output()
  public currencySelect = new EventEmitter<string>()

  currencyDev: string = ''

  public emitCurrency(value:string) {
    this.currencyDev = value
    this.currencySelect.emit(value)
  }



}
