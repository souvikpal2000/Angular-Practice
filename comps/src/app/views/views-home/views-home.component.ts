import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stats = [
    {value: "22", label: "Number of Tourist"},
    {value: "900", label: "Revenue"},
    {value: "50", label: "Reviews"}
  ]

  items = [
    {
      image: "assets/1018-3914x2935.jpg",
      title: "Mountains",
      description: "They usually have steep, sloping sides and sharp or rounded ridges, and a high point, called a peak or summit."
    },
    {
      image: "assets/1016-3844x2563.jpg",
      title: "Ridges",
      description: "A long, narrow hilltop, mountain range, or watershed."
    }
  ]
}
