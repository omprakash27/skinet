import { Observable } from 'rxjs';
import { OrdersService } from './../orders.service';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from './../../shared/models/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss'],
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder;

  constructor(
    private route: ActivatedRoute,
    private breadscrumbService: BreadcrumbService,
    private orderService: OrdersService
  ) {
    this.breadscrumbService.set('@OrderDetailed', '');
  }

  ngOnInit(){
    this.locGetOrderDetailed();
  }

  locGetOrderDetailed() {
    const id:number = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.orderService
      .getOrderDetailed(id)
      .subscribe(
        (order: IOrder) => {
          console.log(order);
          this.order = order;
          this.breadscrumbService.set('@OrderDetailed',`Order# ${this.order.id} - ${this.order.status}`);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
