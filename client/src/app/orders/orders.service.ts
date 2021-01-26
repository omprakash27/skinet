import { IOrder } from './../shared/models/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.apiUrl;
  order$: Observable<IOrder>;

  constructor(private http: HttpClient) { }

  getOrdersForUsers(){
    return this.http.get<IOrder[]>(this.baseUrl + 'orders');
  }

  getOrderDetailed(id:number){
    return this.http.get<IOrder>(this.baseUrl +'orders/'+id);
  }

}
