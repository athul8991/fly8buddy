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
}
