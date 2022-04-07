import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  @Input() data: any;
  openedItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }
  openAccordian = (i:number) => {
    if(i == this.openedItemIndex){
      this.openedItemIndex = -1;
      return;
    }
    this.openedItemIndex = i;
  }
}
