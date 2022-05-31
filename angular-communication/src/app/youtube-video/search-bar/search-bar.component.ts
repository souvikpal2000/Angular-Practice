import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  query = '';
  @Output() sender = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeInput = (value: Event) => {
    this.query = (value.target as HTMLInputElement).value;
    this.sender.emit(this.query);
  }
}
