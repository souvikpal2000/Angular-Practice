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
    const description = form.value.description;

    const str = "https://youtu.be/";
    const length = str.length;
    const videoId = url.substring(length);
    const apiKey = "AIzaSyDN4qiUmte8dl-561nTdFGFQJbAxavHCFA";

    const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`);
    const data = await res.json();
    
    const channelName = data.items[0].snippet.channelTitle;
    const videoTitle = data.items[0].snippet.title;
    const thumbnail = data.items[0].snippet.thumbnails.high.url;
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
