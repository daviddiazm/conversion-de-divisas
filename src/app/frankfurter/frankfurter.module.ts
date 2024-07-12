import { NgModule } from '@angular/core';
import { FrankfurterHomePageComponent } from './pages/frankfurterHomePage/frankfurterHomePage.component';
import { FrankfurterRoutingModule } from './frankfurter-routing.module';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  imports: [
    FrankfurterRoutingModule,
    SharedModule
],
  exports: [
    FrankfurterHomePageComponent
  ],
  declarations: [
    FrankfurterHomePageComponent,
  ],
  providers: [],
})
export class FrankfuterModule { }
