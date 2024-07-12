import { NgModule } from '@angular/core';

import { SearchBarComponent } from './components/searchBar/searchBar.component';
import { NavBarComponent } from './components/navBar/navBar.component';

@NgModule({
  imports: [],
  exports: [
    SearchBarComponent,
    NavBarComponent
  ],
  declarations: [
    SearchBarComponent,
    NavBarComponent
  ],
  providers: [],
})
export class SharedModule { }
