import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-kolcsonzok',
  templateUrl: './kolcsonzok.component.html',
  styleUrls: ['./kolcsonzok.component.css']
})
export class KolcsonzokComponent implements OnInit {
  kolcsonzok:any=[];

  constructor(private baseService:BaseService){}

  ngOnInit() {
      this.baseService.getJsonFile('Kolcsonzok.json').subscribe(data =>{
        this.kolcsonzok = data;
      })
  }

}
