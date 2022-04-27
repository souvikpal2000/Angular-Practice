import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReaUpdDelVideoService } from '../rea-upd-del-video.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() videoId = '';
  title = '';
  type = '';
  description = '';
  @Output() sender = new EventEmitter();

  constructor(private el: ElementRef, private service: ReaUpdDelVideoService) { }

  ngOnInit(): void {
    //console.log(this.service.videos);
    const index = this.service.videos.findIndex((video:any) => {
      return video.id === this.videoId;
    });
    this.title = this.service.videos[index].title;
    this.type = this.service.videos[index].type;
    this.description = this.service.videos[index].description;

    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy():void{
    this.el.nativeElement.remove();
  }

  closeModal = () => {
    this.sender.emit();
  }

  updateVideoData = (form: NgForm, videoId: string) => {
    //console.log(videoId);
    //console.log(form.value);

    const index = this.service.videos.findIndex((video:any) => {
      return video.id === videoId;
    });
    this.service.videos[index].title = form.value.title;
    this.service.videos[index].type = form.value.type;
    this.service.videos[index].description = form.value.description;

    this.service.updateVideo(videoId, form.value.title, form.value.type, form.value.description).subscribe((response) => {
      console.log(response);
    })

    this.sender.emit();
  }
}
