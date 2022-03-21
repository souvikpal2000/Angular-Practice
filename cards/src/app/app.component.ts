import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';

  posts = [
    {
      title: "Neat Tree",
      url: "assets/tree.jpeg",
      username: "nature",
      content: "I saw this neat tree today"
    },
    {
      title: "Snowy Mountain",
      url: "assets/mountain.jpeg",
      username: "mountainlover",
      content: "Here is the picture of Snowy Mountain"
    },
    {
      title: "Mountain Biking",
      url: "assets/biking.jpeg",
      username: "biking",
      content: "I did some hiking today"
    },
    {
      title: "Mountain Biking",
      url: "assets/biking.jpeg",
      username: "biking",
      content: "I did some hiking today"
    }
  ]
}
