import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FrankfurterHomePageComponent } from './pages/frankfurterHomePage/frankfurterHomePage.component';
import { FrankfurterConversorPageComponent } from './pages/frankfurterConversorPage/frankfurterConversorPage.component';

const routes: Routes = [
  {
    path: 'home',
    component: FrankfurterHomePageComponent
  },
  {
    path: 'conversor',
    component: FrankfurterConversorPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrankfurterRoutingModule { }
