import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeVideoRoutingModule } from './youtube-video-routing.module';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { HttpClientModule } from '@angular/common/http';
import { ReaUpdDelVideoService } from './rea-upd-del-video.service';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    YoutubeVideoComponent,
    ModalComponent
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
