import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReaUpdDelVideoService } from '../rea-upd-del-video.service';
import { Youtube } from '../youtube';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  videos: Youtube[]=[];
  
  currentPage = 0;
  start = this.currentPage + (this.currentPage * 3);
  end = this.currentPage + 2;

  @Output() sender = new EventEmitter();

  constructor(private service: ReaUpdDelVideoService) { }

  ngOnInit(): void {
    this.videos = this.service.videos;
  }

  prevPage = () => {
    this.currentPage = this.currentPage - 1;
    this.start = (this.currentPage * 3);
    this.sender.emit(this.start);
  }
  nextPage = () => {
    this.currentPage = this.currentPage + 1;
    this.start = (this.currentPage * 3);
    this.sender.emit(this.start);
  }
  changePage = (i:number) => {
    this.currentPage = i;
    this.start = (this.currentPage * 3);
    this.sender.emit(this.start);
  }
  showNumber = (i:number) => {
    if(i < Math.ceil(this.service.videos.length/3)){
      return true;
    }
    return false;
  }
  checkLast = () => {
    if(this.currentPage < Math.ceil(this.service.videos.length/3)-1){
      return false;
    }
    return true;
  }
  checkWindow = (i:number) => {
    return Math.abs(this.currentPage - i) < 2
  }

  jumpToFirst = () => {
    this.currentPage = 0;
    this.start = (this.currentPage * 3);
    this.sender.emit(this.start);
  }

  jumpToLast = () => {
    this.currentPage = Math.ceil(this.videos.length/3) - 1;
    console.log
    this.start = (this.currentPage * 3);
    this.sender.emit(this.start);
  }
}
