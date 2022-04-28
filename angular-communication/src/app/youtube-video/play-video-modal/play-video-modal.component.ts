import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-play-video-modal',
  templateUrl: './play-video-modal.component.html',
  styleUrls: ['./play-video-modal.component.css']
})
export class PlayVideoModalComponent implements OnInit {

  @Input() videoId = '';
  @Output() sender = new EventEmitter();
  videoUrl: any;

  constructor(private el: ElementRef, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    //console.log(this.videoId);
    const url = 'https://www.youtube.com/embed/' + this.videoId + "?autoplay=1";
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    document.body.appendChild(this.el.nativeElement);
    return;
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
  }

  closeVideo = () => {
    this.sender.emit();
  }
}
