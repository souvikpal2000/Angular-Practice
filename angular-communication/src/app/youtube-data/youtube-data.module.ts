import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeDataRoutingModule } from './youtube-data-routing.module';
import { YoutubeDataComponent } from './youtube-data/youtube-data.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    YoutubeDataComponent
  ],
  imports: [
    CommonModule,
    YoutubeDataRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class YoutubeDataModule { }
