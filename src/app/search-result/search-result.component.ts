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

  ngOnInit(): void {
    
    this.dataService.dataEmiter.subscribe((result)=>{
      // console.log(result);
      this.formData=result.frmData;
      this.objArray = result.data;
      this.date=this.formData.departingDate;
      console.log(this.objArray[0].totals.base)
    });
    
  }

  boockTicket(item:any,frmData:any){
    const data = {selectFlight:item,frmData:frmData}
    
    this.dataService.dataGet(data)

    this.route.navigate(['/fillForm']);
  }
}
