import { Component,ElementRef,OnInit,ViewChild} from '@angular/core';
import { DataService } from '../data.service';
import { PdfService } from '../pdf.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @ViewChild('ticket',{static:true})ticket!:ElementRef;

  ticketData:any;
  passengerDetails:any;
  price!:number;
  seviceCharge!:number;
  fuelOrInsur!:number;
  gst!:number;
  total!:number;
  pnrId!:string;
  constructor( private dataService:DataService,private pdfService:PdfService){

  }

  ngOnInit(): void {
    this.ticketData= this.dataService.getTicketData(); 
    console.log(this.ticketData);
    console.log("price",this.ticketData.flightDetails.selectFlight.price);
    
    this.price = Math.floor(this.ticketData.flightDetails.selectFlight.price);

    console.log("price ",this.price);

    this.seviceCharge = Math.floor((this.price/100)*5);
    this.fuelOrInsur = Math.floor((this.price/100)*8);
    this.gst = Math.floor((this.price/100)*11);
    this.total = this.price + this.seviceCharge+this.fuelOrInsur+this.gst;
    this.passengerDetails= JSON.stringify(this.ticketData.passengerDetails);
    this.pnrId =this.generatePnr(10); 
   }

   generatePnr(length:number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
    let randomId = '';
    for (let i = 0; i < length; i++) {   
      const randomIndex = Math.floor(Math.random() * characters.length);   
      randomId += characters.charAt(randomIndex);
    }
    return randomId;
  }

  ticketToPdf(){
    this.pdfService.generatePDF(this.ticket.nativeElement,`TIcket-${this.ticketData.flightDetails.selectFlight.depDate}`)
  }

}
