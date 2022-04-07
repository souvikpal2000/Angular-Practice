import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals-home',
  templateUrl: './modals-home.component.html',
  styleUrls: ['./modals-home.component.css']
})
export class ModalsHomeComponent implements OnInit {

  modalOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick = (event: boolean) => {
    this.modalOpen = event;
  }

  accordian = [
    {
      title: "Why is the sky blue?",
      content: "Because of air"
    },
    {
      title: "What does the orange taste like?",
      content: "Like an orange"
    }
  ]
}
