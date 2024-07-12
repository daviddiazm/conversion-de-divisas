import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "frankfurter",
    loadChildren: ()=>import('./frankfurter/frankfurter.module').then(m=> m.FrankfuterModule)
  },
  {
    path: "**",
    redirectTo:"frankfurter"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
