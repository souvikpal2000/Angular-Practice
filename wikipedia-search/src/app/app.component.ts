import { Component, Injectable } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Injectable({providedIn:"root"})
class Car{
  color = "red";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wikipedia-search';

  constructor(private wikipedia: WikipediaService, private car: Car) {}

  onTerm = (event: string) => {
    const result = this.wikipedia.onSearch(event);
    console.log(result+" "+this.car.color);
  }
}
