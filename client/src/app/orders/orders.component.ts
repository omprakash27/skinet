import { Observable } from 'rxjs';
import { OrdersService } from './orders.service';
import { IOrder } from './../shared/models/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: IOrder[];

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrdersForUsers().subscribe(
      (orders: IOrder[]) => {
        console.log(this.orders);
        this.orders = orders;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
