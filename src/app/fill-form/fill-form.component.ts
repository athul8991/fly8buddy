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
  constructor(private dataService:DataService,private router:Router){
    
  }
  ngOnInit(): void { 
    this.frmData = this.dataService.dataEmit()
    
    

    if(this.frmData.frmData.adultsNum>0){
      for(let i=1;i<=this.frmData.frmData.adultsNum;i++){
        this.adArray.push({name:`person${i}`,title:`Person ${i}`})
      }
    }
    if(this.frmData.frmData.childNum>0){
      for(let i=1;i<=this.frmData.frmData.childNum;i++){
        this.chArray.push({name:`child${i}`,title:`Child ${i}`})
      }
    }
  }

  sbmtData(data:FormData){
    console.log(data);
    this.router.navigate(["/success"])

    
  }
  resetForm(form:NgForm){
    form.reset();
  }

}
