import { Component,OnInit,OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  
  flag =false;
 objArray=[{flightName:'kfdnjnfdj'}];
 url = 'http://127.0.0.1:3000'
 formData!:any[];
  // private dataSubscription !: Subscription 
  constructor(private dataService:DataService,private http:HttpClient){ 
    
  }

  ngOnInit(): void {

    this.dataService.dataEmiter.subscribe(data=>{
      console.log(data);
    });
      
      this.http.post<any>(this.url,this.formData).subscribe({
        next:(data)=>{
          console.log(data.data);
          this.objArray =data.data;
          
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    




  }

  getData(getDat:any){
    console.log(getDat);
    
    this.objArray = getDat;
  }

  // ngOnDestroy(): void {
  //   if(this.dataSubscription){
  //     this.dataSubscription.unsubscribe()
  //   }
  // }

}




// ##################################



// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { DataService } from '../data.service';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-search-result',
//   templateUrl: './search-result.component.html',
//   styleUrls: ['./search-result.component.css']
// })
// export class SearchResultComponent implements OnInit, OnDestroy {

//   objArray: string[] = [];
//   private dataSubscription!: Subscription;

//   constructor(private dataService: DataService) {}

//   ngOnInit(): void {
//     this.dataSubscription = this.dataService.dataEmiter.subscribe(data => {
//       this.dataService.checkFlight(data).subscribe({
//         next: (dt) => {
//           if (dt.message === 'success') {
//             console.log(dt.data);
//           } else {
//             console.log(dt.message);
//           }
//         },
//         error: (err) => {
//           console.log(err);
//         }
//       });
//     });
//   }

//   ngOnDestroy(): void {
//     if (this.dataSubscription) {
//       this.dataSubscription.unsubscribe();
//     }
//   }
// }
