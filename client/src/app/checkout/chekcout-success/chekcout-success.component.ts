import { IOrder } from './../../shared/models/order';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chekcout-success',
  templateUrl: './chekcout-success.component.html',
  styleUrls: ['./chekcout-success.component.scss']
})
export class ChekcoutSuccessComponent implements OnInit {
  order:IOrder;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation && navigation.extras && navigation.extras.state;

    if(state){
      this.order = state as IOrder;
    }
   }

  ngOnInit(): void {
  }

}
