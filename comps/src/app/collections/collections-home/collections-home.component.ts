import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  header = ['Name', 'Company', 'Salary'];

  obj1 = new Data("Souvik Pal", "IBM", "4.5LPA");
  obj2 = new Data("Shreya Ghosal", "Capgemini", "5LPA");
  obj3 = new Data("Saranya Roy", "Cognizant", "6.5LPA");
  data = [this.obj1, this.obj2, this.obj3];

  constructor() { }

  ngOnInit(): void {
  }


}
