import { Component, Injectable } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wikipedia-search';

  pages = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm = (event: string) => {
    const result = this.wikipedia.onSearch(event).subscribe((response) => {
      this.pages = response.query.search;
      //console.log(this.pages)
    });
  }
}
