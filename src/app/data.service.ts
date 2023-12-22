import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs'
import { InputGenerator } from './inputGenerator';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  dataEmiter:EventEmitter<any>= new EventEmitter<any>();
  formDataEmiter:EventEmitter<any> = new EventEmitter<any>();

  private frmData:any;
  private allData:any;

  url = 'http://127.0.01:3000';
  constructor(private http : HttpClient ) { }

  fetchData(frmData:any){
    this.http.post(this.url,frmData).subscribe({
      next:(data)=>{
       const obj = {frmData:frmData,...data}        
        this.dataEmiter.emit(obj);
      },
      error:(err)=>{
        console.log(err);        
      }
    })
  }

  dataGet(inpData:any){
    this.frmData = inpData;

  }

  ticketPageData(data:any){
    this.allData = data
  }
  getTicketData(){
    return this.allData;
  }

dataEmit(){
return this.frmData
}
}
