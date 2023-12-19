import { Component,OnInit,OnChanges, SimpleChanges} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private dataService:DataService){}
  objArray:any[]=[];

  ngOnInit(): void {

    this.dataService.dataEmiter.subscribe((result)=>{
      this.objArray = result.data;
    })
    
  }
}
