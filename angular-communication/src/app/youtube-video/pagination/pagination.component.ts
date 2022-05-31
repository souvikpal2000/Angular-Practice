import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ReaUpdDelVideoService } from '../rea-upd-del-video.service';
import { Youtube } from '../youtube';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {

  videos: Youtube[]=[];
  
  currentPage = 0;
  start = this.currentPage + (this.currentPage * 3);
  end = this.currentPage + 2;

  @Output() sender = new EventEmitter();

  @Input() query = '';

  constructor(private service: ReaUpdDelVideoService) { }

  // ngOnInit(): void {
  //   this.videos = this.service.videos;
  //   //console.log(this.filteredData)
  // }

  ngOnChanges(changes: SimpleChanges) {
    this.videos = this.service.videos;
    this.currentPage = 0;
    this.start = this.currentPage + (this.currentPage * 3);
    this.sender.emit(this.start);
    if(this.videos.length == 0){
      this.videos = [];
      return;
    }
    if(!this.query){
      this.videos = this.videos;
      return;
    }
    this.query = this.query.toLowerCase();
    this.videos = this.videos.filter((data) => {
      return JSON.stringify(data).toLowerCase().includes(this.query);
    });
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
    if(i < Math.ceil(this.videos.length/3)){
      return true;
    }
    return false;
  }
  checkLast = () => {
    if(this.currentPage < Math.ceil(this.videos.length/3)-1){
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
    this.start = (this.currentPage * 3);
    this.sender.emit(this.start);
  }
}
