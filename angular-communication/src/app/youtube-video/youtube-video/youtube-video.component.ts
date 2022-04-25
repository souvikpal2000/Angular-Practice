import { Component, OnInit } from '@angular/core';
import { ReaUpdDelVideoService } from '../rea-upd-del-video.service';
import { Youtube } from '../youtube';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {

  videos: Youtube[]=[];

  constructor(private service: ReaUpdDelVideoService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos = () => {
    this.service.getVideos().subscribe((response) => {
      this.videos = response;
    });
  }

  deleteVideo = () => {
    
  }
}
