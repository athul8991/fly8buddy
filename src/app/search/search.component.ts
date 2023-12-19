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

  // getSearchData(data:any){
  //   this.dataService.addData(data);
  //   this.router.navigate(['/searchresult'])

  // }

  getSearchData(frmData:any){
    this.dataService.fetchData(frmData);
    this.router.navigate(['/searchresult'])

  }
}
