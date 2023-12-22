import { Component,OnInit,} from '@angular/core';
import { InputGenerator } from '../inputGenerator';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.css'],
})
export class FillFormComponent implements OnInit {

  resData:any;
  adArray:any[]=[];
  chArray:any[]=[];
    id!:number;
    frmData:any ={}

    ticketData:any={};
  constructor(private dataService:DataService,private router:Router){
    
  }
  ngOnInit(): void { 
    this.frmData = this.dataService.dataEmit();

    if(this.frmData.frmData.adultsNum>0){
      for(let i=1;i<=this.frmData.frmData.adultsNum;i++){
        this.adArray.push({name:`Person${i}`,title:`Person ${i}`})
      }
    }
    if(this.frmData.frmData.childNum>0){
      for(let i=1;i<=this.frmData.frmData.childNum;i++){
        this.chArray.push({name:`Child${i}`,title:`Child ${i}`})
      }
    }
  }

  sbmtData(data:FormData){
  this.ticketData.frm1Data = this.frmData.frmData;
  this.ticketData.selFlight = this.frmData.selectFlight
  this.ticketData.frm2Data = data;
  this.ticketData.chArray = this.chArray;
  this.ticketData.adArray = this.adArray;
  this.dataService.ticketPageData(this.ticketData);
  this.router.navigate(["/success"])

    
  }
  resetForm(form:NgForm){
    form.reset();
  }

}
