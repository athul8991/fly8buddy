import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-table-left',
  templateUrl: './table-left.component.html',
  styleUrls: ['./table-left.component.css']
})
export class TableLeftComponent {
  @Input() tableData!:{IATACode:string,Name:string,Price:number}[];

}
