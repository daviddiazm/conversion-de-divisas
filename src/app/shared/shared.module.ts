  import { NgModule } from '@angular/core';

  import { SearchBarComponent } from './components/searchBar/searchBar.component';
  import { NavBarComponent } from './components/navBar/navBar.component';
  import { CommonModule } from '@angular/common';
import { SelectCurrencyComponent } from './components/selectCurrency/selectCurrency.component';

  @NgModule({
    imports: [CommonModule],
    exports: [
      SearchBarComponent,
      NavBarComponent,
      SelectCurrencyComponent
    ],
    declarations: [
      SelectCurrencyComponent,
      SearchBarComponent,
      NavBarComponent
    ],
    providers: [],
  })
  export class SharedModule { }
