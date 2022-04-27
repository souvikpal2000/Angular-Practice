import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-play-video-modal',
  templateUrl: './play-video-modal.component.html',
  styleUrls: ['./play-video-modal.component.css']
})
export class PlayVideoModalComponent implements OnInit {

  @Input() videoId = '';
  @Output() sender = new EventEmitter();
  videoUrl: SafeUrl;

  constructor(private el: ElementRef, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    //console.log(this.videoId);
    this.videoUrl = this.sanitizer.bypassSecurityTrustUrl('https://www.youtube.com/embed/' + this.videoId);
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
  }

  closeVideo = () => {
    this.sender.emit();
  }
}
