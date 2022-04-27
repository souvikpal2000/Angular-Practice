import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeVideoRoutingModule } from './youtube-video-routing.module';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { HttpClientModule } from '@angular/common/http';
import { ReaUpdDelVideoService } from './rea-upd-del-video.service';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { PlayVideoModalComponent } from './play-video-modal/play-video-modal.component';


@NgModule({
  declarations: [
    YoutubeVideoComponent,
    ModalComponent,
    PlayVideoModalComponent
  ],
  imports: [
    CommonModule,
    YoutubeVideoRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ReaUpdDelVideoService]
})
export class YoutubeVideoModule { }
