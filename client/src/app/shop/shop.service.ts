import { ShopParams } from './../shared/models/shopParams';
import { IBrand } from './../shared/models/brand';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination } from '../shared/models/pagination';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProductType } from '../shared/models/productType';
import {map} from  'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl: string = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  getProducts(shopParams: ShopParams)
  : Observable<IPagination> {
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.productTypeId !== 0) {
      params = params.append('typeId', shopParams.productTypeId.toString());
    }

    if(shopParams.search){
      params = params.append('search',shopParams.search);
    }

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageIndex', shopParams.pageSize.toString());


    return this.http.get<IPagination>(this.baseUrl + 'products', {
      observe: 'response',
      params,
    }).pipe(
      map(response => { return response.body})
    );
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getProductTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types');
  }
}
