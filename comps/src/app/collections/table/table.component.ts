import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() header: string[]=[];
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
