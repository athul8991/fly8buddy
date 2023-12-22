import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticketData:any;
  frm2Data:any;
  constructor( private dataService:DataService){

  }

  ngOnInit(): void {
    this.ticketData= this.dataService.getTicketData(); 
    console.log(this.ticketData.frm2Data);

    this.frm2Data = JSON.stringify(this.ticketData.frm2Data)
   }

}
