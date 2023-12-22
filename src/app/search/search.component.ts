import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private dataService : DataService,private router:Router){}

  getSearchData(frmData:any){
    frmData.dateNow = new Date();
    this.dataService.fetchData(frmData);
    // this.dataService.getData(frmData); 
    this.router.navigate(['/searchresult'])
  }

}
