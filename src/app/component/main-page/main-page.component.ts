import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {PhotoCompareService} from '../../service/photoCompare/photo-compare.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  photoList =[];
  compareList = [];
  displayedColumns = ['srno','thumbnailUrl', 'id', 'title', 'url'];
  dataSource = new MatTableDataSource();
  constructor(public photoService : PhotoCompareService) { }
  dem = [];

  ngOnInit(): void {
    this.photoService.photoList().subscribe( (res:any)=>{
      const d = res.map(v => ({...v, isCompare: false}))
     console.log(d);
      if(res != null ){
        this.photoList = d;
      } else {

      }

    }, (error:any)=>{

    });
  }
  
  remove(e){
    console.log(e);
    
    this.compareList= this.compareList.filter(x => {
      return x.id != e.id;
    })
    this.compareList.slice();
    this.tablelits(this.compareList);
  }

  compare(e){
    this.compareList.push(e);
    this.dem = [...this.compareList];
    this.tablelits(this.compareList);
  }

  tablelits(data){
    this.dem = data;
    console.log(this.dem);

    // this.dataSource = new MatTableDataSource(data);
  }

}
