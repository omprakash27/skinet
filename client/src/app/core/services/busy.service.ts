import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { isDeepStrictEqual } from 'util';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount:number = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  busy(){
    this.busyRequestCount++;
    this.spinnerService.show(undefined,{
      type:'timer',
      bdColor:'rgba(255,255,255,.07)',
      color:'#333333'
    });
   };

  ideal(){
    this.busyRequestCount--;
    if(this.busyRequestCount <= 0){
      this.busyRequestCount=0;
      this.spinnerService.hide();

    }
  }

}
