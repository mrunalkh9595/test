import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-compare-table',
  templateUrl: './compare-table.component.html',
  styleUrls: ['./compare-table.component.scss']
})
export class CompareTableComponent implements OnInit {
  displayedColumns = ['srno','thumbnailUrl', 'id', 'title', 'url'];
  dataSource = new MatTableDataSource();
  @Input() compareList:string[];

  constructor() { } 
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.dataSource = new MatTableDataSource(this.compareList);
  }
  ngOnInit(): void {

  }

}
