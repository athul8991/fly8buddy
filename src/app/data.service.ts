import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  dataEmiter:EventEmitter<any>= new EventEmitter<any>()

  constructor() { }

  addData(data:any){
    this.dataEmiter.emit(data);
  }

  showData(){
    
  }
}
