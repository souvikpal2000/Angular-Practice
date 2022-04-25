import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeVideoRoutingModule } from './youtube-video-routing.module';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { HttpClientModule } from '@angular/common/http';
import { ReaUpdDelVideoService } from './rea-upd-del-video.service';


@NgModule({
  declarations: [
    YoutubeVideoComponent
  ],
  imports: [
    CommonModule,
    YoutubeVideoRoutingModule,
    HttpClientModule
  ],
  providers: [ReaUpdDelVideoService]
})
export class YoutubeVideoModule { }
