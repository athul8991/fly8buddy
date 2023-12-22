import { Component,OnInit,OnChanges, SimpleChanges} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private dataService:DataService,private route:Router){}

  objArray:any[]=[];
  date!:string;
  formData!:any;
  adnum!:number;
  chlidNum!:number;
  ngOnInit(): void {
    
    this.dataService.dataEmiter.subscribe((result)=>{

      this.formData=result.frmData;
      
      this.objArray = result.data;

      this.date=this.formData.departingDate;
    });
    
  }

  boockTicket(item:any){
    const data = {selectFlight:item}
    
    this.dataService.selctedFlight(data)

    this.route.navigate(['/fillForm']);
  }
}
