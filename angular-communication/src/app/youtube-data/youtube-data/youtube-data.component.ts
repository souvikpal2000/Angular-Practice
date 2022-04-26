import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AddVideoService } from '../add-video.service';
import { Youtube } from '../youtube';

@Component({
  selector: 'app-youtube-data',
  templateUrl: './youtube-data.component.html',
  styleUrls: ['./youtube-data.component.css']
})
export class YoutubeDataComponent implements OnInit {

  alertMessage = '';
  status = '';

  constructor(private cookie: CookieService, private router: Router, private service: AddVideoService) { }

  ngOnInit(): void {
    if(this.cookie.get("username") !== "admin"){
      this.router.navigate(['/home']);
    }
  }

  onSubmit = async (form: NgForm) => {
    const url = form.value.url;
    const type = form.value.type;
    let videoId = '';
    if(url.includes("https://youtu.be/")){
      const str = "https://youtu.be/";
      const length = str.length;
      videoId = url.substring(length);
    }
    else if(url.includes("https://www.youtube.com/watch?v=")){
      const str = "https://www.youtube.com/watch?v=";
      const length = str.length;
      videoId = url.substring(length);
    }
    else{
      this.alertMessage = "Please use Youtube Link";
      this.status = "red";
      return;
    }

    const apiKey = "AIzaSyDN4qiUmte8dl-561nTdFGFQJbAxavHCFA";

    const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`);
    const data = await res.json();
    
    const channelName = data.items[0].snippet.channelTitle;
    const videoTitle = data.items[0].snippet.title.substring(0,55) + " ...";
    const thumbnail = data.items[0].snippet.thumbnails.high.url;
    const description = data.items[0].snippet.description.substring(0,70) + " ...";

    const youtube = new Youtube(videoId, videoTitle, channelName, thumbnail, type, description);

    //console.log(youtube);

    this.service.addVideo(youtube).subscribe((response) => {
      if(response === "Video Added Successfully!!!"){
        this.alertMessage = response;
        this.status = "green";
      }else{
        this.alertMessage = response;
        this.status = "red";
      }
    })

    form.reset();
  }

  closeMessage = () => {
    this.alertMessage = '';
  }
}
