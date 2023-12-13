import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataArray:{IATACode:string,Name:string,Price:number}[]=[
    {IATACode:'IB',Name:'Iberia',Price:10,},
    {IATACode:'BA',Name:'British Airways',Price:15},
    {IATACode:'LH',Name:'Lufthansa',Price:7},
    {IATACode:'FR',Name:'Ryanair',Price:20},
    {IATACode:'VY',Name:'Vueling',Price:10},
    {IATACode:'TK',Name:'Turkish Airlines',Price:5},
    {IATACode:'U2',Name:'Easyjet',Price:19.9},
  ]

  cityArray:{IATACode:string,City:string}[]=[
    {IATACode:'MAD',City:'Madrid'},
    {IATACode:'BCN',City:'Barcelona'},
    {IATACode:'LHR',City:'London'},
    {IATACode:'CDG',City:'Paris'},
    {IATACode:'FRA',City:'Frakfurt'},
    {IATACode:'IST',City:'Istambul'},
    {IATACode:'AMS',City:'Amsterdam'},
    {IATACode:'FCO',City:'Rome'},
    {IATACode:'CPH',City:'Copenhagen'}
  ]
  
  
}
