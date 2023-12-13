import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-right',
  templateUrl: './table-right.component.html',
  styleUrls: ['./table-right.component.css']
})
export class TableRightComponent {
  @Input() tableData!:{IATACode:string,City:string}[]

}
