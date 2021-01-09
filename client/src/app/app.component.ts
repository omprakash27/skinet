import { BasketService } from './basket/basket.service';
import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'client';

  constructor(private basketService: BasketService) {  }

  ngOnInit(): void {
    const basketId = localStorage.getItem("basket_id");
    console.log(basketId);
    if(basketId){
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log('initialised basket');
        //console.log(response);
      }, error => {
        console.log(error);
      })
    }
  }
}
