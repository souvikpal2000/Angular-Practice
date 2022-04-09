import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  term = '';
  @Output() sender = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onInput = (event: Event) => {
    this.term = (event.target as HTMLInputElement).value;
  }

  onFormSubmit = (event: Event) => {
    event.preventDefault();
    this.sender.emit(this.term);
  }
}
