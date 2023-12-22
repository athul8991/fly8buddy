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

  private flightDetails:any;
  private flightsData:any;
  private form1Data:any;
  private form2Data:any;

  url = 'http://127.0.01:3000';
  constructor(private http : HttpClient ) { }


  fetchData(frmData:any){
    console.log(frmData);
    

    this.form1Data = frmData;
    console.log(this.form1Data);
    
    this.http.post(this.url,frmData).subscribe({
      next:(data)=>{
        this.flightsData = data
        const obj= {frmData:this.form1Data,...this.flightsData}     
        this.dataEmiter.emit(obj);
      },
      error:(err)=>{
        console.log(err);        
      }
    })
  }

  selctedFlight(inpData:any){
    this.flightDetails = inpData;

  }

  submitForm2Data(data:any){
    this.form2Data = data;

  }
  getTicketData(){
    let allData ={bookedDate:'2023-23',travelClass:'',flightDetails:[],passengerDetails:{}};
    allData.bookedDate = this.form1Data.dateNow;
    allData.travelClass = this.form1Data.travelClass;
    allData.flightDetails = this.flightDetails;
    allData.passengerDetails = this.form2Data;
    return allData;

  }

  

dataEmit(){
return this.form1Data;
}
}
