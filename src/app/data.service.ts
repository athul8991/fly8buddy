import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  dataEmiter:EventEmitter<any>= new EventEmitter<any>();
  
  url = 'http://127.0.01:3000';
  date!:string;

  constructor(private http : HttpClient ) { }

  fetchData(frmData:any){

    this.date=frmData.departingDate;

    this.http.post(this.url,frmData).subscribe({

      next:(data)=>{

        const obj = {date:this.date,...data}
        
        this.dataEmiter.emit(obj);
        

      },
      error:(err)=>{

        console.log(err);
        

      }
    })

  }
}
