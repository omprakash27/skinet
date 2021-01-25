import { ChekcoutSuccessComponent } from './chekcout-success/chekcout-success.component';
import { CheckoutComponent } from './checkout.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const route: Routes = [
  {path:'', component: CheckoutComponent},
  {path:'success', component: ChekcoutSuccessComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(route)
  ],
  exports:[
    RouterModule
  ]
})
export class CheckoutRoutingModule { }
