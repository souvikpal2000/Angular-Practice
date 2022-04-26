import { Component, ElementRef, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/data.service';
import { ReaUpdDelVideoService } from '../rea-upd-del-video.service';
import { Youtube } from '../youtube';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {

  username = '';
  videos: Youtube[]=[];
  modal = false;
  type = '';
  id = '';

  constructor(private service: ReaUpdDelVideoService, private cookie: CookieService, private el: ElementRef) { }

  ngOnInit(): void {
    if(this.cookie.get("username")){
      this.username = this.cookie.get("username");
    }
    this.getVideos();
  }

  getVideos = () => {
    this.service.getVideos().subscribe((response) => {
      this.service.videos = response;
      this.videos = response;
    });
  }

  checkLength = () => {
    this.videos = this.service.videos;
    if(this.service.videos.length == 0){
      return false;
    }else{
      return true;
    }
  }

  deleteVideo = (id: string) => {
    //console.log(id);
    this.service.deleteVideo(id).subscribe((response) => {
      console.log(response);
    });
    const index = this.service.videos.findIndex((video:any) => {
      return video.id === id;
    })
    this.service.videos.splice(index,1);
  }

  openModal = (type: string, id: string) => {
    this.type = type;
    this.id = id;
    this.modal = true;
  }

  closeModal = () => {
    this.modal = false
  }
}
