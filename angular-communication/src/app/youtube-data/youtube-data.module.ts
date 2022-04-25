import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeDataRoutingModule } from './youtube-data-routing.module';
import { YoutubeDataComponent } from './youtube-data/youtube-data.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddVideoService } from './add-video.service';


@NgModule({
  declarations: [
    YoutubeDataComponent
  ],
  imports: [
    CommonModule,
    YoutubeDataRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ], 
  providers: [AddVideoService]
})
export class YoutubeDataModule { }
