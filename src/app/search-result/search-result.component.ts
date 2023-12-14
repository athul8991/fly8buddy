import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  array:string[] =[]

  constructor(private dataService:DataService){}

  ngOnInit(): void {
   

    this.dataService.dataEmiter.subscribe(data=>{
      console.log(data);
    })
    
  }

}
