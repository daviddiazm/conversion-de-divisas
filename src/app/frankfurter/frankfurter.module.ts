import { NgModule } from '@angular/core';
import { FrankfurterHomePageComponent } from './pages/frankfurterHomePage/frankfurterHomePage.component';
import { FrankfurterRoutingModule } from './frankfurter-routing.module';
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from '@angular/common';
import { FrankfurterConversorPageComponent } from './pages/frankfurterConversorPage/frankfurterConversorPage.component';


@NgModule({
  imports: [
    FrankfurterRoutingModule,
    SharedModule,
    CommonModule,
],
  exports: [
    FrankfurterHomePageComponent
  ],
  declarations: [
    FrankfurterHomePageComponent,
    FrankfurterConversorPageComponent
  ],
  providers: [],
})
export class FrankfuterModule { }
