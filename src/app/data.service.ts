import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  dataEmiter:EventEmitter<any>= new EventEmitter<any>()

  constructor(private http : HttpClient ) { }

  addData(data:any){
    this.dataEmiter.emit(data);
  }
  
  showData(){
    
  }
}
