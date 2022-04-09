import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { }

  onSearch = (term: string): string => {
    return "I'm Wikipedia Search Result";
  }
}
